---
layout: post
title: Microsecond-Level Time Synchronization on CloudLab
date: 2025-03-15 21:20:00-0400
description: for reliable jaeger tracing
tags: technical computer-systems
categories: 
giscus_comments: false
related_posts: false
toc:
  beginning: false
---


Ever tried to run distributed experiments only to have your Jaeger traces and results ruined by out-of-sync time? Yeah, been there! After banging my head against this problem for a while, I finally found a simple solution to get microsecond-level time synchronization between [CloudLab](https://cloudlab.us/) machines. Let me walk you through it!


## The Problem: Internet NTP Is Too Slow

When you setup up [CloudLab](https://cloudlab.us/) machines, they're configured to sync their time with Internet NTP servers. Sounds great, but there's a problem - it leads to significant millisecond-level time differences between machines that are synchronizing with that internet NTP server.

Let's start by measuring time difference on a 2-machine setup. I'll be using **_chrony_** - an NTP tool; so first, let's install chrony on both machines:
```
sudo apt-get update
sudo apt-get install chrony
```

Now, to measure the time difference, run the following command on machines:
```
chronyc tracking
```

Images below show the output of the command on both machines:
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html loading="eager" path="assets/img/time-sync/initial-skew-measurement-0.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html loading="eager" path="assets/img/time-sync/initial-skew-measurement-1.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<!-- <div class="caption">
    Logical block diagrams of proposals for verification-aware training
</div> -->

<!-- ![Initial skew measurement on Machine 0](initial-skew-measurement-0.png) -->
There are a lot of numbers in the images above, but the most important ones for us are _Last Offset_ and _RMSE Offset_. 
Last offset reports the last measured time difference between our machine and the reference machine. 
RMSE offset reports the root mean squared time difference between our machine and the reference machine over a period of time. 

For node-0, the last offset is 20.3 μs and RMSE offset is 490 μs. For node-1,  both the last offset and RMSE offset values are 2.36 ms!
This means the time difference between both machines is also in the order of a millisecond. While this might sound small, it is a huge problem when dealing with microservice application where each service takes only 100s of microseconds. A time difference of a milliseond can lead to useless and garbage Jaeger traces which do not facilitate debugging or performance analysis. 

So, let's see what is this authoritaive time source server that our machine is talking to. Take a peek at in `/etc/chrony/chrony.conf`, you'll see some lines like these:
```
pool ntp.ubuntu.com        iburst maxsources 4
pool 0.ubuntu.pool.ntp.org iburst maxsources 1
pool 1.ubuntu.pool.ntp.org iburst maxsources 1
pool 2.ubuntu.pool.ntp.org iburst maxsources 2
```

These lines tell chrony to synchronize your machine's time with time from one of the following sources: `ntp.ubuntu.com `, `0.ubuntu.pool.ntp.org`, `1.ubuntu.pool.ntp.org` and `2.ubuntu.pool.ntp.org`. 

`ntp.ubuntu.com` is the official Ubuntu NTP server while `*.ubuntu.pool.ntp.org` are servers part of the [NTP Pool Project](https://www.ntppool.org/en/). More importantly, all these authoritative time sources are accessible on the internet and are not locally located with your cluster. This results in longer communication times between your machines and internet NTP server, which can degrade time synchronization. You can also see this in the images above. _Root Delay_ measures the total round-trip network delay between your machine and the NTP server.  The root delay on node-0 is 46ms while on node-1 it is 24.5ms. Having millisecond level root delays makes it harder to achieve microsecond level time synchronization. So what do we do?




## The Solution: Local Time Server
Here's the simple and obvious trick: instead of having all your machines sync with Internet NTP servers, designate one machine as the local time server and have the others sync with it. This avoids the internet access latency, lowers your root delay and dramatically improves time synchronization.

Here, I'm going to designate node-0 as my local time server and synchronize node-1's time with my local node-0 time server. Here's how to set it up:

On the machine you want to use as your time server (I chose node-0), modify its  `/etc/chrony/chrony.conf` like this:
```
#pool ntp.ubuntu.com        iburst maxsources 4
#pool 0.ubuntu.pool.ntp.org iburst maxsources 1
#pool 1.ubuntu.pool.ntp.org iburst maxsources 1
#pool 2.ubuntu.pool.ntp.org iburst maxsources 2

local stratum 10

allow 10.10.1.2
```
Here I've commented out lines asking chrony to sync time with internet NTP servers. The `local stratum` line makes node-0 act as a time server now. The number following it can be any number greater than 0. The `allow <ip>` line allows the machine with the given ip to use this server as it's time server. In my setup 10.10.1.2 was the ip of node-1 so this line allows node-1 to use node-0 as a time server. 


On the machines who should be using this new local time server (node-1 in my case), modify the `/etc/chrony/chrony.conf` like this:
```
#pool ntp.ubuntu.com        iburst maxsources 4
#pool 0.ubuntu.pool.ntp.org iburst maxsources 1
#pool 1.ubuntu.pool.ntp.org iburst maxsources 1
#pool 2.ubuntu.pool.ntp.org iburst maxsources 2

# default minpoll 6 maxpoll 10
server 10.10.1.1 iburst prefer minpoll 4 maxpoll 6
```

Here, again I've commented out lines asking chrony to sync time with internet NTP servers.
The `server <ip> iburst prefer` line specifies the ip of the time server your machine should use. The `minpoll 4 maxpoll 6` part of the line is not necessary. It sets the minimum polling period to $2^{4} = 16$ s and maximum polling period to $2^{6} = 64$ s.

After modifying the files, to apply your changes, you'll need to restart chrony:
```
systemctl restart chrony
```

Having made these changes, I got dramatically better time synchronization. The images below show output of `chronyc tracking` after the modifications:
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html loading="eager" path="assets/img/time-sync/final-skew-measurement-0.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html loading="eager" path="assets/img/time-sync/final-skew-measurement-1.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>


Now, for node-0, you'll see that all metrics are 0, since it is now our authoritative time server. On node-1, you see that root delay decreased significantly - from 24.5ms to 70μs! This is because now the time server is locally situated. This decrease in root delay also helps time synchronization. The RMSE offset from 2.4ms to 2.5μs! This new time difference which is in order of a few microseconds is sufficient for getting reliable Jaeger traces for microservice applications!


Hence, setting up one machine as a local time server, we dramatically improved clock synchronization between our [CloudLab](https://cloudlab.us/) machines. This approach might not be the best approach is you want precision in absolute time reporting, however, it is perfect for most distributed systems experiments where time difference between machines is critical.

The best part? It's super easy to set up. Just a few config file tweaks, and you're on your way to microsecond-level time synchronization!


Here are the full `/etc/chrony/chrony.conf` config files if you are interested:
- [Initial config file for node-0](https://varungohil.github.io/assets/img/time-sync/initial-chrony-conf-0.txt)
- [Initial config file for node-1](https://varungohil.github.io/assets/img/time-sync/initial-chrony-conf-1.txt)
- [Modified config file for node-0](https://varungohil.github.io/assets/img/time-sync/final-chrony-conf-0.txt)
- [Modified config file for node-1](https://varungohil.github.io/assets/img/time-sync/final-chrony-conf-1.txt)
---
layout: page
title: META
use-site-title: true
---

Handheld devices are becoming increasingly common in
today’s world. With every passing year, the diversity of applications (apps) being supported by mobile platforms is
growing manyfold. In addition, Android, the most popular
handheld OS in the market is releasing a new version every
year, with a newer and richer set of APIs, enabling the next
generation of feature-rich applications.To support these apps, hardware requirements of these devices are increasing rapidly. Mobile SoCs need a larger number of faster cores, better GPUs and above all, higher DRAM
capacities to do justice to user experience.<br>

Despite the growing importance of these devices, and
the numerous challenges being faced for architecting these,
there is a significant lack of research in this domain. A recent report compared the number of papers published
in leading conferences that have focused on exploration of
mobile systems, and found the number to be significantly
lacking, as compared to server architecture papers. We belive this is due to lack of diverse, easy-to-use and well maintained tools.
The current state of the art simulation tools in the handheld
SoC space rely on full system simulators which suffer from
multiple drawbacks. The primary ones being as follows:
- Existing tools can simulate relatively older versions of Android.Using older OS versions results in experimentation
with older versions of apps, which means that the design
space is being explored for older applications, and not the
contemporary or future ones.
- Full system simulators are very slow compared to
native execution

We present META, a
trace based tool for facilitating the exploration of memory hierarchies in mobile devices. META uses an enhanced version
of Android emulator for generating raw instruction traces.
These traces are then fed into a cache hierarchy and memory
simulation modules to carry out design space exploration
for a wide variety of apps and memory technologies.

![META Block Diagram](/img/proj/meta/meta_block_model.png)


[![Video](http://img.youtube.com/vi/hIOYD5gAUdk/0.jpg)](http://www.youtube.com/watch?v=hIOYD5gAUdk)

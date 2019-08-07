---
layout: page
title: META
subtitle: Memory Exploration Tool for Android devices
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
lacking, as compared to server architecture papers. We belive this is due to lack of diverse, easy-to-use and well maintained simulation tools.
The current state of the art simulation tools in the handheld
SoC space rely on full system simulators which suffer from
multiple drawbacks, the primary ones being:
- Existing tools can simulate relatively older versions of Android.Using older OS versions results in experimentation
with older versions of apps, which means that the design
space is being explored for older applications, and not the
contemporary or future ones.
- Full system simulators are very slow compared to
native execution

We present META - Memory Exploration Tool for Android devices, which focuses on quick and comprehensive exploration of memory heirarchies in handheld devices. META is compatible with all Android OS versions and can also simulate emerging non-volatile memory technologies. The design of META can be seen in figure below.

![META Block Diagram](/img/proj/meta/meta_block_model.png)

META is trace based tool built on top of Android Emulator, shipped with
the Android Open Source Project (AOSP). This emulator, is
built using a modified version of the QEMU emulator. QEMU and AOSP were chosen because this
combination serves the intent of designing this tool - quick
compatibility with future versions of Android. The emulator
works on Android Virtual Device (AVD), which describes
the hardware profile, system image, storage areas etc. of
the device being simulated. For future compatibility, newer
AVDs will have to be provided, which are typically shipped
with Android Studio, making the integration much smoother.
We have modified the QEMU code shipped with AOSP
to generate instruction level traces of the complete system,
including the app being executed. These traces are then post
processed via a cache module and the NVMain main memory simulator for
understanding the application’s memory behavior, as well as
exploring the range of memory architectures using DRAM
and NVMs. 

Prof. Manu recently gave a talk involving META at the [SDC SNIA India conference](https://www.snia.org/events/sdcindia/agenda2019). 
<iframe width="560" height="315" src="https://www.youtube.com/embed/hIOYD5gAUdk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The initial prototype of META for presented at [MobiCom 2018](https://sigmobile.org/mobicom/2018/). <br>
You can find the resources here : <a href = "/docs/pubs/META.pdf">Paper</a>, <a href = "https://docs.google.com/presentation/d/1BJonBRxkPjMUGhd_4CiFOFjjnG64ieMqjCokuaHfrkA/edit?usp=sharing">Slides</a>, <a href = "/bibtexs/meta.bib">Bibtex</a>

META is currently being used at Prof. Manu's lab to perform analysis. More functionalities are also being added to META to support more in-depth analyses. If you want to contribute towards development of META feel free to contact me!  

**Current Team Members**
- [Nisarg Ujjainkar](https://github.com/nisarg-ujjainkar)
- [Deepraj Pandey](https://github.com/DeeprajPandey)
- [Manu Awasthi](https://www.cs.utah.edu/~manua/)

**Past Team Members**
- [Nisarg Parikh](https://www.linkedin.com/in/nisargnparikh)

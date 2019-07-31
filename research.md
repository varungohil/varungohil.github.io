---
layout: page
title: Research Projects
use-site-title: true
---

- [**Memory Exploration Tool for Handheld Devices**](/proj_pages/meta.md)<br>
**Advisor**: [_Prof. Manu Awasthi_](https://www.cs.utah.edu/~manua/)<br>
Few tools exist to carry out architectural design space exploration of
main memory hierarchies featuring emerging non-volatile memory technologies for newer Android and app versions. In this project I developed META, a
trace based tool for facilitating the exploration of memory hierarchies in mobile devices. META uses an enhanced version
of Android emulator for generating raw instruction traces.
These traces are then fed into a cache hierarchy and memory
simulation modules to carry out design space exploration
for a wide variety of apps and memory technologies.

- **Characterization of Contemporary Benchmarks**<br>
**Advisor**: [_Prof. Manu Awasthi_](https://www.cs.utah.edu/~manua/)<br>
In this project, we characterize four contemporary benchmarks - SPEC CPU 2017, PARSEC 3, SPLASH 3 and OpenBLAS using Intel Pin. We present the design and implementation of FAB - a framework built with Pin and Python based workflow which allows user-driven analysis of benchmarks across multiple axes like instruction distributions, types of instructions, memory accesses etc. through an
interactive Python interface to check for desired characteristics,
across multiple benchmark suites. 

- **Architectural Considerations for Posit Arithmetic**<br>
**Advisor**: [_Dr. Farhad Merchant_](https://www.ice.rwth-aachen.de/nc/institute/staff/postdoctoral-reseachers/farhad-merchant/) _and_ [_Prof. Manu Awasthi_](https://www.cs.utah.edu/~manua/)<br>
Posit arithmetic is proposed as an alternative to IEEE 754 floating point arithmetic due to its greater accuracy, speed and simpler hardware design. 
We carry out the first of its kind analysis trying to figure out the  performance and energy benefits of deploying posit arithmetic via 
characterization of contemporary workloads. We combine ASIC 
synthesis results for posit-arithmetic compliant circuits with metrics derived from workload characterization
to discuss ways in which architects can leverage benefits of posit
units to find sweet spots in the tradeoffs between FPU die area, FPU 
energy consumption, dynamic range and precision of computation results. 

- **Optimizing the Autonomous Driving System**<br>
**Advisor**: [_Prof. Rajeev Balasubramonian_](http://www.cs.utah.edu/~rajeev/)<br>
Architecting autonomous driving systems is challenging due to strict performance requirements of making functionally correct decisions always by processing incoming frames with low latency to ensure safety.  Furthermore these systems  need  to  operate  with  low  power  consumption  to  prevent  reduction  in  fuel  efficiency and driving range of the vehicle. I implement an end-to-end autonomous driving system for facilitating further research in the field. I also propose modifications to the system based on my insights, which might result in significant reduction in computation and power consumption. Currently the proposed optimizations are being evaluated.

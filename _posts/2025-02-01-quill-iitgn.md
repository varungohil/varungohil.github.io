---
layout: post
title: Quill-IITGN interview
date: 2025-02-01 05:53:00
description: Answers FAQs about my undergraduate career.
redirect: https://docs.google.com/document/d/1cb_LAR3_T1VpCDyMtNczdO7xIVFAfPB2Mg-m7LOBM3s/edit?usp=sharing
---

Quill IITGN Interview - Varun Gohil:

Could you share some formative experiences from your time at IITGN that inspired or influenced your decision to pursue a PhD at MIT?
Ans: 
Reflecting back, it's difficult to point to singular moments that led me to pursue a PhD. Rather, it was a process of discovering the intersection of "things I enjoyed doing" and "things I was good at.”


Fortunately, I discovered research lay in that intersection for me quite early on and this was reinforced by several experiences. SRIP gave me my first taste of research, my internship at University of Utah exposed me to international research standards, and working as a TA with Prof. Nipun Batra helped me discover that I enjoy teaching - all key aspects of academic life. But equally important were the experiences that showed me what wasn't the right fit. I tried my hand at entrepreneurship, took leadership roles in student organizations (Amalthea and Election Commission), and explored conventional software development. While valuable experiences, I either didn't excel at these activities or simply didn't enjoy them as much as research.


I think the most significant impact was made by having regular interactions with my excellent peer group (shoutout to Shreyas, Ritik, Sagar, Kshitij, Nisarg and Akhil). Not all of them wanted to end up as researchers, however, they all have qualities I admire which I have tried to imbibe. 


Looking back, it was really this process of trial and error - trying different things, failing at some, succeeding at others - that helped me realize that pursuing a PhD was the right choice for me.


How did you first get interested in computer architecture? What role did your SRIP experience on mobile computer architecture play in shaping your career path?
Ans:
My first interaction with computer architecture was during the Computer Architecture course taught by Prof. Manu Awasthi. What got me hooked was how tangible it felt. Unlike prior courses which talked about abstract concepts like data structures, I could disassemble my laptop and see the actual processor chip and DRAM DIMMS we were studying in the course. Having enjoyed the course, I interned with Prof. Awasthi during SRIP which first introduced me to research.

The SRIP experience had two significant impacts on my career path. First, it helped me discover that research was something I not only enjoyed but showed aptitude for. This realization made me start considering research as a potential long-term career rather than just a summer activity. Second, our work was accepted as a poster at a prestigious conference, which provided external validation of my research abilities. This early success helped build my confidence and strengthened my profile, allowing me to pursue more research opportunities later on.

Reflecting on your undergraduate projects at IITGN, such as approximate computing, neural network compression, and hybrid memory systems, how did these prepare you for your current research?
Ans:
Looking back at my undergrad research projects, what's funny is that I don't actually use much of that technical knowledge in my current work. But working on those projects was not a waste of time - they taught me how to approach complex research problems. I worked on all sorts of things, from approximate computing to neural networks, and not everything worked out perfectly. But that's exactly what helped me build confidence to take on high-risk problems during my PhD. 
Further, I collaborated with a large set of people across the projects I pursued. Collaborating broadly exposed me to a diverse array of working styles, and I have picked up good working habits from my collaborators which continue to serve me well till date. 


Could you explain your current research in simple terms for readers who may not be familiar with the field?
Ans: My work has two main research threads, both focused on making large datacenters run better. But first, let me explain what a datacenter is - imagine a massive warehouse filled with hundreds of thousands of computers (servers) all connected together. These datacenters power the internet services we use every day, from email to social media to cloud storage. So every time you search on Google or buy something on Amazon, the computation is run in one such datacenter. 

The first challenge I'm tackling is power management. With the rise of AI models like ChatGPT and many new applications, datacenters are consuming more electricity than they were designed to handle. This isn't just a cost problem - it's also a climate issue, especially when that power comes from non-renewable sources. My research focuses on finding ways to reduce this power consumption while keeping services running smoothly.

The second thread of my research deals with AI interpretability. When you have hundreds of thousands of servers, it’s cumbersome to manage them manually. So companies use AI models to help make decisions about things like which programs should run on which servers. However, when these AI models make mistakes, it's really hard to figure out why they made those decisions and how to fix them. Currently, the main solution is to retrain the entire model, which is expensive and time-consuming. I'm working on something called "mechanistic interpretability" - essentially trying to reverse-engineer these AI models and understand their decision-making process, so we can make targeted fixes when they make mistakes.


Machine learning is often seen as a "soft" computing domain, while computer systems are more rule-based and deterministic. How do you integrate ML models into computer systems tasks while ensuring the overall system remains reliable?
Ans: Great question! Maintaining overall system reliability for systems that use ML models is still very much an open challenge. Currently, at a high level, researchers are adopting two approaches: interpretability and predictability.

Interpretability focuses on answering the question, “Why does the model make a particular decision?” This is a vital step towards building trust and understanding in ML-based systems. One fascinating development here is mechanistic interpretability. For example, researchers have isolated specific neurons in large language models, like Claude, that represent concepts such as the Golden Gate Bridge. This means that if you wanted the model to forget about the Golden Gate Bridge, you could potentially modify or remove just that neuron, rather than retraining the entire model. While this is a promising approach, the growing complexity and size of models make this more challenging and most researchers view this approach as a long-term bet.

Predictability, on the other hand, takes a more pragmatic/relaxed approach by addressing “When does the model make a wrong decision?” This can be achieved with uncertainty estimators or out-of-distribution detectors, which are tools designed to flag situations where the model's predictions are likely unreliable. By proactively identifying these cases, systems can fall back on well-tested heuristics or deterministic methods, ensuring overall reliability even in the face of potential ML errors.

After your SRIP internship, you spent the summer of your third year interning at the University of Utah under Prof. Rajeev Balasubramonian. What advice would you give to IITGN students aspiring to intern at universities abroad?
Ans: Back when I was applying, most foreign internships were research-oriented. Something that helped me was getting my hands dirty with projects before applying. Try making significant contributions to some research or technical project. Having said that what is important is not just the work you do, but to really understand why you are doing it. Whether it's research or other technical projects, try to pick things you genuinely care about - it makes such a difference when you're discussing them in applications or interviews.

One thing I can't ignore from my experience - and I know this might not be what everyone wants to hear - is that CPI really did matter. The internship priority was pretty much tied to academic performance. That said, please don't let this discourage you if your CPI isn't exactly where you'd like it to be.

For internship programs like DAAD and MITACS you need a well-tailored CV with solid research experience and good academic achievements. Though I was rejected from these programs myself, I know many who were not, so don't let my experience discourage you from applying.


As someone who successfully navigated the graduate school application process, what advice would you offer to current IITGN students aiming for institutions like MIT?
Ans: I’ll speak specifically about PhD applications, as that's what I'm familiar with - I can't really comment on Master's programs as my experience there is limited.

The most crucial advice that my mentors gave me when applying was: “Choose an advisor over the school name”. PhD is a long-term commitment and your advisor will have more impact on your research journey than the school. Here's a personal example - I actually didn't apply to MIT initially! I chose Cornell because I wanted to work with my current advisor. When she later moved to MIT, I transferred with her.

Letters of recommendation are arguably the most crucial part of your application package. To get strong letters, I recommend spending multiple years engaging in research during your undergraduate studies. This serves two important purposes: it helps you understand if you truly enjoy research and what areas interest you most, while also allowing faculty to really get to know your capabilities and write detailed, compelling letters of support.

For me, the extended period I spent on research projects during my IITGN years not only helped me discover my interests but also led to strong letters that significantly strengthened my application. Remember, your letter writers need to speak specifically about your research abilities and potential - this kind of detailed insight only comes from sustained research engagement.

For students looking to pursue a Ph.D. after their bachelor's, there are typically two paths: either entering a Ph.D. program directly or pursuing an MS first and then transitioning to a Ph.D. What are your thoughts on these two approaches? Did you face any challenges due to the lack of a master's degree?
Ans: I have not faced any challenges in PhD because of not having a Master’s degree. 
The path you choose depends on your answers to the following two questions - are you confident about pursuing a research career, and is your research profile strong enough for PhD programs? While the second question is relatively straightforward to answer with help from professors, the first requires you to self reflect. 

If you're confident about pursuing research and have a solid research profile, going directly into a PhD program makes a lot of sense. It's the most direct path and saves you valuable time in starting your research career.

If you're committed to research but feel your profile needs strengthening, you have several options. While a master's degree is one path, I'd particularly recommend exploring research fellowship positions with professors or pre-doctoral programs at institutions like Google Research and Microsoft Research India. These options can be more valuable than a master's degree since they let you focus purely on research without course requirements.

Finally, if you are uncertain about committing to a research career, go for a master's program with the intention of utilizing any research opportunities that might be available.

When you’re not immersed in research, how do you spend your free time? Do you have any hobbies or pastimes you enjoy?
Ans:
My relationship with hobbies has changed quite a bit since my IITGN days. During undergrad, I was pretty much a textbook definition of an academic nerd - my closest thing to a hobby was reading books, and my friends would joke that my idea of entertainment was binge-watching research talk videos!

Things changed when I started grad school. I realized I needed activities to manage the stress that comes with PhD life, and honestly, the cold American weather kind of forced me to stay active just to keep warm! These days, you'll find me at the climbing gym or on beginner-level parkour routes.  And when I'm not being active, I enjoy more relaxed activities like making chalk art and brewing unusually flavored kombuchas. It's been a good change - turns out there's more to life than just research talks!

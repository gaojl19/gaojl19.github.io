---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am a first-year master student in the Robotics Institute at Carnegie Mellon University. My research interests include **Reinforcement Learning**, **Robotics**, and **Deep Learning**. Specifically, my research focuses on designing reinforcement learning algorithms that can be directly applied on real robots, either through sample-efficient learning methods or sim-to-real transfer/generalizations.

I am a highly motivated researcher and I have been enjoying research during my undergraduate years, and hope to spend my future years doing more significant and exciting research.

News
======
- I graduated from the Computer Science Department of Tsinghua University with a Bachelor's degree in engineering!
- Our paper "A Dual Representation Framework for Robot Learning with Human Guidance" is accepted by CORL'22
- I gave a talk at Stanford Vision & Learning Lab
- I became a visiting research intern at Stanford in July, 2022
- I became a Deep Learning Intern at Microsoft China in July, 2021
- Our paper "The Origin of CBRAM With High Linearity, ON/OFF Ratio, and State Number for Neuromorphic Computing" is accpeted at IEEE-TED, 2021

Projects
======
- Robot Learning with Text-to-Image Models
    - Explore the possibility of **utilizing the knowledge embedded in pre-trained text2image diffusion models to provide visual guidance for robot learning**, without any expert demonstrations or human-designed reward functions.
    - Propose a pipeline using image editing techniques to generate visual goals for example-based visual RL, and experiments in simulation and real-world validates the effectiveness of the proposed method.

- Dual Representation for Robot Learning under Human Guidance
    - Focus on designing **sample-efficient preference learning algorithms** that can achieve high performance in both oracle and human experiments.
    - Incorporate **scene graph as a high-level abstraction representation** to facilitate better query selection algorithms in preference learning, which lead to SOTA performance in reward estimation.

- Concurrent Multi-task Learning
    - Come up with a new task setting, **"concurrent multi-task learning"**,  where the demonstrator demonstrates multiple tasks in a single demonstration, and the algorithm tries to learn all separate tasks with these "concurrent" demonstrations.
    - Propose a **EM-based Neural Network** learning algorithm that can effectively learns separate tasks without requiring extra labels.
    
- Neuromorphic Computing
    - Explore **the origin of CBRAM with High Linearity, ON/OFF Ratio, and State Number**, which are crucial for a successful neuromorphic computation network(such as deep-learning neural networks) built from these CBRAMs as neurons.
    - Build a Powerful Neural Network using this CBRAM model as neurons which can solve the MNIST classification problem with SOTA performance(92%) compared to previous neuromorphic computation networks(80%).

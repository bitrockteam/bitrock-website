---
title: Some takeaways of Giampaolo Trapasso (CTO) on "Microservices From a Startup Perspective" by Susanne Kaiser
image: /img/posts/technology-gt.png
imageMeta:
  attribution:
  attributionLink:
author: luca
publish: 2018-09-08
layout: Post
category: reviews
---

I just finished reading "Microservices From a Startup Perspective", an interesting article by Susanne Kaiser. I think that lessons learned and described by the author also applies when you are not a startup but you have a monolith that you want to modernize going through the microservices approach. <!-- more --> I totally agree when Susanne tells that you must proceed with small steps and consider build and deployment automation and monitoring up front.

![/img/posts/technology-gt.png](/img/posts/technology-gt.png)

**Giampaolo Trapasso** (CTO) exposes some takeaways about: "Microservices From a Startup Perspective", an interesting article by **Susanne Kaiser**.

Here below my favorite takeaways.

> "If you decide to go on a microservices journey, it's necessary that everyone is committed - including management. And everyone needs to be aware that this journey is complex and time-consuming - especially in the beginning when you don’t have much experience, yet."

> "Product-aligned, cross-functional, autonomous teams work very well with microservices, but the shift towards a DevOps culture should be considered very early on."

> "Handling cross-cutting concerns early on is critical in order to avoid counter-productive consequences, such as feeding the monolith instead of shrinking it or reimplementing cross-cutting concerns with every service. "

> "The more services you have, the more critical it becomes to automate their build and deployment processes."

> "To design a system to be easy to evolve, event-driven service interaction is key to achieving high decoupling between services."

> "Recently, we introduced Apache Kafka Streams as a shared source of truth to eliminate data duplication overhead, and to achieve high pluggability of services and a lower barrier to entry for new services."

> "Apache Kafka Streams does not require maintaining a local copy, which reduces the overhead for data duplication and keeps this data in sync. It pushes data to where it’s needed and runs in the same process as your service. It increases pluggability; you can plug-in a new service and can use the stream right away without setting up extra data stores. It reduces overhead and increases performance & autonomy, and lowers the barrier to entry for new services."

> "Also, monitoring including log aggregation should be considered early on. Monitoring not only server, but also service metrics, such as request latency, throughput and error rate, is necessary to keep track of the services' health and availability."

Probably the quotes I reported don't tell you something new if you are reading other posts on microservices adoption, but, the fact that this comes from real experience and author is honest in describing also the false steps, makes this contribution really valuable to me.

*The InfoQ article:
[https://www.infoq.com/articles/microservices-startup](https://www.infoq.com/articles/microservices-startup)*

*The related video:
[https://www.infoq.com/presentations/microservices-lessons-startup](https://www.infoq.com/presentations/microservices-lessons-startup)*
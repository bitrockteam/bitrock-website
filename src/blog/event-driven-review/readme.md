---
title: Designing Event-Driven Systems - A review by Giampaolo Trapasso (CTO)
image: /img/posts/book.jpg
imageMeta:
  attribution:
  attributionLink:
author: luca
publish: 2018-08-30
layout: Post
category: reviews
---

I've just finished reading "Designing Event-Driven Systems" by Ben Stopford. It's a 150 pages [free e-book](https://www.confluent.io/designing-event-driven-systems) that introduces the world of event-based systems combined with streaming technology provided in the Kafka platform. The following is a small recap of what I found useful with some takeaways.

<!-- more -->

![/img/posts/book.jpg](/img/posts/book.jpg)

Businesses are collections of people and teams doing multiple functions. Each group is usually entirely independent and works following asynchronous business processes. Makes sense to create the software in the same way, in particular using a service-oriented approach. 

In particular, the microservices one is quite opinionated. Since a microservice does not share a database (and code), there is a "tension" between the need to expose data to other services and the necessity of encapsulating and controlling it. As the architecture grows with new services, this becomes more and more evident (chapter 8: Sharing Data and Services Across an Organization). 

Sharing databases or creating a web of RPC calls between services is a sub-optimal approach that can be replaced by an event-based architecture. Events have "two hats": they notify something and carry information (chapter 5: Events: A Basis for Collaboration). So, sharing an immutable log of events that happened in the system provides a better way to deal with the "data dichotomy" problem. 

Making events central in the architecture and storing them leads to the concept of creating the single shared source of truth of the business (chapter 9: Event Streams as a Shared Source of Truth). The log is the place that stores every fact happened in the system, and that can be used to build new views on data as requests come. They are no more central in the architecture since can be added when needed or recreated in case of issues using the event log as the source (chapter 10: Lean Data). This approach makes the architecture more pluggable since acts like a central nervous system that connects all applications. A brand-new application can rely on the past events to initialize its state and then can update it as live events streams.

Composing services through events is not a brand-new approach, but the novelty stays in using a streaming platform like Kafka as the persistent central log of the business and realizing interesting patterns (chapter 14: Kafka Streams and KSQL and chapter 15: Building Streaming Services).

Moving from monolithic applications to event-driven systems requires some mental shift, in particular when thinking about consistency and concurrency. The subject is not an easy one, chapters 11 to 13 provide the reader with a nice introduction, but the implications of a distributed systems are quite profound and require more reading and thinking. In particular, I liked chapter 13 (Evolving Schema and Data over Time) because it addresses the issues that affect event-driven systems in the long run.

Overall was an excellent book to read and if you are evaluating to introduce Kafka in your architecture is a perfect point to start. Moreover, you can try the [code examples](https://github.com/confluentinc/kafka-streams-examples/tree/4.0.0-post/src/main/java/io/confluent/examples/streams/microservices) provided cloning the attached Github repository.

A final note. The book is full of references to valuable resources. I took the liberty of extracting them from the e-book and group by categories [at this page](https://gist.github.com/giampaolotrapasso/71221f378770e21e6270ffed76b181d7).
---
title: Reactive Supply Chain - A modern, state of art and scalable managing system
  for Supply Chain
image: "/img/Reactive Supply Chain.jpg"
imageMeta:
  attribution: 
  attributionLink: 
author: luca
publish: 2018-07-12
layout: Post
category: TECHNOLOGY
tags:
- application
- microservices
- reactive

---
Bitrock’s **Reactive Supply Chain** is a modern, state of the art, overall scalable and **performing system** to implement a **full-cycle Supply Chain Management System**. <!-- more --> sThe solution is **totally modular**, so to be implemented as a one-stop-shop for a new project or it can be composed and integrated to existing systems using only the needed components. From functional perspective the system has been designed to implement **best practices** and to provide the maximum **flexibility** for all industry standards, but at the same time **adapting** to each customer **specific process and workflow**. The solution is based on **OpenSource technologies** covered by **Enterprise Support**, and can be scaled to manage millions of SKUs, with all data tracked and analyzed in real time. The delivery of the solution can be provided on Customer **Premises** or on **Cloud** or in **Hybrid** ways.

For **internal Supply Chain Operators/Customers** who:

* *provide/perform analytics*
* *manage warehouse* 
* *manage resources and goods in and out* 
* *fulfil orders*

Our Reactive Supply Chain is an **uptodate digital Supply Chain system** that **scales** with business demand and provides **best customer experience matching** all customer **process** and system, unlike non-customizable ERP systems which are poorly scaled and not flexible, demanding long time and high costs to be implemented and integrated. Our solution is a **highly scalable modular system**, implemented on top of the most innovative Open Source technologies (with Enterprise support when needed), capable to **enable lean Supply Chain** process with **real-time analytics** and all needed **metrics** for operation and C-levels with a mid-short term activation & customization time.

Bitrock’s Reactive Supply Chain is designed for:

* Providing **high scalable inventory** system capable to **increase the inventory velocity**
* Enabling **lean logistic** and **supply chain management** (reducing lead times, yield planning, stock levels, ...)
* **Compressing cycle time** (reducing time from supplier procurement up to the customer delivery)
* **Segment** and **adapt** the Supply Chain to different kind of retailers (no monolithic approach)
* Designed to manage **SC standards** (e.g. GS1) but acting according **business logic** (B2B and B2C)
* Providing a **real-time analytics** with all needed **metrics** (from **operational** to **C-levels**) so to achieve the higher automation (possibility to **apply Artificial Intelligence** to optimize several process) and control

The achievement of these kind of benefits are **enabling Direct To Market models** by Supply Chain operators and as well more modern integration (and or self implementation) of **eCommerce strategies**, increasing Supply Chain operators **brand identity**. 

![/img/posts/reactive-supply-chain.png](/img/posts/reactive-supply-chain.png)*Reactive Supply Chain Componentss*

All systems and components are *Dockerized*, so to allow an easy deployment both **on Premises** both **on a Cloud solution** (adding orchestration services such as **Docker Compose**, or **Kubernetes**, or **Mesos DCOS**). All components are configured to use **Kafka** and provide even a set of **REST APIs**.

**Message broker** technology: Confluent **Kafka** (opensource or enterprise)

Main **components** technical architecture references: Java/Scala Microservices, Play for APIs and frontend, Akka (with persistence, cluster, http, alpakka) for distributed logic, Cassandra/MySQL, Elasticsearch, Kafka.

Every **Microservice** has its own architecture and can use different kind of technologies and data source, to grant the best choice for each specific service goal, but a general [onion—architecture](http://jeffreypalermo.com/blog/the-onion-architecture-part-1/) approach has been taken to keep when possible an uniformity of service architectures.

**Analytics:** *Apache Flink, Spark, Cassandra, Kibana, Elasticsearch, Kafka*.
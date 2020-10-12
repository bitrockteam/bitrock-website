---
title: Getting Started with Prometheus
image: "/img/prometheus.png"
imageMeta:
  attribution: ''
  attributionLink: ''
author: MC
publish: 2020-10-12 08:00:00 +0000
layout: Post
category: TECHNOLOGY
tags: []

---
## What is Prometheus?

Prometheus is an open-source systems monitoring and alerting toolkit written in Go. Released by SoundCloud in 2012 it joined Cloud Native Computing Foundation in 2016 and in 2018 became the second graduated project alongside Kubernetes.

Based on metrics and not on logs, Prometheus uses its own time series database called TSDB and its own query language (PromQL).

The CNCF community loves Prometheus because:

* it’s easy to configure, deploy, and maintain
* it’s designed in multiple services, aiming at modularity
* it’s container ready, “docker run” is enough to have it started
* it’s orchestrator ready, supporting dynamic configurations
* it’s an ecosystem: many client libraries and exporters maintained both by Prometheus team and the community

  <br/>  
  ![](/img/prometheus-schema-1.png)
  * Prometheus collects data
  * Exporters expose data
  * Applications expose data
  * Grafana displays data
  * Alertmanager dispatches alerts
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

Prometheus is a pull-based monitoring system that scrapes metrics from configured endpoints, stores them efficiently and supports a powerful query language to compose dynamic information from a variety of otherwise unrelated data points.

To monitor your services using Prometheus, your services need to expose a Prometheus endpoint. This endpoint is an HTTP interface that exposes a list of metrics and the respective current values. Prometheus has a wide range of service discovery options to find your services and start collecting metrics data. The Prometheus server continuously polls the metrics interface on your services and stores the data. This provides a standardized way for metrics gathering.

Prometheus is designed to fetch data in intervals measured in seconds. And while Prometheus 2.x can handle somewhere north of ten millions series over a time window, which is rather generous, some unwise label choices can eat that surprisingly quickly.

Every 2 hours Prometheus compacts the data that has been buffered up in memory onto blocks on disk.

To reduce disk footprint, TSDB can have a shorter metrics retention period of the metrics or it can be configured to have a disk space limit.The data can be compacted and the WAL compressed as well.

The data structure is self-sufficient and can be moved from one instance to another independently given each time series is atomic and uniquely identified by its metric name. In recent Prometheus versions, remote storage support has been introduced in order to provide long term storage.

Core Prometheus server is a single binary and each Prometheus server is an independent process with its own storage. One of the downsides of this core implementation is the lack of clustering or backfilling “missing” data when a scrape fails.

  
![](/img/prometheus_logos.png)
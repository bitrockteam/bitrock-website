(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{210:function(e,t,s){"use strict";s.r(t);var i=s(19),n=Object(i.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"what-is-prometheus"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-prometheus","aria-hidden":"true"}},[e._v("#")]),e._v(" What is Prometheus?")]),e._v(" "),s("p",[e._v("Prometheus is an open-source systems monitoring and alerting toolkit written in Go. Released by SoundCloud in 2012 it joined Cloud Native Computing Foundation in 2016 and in 2018 became the second graduated project alongside Kubernetes.")]),e._v(" "),s("p",[e._v("Based on metrics and not on logs, Prometheus uses its own time series database called TSDB and its own query language (PromQL).")]),e._v(" "),s("p",[e._v("The CNCF community loves Prometheus because:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("it’s easy to configure, deploy, and maintain")])]),e._v(" "),s("li",[s("p",[e._v("it’s designed in multiple services, aiming at modularity")])]),e._v(" "),s("li",[s("p",[e._v("it’s container ready, “docker run” is enough to have it started")])]),e._v(" "),s("li",[s("p",[e._v("it’s orchestrator ready, supporting dynamic configurations")])]),e._v(" "),s("li",[s("p",[e._v("it’s an ecosystem: many client libraries and exporters maintained both by Prometheus team and the community")]),e._v(" "),s("br"),e._v("  \n![](/img/prometheus-schema-1.png)\n* Prometheus collects data\n* Exporters expose data\n* Applications expose data\n* Grafana displays data\n* Alertmanager dispatches alerts\n")])]),e._v(" "),s("p",[e._v("Prometheus is a pull-based monitoring system that scrapes metrics from configured endpoints, stores them efficiently and supports a powerful query language to compose dynamic information from a variety of otherwise unrelated data points.")]),e._v(" "),s("p",[e._v("To monitor your services using Prometheus, your services need to expose a Prometheus endpoint. This endpoint is an HTTP interface that exposes a list of metrics and the respective current values. Prometheus has a wide range of service discovery options to find your services and start collecting metrics data. The Prometheus server continuously polls the metrics interface on your services and stores the data. This provides a standardized way for metrics gathering.")]),e._v(" "),s("p",[e._v("Prometheus is designed to fetch data in intervals measured in seconds. And while Prometheus 2.x can handle somewhere north of ten millions series over a time window, which is rather generous, some unwise label choices can eat that surprisingly quickly.")]),e._v(" "),s("p",[e._v("Every 2 hours Prometheus compacts the data that has been buffered up in memory onto blocks on disk.")]),e._v(" "),s("p",[e._v("To reduce disk footprint, TSDB can have a shorter metrics retention period of the metrics or it can be configured to have a disk space limit.The data can be compacted and the WAL compressed as well.")]),e._v(" "),s("p",[e._v("The data structure is self-sufficient and can be moved from one instance to another independently given each time series is atomic and uniquely identified by its metric name. In recent Prometheus versions, remote storage support has been introduced in order to provide long term storage.")]),e._v(" "),s("p",[e._v("Core Prometheus server is a single binary and each Prometheus server is an independent process with its own storage. One of the downsides of this core implementation is the lack of clustering or backfilling “missing” data when a scrape fails.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/img/prometheus_logos.png",alt:""}})])])},[],!1,null,null,null);t.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{226:function(e,t,r){"use strict";r.r(t);var s=r(19),a=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"what-is-prometheus"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-is-prometheus","aria-hidden":"true"}},[e._v("#")]),e._v(" What is Prometheus?")]),e._v(" "),r("p",[e._v("Prometheus is an open-source systems monitoring and alerting toolkit written in Go. Released by SoundCloud in 2012 it joined Cloud Native Computing Foundation in 2016 and in 2018 became the second graduated project alongside Kubernetes.")]),e._v(" "),r("p",[e._v("Based on metrics and not on logs, Prometheus uses its own time series database called TSDB and its own query language (PromQL).")]),e._v(" "),r("p",[e._v("The CNCF community loves Prometheus because:")]),e._v(" "),r("ul",[r("li",[e._v("it’s easy to configure, deploy, and maintain")]),e._v(" "),r("li",[e._v("it’s designed in multiple services, aiming at modularity")]),e._v(" "),r("li",[e._v("it’s container ready, “docker run” is enough to have it started")]),e._v(" "),r("li",[e._v("it’s orchestrator ready, supporting dynamic configurations")]),e._v(" "),r("li",[e._v("it’s an ecosystem: many client libraries and exporters maintained both by Prometheus team and the community")])]),e._v(" "),r("br"),e._v(" "),r("p",[r("img",{attrs:{src:"/img/download.png",alt:""}})]),e._v(" "),r("br"),e._v(" "),r("ul",[r("li",[e._v("Prometheus collects data")]),e._v(" "),r("li",[e._v("Exporters expose data")]),e._v(" "),r("li",[e._v("Applications expose data")]),e._v(" "),r("li",[e._v("Grafana displays data")]),e._v(" "),r("li",[e._v("Alertmanager dispatches alerts")])]),e._v(" "),r("p",[e._v("Prometheus is a pull-based monitoring system that scrapes metrics from configured endpoints, stores them efficiently and supports a powerful query language to compose dynamic information from a variety of otherwise unrelated data points.")]),e._v(" "),r("p",[e._v("To monitor your services using Prometheus, your services need to expose a Prometheus endpoint. This endpoint is an HTTP interface that exposes a list of metrics and the respective current values. Prometheus has a wide range of service discovery options to find your services and start collecting metrics data. The Prometheus server continuously polls the metrics interface on your services and stores the data. This provides a standardized way for metrics gathering.")]),e._v(" "),r("p",[e._v("Prometheus is designed to fetch data in intervals measured in seconds. And while Prometheus 2.x can handle somewhere north of ten millions series over a time window, which is rather generous, some unwise label choices can eat that surprisingly quickly.")]),e._v(" "),r("p",[e._v("Every 2 hours Prometheus compacts the data that has been buffered up in memory onto blocks on disk.")]),e._v(" "),r("p",[e._v("To reduce disk footprint, TSDB can have a shorter metrics retention period of the metrics or it can be configured to have a disk space limit. The data can be compacted and the WAL compressed as well.")]),e._v(" "),r("p",[e._v("The data structure is self-sufficient and can be moved from one instance to another independently given each time series is atomic and uniquely identified by its metric name (1). In recent Prometheus versions, remote storage support has been introduced in order to provide long term storage.")]),e._v(" "),r("p",[e._v("Core Prometheus server is a single binary and each Prometheus server is an independent process with its own storage. One of the downsides of this core implementation is the lack of clustering or backfilling “missing” data when a scrape fails.")]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/prometheus-exporter-loghi.png",alt:""}})]),e._v(" "),r("p",[e._v("Prometheus is not supposed to only be used with standard exporters (2), you can instrument your own code to capture the metrics that matter to you, business ones for example. Prometheus comes with the support for a wide range of languages (Go, Java or Scala, Python, Ruby, etc). Many upstream libraries are already instrumented by the maintainers, so you will get that for free!")]),e._v(" "),r("br"),e._v(" "),r("h2",{attrs:{id:"what-is-a-metric"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-metric","aria-hidden":"true"}},[e._v("#")]),e._v(" What is a metric?")]),e._v(" "),r("p",[e._v("A metric is any numeric value that tells you something about how your system is operating. For example:")]),e._v(" "),r("ul",[r("li",[e._v("How much memory it is using")]),e._v(" "),r("li",[e._v("How long the last operation took")]),e._v(" "),r("li",[e._v("How many request were served today")])]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/schermata-2020-10-12-alle-15-37-50.png",alt:""}})]),e._v(" "),r("p",[e._v("In Prometheus there are 4 types of metrics: counter, gauge, histogram and summary.")]),e._v(" "),r("p",[e._v("A "),r("strong",[e._v("counter")]),e._v(" is a cumulative metric that represents a single monotonically increasing counter whose value can only increase or be reset to zero on restart. For example, you can use a counter to represent the number of requests served, tasks completed, or errors.")]),e._v(" "),r("p",[e._v("A "),r("strong",[e._v("gauge")]),e._v(' is a metric that represents a single numerical value that can arbitrarily go up and down. Gauges are typically used for measured values like temperatures or current memory usage, but also "counts" that can go up and down, like the number of concurrent requests.')]),e._v(" "),r("p",[e._v("A "),r("strong",[e._v("histogram")]),e._v(" samples observations, for example request durations or response sizes, and counts them in configurable buckets. It also provides a sum of all observed values. A histogram with a base metric name of "),r("basename",[e._v(" exposes multiple time series during a scrape:")])],1),e._v(" "),r("ul",[r("li",[e._v("cumulative counters for the observation buckets, exposed as "),r("basename",[e._v('_bucket{le="'),r("upper",{attrs:{inclusive:"",bound:""}},[e._v('"}')])],1)],1),e._v(" "),r("li",[e._v("the total sum of all observed values, exposed as "),r("basename",[e._v("_sum")])],1),e._v(" "),r("li",[e._v("the count of events that have been observed, exposed as "),r("basename",[e._v("_count (identical to "),r("basename",[e._v('_bucket{le="+Inf"} above)')])],1)],1)]),e._v(" "),r("p",[e._v("Similar to a histogram, a "),r("strong",[e._v("summary")]),e._v(" samples observations, for example request durations and response sizes. While it also provides a total count of observations and a sum of all observed values, it calculates configurable quantiles over a sliding time window.")]),e._v(" "),r("p",[e._v("A summary with a base metric name of "),r("basename",[e._v(" exposes multiple time series during a scrape:")])],1),e._v(" "),r("ul",[r("li",[e._v("streaming φ-quantiles (0 ≤ φ ≤ 1) of observed events, exposed as "),r("basename",[e._v('{quantile="<φ>"}')])],1),e._v(" "),r("li",[e._v("the total sum of all observed values, exposed as "),r("basename",[e._v("_sum")])],1),e._v(" "),r("li",[e._v("the count of events that have been observed, exposed as "),r("basename",[e._v("_count")])],1)]),e._v(" "),r("p",[e._v("The essential difference between summaries and histograms is that summaries calculate streaming φ-quantiles on the client side and expose them directly, while histograms expose bucketed observation counts and the calculation of quantiles from the buckets of a histogram happens on the server side using the histogram_quantile() function.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://prometheus.io/docs/concepts/metric_types/",title:"https://prometheus.io/docs/concepts/metric_types/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://prometheus.io/docs/concepts/metric_types/"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://prometheus.io/docs/practices/histograms/",title:"https://prometheus.io/docs/practices/histograms/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://prometheus.io/docs/practices/histograms/"),r("OutboundLink")],1)]),e._v(" "),r("br"),e._v(" "),r("h2",{attrs:{id:"understanding-metrics"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#understanding-metrics","aria-hidden":"true"}},[e._v("#")]),e._v(" Understanding metrics")]),e._v(" "),r("p",[e._v("Prometheus metrics have a name and might have any arbitrary number of labels:")]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/schermata-2020-10-12-alle-10-00-56.png",alt:""}})]),e._v(" "),r("p",[e._v("A Metric has metadata (labels) and lots of functions to filter, change, remove those while fetching them from the targets. The name “node_cpu_seconds_total” consist of a prefix for the namespace (node metrics) and suffix for the unit of the value ( Seconds of CPU time in total )")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://prometheus.io/docs/practices/naming/",title:"https://prometheus.io/docs/practices/naming/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://prometheus.io/docs/practices/naming/"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("strong",[e._v("promtool")]),e._v(" allows to lint them for consistency and correctness.")]),e._v(" "),r("p",[e._v("Examples:")]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/schermata-2020-10-12-alle-10-02-13.png",alt:""}})]),e._v(" "),r("br"),e._v(" "),r("h2",{attrs:{id:"promql"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#promql","aria-hidden":"true"}},[e._v("#")]),e._v(" PromQL")]),e._v(" "),r("p",[e._v("Prometheus Query Language (PromQL) supports a wide range of functions for interacting with scraped metrics. Some examples:")]),e._v(" "),r("ul",[r("li",[e._v("Filtering by label: "),r("em",[e._v('http_requests_total{status=~"5.."}')])]),e._v(" "),r("li",[e._v("Calculating rates: "),r("em",[e._v("rate(http_requests_total[5m])")])]),e._v(" "),r("li",[e._v("Arithmetic ( +, *, /, -, %, ^) and Comparison ( >, <, >=, <=, ==, != ) operations")]),e._v(" "),r("li",[e._v("Aggregation and Grouping: "),r("em",[e._v("sum(rate(node_network_receive_bytes_total[5m])) by (instance)")])]),e._v(" "),r("li",[e._v("Quantile: "),r("em",[e._v("histogram_quantile(0.95, sum(rate(http_request_duration_seconds_bucket[5m])) by (le))")])]),e._v(" "),r("li",[e._v("Recording Rule: precompute frequently needed or computationally expensive expressions, in order to make recurring queries much faster to compute")])]),e._v(" "),r("br"),e._v(" "),r("h2",{attrs:{id:"alerting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#alerting","aria-hidden":"true"}},[e._v("#")]),e._v(" Alerting")]),e._v(" "),r("p",[e._v("Our motto is: if you can graph it, you can alert on it! It’s really easy to set up alerts in Prometheus, it’s just a matter of defining which query to evaluate and which is the range of safe values:")]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/schermata-2020-10-12-alle-10-02-22.png",alt:""}})]),e._v(" "),r("p",[e._v("Prometheus will evaluate the alerting rule regularly and will mark it as firing in case the rule matches. However, Prometheus core component will not take care directly of sending alerts to final users. Alertmanager instead will take care of performing alert related operations.")]),e._v(" "),r("p",[e._v("Alertmanager :")]),e._v(" "),r("ul",[r("li",[e._v("Receives alerts from Prometheus")]),e._v(" "),r("li",[e._v("Groups them")]),e._v(" "),r("li",[e._v("Inhibits them, for example in case of false positives")]),e._v(" "),r("li",[e._v("Dispatches them to downstream services, such as Slack or PagerDuty and many more")]),e._v(" "),r("li",[e._v("Built In HA leveraging gossip protocol")])]),e._v(" "),r("br"),e._v(" "),r("p",[r("img",{attrs:{src:"/img/schema.png",alt:""}})]),e._v(" "),r("br"),e._v(" "),r("br"),e._v(" "),r("h2",{attrs:{id:"references"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[e._v("#")]),e._v(" References")]),e._v(" "),r("ul",[r("li",[e._v("Official Project Documentation "),r("a",{attrs:{href:"https://prometheus.io/docs/",title:"https://prometheus.io/docs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://prometheus.io/docs/"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("A blog on monitoring, scale and operational Sanity "),r("a",{attrs:{href:"https://www.robustperception.io/blog",title:"https://www.robustperception.io/blog",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.robustperception.io/blog"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/prometheus/alertmanager#high-availability",title:"https://github.com/prometheus/alertmanager#high-availability",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/prometheus/alertmanager#high-availability"),r("OutboundLink")],1)])]),e._v(" "),r("br"),e._v(" "),r("p",[r("strong",[e._v("Notes")])]),e._v(" "),r("p",[e._v("(1) "),r("a",{attrs:{href:"https://github.com/bitnami/kube-prod-runtime/blob/master/docs/migration-guides/prometheus-migration.md",title:"https://github.com/bitnami/kube-prod-runtime/blob/master/docs/migration-guides/prometheus-migration.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/bitnami/kube-prod-runtime/blob/master/docs/migration-guides/prometheus-migration.md"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("(2) "),r("a",{attrs:{href:"https://prometheus.io/docs/instrumenting/exporters",title:"https://prometheus.io/docs/instrumenting/exporters",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://prometheus.io/docs/instrumenting/exporters"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://prometheus.io/docs/instrumenting/exporters",title:"https://prometheus.io/docs/instrumenting/exporters",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/prometheus/prometheus/wiki/default-port-allocations"),r("OutboundLink")],1)]),e._v(" "),r("br"),e._v(" "),r("p",[r("em",[e._v("Author: Matteo Gazzetta, DevOps Engineer @Bitrock")])])])},[],!1,null,null,null);t.default=a.exports}}]);
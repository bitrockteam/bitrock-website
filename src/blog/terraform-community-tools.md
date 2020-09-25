---
title: Terraform Community Tools
image: "/img/terraform-community-tools-1.png"
imageMeta:
  attribution: ''
  attributionLink: ''
author: MC
publish: 2020-09-25 08:00:00 +0000
layout: Post
category: TECHNOLOGY
tags: []

---
Despite not having reached version 1.0 yet, Terraform has become the de facto tool for cloud infrastructure management. One of its major winning points is definitely the extensive cross cloud support, which allows projects to span from one cloud vendor to another with a minimal operational effort. Moreover, the popularity in the community continuously releasing reusable infrastructure components, the Terraform modules, makes it easy to bootstrap new projects with a fully functional setup right from the start.

In order to address all the different use cases of Terraform, whether it is executed as part of a GitOps pipeline or right from developers machines, the community has built a set of tools to enhance the developers experience.

In this blog post we will describe some of them, focusing on those that might not be that popular or widely adopted, but certainly deserve some attention.

<br />

### Pull Request Automation

## Atlantis

[\[ GitHub \]](https://github.com/runatlantis/atlantis)[\[ Website \]](https://www.runatlantis.io/)

![](/img/d-1.png)

Atlantis is a golang application that listens for Terraform pull request events via webhooks. It allows users to remotely execute \`terraform plan\` and \`terraform apply\` according to the pull request content commenting back the result. Atlantis is a good starting point for making infrastructure changes visible to all teams, allowing even non-operations ones to contribute to Terraform infrastructure codebase. If you want to see Atlantis in action, check this walkthrough video [\[ Youtube \]](https://youtu.be/TmIPWda0IKg).

If you want to restrict and audit the execution of Terraform changes still providing a friendly interface, Terraform Cloud and Enterprise support invoking remote operations by UI, VCS, CLI and API. The offering includes an extensive set of capabilities for integrating infrastructure changes in CI pipelines.

<br />

### Importing Existing Cloud Resources

Importing existing resources into a Terraform codebase is a long and tedious process. Terraform is capable of importing an existing resource into its state through \`import\` command, however the responsibility of writing the HCL describing the resource is on the developer. The community has come up with tools that are able to automate this process.

## Terraforming

[\[ GitHub \]](https://github.com/dtan4/terraforming) [\[ Web \]](http://terraforming.dtan4.net/)

Terraforming supports the export of existing AWS resources into Terraform resources, importing them to Terraform state and writing the configuration to a file.

## Terraformer

[\[ GitHub \]](https://github.com/GoogleCloudPlatform/terraformer)

Terraformer supports the export of existing resources from many different providers, such as AWS, Azure and GCP. The tool leverages Terraform providers for performing the mapping of resource attributes to Terraform ones, which makes it more resilient to API upgrades. Terraformer has been developed by Waze and now maintained by Google Cloud Platform team.

<br />

### Version Management

## tfenv

[\[ GitHub \]](https://github.com/tfutils/tfenv)

When working with projects that are based on different Terraform versions, it is tedious to switch from one version to another and the risk of updating the states’ Terraform version to a new one is high. tfenv comes in support and makes it easy to have different Terraform versions installed on the same machine.

<br />

### Security and Compliance Scanning

## tfsec

[\[ GitHub \]](https://github.com/liamg/tfsec)

![](/img/d-2.png)

tfsec performs static analysis of your Terraform code in order to detect potential vulnerabilities in the resulting infrastructure configuration. It comes with a set of rules that work cross provider and a set of provider specific ones, with support for AWS, Azure and GCP. It supports disabling checks on specific resources making it easy to include the tool in a CI pipeline.

## Terrascan

[\[ GitHub \]](https://github.com/accurics/terrascan) [\[ Website \]](https://docs.accurics.com/projects/accurics-terrascan/en/latest/)

![](/img/d-3.png)

Terrascan detects security and compliance violations in your Terraform codebase, mitigating the risk of provisioning unsecure cloud infrastructures. The tool supports AWS, Azure, GCP and Kubernetes, and comes with a set of more than 500 policies for security best practices. It is possible to write custom policies with Open Policy Agent Rego language.

## Regula

[\[ GitHub \]](https://github.com/fugue/regula)

Regula is a tool that inspects Terraform code looking for security misconfigurations and compliance violations. It supports AWS, Azure and GCP, and includes a library of rules written in Open Policy Agent language Rego. Regula consists of two parts, the first one generates a Terraform plan in JSON that is then consumed by the Rego framework which in turn evaluates the rules and produces a report.

## Terraform Compliance

[\[ GitHub \]](https://github.com/eerkunt/terraform-compliance) [\[ Website \]](https://terraform-compliance.com/)

![](/img/d-4.png)

Terraform Compliance approaches the problem from a different perspective, allowing to write compliance rules in a Behaviour Driven Development (BDD) fashion. An extensive set of [examples](https://terraform-compliance.com/pages/Examples/) provides an overview of the capabilities of the tool. It is easy to bring Terraform Compliance into your CI chain and validate infrastructure before deployment.

While Terraform Compliance is free to use and easy to get started with, a much wider set of policies can be defined using HashiCorp Sentinel, which is part of the HashiCorp Enterprise offering. Sentinel supports fine-grained condition-based policies, with different enforcing levels, that are evaluated as part of a Terraform remote execution.

<br />

### Linting

## TFLint

[\[ GitHub \]](https://github.com/terraform-linters/tflint)

TFLint is a Terraform linter that focuses on potential errors and best practices. The tool comes with a general purpose and AWS rule set while the rules for other cloud providers such as Azure and GCP are being added. It does not focus on security or compliance issues, rather on validating configuration variables such as instance types, which might cause a runtime error when applying the changes. TFLint tries to fill the gap of “terraform validate”, which is not able to validate variable values beside syntax and internal consistency checks.

<br />

### Cost Estimation

## infracost

[\[ GitHub \]](https://github.com/infracost/infracost)[\[ Website \]](https://www.infracost.io/)

![](/img/d-5.png)

Keeping track of infrastructure pricing is quite a mess and one usually discovers the actual cost of a deployment after running it for days if not weeks. infracost comes in help providing a way to estimate how much the resources you are going to deploy will cost. At the moment the tool supports only AWS, providing insights for the costs of both hourly priced resources and usage based resources such as AWS Lambda Functions. For the latter, it requires the usage of infracost Terraform provider which allows describing usage estimates for a more realistic cost estimate. This enables quick “what-if” analysis like “what if this month my Lambda gets 2 times more requests?”. The ability to output a “diff” of the costs is useful when integrating infracost in your CI pipeline.

Terraform Enterprise provides a Cost Estimation feature that extends infracost offering with the support for the three major public cloud providers: AWS, Azure and GCP. Moreover, Sentinel policies can be applied for example to prevent the execution of Terraform changes according to the increment of costs.

<br />

_Author: Simone Ripamonti, DevOps Engineer @Bitrock_
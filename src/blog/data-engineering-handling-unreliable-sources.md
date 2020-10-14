---
title: Data Engineering - Handling Unreliable Sources
image: "/img/what_is_information_technology.jpg"
imageMeta:
  attribution: ''
  attributionLink: ''
author: MC
publish: 2020-10-13 22:00:00 +0000
layout: Post
category: TECHNOLOGY
tags: []

---
Most of you have probably already heard the phrase "_data is the new oil_", and that's because everything in our world produces valuable information. It's up to us being able to extract the value from all the noisy, messy data that is being produced every instant.

But **working with data is not easy**: as I was saying, real data is always noisy, messy, and often incomplete, and even the process of extraction sometimes is affected by some faults.

It is thus very important to make the data usable via a process known as **data wrangling** (i.e. the process of cleaning, structuring, and enriching raw data into the desired format) for better decision making. The crucial thing to understand here is that **bad data lead to poor decision-making**, so it's important to make this process stable, repeatable, and idempotent, to ensure that our transformations are improving the quality of the data and not degrading it.

Let's give a look at one of the aspects of the data wrangling process: how to handle data sources that cannot guarantee about the quality of the data they are providing.

<br />

## The Context

In a recent project we have been involved in, we faced the scenario in which the data sources were heavily unreliable.

Given the early definitions the expected data, to be received data from a set of sensors, should have been:

* \~ 10 different types of data
* every type at a fixed pace (every 10 minutes)
* data will arrive in a landing bucket
* data will be in CSV, with a predefined schema and a fixed number of rows

Starting from this, we would have performed validation, cleaning, and aggregation, in order to compute some KPIs.
Moreover, these KPIs were the starting point of a later Machine Learning prediction.

On top of this, there was a requirement to produce updated reports and predictions every 10 minutes with the most up-to-date information received.

Like any real-world data project, the source data was suffering from multiple issues: like missing data in the CSV (sometimes some value missing in some cells, or entire rows were missing, or sometimes there were duplicated rows), or late-arriving data (even not arriving at all).

<br />

## The Solution

In scenarios like this, it's very important to be able to track the transformations the data pipeline will apply, and being able to answer questions like:

* which are the source values for a given result?
* does it come from real data or imputed data?
* does all the sources arrived on time?
* how much reliable is a given result?

To be able to answer this kind of questions, we first have to isolate three different kinds of data in at least three areas:

![](/img/schermata-2020-10-13-alle-11-04-46.png)

Specifically, the _Landing Area_ is a place in which the external systems (i.e. data sources) will write, while our data pipeline can only read the information from there or delete the data after a safe retention time.

In the _Raw Area_ instead, we are going to copy the CSVs from the _Landing Area_ keeping the data as-is, but enriching the metadata (e.g. labeling the file, or putting it in a better directory structure). This will be our **Data Lake**, from which we can always retrieve the original data, in case of error during processing or functionalities developed after the data has been already processed by the pipeline.

Finally, in the _Processed Area_ we keep validated and cleaned data. This area will be the starting place for the Visualization part and the Machine Learning part.

<br />

After having considered the previous three areas to store the data, we need to introduce another concept that allows us to track the information through the pipeline: the **Run Control Value**

The _Run Control Value_, it's metadata, it can be a serial, a timestamp, or others, and it gives us the possibility to correlate the data in the different areas with the pipeline runs.

This concept is quite simple to implement, but it's not so obvious to understand. On the other hand, it is easy to be misled and think that it is superfluous and that it can be removed in favor of information already present in the data, such as a timestamp.

Let's see with some examples the potential of using the data separation described above together with the _Run Control Value_.

<br />

#### Example 1: _Tracking data imputation_

Let's consider as a first the scenario in which the output is odd and it seems wrong.  The `RCV` column represents the _Run Control Value_ and it's being added by the pipeline.

![](/img/de_bs_example_1_img_1-d8fdbf56.png)

Here we can see that if we look only into processed data, that for the input at hour `11:00` we are missing the entry with `ID=2` and the Counter with `ID=1` has a strange zero as its value (let's just assume that our domain expert said that zeros in Counter column are anomalous).

In this case, we can backtrack in the pipeline stages, using the _Run Control Value_ and see which values have concretely contributed to the output, if all the input were available by the time the computation has run, or if some file were missing in the _Raw Area_ and so some imputed values have been used.

In the image above, we can see that in the _Raw Area_ the inputs with `RCV=101` were both negatives, and the entity with `ID=2` is related to `time=12:00`. If we then check the original file in the _Landing Area_ we can see that this file was named `1100.csv` (in the image represented as a couple of table rows for simplicity), so the entry related to the hour `12:00` was an error so the entry got removed in the processed, while the other one was reset to zero by an imputation rule.

The thing of keeping distinct the _Landing Area_ from the _Raw Area_ allows us also to handle the case of Late Arriving Data.

Given the scenario described at the beginning of the article, we where in a batch scenario with a scheduler that drives the ingestion. So, what if, at the time of the scheduler trigger the ingestion one input was missing and so it has been imputed, but at the time we are going to debug it we can see that it's available?

In this case, it will be available in the _Landing Area_ but it will be missing in the _Raw Area_, so, without even opening the file to check the values, we can quickly understand that for that specific run, those values have been imputed.

<br />

#### Example 2: _Error from the sources with input data re-submission_

In the first example, we discussed about retrospectively analyzing the processing or debugging it. Now we consider the case a source had a problem and submitted bad data on a given run, but, after the problem has been fixed, we want to re-ingest the data for the same run to update our output, re-executing it in the same context.

The following image shows the status of the data warehouse when the input at hour `11.00` has a couple of issues: the entry with `ID=2` is missing and the entry `ID=1` has a negative value and we have a validation rule to convert to zero the negative values. So the _Processed Area_ table contains the validated data.

![](/img/de_bs_example_2_img_1-bb498020.png)

In the fixed version of the file, there is a valid entry for each entity. The pipeline will use the `RCV=101` as a reference to clean up the table from the previous run and ingest the new file.

![](/img/de_bs_example_2_img_2-9bdc205e.png)

In this case, the _Run Control Value_ allows us to identify precisely which portion of data has been ingested with the previous execution so we can safely remove it and re-execute it with the correct one.

***

These are just two simple scenarios that can be tackled in this way, but many other data pipeline issues that can benefit from this approach.

This mechanism allows us to have also **idempotency** of the pipeline stages, i.e. being able to track the data flowing in the different stages it enables the possibility to re-apply the transformations on the same input and to obtain the same result.

<br />

<br />

## Conclusions

In this article, we dived a bit into the data engineering world, specifically how to handle the data unreliable sources, the majority of the cases in real-world projects.

We have seen why the stage separation is important in designing a data pipeline and also which properties every "_area_" will hold; this helps us  understand better what is happening and identify the potential issues.

Another aspect we have highlighted is how this technique facilitates the handling of late-arriving data or re-ingesting corrected data, in case an issue can be recovered at the source side.

<br />

_Author: Luca Tronchin, Software Engineer @Bitrock_
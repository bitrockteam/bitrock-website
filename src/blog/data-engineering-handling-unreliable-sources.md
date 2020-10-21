---
title: Data Engineering - Handling Unreliable Sources
image: "/img/what_is_information_technology.jpg"
imageMeta:
  attribution: ''
  attributionLink: ''
author: MC
publish: 2020-10-20 22:00:00 +0000
layout: Post
category: TECHNOLOGY
tags: []

---
Most of you have probably heard the phrase "_data is the new oil_", and that's because everything in our world produces valuable information. It's up to us to be able to extract the value from all the noisy, messy data that is being produced every instant.

But **working with data is not easy**: as seen before, real data is always noisy, messy, and often incomplete, and even the process of extraction sometimes is affected by some faults.

It is thus very important to make the data usable via a process known as **data wrangling** (i.e. the process of cleaning, structuring, and enriching raw data into the desired format) for better decision making. The crucial thing to understand here is that **bad data lead to poor decision-making**, so it's important to make this process stable, repeatable, and idempotent, in order to ensure that our transformations are improving the quality of the data and not degrading it.

Let's have a look at one of the aspects of the data wrangling process: how to handle data sources that cannot guarantee the quality of the data they are providing.

<br />

## The Context

In a recent project we have been involved in, we faced the scenario in which the data sources were heavily unreliable.

Given the early definitions, the expected data, coming from a set of sensors, should have been:

* approximately ten different types of data
* every type at a fixed pace (every 10 minutes)
* data will arrive in a landing bucket
* data will be in CSV, with a predefined schema and a fixed number of rows

Starting from this, we would have performed validation, cleaning, and aggregation, in order to compute some KPIs. Moreover, these KPIs were the starting point of a later Machine Learning based prediction.

On top of this, there was a requirement to produce updated reports and predictions every 10 minutes with the most up-to-date information received.

As in many real-world data projects, the source data was suffering from multiple issues, like missing data in the CSV (sometimes some value missing in some cells, or entire rows were missing, or sometimes there were duplicated rows), or late-arriving data (even not arriving at all).

<br />

## The Solution

In similar scenarios, it is fundamental to track the transformations that the data pipeline will apply, and to answer questions like these:

* which are the source values for a given result?
* does a result value come from real data or imputed data?
* did all the sources arrive on time?
* how reliable is a given result?

To be able to answer this type of questions, we first have to isolate three different kinds of data, in at least three areas:

![](/img/schermata-2020-10-13-alle-11-04-46.png)

Specifically, the _Landing Area_ is a place in which the external systems (i.e. data sources) will write, the data pipeline can only read from or delete after a safe retention time.

In the _Raw Area_ instead, we are going to copy the CSVs from the _Landing Area_ keeping the data as-is, but enriching the metadata (e.g. labeling the file, or putting it in a better directory structure). This will be our **Data Lake**, from which we can always retrieve the original data, in case of errors during processing or a new functionality is developed after the data has already been processed by the pipeline.

Finally, in the _Processed Area_ we keep validated and cleaned data. This area will be the starting place for the Visualization part and the Machine Learning part.

<br />

After having defined the previous three areas to store the data, we need to introduce another concept that allows us to track the information through the pipeline: the **Run Control Value**

The _Run Control Value_ is metadata, it's often a serial value or a timestamp, or others, and it gives us the possibility to correlate the data in the different areas with the pipeline executions.

This concept is quite simple to implement, but it's not so obvious to understand. On the other hand, it is easy to be misled; someone could think it is superfluous, and could be removed in favor of information already present in the data, such as a timestamp, but it would be wrong.

Let's now see, with a few examples, the benefit of using the data separation described above, together with the _Run Control Value_.

<br />

#### Example 1: _Tracking data imputation_

Let's first consider a scenario in which the output is odd and seems apparently wrong.  The `RCV` column represents the _Run Control Value_ and it's being added by the pipeline.

![](/img/de_bs_example_1_img_1-d8fdbf56.png)

Here we can see that, if we look only into processed data, for the input at hour `11:00` we are missing the entry with `ID=2`, and the Counter with `ID=1` has a strange zero as its value (let's just assume that our domain expert said that zeros in Counter column are anomalous).

In this case, we can backtrack in the pipeline stages, using the _Run Control Value_, and see which values have concretely contributed to the output, if all the inputs were available by the time the computation has run, or if some files were missing in the _Raw Area_ and thus they have been fulfilled with the imputed values.

In the image above, we can see that in the _Raw Area_ the inputs with `RCV=101` were both negative, and the entity with `ID=2` is related to `time=12:00`. If we then check the original file in the _Landing Area_ we can see that this file was named `1100.csv` (in the image represented as a couple of table rows for simplicity), so the entry related to the hour `12:00` was an error; the entry got thus removed in the _Processed Area_, while the other one was reset to zero by an imputation rule.

The solution of keeping the _Landing Area_ distinct from the _Raw Area_ allows us also to handle the case of Late Arriving Data.

Given the scenario described at the beginning of the article, we receive data in batches with a scheduler that drives the ingestion. So, what if, at the time of the scheduled ingestion, one of the inputs was missing and it has been fulfilled with the imputed values, but, at the time we are going to debug it, we can see that it's available?

In this case, it will be available in the _Landing Area_ but it will be missing in the _Raw Area_; so, without even opening the file to check the values, we can quickly understand that for that specific run, those values have been imputed.

<br />

#### Example 2: _Error from the sources with input data re-submission_

In the first example, we discussed about how to retrospectively analyze the processing or how to debug it. We now consider another case: a source with a problem submitted bad data on a given run; after the problem has been fixed, we want to re-ingest the data for the same run to update our output, re-executing it in the same context.

The following image shows the status of the data warehouse when the input at hour `11.00` has a couple of issues: the entry with `ID=2` is missing and the entry `ID=1` has a negative value and we have a validation rule to convert to zero the negative values. So the _Processed Area_ table contains the validated data.

![](/img/de_bs_example_2_img_1-bb498020.png)

In the fixed version of the file, there is a valid entry for each entity. The pipeline will use the `RCV=101` as a reference to clean up the table from the previous run and ingest the new file.

![](/img/de_bs_example_2_img_2-9bdc205e.png)

In this case, the _Run Control Value_ allows us to identify precisely which portion of data has been ingested with the previous execution so we can safely remove it and re-execute it with the correct one.

***

These are just two simple scenarios that can be tackled in this way, but many other data pipeline issues can benefit from this approach.

Furthermore, this mechanism allows us to have **idempotency** of the pipeline stages, i.e. being able to track the data flowing at the different stages enables the possibility to re-apply the transformations on the same input and to obtain the same result.

<br />

<br />

## Conclusions

In this article, we have dived a bit into the data engineering world, specifically discovering how to handle data from unreliable sources, most of the cases in real-world projects.

We have seen why the stage separation is important in designing a data pipeline and also which properties every "_area_" will hold; this helps us  better understand what is happening and identify the potential issues.

Another aspect we have highlighted is how this technique facilitates the handling of late-arriving data or re-ingesting corrected data, in case an issue can be recovered at the source side.

<br />

_Author: Luca Tronchin, Software Engineer @Bitrock_
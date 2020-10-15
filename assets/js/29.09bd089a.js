(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{226:function(e,t,a){"use strict";a.r(t);var i=a(19),n=Object(i.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v('Most of you have probably already heard the phrase "'),a("em",[e._v("data is the new oil")]),e._v("\", and that's because everything in our world produces valuable information. It's up to us to be able to extract the value from all the noisy, messy data that is being produced every instant.")]),e._v(" "),a("p",[e._v("But "),a("strong",[e._v("working with data is not easy")]),e._v(": as seen before, real data is always noisy, messy, and often incomplete, and even the process of extraction sometimes is affected by some faults.")]),e._v(" "),a("p",[e._v("It is thus very important to make the data usable via a process known as "),a("strong",[e._v("data wrangling")]),e._v(" (i.e. the process of cleaning, structuring, and enriching raw data into the desired format) for better decision making. The crucial thing to understand here is that "),a("strong",[e._v("bad data lead to poor decision-making")]),e._v(", so it's important to make this process stable, repeatable, and idempotent, in order to ensure that our transformations are improving the quality of the data and not degrading it.")]),e._v(" "),a("p",[e._v("Let's have a look at one of the aspects of the data wrangling process: how to handle data sources that cannot guarantee the quality of the data they are providing.")]),e._v(" "),a("br"),e._v(" "),a("h2",{attrs:{id:"the-context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-context","aria-hidden":"true"}},[e._v("#")]),e._v(" The Context")]),e._v(" "),a("p",[e._v("In a recent project we have been involved in, we faced the scenario in which the data sources were heavily unreliable.")]),e._v(" "),a("p",[e._v("Given the early definitions, the expected data, coming from a set of sensors, should have been:")]),e._v(" "),a("ul",[a("li",[e._v("approximately ten different types of data")]),e._v(" "),a("li",[e._v("every type at a fixed pace (every 10 minutes)")]),e._v(" "),a("li",[e._v("data will arrive in a landing bucket")]),e._v(" "),a("li",[e._v("data will be in CSV, with a predefined schema and a fixed number of rows")])]),e._v(" "),a("p",[e._v("Starting from this, we would have performed validation, cleaning, and aggregation, in order to compute some KPIs. Moreover, these KPIs were the starting point of a later Machine Learning based prediction.")]),e._v(" "),a("p",[e._v("On top of this, there was a requirement to produce updated reports and predictions every 10 minutes with the most up-to-date information received.")]),e._v(" "),a("p",[e._v("As in many real-world data projects, the source data was suffering from multiple issues, like missing data in the CSV (sometimes some value missing in some cells, or entire rows were missing, or sometimes there were duplicated rows), or late-arriving data (even not arriving at all).")]),e._v(" "),a("br"),e._v(" "),a("h2",{attrs:{id:"the-solution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-solution","aria-hidden":"true"}},[e._v("#")]),e._v(" The Solution")]),e._v(" "),a("p",[e._v("In similar scenarios, it is fundamental to track the transformations that the data pipeline will apply, and to answer questions like these:")]),e._v(" "),a("ul",[a("li",[e._v("which are the source values for a given result?")]),e._v(" "),a("li",[e._v("does a result value come from real data or imputed data?")]),e._v(" "),a("li",[e._v("did all the sources arrive on time?")]),e._v(" "),a("li",[e._v("how reliable is a given result?")])]),e._v(" "),a("p",[e._v("To be able to answer this type of questions, we first have to isolate three different kinds of data, in at least three areas:")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/schermata-2020-10-13-alle-11-04-46.png",alt:""}})]),e._v(" "),a("p",[e._v("Specifically, the "),a("em",[e._v("Landing Area")]),e._v(" is a place in which the external systems (i.e. data sources) will write, the data pipeline can only read from or delete after a safe retention time.")]),e._v(" "),a("p",[e._v("In the "),a("em",[e._v("Raw Area")]),e._v(" instead, we are going to copy the CSVs from the "),a("em",[e._v("Landing Area")]),e._v(" keeping the data as-is, but enriching the metadata (e.g. labeling the file, or putting it in a better directory structure). This will be our "),a("strong",[e._v("Data Lake")]),e._v(", from which we can always retrieve the original data, in case of errors during processing or a new functionality is developed after the data has already been processed by the pipeline.")]),e._v(" "),a("p",[e._v("Finally, in the "),a("em",[e._v("Processed Area")]),e._v(" we keep validated and cleaned data. This area will be the starting place for the Visualization part and the Machine Learning part.")]),e._v(" "),a("br"),e._v(" "),a("p",[e._v("After having defined the previous three areas to store the data, we need to introduce another concept that allows us to track the information through the pipeline: the "),a("strong",[e._v("Run Control Value")])]),e._v(" "),a("p",[e._v("The "),a("em",[e._v("Run Control Value")]),e._v(" is metadata, it's often a serial value or a timestamp, or others, and it gives us the possibility to correlate the data in the different areas with the pipeline executions.")]),e._v(" "),a("p",[e._v("This concept is quite simple to implement, but it's not so obvious to understand. On the other hand, it is easy to be misled; someone could think it is superfluous, and could be removed in favor of information already present in the data, such as a timestamp, but it would be wrong.")]),e._v(" "),a("p",[e._v("Let's now see, with a few examples, the benefit of using the data separation described above, together with the "),a("em",[e._v("Run Control Value")]),e._v(".")]),e._v(" "),a("br"),e._v(" "),a("h4",{attrs:{id:"example-1-tracking-data-imputation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-1-tracking-data-imputation","aria-hidden":"true"}},[e._v("#")]),e._v(" Example 1: "),a("em",[e._v("Tracking data imputation")])]),e._v(" "),a("p",[e._v("Let's first consider a scenario in which the output is odd and seems apparently wrong.  The "),a("code",[e._v("RCV")]),e._v(" column represents the "),a("em",[e._v("Run Control Value")]),e._v(" and it's being added by the pipeline.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/de_bs_example_1_img_1-d8fdbf56.png",alt:""}})]),e._v(" "),a("p",[e._v("Here we can see that, if we look only into processed data, for the input at hour "),a("code",[e._v("11:00")]),e._v(" we are missing the entry with "),a("code",[e._v("ID=2")]),e._v(", and the Counter with "),a("code",[e._v("ID=1")]),e._v(" has a strange zero as its value (let's just assume that our domain expert said that zeros in Counter column are anomalous).")]),e._v(" "),a("p",[e._v("In this case, we can backtrack in the pipeline stages, using the "),a("em",[e._v("Run Control Value")]),e._v(", and see which values have concretely contributed to the output, if all the inputs were available by the time the computation has run, or if some files were missing in the "),a("em",[e._v("Raw Area")]),e._v(" and thus they have been fulfilled with the imputed values.")]),e._v(" "),a("p",[e._v("In the image above, we can see that in the "),a("em",[e._v("Raw Area")]),e._v(" the inputs with "),a("code",[e._v("RCV=101")]),e._v(" were both negative, and the entity with "),a("code",[e._v("ID=2")]),e._v(" is related to "),a("code",[e._v("time=12:00")]),e._v(". If we then check the original file in the "),a("em",[e._v("Landing Area")]),e._v(" we can see that this file was named "),a("code",[e._v("1100.csv")]),e._v(" (in the image represented as a couple of table rows for simplicity), so the entry related to the hour "),a("code",[e._v("12:00")]),e._v(" was an error; the entry got thus removed in the "),a("em",[e._v("Processed Area")]),e._v(", while the other one was reset to zero by an imputation rule.")]),e._v(" "),a("p",[e._v("The solution of keeping the "),a("em",[e._v("Landing Area")]),e._v(" distinct from the "),a("em",[e._v("Raw Area")]),e._v(" allows us also to handle the case of Late Arriving Data.")]),e._v(" "),a("p",[e._v("Given the scenario described at the beginning of the article, we receive data in batches with a scheduler that drives the ingestion. So, what if, at the time of the scheduled trigger the ingestion, one of the inputs was missing and it has been fulfilled with the imputed values, but, at the time we are going to debug it, we can see that it's available?")]),e._v(" "),a("p",[e._v("In this case, it will be available in the "),a("em",[e._v("Landing Area")]),e._v(" but it will be missing in the "),a("em",[e._v("Raw Area")]),e._v("; so, without even opening the file to check the values, we can quickly understand that for that specific run, those values have been imputed.")]),e._v(" "),a("br"),e._v(" "),a("h4",{attrs:{id:"example-2-error-from-the-sources-with-input-data-re-submission"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-2-error-from-the-sources-with-input-data-re-submission","aria-hidden":"true"}},[e._v("#")]),e._v(" Example 2: "),a("em",[e._v("Error from the sources with input data re-submission")])]),e._v(" "),a("p",[e._v("In the first example, we discussed about how to retrospectively analyze the processing or how to debug it. We now consider another case: a source with a problem submitted bad data on a given run; after the problem has been fixed, we want to re-ingest the data for the same run to update our output, re-executing it in the same context.")]),e._v(" "),a("p",[e._v("The following image shows the status of the data warehouse when the input at hour "),a("code",[e._v("11.00")]),e._v(" has a couple of issues: the entry with "),a("code",[e._v("ID=2")]),e._v(" is missing and the entry "),a("code",[e._v("ID=1")]),e._v(" has a negative value and we have a validation rule to convert to zero the negative values. So the "),a("em",[e._v("Processed Area")]),e._v(" table contains the validated data.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/de_bs_example_2_img_1-bb498020.png",alt:""}})]),e._v(" "),a("p",[e._v("In the fixed version of the file, there is a valid entry for each entity. The pipeline will use the "),a("code",[e._v("RCV=101")]),e._v(" as a reference to clean up the table from the previous run and ingest the new file.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/de_bs_example_2_img_2-9bdc205e.png",alt:""}})]),e._v(" "),a("p",[e._v("In this case, the "),a("em",[e._v("Run Control Value")]),e._v(" allows us to identify precisely which portion of data has been ingested with the previous execution so we can safely remove it and re-execute it with the correct one.")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("These are just two simple scenarios that can be tackled in this way, but many other data pipeline issues can benefit from this approach.")]),e._v(" "),a("p",[e._v("Furthermore, this mechanism allows us to have "),a("strong",[e._v("idempotency")]),e._v(" of the pipeline stages, i.e. being able to track the data flowing at the different stages enables the possibility to re-apply the transformations on the same input and to obtain the same result.")]),e._v(" "),a("br"),e._v(" "),a("br"),e._v(" "),a("h2",{attrs:{id:"conclusions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusions","aria-hidden":"true"}},[e._v("#")]),e._v(" Conclusions")]),e._v(" "),a("p",[e._v("In this article, we have dived a bit into the data engineering world, specifically discovering how to handle data from unreliable sources, most of the cases in real-world projects.")]),e._v(" "),a("p",[e._v('We have seen why the stage separation is important in designing a data pipeline and also which properties every "'),a("em",[e._v("area")]),e._v('" will hold; this helps us  better understand what is happening and identify the potential issues.')]),e._v(" "),a("p",[e._v("Another aspect we have highlighted is how this technique facilitates the handling of late-arriving data or re-ingesting corrected data, in case an issue can be recovered at the source side.")]),e._v(" "),a("br"),e._v(" "),a("p",[a("em",[e._v("Author: Luca Tronchin, Software Engineer @Bitrock")])])])},[],!1,null,null,null);t.default=n.exports}}]);
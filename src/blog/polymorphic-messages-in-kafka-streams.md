---
title: Polymorphic Messages in Kafka Streams
image: "/img/polymorphic-messages-in-kafka-streams.png"
imageMeta:
  attribution: ''
  attributionLink: ''
author: MC
publish: 2020-08-26 08:29:00 +0000
layout: Post
category: TECHNOLOGY
tags: []

---
### Things usually start simple...

You are designing a Kafka Streams application which must read commands and produce the corresponding business event. <br>The Avro models you’re expecting to read look like this:

![](/img/1-3.png)

While the output messages you’re required to produce look like this:

![](/img/2-1.png)

You know you can leverage the **sbt-avrohugger** plugin to generate the corresponding Scala class for each Avro schema, so that you can focus only on designing the business logic.

![](/img/3-1.png)

Since the messages themselves are pretty straightforward, you decide to create a **monomorphic function** to map properties between each command and the corresponding event. <br>The resulting topology ends up looking like this:

![](/img/4-1.png)

<br>

### ...But then the domain widens
Today new functional requirements have emerged: your application must now handle **multiple types** of assets, each with its own unique properties. <br> You are pondering how to implement this requirement and make your application more resilient to further changes in behavior.

## Multiple streams
You could split both commands and events into **multiple topics**, one per asset type, so that the corresponding Avro schema stays consistent and its compatibility is ensured. <br>This solution, however, would have you replicate pretty much the same topology multiple times, so it’s not recommended unless the business logic has to be customized for each asset type.

## “All-and-none” messages
Avro doesn’t support inheritance between records, so any OOP strategy to have assets inherit properties from a common ancestor is unfortunately not viable. <br>You could however create a “Frankenstein” object with **all the properties** of each and every asset and fill in only those required for each type of asset. <br>This is definitely the worst solution from an evolutionary and maintainability point of view.

## Union types
Luckily for you, Avro offers an interesting feature named **union types**: you could express the diversity in each asset’s properties via a union of multiple payloads, still relying on one single message as wrapper.

![](/img/5-1.png)

![](/img/6-1.png)

<br>

### Enter polymorphic streams

## Objects with no shape
To cope with this advanced polymorphism, you leverage the [**shapeless**](https://github.com/milessabin/shapeless) library, which introduces the Coproduct type, the perfect companion for the Avro union type. <br>First of all, you update the custom types mapping of sbt-avrohugger, so that it generates an additional **sealed trait** for each Avro protocol containing multiple records:

![](/img/7.png)

The generated command class ends up looking like this:

![](/img/8.png)

## Updating the business logic
Thanks to shapeless’ **Poly1** trait you then write the updated business logic in a single class:

![](/img/9.png)

Changes to the topology are minimal, as you’d expect:

![](/img/10.png)

## A special kind of Serde
Now for the final piece of the puzzle, Serdes. Introducing the [**avro4s**](https://github.com/sksamuel/avro4s) library, which takes Avro GenericRecords above and beyond. <br>You create a **type class** to extend a plain old Serde providing a brand new method:

![](/img/11.png)

Now each generated class has its own Serde, tailored on the corresponding Avro schema.

## Putting everything together
Finally, the main program where you combine all ingredients:

![](/img/12.png)

<br>
<br>

### Conclusions

When multiple use cases share (almost) the same business logic, you can create a stream processing application with **ad-hoc polymorphism** and reduce the duplication of code to the minimum, while making your application even more future-proof.
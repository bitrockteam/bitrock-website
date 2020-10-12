---
title: Bringing GDPR in Kafka with Vault
image: "/img/bringing-gdpr-in-kafka-with-vault.png"
imageMeta:
  attribution: ''
  attributionLink: ''
author: MC
publish: 2020-07-23 15:20:00 +0000
layout: Post
category: TECHNOLOGY
tags: []

---
## Part 1: Concepts

GDPR introduced the “right to be forgotten”, which allows individuals to make verbal or written requests for personal data erasure. One of the common challenges when trying to comply with this requirement in an [Apache Kafka](https://kafka.apache.org/) based application infrastructure is being able to selectively delete all the Kafka records related to one of the application users.

Kafka’s data model was never supposed to support such a selective delete feature, so businesses had to find and implement workarounds. At the time of writing, the only way to delete messages in Kafka is to wait for the message retention to expire or to use compact topics that expect tombstone messages to be published, which isn't feasible in all environments and just doesn't fit all the use cases.

HashiCorp [Vault](https://www.vaultproject.io/) provides Encryption as a Service, and as it happens, can help us implement a solution without workarounds, either in application code or Kafka data model.

<br/>

##### Vault Encryption as a Service

[Vault Transit](https://www.vaultproject.io/docs/secrets/transit) secrets engine handles cryptographic operations on in-transit data without persisting any information. This allows a straightforward introduction of cryptography in existing or new applications by performing a simple HTTP request.

Vault fully and transparently manages the lifecycle of encryption keys, so neither developers or operators have to worry about keys compliance and rotation, while the securely stored data can always be encrypted and decrypted as long as the Vault is accessible.

<br/>

##### Kafka Integration

What if instead of trying to selectively eliminate the data the application is not allowed to keep, we would just make sure the application (or anyone for this matter) cannot read the data under any circumstances? This would equal physical removal of data, just as requested by GDPR compliance. Such a result can be achieved by selectively encrypting information that we might want to be able to delete and throwing away the key when the deletion is requested.

However, it is necessary to perform encryption and decryption in a transparent way for the application, to reduce refactoring and integration effort for each of the applications that are using Kafka, and unlock this functionality for the applications that cannot be adapted at all.

Kafka APIs support interceptors on message production and consumption, which is the candidate link in the chain where to leverage Vault’s encryption as a service. Inside the interceptor, we can perform the needed message transformation:

* before a record is sent to Kafka, the interceptor performs encryption and adjusts the record content with the encrypted data
* before a record is returned to a consumer client, the interceptor performs decryption and adjusts the record content with the decrypted data

![](/img/schermata-2020-07-23-alle-15-14-36.png)

<br/>

##### Logical Deletion

Does this allow us to delete all the Kafka messages related to a single user? Yes, and it is really simple. If the encryption key that we use for encrypting data in Kafka messages is different for each of our application’s users, we can go ahead and delete the encryption key to guarantee that it is no longer possible to read the user data.

<br/>

##### Replication Outside EU

Given that now the sensitive data stored in our Kafka cluster is encrypted at rest, it is possible to replicate our Kafka cluster outside the EU, for example for disaster recovery purposes. The data will only be accessible by those users that have the right permissions to perform the cryptographic operations in Vault.

<br/><br/>

## Part 2: Technicalities

In the previous part we drafted the general idea behind the integration of HashiCorp Vault and Apache Kafka for performing a fine grained encryption at rest of the messages, in order to address GDPR compliance requirements within Kafka. In this part, instead, we do a deep dive on how to bring this idea alive.

![](/img/schermata-2020-07-23-alle-15-14-36.png)

<br/>

##### Vault Transit Secrets Engine

Vault Transit secrets engine is part of Vault Open Source, and it is really easy to get started with. Setting the engine up is just a matter of enabling it and creating some encryption keys:

![](/img/d3.png)

Crypto operations can be performed as well in a really simple way, it’s just a matter of providing base64 encoded plaintext data:

![](/img/d4.png)

The resulting ciphertext will look like **vault:v1:<encrypted-data>** - where v1 represents the first key generation, given it has not been rotated yet.

What about decryption? Well, it’s just another API call:

![](/img/d5.png)

Integrating Vault’s Encryption as a Service within your application becomes really easy to implement and requires little to no refactoring of the existing codebase.

![](/img/d6.png)

<br/>

##### Kafka Producer Interceptor

The Producer Interceptor [API](https://kafka.apache.org/25/javadoc/org/apache/kafka/clients/producer/ProducerInterceptor.html) can intercept and possibly mutate the records received by the producer before they are published to the Kafka cluster. In this scenario, the goal is to perform encryption within this interceptor, in order to avoid sending plaintext data to the Kafka cluster...

![](/img/d7.png)

Integrating encryption in the Producer Interceptor is straightforward, given that the **onSend** method is invoked one message at a time.

<br/>

##### Kafka Consumer Interceptor

The Consumer Interceptor [API](https://kafka.apache.org/25/javadoc/org/apache/kafka/clients/consumer/ConsumerInterceptor.html) can intercept and possibly mutate the records received by the consumer. In this scenario, we want to perform decryption of the data received from Kafka cluster and return plaintext data to the consumer.

![](/img/d8.png)

Integrating decryption with Consumer Interceptor is a bit trickier because we wanted to leverage the batch decryption capabilities of Vault, in order to minimize Vault API calls.

<br/>

##### Usage

Once you have built your interceptors, enabling them is just a matter of configuring your Consumer or Producer client:

![](/img/d9.png)

or

![](/img/d10.png)

Notice that value and key serializer class must be set to the StringSerializer, since Vault Transit can only handle strings containing base64 data. The client invoking Kafka Producer and Consumer API, however, is able to process any supported type of data, according to the serializer or deserializer configured in the **interceptor.value.serializer** or **interceptor.value.deserializer** properties.

<br/><br/>

#### Conclusions

HashiCorp Vault Transit secrets engine is definitely the technological component you may want to leverage when addressing cryptographical requirements in your application, even when dealing with legacy components. The entire set of capabilities offered by HashiCorp Vault makes it easy to modernize applications on a security perspective, allowing developers to focus on the business logic rather than spending time in finding a way to properly manage secrets.

<br/><br/>

_Author: Simone Ripamonti, DevOps Engineer @Bitrock_
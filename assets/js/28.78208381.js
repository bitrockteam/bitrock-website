(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{207:function(e,t,a){"use strict";a.r(t);var r=a(19),i=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"part-1-concepts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#part-1-concepts","aria-hidden":"true"}},[e._v("#")]),e._v(" Part 1: Concepts")]),e._v(" "),a("p",[e._v("GDPR introduced the “right to be forgotten”, which allows individuals to make verbal or written requests for personal data erasure. One of the common challenges when trying to comply with this requirement in an "),a("a",{attrs:{href:"https://kafka.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache Kafka"),a("OutboundLink")],1),e._v(" based application infrastructure is being able to selectively delete all the Kafka records related to one of the application users.")]),e._v(" "),a("p",[e._v("Kafka’s data model was never supposed to support such a selective delete feature, so businesses had to find and implement workarounds. At the time of writing, the only way to delete messages in Kafka is to wait for the message retention to expire or to use compact topics that expect tombstone messages to be published, which isn't feasible in all environments and just doesn't fit all the use cases.")]),e._v(" "),a("p",[e._v("HashiCorp "),a("a",{attrs:{href:"https://www.vaultproject.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vault"),a("OutboundLink")],1),e._v(" provides Encryption as a Service, and as it happens, can help us implement a solution without workarounds, either in application code or Kafka data model.")]),e._v(" "),a("br"),e._v(" "),a("h5",{attrs:{id:"vault-encryption-as-a-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vault-encryption-as-a-service","aria-hidden":"true"}},[e._v("#")]),e._v(" Vault Encryption as a Service")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.vaultproject.io/docs/secrets/transit",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vault Transit"),a("OutboundLink")],1),e._v(" secrets engine handles cryptographic operations on in-transit data without persisting any information. This allows a straightforward introduction of cryptography in existing or new applications by performing a simple HTTP request.")]),e._v(" "),a("p",[e._v("Vault fully and transparently manages the lifecycle of encryption keys, so neither developers or operators have to worry about keys compliance and rotation, while the securely stored data can always be encrypted and decrypted as long as the Vault is accessible.")]),e._v(" "),a("br"),e._v(" "),a("h5",{attrs:{id:"kafka-integration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kafka-integration","aria-hidden":"true"}},[e._v("#")]),e._v(" Kafka Integration")]),e._v(" "),a("p",[e._v("What if instead of trying to selectively eliminate the data the application is not allowed to keep, we would just make sure the application (or anyone for this matter) cannot read the data under any circumstances? This would equal physical removal of data, just as requested by GDPR compliance. Such a result can be achieved by selectively encrypting information that we might want to be able to delete and throwing away the key when the deletion is requested.")]),e._v(" "),a("p",[e._v("However, it is necessary to perform encryption and decryption in a transparent way for the application, to reduce refactoring and integration effort for each of the applications that are using Kafka, and unlock this functionality for the applications that cannot be adapted at all.")]),e._v(" "),a("p",[e._v("Kafka APIs support interceptors on message production and consumption, which is the candidate link in the chain where to leverage Vault’s encryption as a service. Inside the interceptor, we can perform the needed message transformation:")]),e._v(" "),a("ul",[a("li",[e._v("before a record is sent to Kafka, the interceptor performs encryption and adjusts the record content with the encrypted data")]),e._v(" "),a("li",[e._v("before a record is returned to a consumer client, the interceptor performs decryption and adjusts the record content with the decrypted data")])]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/schermata-2020-07-23-alle-15-14-36.png",alt:""}})]),e._v(" "),a("br"),e._v(" "),a("h5",{attrs:{id:"logical-deletion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logical-deletion","aria-hidden":"true"}},[e._v("#")]),e._v(" Logical Deletion")]),e._v(" "),a("p",[e._v("Does this allow us to delete all the Kafka messages related to a single user? Yes, and it is really simple. If the encryption key that we use for encrypting data in Kafka messages is different for each of our application’s users, we can go ahead and delete the encryption key to guarantee that it is no longer possible to read the user data.")]),e._v(" "),a("br"),e._v(" "),a("h5",{attrs:{id:"replication-outside-eu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replication-outside-eu","aria-hidden":"true"}},[e._v("#")]),e._v(" Replication Outside EU")]),e._v(" "),a("p",[e._v("Given that now the sensitive data stored in our Kafka cluster is encrypted at rest, it is possible to replicate our Kafka cluster outside the EU, for example for disaster recovery purposes. The data will only be accessible by those users that have the right permissions to perform the cryptographic operations in Vault.")]),e._v(" "),a("p",[a("br"),a("br")]),e._v(" "),a("h2",{attrs:{id:"part-2-technicalities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#part-2-technicalities","aria-hidden":"true"}},[e._v("#")]),e._v(" Part 2: Technicalities")]),e._v(" "),a("p",[e._v("In the previous part we drafted the general idea behind the integration of HashiCorp Vault and Apache Kafka for performing a fine grained encryption at rest of the messages, in order to address GDPR compliance requirements within Kafka. In this part, instead, we do a deep dive on how to bring this idea alive.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/schermata-2020-07-23-alle-15-14-36.png",alt:""}})]),e._v(" "),a("br"),e._v(" "),a("h5",{attrs:{id:"vault-transit-secrets-engine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vault-transit-secrets-engine","aria-hidden":"true"}},[e._v("#")]),e._v(" Vault Transit Secrets Engine")]),e._v(" "),a("p",[e._v("Vault Transit secrets engine is part of Vault Open Source, and it is really easy to get started with. Setting the engine up is just a matter of enabling it and creating some encryption keys:")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/d3.png",alt:""}})]),e._v(" "),a("p",[e._v("Crypto operations can be performed as well in a really simple way, it’s just a matter of providing base64 encoded plaintext data:")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/d4.png",alt:""}})]),e._v(" "),a("p",[e._v("The resulting ciphertext will look like "),a("strong",[e._v("vault:v1:"),a("encrypted-data")],1),e._v(" - where v1 represents the first key generation, given it has not been rotated yet.")]),e._v(" "),a("p",[e._v("What about decryption? Well, it’s just another API call:")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/d5.png",alt:""}})]),e._v(" "),a("p",[e._v("Integrating Vault’s Encryption as a Service within your application becomes really easy to implement and requires little to no refactoring of the existing codebase.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/d6.png",alt:""}})]),e._v(" "),a("br"),e._v(" "),a("h5",{attrs:{id:"kafka-producer-interceptor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kafka-producer-interceptor","aria-hidden":"true"}},[e._v("#")]),e._v(" Kafka Producer Interceptor")]),e._v(" "),a("p",[e._v("The Producer Interceptor "),a("a",{attrs:{href:"https://kafka.apache.org/25/javadoc/org/apache/kafka/clients/producer/ProducerInterceptor.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("API"),a("OutboundLink")],1),e._v(" can intercept and possibly mutate the records received by the producer before they are published to the Kafka cluster. In this scenario, the goal is to perform encryption within this interceptor, in order to avoid sending plaintext data to the Kafka cluster...")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/d7.png",alt:""}})]),e._v(" "),a("p",[e._v("Integrating encryption in the Producer Interceptor is straightforward, given that the "),a("strong",[e._v("onSend")]),e._v(" method is invoked one message at a time.")]),e._v(" "),a("br"),e._v(" "),a("h5",{attrs:{id:"kafka-consumer-interceptor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kafka-consumer-interceptor","aria-hidden":"true"}},[e._v("#")]),e._v(" Kafka Consumer Interceptor")]),e._v(" "),a("p",[e._v("The Consumer Interceptor "),a("a",{attrs:{href:"https://kafka.apache.org/25/javadoc/org/apache/kafka/clients/consumer/ConsumerInterceptor.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("API"),a("OutboundLink")],1),e._v(" can intercept and possibly mutate the records received by the consumer. In this scenario, we want to perform decryption of the data received from Kafka cluster and return plaintext data to the consumer.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/d8.png",alt:""}})]),e._v(" "),a("p",[e._v("Integrating decryption with Consumer Interceptor is a bit trickier because we wanted to leverage the batch decryption capabilities of Vault, in order to minimize Vault API calls.")]),e._v(" "),a("br"),e._v(" "),a("h5",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("p",[e._v("Once you have built your interceptors, enabling them is just a matter of configuring your Consumer or Producer client:")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/d9.png",alt:""}})]),e._v(" "),a("p",[e._v("or")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/d10.png",alt:""}})]),e._v(" "),a("p",[e._v("Notice that value and key serializer class must be set to the StringSerializer, since Vault Transit can only handle strings containing base64 data. The client invoking Kafka Producer and Consumer API, however, is able to process any supported type of data, according to the serializer or deserializer configured in the "),a("strong",[e._v("interceptor.value.serializer")]),e._v(" or "),a("strong",[e._v("interceptor.value.deserializer")]),e._v(" properties.")]),e._v(" "),a("p",[a("br"),a("br")]),e._v(" "),a("h4",{attrs:{id:"conclusions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusions","aria-hidden":"true"}},[e._v("#")]),e._v(" Conclusions")]),e._v(" "),a("p",[e._v("HashiCorp Vault Transit secrets engine is definitely the technological component you may want to leverage when addressing cryptographical requirements in your application, even when dealing with legacy components. The entire set of capabilities offered by HashiCorp Vault makes it easy to modernize applications on a security perspective, allowing developers to focus on the business logic rather than spending time in finding a way to properly manage secrets.")]),e._v(" "),a("p",[a("br"),a("br")]),e._v(" "),a("p",[a("em",[e._v("Author: Simone Ripamonti, DevOps Engineer @Bitrock.")])])])},[],!1,null,null,null);t.default=i.exports}}]);
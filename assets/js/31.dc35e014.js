(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{214:function(e,t,s){"use strict";s.r(t);var a=s(19),r=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"things-usually-start-simple"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#things-usually-start-simple","aria-hidden":"true"}},[e._v("#")]),e._v(" Things usually start simple...")]),e._v(" "),s("p",[e._v("You are designing a Kafka Streams application which must read commands and produce the corresponding business event.")]),e._v(" "),s("p",[e._v("The Avro models you’re expecting to read look like this:")]),e._v(" "),s("p",[s("img",{attrs:{src:"/img/1-3.png",alt:""}})]),e._v(" "),s("p",[e._v("While the output messages you’re required to produce look like this:"),s("img",{attrs:{src:"/img/2-1.png",alt:""}})]),e._v(" "),s("p",[e._v("You know you can leverage the "),s("strong",[e._v("sbt-avrohugger")]),e._v(" plugin to generate the corresponding Scala class for each Avro schema, so that you can focus only on designing the business logic.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/img/3-1.png",alt:""}})]),e._v(" "),s("p",[e._v("Since the messages themselves are pretty straightforward, you decide to create a "),s("strong",[e._v("monomorphic function")]),e._v(" to map properties between each command and the corresponding event.")]),e._v(" "),s("p",[e._v("The resulting topology ends up looking like this:")]),e._v(" "),s("p",[s("img",{attrs:{src:"/img/4-1.png",alt:""}})]),e._v(" "),s("h2",{attrs:{id:"but-then-the-domain-widens"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#but-then-the-domain-widens","aria-hidden":"true"}},[e._v("#")]),e._v(" ...But then the domain widens")]),e._v(" "),s("p",[e._v("Today new functional requirements have emerged: your application must now handle "),s("strong",[e._v("multiple types")]),e._v(" of assets, each with its own unique properties.")]),e._v(" "),s("p",[e._v("You are pondering how to implement this requirement and make your application more resilient to further changes in behavior.")]),e._v(" "),s("h3",{attrs:{id:"multiple-streams"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multiple-streams","aria-hidden":"true"}},[e._v("#")]),e._v(" Multiple streams")]),e._v(" "),s("p",[e._v("You could split both commands and events into "),s("strong",[e._v("multiple topics")]),e._v(", one per asset type, so that the corresponding Avro schema stays consistent and its compatibility is ensured.")]),e._v(" "),s("p",[e._v("This solution, however, would have you replicate pretty much the same topology multiple times, so it’s not recommended unless the business logic has to be customized for each asset type.")]),e._v(" "),s("h3",{attrs:{id:"all-and-none-messages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#all-and-none-messages","aria-hidden":"true"}},[e._v("#")]),e._v(" “All-and-none” messages")]),e._v(" "),s("p",[e._v("Avro doesn’t support inheritance between records, so any OOP strategy to have assets inherit properties from a common ancestor is unfortunately not viable.")]),e._v(" "),s("p",[e._v("You could however create a “Frankenstein” object with "),s("strong",[e._v("all the properties")]),e._v(" of each and every asset and fill in only those required for each type of asset.")]),e._v(" "),s("p",[e._v("This is definitely the worst solution from an evolutionary and maintainability point of view.")]),e._v(" "),s("h3",{attrs:{id:"union-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#union-types","aria-hidden":"true"}},[e._v("#")]),e._v(" Union types")]),e._v(" "),s("p",[e._v("Luckily for you, Avro offers an interesting feature named "),s("strong",[e._v("union types")]),e._v(": you could express the diversity in each asset’s properties via a union of multiple payloads, still relying on one single message as wrapper.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/img/5-1.png",alt:""}})]),e._v(" "),s("p",[s("img",{attrs:{src:"/img/6-1.png",alt:""}})]),e._v(" "),s("h2",{attrs:{id:"enter-polymorphic-streams"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enter-polymorphic-streams","aria-hidden":"true"}},[e._v("#")]),e._v(" Enter polymorphic streams")]),e._v(" "),s("h3",{attrs:{id:"objects-with-no-shape"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#objects-with-no-shape","aria-hidden":"true"}},[e._v("#")]),e._v(" Objects with no shape")]),e._v(" "),s("p",[e._v("To cope with this advanced polymorphism, you leverage the "),s("a",{attrs:{href:"https://github.com/milessabin/shapeless",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[e._v("shapeless")]),s("OutboundLink")],1),e._v(" library, which introduces the Coproduct type, the perfect companion for the Avro union type.")]),e._v(" "),s("p",[e._v("First of all, you update the custom types mapping of sbt-avrohugger, so that it generates an additional "),s("strong",[e._v("sealed trait")]),e._v(" for each Avro protocol containing multiple records:")]),e._v(" "),s("p",[s("img",{attrs:{src:"/img/7.png",alt:""}})]),e._v(" "),s("p",[e._v("The generated command class ends up looking like this:")]),e._v(" "),s("p",[s("img",{attrs:{src:"/img/8.png",alt:""}})]),e._v(" "),s("h3",{attrs:{id:"updating-the-business-logic"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updating-the-business-logic","aria-hidden":"true"}},[e._v("#")]),e._v(" Updating the business logic")]),e._v(" "),s("p",[e._v("Thanks to shapeless’ "),s("strong",[e._v("Poly1")]),e._v(" trait you then write the updated business logic in a single class:")]),e._v(" "),s("p",[s("img",{attrs:{src:"/img/9.png",alt:""}})]),e._v(" "),s("p",[e._v("Changes to the topology are minimal, as you’d expect:")]),e._v(" "),s("p",[s("img",{attrs:{src:"/img/10.png",alt:""}})]),e._v(" "),s("h3",{attrs:{id:"a-special-kind-of-serde"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a-special-kind-of-serde","aria-hidden":"true"}},[e._v("#")]),e._v(" A special kind of Serde")]),e._v(" "),s("p",[e._v("Now for the final piece of the puzzle, Serdes. Introducing the "),s("a",{attrs:{href:"https://github.com/sksamuel/avro4s",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[e._v("avro4s")]),s("OutboundLink")],1),e._v(" library, which takes Avro GenericRecords above and beyond.")]),e._v(" "),s("p",[e._v("You create a "),s("strong",[e._v("type class")]),e._v(" to extend a plain old Serde providing a brand new method:")]),e._v(" "),s("p",[s("img",{attrs:{src:"/img/11.png",alt:""}})]),e._v(" "),s("p",[e._v("Now each generated class has its own Serde, tailored on the corresponding Avro schema.")]),e._v(" "),s("h3",{attrs:{id:"putting-everything-together"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#putting-everything-together","aria-hidden":"true"}},[e._v("#")]),e._v(" Putting everything together")]),e._v(" "),s("p",[e._v("Finally, the main program where you combine all ingredients:")]),e._v(" "),s("p",[s("img",{attrs:{src:"/img/12.png",alt:""}})]),e._v(" "),s("h2",{attrs:{id:"conclusions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conclusions","aria-hidden":"true"}},[e._v("#")]),e._v(" Conclusions")]),e._v(" "),s("p",[e._v("When multiple use cases share (almost) the same business logic, you can create a stream processing application with "),s("strong",[e._v("ad-hoc polymorphism")]),e._v(" and reduce the duplication of code to the minimum, while making your application even more future-proof.")])])},[],!1,null,null,null);t.default=r.exports}}]);
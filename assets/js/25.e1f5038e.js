(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{204:function(e,t,a){"use strict";a.r(t);var i=a(19),s=Object(i.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("br"),e._v(" "),a("h5",{attrs:{id:"what-is-deno"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-deno","aria-hidden":"true"}},[e._v("#")]),e._v(" What is Deno?")]),e._v(" "),a("p",[e._v("“A secure runtime for JavaScript and TypeScript.” This is the definition contained in the official "),a("a",{attrs:{href:"https://deno.land/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Deno"),a("OutboundLink")],1),e._v(" website.")]),e._v(" "),a("p",[e._v("Before going into details, let’s start by clarifying the two main concepts included in this definition.")]),e._v(" "),a("br"),e._v(" "),a("h5",{attrs:{id:"what-is-a-runtime-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-runtime-system","aria-hidden":"true"}},[e._v("#")]),e._v(" What is a runtime system?")]),e._v(" "),a("p",[e._v("As for Deno, we can say that’s what makes Javascript run outside the browser, adding a series of features that it is not possible to find in the Javascript engine itself.")]),e._v(" "),a("br"),e._v(" "),a("h5",{attrs:{id:"what-is-typescript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-typescript","aria-hidden":"true"}},[e._v("#")]),e._v(" What is Typescript?")]),e._v(" "),a("p",[e._v("Typescript is a superset of Javascript, which adds a series of features that make the language more interesting. Its main features are:")]),e._v(" "),a("ul",[a("li",[e._v("Optional static typing")]),e._v(" "),a("li",[e._v("Type inference")]),e._v(" "),a("li",[e._v("Improved Classes")]),e._v(" "),a("li",[e._v("Interfaces")])]),e._v(" "),a("p",[e._v("At this point, you may find a similarity between Node and our Deno definition, since they seem to do almost the same thing and they are both built upon the Javascript V8 engine.")]),e._v(" "),a("br"),e._v(" "),a("h5",{attrs:{id:"so-why-deno"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#so-why-deno","aria-hidden":"true"}},[e._v("#")]),e._v(" So Why Deno?")]),e._v(" "),a("p",[e._v("“Deno” - as Ryan Dahl, Creator of both Deno and Node, said - “is not by any means a rival of Node”. Simply, he was no longer happy with Node and decided to create a new runtime to make up for its “mistakes” and shortages (and adding also a bunch of new features).")]),e._v(" "),a("br"),e._v(" "),a("br"),e._v(" "),a("h4",{attrs:{id:"getting-closer-to-deno"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-closer-to-deno","aria-hidden":"true"}},[e._v("#")]),e._v(" Getting closer to Deno")]),e._v(" "),a("p",[e._v("Let’s now discover what makes Deno so promising and interesting, along with some key differences with Node.js:")]),e._v(" "),a("br"),e._v(" "),a("h5",{attrs:{id:"deno-supports-out-of-the-box-typescript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deno-supports-out-of-the-box-typescript","aria-hidden":"true"}},[e._v("#")]),e._v(" Deno supports out-of-the-box Typescript")]),e._v(" "),a("p",[e._v("Deno can run Typescript code without installing additional libraries, such as ‘ts-node’.")]),e._v(" "),a("p",[e._v("It is possible to create an app.ts file and make it run with the simple command “Deno run app.ts”, without any other additional step.")]),e._v(" "),a("br"),e._v(" "),a("h5",{attrs:{id:"es-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es-modules","aria-hidden":"true"}},[e._v("#")]),e._v(" ES Modules")]),e._v(" "),a("p",[e._v("Deno drops Commonjs Modules, which are still used in Node.js, and embraces the modern ES modules that are defined as standard in the Javascript world and mostly used in the front-end development scenario.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/deno1.png",alt:""}})]),e._v(" "),a("p",[a("strong",[e._v("Deno borrows from Golang")]),e._v(" the possibility to import the modules directly from an Url.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/deno2.png",alt:""}})]),e._v(" "),a("br"),e._v(" "),a("h5",{attrs:{id:"security-first"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-first","aria-hidden":"true"}},[e._v("#")]),e._v(" Security First")]),e._v(" "),a("p",[e._v("Deno implements a philosophy of “least privileges” when it comes to security.To run a script, indeed, you need to add appropriate flags in order to enable certain permissions.")]),e._v(" "),a("p",[e._v("Here’s the list of flags that can be used:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("--allow-env")]),e._v(": allow environment access")]),e._v(" "),a("li",[a("code",[e._v("--allow-hrtime")]),e._v(": allow high-resolution time measurement")]),e._v(" "),a("li",[a("code",[e._v("--allow-net=<allow-net>")]),e._v(": allow network access")]),e._v(" "),a("li",[a("code",[e._v("--allow-plugin")]),e._v(": allow loading plugins")]),e._v(" "),a("li",[a("code",[e._v("--allow-read=<allow-read>")]),e._v(": allow file system read access")]),e._v(" "),a("li",[a("code",[e._v("--allow-run")]),e._v(": allow running subprocesses")]),e._v(" "),a("li",[a("code",[e._v("--allow-write=<allow-write>")]),e._v(": allow file system write access")]),e._v(" "),a("li",[a("code",[e._v("--allow-all")]),e._v(": allow all permissions (same as -A)")])]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/deno3.png",alt:""}})]),e._v(" "),a("br"),e._v(" "),a("h5",{attrs:{id:"standard-libraries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#standard-libraries","aria-hidden":"true"}},[e._v("#")]),e._v(" Standard Libraries")]),e._v(" "),a("p",[e._v("These libraries (click "),a("a",{attrs:{href:"http://deno.land",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" to find out more) are developed and maintained by the core team of Deno.")]),e._v(" "),a("p",[e._v("Many other languages - Python included - share this concept of having a library of reference that is stable and tested by developers who maintain it.")]),e._v(" "),a("p",[e._v("Deno is at an initial stage, so the list is still short - but certainly there will be further implementations in the future.")]),e._v(" "),a("br"),e._v(" "),a("h5",{attrs:{id:"built-in-tools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#built-in-tools","aria-hidden":"true"}},[e._v("#")]),e._v(" Built-in Tools")]),e._v(" "),a("p",[e._v("When it comes to Node.Js, if you want to have specific tools, you have to install them manually; furthermore, they are essentially third-parties tools, which are not maintained by the Node Team.")]),e._v(" "),a("p",[e._v("Deno, instead, embraces another philosophy: it offers, indeed, a built-in tool to improve the development. This creates a standard, which makes Deno not so dispersive as the Node ecosystem.")]),e._v(" "),a("p",[e._v("Here’s a partial list of them, along with the "),a("a",{attrs:{href:"https://deno.land/manual/tools",target:"_blank",rel:"noopener noreferrer"}},[e._v("link"),a("OutboundLink")],1),e._v(" to the relevant documentation for a deeper understanding of the topic:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("fmt")]),e._v(" a built-in code formatter (similar to gofmt in Go)")]),e._v(" "),a("li",[a("strong",[e._v("test")]),e._v(": runs test")]),e._v(" "),a("li",[a("strong",[e._v("debugger")])]),e._v(" "),a("li",[a("strong",[e._v("Bundler")])]),e._v(" "),a("li",[a("strong",[e._v("Documentation Generator")])]),e._v(" "),a("li",[a("strong",[e._v("Dependency inspector")])]),e._v(" "),a("li",[a("strong",[e._v("Linter")])])]),e._v(" "),a("br"),e._v(" "),a("h5",{attrs:{id:"compatibility-with-browser-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compatibility-with-browser-api","aria-hidden":"true"}},[e._v("#")]),e._v(" Compatibility with Browser API")]),e._v(" "),a("p",[e._v("Deno API was created to be as compatible as possible with the Browser API, in order to be able to implement any upcoming feature easily. This is one of the main “issues” that Node has, since it uses an incompatible global namespace (“Global” instead of “window”). This is the reason why an API like Fetch has never been implemented in Node.")]),e._v(" "),a("br"),e._v(" "),a("h5",{attrs:{id:"style-guide-to-building-a-module-opinionated-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#style-guide-to-building-a-module-opinionated-modules","aria-hidden":"true"}},[e._v("#")]),e._v(" Style Guide to building a Module (Opinionated Modules)")]),e._v(" "),a("p",[e._v("Unlike Node, Deno has a set of rules that a Developer should follow in order to publish a module. This can avoid the creation of a different way to reach the same output, thus creating a standard - which is a main principle within the Deno ecosystem. To find out more about the topic, click "),a("a",{attrs:{href:"https://deno.land/manual/contributing/style_guide",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("br"),e._v(" "),a("h5",{attrs:{id:"where-is-package-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-is-package-json","aria-hidden":"true"}},[e._v("#")]),e._v(" Where is package.json?")]),e._v(" "),a("p",[e._v("As seen before, there is no package.json in Deno where it is possible to put all the dependencies. The answer is deps.ts.")]),e._v(" "),a("p",[e._v("Deps is used for 2 main reasons:")]),e._v(" "),a("ul",[a("li",[e._v("to group all the dependencies needed for the project;")]),e._v(" "),a("li",[e._v("to manage versions.")])]),e._v(" "),a("p",[e._v("This is a sort of replication of package.json present in Node.js, but many Developers are no longer considering it as best practice because of the decentralized nature of Deno. Indeed, they are now experimenting a better way to organize the code, which might lead to a different management of the modules. Let’s see how it will evolve in the future...")]),e._v(" "),a("p",[e._v("Here’s an example of a deps.ts file:")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/deno4.png",alt:""}})]),e._v(" "),a("br"),e._v(" "),a("h5",{attrs:{id:"what-about-locking-the-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-about-locking-the-dependencies","aria-hidden":"true"}},[e._v("#")]),e._v(" What about locking the dependencies?")]),e._v(" "),a("p",[e._v("A file called lock.json is needed in order to lock them. By using the following command, it is possible to cache and assign a hash to every dependency, in a way that no one can temper it:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("deno cache --lock"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("lock.json --lock-write src/deps.ts\n")])])]),a("p",[e._v("For further explanation about integrity check and lock files, please have a look at the "),a("a",{attrs:{href:"https://deno.land/manual/linking_to_external_code/integrity_checking",target:"_blank",rel:"noopener noreferrer"}},[e._v("official documentation"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("br"),e._v(" "),a("h5",{attrs:{id:"server-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-setup","aria-hidden":"true"}},[e._v("#")]),e._v(" Server Setup")]),e._v(" "),a("p",[e._v("As last point, here’s a quick but interesting comparison between a server setup in Node and in Deno.")]),e._v(" "),a("p",[e._v("Node server:")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/deno5.png",alt:"An example of Node server"}})]),e._v(" "),a("p",[e._v("Deno Server:")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/deno6.png",alt:"An example of Deno server"}})]),e._v(" "),a("p",[e._v("As you can notice, the snippets are pretty similar, but with fundamental differences that can sum up what we discussed above. More specifically:")]),e._v(" "),a("ul",[a("li",[e._v("ES modules;")]),e._v(" "),a("li",[e._v("decentralized import from an URL;")]),e._v(" "),a("li",[e._v("nextgen javascript feature out of the box;")]),e._v(" "),a("li",[e._v("the permission needed to run the script.")])]),e._v(" "),a("br"),e._v(" "),a("br"),e._v(" "),a("h4",{attrs:{id:"future-improvements-on-the-roadmap-and-conclusions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#future-improvements-on-the-roadmap-and-conclusions","aria-hidden":"true"}},[e._v("#")]),e._v(" Future Improvements on the Roadmap and Conclusions")]),e._v(" "),a("p",[e._v("One of the key features in roadmap is the possibility to create a single executable file, as it happens now in many other languages (like Golang, for instance) - something that could revolutionize the Javascript ecosystem itself.")]),e._v(" "),a("p",[e._v("Also the compatibility layer with the Node.js stdlib is still in progress; this could lead to a faster development of the runtime system.")]),e._v(" "),a("p",[e._v("To sum up, we can say that Deno is in continuous evolution and probably will be the next game-changer of the Javascript ecosystem. The foundations for this runtime are in place and it is already a hot topic, so... keep an eye out!")])])},[],!1,null,null,null);t.default=s.exports}}]);
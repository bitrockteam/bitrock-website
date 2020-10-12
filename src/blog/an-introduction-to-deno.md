---
title: An Introduction to "Deno"
image: "/img/deno.png"
imageMeta:
  attribution: ''
  attributionLink: ''
author: MC
publish: 2020-07-02T07:28:52.000+00:00
layout: Post
category: TECHNOLOGY
tags: []

---
<br />

##### What is Deno?

“A secure runtime for JavaScript and TypeScript.” This is the definition contained in the official [Deno](https://deno.land/) website.

Before going into details, let’s start by clarifying the two main concepts included in this definition.

<br />

##### What is a runtime system?

As for Deno, we can say that’s what makes Javascript run outside the browser, adding a series of features that it is not possible to find in the Javascript engine itself.

<br />

##### What is Typescript?

Typescript is a superset of Javascript, which adds a series of features that make the language more interesting. Its main features are:

* Optional static typing
* Type inference
* Improved Classes
* Interfaces

At this point, you may find a similarity between Node and our Deno definition, since they seem to do almost the same thing and they are both built upon the Javascript V8 engine.

<br />

##### So Why Deno?

“Deno” - as Ryan Dahl, Creator of both Deno and Node, said - “is not by any means a rival of Node”. Simply, he was no longer happy with Node and decided to create a new runtime to make up for its “mistakes” and shortages (and adding also a bunch of new features).

<br />
<br />

#### Getting closer to Deno

Let’s now discover what makes Deno so promising and interesting, along with some key differences with Node.js:

<br />

##### Deno supports out-of-the-box Typescript

Deno can run Typescript code without installing additional libraries, such as ‘ts-node’.

It is possible to create an app.ts file and make it run with the simple command “Deno run app.ts”, without any other additional step.

<br />

##### ES Modules

Deno drops Commonjs Modules, which are still used in Node.js, and embraces the modern ES modules that are defined as standard in the Javascript world and mostly used in the front-end development scenario.

![](/img/deno1.png)

**Deno borrows from Golang** the possibility to import the modules directly from an Url.

![](/img/deno2.png)

<br />

##### Security First

Deno implements a philosophy of “least privileges” when it comes to security.To run a script, indeed, you need to add appropriate flags in order to enable certain permissions.

Here’s the list of flags that can be used:

* `--allow-env`: allow environment access
* `--allow-hrtime`: allow high-resolution time measurement
* `--allow-net=<allow-net>`: allow network access
* `--allow-plugin`: allow loading plugins
* `--allow-read=<allow-read>`: allow file system read access
* `--allow-run`: allow running subprocesses
* `--allow-write=<allow-write>`: allow file system write access
* `--allow-all`: allow all permissions (same as -A)

![](/img/deno3.png)

<br />

##### Standard Libraries

These libraries (click [here](http://deno.land) to find out more) are developed and maintained by the core team of Deno.

Many other languages - Python included - share this concept of having a library of reference that is stable and tested by developers who maintain it.

Since Deno is at an initial stage, the list is still short - but certainly there will be further implementations in the future.

<br />

##### Built-in Tools

When it comes to Node.Js, if you want to have specific tools, you have to install them manually; furthermore, they are essentially third-parties tools, which are not maintained by the Node Team.

Deno, instead, embraces another philosophy: it offers, indeed, a built-in tool to improve the development. This creates a standard, which makes Deno not so dispersive as the Node ecosystem.

Here’s a partial list of them, along with the [link](https://deno.land/manual/tools) to the relevant documentation for a deeper understanding of the topic:

* **fmt** a built-in code formatter (similar to gofmt in Go)
* **test**: runs test
* **debugger**
* **Bundler**
* **Documentation Generator**
* **Dependency inspector**
* **Linter**

<br />

##### Compatibility with Browser API

Deno API was created to be as compatible as possible with the Browser API, in order to be able to implement any upcoming feature easily. This is one of the main “issues” that Node has, since it uses an incompatible global namespace (“Global” instead of “window”). This is the reason why an API like Fetch has never been implemented in Node.

<br />

##### Style Guide to building a Module (Opinionated Modules)

Unlike Node, Deno has a set of rules that a Developer should follow in order to publish a module. This can avoid the creation of a different way to reach the same output, thus creating a standard - which is a main principle within the Deno ecosystem. To find out more about the topic, click [here](https://deno.land/manual/contributing/style_guide).

<br />

##### Where is package.json?

As seen before, there is no package.json in Deno where it is possible to put all the dependencies. The answer, then, is deps.ts.

Deps is used for 2 main reasons:

* to group all the dependencies needed for the project;
* to manage versions.

This is a sort of replication of package.json present in Node.js, but many Developers are no longer considering it as best practice because of the decentralized nature of Deno. Indeed, they are now experimenting a better way to organize the code, which might lead to a different management of the modules. Let’s see how it will evolve in the future...

Here’s an example of a deps.ts file:

![](/img/deno4.png)

<br />

##### What about locking the dependencies?

A file called lock.json is needed in order to lock them. By using the following command, it is possible to cache and assign a hash to every dependency, in a way that no one can temper it:

```bash
deno cache --lock=lock.json --lock-write src/deps.ts
```

For further explanation about integrity check and lock files, please have a look at the [official documentation](https://deno.land/manual/linking_to_external_code/integrity_checking).

<br />

##### Server Setup

Last but not least, here’s a quick but interesting comparison between a server setup in Node and in Deno.

Node server:

![An example of Node server](/img/deno5.png)

Deno Server:

![An example of Deno server](/img/deno6.png)

As you can notice, the snippets are pretty similar, but with fundamental differences that can sum up what we discussed above. More specifically:

* ES modules;
* decentralized import from an URL;
* nextgen javascript feature out of the box;
* the permission needed to run the script.

<br />
<br />

#### Future Improvements on the Roadmap and Conclusions

One of the key features in roadmap is the possibility to create a single executable file, as it happens now in many other languages (like Golang, for instance) - something that could revolutionize the Javascript ecosystem itself.

Also the compatibility layer with the Node.js stdlib is still in progress; this could lead to a faster development of the runtime system.

To sum up, we can say that Deno is in continuous evolution and probably will be the next game-changer of the Javascript ecosystem. The foundations for this runtime are in place and it is already a hot topic, so... keep an eye out!

<br/><br/>

_Author: Yi Zhang, UX/UI Engineer @Bitrock_
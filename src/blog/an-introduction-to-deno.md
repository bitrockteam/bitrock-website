---
title: An Introduction to "Deno"
image: "/img/deno.png"
imageMeta:
  attribution: ''
  attributionLink: ''
author: MC
publish: 2020-07-02 07:28:52 +0000
layout: Post
category: TECHNOLOGY
tags: []

---
What is Deno?  

“A secure runtime for JavaScript and TypeScript.” This is the definition contained in the official [Deno](https://deno.land/) website.

Before going into details, let’s start by clarifying the two main concepts included in this definition.

**What is a runtime system?**

As for Deno, we can say that’s what makes Javascript run outside the browser, adding a series of features that it is not possible to find in the Javascript engine itself.

**What is Typescript?**

Typescript is a superset of Javascript, which adds a series of features that make the language more interesting. Its main features are:

* Optional static typing
* Type inference
* Improved Classes
* Interfaces

At this point, you may find a similarity between Node and our Deno definition, since they seem to do almost the same thing and they are both built upon the Javascript V8 engine.

**So Why Deno?**

“Deno” - as Ryan Dahl, Creator of both Deno and Node, said - “is not by any means a rival of Node”. Simply, he was no longer happy with Node and decided to create a new runtime to make up for its “mistakes” and shortages (and adding also a bunch of new features).

  

### **Getting closer to Deno**

Let’s now discover what makes Deno so promising and interesting, along with some key differences with Node.js:

**Deno supports out-of-the-box Typescript**

Deno can run Typescript code without installing additional libraries, such as ‘ts-node’.

It is possible to create an app.ts file and make it run with the simple command “Deno run app.ts”, without any other additional step.

**ES Modules**

Deno drops Commonjs Modules, which are still used in Node.js, and embraces the modern ES modules that are defined as standard in the Javascript world and mostly used in the front-end development scenario.

![](/img/deno1.png)
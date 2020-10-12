---
title: 'React Bandersnatch Experiment: Getting Close to a Real Framework'
image: "/img/11.jpg"
imageMeta:
  attribution: ''
  attributionLink: ''
author: MC
publish: 2020-06-04 13:03:00 +0000
layout: Post
category: TECHNOLOGY
tags: []

---
Huge success for Claudia Bressi (Bitrock Frontend developer) at **Byteconf React 2020**, the annual online conference with the best React speakers and teachers in the world.

During the event, Claudia had the opportunity to talk about her experiment called **“React Bandersnatch”** (the name coming from one of the episodes of Black Mirror tv series, where freedom is represented as a sort of well-designed illusion).

Goal of this contribution is to give anyone that could not join the virtual event the chance to delve into her experiment and main findings, which represent **a high-value contribution for the whole front-end community**.

Here’s Claudia words, describing the project in detail.

(Claudia): The project starts with one simple idea: what if React was a framework, instead of a library to build user interfaces?  
For this project, I built some real applications using different packages that are normally available inside a typical frontend framework. I measured a few major web application metrics and then compared the achieved results.

The experiment’s core was the concept of framework, i.e. a platform where it is possible to find ready components and tools that can be used to design a user interface, without the need to search for external dependencies.  
Thanks to frameworks, you just need to add a proper configuration code and then you’re immediately ready to go and code whatever you want to implement. Developers often go for a framework because it’s so comfortable to have something ready and nothing to choose.

Moving on to a strict comparison with libraries, frameworks are more opinionated: they can give you rules to follow in your code, and they can solve for you the order of things to be executed behind the scenes. This is the case of lazy loading when dealing with modules in a big enterprise web application.  
On the other hand, libraries are more minimalistic: they give you only the necessary to build applications. But, at the same time, you have more control and freedom to choose whatever package in the world.

However, this can lead sometimes to bad code: it is thus important to be careful and follow all best practices when using libraries.

**The Project**

As initial step of my project, I built a very simple web application in React in order to implement a weekly planner. This consisted of one component showing the week, another one showing the details of a specific day, and a few buttons to update the UI, for instance for adding events and meetings.

I used React (the latest available release) and Typescript (in a version that finally let users employ the optional chaining). In order to style the application, I used only .scss files, so I included a Sass compiler (btw, while writing the components, I styled them using the CSS modules syntax).

Then I defined a precise set of metrics, in order to be able to measure the experimental framework. More specifically:

* bundle size (measured in kilobytes, to understand how much weight could be reached with each build) ;
* loading time (the amount of time needed to load the HTML code in the application);
* scripting time (the actual time needed to load the Javascript files);
* render time (the time needed to render the stylesheets inside the browser);
* painting time (the time for handling media files, such as images or videos)

The packages used for this experiment can be considered as the ingredients of the project. I tried to choose both well-known tools among the React scenario and some packages that are maybe less famous, but which have some features that can improve the overall performance on medium-size projects.

The first implementation can be considered as a classic way to solve a project in React. An implementation based on Redux for the state management, and on Thunk as Middleware solution. I used also the well-known React router and, last but not least, the popular Material UI to have some ready-to-use UI components.  
The second application can be considered more sophisticated: it was actually made of Redux, combined with the Redux-observable package for handling the middleware part. As for the ROUTER, I applied a custom ROUTER solution, in order to let me play more with React hooks. As icing on the cake, I took the Ant library, in order to build up some UI components.

As for the third application, I blended together the MobX state manager with my previous hook-based custom router, while for the UI part I used the Ant library.  
Finally, for the fourth experimental application, I created a rather simple solution with MobX, my hook-based custom router (again) and Material UI to complete the overall framework.

**Main Findings**

Analyzing these four implementations, what I found out is that, as State manager, Redux has a cleaner and better organized structure due to its functional paradigm. Another benefit is the immutable store that prevents any possible inconsistency when data is updated.

On the other hand, MobX allows multiple stores: this can be particularly useful if you need to reuse some data (let’s say the business logic part of your store), in a different – but similar –application with a shareable logic.  
Another advantage of MobX is the benefit of having a reactive paradigm that takes care of the data updates, so that you can skip any middleware dependency.

Talking about routing, a built-in solution (such as the react-router-dom package) is pretty easy and smooth to apply in order to set-up all the routes we need within the application. A custom solution, however, such as our hooks-based router solution, let us keep our final bundle lighter than a classic dancer.

Moving on to the UI side of the framework, we can say that Material is a widespread web styling paradigm: its rules are easy to apply and the result is clean, tidy and minimalistic.  
However, from my personal point of view, it is not so ‘elegant’ to pollute Javascript code with CSS syntax – this is why I preferred to keep things separated. I then searched for another UI library and I found Ant, which is written in Typescript with predictable static types – a real benefit for my applications. However, in the end, we can say that MaterialUI is lighter than Ant.  
Anyway, both packages allow you to import only the necessaries components you need for your project. So, in the end, it is a simple matter of taste which library to use for the UI components (anyway: if you’re looking more at performance, then go for Material!)

**Comparing the Results**

As final step, I compared the achieved results for each of the above-mentioned metrics.  
From the collected results, it’s quite significant that the most performant application is built with the lighter bundle size and, in particular, when using Redux coupled with Thunk; MaterialUI for the UI components and our custom router, then the resulting application has a smaller output artifact and optimized values for loading, scripting and render times.

To cut a long story short, the winner of this experiment is application no. 4.

However, for bigger projects the results may vary.

**Ideal Plugins**

Frameworks, sometimes, offer useful auxiliary built-in plugins, such as the CLI to easily use some commands or automate repetitive tasks – which can in turn improve developers’ life. That’s why some of my preferred tools available for React (which I would include in a React ideal framework scenario) are:

* the famous React and Redux extensions for Chrome: I found these essentials and useful as the ruler for an architect;
* the ‘eslint-plugin’ specifically written for React, which makes it easier to be consistent to the rules you want to keep in your code;

\- Prettier, another must-have react plugin if you use VS Code, which helps a lot in getting a better formatted code;

\- React Sign, a Chrome extension that helps you show a graph and represent the overall structure in order to analyze your components;

\- last but not least, the popular React extension pack that you can find as VS code extension, which offers lots of developer automated actions, such as hundreds of code snippets, Intellisense and the option of file search within node modules.

If you want to listen to Claudia’s full speech during the event, click [here](https://www.youtube.com/watch?v=hCURSlsjnoA) and access the official video recording available on YouTube.

If you want to find out more about Byteconf React, visit the website: [https://www.bytesized.xyz/react-2020](https://www.bytesized.xyz/react-2020 "https://www.bytesized.xyz/react-2020")
---
title: Getting Started with React Push-based Architecture
image: "/img/getting-started-with-react-push-based-architecture.png"
imageMeta:
  attribution: ''
  attributionLink: ''
author: MC
publish: 
layout: Post
category: TECHNOLOGY
tags: []

---
When approaching the React world, using Redux or MobX as state management is almost automatic. Or, in any case, the libraries change, but the basic architecture doesn’t: it is always something similar to the Redux Pattern with reducers, actions, selector, middleware, etc.

But is there the possibility of using a different architecture? Something with RxJs as with Angular? By doing some research, it seems so. Let's see more in detail what we are talking about.

First of all, we need to think outside the classic pull-based pattern and move to something new for those coming from the React world: a push-based architecture.

With data-push architectures, view components simply react to asynchronous data change notifications and render the current data values.

The library that allows us to manage the store in this way is [Akita](https://github.com/datorama/akita):

_“Akita is a state management pattern, built on top of RxJS, which takes the idea of multiple data stores from Flux and the immutable updates from Redux, along with the concept of streaming data, to create the Observable Data Stores model._”

So basically, Akita enables us to easily build reactive, _asynchronous_, data-push solutions for our state management needs.

Another important concept to add is the one related to the Facades. **Facades** are a programming pattern in which a simpler public interface is provided to mask a composition of internal, more-complex, component usages.

In order to build our application, we rely on RxJS and React Hooks; nothing else is needed.

Let's now consider a very simple example built on the ideas found in some articles.

In our case we need to have a list of users and to be able to interface through the classic CRUD functions.

Starting from the well-known create-react-app with the addition of TypeScript, we create a folder that will contain our entities; in this case, it will only have a "user" folder as a child.

Inside, we define a simple interface of our "user" entity in the model.ts file:

![](/img/u-1.png)

Let's now start by initializing the store of our entity, creating a "UsersState" interface and then creating a "UsersStore" store by extending the Akita store, and finally exporting it:

![](/img/u-2.png)

At this point, we can create services to manipulate the store, also relying on the methods that an Akita store provides.

This is where we can use all our knowledge of RxJS in order to be able to create more complex flows to act on the store.

![](/img/u-3.png)  
Finally, through the "QueryEntity", we can take the whole store - or just a filtered part - and channel it into an observable stream of RxJS.

![](/img/u-4.png)

Last but not least, the creation of a custom Hooks that will internally manage all issues regarding RxJS, Facades, and Akita.

First, we map and expose the services of our "userService", in this case all.Then, we create the internal state of our custom hook. Finally, we need to build the selectors for \`users\` and \`active\` state changes and manage subscriptions with auto-cleanup.

![](/img/u-5.png)

Now our user entity should have everything needed. We import our custom Hooks, and that's it. 

To play a little bit, let’s divide the application into several components in order to test it. The result? Well, it works!

![](/img/u-6.png)

And here’s the child component:

![](/img/u-7.png)

Here’s how the application works in the browser:
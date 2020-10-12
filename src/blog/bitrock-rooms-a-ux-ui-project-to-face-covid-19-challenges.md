---
title: Bitrock Rooms - A UX/UI Project to Face Covid-19 Challenges
image: "/img/bitrock-rooms_cover.png"
imageMeta:
  attribution: ''
  attributionLink: ''
author: MC
publish: 2020-06-17T08:15:00.000+00:00
layout: Post
category: TECHNOLOGY
tags: []

---
#### Our solution to guarantee a safe working environment

One of the most recent challenges that we as UX/UI Team have faced in Bitrock is the creation of a brand-new Web App to solve a contingent issue inside the company.

The communication was sudden and with few details about the project: what we had was **a problem to solve, and a strict, dynamic deadline**.

</br>

**The challenge**

Our mission consisted in delivering an App whose main goal was to manage the booking of the desks available in our Milan HQ office. The social distancing measures caused by Covid-19 pandemic, indeed, had forced Bitrock Team to reduce the capacity of the rooms. Our task was thus to provide **a booking platform that could allow our colleagues to book their desks in advance**, even from home: in this way it would be possible to ensure that employees keep sufficient space from each other and **to** **provide a safe working place**.

The rules we had to follow when designing the App were simple: every room would have a max capacity (of desks) to be respected, and a user would be able to book just one desk in a room per day. Another feature we were required to implement was the ability to see the bookings made by other colleagues in real time, in order to have a better feedback on the current rooms capacity.

On the UX/UI side, we had two kind of views in mind: a daily view, and a weekly one (a feature asked us to ease the booking for several days).

The functional analysis was ready, the deadline was clear. We thus started to work.

</br>

**The project**

At first we created wireframes: they were simple and useful to us in order to have a better understanding of the project.

As Backend and Database Platform, we chose to rely on **Firebase and Firestore in order to speed up the implementation.**

Firebase was a good fit for every need that we were trying to respond to:

* Oauth authentication out of the box
* Real Time Database perfectly integrated with RxJs library

Every decision we made was based on the concept of **“Reactive Programming”,** in order to achieve a data stream able to facilitate the automatic propagation of data changes.

For the selection of the Frontend Framework, the choice was easy: **Angular**, which is well integrated with Firebase in every aspect and synergised with Rxjs (A/N: for those who are not familiar to the Angular ecosystem, Rxjs is a library that embrace the concept of reactiveness with a functional approach) - everything was made reactive out of the box.

To sum up, here’s the list of the libraries we chosen:

* Angular
* RxJs
* AngularFire - Firebase integration to Angular
* Moment.js - Library to manage the date
* Angular Material - UI Library with premade component

Our philosophy was to have **the right balance between best practices and productivity, while respecting the limited available time**.

The first point to tackle was the data schema to represent the booking of the desks. We thus created a flat structure, where the main keys were :

* date
* room
* user

Here’s the schema that we used:

![](/img/1-2.png)

![](/img/2.png)

![](/img/3.png)

We then started creating components and services by using the tools that Angular had, for instance using cli commands.

Our choice not to use a state management like NgRx was dictated by the fact that this was a rather simple project with a limited number of components.

The tasks related to the daily view were carried out fast and smoothly: everything revolved around the RxJs libraries and the communication with Firebase.

Even the real-time update of the data from Firestore was great: it was so easy to implement...like magic! The implementation of the weekly view was a bit more challenging, but we managed to carry it out using our components.

The last part of the project covered the styling aspects: we decided to use Amber (Bitrock design system) as reference, in order to create a web app with the company “look and feel”.

</br>

**Conclusions**

This project represents the perfect playground for those situations that envisage a sudden problem that needs to be solved in a very short amount of time. During its different steps we had the possibility to **reinforce our team-work spirit, as well as develop a proactive attitude**. Everything was indeed designed, delivered and implemented very well thanks to the effort of the team as a whole, and not just because of individuals.

Bitrock Rooms is now used every day by Bitrock Team as one of the solutions to face Covid-19 challenges, helping creating a safe working environment and delivering a smart and smooth experience to users.

</br>

_Bitrock Rooms' daily view interface:_

![](/img/4.png)

_Bitrock Rooms' weekly view interface:_

![](/img/5.png)

</br>

_Bitrock Rooms' mobile view interface:_

![](/img/6.png)

<br/><br/>

_Authors: Marco Petreri, UX/UI Engineer @Bitrock - Yi Zhang, UX/UI Engineer @Bitrock_
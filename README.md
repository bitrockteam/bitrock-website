# bitrock-website
![./src/.vuepress/public/BitrockLogo.svg](./src/.vuepress/public/BitrockLogo.svg)

[![Build Status](https://travis-ci.org/bitrockteam/bitrock-website.svg?branch=master)](https://travis-ci.org/bitrockteam/bitrock-website)

This website is a [VuePress](https://v1.vuepress.vuejs.org/) instance with a custom theme applied on it, you can read the [official documentation](https://v1.vuepress.vuejs.org/s) to learn how to edit contents or how the theme works.

## Requisites
You need the following software installed in your machine in order to get started:
* [Node.js](https://nodejs.org/en/) latest stable
* [Yarn](https://yarnpkg.com/en/) package manager
Both can be installed via [Homebrew](https://brew.sh/) on MacOS & Linux environments.

## Create a local development environment
Clone the repo locally
```bash
$ git clone git@github.com:bitrockteam/bitrock-website.git
```

Move on the folder and install dependencies with Yarn
```bash
$ cd bitrock-website && yarn
```

Start the development webserver on `localhost:8080`
```bash
$ yarn start
```

## Authoring
Content is provided via [Markdown](https://it.wikipedia.org/wiki/Markdown) files in the `./src` folder, there is no built-in visual editor so they can be authored wherever you want, but in order. Vue components are supported within the Markdown content and it may be considered to add some custom components to enable authors with extra capabilities. Metadata are provided using the [Frontmatter specification](https://v1.vuepress.vuejs.org/guide/markdown.html#front-matter).

### Add a page
Create a subfolder in the `./src` path and then create a `readme.md` file within it, on top of the file add the following data:

```yaml
---
layout: Page
---
```

**Example**: the `./src/about-us/readme.md` file will become the `https://bitrock.it/about-us` page.

To add a page in the navigation menu the `./src/.vuepress/config.js` must be updated.

### Add a blog post
Create a subfolder in the `./src/blog` path and then create a `readme.md` file within it, on top of the file add the following data:

```yaml
---
title: Hello world!
image: /img/hello.jpg
author: writer
publish: 2018-12-21
layout: Post
category: news
tags:
  - greetings
  - hello
---
```

**Example**: the `./src/blog/hello-world/readme.md` file will become the `https://bitrock.it/blog/hello-world` page.

Posts will be displayed on reversed-chronological order (latest first) on the main page.

### Images
Site-wide images must be added in the ´./src/.vuepress/public/img´ folder. Note that if you add an image within a post or page folder, it will not be reachable outside of the page url using a relative path.

**There isn't an automated optimization process** so be careful on the size of the images you are publishing.

<!-- ### Forestry -->

## Development
All of the development source files are located within the `./src/.vuepress/theme` folder.

The `./src/.vuepress/public` is where to put any kind of assets that needs to be available as static resources on the root level of the deploy domain. Subfolders will be preserved.

#### Vuepress plugins
* **@vuepress/plugin-google-analytics** giving the Google Analytics monitoring ID, it will inject in the pages the required code.
* **@vuepress/plugin-pwa** it generates a Services Worker on build phase mapping all the static assets for offline caching. It will **not** generate the webmanifest required to trigger PWA functionalities, which is authored manually and served in the public folder.
* **@vuepress/plugin-back-to-top** it simply add the back to top arrow button after scrolling down a bit from the initial viewport.
* **@vuepress/nprogress** adds the progress bar on top of the pages when loading new content, similar to what happens in YouTube.

#### JS utilities
The main dependency here is the [Vue.js](https://vuejs.org/) library which is used to build the components, everything else is Vanilla Javascript.

#### CSS utilities
We are using this CSS libraries:

* [normalize.css](https://necolas.github.io/normalize.css/) makes browsers render all elements more consistently and in line with modern standards.
* [typebase.css](https://github.com/devinhunt/typebase.css) a starting point for web typography.
* [hamburgers](https://jonsuh.com/hamburgers/) CSS-animated hamburgers menu.

## Branching policy
This project follows a simple branching policy:

* `master` contains only stable code, and should not be updated directly
* `development` where evolved or experimental code is written
* `gh-pages` where the distributable static files are deployed but ** you should avoid to directly commit/push here**

Do **NOT** merge directly `development` into `master` (*it's admin-locked...*), always send a PR to have a review.

## Update & deploy
Every time the `master` branch get updated (a direct commit or a merged PR) a new [Travis CI](https://travis-ci.org/bitrockteam/tech-radar) job is triggered and it composed of these steps:

1. install dependencies
2. Vuepress builds the website with all related files on `/dist` folder
3. if build is successful the `/dist` folder is then deployed on GitHub Pages
4. the new deploy is available at [bitrock.it](https://bitrock.it)

There is an NPM script available to manually deploy in the `gh-pages` branch from your local machine (you must first build the project locally):

```bash
$ yarn gh:pages
```

But please use it only if it is **really** needed.

## License
The Databiz Group, Bitrock and Radicalbit logos are registered trademarks.
Code is distributed under the [GNU AGPLv3 license](LICENSE).
Included stock photos have been [provided by Unsplash](https://unsplash.com/license).

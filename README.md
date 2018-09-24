# bitrock-website
![./src/assets/BitrockLogo.svg](./src/assets/BitrockLogo.svg)

[![Build Status](https://travis-ci.org/bitrockteam/bitrock-website.svg?branch=master)](https://travis-ci.org/bitrockteam/bitrock-website)

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

Start the development webserver on `localhost:8090`
```bash
$ yarn start
```

## Development

#### Project structure 
`| root`          global configurations (Webpack, Yarn, etc...)\
`|- /scripts`     build time utilities\
`|- /src`         bootstrapping & globals\
`|--- /styles`    .scss files\
`|--- /assets`    images & main .html template\
`|--- /libs`      JS helpers and API wrappers\
`|--- /components` \
`|------ /ui`     global UI elements\
`|------ /pages`  posts and pages templates\

#### Main libraries
The project is written without an opinionated framework, but it uses a combination of some libraries to get the job done:

* [lit-html](https://github.com/Polymer/lit-html) the main JS functional template engine.
* [vaadin-router](https://vaadin.com/router) a client side router based on Custom Elements.
* [pwa-helpers](https://github.com/Polymer/pwa-helpers) a set of common utilities for modern Web Apps, we use the `metadata.js` module to update Openg Graph's tags when new content is loaded.
* [lodash](https://lodash.com/) for a couple of helpers utilities.

#### CSS utilities
We are also using this CSS libraries:

* [normalize.css](https://necolas.github.io/normalize.css/) makes browsers render all elements more consistently and in line with modern standards.
* [typebase.css](https://github.com/devinhunt/typebase.css) a starting point for web typography.
* [hamburgers](https://jonsuh.com/hamburgers/) CSS-animated hamburgers menu.

## PRPL pattern & Architecture
This project follows the [PRPL pattern](https://developers.google.com/web/fundamentals/performance/prpl-pattern/) (*Push, Render, Pre-cache, Lazy-load*) which allows a Web Application to be as fast and performant as possibile for every user.

The key concepts are:
* split application code bundle in multiple chunks
* load only the required chunks when the user needs them (usually on page change)
* server-side-render the page on bot/spiders/crawlers requests

You can check out the results using the [Lighthouse report tool](https://developers.google.com/web/tools/lighthouse/).

## Tests
All tests are written on top of these tools:

* Ava.js, Javascript unit tests
* Cypress, end-to-end tests

## Branching policy
This project follows a simple branching policy:

* `master` contains only stable code, and should not be updated directly
* `development` where evolutive or experimental code is written
<!-- * `gh-pages` where the distrubutable static files are deployed -->

Do **NOT** merge directly `development` into `master` (*it's admin-locked...*), always send a PR to have a review.

## Update & deploy
Every time the `master` branch get updated (a direct commit or a merged PR) a new [Travis CI](https://travis-ci.org/bitrockteam/tech-radar) job is triggered and it composed of these steps:

1. Run unit tests
2. Run E2E tests locally
3. create new production build of static files
4. deploy the project and the build folder on Heroku
5. Starts the Node.js server on Heroku


## License
The Databiz Group, Bitrock and Radicalbit logos are registered trademarks.
Code is distributed under the [GNU AGPLv3 license](LICENSE).
Included stock photos have been [provided by Unsplash](https://unsplash.com/license).
# bitrock-website
![./src/assets/BitrockLogo.svg](./src/assets/BitrockLogo.svg)

<!-- https://travis-ci.org/bitrock-frontend/basic-starter-kit.svg?branch=master -->

## Requisites
You need the following software installed in your machine in order to get started:
* [Node.js](https://nodejs.org/en/) latest stable
* [Yarn](https://yarnpkg.com/en/) package manager
Both can be installed via Homebrew on MacOS & Linux environments.

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

* [lit-html](https://github.com/Polymer/lit-html) the main JS functional template engine
* [router5](https://router5.js.org/) a client side router that works with state changes
* [lodash](https://lodash.com/) for a couple of helpers utilities

#### CSS utilities
We are also using this CSS libraries:

* [normalize.css](https://necolas.github.io/normalize.css/) makes browsers render all elements more consistently and in line with modern standards.
* [typebase.css](https://github.com/devinhunt/typebase.css) a starting point for web typography
* [hamburgers](https://jonsuh.com/hamburgers/) CSS-animated hamburgers menu

## Tests
Coming soon (really!)

## Branching policy
This project follows a simple branching policy:

* `master` contains only stable code, and should not be updated directly
* `development` where evolutive or experimental code is written
* `gh-pages` where the distrubutable static files are deployed

Do **NOT** merge directly `development` into `master` (*it's admin-locked...*), always send a PR to have a review.

## Update & deploy
Every time the `master` branch got updated (a direct commit or a merged PR) a new [Travis CI](https://travis-ci.org/bitrockteam/tech-radar) job is triggered and it composed basically of 2 steps:

1. create new build of static files
2. deploy the build folder into the related `gh-pages` branch


## License
The Databiz Group, Bitrock and Radicalbit logos are registered trademarks.
Code is distributed under the [GNU AGPLv3 license](LICENSE).
Included stock photos have been [provided by Unsplash](https://unsplash.com/license).
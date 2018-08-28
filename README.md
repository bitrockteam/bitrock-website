# bitrock-website
Bitrock corporate website.

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

<!-- ## Development -->

## Branching policy
This project follows a simple branching policy:

* `master` contains only stable code, and should not be updated directly
* `development` where evolutive or experimental code is written
* `gh-pages` where the distrubutable static files are deployed

Do **NOT** merge directly `development` into `master`, always send a PR to have a review.

## Update & deploy
Every time the `master` branch got updated (a direct commit or a merged PR) a new [Travis CI](https://travis-ci.org/bitrockteam/tech-radar) job is triggered and it composed basically of 2 steps:

1. create new build of static files
2. deploy the build folder into the related `gh-pages` branch


## License
Databiz Group internal use only.
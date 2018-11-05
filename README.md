# GraphQL-Modules seed

## Introduction

This repository is a seed to start [GraphQL-Modules](https://graphql-modules.com/) projects.

It includes a couple of modules which depend on each other, but in the future I will expand it to include an User module and an Authentication module as well.

----

### Includes

* [GraphQL-Modules](https://graphql-modules.com/)
* [GraphQL-Code-Generator](https://github.com/dotansimha/graphql-code-generator)
* [Apollo-Server](https://www.apollographql.com/docs/apollo-server/)
* [Typescript](https://www.typescriptlang.org/)

## Installation

To get started locally, follow these instructions:

1. Clone to your local computer using `git`.
1. Make sure that you have Node installed; see instructions [here](https://nodejs.org/en/download/).
1. Make sure that you have `yarn` installed; see instructions [here](https://yarnpkg.com/lang/en/docs/install/).
1. Run `yarn` (no arguments) from the root of your clone of this project.

## Running the seed

To run the seed, follow these instructions:

1. `yarn generate`. This will Generate server-side TypeScript types.
1. `yarn start`. This will use ts-node to compile and run the project.

If you want it to automatically restart the application when changes in the directory are detected, you can use `yarn dev` instead (it's backed by nodemon).

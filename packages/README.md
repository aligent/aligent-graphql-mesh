# GraphQL Mesh Docs

## Introduction

The skeleton of the code is in the `.meshrc.yml` file. As the meshrc file get very large and is hard to maintain, it is broken
down into separate file using the !include syntax which is supported by graphql-mesh. This is not native yaml, so IDE syntax errors have to be ignored.

Each new API/ that get integrated should be put into a new folder such as ./meshrc/handlers/my-new-api.

## Schemas

The Schemas dir contains all the request and response Json Schema or Json Sample files. These files are used to validate and shape the response that the API sends back.

## Resolvers

The resolvers are mostly used to intercept a request to an endpoint and then do something then continue.

## Plugins

## Tokens

### Overview of available tokens and headers

### UML Diagrams for resolvers

### Relevant links

Allow including external yaml files in .meshrc.yaml: https://github.com/Urigo/graphql-mesh/issues/1412

# Upgrading the mesh (Don't use npm, always use yarn)
Upgrading to the latest version will be necessary to get the latest bug fixes and enhancement, when issues appear.
But new version an often break the mesh, so be careful when upgrading and only do one package at a time
Make sure to upgrade packages one by one to see which ones break the build, if the build breaks on  upgrade

## reset with generating new yarn.lock version
cd ./graphql/src
rm -rf ./node_modules
nvm use
yarn install

## reset using current yarn.lock version
from project root
rm -rf ./graphql/src/node_modules
nvm use
yarn dev

## upgrade process
- revert local environment to current yarn.lock version
-  confirmed yarn dev is builing the mesh correctly without errors. Execute test query from postman or playground
-  upgrade single package one by one and capture any errors

## upgrade single package
cd ./graphql/src
- find most recent package version single package to upgrade: `yarn info <packagename> version`
- update package to latest version: `yarn add <packagename>@latest`
- make sure to fix this version in package.json
- confirm installed version:  yarn list --pattern <packagename>
- cd to project root and execute `yarn dev` => confirm it's building sucesfully


## troubleshooting
Make sure to upgrade @graphql-mesh/cli first, if meaningless errors are thrown.

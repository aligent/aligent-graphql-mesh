# maintenance-mode-plugin

## Introduction

This plugin will check for the existence of a file to determine if the server is in maintenance mode or not. This file needs to be a text file that contains comma separated list of IP addresses or subnet masks.

## Inputs and variables

The `maintenanceModePlugin()` function accepts the path to the file that contains the list of IP addresses.

`NODE_ENV` will bypass maintenance mode when it is set to `NODE_ENV=true` in the .env file.

## Usage

The `maintenanceModePlugin` function needs to the `createYoga` function in the the `plugins` array. The file containing the list of IP addresses or subnet masks will be created and deleted with and API exposed by `API Gateway`.

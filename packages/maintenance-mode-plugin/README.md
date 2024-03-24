# maintenance-mode-plugin

## Introduction

This plugin will check for the existence of a file to determine if the server is in maintenance mode or not. This file needs to be a text file that contains comma separated list of IP addresses or subnet masks.

## Inputs and variables

The `maintenanceModePlugin()` function accepts the path to the file that contains the list of IP addresses.

`DEV_MODE` will bypass maintenance mode when it is set to `DEV_MODE=true` in the .env file. `ALIGENT_VPN_IP` This contains the Aligent company IP address that will allow access when in maintenance mode.

## Usage

The `maintenanceModePlugin` function needs to the `createYoga` function in the the `plugins` array. The file containing the list of IP addresses or subnet masks will be created and deleted with and API exposed by `API Gateway`.

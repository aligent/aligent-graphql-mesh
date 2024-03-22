# maintenance-mode-plugin

This plugin will check for the existence of a file e.g sample.txt, in the root directory, if this file exists the GraphQL Server is in maintenance mode. This file contains a list of IP addresses or subnet masks that are allowed to access the GraphQL Server when maintenance mode is enabled. 

The `maintenanceModePlugin()` function accepts the path to the file that contains the list of IP addresses.

`DEV_MODE` This value will bypass maintenance mode when it is set to `DEV_MODE=true`.

`ALIGENT_VPN_IP` This contains the Aligent company IP address that will allow access when in maintenance mode.


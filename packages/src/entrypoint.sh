#!/bin/sh

# Make sure packages have been installed and the mesh has been built
# This is especially important in the dev environment
[ ! -d "/app/node_modules" ] && yarn install
[ ! -d "/app/.mesh" ] && ./build.sh

yarn mesh $@

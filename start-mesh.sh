#!/bin/bash
set -e

ENV_FILE=packages/src/.env
if [ -f "$ENV_FILE" ]; then
    docker build -t graphql-mesh-server packages

    #remove generated mesh directory if exist, as corrupt files can cause strange errors.
    rm -rf ${PWD}/packages/src/.mesh

    cp ${PWD}/cert.crt ${PWD}/packages/src/cert.crt
    cp ${PWD}/cert.key ${PWD}/packages/src/cert.key

    docker run --name graphql-mesh-server -p 4000:4000 \
        --add-host mesh.local.pwadev:0.0.0.0 \
        -v ${PWD}/packages/src:/app \
        --user=$UID:$GID \
        -it --rm graphql-mesh-server $@

    rm ${PWD}/packages/src/cert.crt
    rm ${PWD}/packages/src/cert.key
else
    echo "$ENV_FILE does not exist. Copy the .env.template file to get started."
fi

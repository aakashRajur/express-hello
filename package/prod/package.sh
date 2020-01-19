#!/bin/bash

set -eou

export IMAGE_VERSION="$(cat package.json | jq -r .version)";

docker build \
--rm \
--compress \
-f package/prod/Dockerfile \
-t "express-hello:$IMAGE_VERSION" .
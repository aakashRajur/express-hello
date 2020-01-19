#!/bin/bash

set -eou

export IMAGE_VERSION="$(cat package.json | jq -r .version)";

docker build \
--rm \
--compress \
-f package/test/Dockerfile \
-t "express-hello-test:$IMAGE_VERSION" .
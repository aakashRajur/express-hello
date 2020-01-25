#!/bin/sh

set -eou

LOGIN_CMD=$(aws ecr get-login --no-include-email --region ap-south-1)
USERNAME=$(printf "$LOGIN_CMD" | sed 's/^.*-u //; s/ -p.*$//')
PASSWORD=$(printf "$LOGIN_CMD" | sed 's/^.*-p //; s/ https.*$//')
HOSTNAME=$(printf "$LOGIN_CMD" | sed 's/^.*https:\/\///; s/ $//')
LOGIN=$(printf "$USERNAME:$PASSWORD" | base64 | tr -d \\n)

(printf "{\"auths\":{\"$HOSTNAME\":{\"auth\":\"$LOGIN\"}}}") > /project/config.json


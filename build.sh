#!/bin/bash

echo "INSTALLING DEPENDENCIES"
export NODE_ENV=development
npm ci

echo "BUILDING APPLICATION"
export NODE_ENV=production
npm run build

echo "PRUNING DEPENDENCIES"
npm prune


#!/bin/bash

set -e

# Create a copy of the environment variable sample and save it as .env
cp .env.example .env

echo "Please enter the port number you\'ll like to make use of"
read PORT

# Start the serverless application offline
sls offline start --port $PORT --skipCacheInvalidation

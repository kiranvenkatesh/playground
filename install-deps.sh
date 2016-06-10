#!/bin/bash -e

npm config set strict-ssl false

npmx="npm --registry=http://npmregistry.dev.kno.com:6379 "

export HTTP_PROXY="http://proxy-us.intel.com:911"
export HTTPS_PROXY="http://proxy-us.intel.com:912"

export NO_PROXY="bamboo4.kno.com, npmregistry.dev.kno.com"

$npmx i
#!/usr/bin/env bash

while getopts ":t:" opt; do
  case ${opt} in
    t ) # process option t
      target=$OPTARG
      ;;
    \? ) echo "Usage: cmd [-h] [-t]"
      ;;
  esac
done

docker build -t patrickconnors/jsservice:$target .
if [ $? -eq 0 ]; then
  echo "build succesfully"
else
  echo "build error"
fi

docker tag patrickconnors/jsservice:$target gcr.io/microex/jsservice:$target

if [ $? -eq 0 ]; then
  echo "tag succesfully"
else
  echo "tag error"
fi

docker push gcr.io/microex/jsservice:$target

if [ $? -eq 0 ]; then
  echo "pushed to gcloud"
else
  echo "couldn't push to gloud"
fi

kubectl set image deployments/jsmicro jsmicro=gcr.io/microex/jsservice:$target
if [ $? -eq 0 ]; then
  echo "changed deployment image"
else
  echo "error changing deployment"
fi
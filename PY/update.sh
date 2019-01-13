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

docker build -t patrickconnors/pyservice:$target .
if [ $? -eq 0 ]; then
  echo "build succesfully"
else
  echo "build error"
fi

docker tag patrickconnors/pyservice:$target gcr.io/microex/pyservice:$target

if [ $? -eq 0 ]; then
  echo "tag succesfully"
else
  echo "tag error"
fi

docker push gcr.io/microex/pyservice:$target

if [ $? -eq 0 ]; then
  echo "pushed to gcloud"
else
  echo "couldn't push to gloud"
fi

kubectl set image deployments/pymicro pymicro=gcr.io/microex/pyservice:$target
if [ $? -eq 0 ]; then
  echo "changed deployment image"
else
  echo "error changing deployment"
fi
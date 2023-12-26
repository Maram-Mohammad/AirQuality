# docker build -t air-quality-api .
# docker run -p 3000:3000 -d air-quality-api


#!/bin/bash

# set -e
# set -x
if [ "$1" == 00 ]
then 
    echo "Deployment Mode ONLY $1"
    npm run db:create
    npm run db:migrate
    npm start
else
    echo "Development Mode"
    npm run start
fi


#!/bin/sh

mongo --username $MONGO_INITDB_ROOT_USERNAME --password $MONGO_INITDB_ROOT_PASSWORD mongodb://mc-v2-mongodb-lynx:27017,mc-v2-mongodb-puma:27018,mc-v2-mongodb-wolf:27019 /data/scripts/replication-init.js

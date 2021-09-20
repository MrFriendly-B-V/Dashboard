#!/bin/bash

if [ -z "${AUTHLANDER_HOST}" ]
then
    echo "Environmental variable 'AUTHLANDER_HOST' is not set. This is required."
    exit 1
fi 

sed -i "s|{{AUTHLANDER_HOST}}|${AUTHLANDER_HOST}|" /var/www/dashboard/config.json

/usr/sbin/nginx -g 'daemon off;'

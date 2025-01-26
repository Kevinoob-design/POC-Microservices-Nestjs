FROM mongo:4.4.4-bionic as development

RUN apt-get update \
    && apt-get install zip unzip \
    && apt-get install openssl

RUN [ -d /data/keys ] && echo "$FILE exist." || mkdir /data/keys

RUN [ -f /data/keys/mongo-repl.key ] && echo "$FILE exist." || openssl rand -base64 756 > /data/keys/mongo-repl.key \
    && chmod 600 /data/keys/mongo-repl.key \
    && chown 999:999 /data/keys/mongo-repl.key

FROM node:16.13.0-alpine as prod
WORKDIR /app
RUN apk update \
    && apk upgrade \
    && apk add python3 \
    && apk add make \
    && apk add gcc \
    && apk add g++

COPY package.json .
RUN yarn install --frozen-lockfile --production
COPY .webpack ./.webpack
COPY nx.json workspace.json tsconfig.base.json ./
COPY libs ./libs
COPY apps ./apps
RUN yarn cache clean && yarn build

FROM prod as gateway
COPY ./dist/apps/gateway .
CMD [ "node", "main.js" ]

FROM prod as account
COPY ./dist/apps/account .
CMD [ "node", "main.js" ]

FROM prod as auth
COPY ./dist/apps/auth .
CMD [ "node", "main.js" ]

FROM prod as health
COPY ./dist/apps/health .
CMD [ "node", "main.js" ]

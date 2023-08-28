FROM node:18-buster

WORKDIR /usr/src/app

COPY tsconfig.json ./
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY packages ./packages
RUN npx tsc

EXPOSE 4000

CMD [ "node", "packages/mesh/server.js" ]

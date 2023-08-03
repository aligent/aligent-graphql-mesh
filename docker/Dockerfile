FROM node:18-buster

WORKDIR /usr/src/app

COPY tsconfig.json ./
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY src ./src
COPY docker/server.ts ./src/meshrc/server.ts
RUN npx tsc

EXPOSE 4000

CMD [ "node", "src/meshrc/server.js" ]

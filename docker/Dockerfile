FROM node:18-buster

WORKDIR /usr/src/app

RUN npm install -g typescript
COPY tsconfig.json ./
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY docker/server.ts ./
COPY src/meshrc/.mesh ./.mesh
RUN tsc

EXPOSE 4000

CMD [ "node", "server.js" ]

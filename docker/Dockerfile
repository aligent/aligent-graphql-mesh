FROM node:18-buster

WORKDIR /usr/src/app

RUN npm install -g typescript
COPY tsconfig.json ./
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY src ./src
COPY docker/server.ts ./src/meshrc/server.ts
RUN tsc

EXPOSE 4000

CMD [ "node", "src/meshrc/server.js" ]

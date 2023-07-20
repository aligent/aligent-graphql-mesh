FROM node:lts-alpine3.15
WORKDIR /app
COPY src/yarn.lock /app
COPY src/package.json /app
RUN yarn install
COPY src /app
ENTRYPOINT ["sh", "entrypoint.sh"]
CMD ["start"]

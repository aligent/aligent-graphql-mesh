FROM node:18-buster

ENV HOST=0.0.0.0
ENV PORT=4000

WORKDIR /usr/src/app

COPY dist/packages/mesh/orocommerce orocommerce-mesh

RUN yarn --cwd orocommerce-mesh install

EXPOSE 4000

CMD [ "node", "orocommerce-mesh" ]

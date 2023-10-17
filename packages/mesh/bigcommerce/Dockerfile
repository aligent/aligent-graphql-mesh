FROM node:18-buster

ENV HOST=0.0.0.0
ENV PORT=4000

WORKDIR /usr/src/app

COPY dist/packages/mesh/bigcommerce bigcommerce-mesh

RUN yarn --cwd bigcommerce-mesh install

EXPOSE 4000

CMD [ "node", "bigcommerce-mesh" ]
const graphqlLoaderPlugin = require('@luckycatfactory/esbuild-graphql-loader').default;
const optimizer = require('@graphql-tools/optimize');

module.exports = {
  plugins: [
    graphqlLoaderPlugin({
      mapDocumentNode: (documentNode) =>
        optimizer.optimizeDocumentNode(documentNode),
    }),
  ],
  sourcemap: true
}
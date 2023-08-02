import { GraphQlQuery } from '../../../types';

export const channelMetafieldsByNamespaceQuery = (namespace: string) : GraphQlQuery => {
    return {
        query: `query {
                  channel {
                    entityId
                    metafields(namespace: "${namespace}") {
                      edges {
                        node {
                          id
                          key
                          value
                        }
                      }
                    }
                  }
                }`,
    };
};

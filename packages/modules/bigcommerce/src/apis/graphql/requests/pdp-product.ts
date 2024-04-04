import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';
import { PdpProductDetails } from '../fragments/pdpProductDetails';
import { relatedProducts } from '../fragments/relatedProducts';

export const getPdpProductQuery = stripIgnoredCharacters(
    print(gql`
        ${PdpProductDetails}
        ${relatedProducts}

        query getPdpProduct(
            $path: String!
            $includeTax: Boolean
            $first: Int
            $after: String
            $namespace: String! = "custom_attributes"
        ) {
            site {
                route(path: $path) {
                    node {
                        ... on Product {
                            ...PdpProductDetails
                            relatedProducts {
                                ...RelatedProducts
                            }
                        }
                    }
                }
            }
        }
    `)
);

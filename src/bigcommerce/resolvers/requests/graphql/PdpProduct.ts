import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';
import { ProductsDetails } from './fragments/productDetails';

export const getPdpProductQuery = stripIgnoredCharacters(
    print(gql`
        ${ProductsDetails}

        query getPdpProduct($path: String!) {
            site {
                route(path: $path) {
                    node {
                        ... on Product {
                            ...ProductDetails
                        }
                    }
                }
            }
        }
    `)
);

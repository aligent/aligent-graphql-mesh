import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';
import { ProductsDetails } from '../fragments/productDetails';
import { relatedProducts } from '../fragments/relatedProducts';

export const getPdpProductQuery = stripIgnoredCharacters(
    print(gql`
        ${ProductsDetails}
        ${relatedProducts}

        query getPdpProduct($path: String!) {
            site {
                route(path: $path) {
                    node {
                        ... on Product {
                            ...ProductDetails
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

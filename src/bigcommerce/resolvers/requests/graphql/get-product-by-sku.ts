import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';
import { ProductsDetails } from './fragments/productDetails';

export const getProductBySkuQuery = stripIgnoredCharacters(
    print(gql`
        ${ProductsDetails}

        query getProductBySku($sku: String!) {
            site {
                product(sku: $sku) {
                    ...ProductDetails
                }
            }
        }
    `)
);

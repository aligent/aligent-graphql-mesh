import { stripIgnoredCharacters } from 'graphql';
import { gql } from 'graphql-tag';
import { print } from 'graphql/index';
import { cartDetails } from '../fragments/cartDetails';

export const createCartMutation = stripIgnoredCharacters(
    print(gql`
        ${cartDetails}

        mutation createCart($lineItems: [CartLineItemInput!]) {
            cart {
                createCart(input: { lineItems: $lineItems }) {
                    cart {
                        ...CartDetails
                    }
                }
            }
        }
    `)
);

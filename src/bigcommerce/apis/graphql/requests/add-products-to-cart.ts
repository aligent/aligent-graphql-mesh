import { stripIgnoredCharacters } from 'graphql';
import { gql } from 'graphql-tag';
import { print } from 'graphql/index';
import { cartDetails } from '../fragments/cartDetails';

export const addProductsToCartMutation = stripIgnoredCharacters(
    print(gql`
        ${cartDetails}

        mutation addProductsToCart($cartId: String!, $cartItems: AddCartLineItemsDataInput!) {
            cart {
                addCartLineItems(input: { cartEntityId: $cartId, data: $cartItems }) {
                    cart {
                        ...CartDetails
                    }
                }
            }
        }
    `)
);

import { stripIgnoredCharacters } from 'graphql';
import { gql } from 'graphql-tag';
import { print } from 'graphql/index';

export const addProductsToCartMutation = stripIgnoredCharacters(
    print(gql`
        mutation addProductsToCart($cartId: String!, $cartItems: AddCartLineItemsDataInput!) {
            cart {
                addCartLineItems(input: { cartEntityId: $cartId, data: $cartItems }) {
                    cart {
                        id
                        entityId
                        lineItems {
                            physicalItems {
                                quantity
                                sku
                                name
                            }
                        }
                    }
                }
            }
        }
    `)
);

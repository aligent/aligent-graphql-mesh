import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';
import { cartDetails } from '../fragments/cartDetails';

export const cart = stripIgnoredCharacters(
    print(gql`
        ${cartDetails}

        query cart($entityId: String) {
            site {
                cart(entityId: $entityId) {
                    ...CartDetails
                }
            }
        }
    `)
);

export const getCartEntityIdQuery = stripIgnoredCharacters(
    print(gql`
        query cart($entityId: String) {
            site {
                cart(entityId: $entityId) {
                    entityId
                }
            }
        }
    `)
);

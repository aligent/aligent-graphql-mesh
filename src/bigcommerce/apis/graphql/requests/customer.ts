import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';

export const customer = stripIgnoredCharacters(
    print(gql`
        query customer {
            customer {
                addressCount
                attributeCount
                company
                customerGroupId
                email
                entityId
                firstName
                lastName
                notes
                phone
                storeCredit {
                    currencyCode
                    value
                }
                taxExemptCategory
            }
        }
    `)
);

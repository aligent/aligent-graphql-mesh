import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';

export const customerAttribute = stripIgnoredCharacters(
    print(gql`
        query customer($attributeId: Int!) {
            customer {
                attributes {
                    attribute(entityId: $attributeId) {
                        entityId
                        name
                        value
                    }
                }
            }
        }
    `)
);

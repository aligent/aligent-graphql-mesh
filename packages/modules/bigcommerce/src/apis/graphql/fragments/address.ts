import { gql } from 'graphql-tag';

export const address = gql`
    fragment InventoryAddress on InventoryAddress {
        address1
        address2
        city
        code
        countryCode
        description
        email
        entityId
        label
        latitude
        longitude
        phone
        postalCode
        stateOrProvince
    }
`;

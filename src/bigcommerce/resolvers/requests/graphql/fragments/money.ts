import { gql } from 'graphql-tag';

export const money = gql`
    fragment Money on Money {
        currency: currencyCode
        value
    }
`;

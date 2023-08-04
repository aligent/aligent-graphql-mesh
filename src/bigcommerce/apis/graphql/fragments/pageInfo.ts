import { gql } from 'graphql-tag';

export const pageInfo = gql`
    fragment PageInfo on PageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
    }
`;

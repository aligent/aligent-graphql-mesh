import { gql } from 'graphql-tag';

export const seoDetails = gql`
    fragment SeoDetails on SeoDetails {
        pageTitle
        metaDescription
        metaKeywords
    }
`;

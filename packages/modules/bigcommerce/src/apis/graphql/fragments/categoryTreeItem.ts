import { gql } from 'graphql-tag';

export const categoryTreeItem = gql`
    fragment CategoryTreeItem on CategoryTreeItem {
        description
        entityId
        name
        path
        productCount
        image {
            urlOriginal
        }
    }
`;

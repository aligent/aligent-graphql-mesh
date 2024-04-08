import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';
import { categoryTreeItem } from '../fragments/categoryTreeItem';

export const getCategoryTreeQuery = stripIgnoredCharacters(
    print(gql`
        ${categoryTreeItem}

        query categoryTree($rootEntityId: Int) {
            site {
                categoryTree(rootEntityId: $rootEntityId) {
                    ...CategoryTreeItem
                    children {
                        ...CategoryTreeItem
                        children {
                            ...CategoryTreeItem
                            children {
                                ...CategoryTreeItem
                                children {
                                    ...CategoryTreeItem
                                    children {
                                        ...CategoryTreeItem
                                        children {
                                            ...CategoryTreeItem
                                            children {
                                                ...CategoryTreeItem
                                            }
                                            # If you need your menu to be deeper, just continue this chain
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `)
);

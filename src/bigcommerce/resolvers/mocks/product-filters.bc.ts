export const mockProductFilterBc = {
    edges: [
        {
            node: {
                name: 'Brand',
                displayProductCount: true,
                brands: {
                    edges: [
                        {
                            node: {
                                entityId: 139,
                                name: 'Weller',
                                isSelected: false,
                                productCount: 1,
                            },
                        },
                    ],
                },
                __typename: 'BrandSearchFilter',
            },
        },
        {
            node: {
                name: 'Color',
                displayProductCount: true,
                filterName: 'Color',
                attributes: {
                    edges: [
                        {
                            node: {
                                __typename: 'ProductAttributeSearchFilterItem',
                                value: 'Green',
                                isSelected: false,
                                productCount: 1,
                            },
                        },
                        {
                            node: {
                                __typename: 'ProductAttributeSearchFilterItem',
                                value: 'Purple',
                                isSelected: false,
                                productCount: 1,
                            },
                        },
                    ],
                },
                __typename: 'ProductAttributeSearchFilter',
            },
        },
        {
            node: {
                name: 'Size',
                displayProductCount: true,
                filterName: 'Size',
                attributes: {
                    edges: [
                        {
                            node: {
                                __typename: 'ProductAttributeSearchFilterItem',
                                value: 'M',
                                isSelected: false,
                                productCount: 1,
                            },
                        },
                        {
                            node: {
                                __typename: 'ProductAttributeSearchFilterItem',
                                value: 'S',
                                isSelected: false,
                                productCount: 1,
                            },
                        },
                    ],
                },
                __typename: 'ProductAttributeSearchFilter',
            },
        },
        {
            node: {
                name: 'Price',
                selected: {
                    minPrice: null,
                    maxPrice: null,
                },
                __typename: 'PriceSearchFilter',
            },
        },
        {
            node: {
                name: 'Rating',
                ratings: {
                    edges: [
                        {
                            node: {
                                value: '1',
                                isSelected: false,
                                productCount: 1,
                                __typename: 'RatingSearchFilterItem',
                            },
                        },
                        {
                            node: {
                                value: '2',
                                isSelected: false,
                                productCount: 1,
                                __typename: 'RatingSearchFilterItem',
                            },
                        },
                        {
                            node: {
                                value: '3',
                                isSelected: false,
                                productCount: 1,
                                __typename: 'RatingSearchFilterItem',
                            },
                        },
                        {
                            node: {
                                value: '4',
                                isSelected: false,
                                productCount: 1,
                                __typename: 'RatingSearchFilterItem',
                            },
                        },
                        {
                            node: {
                                value: '5',
                                isSelected: false,
                                productCount: 1,
                                __typename: 'RatingSearchFilterItem',
                            },
                        },
                    ],
                },
                __typename: 'RatingSearchFilter',
            },
        },
        {
            node: {
                name: 'Other',
            },
        },
    ],
};

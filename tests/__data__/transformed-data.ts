export const transformedStates = [
    {
        code: 'ACT',
        id: 208,
        name: 'Australian Capital Territory',
    },
    {
        code: 'NSW',
        id: 209,
        name: 'New South Wales',
    },
    {
        code: 'NT',
        id: 210,
        name: 'Northern Territory',
    },
    {
        code: 'QLD',
        id: 211,
        name: 'Queensland',
    },
    {
        code: 'SA',
        id: 212,
        name: 'South Australia',
    },
    {
        code: 'TAS',
        id: 213,
        name: 'Tasmania',
    },
    {
        code: 'VIC',
        id: 214,
        name: 'Victoria',
    },
    {
        code: 'WA',
        id: 215,
        name: 'Western Australia',
    },
];

export const transformedCountries = {
    full_name_english: 'Australia',
    id: 13,
    two_letter_abbreviation: 'AU',
    available_regions: transformedStates,
};

export const transformedCreatedCustomer = {
    id: 19,
    allow_remote_shopping_assistance: true,
    reviews: {
        items: [],
        page_info: {
            current_page: null,
            page_size: null,
            total_pages: null,
        },
    },
    wishlists: [],
    wishlist: {
        visibility: 'PRIVATE',
    },
};
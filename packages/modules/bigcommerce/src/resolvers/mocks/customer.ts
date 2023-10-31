export const mockCustomer = {
    orders: {
        items: [
            {
                id: 1337,
            },
        ],
        page_info: {
            total_pages: 0,
            __typename: 'SearchResultPageInfo',
        },
        __typename: 'CustomerOrders',
    },
    addresses: [],
    firstname: 'mock',
    lastname: 'mock',
    email: 'email@aligent.com.au',
    is_subscribed: false,
    wishlists: [
        {
            id: '302',
            sharing_code: '5UpdY',
            items_v2: {
                items: [],
                __typename: 'WishlistItems',
            },
            __typename: 'Wishlist',
        },
    ],
    allow_remote_shopping_assistance: null,
    __typename: 'Customer',
};

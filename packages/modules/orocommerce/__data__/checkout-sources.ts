export const checkoutSources = [
    {
        type: 'checkoutsources',
        id: '19',
        links: {
            self: 'https://aligent.oro-cloud.com/api/checkoutsources/19',
        },
        attributes: {
            deleted: true,
        },
        relationships: {
            shoppingList: {
                links: {
                    self: 'https://aligent.oro-cloud.com/api/checkoutsources/19/relationships/shoppingList',
                    related: 'https://aligent.oro-cloud.com/api/checkoutsources/19/shoppingList',
                },
                data: {
                    type: 'shoppinglists',
                    id: '67',
                },
            },
        },
    },
    {
        type: 'checkoutsources',
        id: '20',
        links: {
            self: 'https://aligent.oro-cloud.com/api/checkoutsources/20',
        },
        attributes: {
            deleted: false,
        },
        relationships: {
            shoppingList: {
                links: {
                    self: 'https://aligent.oro-cloud.com/api/checkoutsources/20/relationships/shoppingList',
                    related: 'https://aligent.oro-cloud.com/api/checkoutsources/20/shoppingList',
                },
                data: {
                    type: 'shoppinglists',
                    id: '67',
                },
            },
        },
    },
];

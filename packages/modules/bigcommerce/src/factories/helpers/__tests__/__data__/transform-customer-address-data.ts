export const bcAddresses = [
    {
        id: 12,
        address1: '212 Pirie St',
        address2: '',
        address_type: 'residential',
        city: 'Adelaide',
        company: '',
        country: 'Australia',
        country_code: 'AU',
        customer_id: 18,
        first_name: 'jack',
        last_name: 'mcloughlin',
        phone: '0432471111',
        postal_code: '5114',
        state_or_province: 'South Australia',
        form_fields: [
            {
                name: 'Comments',
                value: '',
            },
            {
                name: 'Authority To Leave',
                value: [],
            },
            {
                name: 'Default Billing',
                value: ['Yes'],
            },
            {
                name: 'Default Shipping',
                value: [],
            },
            {
                name: 'region',
                value: 'South Australia',
            },
            {
                name: 'region_id',
                value: 212,
            },
            {
                name: 'region_code',
                value: 'SA',
            },
        ],
    },
];

export const transformedAddresses = [
    {
        id: 12,
        firstname: 'jack',
        lastname: 'mcloughlin',
        company: '',
        city: 'Adelaide',
        street: ['212 Pirie St'],
        region: {
            region: 'South Australia',
            region_code: 'SA',
            region_id: 212,
        },
        postcode: '5114',
        country_code: 'AU',
        telephone: '0432471111',
        default_billing: true,
        default_shipping: false,
    },
];

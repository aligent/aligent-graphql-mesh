import { BcCustomer } from "../../src/bigcommerce/types";

export const bcCountry = {
    id: 13,
    country: 'Australia',
    country_iso2: 'AU',
    country_iso3: 'AUS',
    states: {
        url: 'https://api.bigcommerce.com/stores/xxazhvt7gd/v2/countries/13/states',
        resource: '/countries/13/states',
    },
};

export const bcStates = [
    {
        id: 208,
        state: 'Australian Capital Territory',
        state_abbreviation: 'ACT',
        country_id: 13,
    },
    {
        id: 209,
        state: 'New South Wales',
        state_abbreviation: 'NSW',
        country_id: 13,
    },
    {
        id: 210,
        state: 'Northern Territory',
        state_abbreviation: 'NT',
        country_id: 13,
    },
    {
        id: 211,
        state: 'Queensland',
        state_abbreviation: 'QLD',
        country_id: 13,
    },
    {
        id: 212,
        state: 'South Australia',
        state_abbreviation: 'SA',
        country_id: 13,
    },
    {
        id: 213,
        state: 'Tasmania',
        state_abbreviation: 'TAS',
        country_id: 13,
    },
    {
        id: 214,
        state: 'Victoria',
        state_abbreviation: 'VIC',
        country_id: 13,
    },
    {
        id: 215,
        state: 'Western Australia',
        state_abbreviation: 'WA',
        country_id: 13,
    },
];

export const bcCustomerCreated: BcCustomer = {
    id: 19,
    authentication: { force_password_reset: false },
    company: '',
    customer_group_id: 0,
    email: 'jack.mcloughlin+test2@aligent.com.au',
    first_name: 'jack',
    last_name: 'mac',
    notes: '',
    phone: '',
    registration_ip_address: '',
    tax_exempt_category: '',
    date_created: '2023-08-02T02:02:44Z',
    date_modified: '2023-08-02T02:02:44Z',
    accepts_product_review_abandoned_cart_emails: false,
    store_credit_amounts: [{ amount: 0 }],
    origin_channel_id: 1,
    channel_ids: null,
};

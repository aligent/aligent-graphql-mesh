import { OrderAddress } from '@aligent/bigcommerce-resolvers';
import { BCConsignment } from '../../../types';

export const acOrderAddress: OrderAddress = {
    city: 'Adelaide',
    company: '',
    country_code: 'AU',
    firstname: '13',
    lastname: 'Test2',
    postcode: '5000',
    street: ['212 pirie st Level 1'],
    telephone: '12345678',
    region: 'South Australia',
};

export const bcConsignment: BCConsignment = {
    shipping: [
        {
            id: 36,
            first_name: '13',
            last_name: 'Test2',
            company: '',
            street_1: '212 pirie st',
            street_2: 'Level 1',
            city: 'Adelaide',
            zip: '5000',
            country: 'Australia',
            country_iso2: 'AU',
            state: 'South Australia',
            email: 'jan.plank@aligent.com.au',
            phone: '12345678',
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
                    value: ['Yes'],
                },
            ],
            line_items: [
                {
                    url: 'https://api.bigcommerce.com/stores/xxazhvt7gd/v2/orders/134/products/60',
                    resource: '/orders/134/products/60',
                },
                {
                    url: 'https://api.bigcommerce.com/stores/xxazhvt7gd/v2/orders/134/products/61',
                    resource: '/orders/134/products/61',
                },
            ],
            items_total: 2,
            items_shipped: 0,
            shipping_method: 'Free Shipping',
            base_cost: 0,
            cost_ex_tax: 0,
            cost_inc_tax: 0,
            cost_tax: 0,
            cost_tax_class_id: 2,
            base_handling_cost: 0,
            handling_cost_ex_tax: 0,
            handling_cost_inc_tax: 0,
            handling_cost_tax: 0,
            handling_cost_tax_class_id: 2,
            shipping_zone_id: 5,
            shipping_zone_name: 'Australia',
            shipping_quotes: {
                url: 'https://api.bigcommerce.com/stores/xxazhvt7gd/v2/orders/134/consignments/shipping/36/shipping_quotes',
                resource: '/orders/134/consignments/shipping/36/shipping_quotes',
            },
        },
    ],
};

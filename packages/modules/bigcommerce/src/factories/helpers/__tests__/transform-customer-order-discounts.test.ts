import { getTransformedOrderDiscounts } from '../transform-customer-order-discounts';

const bcDiscounts = [
    {
        id: 1,
        coupon_id: 7,
        order_id: 153,
        code: '5OFF',
        amount: '5',
        type: 2,
        discount: '5.0000',
    },
];

describe('transform-customer-order-discounts', () => {
    it(`transforms bc discounts into a structure the pwa is expecting`, () => {
        const transformedDiscounts = getTransformedOrderDiscounts(bcDiscounts, 'AUD');

        const expectedResult = [
            { amount: { currency: 'AUD', value: 5 }, code: '5OFF', label: '5OFF' },
        ];
        expect(transformedDiscounts).toEqual(expectedResult);
    });

    it(`returns an empty array if there are no BC discounts`, () => {
        const transformedDiscounts = getTransformedOrderDiscounts('', 'AUD');

        expect(transformedDiscounts).toEqual([]);
    });
});

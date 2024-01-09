import { OroOrderLineItem } from '../../../../types/order-line-item';

export const getOroMockOrderLineItems = (): OroOrderLineItem[] => {
    return [
        {
            type: 'orderlineitems',
            id: '8',
            attributes: {
                productSku: 'HOODIE-MW',
                productName: 'White Medium Aligent Hoodie',
                freeFormProduct: null,
                quantity: 1,
                productUnitCode: 'each',
                price: '15.0000',
                currency: 'AUD',
                shipUntil: null,
                comment: null,
                shippingEstimateAmount: null,
                unitPriceIncludingTax: '15.0000',
                unitPriceExcludingTax: '15.0000',
                unitPriceTaxAmount: '0.0000',
                rowTotalIncludingTax: '15.0000',
                rowTotalExcludingTax: '15.0000',
                rowTotalTaxAmount: '0.0000',
                taxes: [],
                rowTotalDiscountAmount: '0.0000',
                rowTotalAfterDiscountIncludingTax: '15.0000',
                rowTotalAfterDiscountExcludingTax: '15.0000',
                rowTotalAfterDiscount: '15.0000',
            },
            relationships: {
                order: {
                    data: {
                        type: 'orders',
                        id: '8',
                    },
                },
                product: {
                    data: {
                        type: 'products',
                        id: '5',
                    },
                },
                parentProduct: {
                    data: null,
                },
                productUnit: {
                    data: {
                        type: 'productunits',
                        id: 'each',
                    },
                },
            },
        },
    ];
};

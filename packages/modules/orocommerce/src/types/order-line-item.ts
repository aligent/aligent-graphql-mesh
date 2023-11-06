import { Entity } from '.';

export interface OroOrderLineItem extends Entity {
    type: 'orderlineitems';
    attributes: {
        productSku: string;
        productName: string;
        freeFormProduct: string | null;
        quantity: number;
        productUnitCode: string;
        price: string;
        currency: string;
        shipUntil: string | null; //date
        comment: string | null;
        shippingEstimateAmount: string | null; //money
        unitPriceIncludingTax: string;
        unitPriceExcludingTax: string;
        unitPriceTaxAmount: string;
        rowTotalIncludingTax: string;
        rowTotalExcludingTax: string;
        rowTotalTaxAmount: string;
        rowTotalDiscountAmount: string;
        rowTotalAfterDiscountIncludingTax: string;
        rowTotalAfterDiscountExcludingTax: string;
        rowTotalAfterDiscount: string;
        taxes: {
            tax: string;
            rate: string;
            taxableAmount: string;
            taxAmount: string;
            currency: string;
        }[];
    };
    relationships: {
        order: {
            data: {
                type: 'orders';
                id: string;
            };
        };
        product: {
            data: {
                type: 'products';
                id: string;
            };
        };
        parentProduct: {
            data: null | {
                type: 'products';
                id: string;
            };
        };
        productUnit: {
            data: {
                type: 'productunits';
                id: string;
            };
        };
    };
}

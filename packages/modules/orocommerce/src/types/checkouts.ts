export type GetCheckoutsArgs = {
    'filter[source]': number;
};

export type CreateCheckoutsArgs = {
    source: number;
};

type CheckoutAttributes = {
    poNumber: null;
    shippingMethod: string;
    shippingMethodType: string;
    paymentMethod: string;
    shipUntil: null;
    customerNotes: null;
    currency: string;
    createdAt: string;
    updatedAt: string;
    shipToBillingAddress: boolean;
    saveBillingAddress: boolean;
    saveShippingAddress: boolean;
    shippingMethodData: never[];
    paymentMethodData: null;
    email: null;
    shippingCost: null;
    website: number;
    lineItems: {
        id: number;
        productSku: string;
        quantity: number;
        productUnitCode: string;
    }[];
    subtotals: {
        currency: string;
        value: string;
        valid: boolean;
    }[];
    organization: number;
};

export type GetCheckout = {
    type: string;
    id: string;
    attributes: CheckoutAttributes;
    relationships: {
        source: {
            data: {
                type: string;
                id: string;
            };
        };
        customerUser: {
            data: {
                type: string;
                id: string;
            };
        };
        customer: {
            data: {
                type: string;
                id: string;
            };
        };
        billingAddress: {
            data: {
                type: string;
                id: string;
            };
        };
        shippingAddress: {
            data: {
                type: string;
                id: string;
            };
        };
    };
};

export type GetCheckouts = GetCheckout[];

export type CreatedCheckout = CheckoutAttributes & {
    id: number;
    customerUser: number;
    customer: number;
    billingAddress: null;
    shippingAddress: null;
    source: string;
};

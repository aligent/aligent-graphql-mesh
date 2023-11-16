export interface CheckoutSourceAttributes {
    deleted: boolean;
}

export interface CheckoutSourceRelationships {
    shoppingList: {
        links: {
            self: string;
            related: string;
        };
        data: {
            type: string;
            id: string;
        };
    };
}

export interface CheckoutSource {
    type: string;
    id: string;
    links: {
        self: string;
    };
    attributes: CheckoutSourceAttributes;
    relationships: CheckoutSourceRelationships;
}

export interface CheckoutSources extends Array<CheckoutSource> {}

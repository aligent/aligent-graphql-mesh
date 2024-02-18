export type GetCheckoutSourcesArgs = { 'filter[shoppingList]': number; sort?: string };

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

export type CheckoutSources = Array<CheckoutSource>

export type CreateCheckoutSourceArgs = { deleted?: boolean; shoppingList: number };

export type CreateCheckoutSourceResponse = {
    id?: number;
    deleted?: boolean;
    shoppingList?: number;
};

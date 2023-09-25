export type ProductsArgsRest = {
    is_visible?: boolean;
    brand_id?: number;
    include_fields?: string;
    sku?: string;
    'sku:in'?: Array<string>;
    sort?: string;
    direction?: string;
    limit?: number;
};

export type ProductRest = {
    categories?: Array<number>;
    id: number;
    name?: string;
    sku?: string;
    is_visible?: boolean;
    availability?: string;
};

export type ProductsRest = {
    data?: Array<ProductRest>;
    meta: {
        pagination: {
            total: number;
            count: number;
            per_page: number;
            current_page: number;
            total_pages: number;
            links: {
                current: string;
            };
        };
    };
};

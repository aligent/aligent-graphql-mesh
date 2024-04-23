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

export type RuleCondition = {
    product_option_id: number;
    option_value_id: number;
};

export type ProductRule = {
    id: number;
    product_id: number;
    is_enabled: boolean;
    price_adjuster: {
        adjuster: 'relative' | 'percentage';
        adjuster_value: number;
    };
    conditions: RuleCondition[];
};

export type CategoryRest = {
    category_id: number;
    category_uuid: string;
    parent_id: number;
    tree_id: number;
    name: string;
    description: string;
    views: number;
    sort_order: number;
    page_title: string;
    search_keywords: string;
    meta_keywords: [string];
    meta_description: string;
    layout_file: string;
    is_visible: boolean;
    default_product_sort: string;
    url: {
        path: string;
        is_customized: boolean;
    };
    image_url: string;
};

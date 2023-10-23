interface CachableObjects {
    operations: {
        [key: string]: number;
    };
    rules: Array<{
        pattern: RegExp;
        maxAge: number;
    }>;
}

export default {
    operations: {
        // Store config TTLs are set low as there is a maintenance flag check here
        getStoreConfig: 30,
        storeConfigData: 30,

        getCountries: 86400,
        getSocialLinks: 1800,
        fullNavigationMenu: 600,
        getBreadcrumbData: 600,

        getProductsBySku: 120,
        productDetail: 120,
    },
    rules: [
        {
            pattern: /ResolveURL/,
            maxAge: 120,
        },
    ],
} as CachableObjects;

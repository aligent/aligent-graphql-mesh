interface CachableObjects {
    operations: {
        [key: string]: number
    },
    rules: Array<{
        pattern: RegExp,
        maxAge: number
    }>
}

export default {
    operations: {
        getStoreConfig: 30,
        getCountries: 86400,
        getSocialLinks: 1800,
        fullNavigationMenu: 600,
        getProductsBySku: 600,
        storeConfigData: 30,
        getBreadcrumbData: 600,

        // @TODO: Enable after a lot more testing
        // productDetail: 300,
    },
    rules: [
        // @TODO: Enable after a lot more testing
        // {
        //     pattern: /ResolveURL/,
        //     maxAge: 300
        // }
    ] 
} as CachableObjects;
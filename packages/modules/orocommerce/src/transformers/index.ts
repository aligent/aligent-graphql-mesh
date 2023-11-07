import { Provider } from 'graphql-modules';
import { CurrencyTransformer, CurrencyTransformerChain } from './currency/transform-currency-data';
import {
    CustomerOrdersTransfomer,
    CustomerOrdersTransformerChain,
} from './orders/order-transformer';
import {
    CmsBlocksTransformer,
    CmsBlocksTransformerChain,
} from './cms-blocks/cms-blocks-transformer';
import {
    StoreLocationsTransformer,
    StoreLocationsTransformerChain,
} from './store-locations/store-locations-transformer';
import {
    CategoriesTransformer,
    CategoriesTransformerChain,
} from './categories/categories-transformer';
import {
    BreadcrumbsTransformer,
    BreadcrumbsTransformerChain,
} from './categories/breadcrumbs-transformer';

import {
    CustomerAddressTransformer,
    CustomerAddressTransformerChain,
} from './customers/transform-customer-address-data';

import {
    OroAddressTransformer,
    OroAddressTransformerChain,
} from './customers/transform-oro-address-data';
import {
    AddProductsToCartTransformer,
    AddProductsToCartTransformerChain,
} from './shopping-list/add-products-to-cart-transformer';

export * from './cms-blocks/cms-blocks-transformer';
export * from './country/country-transformer';
export * from './currency/transform-currency-data';
export * from './customers/customer-transformer';
export * from './key-messages/key-messages-transformer';
export * from './store-locations/store-locations-transformer';

export const getOroTransformers = (): Array<Provider> => {
    return [
        // Register Chain transformers
        {
            provide: CmsBlocksTransformerChain,
            useClass: CmsBlocksTransformerChain,
            global: true,
        },
        {
            provide: StoreLocationsTransformerChain,
            useClass: StoreLocationsTransformerChain,
            global: true,
        },
        {
            provide: CategoriesTransformerChain,
            useClass: CategoriesTransformerChain,
            global: true,
        },
        {
            provide: BreadcrumbsTransformerChain,
            useClass: BreadcrumbsTransformerChain,
            global: true,
        },
        {
            provide: CustomerAddressTransformerChain,
            useClass: CustomerAddressTransformerChain,
            global: true,
        },

        {
            provide: OroAddressTransformerChain,
            useClass: OroAddressTransformerChain,
            global: true,
        },
        {
            provide: AddProductsToCartTransformerChain,
            useClass: AddProductsToCartTransformerChain,
            global: true,
        },
        // Create default transformers and register them with their chain transformers
        {
            provide: StoreLocationsTransformer,
            useFactory: (transformerChain) => {
                const transformer = new StoreLocationsTransformer();
                transformerChain.addTransformer(transformer);
                return transformer;
            },
            deps: [StoreLocationsTransformerChain],
        },
        {
            provide: CmsBlocksTransformer,
            useFactory: (transformerChain) => {
                const transformer = new CmsBlocksTransformer();
                transformerChain.addTransformer(transformer);
                return transformer;
            },
            deps: [CmsBlocksTransformerChain],
        },
        {
            provide: CategoriesTransformer,
            useFactory: (transformerChain) => {
                const transformer = new CategoriesTransformer();
                transformerChain.addTransformer(transformer);
                return transformer;
            },
            deps: [CategoriesTransformerChain],
        },
        {
            provide: BreadcrumbsTransformer,
            useFactory: (transformerChain) => {
                const transformer = new BreadcrumbsTransformer();
                transformerChain.addTransformer(transformer);
                return transformer;
            },
            deps: [BreadcrumbsTransformerChain],
        },
        // Currency Register Chain transformers
        {
            provide: CurrencyTransformerChain,
            useClass: CurrencyTransformerChain,
            global: true,
        },
        {
            provide: CurrencyTransformer,
            useFactory: (transformerChain) => {
                const currencyTransformer = new CurrencyTransformer();
                // Add to the chain transformer
                transformerChain.addTransformer(currencyTransformer);
                return currencyTransformer;
            },
            deps: [CurrencyTransformerChain],
        },
        // Customer Order transfomers
        {
            provide: CustomerOrdersTransformerChain,
            useClass: CustomerOrdersTransformerChain,
            global: true,
        },
        {
            provide: CustomerOrdersTransfomer,
            useFactory: (transformerChain) => {
                const customerOrdersTransfomer = new CustomerOrdersTransfomer();
                transformerChain.addTransformer(customerOrdersTransfomer);
                return customerOrdersTransfomer;
            },
            deps: [CustomerOrdersTransformerChain],
        },
        {
            provide: CustomerAddressTransformer,
            useFactory: (transformerChain) => {
                const customerAddressTransformer = new CustomerAddressTransformer();
                transformerChain.addTransformer(customerAddressTransformer);
                return CustomerAddressTransformer;
            },
            deps: [CustomerAddressTransformerChain],
        },
        {
            provide: OroAddressTransformer,
            useFactory: (transformerChain) => {
                const transformOroAddress = new OroAddressTransformer();
                transformerChain.addTransformer(transformOroAddress);
                return OroAddressTransformer;
            },
            deps: [OroAddressTransformerChain],
        },
        {
            provide: AddProductsToCartTransformer,
            useFactory: (transformerChain) => {
                const addProductsToCartTransformer = new AddProductsToCartTransformer();
                transformerChain.addTransformer(addProductsToCartTransformer);
                return addProductsToCartTransformer;
            },
            deps: [AddProductsToCartTransformerChain],
        },
    ];
};

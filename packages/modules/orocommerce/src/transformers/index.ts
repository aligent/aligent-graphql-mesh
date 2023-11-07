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
    OroCustomerTransformer,
    OroCustomerTransformerChain,
} from './customers/transform-customer-data';

import {
    OroAddressesTransformer,
    OroAddressesTransformerChain,
} from './customers/transform-oro-addresses-data';

import {
    UpdateCustomerAddressTransformer,
    UpdateCustomerAddressTransformerChain,
} from './customers/transform-update-customer-address-data';

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
            provide: OroCustomerTransformerChain,
            useClass: OroCustomerTransformerChain,
            global: true,
        },

        {
            provide: OroAddressesTransformerChain,
            useClass: OroAddressesTransformerChain,
        },
        {
            provide: UpdateCustomerAddressTransformerChain,
            useClass: UpdateCustomerAddressTransformerChain,
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
                return customerAddressTransformer;
            },
            deps: [CustomerAddressTransformerChain],
        },
        {
            provide: OroAddressTransformer,
            useFactory: (transformerChain) => {
                const oroAddressTransformer = new OroAddressTransformer();
                transformerChain.addTransformer(oroAddressTransformer);
                return oroAddressTransformer;
            },
            deps: [OroAddressTransformerChain],
        },
        {
            provide: OroCustomerTransformer,
            useFactory: (customerTransformerChain, addressesChain) => {
                const oroCustomerTransformer = new OroCustomerTransformer(addressesChain);
                customerTransformerChain.addTransformer(oroCustomerTransformer);
                return oroCustomerTransformer;
            },
            deps: [OroCustomerTransformerChain, OroAddressesTransformerChain],
        },

        {
            provide: OroAddressesTransformer,
            useFactory: (transformerChain) => {
                const transformOroAddress = new OroAddressesTransformer();
                transformerChain.addTransformer(transformOroAddress);
                return OroAddressesTransformer;
            },
            deps: [OroAddressesTransformerChain],
        },

        {
            provide: UpdateCustomerAddressTransformer,
            useFactory: (transformerChain) => {
                const updateCustomerAddressTransformer = new UpdateCustomerAddressTransformer();
                transformerChain.addTransformer(updateCustomerAddressTransformer);
                return updateCustomerAddressTransformer;
            },
            deps: [UpdateCustomerAddressTransformerChain],
        },
    ];
};

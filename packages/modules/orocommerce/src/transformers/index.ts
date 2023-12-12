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
import { CmsPageTransformer, CmsPageTransformerChain } from './cms-page/transform-cms-page-data';
import {
    StoreConfigTransformer,
    StoreConfigTransformerChain,
} from './store-config/store-config-transformer';
import {
    CustomerAddressTransformer,
    CustomerAddressTransformerChain,
} from './customers/transform-customer-address-data';

import {
    OroAddressTransformer,
    OroAddressTransformerChain,
} from './customers/transform-oro-address-data';
import { OrderLineItemToShoppingListItemTransformer } from './shopping-list/order-line-item-to-shopping-list-item-transformer';
import { OrderLineItemsToNewShoppingListTransformer } from './shopping-list/order-line-items-to-new-shopping-list-transformer';
import { ShoppingListToCartTransformer } from './shopping-list/shopping-list-to-cart-transformer';

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
import {
    ProductsTransformer,
    ProductsTransformerChain,
} from './products/products-data-transformer';
import {
    AddProductsToCartTransformer,
    AddProductsToCartTransformerChain,
} from './shopping-list/add-products-to-cart-transformer';

import {
    UpdateCartItemTransformer,
    UpdateCartItemTransformerChain,
} from './shopping-list/update-cart-item-transformer';

import {
    UpdateCustomerTransformer,
    UpdateCustomerTransformerChain,
} from './customers/update-customer-transformer';

import { ContactUsInputToContactRequestTransformer } from './contact-us/contact-us-to-contact-request-transformer';

import { ShoppingListToRequisitionListTransformer } from '../transformers/shopping-list/shopping-list-to-requisition-list-transformer';
import { RequisitionListInputToShoppingListTransformer } from '../transformers/shopping-list/requisition-list-input-to-shopping-list-transformer';
import { ShoppingListWithItemsToRequisitionListTransformer } from './shopping-list/shopping-list-with-items-to-requisition-list-transformer';
import { ShoppingListsToRequisitionListsTransformer } from './shopping-list/shopping-lists-to-requisition-lists-transformer';

export * from './cms-blocks/cms-blocks-transformer';
export * from './country/country-transformer';
export * from './currency/transform-currency-data';
export * from './customers/customer-transformer';
export * from './key-messages/key-messages-transformer';
export * from './store-locations/store-locations-transformer';
export * from './shopping-list/order-line-item-to-shopping-list-item-transformer';
export * from './shopping-list/order-line-items-to-new-shopping-list-transformer';
export * from './shopping-list/shopping-list-to-cart-transformer';
export * from './contact-us/contact-us-to-contact-request-transformer';

export const getOroTransformers = (): Array<Provider> => {
    return [
        // Register Chain transformers
        {
            provide: CmsBlocksTransformerChain,
            useClass: CmsBlocksTransformerChain,
            global: true,
        },
        {
            provide: CmsPageTransformerChain,
            useClass: CmsPageTransformerChain,
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
        {
            provide: UpdateCustomerTransformerChain,
            useClass: UpdateCustomerTransformerChain,
        },
        {
            provide: AddProductsToCartTransformerChain,
            useClass: AddProductsToCartTransformerChain,
            global: true,
        },
        {
            provide: UpdateCartItemTransformerChain,
            useClass: UpdateCartItemTransformerChain,
            global: true,
        },
        // Create default transformers and register them with their chain transformers

        {
            provide: CurrencyTransformerChain,
            useClass: CurrencyTransformerChain,
            global: true,
        },
        {
            provide: CustomerOrdersTransformerChain,
            useClass: CustomerOrdersTransformerChain,
            global: true,
        },
        {
            provide: StoreConfigTransformerChain,
            useClass: StoreConfigTransformerChain,
            global: true,
        },
        {
            provide: ProductsTransformerChain,
            useClass: ProductsTransformerChain,
            global: true,
        },
        {
            provide: ShoppingListToRequisitionListTransformer,
            useClass: ShoppingListToRequisitionListTransformer,
            global: true,
        },
        {
            provide: ShoppingListsToRequisitionListsTransformer,
            useClass: ShoppingListsToRequisitionListsTransformer,
            global: true,
        },
        {
            provide: RequisitionListInputToShoppingListTransformer,
            useClass: RequisitionListInputToShoppingListTransformer,
            global: true,
        },
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
            provide: CmsPageTransformer,
            useFactory: (transformerChain) => {
                const transformer = new CmsPageTransformer();
                transformerChain.addTransformer(transformer);
                return transformer;
            },
            deps: [CmsPageTransformerChain],
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

        {
            provide: CurrencyTransformer,
            useFactory: (transformerChain) => {
                const currencyTransformer = new CurrencyTransformer();
                transformerChain.addTransformer(currencyTransformer);
                return currencyTransformer;
            },
            deps: [CurrencyTransformerChain],
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
            provide: StoreConfigTransformer,
            useFactory: (transformerChain) => {
                const storeConfigTransformer = new StoreConfigTransformer();
                transformerChain.addTransformer(storeConfigTransformer);
                return storeConfigTransformer;
            },
            deps: [StoreConfigTransformerChain],
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

        {
            provide: UpdateCustomerTransformer,
            useFactory: (transformerChain) => {
                const updateCustomerTransformer = new UpdateCustomerTransformer();
                transformerChain.addTransformer(updateCustomerTransformer);
                return updateCustomerTransformer;
            },
            deps: [UpdateCustomerTransformerChain],
        },

        {
            provide: ShoppingListToCartTransformer,
            useClass: ShoppingListToCartTransformer,
        },
        {
            provide: OrderLineItemToShoppingListItemTransformer,
            useClass: OrderLineItemToShoppingListItemTransformer,
        },
        {
            provide: OrderLineItemsToNewShoppingListTransformer,
            useClass: OrderLineItemsToNewShoppingListTransformer,
            deps: [OrderLineItemToShoppingListItemTransformer],
        },
        {
            provide: ProductsTransformer,
            useFactory: (transformerChain) => {
                const transformer = new ProductsTransformer();
                transformerChain.addTransformer(transformer);
                return transformer;
            },
            deps: [ProductsTransformerChain],
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
        {
            provide: ContactUsInputToContactRequestTransformer,
            useClass: ContactUsInputToContactRequestTransformer,
        },
        {
            provide: UpdateCartItemTransformer,
            useFactory: (transformerChain) => {
                const updateCartItemTransformer = new UpdateCartItemTransformer();
                transformerChain.addTransformer(updateCartItemTransformer);
                return updateCartItemTransformer;
            },
            deps: [UpdateCartItemTransformerChain],
        },
        {
            provide: ShoppingListWithItemsToRequisitionListTransformer,
            useFactory: (shoppingListToCartTransformer) => {
                return new ShoppingListWithItemsToRequisitionListTransformer(
                    shoppingListToCartTransformer
                );
            },
            deps: [ShoppingListToCartTransformer],
        },
    ];
};

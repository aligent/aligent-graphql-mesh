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
    SocialLinksTransformer,
    SocialLinksTransformerChain,
} from './social-links/social-links-transformer';
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
import {
    AddProductsToRequisitionListArgsTransformer,
    AddProductsToRequisitionListArgsTransformerChain,
} from './shopping-list/add-products-to-requisition-list-args-transformer';

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
export * from './products/products-data-transformer';
export * from './products/reviews-transformer';
export * from './products/stock-status-transformer';
export * from './categories/categories-transformer';
export * from './categories/breadcrumbs-transformer';

export const getOroTransformers = (): Array<Provider> => {
    return [
        // Register Chain transformers
        {
            provide: CmsBlocksTransformerChain,
            useClass: CmsBlocksTransformerChain,
        },
        {
            provide: CmsPageTransformerChain,
            useClass: CmsPageTransformerChain,
        },
        {
            provide: StoreLocationsTransformerChain,
            useClass: StoreLocationsTransformerChain,
        },
        {
            provide: CategoriesTransformerChain,
            useClass: CategoriesTransformerChain,
        },
        {
            provide: BreadcrumbsTransformerChain,
            useClass: BreadcrumbsTransformerChain,
        },
        {
            provide: CustomerAddressTransformerChain,
            useClass: CustomerAddressTransformerChain,
        },

        {
            provide: OroAddressTransformerChain,
            useClass: OroAddressTransformerChain,
        },
        {
            provide: OroCustomerTransformerChain,
            useClass: OroCustomerTransformerChain,
        },

        {
            provide: OroAddressesTransformerChain,
            useClass: OroAddressesTransformerChain,
        },
        {
            provide: UpdateCustomerAddressTransformerChain,
            useClass: UpdateCustomerAddressTransformerChain,
        },
        {
            provide: UpdateCustomerTransformerChain,
            useClass: UpdateCustomerTransformerChain,
        },
        {
            provide: AddProductsToCartTransformerChain,
            useClass: AddProductsToCartTransformerChain,
        },
        {
            provide: UpdateCartItemTransformerChain,
            useClass: UpdateCartItemTransformerChain,
        },
        {
            provide: CurrencyTransformerChain,
            useClass: CurrencyTransformerChain,
        },
        {
            provide: CustomerOrdersTransformerChain,
            useClass: CustomerOrdersTransformerChain,
        },
        {
            provide: SocialLinksTransformerChain,
            useClass: SocialLinksTransformerChain,
        },
        {
            provide: StoreConfigTransformerChain,
            useClass: StoreConfigTransformerChain,
        },
        {
            provide: ProductsTransformerChain,
            useClass: ProductsTransformerChain,
        },
        {
            provide: ShoppingListToRequisitionListTransformer,
            useClass: ShoppingListToRequisitionListTransformer,
        },
        {
            provide: ShoppingListsToRequisitionListsTransformer,
            useClass: ShoppingListsToRequisitionListsTransformer,
        },
        {
            provide: RequisitionListInputToShoppingListTransformer,
            useClass: RequisitionListInputToShoppingListTransformer,
        },
        {
            provide: AddProductsToRequisitionListArgsTransformerChain,
            useClass: AddProductsToRequisitionListArgsTransformerChain,
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
            provide: SocialLinksTransformer,
            useFactory: (transformerChain) => {
                const socialLinksTransformer = new SocialLinksTransformer();
                transformerChain.addTransformer(socialLinksTransformer);
                return socialLinksTransformer;
            },
            deps: [SocialLinksTransformerChain],
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
            useFactory: (transformerChain, productsTransformer) => {
                const transformer = new ShoppingListToCartTransformer(productsTransformer);
                transformerChain.addTransformer(transformer);
                return transformer;
            },
            deps: [UpdateCustomerTransformerChain, ProductsTransformer],
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
            useFactory: (transformerChain, categoriesTransformer) => {
                const transformer = new ProductsTransformer(categoriesTransformer);
                transformerChain.addTransformer(transformer);
                return transformer;
            },
            deps: [ProductsTransformerChain, CategoriesTransformer],
        },
        {
            provide: AddProductsToRequisitionListArgsTransformer,
            useFactory: (transformerChain) => {
                const transformer = new AddProductsToRequisitionListArgsTransformer();
                transformerChain.addTransformer(transformer);
                return transformer;
            },
            deps: [AddProductsToRequisitionListArgsTransformerChain],
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

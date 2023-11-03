import { Resolvers } from '@aligent/orocommerce-resolvers';
import { storeConfigResolver } from './queries/store-config';
import { countriesResolver } from './queries/country';
import { generateCustomerTokenMutation } from './mutations/generate-customer-token';
import { currencyResolver } from './queries/currency';
import { keyMessagesResolver } from './queries/key-messages';
import { categoriesResolver } from './queries/categories';
import { breadcrumbsSubResolver } from './queries/sub-resolvers/breadcrumbs';
import { createEmptyCartMutation } from './mutations/create-empty-cart';
import { postContactFormMutation } from './mutations/contact';
import { cmsBlocksResolver } from './queries/cms-blocks';
import { storeLocationsResolver } from './queries/store-locations';
import { createCustomerMutation } from './mutations/create-customer';
import { createCustomerAddressMutation } from './mutations/create-customer-address';
import { customerResolver } from './queries/customer';
import { customerOrdersResolver } from './queries/customer/orders';
import { deleteCustomerAddressMutation } from './mutations/delete-customer-address';
import { getSocialLinksResolver } from './queries/get-social-links';
import { loginMutation } from './mutations/login';
import { routeResolver } from './queries/route';
import { updateCustomerAddressMutation } from './mutations/update-customer-address';

export const resolvers: Resolvers = {
    Query: {
        storeConfig: storeConfigResolver,
        currency: currencyResolver,
        countries: countriesResolver,
        keyMessages: keyMessagesResolver,
        categories: categoriesResolver,
        cmsBlocks: cmsBlocksResolver,
        storeLocations: storeLocationsResolver,
        customer: customerResolver,
        route: routeResolver,
        getSocialLinks: getSocialLinksResolver,
    },
    Mutation: {
        generateCustomerToken: generateCustomerTokenMutation,
        createEmptyCart: createEmptyCartMutation,
        postContactForm: postContactFormMutation,
        createCustomer: createCustomerMutation,
        deleteCustomerAddress: deleteCustomerAddressMutation,
        createCustomerAddress: createCustomerAddressMutation,
        login: loginMutation,
        updateCustomerAddress: updateCustomerAddressMutation,
    },
    //sub-resolvers, used for nested queries from a query or a mutation resolver
    CategoryTree: {
        breadcrumbs: breadcrumbsSubResolver,
    },
    Customer: {
        orders: customerOrdersResolver,
    },
};

export default resolvers;

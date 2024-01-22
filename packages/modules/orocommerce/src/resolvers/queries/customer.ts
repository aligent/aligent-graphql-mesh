import { QueryResolvers } from '@aligent/orocommerce-resolvers';
import { CustomerClient } from '../../apis/rest/customer';
import { OroCustomerTransformerChain } from '../../transformers/customers/transform-customer-data';
import { RequisitionListService } from '../../services/requisition-list-service';
const GUEST_USER = {
    firstname: 'guest',
    lastname: 'guest',
    email: '',
    is_subscribed: null,
    allow_remote_shopping_assistance: false,
};

export const customerResolver = {
    resolve: async (_root, _args, context, _info) => {
        const bearerToken = context.request.headers.get('authorization');
        // The PWA makes a call to getCustomer on the home page
        // This is preferred to throwing an error
        if (!bearerToken) return GUEST_USER;

        const customerClient: CustomerClient = context.injector.get(CustomerClient);
        const getCustomerUserResponse = await customerClient.getCustomerUser('mine', bearerToken);

        const oroCustomer = getCustomerUserResponse.data;
        const oroAddresses = getCustomerUserResponse.included;
        const oroCustomerTransformer: OroCustomerTransformerChain = context.injector.get(
            OroCustomerTransformerChain
        );

        const requisitionListService: RequisitionListService =
            context.injector.get(RequisitionListService);
        const requisitionLists = await requisitionListService.getLists();

        return {
            ...oroCustomerTransformer.transform({
                data: { oroCustomer, oroAddresses },
            }),
            requisition_lists: requisitionLists,
        };
    },
} satisfies QueryResolvers['customer'];

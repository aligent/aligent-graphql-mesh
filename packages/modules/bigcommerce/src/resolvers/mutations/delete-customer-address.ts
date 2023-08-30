import { MutationResolvers } from '@aligent/bigcommerce-resolvers';
import { deleteCustomerAddress, getCustomerAddress } from '../../apis/rest/customer';
import { logAndThrowError } from '@aligent/utils';
import { getBcCustomerIdFromMeshToken } from '../../utils';

export const deleteCustomerAddressResolver: MutationResolvers['deleteCustomerAddress'] = {
    resolve: async (_root, args, context, _info) => {
        const customerId = getBcCustomerIdFromMeshToken(context.headers.authorization);

        const addressId = args.id;

        const customerAddress = await getCustomerAddress(addressId, customerId);
        if (!customerAddress) {
            return logAndThrowError(
                new Error('AuthorizationError: Address does not belong to customer')
            );
        }

        const deleted = await deleteCustomerAddress(addressId);

        return deleted;
    },
};

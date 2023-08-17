import { MutationResolvers } from '@mesh';
import { logAndThrowError } from '../../../utils/error-handling';
import { getDecodedMeshToken } from '../../../utils/tokens';
import { deleteCustomerAddress, getCustomerAddresses } from '../../apis/rest/customer';
import { addressIdBelongsToCustomer } from '../../../utils/validators/customer-address-validator';

export const deleteCustomerAddressResolver: MutationResolvers['deleteCustomerAddress'] = {
    resolve: async (_root, args, context, _info) => {
        if (!context.headers['mesh-token']) {
            return logAndThrowError(new Error('mesh-token header is required for this mutation.'));
        }

        const { bc_customer_id: customerId } = getDecodedMeshToken(context.headers['mesh-token']);

        const addressId = args.id;

        const customerAddresses = await getCustomerAddresses(customerId);
        if (!addressIdBelongsToCustomer(addressId, customerAddresses)) {
            return logAndThrowError(
                new Error('AuthorizationError: Address does not belong to customer')
            );
        }
        await deleteCustomerAddress(addressId);
        //Nothing is returned by BigComm, not matter if success or not, always 204 No Content
        //So if there is no critical error we are just returning null (TODO: Check with PWA if that's ok)
        return null;
    },
};

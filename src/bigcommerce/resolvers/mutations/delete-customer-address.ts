import { MutationResolvers } from '@mesh';
import { deleteCustomerAddress, getCustomerAddress } from '../../apis/rest/customer';
import { logAndThrowError } from '../../../utils/error-handling/error-handling';
import { getBcCustomerIdFromMeshToken } from '../../../utils/tokens';

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

        await deleteCustomerAddress(addressId);
        //Nothing is returned by BigComm, not matter if success or not, always 204 No Content
        //So if there is no critical error we are just returning null (TODO: Check with PWA if that's ok)
        return null;
    },
};

import { getBcCustomer } from '../graphql';
import { transformAcCustomerValidatePassword } from '../../factories/transform-customer-data';
import { validateCustomerCredentials as validateCustomerCredentialsPost } from '../rest/customer';
import { AuthorizationError } from '@aligent/utils';

/**
 * Validates a users password against the store email address
 * @param customerId
 * @param customerImpersonationToken
 * @param password
 */
export const verifyCustomerCredentials = async (
    customerId: number,
    customerImpersonationToken: string,
    password: string
): Promise<void> => {
    // Query for customer data to obtain the users email
    const { email } = await getBcCustomer(customerId, customerImpersonationToken);

    const channelId = 1; //for now setting channel to 1, will need additional work for multichannel support

    const validatePasswordRequest = transformAcCustomerValidatePassword(email, password, channelId);

    /* Check the input password belongs to the email address */
    const verifyPasswordResponse = await validateCustomerCredentialsPost(validatePasswordRequest);

    /* If the password doesn't belong to the email address return an error which flags the PWA
     * to end the users session */
    if (!verifyPasswordResponse.is_valid) {
        throw new AuthorizationError('Invalid login or password.');
    }
};

import { logAndThrowError } from '@aligent/utils';
import { postContactForm } from '../../apis/rest/contact-us-form';
import { MutationResolvers } from '@aligent/bigcommerce-resolvers';
import { retrieveCustomerImpersonationTokenFromCache, verifyReCaptcha } from '../../apis/rest';

export const contactUsResolver: MutationResolvers['contactUs'] = {
    resolve: async (_root, { input: contactFormInput }, context, _info) => {
        const customerImpersonationToken =
            await retrieveCustomerImpersonationTokenFromCache(context);
        if (!contactFormInput) {
            return logAndThrowError('Form data is missing');
        }

        await verifyReCaptcha(context, 'captcha_type_contact');

        const path = '/contact-us/';

        const response = await postContactForm(contactFormInput, path, customerImpersonationToken);

        return {
            status: response,
        };
    },
};

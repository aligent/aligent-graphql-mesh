import { logAndThrowError } from '@aligent/utils';
import { postContactForm } from '../../apis/rest/contact-us-form';
import { MutationResolvers } from '@aligent/bigcommerce-resolvers';

export const contactUsResolver: MutationResolvers['contactUs'] = {
    resolve: async (_root, { input: contactFormInput }, context, _info) => {
        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;

        if (!contactFormInput) {
            return logAndThrowError('Form data is missing');
        }

        const response = await postContactForm(contactFormInput, customerImpersonationToken);

        return {
            status: response,
        };
    },
};

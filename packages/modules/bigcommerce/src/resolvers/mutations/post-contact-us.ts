import { logAndThrowError } from '@aligent/utils';
import { postContactForm } from '../../apis/rest/post-contact-form';
import { MutationResolvers } from '@aligent/bigcommerce-resolvers';

export const postContactFormResolver: MutationResolvers['postContactForm'] = {
    resolve: async (_root, { input: contactFormInput }, context, _info) => {
        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;

        if (!contactFormInput) {
            return logAndThrowError('Form data is missing');
        }

        //this is having an issue and
        const response = await postContactForm(contactFormInput, customerImpersonationToken);

        return response;
    },
};

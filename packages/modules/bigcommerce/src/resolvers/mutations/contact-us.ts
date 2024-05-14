import { logAndThrowError } from '@aligent/utils';
import { postContactForm } from '../../apis/rest/contact-us-form';
import { MutationResolvers } from '@aligent/bigcommerce-resolvers';
import { retrieveCustomerImpersonationTokenFromCache } from '../../apis/rest';

export const contactUsResolver: MutationResolvers['contactUs'] = {
    resolve: async (_root, { input: contactFormInput }, context, _info) => {
        console.log('likey');
        const customerImpersonationToken =
            // 'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJjaWQiOjEsImNvcnMiOltdLCJlYXQiOjE3MTU2NzA0MjAsImlhdCI6MTcxNTU4MzQyMCwiaXNzIjoiQkMiLCJzaWQiOjEwMDEyNzk0NzYsInN1YiI6ImlvYmUycHQ3dXA4cHIweDViOXVxdW50MzJ0NjMyam4iLCJzdWJfdHlwZSI6MiwidG9rZW5fdHlwZSI6Mn0.e9z2uRbb4eRj-ufqcdacTj5auQEaaJ13LcA7UhxeJHKyOjklNs4ioGCoKnkowWZj-U-t5QJikMHApWRfhpMn1w';
            await retrieveCustomerImpersonationTokenFromCache(context);
        console.log(customerImpersonationToken);
        if (!contactFormInput) {
            return logAndThrowError('Form data is missing');
        }
        console.log(contactFormInput);

        const response = await postContactForm(contactFormInput, customerImpersonationToken);

        return {
            status: response,
        };
    },
};

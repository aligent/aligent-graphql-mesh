import { ContactUsInput, MutationResolvers } from '@aligent/orocommerce-resolvers';
import { ContactClient } from '../../apis/rest/contact';
import {
    ContactUsInput as OroContactUsInput,
    ContactUsOutput as OroContactUsOutput,
} from '../../types';

export const postContactFormMutation: MutationResolvers['postContactForm'] = {
    resolve: async (_root, { input }, context: GraphQLModules.Context, _info) => {
        const contactClient: ContactClient = context.injector.get(ContactClient);
        const contactUsInput = input as ContactUsInput;

        const oroContactUsInput: OroContactUsInput = {
            comment: contactUsInput.comment,
            email: contactUsInput.email,
            name: contactUsInput.name,
            telephone: contactUsInput.telephone,
        };

        const contactUsOutput: OroContactUsOutput =
            await contactClient.postContact(oroContactUsInput);
        try {
            return contactUsOutput.status;
        } catch (error) {
            throw new Error('Can not send your comment Now. Please try again later!');
        }
    },
};

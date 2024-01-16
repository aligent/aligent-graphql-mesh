import { MutationResolvers } from '@aligent/orocommerce-resolvers';
import { ContactClient } from '../../apis/rest/contact-request-api-client';
import { ContactUsInputToContactRequestTransformer } from '../../transformers/contact-us/contact-us-to-contact-request-transformer';

export const contactUsMutation: MutationResolvers['contactUs'] = {
    resolve: async (_root, { input }, context: GraphQLModules.Context, _info) => {
        const contactClient: ContactClient = context.injector.get(ContactClient);

        const contactInputTransformer: ContactUsInputToContactRequestTransformer =
            context.injector.get(ContactUsInputToContactRequestTransformer);

        await contactClient.createContactRequest(
            contactInputTransformer.transform({ data: input })
        );

        return { status: true };
    },
};

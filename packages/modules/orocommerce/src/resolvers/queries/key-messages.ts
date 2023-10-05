import { QueryResolvers } from '@aligent/orocommerce-resolvers';
import { KeyMessagesClient } from '../../apis/rest/key-messages-api-client';
import { transformKeyMessages } from '../../transformers/key-messages/key-messages-transformer';

export const keyMessagesResolver: QueryResolvers['keyMessages'] = {
    resolve: async (_root, _args, context, _info) => {
        const api: KeyMessagesClient = context.injector.get(KeyMessagesClient);
        const messages = await api.getKeyMessages();
        return transformKeyMessages(messages);
    },
};

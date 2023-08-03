import { QueryResolvers } from '../../../meshrc/.mesh';
import { mockKeyMessages } from '../mocks/key-messages';

export const keyMessagesResolver: QueryResolvers['keyMessages'] = {
    resolve: (_root, _args, _context, _info) => {
        return mockKeyMessages;
    },
};

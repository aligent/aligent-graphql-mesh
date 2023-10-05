import { KeyMessage, KeyMessageResult } from '@aligent/orocommerce-resolvers';
import { KeyMessage as OroKeyMessage } from '../../types/key-messages';

export const transformKeyMessages = (keyMessages: OroKeyMessage[]): KeyMessageResult => {
    return {
        __typename: 'KeyMessageResult',
        enabled: true,
        messages: keyMessages.map((message: OroKeyMessage): KeyMessage => {
            return {
                __typename: 'KeyMessage',
                link: message.link,
                message: message.message,
            };
        }),
    };
};

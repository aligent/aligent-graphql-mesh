import { KeyMessage, KeyMessageResult } from '@aligent/orocommerce-resolvers';
import { KeyMessage as OroKeyMessage } from '../types/key-messages';

export const transformKeyMessages = (keyMessages: OroKeyMessage[]): KeyMessageResult => {
    return {
        enabled: true,
        messages: keyMessages.map((message: OroKeyMessage): KeyMessage => {
            return {
                link: message.link,
                message: message.message,
            };
        }),
    };
};

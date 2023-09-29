import { KeyMessage } from '../../../types/key-messages';

const mockNewMessage = (): KeyMessage => {
    const id = Math.floor(Math.random() * 999) + 1;
    const link = process.env.ORO_STORE_URL + 'promos/' + id;
    const off = Math.floor(Math.random() * 100) + 1;
    const message = off + '% off selected clothing';

    return {
        id: id,
        link: link,
        message: message,
    };
};

export const getMockKeyMessages = (): KeyMessage[] => {
    const messages: KeyMessage[] = [];
    for (let i = 0; i < 5; i++) {
        messages.push(mockNewMessage());
    }
    return messages;
};

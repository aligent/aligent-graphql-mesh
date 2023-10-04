import { transformKeyMessages } from '../transform-key-messages';
import { getMockKeyMessages } from './__data__/key-messages-data';

describe('Key Messages data transformation tests', () => {
    const mockMessages = getMockKeyMessages();
    const output = transformKeyMessages(mockMessages);

    test('Check whether the transformed messages contains the expected properties', () => {
        expect(output).toHaveProperty('enabled');
        expect(output).toHaveProperty('messages');
        expect(output).toHaveProperty('messages[0].link');
        expect(output).toHaveProperty('messages[0].message');
    });

    test('Check whether the transformed messages contains expected data', () => {
        expect(output.enabled).toStrictEqual(true);
        expect(output.__typename).toStrictEqual('KeyMessageResult');

        for (const msgIndex in output.messages!) {
            const transformedMsg = output.messages[msgIndex]!;

            expect(transformedMsg.link).toStrictEqual(mockMessages[msgIndex].link);
            expect(transformedMsg.message).toStrictEqual(mockMessages[msgIndex].message);
        }
    });
});

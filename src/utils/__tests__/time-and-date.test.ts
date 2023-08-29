import { convertDateFormat } from '../time-and-date';

describe('Time and Date tests', () => {
    test('return date conveted from BC format to AC', () => {
        const result = convertDateFormat('Tue, 29 Aug 2023 02:26:57 +0000');
        expect(result).toEqual('2023-08-29 11:56:57');
    });
});

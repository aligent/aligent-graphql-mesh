import {
    convertDateFormat,
    getUnixTimeStampInSeconds,
    getUnixTimeStampInSecondsForMidnightTonight,
} from '../time-and-date';

describe('Time and Date tests', () => {
    test('return date converted from BC format to AC', () => {
        const result = convertDateFormat('Tue, 29 Aug 2023 02:26:57 +0000');
        expect(result).toEqual('2023-08-29 02:26:57');
    });

    test('return unix time stamp in seconds plus an additional amount of hours', () => {
        const nowDateObject = new Date('2023-10-18T20:42:16.652+00:00');
        const spy = jest.spyOn(Date, 'now').mockImplementation(() => nowDateObject.getTime());

        const result = getUnixTimeStampInSeconds({ additionalHours: 24 });
        spy.mockRestore();

        expect(result).toEqual(1697748137);
    });

    test('return unix time stamp in seconds for midnight of the current day', () => {
        const nowDateObject = new Date('2023-10-18T20:42:16.652+00:00');
        const spy = jest.spyOn(Date, 'now').mockImplementation(() => nowDateObject.getTime());

        const result = getUnixTimeStampInSecondsForMidnightTonight();
        spy.mockRestore();

        expect(result).toEqual(1697635800);
    });
});

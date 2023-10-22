import {
    convertDateFormat,
    getUnixTimeStampInSeconds,
    getUnixTimeStampInSecondsForMidnightTonight,
} from '../time-and-date';

jest.useFakeTimers();
jest.setSystemTime(new Date('2022-10-18T20:42:16.652+00:00').getTime());

describe('Time and Date tests', () => {
    test('return date converted from BC format to AC', () => {
        const result = convertDateFormat('Tue, 29 Aug 2023 02:26:57 +0000');
        expect(result).toEqual('2023-08-29 02:26:57');
    });

    test('return unix time stamp in seconds plus an additional amount of hours', () => {
        const result = getUnixTimeStampInSeconds({ additionalHours: 24 });

        expect(result).toEqual(1666212137);
    });

    test('return unix time stamp in seconds for midnight of the current day', () => {
        const result = getUnixTimeStampInSecondsForMidnightTonight();

        expect(result).toEqual(1666186200);
        jest.useRealTimers();
    });
});

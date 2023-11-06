import {
    convertDateFormat,
    getUnixTimeStampInSeconds,
    getUnixTimeStampInSecondsForMidnightTonight,
} from '../time-and-date';

beforeAll(() => {
    jest.useFakeTimers();
});

afterAll(() => {
    jest.useRealTimers();
});

describe('Time and Date tests', () => {
    test('return date converted from BC format to AC', () => {
        const result = convertDateFormat('Tue, 29 Aug 2023 02:26:57 +0000');
        expect(result).toEqual('2023-08-29 02:26:57');
    });

    test('return unix time stamp in seconds for midnight of the current day', () => {
        jest.setSystemTime(new Date('2022-10-18T20:42:16.652+00:00').getTime());

        console.log('Midnight time stamp', new Date(), Date.now());

        const result = getUnixTimeStampInSecondsForMidnightTonight();
        expect(result).toEqual(1666188000);
    });

    test('return unix time stamp in seconds plus an additional amount of hours', () => {
        jest.setSystemTime(new Date('2022-10-18T20:42:16.652+00:00').getTime());
        const result = getUnixTimeStampInSeconds({ additionalHours: 24 });

        expect(result).toEqual(1666212137);
    });
});

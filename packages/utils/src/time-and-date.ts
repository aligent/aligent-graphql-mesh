import { DateTime } from 'luxon';

export const getUnixTimeStampInSeconds = (additionalTime: { additionalHours: number }) => {
    const hoursInSeconds = 60 * 60 * additionalTime.additionalHours; // sec * mins * hours
    const unixTimeStampNow = Math.round(Date.now() / 1000); // Need in secs not ms
    return unixTimeStampNow + hoursInSeconds;
};

export const getUnixTimeStampInSecondsForMidnightTonight = (): number => {
    return DateTime.now()
        .setZone('Australia/Brisbane')
        .set({ hour: 24, minute: 0, second: 0, millisecond: 0 })
        .toSeconds();
};

export const convertDateFormat = (inputDate: string): string => {
    // 'ddd, DD MMM YYYY HH:mm:ss Z' -> BC Format
    const outputDateFormat = 'yyyy-MM-dd hh:mm:ss'; // AC Format

    const parsedDate = DateTime.fromRFC2822(inputDate, { setZone: true }).toString();

    return DateTime.fromISO(parsedDate, { setZone: true }).toFormat(outputDateFormat);
};

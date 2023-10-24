import moment from 'moment-timezone';
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
    const inputDateFormat = 'ddd, DD MMM YYYY HH:mm:ss Z'; // BC Format
    const outputDateFormat = 'YYYY-MM-DD HH:mm:ss'; // AC Format

    const parsedDate = moment.utc(inputDate, inputDateFormat);

    const formattedDate = parsedDate.format(outputDateFormat);

    return formattedDate;
};

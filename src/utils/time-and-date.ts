import moment from 'moment-timezone';

export const getUnixTimeStampInSeconds = (additionalTime: { additionalHours: number }) => {
    const hoursInSeconds = 60 * 60 * additionalTime.additionalHours; // sec * mins * hours
    const unixTimeStampNow = Math.round(Date.now() / 1000); // Need in secs not ms
    return unixTimeStampNow + hoursInSeconds;
};

export const getUnixTimeStampInSecondsForMidnightTonight = (): number => {
    const currentDate = new Date();

    currentDate.setHours(24, 0, 0, 0);

    return currentDate.getTime() / 1000;
};

export const convertDateFormat = (inputDate: string): string => {
    const inputDateFormat = 'ddd, DD MMM YYYY HH:mm:ss Z'; // BC Format
    const outputDateFormat = 'YYYY-MM-DD HH:mm:ss'; // AC Format

    const parsedDate = moment.utc(inputDate, inputDateFormat);

    const formattedDate = parsedDate.format(outputDateFormat);

    return formattedDate;
};

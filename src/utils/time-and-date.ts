import moment from 'moment-timezone';

export const getUnixTimeStampInSeconds = (additionalTime: { additionalHours: number }) => {
    const hoursInSeconds = 60 * 60 * additionalTime.additionalHours; // sec * mins * hours
    const unixTimeStampNow = Math.round(Date.now() / 1000); // Need in secs not ms
    return unixTimeStampNow + hoursInSeconds;
};

export const convertDateFormat = (inputDate: string): string => {
    const inputDateFormat = 'ddd, DD MMM YYYY HH:mm:ss Z';
    const outputDateFormat = 'YYYY-MM-DD HH:mm:ss';

    // Parse the input date using the input format
    const parsedDate = moment(inputDate, inputDateFormat);

    // Format the parsed date using the desired output format
    const formattedDate = parsedDate.format(outputDateFormat);

    return formattedDate
}

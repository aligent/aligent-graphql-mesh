export const getUnixTimeStampInSeconds = (additionalHours: number) => {
    const hoursInSeconds = 60 * 60 * additionalHours; // sec * mins * hours
    const unixTimeStampNow = Math.round(Date.now() / 1000); // Need in secs not ms
    return unixTimeStampNow + hoursInSeconds;
};
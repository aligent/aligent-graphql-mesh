export const getUnixTimeStampInSeconds = (hours: number) => {
    const hoursInSeconds = 60 * 60 * hours; // sec * mins * hours
    const unixTimeStampNow = Math.round(Date.now() / 1000); // Need in secs not ms
    return unixTimeStampNow + hoursInSeconds;
};
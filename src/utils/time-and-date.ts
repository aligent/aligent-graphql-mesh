/* istanbul ignore file */
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

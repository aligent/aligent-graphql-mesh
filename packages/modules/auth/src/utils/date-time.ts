export const formatTestingDate = (timestamp: number) => {
    const newDateTime = new Date(timestamp * 1000);
    return newDateTime.toLocaleString('en-AU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });
};

/**
 * Gets the current time timestamp
 */
export const getCurrentTimeStamp = () => {
    return Math.floor(new Date().getTime() / 1000);
};

/**
 * Converts minutes to seconds
 * @param minutes
 */
export const getMinutesToSeconds = (minutes: number) => {
    return minutes * 60;
};

/**
 * Determines if a token ttl has elapsed the current time
 * @param tokenTtl
 */
export const getTtlIsExpired = (tokenTtl: number) => {
    return tokenTtl < getCurrentTimeStamp();
};

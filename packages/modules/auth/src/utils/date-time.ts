export const getFormattedUTCDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);

    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');

    return `${day}/${month}/${year}, ${hours}:${minutes}`;
};

/**
 * Gets the current time timestamp
 */
export const getCurrentTimeStamp = () => {
    return Math.floor(new Date().getTime() / 1000);
};

/**
 * Gets the time for the passed in timestamp
 */
export const getUTCTimeStamp = (dateString: string) => {
    if (!dateString.endsWith('Z')) {
        console.error('dateString is not in UTC format e.g. "2024-03-01T09:16:00Z"');
    }

    return Math.floor(new Date(dateString).getTime() / 1000);
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

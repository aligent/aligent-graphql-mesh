import pino from 'pino';

export const logger = pino({
    base: undefined,
    timestamp: false,
    messageKey: 'message',
    level: process.env.LOG_LEVEL || 'info',
    formatters: {
        level: (label) => {
            return {
                level: label,
            };
        },
    },
});

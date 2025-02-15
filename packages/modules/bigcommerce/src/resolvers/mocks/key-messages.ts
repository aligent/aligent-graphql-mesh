export const mockKeyMessages = {
    enabled: true,
    messages: [
        {
            message: 'MOCK 20% off selected womans clothing',
            link: 'https://pwa.staging.aligent.com.au/women.html',
            __typename: 'KeyMessage' as const,
        },
        {
            message: 'MOCK 70% off selected mens clothing',
            link: 'https://pwa.staging.aligent.com.au/men.html',
            __typename: 'KeyMessage' as const,
        },
        {
            message: "MOCK I'm a key message",
            link: 'https://pwa.staging.aligent.com.au',
            __typename: 'KeyMessage' as const,
        },
    ],
    __typename: 'KeyMessageResult' as const,
};

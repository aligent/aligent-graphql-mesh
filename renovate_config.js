module.exports = {
    baseBranches: ['main'],
    secrets: {
        NPM_PUBLISH_TOKEN: process.env.NPM_PUBLISH_TOKEN,
    },
    $schema: 'https://docs.renovatebot.com/renovate-schema.json',
    hostRules: [
        {
            matchHost: 'https://npm.corp.aligent.consulting/',
            hostType: 'npm',
            token: '{{ secrets.NPM_PUBLISH_TOKEN }}',
        },
    ],
    npmrc: '@aligent:registry=https://npm.corp.aligent.consulting/',
};

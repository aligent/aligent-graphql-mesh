/* eslint-disable */
export default {
    displayName: 'aligent-auth-module',
    preset: '../../../jest.preset.js',
    testEnvironment: 'node',
    transform: {
        '^.+\\.[tj]s$': [
            'ts-jest',
            { tsconfig: '<rootDir>/tsconfig.spec.json', isolatedModules: true },
        ],
    },
    setupFiles: ['<rootDir>/.jest/setEnvVars.js'],
    moduleFileExtensions: ['ts', 'js', 'html'],
    coverageDirectory: '../../../coverage/packages/modules/auth',
};

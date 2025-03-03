/* eslint-disable */
export default {
    displayName: 'auth-module',
    preset: '../../../jest.preset.js',
    testEnvironment: 'node',
    transform: {
        '^.+\\.[tj]s$': [
            'ts-jest',
            { tsconfig: '<rootDir>/tsconfig.spec.json', isolatedModules: true },
        ],
    },
    setupFiles: ['<rootDir>/.jest/setEnvVars.js', 'jest-date-mock'],
    moduleFileExtensions: ['ts', 'js', 'html'],
    coverageDirectory: '../../../coverage/packages/modules/auth',
};

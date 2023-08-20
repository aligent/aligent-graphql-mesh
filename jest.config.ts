import type { Config } from 'jest';

const config: Config = {
    testEnvironment: 'node',
    transform: {
        '^.+\\.m?[tj]sx?$': [
            'ts-jest',
            {
                isolatedModules: true,
            },
        ],
    },
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
    modulePathIgnorePatterns: ['__data__'],
    setupFiles: ['<rootDir>/setupFiles.js'],
};

export default config;

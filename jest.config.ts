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
    moduleNameMapper: {
        '@aligent/bigcommerce-graphql-module': '<rootDir>/packages/modules/bigcommerce/src/index',
        '@aligent/bigcommerce-operations':
            '<rootDir>/packages/generated/bigcommerce/operations/index',
        '@aligent/bigcommerce-resolvers':
            '<rootDir>/packages/generated/bigcommerce/resolvers/index',
        '@aligent/utils': '<rootDir>/packages/utils/index',
    },
};

export default config;

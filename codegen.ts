import type { CodegenConfig } from '@graphql-codegen/cli';
const BC_GRAPHQL_API = process.env.BC_GRAPHQL_API as string;
const BC_GRAPHQL_TOKEN = process.env.BC_GRAPHQL_TOKEN as string;

const config: CodegenConfig = {
    overwrite: true,
    config: {
        enumsAsTypes: true,
    },
    generates: {
        // Generate Resolver signatures, input and output types based on our modules graphql schemas
        'packages/generated/bigcommerce/resolvers/index.ts': {
            schema: 'packages/modules/bigcommerce/src/schema/*.graphql',
            plugins: ['typescript', 'typescript-resolvers'],
        },

        // Generate the types for our operations on external graphql APIs using their remote schems and our operation files
        'packages/generated/bigcommerce/operations/index.ts': {
            schema: [
                {
                    [BC_GRAPHQL_API]: {
                        headers: {
                            Authorization: `Bearer ${BC_GRAPHQL_TOKEN}`,
                        },
                    },
                },
            ],
            plugins: ['typescript', 'typescript-operations'],
            documents: [
                'packages/modules/bigcommerce/src/apis/graphql/requests/*.{graphql,ts}',
                'packages/modules/bigcommerce/src/apis/graphql/fragments/*.{graphql,ts}',
            ],
            config: {
                useImplementingTypes: true,
            },
        },
    },
};

export default config;
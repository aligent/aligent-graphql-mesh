import type { CodegenConfig } from '@graphql-codegen/cli';
const BC_GRAPHQL_API = process.env.BC_GRAPHQL_API as string;
const BC_GRAPHQL_TOKEN = process.env.BC_GRAPHQL_TOKEN as string;

const config: CodegenConfig = {
    overwrite: true,
    config: {
        enumsAsTypes: true,
    },
    generates: {
        'src/meshrc/.mesh/external/BigCommerceGraphqlApi/index.ts': {
            schema: [
                {
                    [BC_GRAPHQL_API]: {
                        headers: {
                            Authorization: `Bearer ${BC_GRAPHQL_TOKEN}`,
                        },
                    },
                },
            ],
            // documents: 'src/bigcommerce/**/*.{graphql,ts}',
            plugins: [
                'typescript',
                //  'typescript-operations', 'typescript-generic-sdk'
            ],
            config: {
                typesPrefix: 'BC_',
                useImplementingTypes: true,
            },
        },
    },
};

export default config;

import type { CodegenConfig } from '@graphql-codegen/cli';
const BC_GRAPHQL_API = process.env.BC_GRAPHQL_API as string;
const BC_GRAPHQL_TOKEN = process.env.BC_GRAPHQL_TOKEN as string;

const config: CodegenConfig = {
    overwrite: true,
    config: {
        enumsAsTypes: true,
    },
    generates: {
        'packages/generated/bigcommerce/index.ts': {
            schema: [
                {
                    [BC_GRAPHQL_API]: {
                        headers: {
                            Authorization: `Bearer ${BC_GRAPHQL_TOKEN}`,
                        },
                    },
                },
            ],
            // Documents and operations/sdk plugins are used if we want to
            // autogenerate the typescript code required to carry out
            // graphql queries, mutations etc. defined in our .graphql files
            plugins: [
                'typescript',
                //  'typescript-operations', 'typescript-generic-sdk'
            ],
            // documents: 'src/bigcommerce/**/*.{graphql,ts}',
            config: {
                typesPrefix: 'BC_',
                useImplementingTypes: true,
            },
        },
    },
};

export default config;

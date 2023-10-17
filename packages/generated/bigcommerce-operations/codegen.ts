import type { CodegenConfig } from '@graphql-codegen/cli';
const BC_GRAPHQL_API = process.env.BC_GRAPHQL_API as string;
const BC_GRAPHQL_TOKEN = process.env.BC_GRAPHQL_TOKEN as string;

const config: CodegenConfig = {
    overwrite: true,
    config: {
        enumsAsTypes: true,
    },
    generates: {
        // Generate the types for our operations on external graphql APIs using their remote schems and our operation files
        'packages/generated/bigcommerce-operations/src/index.ts': {
            schema: [
                {
                    [BC_GRAPHQL_API]: {
                        headers: {
                            Authorization: `Bearer ${BC_GRAPHQL_TOKEN}`,
                        },
                    },
                },
            ],
            plugins: [
                {
                    add: {
                        content: 'import * as gm from "graphql-modules";'
                    }
                },
                'typescript',
                'typescript-operations',
                'typescript-graphql-request'
            ],
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

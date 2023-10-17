import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    config: {
        enumsAsTypes: true,
    },
    generates: {
        // Generate Resolver signatures, input and output types based on our modules graphql schemas
        'packages/generated/bigcommerce-resolvers/src/index.ts': {
            schema: 'packages/modules/bigcommerce/src/schema/*.graphql',
            plugins: [
                {
                    add: {
                        content: 'import * as gm from "graphql-modules";'
                    }
                },
                'typescript',
                'typescript-resolvers',
            ],
            config: {
                contextType: 'GraphQLModules.ModuleContext',
            },
        },
    },
};

export default config;

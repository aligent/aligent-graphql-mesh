import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    config: {
        enumsAsTypes: true,
    },
    generates: {
        'packages/generated/orocommerce-resolvers/src/index.ts': {
            schema: 'packages/modules/orocommerce/src/schema/*.graphql',
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

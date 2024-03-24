import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    config: {
        enumsAsTypes: true,
    },
    generates: {
        'packages/generated/auth-resolvers/src/index.ts': {
            schema: 'packages/modules/auth/src/schema/*.graphql',
            plugins: [
                {
                    add: {
                        content: 'import * as gm from "graphql-modules";',
                    },
                },
                'typescript',
                'typescript-resolvers',
            ],
            config: {
                contextType: 'GraphQLModules.ModuleContext',
                useImplementingTypes: true,
            },
        },
    },
};

export default config;

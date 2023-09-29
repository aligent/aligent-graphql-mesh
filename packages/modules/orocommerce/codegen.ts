import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    config: {
        enumsAsTypes: true,
    },
    generates: {
        'dist/packages/generated/orocommerce/resolvers/index.ts': {
            schema: 'packages/modules/orocommerce/src/schema/*.graphql',
            plugins: ['typescript', 'typescript-resolvers'],
            config: {
                contextType: 'GraphQLModules.ModuleContext',
            },
        },
    },
};

export default config;

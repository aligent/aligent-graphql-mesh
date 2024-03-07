import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { codegenGenerator } from './generator';
import { CodegenGeneratorSchema } from './schema';

describe('codegen-generator generator', () => {
    let tree: Tree;
    const options: CodegenGeneratorSchema = {
        name: 'test',
        importPath: '@aligent/some-resolvers',
        schemaGlob: 'packages/modules/some-package/src/schema/*.graphql',
        directory: 'packages/generated/some-resolvers',
    };

    beforeEach(() => {
        tree = createTreeWithEmptyWorkspace();
    });

    it('should run successfully', async () => {
        await codegenGenerator(tree, options);
        const config = readProjectConfiguration(tree, 'test');
        expect(config).toBeDefined();
    });
});

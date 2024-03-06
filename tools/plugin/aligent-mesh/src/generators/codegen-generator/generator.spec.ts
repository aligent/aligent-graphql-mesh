import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { codegenGeneratorGenerator } from './generator';
import { CodegenGeneratorGeneratorSchema } from './schema';

describe('codegen-generator generator', () => {
    let tree: Tree;
    const options: CodegenGeneratorGeneratorSchema = { name: 'test' };

    beforeEach(() => {
        tree = createTreeWithEmptyWorkspace();
    });

    it('should run successfully', async () => {
        await codegenGeneratorGenerator(tree, options);
        const config = readProjectConfiguration(tree, 'test');
        expect(config).toBeDefined();
    });
});

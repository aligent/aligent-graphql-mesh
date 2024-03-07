import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { graphqlModuleGenerator } from './generator';
import { GraphqlModuleGeneratorSchema } from './schema';

describe('graphql-module generator', () => {
    let tree: Tree;
    const options: GraphqlModuleGeneratorSchema = {
        name: 'test',
        shortName: 'test',
        importPath: '@aligent/test',
        directory: 'packages/modules/test',
    };

    beforeEach(() => {
        tree = createTreeWithEmptyWorkspace();
    });

    it('should run successfully', async () => {
        await graphqlModuleGenerator(tree, options);
        const config = readProjectConfiguration(tree, 'test');
        expect(config).toBeDefined();
    });
});

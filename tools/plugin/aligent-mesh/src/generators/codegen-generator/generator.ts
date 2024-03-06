import { addProjectConfiguration, formatFiles, generateFiles, Tree } from '@nx/devkit';
import * as path from 'path';
import { CodegenGeneratorGeneratorSchema } from './schema';

export async function codegenGeneratorGenerator(
    tree: Tree,
    options: CodegenGeneratorGeneratorSchema
) {
    const projectRoot = `libs/${options.name}`;
    addProjectConfiguration(tree, options.name, {
        root: projectRoot,
        projectType: 'library',
        sourceRoot: `${projectRoot}/src`,
        targets: {},
    });
    generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
    await formatFiles(tree);
}

export default codegenGeneratorGenerator;

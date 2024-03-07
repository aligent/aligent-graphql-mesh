import {
    addProjectConfiguration,
    formatFiles,
    generateFiles,
    Tree,
    offsetFromRoot,
    updateJson,
} from '@nx/devkit';
import * as path from 'path';
import { CodegenGeneratorSchema } from './schema';

export async function codegenGenerator(tree: Tree, options: CodegenGeneratorSchema) {
    let command = 'graphql-codegen --config {projectRoot}/codegen.ts';

    if (options.envFilePath) {
        command = `env-cmd -f ${options.envFilePath} --silent ${command}`;
    }

    addProjectConfiguration(tree, options.name, {
        root: options.directory,
        projectType: 'library',
        sourceRoot: `${options.directory}/src`,
        targets: {
            codegen: {
                executor: 'nx:run-commands',
                inputs: ['codegen'],
                outputs: ['{options.outputPath}'],
                options: {
                    outputPath: `${options.directory}/src`,
                    command,
                },
            },
            build: {
                executor: '@nx/js:tsc',
                outputs: ['{options.outputPath}'],
                options: {
                    outputPath: `dist/${options.directory}`,
                    tsConfig: `${options.directory}/tsconfig.lib.json`,
                    packageJson: `${options.directory}/package.json`,
                    main: `${options.directory}/src/index.ts`,
                },
                dependsOn: ['codegen'],
            },
        },
        namedInputs: {
            codegen: ['{projectRoot}/codegen.ts'],
        },
    });

    updateJson(tree, 'tsconfig.base.json', (json) => {
        json.compilerOptions.paths[options.importPath] = [`${options.directory}/src/index.ts`];
        return json;
    });

    generateFiles(tree, path.join(__dirname, 'files'), options.directory, {
        ...options,
        offsetFromRoot: offsetFromRoot(options.directory),
    });
    await formatFiles(tree);
}

export default codegenGenerator;

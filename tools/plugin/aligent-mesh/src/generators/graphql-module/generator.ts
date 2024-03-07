import {
    addProjectConfiguration,
    formatFiles,
    generateFiles,
    offsetFromRoot,
    Tree,
    updateJson,
} from '@nx/devkit';
import * as path from 'path';
import { GraphqlModuleGeneratorSchema } from './schema';
import codegenGenerator from '../codegen-generator/generator';

export async function graphqlModuleGenerator(tree: Tree, options: GraphqlModuleGeneratorSchema) {
    codegenGenerator(tree, {
        name: options.shortName + '-resolvers',
        importPath: '@aligent/' + options.shortName + '-resolvers',
        schemaGlob: `${options.directory}/src/schema/*.graphql`,
        directory: `packages/generated/${options.shortName + '-resolvers'}`,
        envFilePath: options.envFilePath,
    });

    const projectRoot = `${options.directory}`;
    addProjectConfiguration(tree, options.name, {
        root: projectRoot,
        projectType: 'library',
        sourceRoot: `${projectRoot}/src`,
        targets: {
            'check-types': {
                executor: 'nx:run-commands',
                options: {
                    commands: [
                        {
                            command: 'tsc --noEmit --pretty -p {projectRoot}/tsconfig.lib.json',
                        },
                    ],
                },
                dependsOn: [
                    {
                        projects: [`${options.shortName}-resolvers`],
                        target: 'build',
                    },
                ],
            },
            build: {
                executor: '@nx/js:tsc',
                outputs: ['{options.outputPath}'],
                options: {
                    outputPath: `dist/${options.directory}`,
                    tsConfig: `${options.directory}/tsconfig.lib.json`,
                    packageJson: `${options.directory}/package.json`,
                    main: `${options.directory}/src/index.ts`,
                    assets: [
                        `${options.directory}/*.md`,
                        `${options.directory}/src/schema/*.graphql`,
                    ],
                    external: 'none',
                },
                dependsOn: [
                    {
                        projects: [`${options.shortName}-resolvers`],
                        target: 'build',
                    },
                ],
            },
            publish: {
                command: `node tools/scripts/publish.mjs ${options.name} {args.ver} {args.tag}`,
                dependsOn: ['build'],
            },
            lint: {
                executor: '@nx/eslint:lint',
                outputs: ['{options.outputFile}'],
            },
            test: {
                executor: '@nx/jest:jest',
                outputs: ['{workspaceRoot}/coverage/{projectRoot}'],
                options: {
                    jestConfig: `${options.directory}/jest.config.ts`,
                },
            },
        },
    });

    updateJson(tree, 'tsconfig.base.json', (json) => {
        json.compilerOptions.paths[options.importPath] = [`${options.directory}/src/index.ts`];
        return json;
    });

    generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
        ...options,
        offsetFromRoot: offsetFromRoot(options.directory),
    });
    await formatFiles(tree);
}

export default graphqlModuleGenerator;

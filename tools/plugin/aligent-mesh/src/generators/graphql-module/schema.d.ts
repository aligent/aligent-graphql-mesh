export interface GraphqlModuleGeneratorSchema {
    name: string;
    shortName: string;
    importPath: string;
    directory: string;
    envFilePath?: string;
}

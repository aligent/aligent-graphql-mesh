export interface CodegenGeneratorSchema {
    name: string;
    importPath: string;
    schemaGlob: string;
    directory: string;
    envFilePath?: string;
}

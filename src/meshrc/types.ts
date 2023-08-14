import { MeshContext } from '@mesh';

export type GraphQlContext = MeshContext & {
    headers: Record<string, string>;
};

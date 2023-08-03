import { MeshContext } from '@graphql-mesh/runtime';

export type GraphQlContext = MeshContext & {
    headers: Record<string, string>;
};

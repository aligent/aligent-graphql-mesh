import { createCmsBlocksMock } from '../mocks/cms-blocks';

export const cmsBlocksResolver = {
    resolve: (_root, args, _context, _info) => {
        const { identifiers } = args as { identifiers: String[] };
        return createCmsBlocksMock(identifiers);
    },
};

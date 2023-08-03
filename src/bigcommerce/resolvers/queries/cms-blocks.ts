import { QueryResolvers } from '../../../meshrc/.mesh';
import { CustomContext } from '../../types';
import { createCmsBlocksMock } from '../mocks/cms-blocks';

export const cmsBlocksResolver: QueryResolvers<CustomContext>['cmsBlocks'] = {
    resolve: (_root, args, _context, _info) => {
        const { identifiers } = args as { identifiers: string[] };
        return createCmsBlocksMock(identifiers);
    },
};

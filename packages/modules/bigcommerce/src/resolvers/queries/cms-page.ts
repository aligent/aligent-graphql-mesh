import { QueryResolvers } from '@aligent/bigcommerce-resolvers';
import { logAndThrowError } from '@aligent/utils';
import { routeResolver } from './route';

export const cmsPageResolver: QueryResolvers['cmsPage'] = {
    resolve: async (root, args, context, info) => {
        if (!args.identifier) {
            return logAndThrowError('Required field identifier is missing');
        }

        const response = await routeResolver.resolve(
            root,
            {
                url: args.identifier,
            },
            context,
            info
        );

        return response;
    },
};

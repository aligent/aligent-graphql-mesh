import { QueryResolvers } from '@aligent/bigcommerce-resolvers';
import { logAndThrowError } from '@aligent/utils';
import { routeResolver } from './route';

export const cmsPageResolver = {
    resolve: async (root, args, context, info) => {
        if (!args.identifier) {
            return logAndThrowError('Required field identifier is missing');
        }

        // In big commerce all the URLs have slashes in start and end of the URL key but TF doesn't send those slashes
        // Adding slashes manually
        const url = `/${args.identifier}/`;

        const response = await routeResolver.resolve(
            root,
            {
                url,
            },
            context,
            info
        );

        return response;
    },
} satisfies QueryResolvers['cmsPage'];

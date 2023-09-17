import { QueryResolvers } from '@aligent/bigcommerce-resolvers';
import { logAndThrowError } from '@aligent/utils';
import { routeResolver } from './route';

export const cmsPageResolver = {
    resolve: async (root, args, context, info) => {
        if (!args.identifier) {
            return logAndThrowError('Required field identifier is missing');
        }

        //In big commerce, all the URLs have slashes at the start and end of the URL key, but TF sometimes sends slashes only at the beginning,
        // sometimes at both ends, and sometimes only at the end, so standardizing them by removing all
        // the slashes and re adding slashes to start and end
        const urlWithoutSlashes = args.identifier.replace(/\//g, '');
        const url = `/${urlWithoutSlashes}/`;

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

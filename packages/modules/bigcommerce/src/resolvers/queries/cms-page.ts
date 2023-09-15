import { QueryResolvers } from '@aligent/bigcommerce-resolvers';
import { logAndThrowError } from '@aligent/utils';
import { routeResolver } from './route';

export const cmsPageResolver = {
    resolve: async (root, args, context, info) => {
        if (!args.identifier) {
            return logAndThrowError('Required field identifier is missing');
        }

        // In big commerce all the URLs have slashes in start and end of the URL key but TF sometimes send
        // slashes only at beginning sometimes both and sometimes only at end, so standardising it by removing all
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

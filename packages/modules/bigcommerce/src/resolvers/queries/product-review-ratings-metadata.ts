import { QueryResolvers } from '@aligent/bigcommerce-resolvers';

export const productReviewRatingsMetadataResolver: QueryResolvers['productReviewRatingsMetadata'] =
    {
        resolve: (_root, _args, _context, _info) => {
            // TODO
            return {
                items: [],
            };
        },
    };

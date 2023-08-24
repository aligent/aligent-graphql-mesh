import { QueryResolvers } from '../../../meshrc/.mesh';

export const productReviewRatingsMetadataResolver: QueryResolvers['productReviewRatingsMetadata'] =
    {
        resolve: (_root, _args, _context, _info) => {
            // TODO
            return {
                items: [],
            };
        },
    };

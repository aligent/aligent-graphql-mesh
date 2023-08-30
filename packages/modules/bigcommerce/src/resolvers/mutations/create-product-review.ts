import { MutationResolvers } from '@aligent/bigcommerce-resolvers';

export const createProductReviewResolver: MutationResolvers['createProductReview'] = {
    resolve: (_root, _args, _context, _info) => {
        // TODO
        return {
            review: {
                average_rating: 1,
                created_at: '',
                nickname: '',
                product: {
                    reviews: {
                        items: [],
                        page_info: {},
                    },
                    custom_attributes: [],
                    price_range: {
                        minimum_price: {
                            final_price: {},
                            regular_price: {},
                        },
                    },
                    rating_summary: 1,
                    review_count: 1,
                    staged: true,
                    uid: '',
                },
                ratings_breakdown: [],
                summary: '',
                text: '',
            },
        };
    },
};

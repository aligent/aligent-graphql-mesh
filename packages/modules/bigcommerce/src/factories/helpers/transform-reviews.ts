import { Review, ReviewConnection } from '@aligent/bigcommerce-operations';
import {
    Maybe,
    ProductInterface,
    ProductReview,
    ProductReviews,
} from '@aligent/bigcommerce-resolvers';
import { isTruthy } from '@aligent/utils';

export const getTransformedReview = (review: Review): Maybe<ProductReview> => {
    const { author, createdAt, rating, text, title } = review;
    return {
        ratings_breakdown: [
            {
                name: author.name,
                value: '',
            },
        ],
        average_rating: rating,
        created_at: createdAt.utc,
        nickname: '',
        summary: title,
        text: text,
        // @todo TF doesn't get products for reviews. This will need follow up implementation if required
        product: {} as ProductInterface,
    };
};

export const getTransformedReviews = (reviews: ReviewConnection): ProductReviews => {
    const reviewItems = reviews.edges
        ? reviews.edges
              .map((review) => {
                  if (!review?.node) return null;
                  return getTransformedReview(review.node);
              })
              .filter(isTruthy)
        : [];

    /*
     * @todo Prouduct review pagination
     * find away to get better review information as the current returned data doesn't provide the
     * total number reviews for a product
     *
     * example of what BC provides
     * {"pageInfo":{"hasNextPage":true,"hasPreviousPage":false,"startCursor":"YXJyYXljb25uZWN0aW9uOjA=","endCursor":"YXJyYXljb25uZWN0aW9uOjA="}}
     * */
    const page_info = {
        current_page: 0,
        page_size: 0,
        total_pages: 0,
    };

    return {
        items: reviewItems,
        page_info,
    };
};

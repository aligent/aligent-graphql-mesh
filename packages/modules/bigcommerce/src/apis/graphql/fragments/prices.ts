import { gql } from 'graphql-tag';
import { money } from './money';
import { moneyRange } from './moneyRange';

export const prices = gql`
    ${money}
    ${moneyRange}

    fragment Prices on Prices {
        basePrice {
            ...Money
        }
        bulkPricing {
            minimumQuantity
            ... on BulkPricingPercentageDiscount {
                percentOff
            }
            ... on BulkPricingRelativePriceDiscount {
                priceAdjustment
            }
            ... on BulkPricingFixedPriceDiscount {
                price
            }
        }
        mapPrice {
            ...Money
        }
        price {
            ...Money
        }
        priceRange {
            ...MoneyRange
        }
        retailPrice {
            ...Money
        }
        retailPriceRange {
            ...MoneyRange
        }
        salePrice {
            ...Money
        }
        saved {
            ...Money
        }
    }
`;

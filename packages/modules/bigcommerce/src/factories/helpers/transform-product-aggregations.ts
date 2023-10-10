import {
    Maybe,
    ProductAttributeSearchFilter,
    BrandSearchFilter,
    PriceSearchFilter,
    RatingSearchFilter,
    ProductAttributeSearchFilterItemConnection,
    SearchProductFilterConnection,
    CategorySearchFilter,
} from '@aligent/bigcommerce-operations';
import { Aggregation, FilterTypeEnum, AggregationOption } from '@aligent/bigcommerce-resolvers';

const getFilterInputType = (typename?: string): FilterTypeEnum => {
    if (typename === 'PriceSearchFilter') {
        return 'FilterRangeTypeInput';
    }

    return 'FilterEqualTypeInput';
};

export const getTransformedAggregationOptions = (
    attributes: ProductAttributeSearchFilterItemConnection,
    filterName: string
): Maybe<Array<Maybe<AggregationOption>>> => {
    if (!filterName || attributes.edges?.length === 0) return [];

    const aggregationOptions = attributes?.edges
        ? attributes.edges
              .map((attribute) => {
                  if (!attribute?.node) return null;

                  const { value, productCount } = attribute.node;

                  return {
                      count: productCount,
                      label: value,
                      value,
                      swatch_data: ['color', 'size'].includes(filterName.toLowerCase())
                          ? {
                                type: 'ColorSwatchData',
                                value: value.toLowerCase(),
                            }
                          : null,
                  };
              })
              .filter(Boolean)
        : [];

    return aggregationOptions;
};

const getAggregationsFromProductAttributeSearchFilter = (
    filter: ProductAttributeSearchFilter
): Maybe<Aggregation> => {
    const { filterName, name, attributes } = filter;

    const options = getTransformedAggregationOptions(attributes, filterName);

    return {
        attribute_code: name.toLowerCase(),
        count: attributes?.edges ? attributes.edges.length : 0,
        label: name,
        options,
        filterType: getFilterInputType(filter.__typename),
    };
};

export const getAggregationsFromBrandFilter = (filter: BrandSearchFilter): Maybe<Aggregation> => {
    const { brands, name } = filter;

    const options = brands?.edges
        ? brands.edges
              .map((brand) => {
                  if (!brand?.node) return null;

                  const { entityId, productCount, name } = brand.node;

                  return {
                      count: productCount,
                      label: name,
                      value: String(entityId),
                  };
              })
              .filter(Boolean)
        : [];

    return {
        attribute_code: name.toLowerCase(),
        count: 0,
        label: name,
        options,
        filterType: getFilterInputType(filter.__typename),
    };
};

/**
 * @todo potentially find how to populate with filter pricing options.
 * Big Commerce doesn't provide price options according to the filtered products but more so
 * based on providing a price range.
 * @param filter
 */
const getAggregationsFromPriceFilter = (filter: PriceSearchFilter): Maybe<Aggregation> => {
    const { name } = filter;

    return {
        attribute_code: name.toLowerCase(),
        count: null,
        label: name,
        options: [],
        filterType: getFilterInputType(filter.__typename),
    };
};

const getAggregationsFromCategoryFilter = (filter: CategorySearchFilter): Maybe<Aggregation> => {
    const { categories, name } = filter;

    const options = categories?.edges
        ? categories.edges
              .map((category) => {
                  if (!category?.node) return null;

                  const { entityId, productCount, name } = category.node;

                  return {
                      count: productCount,
                      label: name,
                      value: String(entityId),
                  };
              })
              .filter(Boolean)
        : [];

    return {
        attribute_code: 'category_uid',
        count: categories?.edges ? categories.edges.length : 0,
        label: name,
        options: options,
        filterType: getFilterInputType(filter.__typename),
    };
};

export const getAggregationsFromRatingFilter = (filter: RatingSearchFilter): Maybe<Aggregation> => {
    const { name, ratings } = filter;

    const options = ratings?.edges
        ? ratings.edges
              .map((rating) => {
                  if (!rating?.node) return null;
                  const { productCount, value } = rating.node;
                  return {
                      count: productCount,
                      label: value,
                      value,
                  };
              })
              .filter(Boolean)
        : [];

    return {
        attribute_code: name.toLowerCase(),
        count: 0,
        label: name,
        options,
        filterType: getFilterInputType(filter.__typename),
    };
};

export const getTransformedProductAggregations = (
    filters: SearchProductFilterConnection
): Maybe<Array<Maybe<Aggregation>>> => {
    if (!filters?.edges) return [];
    return filters.edges
        .map((filter) => {
            if (!filter?.node) return null;

            const typename = filter.node.__typename;

            if (typename === 'BrandSearchFilter') {
                return getAggregationsFromBrandFilter(filter.node);
            }

            if (typename === 'CategorySearchFilter') {
                return getAggregationsFromCategoryFilter(filter.node);
            }

            if (typename === 'PriceSearchFilter') {
                return getAggregationsFromPriceFilter(filter.node);
            }

            if (typename === 'ProductAttributeSearchFilter') {
                return getAggregationsFromProductAttributeSearchFilter(filter.node);
            }

            if (typename === 'RatingSearchFilter') {
                return getAggregationsFromRatingFilter(filter.node);
            }

            return null;
        })
        .filter(Boolean);
};

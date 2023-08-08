import {
    Aggregation,
    FilterTypeEnum,
    Maybe,
    BC_ProductAttributeSearchFilter,
    AggregationOption,
    BC_BrandSearchFilter,
    BC_PriceSearchFilter,
    BC_RatingSearchFilter,
    BC_ProductAttributeSearchFilterItemConnection,
} from '../../meshrc/.mesh';
import { BC_SearchProductFilters } from '../types';

const getFilterInputType = (typename?: string): FilterTypeEnum => {
    if (typename === 'PriceSearchFilter') {
        return 'FilterRangeTypeInput';
    }

    return 'FilterEqualTypeInput';
};

const getTransformedAggregationOptions = (
    attributes: BC_ProductAttributeSearchFilterItemConnection,
    filterName: string
): Maybe<Array<Maybe<AggregationOption>>> => {
    if (!filterName || attributes.edges?.length === 0) return null;

    const aggregationOptions = attributes?.edges
        ? attributes.edges
              .map(attribute => {
                  if (!attribute?.node) return null;

                  const { value, isSelected, productCount } = attribute.node;

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
        : null;

    return aggregationOptions;
};

const getAggregationsFromBrandFilter = (filter?: BC_BrandSearchFilter): Maybe<Aggregation> => {
    if (!filter) return null;

    const { brands, name } = filter;

    const options = brands?.edges
        ? brands.edges
              .map(brand => {
                  if (!brand?.node) return null;

                  const { productCount, name, isSelected, entityId } = brand.node;

                  return {
                      count: productCount,
                      label: name,
                      value: name,
                  };
              })
              .filter(Boolean)
        : null;

    return {
        attribute_code: name.toLowerCase(),
        count: 0,
        label: name,
        options,
        // @ts-expect-error: the AC proptypes don't handle the __typename
        filterType: getFilterInputType(filter.__typename),
    };
};

/**
 * @todo potentially find how to populate with filter pricing options.
 * Big Commerce doesn't provide price options according to the filtered products but more so
 * based on providing a price range.
 * @param filter
 */
const getAggregationsFromPriceFilter = (filter?: BC_PriceSearchFilter): Maybe<Aggregation> => {
    if (!filter) return null;

    const { name } = filter;

    return {
        attribute_code: name.toLowerCase(),
        count: null,
        label: name,
        options: [],
        // @ts-expect-error: the AC proptypes don't handle the __typename
        filterType: getFilterInputType(filter.__typename),
    };
};

const getAggregationsFromProductAttributeSearchFilter = (
    filter?: BC_ProductAttributeSearchFilter
): Maybe<Aggregation> => {
    if (!filter) return null;

    const { displayProductCount, filterName, isCollapsedByDefault, name, attributes } = filter;

    const options = getTransformedAggregationOptions(attributes, filterName);

    return {
        attribute_code: name.toLowerCase(),
        count: attributes?.edges ? attributes.edges.length : 0,
        label: name,
        options,
        // @ts-expect-error: the AC proptypes don't handle the __typename
        filterType: getFilterInputType(filter.__typename),
    };
};

const getAggregationsFromRatingFilter = (filter?: BC_RatingSearchFilter): Maybe<Aggregation> => {
    if (!filter) return null;

    const { name, ratings } = filter;

    const options = ratings?.edges
        ? ratings.edges
              .map(rating => {
                  if (!rating?.node) return null;
                  const { productCount, value } = rating.node;
                  return {
                      count: productCount,
                      label: value,
                      value,
                  };
              })
              .filter(Boolean)
        : null;

    return {
        attribute_code: name.toLowerCase(),
        count: 0,
        label: name,
        options,
        // @ts-expect-error: the AC proptypes don't handle the __typename
        filterType: getFilterInputType(filter.__typename),
    };
};

export const getTransformedProductAggregations = (
    filters: BC_SearchProductFilters
): Maybe<Array<Maybe<Aggregation>>> => {
    if (!filters?.edges) return null;
    return filters.edges
        .map(filter => {
            if (!filter?.node) return null;

            const typename = filter.node.__typename;

            if (typename === 'BrandSearchFilter') {
                return getAggregationsFromBrandFilter(filter.node);
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

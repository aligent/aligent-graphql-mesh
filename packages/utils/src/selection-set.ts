import { SelectionNode, SelectionSetNode } from 'graphql/language/ast';

/**
 * Gets a selection from the selectionSet. If a selection exists it means this is
 * being asked for in a graphql request
 *
 * example of use in a resolver.
 *
 * resolve: async (root, _args, context, info) => {
 *      ...
 *      const isDiscountsPropInQuery = getSelectionInSelectionSet(
 *           'discounts',
 *            info.fieldNodes[0].selectionSet
 *      );
 *
 *      ...
 * }
 *
 * @param property
 * @param selectionSet - The selectionSet from within a resolver "info" property
 */
export const getSelectionInSelectionSet = (
    property: string,
    selectionSet?: SelectionSetNode
): SelectionNode | undefined => {
    return selectionSet?.selections.find(
        (selection) => 'name' in selection && selection.name.value === property
    );
};

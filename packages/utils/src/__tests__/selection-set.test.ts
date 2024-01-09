import { getSelectionInSelectionSet } from '../selection-set';
import { SelectionSetNode } from 'graphql/language/ast';

const selectionSet = {
    kind: 'SelectionSet',
    selections: [
        {
            kind: 'Field',
            name: {
                kind: 'Name',
                value: 'discounts',
            },
            arguments: [],
            directives: [],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: {
                            kind: 'Name',
                            value: 'amount',
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: {
                                        kind: 'Name',
                                        value: 'currency',
                                    },
                                    arguments: [],
                                    directives: [],
                                },
                                {
                                    kind: 'Field',
                                    name: {
                                        kind: 'Name',
                                        value: 'value',
                                    },
                                    arguments: [],
                                    directives: [],
                                },
                                {
                                    kind: 'Field',
                                    name: {
                                        kind: 'Name',
                                        value: '__typename',
                                    },
                                    arguments: [],
                                    directives: [],
                                },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: {
                            kind: 'Name',
                            value: 'label',
                        },
                        arguments: [],
                        directives: [],
                    },
                    {
                        kind: 'Field',
                        name: {
                            kind: 'Name',
                            value: '__typename',
                        },
                        arguments: [],
                        directives: [],
                    },
                ],
            },
        },
        {
            kind: 'Field',
            name: {
                kind: 'Name',
                value: 'grand_total',
            },
            arguments: [],
            directives: [],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: {
                            kind: 'Name',
                            value: 'currency',
                        },
                        arguments: [],
                        directives: [],
                    },
                    {
                        kind: 'Field',
                        name: {
                            kind: 'Name',
                            value: 'value',
                        },
                        arguments: [],
                        directives: [],
                    },
                    {
                        kind: 'Field',
                        name: {
                            kind: 'Name',
                            value: '__typename',
                        },
                        arguments: [],
                        directives: [],
                    },
                ],
            },
        },
        {
            kind: 'Field',
            name: {
                kind: 'Name',
                value: '__typename',
            },
            arguments: [],
            directives: [],
        },
    ],
} as SelectionSetNode;

describe('selection-set', () => {
    it('Returns a selection from a selectionSet', () => {
        const foundSelection = getSelectionInSelectionSet('discounts', selectionSet);

        const expectedResult = selectionSet.selections[0];

        expect(foundSelection).toEqual(expectedResult);
    });

    it('Returns "undefined" if the selection set is undefined', () => {
        const foundSelection = getSelectionInSelectionSet('discounts', undefined);

        const expectedResult = undefined;

        expect(foundSelection).toEqual(expectedResult);
    });

    it(`Returns "undefined" if a selection can't be found`, () => {
        const foundSelection = getSelectionInSelectionSet('nothing', selectionSet);

        const expectedResult = undefined;

        expect(foundSelection).toEqual(expectedResult);
    });
});

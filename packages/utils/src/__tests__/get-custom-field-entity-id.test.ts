import { getFieldEntityId } from '../get-custom-field-entity-id';

describe('Get custom form field entity id', () => {
    test('return correct field id without any prefix', () => {
        expect(getFieldEntityId('field_99')).toEqual(99);
    });
});

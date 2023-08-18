import { transformSelectedOptions } from '../transform-selected-options';

describe('Transform selected options', () => {
    it('Transforms selected options to multipleChoices', () => {
        expect(
            transformSelectedOptions([
                'Y29uZmlndXJhYmxlLzE0OC8xODI=',
                'Y29uZmlndXJhYmxlLzE0OS8xODQ=',
            ])
        ).toEqual({
            multipleChoices: [
                {
                    optionEntityId: 148,
                    optionValueEntityId: 182,
                },
                {
                    optionEntityId: 149,
                    optionValueEntityId: 184,
                },
            ],
        });
    });
});

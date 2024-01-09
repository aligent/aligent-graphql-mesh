// BC REST FormField API returns field id in the format of 'field_26',
// BC Graphql Checkout returns customField with entityId: 26
export const getFieldEntityId = (fieldId: string): number => {
    return Number(fieldId.replace('field_', ''));
};

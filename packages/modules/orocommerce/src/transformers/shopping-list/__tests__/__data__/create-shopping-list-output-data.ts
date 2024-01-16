import { CreateRequisitionListOutput } from '@aligent/orocommerce-resolvers';

export const createShoppingListOutputData: CreateRequisitionListOutput = {
    requisition_list: {
        description: 'description',
        items: {
            items: [],
            page_info: {
                current_page: 0,
                page_size: 0,
                total_pages: 0,
            },
            total_pages: 0,
        },
        items_count: 0,
        name: 'Name1',
        uid: 'MQ==',
    },
};

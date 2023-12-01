import { DeleteRequisitionListOutput, RequisitionList } from '@aligent/orocommerce-resolvers';

export const deleteShoppingListOutputData: DeleteRequisitionListOutput = {
    status: true,
};

export const requisitionList: RequisitionList = {
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
};

export const deleteShoppingListWithItemsOutputData: DeleteRequisitionListOutput = {
    status: true,
    requisition_lists: {
        items: [requisitionList],
        page_info: {},
        total_count: 0,
    },
};

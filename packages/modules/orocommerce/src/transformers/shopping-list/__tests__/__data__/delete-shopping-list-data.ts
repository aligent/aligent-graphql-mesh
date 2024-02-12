import { DeleteRequisitionListOutput, RequisitionList } from '@aligent/orocommerce-resolvers';

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
    company_user: 5,
    created_at: '2024-02-07T04:33:29Z',
    updated_at: '2024-02-07T04:33:29Z',
    currency: 'AUD',
    default: false,
    customer: 5,
    sub_total: {
        currency: 'AUD',
        value: 10,
    },
    total: {
        currency: 'AUD',
        value: 20,
    },
};

export const deleteShoppingListWithItemsOutputData: DeleteRequisitionListOutput = {
    status: true,
    requisition_lists: {
        items: [requisitionList],
        total_count: 1,
        page_info: {
            current_page: 0,
            page_size: 0,
            total_pages: 0,
        },
    },
};

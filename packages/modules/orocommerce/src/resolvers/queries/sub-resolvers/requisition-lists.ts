import { CustomerResolvers } from '@aligent/orocommerce-resolvers';
import { RequisitionListService } from '../../../services/requisition-list-service';

/**
 * This is a sub-resolver it is executed after customerResolver when requisitions_lists property is requested
 * The sub-resolvers is configured here in the scr/resolves/index.ts
 */
export const RequisitionListsResolver: CustomerResolvers['requisition_lists'] = {
    resolve: async (root, args, context, _info) => {
        const requisitionListService: RequisitionListService =
            context.injector.get(RequisitionListService);

        const requisitionLists = await requisitionListService.getLists();

        return requisitionLists;
    },
};

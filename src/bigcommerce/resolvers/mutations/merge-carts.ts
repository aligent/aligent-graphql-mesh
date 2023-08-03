import { Cart, MutationResolvers } from "../../../meshrc/.mesh";
import { CustomContext } from "../../types";
import { mockMergeCarts } from "../mocks/merge-carts";

export const mergeCartsResolver: MutationResolvers<CustomContext>['mergeCarts']= {
    resolve: (_root, _args, _context, _info) => {
        return (mockMergeCarts as unknown) as Cart;
    },
};

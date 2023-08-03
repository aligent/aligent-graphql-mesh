import { QueryResolvers } from "../../../meshrc/.mesh";
import { CustomContext } from "../../types";
import { mockIsEmailAvailable } from "../mocks/is-email-available";

export const isEmailAvailableResolver: QueryResolvers<CustomContext>['isEmailAvailable'] = {
    resolve: (_root, _args, _context, _info) => {
        return mockIsEmailAvailable;
    },
};

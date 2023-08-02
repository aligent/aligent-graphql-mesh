import { QueryResolvers } from "../../../meshrc/.mesh";
import { mockIsEmailAvailable } from "../mocks/is-email-available";

export const isEmailAvailableResolver: QueryResolvers['isEmailAvailable'] = {
    resolve: (_root, _args, _context, _info) => {
        return mockIsEmailAvailable;
    },
};

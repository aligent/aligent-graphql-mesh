import { QueryResolvers } from "../../../meshrc/.mesh";
import { CustomContext } from "../../types";
import { mockGetSocialLinks } from "../mocks/get-social-links";

export const getSocialLinksResolver: QueryResolvers<CustomContext>['getSocialLinks'] = {
    resolve: (_root, _args, _context, _info) => {
        return mockGetSocialLinks;
    },
};

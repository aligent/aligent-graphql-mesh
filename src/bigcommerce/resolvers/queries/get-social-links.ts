import { mockGetSocialLinks } from "../mocks/get-social-links";

export const getSocialLinksResolver = {
    resolve: () => {
        return mockGetSocialLinks;
    },
};

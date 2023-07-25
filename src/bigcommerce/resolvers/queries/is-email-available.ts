import { mockIsEmailAvailable } from "../mocks/is-email-available";

export const isEmailAvailableResolver = {
    resolve: () => {
        return mockIsEmailAvailable;
    },
};

import { MutationResolvers, SetGuestEmailOnCartOutput } from "../../../meshrc/.mesh";
import { mockSetGuestEmailOnCart } from "../mocks/set-guest-email-on-cart";

export const setGuestEmailOnCartResolver: MutationResolvers['setGuestEmailOnCart']= {
    resolve: (_root, _args, _context, _info) => {
        return (mockSetGuestEmailOnCart as unknown) as SetGuestEmailOnCartOutput;
    },
};

import { MutationResolvers, SetGuestEmailOnCartOutput } from "../../../meshrc/.mesh";
import { CustomContext } from "../../types";
import { mockSetGuestEmailOnCart } from "../mocks/set-guest-email-on-cart";

export const setGuestEmailOnCartResolver: MutationResolvers<CustomContext>['setGuestEmailOnCart']= {
    resolve: (_root, _args, _context, _info) => {
        return (mockSetGuestEmailOnCart as unknown) as SetGuestEmailOnCartOutput;
    },
};

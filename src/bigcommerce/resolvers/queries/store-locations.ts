import { QueryResolvers } from "../../../meshrc/.mesh";
import { CustomContext } from "../../types";
import { mockStoreLocations } from "../mocks/store-locations";

export const storeLocationsResolver: QueryResolvers<CustomContext>['storeLocations'] = {
    resolve: (_root, _args, _context, _info) => {
        return mockStoreLocations;
    },
};

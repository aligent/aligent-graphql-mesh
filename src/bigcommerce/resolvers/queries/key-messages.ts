import { QueryResolvers } from "../../../meshrc/.mesh";
import { CustomContext } from "../../types";
import { mockKeyMessages } from "../mocks/key-messages";

export const keyMessagesResolver: QueryResolvers<CustomContext>['keyMessages'] = {
    resolve: (_root, _args, _context, _info) => {
        return mockKeyMessages;
    },
};

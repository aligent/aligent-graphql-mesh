import { MiddlewareMap } from "graphql-modules/shared/middleware";
import { setCustomerImpersonationToken } from "./customer-impersonation-token";

const middlewareMap: MiddlewareMap = {
    "*": {
        "*": [
            setCustomerImpersonationToken
        ]
    }
};

export default middlewareMap;
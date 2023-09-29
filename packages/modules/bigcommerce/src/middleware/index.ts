import { MiddlewareMap } from 'graphql-modules/shared/middleware';
import axios from 'axios';

const middlewareMap: MiddlewareMap = {
    '*': {
        '*': [
            (context, next) => {
                // Copy the x-forwarded-for header and send it with all axios requests
                const forwardedIp = context.context.headers['x-forwarded-for'];
                axios.defaults.headers.common['x-forwarded-for'] = forwardedIp;
                return next();
            },
        ],
    },
};

export default middlewareMap;

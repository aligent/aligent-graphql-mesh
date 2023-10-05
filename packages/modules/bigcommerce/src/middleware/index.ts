import { Middleware, MiddlewareMap } from 'graphql-modules/shared/middleware';
import axios from 'axios';

const addIpAddressToAxiosHeaders: Middleware = (context, next) => {
    // Copy the x-forwarded-for header and send it with all axios requests
    const forwardedIps = context.context.headers['x-forwarded-for'];
    if (forwardedIps) {
        const clientIp = forwardedIps.split(',').shift() || '';
        axios.defaults.headers.common['x-forwarded-for'] = clientIp;
    }
    return next();
};

const middlewareMap: MiddlewareMap = {
    Query: {
        '*': [addIpAddressToAxiosHeaders],
    },
    Mutation: {
        '*': [addIpAddressToAxiosHeaders],
    },
};

export default middlewareMap;

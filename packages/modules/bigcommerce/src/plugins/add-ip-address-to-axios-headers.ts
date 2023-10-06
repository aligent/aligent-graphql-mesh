import { useExtendContext } from '@envelop/core';
import axios from 'axios';

export const addIpAddressToAxiosHeaders = useExtendContext(async (context) => {
    // Copy the x-forwarded-for header and send it with all axios requests
    const forwardedIps = context.headers['x-forwarded-for'];
    if (forwardedIps) {
        const clientIp = forwardedIps.split(',').shift() || '';
        axios.defaults.headers.common['x-forwarded-for'] = clientIp;
    }
});

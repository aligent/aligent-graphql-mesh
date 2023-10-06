import { useExtendContext } from '@envelop/core';
import axios from 'axios';

const trustedProxySecret = process.env.TRUSTED_PROXY_SECRET;

export const addIpAddressToAxiosHeaders = useExtendContext(async (context) => {
    // Copy the x-forwarded-for header and send it with all axios requests
    const forwardedIps = context.headers['x-forwarded-for'];
    if (forwardedIps) {
        const clientIp = forwardedIps.split(',').shift() || '';
        axios.defaults.headers.common['x-forwarded-for'] = clientIp;
        // BigCommerce will check the true-client-ip rather than x-forwarded-for
        axios.defaults.headers.common['True-Client-Ip'] = clientIp;
    }

    // If a trusted proxy secret is provided, include it in axios requests
    // To get this value you'll need to log a BigCommerce support ticket
    // See https://support.bigcommerce.com/s/article/Third-Party-Reverse-Proxies?language=en_US
    if (trustedProxySecret) {
        axios.defaults.headers.common['X-BC-Trusted-Proxy-Secret'] = trustedProxySecret;
    }
});

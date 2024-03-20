import { existsSync, readFileSync } from 'fs';
import { Netmask } from 'netmask';
import { Plugin } from 'graphql-yoga';

const DEV_MODE = process.env?.NODE_ENV == 'development';

export function maintenanceMode(maintenanceFilePath: string): Plugin {
    return {
        onRequest({ request, fetchAPI, endResponse }) {
            if (existsSync(maintenanceFilePath)) {
                const clientIp = getClientIp(request.headers.get('x-forwarded-for'), DEV_MODE);

                const allowedIpAddresses = readFileSync(maintenanceFilePath, {
                    encoding: 'utf-8',
                }).split(',');

                if (!allowIpInWhiteList(allowedIpAddresses, clientIp)) {
                    console.error('In Maintenance Mode');
                    endResponse(
                        new fetchAPI.Response(null, {
                            status: 502,
                        })
                    );
                }
            }
        },
    };
}

const getClientIp = (xForwardedForHeader: string | null, devMode: boolean): string => {
    if (devMode) {
        return '27.33.208.246';
    } else if (xForwardedForHeader !== null) {
        return xForwardedForHeader;
    } else {
        return 'no-ip';
    }
};

const allowIpInWhiteList = (ipAddressesAllowed: string[], clientIp: string): boolean => {
    for (const ip of ipAddressesAllowed) {
        const block = new Netmask(ip);
        if (block.contains(clientIp)) {
            return true;
        }
    }
    return false;
};

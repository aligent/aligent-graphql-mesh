import { existsSync, readFileSync } from 'fs';
import { Netmask } from 'netmask';
import { Plugin } from 'graphql-yoga';

const DEV_MODE = process.env?.['NODE_ENV'] == 'development';

export function maintenanceModePlugin(maintenanceFilePath: string): Plugin {
    return {
        onRequest({ request, fetchAPI, endResponse }) {
            if (!existsSync(maintenanceFilePath)) {
                return;
            }

            if (DEV_MODE) {
                return;
            }

            const requestIp = request.headers.get('x-forwarded-for')?.split(',')[0];

            if (requestIp) {
                const allowedIpAddresses = readFileSync(maintenanceFilePath, {
                    encoding: 'utf-8',
                }).split(',');

                if (isIpInWhiteList(allowedIpAddresses, requestIp)) {
                    return;
                }
            }

            endResponse(
                new fetchAPI.Response('In Maintenance Mode', {
                    status: 503,
                })
            );
        },
    };
}

const isIpInWhiteList = (ipAddressesAllowed: string[], clientIp: string): boolean => {
    for (const ip of ipAddressesAllowed) {
        const block = new Netmask(ip);
        if (block.contains(clientIp)) {
            return true;
        }
    }
    return false;
};

import { existsSync, readFileSync } from 'fs';
import { Netmask } from 'netmask';
import { Plugin } from 'graphql-yoga';

const DEV_MODE = process.env?.NODE_ENV == 'development';
const maintenanceFilePath = `/home/jack.mcloughlin/aligent/oro-aligent-graphql-mesh/maintenance.txt`;

export function maintenanceMode(): Plugin {
    return {
        onRequest({ request, fetchAPI, endResponse }) {
            if (!existsSync(maintenanceFilePath)) {
                return;
            } else {
                const clientIp = DEV_MODE
                    ? '27.33.208.246'
                    : request.headers.get('x-forwarded-for') !== null
                    ? (request.headers.get('x-forwarded-for') as string)
                    : 'no-ip';

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

const allowIpInWhiteList = (ipAddressesAllowed: string[], clientIp: string): boolean => {
    for (const ip of ipAddressesAllowed) {
        const block = new Netmask(ip);
        if (block.contains(clientIp)) {
            return true;
        }
    }
    return false;
};

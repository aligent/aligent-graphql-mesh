import { useExtendContext, Plugin } from '@envelop/core';
import { existsSync, readFileSync, open, close } from 'fs';
import { Netmask } from 'netmask';

const maintenanceFilePath = `/home/jack.mcloughlin/aligent/oro-aligent-graphql-mesh/maintenance.txt`;

const checkIfInMaintenanceModePlugin: Plugin = {
    onParse({ params, extendContext }) {
        const graphqlOperation = JSON.stringify(params.source);
        const regexMaintenanceMode = new RegExp(/query|mutation/);

        if (existsSync(maintenanceFilePath)) {
            extendContext({
                isMaintenanceMode: regexMaintenanceMode.test(graphqlOperation),
            });
        }
    },
};

const checkIfIpAddressInWhiteListPlugin = useExtendContext(async (context) => {
    if (context.isMaintenanceMode) {
        open(maintenanceFilePath, 'r', (error, fd) => {
            if (error) {
                if (error.code === 'ENOENT') {
                    throw new Error(
                        `maintenance.txt was found during onParse phase but not during useExtendedContext phase, error ${error}`
                    );
                }
            }

            try {
                const clientIp = context.headers['x-forwarded-for'] || '192.168.1.5';

                const allowedIpAddresses = readFileSync(maintenanceFilePath, {
                    encoding: 'utf-8',
                }).split(',');

                if (!allowIpInWhiteList(allowedIpAddresses, clientIp)) {
                    throw new Error('In Maintenance Mode');
                }
            } finally {
                close(fd, (error) => {
                    if (error) {
                        throw new Error(
                            `Failed to readfile or check allowed IP in whitelist, error: ${error}`
                        );
                    }
                });
            }
        });
    }
});

const allowIpInWhiteList = (ipAddressesAllowed: string[], clientIp: string): boolean => {
    let isInWhiteList = false;

    for (const ip of ipAddressesAllowed) {
        const block = new Netmask(ip);
        if (block.contains(clientIp)) {
            isInWhiteList = true;
            break;
        }
    }

    return isInWhiteList;
};

export const maintenanceModePlugin = [
    checkIfIpAddressInWhiteListPlugin,
    checkIfInMaintenanceModePlugin,
];

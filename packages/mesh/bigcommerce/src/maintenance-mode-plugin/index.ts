import { useExtendContext, Plugin } from '@envelop/core';
import { existsSync, readFileSync, open, close } from 'fs';
import { Netmask } from 'netmask';
import { GraphqlError } from '@aligent/utils';

const DEV_MODE = process.env?.NODE_ENV == 'development';
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
    if (!context.isMaintenanceMode) {
        return;
    }

    open(maintenanceFilePath, 'r', (error, fileData) => {
        if (error instanceof Error && error.code === 'ENOENT') {
            console.error(
                `maintenance.txt was found during onParse phase but not during useExtendedContext phase, error ${error}`
            );
            throw new GraphqlError('In Maintenance Mode', 'maintenance-mode');
        }

        try {
            const clientIp = DEV_MODE ? '27.33.208.246' : context.headers['x-forwarded-for'];

            const allowedIpAddresses = readFileSync(maintenanceFilePath, {
                encoding: 'utf-8',
            }).split(',');

            if (!allowIpInWhiteList(allowedIpAddresses, clientIp)) {
                throw new GraphqlError('In Maintenance Mode', 'maintenance-mode');
            }
        } finally {
            close(fileData, (error) => {
                if (error) {
                    console.error(`Failed to read file or check IP in whitelist, error: ${error}`);
                    throw new GraphqlError('In Maintenance Mode', 'maintenance-mode');
                }
            });
        }
    });
});

const allowIpInWhiteList = (ipAddressesAllowed: string[], clientIp: string): boolean => {
    for (const ip of ipAddressesAllowed) {
        const block = new Netmask(ip);
        if (block.contains(clientIp)) {
            return true;
        }
    }

    return false;
};

export const maintenanceModePlugin = [
    checkIfIpAddressInWhiteListPlugin,
    checkIfInMaintenanceModePlugin,
];

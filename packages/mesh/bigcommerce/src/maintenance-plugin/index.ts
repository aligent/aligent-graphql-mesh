import { useExtendContext, Plugin, envelop } from '@envelop/core';
import { existsSync, readFileSync, open, close } from 'fs';
import { Netmask } from 'netmask';

const maintenanceFilePath = `/home/jack.mcloughlin/aligent/oro-aligent-graphql-mesh/maintenance.txt`;

const checkIfInMaintenanceModePlugin: Plugin = {
    onParse({ extendContext }) {
        if (existsSync(maintenanceFilePath)) {
            console.log('exists');
            extendContext({
                isMaintenanceMode: true,
            });
        }
    },
};

const checkIfIpAddressInWhiteListPlugin = useExtendContext(async (context) => {
    console.log('running');

    if (context.isMaintenanceMode) {
        console.log('isMaintenanceMode');

        open(maintenanceFilePath, 'r', (err, fd) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    console.error('myfile does not exist');
                    return;
                }

                throw err;
            }

            try {
                const clientIp = context.headers['x-forwarded-for'] || '192.168.1.2';
                console.log(clientIp);

                const ipAddressesAllowed = readFileSync(maintenanceFilePath, {
                    encoding: 'utf-8',
                }).split(',');
                console.log(ipAddressesAllowed);

                if (!checkIfIpInWhiteList(ipAddressesAllowed, clientIp)) {
                    // Return status: 502
                    throw new Error('IP not allowed');
                }
            } finally {
                close(fd, (err) => {
                    if (err) throw err;
                });
            }
        });
    }

    console.log('end');
});

const checkIfIpInWhiteList = (ipAddressesAllowed: string[], clientIp: string): boolean => {
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

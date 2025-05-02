import { existsSync, readFileSync } from 'fs';
import { Plugin } from 'graphql-yoga';
import ip6addr from 'ip6addr';

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

function isCIDR(str: string) {
  const cidrRegex = /^(([0-9]{1,3}\.){3}[0-9]{1,3}|([a-fA-F0-9:]+))\/\d+$/;
  return cidrRegex.test(str);
}

function toCIDR(ip: string) {
  return ip.includes(':') ? `${ip}/128` : `${ip}/32`;
}

const isIpInWhiteList = (ipAddressesAllowed: string[], clientIp: string) => {
  try {
    const addr = ip6addr.parse(clientIp);
    return ipAddressesAllowed.some((entry) => {

      if (!isCIDR(entry)) {
        entry = toCIDR(entry)
      }

      const range = ip6addr.createCIDR(entry);
      return range.contains(addr);
    });
  } catch (err) {
    console.log(err)
    return false;
  }
};
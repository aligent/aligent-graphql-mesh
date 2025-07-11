import { existsSync, readFileSync } from 'fs';
import { Plugin } from 'graphql-yoga';
import ip6addr from 'ip6addr';

const DEV_MODE = process.env?.['NODE_ENV'] == 'development';

interface MaintenanceFile {
  whitelist: Array<string>;
  sites: Record<string, boolean>;
}

export function maintenanceModePlugin(maintenanceFilePath: string): Plugin {
    return {
        onRequest({ request, fetchAPI, endResponse }) {
            if (!existsSync(maintenanceFilePath)) {
                return;
            }

            if (DEV_MODE) {
                return;
            }

            const maintFile = getMaintenanceFile(maintenanceFilePath);
            const requestIp = request.headers.get('x-forwarded-for')?.split(',')[0];
            const host = request.headers.get('host') || 'default';

            if (inMaintenanceMode(maintFile, host)) {
              if (requestIp) {
                  if (isIpInWhiteList(maintFile.whitelist, requestIp)) {
                      return;
                  }
              }

              endResponse(
                  new fetchAPI.Response('In Maintenance Mode', {
                      status: 503,
                      headers: {
                        'cache-control': 'no-cache, no-store'
                      }
                  })
              );
            }
        },
    };
}

const getMaintenanceFile = (filePath: string): MaintenanceFile => {
  const fileContents = readFileSync(filePath, "utf-8");
  return JSON.parse(fileContents) as MaintenanceFile;
};

const inMaintenanceMode = (maintFile: MaintenanceFile, host: string): boolean => {
  return maintFile.sites[host] === true;
};

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
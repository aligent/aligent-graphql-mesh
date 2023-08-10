import { getPathFromUrlKey } from '../get-path-from-url-key';

const pdpUrlKeys = [
    '/mona-pullover-hoodlie',
    'mona-pullover-hoodlie/',
    '/mona-pullover-hoodlie/',
    'mona-pullover-hoodlie.html',
    '/mona-pullover-hoodlie.html',
];

const plpUrlKeys = [
    '/women/mona-pullover-hoodlie',
    'women/mona-pullover-hoodlie/',
    '/women/mona-pullover-hoodlie/',
    'women/mona-pullover-hoodlie.html',
];

describe('get-path-from-url-key', () => {
    test('returns the correct path from a pdp url_key', () => {
        pdpUrlKeys.forEach(urlKey => {
            expect(getPathFromUrlKey(urlKey)).toEqual('/mona-pullover-hoodlie');
        });
    });

    test('returns the correct path from a plp url_key', () => {
        plpUrlKeys.forEach(urlKey => {
            expect(getPathFromUrlKey(urlKey)).toEqual('/women/mona-pullover-hoodlie');
        });
    });
});

import { CONST__INVALID_NEW_URL, getNewUrl } from '../get-url';

describe('get-url', () => {
    test('returns a url object', () => {
        const newUrl = getNewUrl('https://aligent.mybigcommerce.com/mona-pullover-hoodlie/');

        expect(newUrl).toEqual(
            expect.objectContaining({
                href: 'https://aligent.mybigcommerce.com/mona-pullover-hoodlie/',
                origin: 'https://aligent.mybigcommerce.com',
                protocol: 'https:',
                username: '',
                password: '',
                host: 'aligent.mybigcommerce.com',
                hostname: 'aligent.mybigcommerce.com',
                port: '',
                pathname: '/mona-pullover-hoodlie/',
                search: '',
                searchParams: expect.any(URLSearchParams),
                hash: '',
            })
        );
    });

    test('returns null for an invalid url', () => {
        const newUrl = getNewUrl('www.aligent.mybigcommerce.com/mona-pullover-hoodlie/');

        expect(newUrl).toEqual(CONST__INVALID_NEW_URL);
    });
});

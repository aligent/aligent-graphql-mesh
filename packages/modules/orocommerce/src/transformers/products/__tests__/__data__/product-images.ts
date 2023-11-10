import { ProductImage as OroImage } from '../../../../types';
import { MediaGalleryEntry, ProductImage } from '@aligent/orocommerce-resolvers';
import { createImageIdFromUrl } from '../../../../utils';

export const oroImages: OroImage[] = [
    {
        type: 'productimages',
        id: '1',
        attributes: {
            updatedAt: '2023-06-08T05:08:53Z',
            mimeType: 'image/jpeg',
            types: ['main', 'listing', 'additional'],
            files: [
                {
                    url: '/media/cache/attachment/filter/product_original/1ce6569ddaa67bc2162be5030a1ac716/26/63291469b2140178133702-Test-Product-Only.jpg',
                    maxWidth: null,
                    maxHeight: null,
                    dimension: 'product_original',
                    url_webp:
                        '/media/cache/attachment/filter/product_original/4dbc178c2ebed276168fb5a715adf9ec/26/63291469b2140178133702-Test-Product-Only.jpg.webp',
                    types: ['main', 'additional'],
                },
                {
                    url: '/media/cache/attachment/filter/product_gallery_popup/098f408deb471e628613685fa97b1968/26/63291469b2140178133702-Test-Product-Only.jpg',
                    maxWidth: 610,
                    maxHeight: 610,
                    dimension: 'product_gallery_popup',
                    url_webp:
                        '/media/cache/attachment/filter/product_gallery_popup/5e23e551f9c58b3ed2cbcdcaf72c28fc/26/63291469b2140178133702-Test-Product-Only.jpg.webp',
                    types: ['main'],
                },
                {
                    url: '/media/cache/attachment/filter/product_gallery_main/cfd646b508e8eaf0ad3fa52d426f48a6/26/63291469b2140178133702-Test-Product-Only.jpg',
                    maxWidth: 378,
                    maxHeight: 'auto',
                    dimension: 'product_gallery_main',
                    url_webp:
                        '/media/cache/attachment/filter/product_gallery_main/9e256c59daf1c360fa2a692e1a4d8eeb/26/63291469b2140178133702-Test-Product-Only.jpg.webp',
                    types: ['main'],
                },
                {
                    url: '/media/cache/attachment/filter/product_large/484cb95e4abcb58ccab27f13d1a6188b/26/63291469b2140178133702-Test-Product-Only.jpg',
                    maxWidth: 316,
                    maxHeight: 'auto',
                    dimension: 'product_large',
                    url_webp:
                        '/media/cache/attachment/filter/product_large/ca048c1dad6aff04975c90c926869a37/26/63291469b2140178133702-Test-Product-Only.jpg.webp',
                    types: ['main', 'listing'],
                },
                {
                    url: '/media/cache/attachment/filter/product_extra_large/611b34cf36199f7491b40a557dad14a9/26/63291469b2140178133702-Test-Product-Only.jpg',
                    maxWidth: 378,
                    maxHeight: 378,
                    dimension: 'product_extra_large',
                    url_webp:
                        '/media/cache/attachment/filter/product_extra_large/de49a9f899e6dc68356803fcbffb2688/26/63291469b2140178133702-Test-Product-Only.jpg.webp',
                    types: ['main', 'listing', 'additional'],
                },
                {
                    url: '/media/cache/attachment/filter/product_medium/c3f301e68dee27d69af5c17c4acfe7ea/26/63291469b2140178133702-Test-Product-Only.jpg',
                    maxWidth: 262,
                    maxHeight: 'auto',
                    dimension: 'product_medium',
                    url_webp:
                        '/media/cache/attachment/filter/product_medium/418ba2755486ce8918a39c6116251ef5/26/63291469b2140178133702-Test-Product-Only.jpg.webp',
                    types: ['main'],
                },
                {
                    url: '/media/cache/attachment/filter/product_small/5ffc023aed34cd80eccf6957058b520e/26/63291469b2140178133702-Test-Product-Only.jpg',
                    maxWidth: 82,
                    maxHeight: 82,
                    dimension: 'product_small',
                    url_webp:
                        '/media/cache/attachment/filter/product_small/0430df4fe419ef8f86126998d83a639e/26/63291469b2140178133702-Test-Product-Only.jpg.webp',
                    types: ['main', 'listing', 'additional'],
                },
            ],
        },
        relationships: {
            product: {
                data: {
                    type: 'products',
                    id: '1',
                },
            },
        },
    },
    {
        type: 'productimages',
        id: '20',
        attributes: {
            updatedAt: '2023-06-14T05:12:01Z',
            mimeType: 'image/png',
            types: ['main', 'listing'],
            files: [
                {
                    url: '/media/cache/attachment/filter/product_original/87ce74c18aefc3f765aae166bfe23016/47/63313705e53ae870057940-download_1_4.png',
                    maxWidth: null,
                    maxHeight: null,
                    dimension: 'product_original',
                    url_webp:
                        '/media/cache/attachment/filter/product_original/4dbc178c2ebed276168fb5a715adf9ec/47/63313705e53ae870057940-download_1_4.png.webp',
                    types: ['main'],
                },
                {
                    url: '/media/cache/attachment/filter/product_gallery_popup/d84bbcea526f8f915cdbd36cc2fe4126/47/63313705e53ae870057940-download_1_4.png',
                    maxWidth: 610,
                    maxHeight: 610,
                    dimension: 'product_gallery_popup',
                    url_webp:
                        '/media/cache/attachment/filter/product_gallery_popup/5e23e551f9c58b3ed2cbcdcaf72c28fc/47/63313705e53ae870057940-download_1_4.png.webp',
                    types: ['main'],
                },
                {
                    url: '/media/cache/attachment/filter/product_gallery_main/5507b4acf749e257f536fcc5d77767f0/47/63313705e53ae870057940-download_1_4.png',
                    maxWidth: 378,
                    maxHeight: 'auto',
                    dimension: 'product_gallery_main',
                    url_webp:
                        '/media/cache/attachment/filter/product_gallery_main/9e256c59daf1c360fa2a692e1a4d8eeb/47/63313705e53ae870057940-download_1_4.png.webp',
                    types: ['main'],
                },
                {
                    url: '/media/cache/attachment/filter/product_large/75933013ffe25c18a463107b226cebb3/47/63313705e53ae870057940-download_1_4.png',
                    maxWidth: 316,
                    maxHeight: 'auto',
                    dimension: 'product_large',
                    url_webp:
                        '/media/cache/attachment/filter/product_large/ca048c1dad6aff04975c90c926869a37/47/63313705e53ae870057940-download_1_4.png.webp',
                    types: ['main', 'listing'],
                },
                {
                    url: '/media/cache/attachment/filter/product_extra_large/abe5781f01e0d4c0414089db5f53322a/47/63313705e53ae870057940-download_1_4.png',
                    maxWidth: 378,
                    maxHeight: 378,
                    dimension: 'product_extra_large',
                    url_webp:
                        '/media/cache/attachment/filter/product_extra_large/de49a9f899e6dc68356803fcbffb2688/47/63313705e53ae870057940-download_1_4.png.webp',
                    types: ['main', 'listing'],
                },
                {
                    url: '/media/cache/attachment/filter/product_medium/775d52fb6838e7916f0eababca044295/47/63313705e53ae870057940-download_1_4.png',
                    maxWidth: 262,
                    maxHeight: 'auto',
                    dimension: 'product_medium',
                    url_webp:
                        '/media/cache/attachment/filter/product_medium/418ba2755486ce8918a39c6116251ef5/47/63313705e53ae870057940-download_1_4.png.webp',
                    types: ['main'],
                },
                {
                    url: '/media/cache/attachment/filter/product_small/40d7094f39b9f0476463795a7e9ac339/47/63313705e53ae870057940-download_1_4.png',
                    maxWidth: 82,
                    maxHeight: 82,
                    dimension: 'product_small',
                    url_webp:
                        '/media/cache/attachment/filter/product_small/0430df4fe419ef8f86126998d83a639e/47/63313705e53ae870057940-download_1_4.png.webp',
                    types: ['main', 'listing'],
                },
            ],
        },
        relationships: {
            product: {
                data: {
                    type: 'products',
                    id: '11',
                },
            },
        },
    },
    {
        type: 'productimages',
        id: '21',
        attributes: {
            updatedAt: '2023-06-14T05:12:01Z',
            mimeType: 'image/png',
            types: ['additional'],
            files: [
                {
                    url: '/media/cache/attachment/filter/product_original/87ce74c18aefc3f765aae166bfe23016/48/6331371b44a5b561493337-download_5__1_4.png',
                    maxWidth: null,
                    maxHeight: null,
                    dimension: 'product_original',
                    url_webp:
                        '/media/cache/attachment/filter/product_original/4dbc178c2ebed276168fb5a715adf9ec/48/6331371b44a5b561493337-download_5__1_4.png.webp',
                    types: ['additional'],
                },
                {
                    url: '/media/cache/attachment/filter/product_extra_large/abe5781f01e0d4c0414089db5f53322a/48/6331371b44a5b561493337-download_5__1_4.png',
                    maxWidth: 378,
                    maxHeight: 378,
                    dimension: 'product_extra_large',
                    url_webp:
                        '/media/cache/attachment/filter/product_extra_large/de49a9f899e6dc68356803fcbffb2688/48/6331371b44a5b561493337-download_5__1_4.png.webp',
                    types: ['additional'],
                },
                {
                    url: '/media/cache/attachment/filter/product_small/40d7094f39b9f0476463795a7e9ac339/48/6331371b44a5b561493337-download_5__1_4.png',
                    maxWidth: 82,
                    maxHeight: 82,
                    dimension: 'product_small',
                    url_webp:
                        '/media/cache/attachment/filter/product_small/0430df4fe419ef8f86126998d83a639e/48/6331371b44a5b561493337-download_5__1_4.png.webp',
                    types: ['additional'],
                },
            ],
        },
        relationships: {
            product: {
                data: {
                    type: 'products',
                    id: '11',
                },
            },
        },
    },
    {
        type: 'productimages',
        id: '23',
        attributes: {
            updatedAt: '2023-10-27T01:50:22Z',
            mimeType: 'image/jpeg',
            types: [],
            files: [],
        },
        relationships: {
            product: {
                data: {
                    type: 'products',
                    id: '12',
                },
            },
        },
    },
    {
        type: 'productimages',
        id: '24',
        attributes: {
            updatedAt: '2023-10-27T01:50:22Z',
            mimeType: 'image/jpeg',
            types: [],
            files: [],
        },
        relationships: {
            product: {
                data: {
                    type: 'products',
                    id: '12',
                },
            },
        },
    },
    {
        type: 'productimages',
        id: '22',
        attributes: {
            updatedAt: '2023-10-27T02:19:31Z',
            mimeType: 'image/jpeg',
            types: ['main'],
            files: [
                {
                    url: '/media/cache/attachment/filter/product_original/1ce6569ddaa67bc2162be5030a1ac716/56/653b166935ea7214964398-wh01-green_main.jpg',
                    maxWidth: null,
                    maxHeight: null,
                    dimension: 'product_original',
                    url_webp:
                        '/media/cache/attachment/filter/product_original/4dbc178c2ebed276168fb5a715adf9ec/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                    types: ['main'],
                },
                {
                    url: '/media/cache/attachment/filter/product_gallery_popup/098f408deb471e628613685fa97b1968/56/653b166935ea7214964398-wh01-green_main.jpg',
                    maxWidth: 610,
                    maxHeight: 610,
                    dimension: 'product_gallery_popup',
                    url_webp:
                        '/media/cache/attachment/filter/product_gallery_popup/5e23e551f9c58b3ed2cbcdcaf72c28fc/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                    types: ['main'],
                },
                {
                    url: '/media/cache/attachment/filter/product_gallery_main/cfd646b508e8eaf0ad3fa52d426f48a6/56/653b166935ea7214964398-wh01-green_main.jpg',
                    maxWidth: 378,
                    maxHeight: 'auto',
                    dimension: 'product_gallery_main',
                    url_webp:
                        '/media/cache/attachment/filter/product_gallery_main/9e256c59daf1c360fa2a692e1a4d8eeb/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                    types: ['main'],
                },
                {
                    url: '/media/cache/attachment/filter/product_large/484cb95e4abcb58ccab27f13d1a6188b/56/653b166935ea7214964398-wh01-green_main.jpg',
                    maxWidth: 316,
                    maxHeight: 'auto',
                    dimension: 'product_large',
                    url_webp:
                        '/media/cache/attachment/filter/product_large/ca048c1dad6aff04975c90c926869a37/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                    types: ['main'],
                },
                {
                    url: '/media/cache/attachment/filter/product_extra_large/611b34cf36199f7491b40a557dad14a9/56/653b166935ea7214964398-wh01-green_main.jpg',
                    maxWidth: 378,
                    maxHeight: 378,
                    dimension: 'product_extra_large',
                    url_webp:
                        '/media/cache/attachment/filter/product_extra_large/de49a9f899e6dc68356803fcbffb2688/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                    types: ['main'],
                },
                {
                    url: '/media/cache/attachment/filter/product_medium/c3f301e68dee27d69af5c17c4acfe7ea/56/653b166935ea7214964398-wh01-green_main.jpg',
                    maxWidth: 262,
                    maxHeight: 'auto',
                    dimension: 'product_medium',
                    url_webp:
                        '/media/cache/attachment/filter/product_medium/418ba2755486ce8918a39c6116251ef5/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                    types: ['main'],
                },
                {
                    url: '/media/cache/attachment/filter/product_small/5ffc023aed34cd80eccf6957058b520e/56/653b166935ea7214964398-wh01-green_main.jpg',
                    maxWidth: 82,
                    maxHeight: 82,
                    dimension: 'product_small',
                    url_webp:
                        '/media/cache/attachment/filter/product_small/0430df4fe419ef8f86126998d83a639e/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                    types: ['main'],
                },
            ],
        },
        relationships: {
            product: {
                data: {
                    type: 'products',
                    id: '12',
                },
            },
        },
    },
];

interface Image {
    product_id: string;
    small_image: ProductImage;
    media_gallery: MediaGalleryEntry[];
}

export const outputImages: Image[] = [
    {
        product_id: '1',
        small_image: {
            url: '/media/cache/attachment/filter/product_gallery_main/cfd646b508e8eaf0ad3fa52d426f48a6/26/63291469b2140178133702-Test-Product-Only.jpg',
            label: '',
            __typename: 'ProductImage',
        },
        media_gallery: [
            {
                disabled: false,
                file: '/media/cache/attachment/filter/product_original/1ce6569ddaa67bc2162be5030a1ac716/26/63291469b2140178133702-Test-Product-Only.jpg',
                id: createImageIdFromUrl(
                    '/media/cache/attachment/filter/product_original/1ce6569ddaa67bc2162be5030a1ac716/26/63291469b2140178133702-Test-Product-Only.jpg'
                ),
                label: '',
                position: 1,
                uid: '',
                __typename: 'MediaGalleryEntry',
            },
        ],
    },
    {
        product_id: '11',
        small_image: {
            url: '/media/cache/attachment/filter/product_gallery_main/5507b4acf749e257f536fcc5d77767f0/47/63313705e53ae870057940-download_1_4.png',
            label: '',
            __typename: 'ProductImage',
        },
        media_gallery: [
            {
                disabled: false,
                file: '/media/cache/attachment/filter/product_original/87ce74c18aefc3f765aae166bfe23016/47/63313705e53ae870057940-download_1_4.png',
                id: createImageIdFromUrl(
                    '/media/cache/attachment/filter/product_original/87ce74c18aefc3f765aae166bfe23016/47/63313705e53ae870057940-download_1_4.png'
                ),
                label: '',
                position: 1,
                uid: '',
                __typename: 'MediaGalleryEntry',
            },
            {
                disabled: false,
                file: '/media/cache/attachment/filter/product_original/87ce74c18aefc3f765aae166bfe23016/48/6331371b44a5b561493337-download_5__1_4.png',
                id: createImageIdFromUrl(
                    '/media/cache/attachment/filter/product_original/87ce74c18aefc3f765aae166bfe23016/48/6331371b44a5b561493337-download_5__1_4.png'
                ),
                label: '',
                position: 2,
                uid: '',
                __typename: 'MediaGalleryEntry',
            },
        ],
    },
    {
        product_id: '12',
        small_image: {
            url: '/media/cache/resolve/product_large/bundles/oroproduct/images/no_image.png',
            label: '',
            __typename: 'ProductImage',
        },
        media_gallery: [
            {
                disabled: false,
                file: '/media/cache/attachment/filter/product_original/1ce6569ddaa67bc2162be5030a1ac716/56/653b166935ea7214964398-wh01-green_main.jpg',
                id: createImageIdFromUrl(
                    '/media/cache/attachment/filter/product_original/1ce6569ddaa67bc2162be5030a1ac716/56/653b166935ea7214964398-wh01-green_main.jpg'
                ),
                label: '',
                position: 1,
                uid: '',
                __typename: 'MediaGalleryEntry',
            },
        ],
    },
];

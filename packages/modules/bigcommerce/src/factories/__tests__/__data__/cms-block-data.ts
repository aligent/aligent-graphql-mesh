import { CmsBlocks, CmsPage } from '@aligent/bigcommerce-resolvers';

export const cmsPageData: CmsPage[] = [
    {
        relative_url: 'footer-cms-links/',
        url_key: 'footer-cms-links',
        content:
            '<div>\r\n<div>\r\n<div>\r\n<div>\r\n<div><span>SHOPPING</span></div>\r\n</div>\r\n<div>\r\n<div>\r\n<p><a href="%%GLOBAL_ShopPathSSL%%/what-is-new.html">What\'s New</a></p>\r\n<p><a href="%%GLOBAL_ShopPathSSL%%/women.html">Women</a></p>\r\n<p><a href="%%GLOBAL_ShopPathSSL%%/men.html">Men</a></p>\r\n<p><a href="%%GLOBAL_ShopPathSSL%%/gear.html">Gear</a></p>\r\n<p><a href="%%GLOBAL_ShopPathSSL%%/training.html">Training</a></p>\r\n<p><a href="%%GLOBAL_ShopPathSSL%%/sale.html">Sale</a></p>\r\n<p><a href="%%GLOBAL_ShopPathSSL%%/gift-cards.html">Gift cards</a></p>\r\n</div>\r\n</div>\r\n</div>\r\n<div>\r\n<div>\r\n<div><span>SUPPORT</span></div>\r\n</div>\r\n<div>\r\n<div>\r\n<p><a href="%%GLOBAL_ShopPathSSL%%/contact-us">Contact us</a></p>\r\n</div>\r\n</div>\r\n</div>\r\n<div>\r\n<div>\r\n<div>ABOUT US</div>\r\n</div>\r\n<div>\r\n<div>\r\n<p><a href="%%GLOBAL_ShopPathSSL%%/about-us">About us</a></p>\r\n<p><a href="%%GLOBAL_ShopPathSSL%%/customer-service">Customer Service</a></p>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>',
        content_heading: 'Footer Cms Links',
        identifier: '/footer-cms-links/',
        title: 'Footer Cms Links',
        meta_title: '',
        meta_keywords: '',
        meta_description: '',
        redirect_code: 0,
        __typename: 'CmsPage',
        type: 'CMS_PAGE',
    },
    {
        relative_url: 'header-top-banner/',
        url_key: 'header-top-banner',
        content: '<div>\r\n<p><strong>25% OFF EVERYTHING - TODAY ONLY</strong></p>\r\n</div>',
        content_heading: 'Header Top Banner',
        identifier: '/header-top-banner/',
        title: 'Header Top Banner',
        meta_title: '',
        meta_keywords: '',
        meta_description: '',
        redirect_code: 0,
        __typename: 'CmsPage',
        type: 'CMS_PAGE',
    },
];

export const cmsBlockData: CmsBlocks = {
    items: [
        {
            identifier: '/footer-cms-links/',
            content:
                '<div>\r\n<div>\r\n<div>\r\n<div>\r\n<div><span>SHOPPING</span></div>\r\n</div>\r\n<div>\r\n<div>\r\n<p><a href="%%GLOBAL_ShopPathSSL%%/what-is-new.html">What\'s New</a></p>\r\n<p><a href="%%GLOBAL_ShopPathSSL%%/women.html">Women</a></p>\r\n<p><a href="%%GLOBAL_ShopPathSSL%%/men.html">Men</a></p>\r\n<p><a href="%%GLOBAL_ShopPathSSL%%/gear.html">Gear</a></p>\r\n<p><a href="%%GLOBAL_ShopPathSSL%%/training.html">Training</a></p>\r\n<p><a href="%%GLOBAL_ShopPathSSL%%/sale.html">Sale</a></p>\r\n<p><a href="%%GLOBAL_ShopPathSSL%%/gift-cards.html">Gift cards</a></p>\r\n</div>\r\n</div>\r\n</div>\r\n<div>\r\n<div>\r\n<div><span>SUPPORT</span></div>\r\n</div>\r\n<div>\r\n<div>\r\n<p><a href="%%GLOBAL_ShopPathSSL%%/contact-us">Contact us</a></p>\r\n</div>\r\n</div>\r\n</div>\r\n<div>\r\n<div>\r\n<div>ABOUT US</div>\r\n</div>\r\n<div>\r\n<div>\r\n<p><a href="%%GLOBAL_ShopPathSSL%%/about-us">About us</a></p>\r\n<p><a href="%%GLOBAL_ShopPathSSL%%/customer-service">Customer Service</a></p>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>',
            title: 'Footer Cms Links',
        },
        {
            identifier: '/header-top-banner/',
            content: '<div>\r\n<p><strong>25% OFF EVERYTHING - TODAY ONLY</strong></p>\r\n</div>',
            title: 'Header Top Banner',
        },
    ],
};

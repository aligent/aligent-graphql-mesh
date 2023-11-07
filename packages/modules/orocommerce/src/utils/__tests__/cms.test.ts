import { updateImageSrcInHtml } from '../cms';

const baseUrl = 'https://aligent.oro-cloud.com/media/';

const htmlBeforeUpdate = `<picture>
        <source srcset="/media/cache/attachment/filter/wysiwyg_original/1ce6569ddaa67bc2162be5030a1ac716/4/6308a1d0ecd91251890786-320.jpg" media="(max-width: 414px)">
        <source srcset="/media/cache/attachment/filter/wysiwyg_original/1ce6569ddaa67bc2162be5030a1ac716/5/6308a1d119e9c804794732-768.jpg" media="(max-width: 992px)">
        <img src="/media/cache/attachment/filter/wysiwyg_original/1ce6569ddaa67bc2162be5030a1ac716/6/6308a1d1212b6404376031-1384.jpg" alt="Image">
    </picture>`;

const htmlAfterUpdate = `<picture>
        <source srcset="https://aligent.oro-cloud.com/media/cache/attachment/filter/wysiwyg_original/1ce6569ddaa67bc2162be5030a1ac716/4/6308a1d0ecd91251890786-320.jpg" media="(max-width: 414px)">
        <source srcset="https://aligent.oro-cloud.com/media/cache/attachment/filter/wysiwyg_original/1ce6569ddaa67bc2162be5030a1ac716/5/6308a1d119e9c804794732-768.jpg" media="(max-width: 992px)">
        <img src="https://aligent.oro-cloud.com/media/cache/attachment/filter/wysiwyg_original/1ce6569ddaa67bc2162be5030a1ac716/6/6308a1d1212b6404376031-1384.jpg" alt="Image">
    </picture>`;

describe('cms', () => {
    it('Updates the relative image urls in the html to be absolute', () => {
        const updatedHtml = updateImageSrcInHtml(htmlBeforeUpdate, baseUrl);
        expect(updatedHtml).toEqual(htmlAfterUpdate);
    });

    it(`Returns the passed in html if there's "baseUrl" `, () => {
        const updatedHtml = updateImageSrcInHtml(htmlBeforeUpdate, '');
        expect(updatedHtml).toEqual(htmlBeforeUpdate);
    });
});

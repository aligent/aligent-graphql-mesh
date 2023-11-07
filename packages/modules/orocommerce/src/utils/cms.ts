/**
 * Updates relative image urls in html "src" and "srcsets" attributes
 * to be absolute and target the native oro store domain.
 *
 * example:
 * this
 * srcset="/media/cache/attachment/filter/wysiwyg_original/1ce6569ddaa67bc2162be5030a1ac716/4/6308a1d0ecd91251890786-320.jpg"
 * will become
 * srcset="https://aligent.oro-cloud.com/media/cache/attachment/filter/wysiwyg_original/1ce6569ddaa67bc2162be5030a1ac716/4/6308a1d0ecd91251890786-320.jpg"
 * @param htmlContent
 * @param baseUrl
 */
export const updateImageSrcInHtml = (htmlContent: string, baseUrl: string) => {
    if (!baseUrl) return htmlContent;

    // Gets the base domain from an url
    const { origin } = new URL(baseUrl);

    /* Want to find anything looking like e.g. src="/media<anything can be here>"*/
    const regex = /(?:srcset|src)="\/media(.*?)"/g;

    const modifiedHtmlContent = htmlContent.replace(regex, (match, srcset) => {
        const matchedAttribute = match.split('=')[0];

        const newSrcset = `${matchedAttribute}="${origin}/media${srcset}"`;
        return match.replace(match, newSrcset);
    });

    return modifiedHtmlContent;
};

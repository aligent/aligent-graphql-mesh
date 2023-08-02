export const createCmsBlocksMock = (identifiers: String[]) => {
    const content =
        identifiers.length > 0
            ? `<div>${identifiers.map((id) => `"${id}" CMS Block, `)}</div>`
            : "<div>CMS Block</div>";
    return {
        items: [
            {
                content,
                identifier: "mock-cms-block",
            },
        ],
    };
};

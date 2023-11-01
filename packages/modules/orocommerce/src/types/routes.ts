export interface Route {
    type: string;
    id: string;
    links: {
        self: string;
    };
    attributes: {
        apiUrl: string;
        id: string;
        isSlug: boolean;
        redirectStatusCode: number;
        redirectUrl: string;
        resourceType: string;
        url: string;
    };
}

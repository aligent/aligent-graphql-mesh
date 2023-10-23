export interface ContactUsInput {
    comment: string;
    email: string;
    name: string;
    telephone?: string | null;
}

/** Contains the status of the request. */
export interface ContactUsOutput {
    __typename?: 'ContactUsOutput';
    status: boolean;
}

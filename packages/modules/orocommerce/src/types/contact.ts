export interface OroContactUsInput {
    comment: string;
    email: string;
    name: string;
    telephone?: string | null;
}

/** Contains the status of the request. */
export interface OroContactUsOutput {
    __typename?: 'ContactUsOutput';
    status: boolean;
}

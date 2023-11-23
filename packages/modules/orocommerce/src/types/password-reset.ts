export interface PasswordReset {
    meta: Meta;
}

interface Meta {
    action: 'init' | 'confirm';
    email?: string;
    token?: string;
    password?: string;
    result?: string;
}

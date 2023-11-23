export interface PasswordReset {
    meta: PasswordResetMeta;
}

interface PasswordResetMeta {
    action: 'init' | 'confirm';
    email?: string;
    token?: string;
    password?: string;
    result?: string;
}

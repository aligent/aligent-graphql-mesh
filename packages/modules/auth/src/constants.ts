export enum JWT_AUTH_STATUSES {
    ACCESS_VALID_REFRESH_VALID,
    ACCESS_INVALID_REFRESH_VALID,
    ACCESS_VALID_REFRESH_INVALID,
    ACCESS_INVALID_REFRESH_INVALID,
}

/* The time in minutes an extended user session should end in */
export const REFRESH_TOKEN_EXPIRY_IN_MINUTES__EXTENDED = 43200; // 30 days
/* The time in minutes a non-extended user session should end in */
export const REFRESH_TOKEN_EXPIRY_IN_MINUTES__NON_EXTENDED = 15;
/* The time in minutes an access token is valid for */
export const ACCESS_TOKEN_EXPIRY_IN_MINUTES = 14;

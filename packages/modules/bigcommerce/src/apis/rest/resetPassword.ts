import axios from "axios";
import { logAndThrowError } from "../../../../../utils/error-handling";

export const requestPasswordResetEmail = async ( email: string ): Promise<boolean> => {
    const BC_STENCIL_URL = process.env.BC_GRAPHQL_API?.replace('/graphql', '');
    const url = `${BC_STENCIL_URL}/login.php?action=send_password_email`;
    const variables = {
        email
    };
    const headers = {
        'content-type': 'application/x-www-form-urlencoded'
    };
    
    try {
        const response = await axios.post(url, variables, { headers });
        return !!response;
    } catch (error) {
        return logAndThrowError(error);
    }
};

export const resetPassword = 
    async ( code: string, resetPasswordToken: string, newPassword: string ) => {
        const BC_STENCIL_URL = process.env.BC_GRAPHQL_API?.replace('/graphql', '');
        const url = `${BC_STENCIL_URL}/login.php?action=save_new_password&c=${code}&t=${resetPasswordToken}`;
        const variables = {
            password: newPassword,
            password_confirm: newPassword
        };
        const headers = {
            'content-type': 'application/x-www-form-urlencoded'
        };

    try {
        const response = await axios.post(url, variables, { headers });
        return !!response;
    } catch (error) {
        return logAndThrowError(error);
    }
};

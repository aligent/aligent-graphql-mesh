import axios, { AxiosResponse } from 'axios';
import { retrieveStoreConfigsFromCache } from '../graphql';
import { GraphqlError, logAndThrowError } from '@aligent/utils';

const GOOGLE = 'https://www.google.com/';

const googlePost = async (path: string): Promise<AxiosResponse['data']> => {
    const url = `${GOOGLE}${path}`;
    try {
        const response = await axios.post(url);
        return response.data;
    } catch (error) {
        return logAndThrowError(error, googlePost.name);
    }
};

export const verifyReCaptcha = async (context: GraphQLModules.ModuleContext): Promise<boolean> => {
    const requestCaptchaToken = context.headers['x-recaptcha'];

    const {
        reCaptcha: { isEnabledOnStorefront, siteKey },
    } = await retrieveStoreConfigsFromCache(context);

    // If recaptcha isn't enabled then return "true" which indicates we're good to continue
    // with requests
    if (!isEnabledOnStorefront) return true;

    if (!siteKey || !requestCaptchaToken) {
        throw new GraphqlError('Site key or token is missing!');
    }

    const response = await googlePost(
        `recaptcha/api/siteverify?secret=${siteKey}&response=${requestCaptchaToken}`
    );

    if (!response.success) {
        throw new GraphqlError('Captcha Failed', 'input');
    }

    return response.success;
};

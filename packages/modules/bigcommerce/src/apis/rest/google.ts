import axios, { AxiosResponse } from 'axios';
import { GraphqlError, logAndThrowError } from '@aligent/utils';
import { retrieveStoreConfigsFromCache } from '../graphql';
import { ReCaptchaValidationAreas } from '../../types';

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

export const verifyReCaptcha = async (
    context: GraphQLModules.ModuleContext,
    reCaptchaType: ReCaptchaValidationAreas
): Promise<boolean> => {
    if (!reCaptchaType) {
        throw new GraphqlError('Please define a "reCaptchaType" for the area being validated');
    }
    const requestCaptchaToken = context.headers['x-recaptcha'];

    const storeConfigs = await retrieveStoreConfigsFromCache(context);

    const {
        reCaptcha: { siteKey },
    } = storeConfigs;

    /* If a value hasn't been defined for the ReCaptcha type in store config it
     * means we don't want Recaptcha validation enabled for that area. */
    if (!storeConfigs[reCaptchaType]) return true;

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

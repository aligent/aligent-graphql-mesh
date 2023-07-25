import { createBuiltMeshHTTPHandler } from '../src/meshrc/.mesh';
import { APIGatewayProxyEventV2, APIGatewayProxyResultV2, Context } from 'aws-lambda';

interface ServerContext {
    event: APIGatewayProxyEventV2;
    lambdaContext: Context;
}

const meshHTTP = createBuiltMeshHTTPHandler<ServerContext>();

export async function handler(
    event: APIGatewayProxyEventV2,
    lambdaContext: Context
): Promise<APIGatewayProxyResultV2> {
    const url = new URL(event.rawPath, 'http://localhost');
    if (event.queryStringParameters != null) {
        for (const name in event.queryStringParameters) {
            const value = event.queryStringParameters[name];
            if (value != null) {
                url.searchParams.set(name, value);
            }
        }
    }

    const response = await meshHTTP.fetch(
        url,
        {
            method: event.requestContext.http.method,
            headers: event.headers as HeadersInit,
            body: event.body
                ? Buffer.from(event.body, event.isBase64Encoded ? 'base64' : 'utf8')
                : undefined,
        },
        {
            event,
            lambdaContext,
        }
    );

    const responseHeaders: Record<string, string> = Object.fromEntries(response.headers.entries());

    return {
        statusCode: response.status,
        headers: responseHeaders,
        body: await response.text(),
        isBase64Encoded: false,
    };
}

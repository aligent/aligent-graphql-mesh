import { BatchWriteItemCommandOutput } from '@aws-sdk/client-dynamodb/dist-types/commands/BatchWriteItemCommand';

// Extend Global context type see: https://the-guild.dev/graphql/modules/docs/essentials/type-safety#shaping-context-type
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace GraphQLModules {
        interface GlobalContext {
            request: Request;
        }
    }
}

export type decodedAccessToken = {
    bc_customer_id: number;
    exp: number;
    refresh_expiry: number;
};

export type AuthItem = {
    customer_id: {
        S: string;
    };
    refresh_token_hash: {
        S: string;
    };
    ttl: {
        S: string;
    };
};

export type GetUserAuthResponse = Promise<
    | {
          Item: AuthItem;
      }
    | Error
>;

export type UpdateUserAuthResponse = Promise<
    | {
          $metadata: {
              httpStatusCode: number;
          };
      }
    | Error
>;

export type RemoveUserAuthResponse = Promise<
    | {
          $metadata: {
              httpStatusCode: number;
          };
          Attributes: AuthItem;
      }
    | Error
>;

export type BatchRemoveItems =
    | {
          DeleteRequest: {
              Key: {
                  customer_id: {
                      S: string;
                  };
                  refresh_token_hash: {
                      S: string;
                  };
              };
          };
      }[]
    | never[];

export type BatchWriteItemResponse = BatchWriteItemCommandOutput | Error;

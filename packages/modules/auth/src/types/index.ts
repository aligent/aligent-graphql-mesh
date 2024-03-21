export type decodedAccessToken = {
    bc_customer_id: number;
    exp: number;
    refresh_expiry: number;
};

export type GetUserAuthResponse = Promise<
    | {
          Item: {
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
          Attributes: {
              customer_id: { S: string };
              refresh_token_hash: { S: string };
              ttl: { S: string };
          };
      }
    | Error
>;

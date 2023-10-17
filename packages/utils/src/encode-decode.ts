import { atob as BufferAtob, Buffer } from 'buffer';

/**
 * Encodes a string to base64.
 *
 * mostly used to encodes id's to uids.
 * e.g. btoa("6") = "Ng=="
 *
 * The counterpart of btoa is atob
 * atob("Ng==") = "6"
 *
 * @param input
 */
export const btoa = (input: string): string => {
    return Buffer.from(input).toString('base64');
};

/**
 * Decodes a base64 encoded string
 *
 * mostly used to decode uid's to id's.
 * e.g. atob("Ng==") = "6"
 *
 * The counterpart of btoa is atob
 * btoa("6") = "Ng=="
 *
 */
export const atob = BufferAtob;

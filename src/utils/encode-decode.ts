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

export const atob = BufferAtob;

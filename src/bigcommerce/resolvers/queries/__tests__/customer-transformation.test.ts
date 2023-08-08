import { transformCustomer } from "../customer";
import { bcCustomer } from "./__data__/customer-input.data";
import { transformedCustomer } from "./__data__/customer-transformed.data";

describe('Countries data transform tests', () => {
    test('return transformed states', () => {
        const inputBcSCustomer = bcCustomer;
        const inputTransformedStates = transformedCustomer;

        const transformed = transformCustomer(inputBcSCustomer);

        expect(transformed).toEqual(inputTransformedStates);
    });
});

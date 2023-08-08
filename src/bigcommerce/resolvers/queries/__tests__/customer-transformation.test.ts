import { transformCustomer } from "../../../factories/transform-customer-data";
import { bcCustomer } from "./__data__/customer-input.data";
import { transformedCustomer } from "./__data__/customer-transformed.data";

describe('Countries data transform tests', () => {
    test('return transformed states', () => {
        const inputBcCustomer = bcCustomer;
        const inputTransformedStates = transformedCustomer;

        const transformed = transformCustomer(inputBcCustomer);

        expect(transformed).toEqual(inputTransformedStates);
    });
});

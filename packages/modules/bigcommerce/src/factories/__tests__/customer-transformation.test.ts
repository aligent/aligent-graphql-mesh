import { bcCustomerCreated } from './__data__/customer-input-data';
import { transformedCreatedCustomer } from './__data__/countries-transformed-data';
import { transformAcCustomerInputToBcCustomerInput } from '../transform-customer-data';

/* Need to mock out ModuleConfig to avoid complaints in the bitbucket pipelines that getSdk isn't defined */
jest.mock('../../providers/index.ts', () => {
    return { ModuleConfig: jest.fn() };
});

jest.mock('aws-xray-sdk', () => {
    return {
        captureAsyncFunc: jest.fn().mockImplementation((name, segment) => {
            segment();
        }),
    };
});

describe('Create customer data transform tests', () => {
    test('return transformed customer after being created', () => {
        const inputBcCustomerCreated = bcCustomerCreated;
        const { first_name, last_name, email } = inputBcCustomerCreated;
        const ExpectedTransformedCreatedCustomer = transformedCreatedCustomer;

        const result = transformAcCustomerInputToBcCustomerInput(
            first_name,
            last_name,
            email,
            'PASSWORD'
        );

        expect(result).toEqual(ExpectedTransformedCreatedCustomer);
    });
});

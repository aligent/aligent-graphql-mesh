import { transformCustomerData } from '../../resolvers/mutations/create-customer';
import { bcCustomerCreated } from './__data__/customer-input-data';
import { transformedCreatedCustomer } from './__data__/countries-transformed-data';

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
        const ExpectedTransformedCreatedCustomer = transformedCreatedCustomer;

        const result = transformCustomerData(inputBcCustomerCreated);

        expect(result).toEqual(ExpectedTransformedCreatedCustomer);
    });
});

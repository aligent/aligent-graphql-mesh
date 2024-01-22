import { forwardRef, Inject, Injectable } from 'graphql-modules';
import { ApiClient } from './client';
import {
    Customer,
    CustomerUser,
    OroCustomerAddress,
    OroCustomerAddressInput,
    UpdateCustomer,
} from '../../types';
import { PasswordReset } from '../../types/password-reset';

@Injectable()
export class CustomerClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async getCustomer(id: string): Promise<Customer> {
        const response = await this.apiClient.get<Customer>(`/customers/${id}`);
        return response.data;
    }

    async createCustomerUser(customerUser: CustomerUser): Promise<CustomerUser> {
        const response = await this.apiClient.post<{ data: CustomerUser }, { data: CustomerUser }>(
            `/customerusers`,
            { data: customerUser }
        );
        return response.data;
    }

    async deleteCustomerAddress(id: number): Promise<boolean> {
        const response = await this.apiClient.delete(`/customeruseraddresses/${id}`);
        return response;
    }

    async createCustomerAddress(
        customerAddress: OroCustomerAddressInput
    ): Promise<OroCustomerAddress> {
        const response = await this.apiClient.post<
            { data: OroCustomerAddress },
            { data: OroCustomerAddressInput }
        >(`/customeruseraddresses`, { data: customerAddress });
        return response.data;
    }

    async getCustomerUser(
        id: string = 'mine',
        token: string
    ): Promise<{ data: CustomerUser; included?: OroCustomerAddress[] }> {
        const path = `/customerusers/${id}`;
        const params = {
            include: 'addresses',
        };
        const response = await this.apiClient.get<CustomerUser, OroCustomerAddress[]>(path, {
            params,
            headers: { Authorization: token },
        });
        return response;
    }

    async updateCustomerAddresses(
        customerAddress: OroCustomerAddress
    ): Promise<OroCustomerAddress> {
        const response = await this.apiClient.patch<
            { data: OroCustomerAddress },
            { data: OroCustomerAddress }
        >(`/customeruseraddresses/${customerAddress.id}`, { data: customerAddress });
        return response.data;
    }

    async updateCustomer(updateCustomer: UpdateCustomer): Promise<UpdateCustomer> {
        const response = await this.apiClient.patch<
            { data: UpdateCustomer },
            { data: UpdateCustomer }
        >(`/customerusers/mine`, { data: updateCustomer });
        return response.data;
    }

    async passwordReset(passwordReset: PasswordReset): Promise<PasswordReset> {
        const response = await this.apiClient.post<PasswordReset, PasswordReset>(
            `/tf_password_reset`,
            {
                meta: passwordReset.meta,
            }
        );

        return response;
    }
}

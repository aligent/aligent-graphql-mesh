import { Customer, MutationResolvers } from '../../../meshrc/.mesh';
import { logAndThrowError } from '../../../utils/error-handling';
import { createCustomer } from '../../apis/rest/customer';
import { BcCustomer } from '../../types';

export const createCustomerResolver: MutationResolvers['createCustomer'] = {
    resolve: async (_root, args, _context, _info) => {
        if (
            !args.input.email ||
            !args.input.firstname ||
            !args.input.lastname ||
            !args.input.password
        ) {
            return logAndThrowError(
                new Error('Missing email or firstname or lastname or password')
            );
        }

        const bcCustomer = await createCustomer(
            args.input.email,
            args.input.firstname,
            args.input.lastname,
            args.input.password
        );

        return {
            customer: transformCustomerData(bcCustomer),
        };
    },
};

export const transformCustomerData = (bcCustomer: BcCustomer): Customer => {
    return {
        id: bcCustomer.id,
        // all data below is to satisfy TS, FE only needs id
        // TODO: Try to reduce typescript object requirements with mappers:
        // https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-resolvers#mappers
        allow_remote_shopping_assistance: true,
        reviews: {
            items: [],
            page_info: {
                current_page: null,
                page_size: null,
                total_pages: null,
            },
        },
        wishlists: [],
        wishlist: {
            visibility: 'PRIVATE',
        },
    };
};

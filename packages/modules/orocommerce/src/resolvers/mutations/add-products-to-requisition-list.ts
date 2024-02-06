import { MutationAddProductsToCartArgs, MutationResolvers } from '@aligent/orocommerce-resolvers';
import { ShoppingListsClient } from '../../apis/rest/shopping-list-api-client';
import { AddProductsToCartTransformerChain } from '../../transformers/shopping-list/add-products-to-cart-transformer';
// import { AddProductsToListTransformerChain } from '../../transformers/shopping-list/add-products-to-list-transformer'; 

export const addProductsToRequisitionLisResolver: MutationResolvers['addProductsToRequisitionList'] =
    {
        resolve: async (_root, args, context, _info) => {
            //start resolver, console log to see args.
            console.log(' Resolver Start ');
            console.log('CONSOLE 1', args);

            // 1. Get relevant data from graphql mutation args      //what data is being added ()
            const { requisitionListItems, requisitionListUid } = args;
            console.log('Requisition List Items:', requisitionListItems);
            console.log('Requisition List UID:', requisitionListUid);
            console.log('CONSOLE 2 \n\n');

            // 2. get the client shopping list
            const clientShoppingList: ShoppingListsClient =
                context.injector.get(ShoppingListsClient);

            //3. add transformation step here
            const shoppingListTransformer: AddProductsToCartTransformerChain = context.injector.get(
                AddProductsToCartTransformerChain
            );
            console.log('Shopping Lists', clientShoppingList);

            //4. Use exisiting transformer to transform data -> we are using this AddProductsToCartTransformerChain'
            //A - want to output the one type but have 2 input types
            //B - next function needs to only accept one type of output
            //the point of transforming this input is to make it to one.
            const transformedInput = shoppingListTransformer.transform({
                data: args.requisitionListItems,
            });
            console.log('transformed', transformedInput);
            console.log('CONSOLE 3\n\n');

            //5. Add transformed data to cart
            const addItemsToShoppingList = await clientShoppingList.addItemsToShoppingList(
                requisitionListUid,
                transformedInput
            );
            console.log(addItemsToShoppingList, 'Item added to cart', requisitionListUid);

            //6. Return the transformed data:
            // MOCK RETURN
            return {
                requisition_list: {
                    items_count: 1,
                    /** The requisition list name. */
                    name: 'Michael List',
                    /** The unique requisition list ID. */
                    uid: '1',
                },
            };

            // return {
            //     requisition_list: transformedInput
            // }
        },
    };

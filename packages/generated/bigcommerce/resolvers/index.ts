import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Defines the bundle products to add to the cart. */
export type AddBundleProductsToCartInput = {
  /** The ID of the cart. */
  cart_id: Scalars['String'];
  /** An array of bundle products to add. */
  cart_items: Array<InputMaybe<BundleProductCartItemInput>>;
};

/** Contains details about the cart after adding bundle products. */
export type AddBundleProductsToCartOutput = {
  __typename?: 'AddBundleProductsToCartOutput';
  /** The cart after adding products. */
  cart: Cart;
};

/** Defines the configurable products to add to the cart. */
export type AddConfigurableProductsToCartInput = {
  /** The ID of the cart. */
  cart_id: Scalars['String'];
  /** An array of configurable products to add. */
  cart_items: Array<InputMaybe<ConfigurableProductCartItemInput>>;
};

/** Contains details about the cart after adding configurable products. */
export type AddConfigurableProductsToCartOutput = {
  __typename?: 'AddConfigurableProductsToCartOutput';
  /** The cart after adding products. */
  cart: Cart;
};

export type AddDownloadableProductsToCartInput = {
  /** The ID of the cart. */
  cart_id: Scalars['String'];
  /** An array of downloadable products to add. */
  cart_items: Array<InputMaybe<DownloadableProductCartItemInput>>;
};

/** Contains details about the cart after adding downloadable products. */
export type AddDownloadableProductsToCartOutput = {
  __typename?: 'AddDownloadableProductsToCartOutput';
  /** The cart after adding products. */
  cart: Cart;
};

/** Defines an item to add to the gift registry. */
export type AddGiftRegistryItemInput = {
  /** An array of options the customer has entered. */
  entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
  /** A brief note about the item. */
  note?: InputMaybe<Scalars['String']>;
  /** For complex product types, the SKU of the parent product. */
  parent_sku?: InputMaybe<Scalars['String']>;
  /** The quantity of the product to add. */
  quantity: Scalars['Float'];
  /** An array of strings corresponding to options the customer has selected. */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The SKU of the product to add to the gift registry. */
  sku: Scalars['String'];
};

/** Defines a new registrant. */
export type AddGiftRegistryRegistrantInput = {
  /** Additional attributes specified as a code-value pair. */
  dynamic_attributes?: InputMaybe<Array<InputMaybe<GiftRegistryDynamicAttributeInput>>>;
  /** The email address of the registrant. */
  email: Scalars['String'];
  /** The first name of the registrant. */
  firstname: Scalars['String'];
  /** The last name of the registrant. */
  lastname: Scalars['String'];
};

/** Contains the results of a request to add registrants. */
export type AddGiftRegistryRegistrantsOutput = {
  __typename?: 'AddGiftRegistryRegistrantsOutput';
  /** The gift registry after adding registrants. */
  gift_registry?: Maybe<GiftRegistry>;
};

/** Contains details about the cart after adding products to it. */
export type AddProductsToCartOutput = {
  __typename?: 'AddProductsToCartOutput';
  /** The cart after products have been added. */
  cart: Cart;
  /** Contains errors encountered while adding an item to the cart. */
  user_errors: Array<Maybe<CartUserInputError>>;
};

/** Contains products to add to an existing compare list. */
export type AddProductsToCompareListInput = {
  /** An array of product IDs to add to the compare list. */
  products: Array<InputMaybe<Scalars['ID']>>;
  /** The unique identifier of the compare list to modify. */
  uid: Scalars['ID'];
};

/** Contains the customer's wish list and any errors encountered. */
export type AddProductsToWishlistOutput = {
  __typename?: 'AddProductsToWishlistOutput';
  /** An array of errors encountered while adding products to a wish list. */
  user_errors: Array<Maybe<WishListUserInputError>>;
  /** Contains the wish list with all items that were successfully added. */
  wishlist: Wishlist;
};

/** Defines a return comment. */
export type AddReturnCommentInput = {
  /** The text added to the return request. */
  comment_text: Scalars['String'];
  /** The unique ID for a `Return` object. */
  return_uid: Scalars['ID'];
};

/** Contains details about the return request. */
export type AddReturnCommentOutput = {
  __typename?: 'AddReturnCommentOutput';
  /** The modified return. */
  return?: Maybe<Return>;
};

/** Defines tracking information to be added to the return. */
export type AddReturnTrackingInput = {
  /** The unique ID for a `ReturnShippingCarrier` object. */
  carrier_uid: Scalars['ID'];
  /** The unique ID for a `Returns` object. */
  return_uid: Scalars['ID'];
  /** The shipping tracking number for this return request. */
  tracking_number: Scalars['String'];
};

/** Contains the response after adding tracking information. */
export type AddReturnTrackingOutput = {
  __typename?: 'AddReturnTrackingOutput';
  /** Details about the modified return. */
  return?: Maybe<Return>;
  /** Details about shipping for a return. */
  return_shipping_tracking?: Maybe<ReturnShippingTracking>;
};

/** Defines the simple and group products to add to the cart. */
export type AddSimpleProductsToCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String'];
  /** An array of simple and group items to add. */
  cart_items: Array<InputMaybe<SimpleProductCartItemInput>>;
};

/** Contains details about the cart after adding simple or group products. */
export type AddSimpleProductsToCartOutput = {
  __typename?: 'AddSimpleProductsToCartOutput';
  /** The cart after adding products. */
  cart: Cart;
};

/** Defines the virtual products to add to the cart. */
export type AddVirtualProductsToCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String'];
  /** An array of virtual products to add. */
  cart_items: Array<InputMaybe<VirtualProductCartItemInput>>;
};

/** Contains details about the cart after adding virtual products. */
export type AddVirtualProductsToCartOutput = {
  __typename?: 'AddVirtualProductsToCartOutput';
  /** The cart after adding products. */
  cart: Cart;
};

/** Contains the resultant wish list and any error information. */
export type AddWishlistItemsToCartOutput = {
  __typename?: 'AddWishlistItemsToCartOutput';
  /** An array of errors encountered while adding products to the customer's cart. */
  add_wishlist_items_to_cart_user_errors: Array<Maybe<WishlistCartUserInputError>>;
  /** Indicates whether the attempt to add items to the customer's cart was successful. */
  status: Scalars['Boolean'];
  /** Contains the wish list with all items that were successfully added. */
  wishlist: Wishlist;
};

export type AdyenAdditionalDataBoleto = {
  /** Type of Boleto. */
  boleto_type?: InputMaybe<Scalars['String']>;
  /** Customer Firstname. */
  firstname?: InputMaybe<Scalars['String']>;
  /** Customer Lastname. */
  lastname?: InputMaybe<Scalars['String']>;
  /** Social security number. */
  social_security_number?: InputMaybe<Scalars['String']>;
};

export type AdyenAdditionalDataCc = {
  /** Credit card brand. */
  cc_type?: InputMaybe<Scalars['String']>;
  /** Debit or Credit card. */
  combo_card_type?: InputMaybe<Scalars['String']>;
  /** Email address if customer is guest. */
  guestEmail?: InputMaybe<Scalars['String']>;
  /** If combo_card_type is credit, Number of installments for the payment. */
  number_of_installments?: InputMaybe<Scalars['Int']>;
  /** Recurring processing model to tokenize the payment method. */
  recurringProcessingModel?: InputMaybe<Scalars['String']>;
  /** The URL to return to in case of a redirection. The format depends on the channel. This URL can have a maximum of 1024 characters. It can include a placeholder `:merchantReference` to identify the order e.g. `https://your-company.com/checkout?shopperOrder=:merchantReference`. */
  returnUrl?: InputMaybe<Scalars['String']>;
  /** JSON string of filled fields. */
  stateData?: InputMaybe<Scalars['String']>;
};

export type AdyenAdditionalDataHpp = {
  /** Type of HPP payment. */
  brand_code: Scalars['String'];
  /** Ratepay device identification token. */
  df_value?: InputMaybe<Scalars['String']>;
  /** Email address if customer is guest. */
  guestEmail?: InputMaybe<Scalars['String']>;
  /** Recurring processing model to tokenize the payment method. */
  recurringProcessingModel?: InputMaybe<Scalars['String']>;
  /** The URL to return to in case of a redirection. The format depends on the channel. This URL can have a maximum of 1024 characters. It can include a placeholder `:merchantReference` to identify the order e.g. `https://your-company.com/checkout?shopperOrder=:merchantReference`. */
  returnUrl?: InputMaybe<Scalars['String']>;
  /** JSON string of filled fields. */
  stateData: Scalars['String'];
};

export type AdyenAdditionalDataOneclick = {
  /** Number of installments for the payment. */
  number_of_installments?: InputMaybe<Scalars['Int']>;
  /** The URL to return to in case of a redirection. The format depends on the channel. This URL can have a maximum of 1024 characters. It can include a placeholder `:merchantReference` to identify the order e.g. `https://your-company.com/checkout?shopperOrder=:merchantReference`. */
  returnUrl?: InputMaybe<Scalars['String']>;
  /** JSON string of filled fields. */
  stateData?: InputMaybe<Scalars['String']>;
};

export type AdyenAdditionalDataPosCloud = {
  /** Number of installments for the payment. */
  number_of_installments?: InputMaybe<Scalars['Int']>;
  /** Terminal ID of selected terminal. */
  terminal_id?: InputMaybe<Scalars['String']>;
};

export type AdyenPaymentMethodIcon = {
  __typename?: 'AdyenPaymentMethodIcon';
  /** Height of the icon in pixels. */
  height?: Maybe<Scalars['Int']>;
  /** URL of the icon. */
  url?: Maybe<Scalars['String']>;
  /** Width of the icon in pixels. */
  width?: Maybe<Scalars['Int']>;
};

export type AdyenPaymentMethods = {
  __typename?: 'AdyenPaymentMethods';
  /** Payment method's additional details. */
  paymentMethodsExtraDetails?: Maybe<Array<Maybe<AdyenPaymentMethodsExtraDetails>>>;
  /** API response from Adyen with payment methods. */
  paymentMethodsResponse?: Maybe<AdyenPaymentMethodsResponse>;
};

export type AdyenPaymentMethodsArray = {
  __typename?: 'AdyenPaymentMethodsArray';
  /** Brand for the selected gift card. For example: plastix, hmclub. */
  brand?: Maybe<Scalars['String']>;
  /** List of possible brands. For example: visa, mc. */
  brands?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The configuration of the payment method. */
  configuration?: Maybe<AdyenPaymentMethodsConfiguration>;
  /** All input details to be provided to complete the payment with this payment method. */
  details?: Maybe<Array<Maybe<AdyenPaymentMethodsDetails>>>;
  /** Payment method issuer list. */
  issuers?: Maybe<Array<Maybe<AdyenPaymentMethodsIssuers>>>;
  /** The displayable name of this payment method. */
  name?: Maybe<Scalars['String']>;
  /** The unique payment method code. */
  type?: Maybe<Scalars['String']>;
};

export type AdyenPaymentMethodsConfiguration = {
  __typename?: 'AdyenPaymentMethodsConfiguration';
  /** Name of the merchant for Google Pay. */
  gatewayMerchantId?: Maybe<Scalars['String']>;
  /** ID of the merchant. */
  merchantId?: Maybe<Scalars['String']>;
  /** Name of the merchant. */
  merchantName?: Maybe<Scalars['String']>;
};

export type AdyenPaymentMethodsDetails = {
  __typename?: 'AdyenPaymentMethodsDetails';
  /** The items to choose from in case that the payment method includes a selection list. */
  items?: Maybe<Array<Maybe<AdyenPaymentMethodsDetailsItems>>>;
  /** The value to provide in the result. */
  key?: Maybe<Scalars['String']>;
  /** True if this input is optional. */
  optional?: Maybe<Scalars['String']>;
  /** The type of the required input. */
  type?: Maybe<Scalars['String']>;
  /** The value can be pre-filled, if available. */
  value?: Maybe<Scalars['String']>;
};

export type AdyenPaymentMethodsDetailsItems = {
  __typename?: 'AdyenPaymentMethodsDetailsItems';
  /** The value to provide in the result. */
  id?: Maybe<Scalars['String']>;
  /** The display name. */
  name?: Maybe<Scalars['String']>;
};

export type AdyenPaymentMethodsExtraDetails = {
  __typename?: 'AdyenPaymentMethodsExtraDetails';
  /** Extra configuration settings. */
  configuration?: Maybe<AdyenPaymentMethodsExtraDetailsConfiguration>;
  /** Icon for the payment method. */
  icon?: Maybe<AdyenPaymentMethodIcon>;
  /** True if the payment method is Open Invoice. */
  isOpenInvoice?: Maybe<Scalars['Boolean']>;
  /** The unique payment method code. */
  type?: Maybe<Scalars['String']>;
};

export type AdyenPaymentMethodsExtraDetailsConfiguration = {
  __typename?: 'AdyenPaymentMethodsExtraDetailsConfiguration';
  /** Current order amount in minor units. */
  amount?: Maybe<Money>;
  /** Current order currency. */
  currency?: Maybe<Scalars['String']>;
};

export type AdyenPaymentMethodsIssuers = {
  __typename?: 'AdyenPaymentMethodsIssuers';
  /** Issuer ID. */
  id?: Maybe<Scalars['String']>;
  /** Issuer name. */
  name?: Maybe<Scalars['String']>;
};

export type AdyenPaymentMethodsResponse = {
  __typename?: 'AdyenPaymentMethodsResponse';
  paymentMethods?: Maybe<Array<Maybe<AdyenPaymentMethodsArray>>>;
  storedPaymentMethods?: Maybe<Array<Maybe<AdyenStoredPaymentMethodsArray>>>;
};

export type AdyenPaymentStatus = {
  __typename?: 'AdyenPaymentStatus';
  /** Object containing information about the payment's next step. */
  action?: Maybe<Scalars['String']>;
  /** Additional data required for the next step in the payment process. */
  additionalData?: Maybe<Scalars['String']>;
  /** If True, no further action is required and customer should be redirect to success page. */
  isFinal?: Maybe<Scalars['Boolean']>;
  /** Current state of the order in Adyen. */
  resultCode?: Maybe<Scalars['String']>;
};

export type AdyenStoredPaymentMethodsArray = {
  __typename?: 'AdyenStoredPaymentMethodsArray';
  /** The brand of the card. */
  brand?: Maybe<Scalars['String']>;
  /** The month the card expires. */
  expiryMonth?: Maybe<Scalars['String']>;
  /** The year the card expires. */
  expiryYear?: Maybe<Scalars['String']>;
  /** The unique payment method code. */
  holderName?: Maybe<Scalars['String']>;
  /** The IBAN of the bank account. */
  iban?: Maybe<Scalars['String']>;
  /** A unique identifier of this stored payment method. */
  id?: Maybe<Scalars['String']>;
  /** The last four digits of the PAN. */
  lastFour?: Maybe<Scalars['String']>;
  /** The display name of the stored payment method. */
  name?: Maybe<Scalars['String']>;
  /** Returned in the response if you are not tokenizing with Adyen and are using the Merchant-initiated transactions (MIT) framework from Mastercard or Visa. This contains either the Mastercard Trace ID or the Visa Transaction ID. */
  networkTxReference?: Maybe<Scalars['String']>;
  /** The name of the bank account holder. */
  ownerName?: Maybe<Scalars['String']>;
  /** The shopper’s email address. */
  shopperEmail?: Maybe<Scalars['String']>;
  /** The supported shopper interactions for this stored payment method. */
  supportedShopperInteractions?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The type of payment method. */
  type?: Maybe<Scalars['String']>;
};

export type AfterpayInput = {
  /** Afterpay checkout token returned by the createAfterpayCheckout mutation */
  afterpay_token: Scalars['String'];
};

/** A set of relative URLs that Afterpay will use in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. */
export type AfterpayRedirectPathInput = {
  /** The relative URL of the page that Afterpay will redirect to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/afterpay/payment/cancel, the relative URL is afterpay/payment/cancel. */
  cancel_path: Scalars['String'];
  /** The relative URL of the final confirmation page that Afterpay will redirect to upon payment success. If the full URL to this page is https://www.example.com/afterpay/payment/success, the relative URL is afterpay/payment/success. */
  confirm_path: Scalars['String'];
};

/** Contains information for each filterable option (such as price, category `UID`, and custom attributes). */
export type Aggregation = {
  __typename?: 'Aggregation';
  /** Attribute code of the aggregation group. */
  attribute_code: Scalars['String'];
  /** The number of options in the aggregation group. */
  count?: Maybe<Scalars['Int']>;
  /** The type of filter used by the attribute */
  filterType?: Maybe<FilterTypeEnum>;
  /** The aggregation display name. */
  label?: Maybe<Scalars['String']>;
  /** Array of options for the aggregation. */
  options?: Maybe<Array<Maybe<AggregationOption>>>;
  /** The relative position of the attribute in a layered navigation block. */
  position?: Maybe<Scalars['Int']>;
};

/** An implementation of `AggregationOptionInterface`. */
export type AggregationOption = AggregationOptionInterface & {
  __typename?: 'AggregationOption';
  /** The number of items that match the aggregation option. */
  count?: Maybe<Scalars['Int']>;
  /** The display label for an aggregation option. */
  label?: Maybe<Scalars['String']>;
  /** Data required to render swatch filter item */
  swatch_data?: Maybe<SwatchData>;
  /** The internal ID that represents the value of the option. */
  value: Scalars['String'];
};

/** Defines aggregation option fields. */
export type AggregationOptionInterface = {
  /** The number of items that match the aggregation option. */
  count?: Maybe<Scalars['Int']>;
  /** The display label for an aggregation option. */
  label?: Maybe<Scalars['String']>;
  /** Data required to render swatch filter item */
  swatch_data?: Maybe<SwatchData>;
  /** The internal ID that represents the value of the option. */
  value: Scalars['String'];
};

/** Filter category aggregations in layered navigation. */
export type AggregationsCategoryFilterInput = {
  /** Indicates whether to include only direct subcategories or all children categories at all levels. */
  includeDirectChildrenOnly?: InputMaybe<Scalars['Boolean']>;
};

/** An input object that specifies the filters used in product aggregations. */
export type AggregationsFilterInput = {
  /** Filter category aggregations in layered navigation. */
  category?: InputMaybe<AggregationsCategoryFilterInput>;
};

/** Contains the applied coupon code. */
export type AppliedCoupon = {
  __typename?: 'AppliedCoupon';
  /** The coupon code the shopper applied to the card. */
  code: Scalars['String'];
};

/** Contains an applied gift card with applied and remaining balance. */
export type AppliedGiftCard = {
  __typename?: 'AppliedGiftCard';
  /** The amount applied to the current cart. */
  applied_balance?: Maybe<Money>;
  /** The gift card account code. */
  code?: Maybe<Scalars['String']>;
  /** The remaining balance on the gift card. */
  current_balance?: Maybe<Money>;
  /** The expiration date of the gift card. */
  expiration_date?: Maybe<Scalars['String']>;
};

/** Contains the applied and current balances. */
export type AppliedStoreCredit = {
  __typename?: 'AppliedStoreCredit';
  /** The applied store credit balance to the current cart. */
  applied_balance?: Maybe<Money>;
  /** The current balance remaining on store credit. */
  current_balance?: Maybe<Money>;
  /** Indicates whether store credits are enabled. If the feature is disabled, then the current balance will not be returned. */
  enabled?: Maybe<Scalars['Boolean']>;
};

/** Specifies the coupon code to apply to the cart. */
export type ApplyCouponToCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String'];
  /** A valid coupon code. */
  coupon_code: Scalars['String'];
};

/** Contains details about the cart after applying a coupon. */
export type ApplyCouponToCartOutput = {
  __typename?: 'ApplyCouponToCartOutput';
  /** The cart after applying a coupon. */
  cart: Cart;
};

/** Defines the input required to run the `applyGiftCardToCart` mutation. */
export type ApplyGiftCardToCartInput = {
  /** The unique ID that identifies the customer's cart. */
  cart_id: Scalars['String'];
  /** The gift card code to be applied to the cart. */
  gift_card_code: Scalars['String'];
};

/** Defines the possible output for the `applyGiftCardToCart` mutation. */
export type ApplyGiftCardToCartOutput = {
  __typename?: 'ApplyGiftCardToCartOutput';
  /** Describes the contents of the specified shopping cart. */
  cart: Cart;
};

/** Contains the customer cart. */
export type ApplyRewardPointsToCartOutput = {
  __typename?: 'ApplyRewardPointsToCartOutput';
  /** The customer cart after reward points are applied. */
  cart: Cart;
};

/** Defines the input required to run the `applyStoreCreditToCart` mutation. */
export type ApplyStoreCreditToCartInput = {
  /** The unique ID that identifies the customer's cart. */
  cart_id: Scalars['String'];
};

/** Defines the possible output for the `applyStoreCreditToCart` mutation. */
export type ApplyStoreCreditToCartOutput = {
  __typename?: 'ApplyStoreCreditToCartOutput';
  /** The contents of the specified shopping cart. */
  cart: Cart;
};

/** AreaInput defines the parameters which will be used for filter by specified location. */
export type AreaInput = {
  /** Coordinates used for location search. */
  coordinates?: InputMaybe<CoordinatesRequest>;
  /** The radius for the search in KM. */
  radius: Scalars['Int'];
  /** The country code where search must be performed. Required parameter together with region, city or postcode. */
  search_term: Scalars['String'];
};

/** Contains the results of the request to assign a compare list. */
export type AssignCompareListToCustomerOutput = {
  __typename?: 'AssignCompareListToCustomerOutput';
  /** The contents of the customer's compare list. */
  compare_list?: Maybe<CompareList>;
  /** Indicates whether the compare list was successfully assigned to the customer. */
  result: Scalars['Boolean'];
};

/** Contains details about the attribute, including the code and type. */
export type Attribute = {
  __typename?: 'Attribute';
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  attribute_code?: Maybe<Scalars['String']>;
  /** Attribute options list. */
  attribute_options?: Maybe<Array<Maybe<AttributeOption>>>;
  /** The data type of the attribute. */
  attribute_type?: Maybe<Scalars['String']>;
  /** The type of entity that defines the attribute. */
  entity_type?: Maybe<Scalars['String']>;
  /** The frontend input type of the attribute. */
  input_type?: Maybe<Scalars['String']>;
  /** Details about the storefront properties configured for the attribute. */
  storefront_properties?: Maybe<StorefrontProperties>;
};

export type AttributeEntityTypeEnum =
  | 'PRODUCT';

/** Defines the attribute characteristics to search for the `attribute_code` and `entity_type` to search. */
export type AttributeInput = {
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  attribute_code?: InputMaybe<Scalars['String']>;
  /** The type of entity that defines the attribute. */
  entity_type?: InputMaybe<Scalars['String']>;
};

/** An interface containing fields that define attributes. */
export type AttributeMetadataInterface = {
  /** An array of attribute labels defined for the current store. */
  attribute_labels?: Maybe<Array<Maybe<StoreLabels>>>;
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  code?: Maybe<Scalars['String']>;
  /** The data type of the attribute. */
  data_type?: Maybe<ObjectDataTypeEnum>;
  /** The type of entity that defines the attribute. */
  entity_type?: Maybe<AttributeEntityTypeEnum>;
  /** Indicates whether the attribute is a system attribute. */
  is_system?: Maybe<Scalars['Boolean']>;
  /** The label assigned to the attribute. */
  label?: Maybe<Scalars['String']>;
  /** The relative position of the attribute. */
  sort_order?: Maybe<Scalars['Int']>;
  /** Frontend UI properties of the attribute. */
  ui_input?: Maybe<UiInputTypeInterface>;
  /** The unique ID of an attribute. */
  uid?: Maybe<Scalars['ID']>;
};

/** Defines an attribute option. */
export type AttributeOption = AttributeOptionInterface & {
  __typename?: 'AttributeOption';
  /** Indicates if option is set to be used as default value. */
  is_default?: Maybe<Scalars['Boolean']>;
  /** The label assigned to the attribute option. */
  label?: Maybe<Scalars['String']>;
  /** The unique ID of an attribute option. */
  uid: Scalars['ID'];
  /** The attribute option value. */
  value?: Maybe<Scalars['String']>;
};

/** Defines attribute options. */
export type AttributeOptionInterface = {
  /** Indicates if option is set to be used as default value. */
  is_default?: Maybe<Scalars['Boolean']>;
  /** The label assigned to the attribute option. */
  label?: Maybe<Scalars['String']>;
  /** The unique ID of an attribute option. */
  uid: Scalars['ID'];
};

export type AttributeOptions = AttributeOptionsInterface & {
  __typename?: 'AttributeOptions';
  /** An array of attribute options. */
  attribute_options?: Maybe<Array<Maybe<AttributeOptionInterface>>>;
};

/** Defines attribute options. */
export type AttributeOptionsInterface = {
  /** An array of attribute options. */
  attribute_options?: Maybe<Array<Maybe<AttributeOptionInterface>>>;
};

/** Contains an array of custom and system attributes. */
export type AttributesMetadata = {
  __typename?: 'AttributesMetadata';
  /** An array of attributes. */
  items?: Maybe<Array<Maybe<AttributeMetadataInterface>>>;
};

/** Describes a payment method that the shopper can use to pay for the order. */
export type AvailablePaymentMethod = {
  __typename?: 'AvailablePaymentMethod';
  /** The payment method code. */
  code: Scalars['String'];
  /** If the payment method is an online integration */
  is_deferred: Scalars['Boolean'];
  /** The payment method title. */
  title: Scalars['String'];
};

/** Contains details about the possible shipping methods and carriers. */
export type AvailableShippingMethod = {
  __typename?: 'AvailableShippingMethod';
  /** The cost of shipping using this shipping method. */
  amount: Money;
  /** Indicates whether this shipping method can be applied to the cart. */
  available: Scalars['Boolean'];
  /** @deprecated The field should not be used on the storefront. */
  base_amount?: Maybe<Money>;
  /** A string that identifies a commercial carrier or an offline shipping method. */
  carrier_code: Scalars['String'];
  /** The label for the carrier code. */
  carrier_title: Scalars['String'];
  /** Describes an error condition. */
  error_message?: Maybe<Scalars['String']>;
  /** A shipping method code associated with a carrier. The value could be null if no method is available. */
  method_code?: Maybe<Scalars['String']>;
  /** The label for the shipping method code. The value could be null if no method is available. */
  method_title?: Maybe<Scalars['String']>;
  /** The cost of shipping using this shipping method, excluding tax. */
  price_excl_tax: Money;
  /** The cost of shipping using this shipping method, including tax. */
  price_incl_tax: Money;
};

export type BatchMutationStatus =
  | 'FAILURE'
  | 'MIXED_RESULTS'
  | 'SUCCESS';

/** Defines the billing address. */
export type BillingAddressInput = {
  /** Defines a billing address. */
  address?: InputMaybe<CartAddressInput>;
  /** An ID from the customer's address book that uniquely identifies the address to be used for billing. */
  customer_address_id?: InputMaybe<Scalars['Int']>;
  /** Indicates whether to set the billing address to be the same as the existing shipping address on the cart. */
  same_as_shipping?: InputMaybe<Scalars['Boolean']>;
  /** Indicates whether to set the shipping address to be the same as this billing address. */
  use_for_shipping?: InputMaybe<Scalars['Boolean']>;
};

/** Contains details about the billing address. */
export type BillingCartAddress = CartAddressInterface & {
  __typename?: 'BillingCartAddress';
  /** The city specified for the billing or shipping address. */
  city: Scalars['String'];
  /** The company specified for the billing or shipping address. */
  company?: Maybe<Scalars['String']>;
  /** An object containing the country label and code. */
  country: CartAddressCountry;
  /** @deprecated The field is used only in shipping address. */
  customer_notes?: Maybe<Scalars['String']>;
  /** The first name of the customer or guest. */
  firstname: Scalars['String'];
  /** The last name of the customer or guest. */
  lastname: Scalars['String'];
  /** The ZIP or postal code of the billing or shipping address. */
  postcode?: Maybe<Scalars['String']>;
  /** An object containing the region label and code. */
  region?: Maybe<CartAddressRegion>;
  /** An array containing the street for the billing or shipping address. */
  street: Array<Maybe<Scalars['String']>>;
  /** The telephone number for the billing or shipping address. */
  telephone?: Maybe<Scalars['String']>;
  /** The unique id of the customer address. */
  uid: Scalars['String'];
  /** The VAT company number for billing or shipping address. */
  vat_id?: Maybe<Scalars['String']>;
};

export type BraintreeCcVaultInput = {
  device_data?: InputMaybe<Scalars['String']>;
  public_hash: Scalars['String'];
};

export type BraintreeInput = {
  /** Contains a fingerprint provided by Braintree JS SDK and should be sent with sale transaction details to the Braintree payment gateway. */
  device_data?: InputMaybe<Scalars['String']>;
  /** States whether an entered by a customer credit/debit card should be tokenized for later usage. Required only if Vault is enabled for Braintree payment integration. */
  is_active_payment_token_enabler: Scalars['Boolean'];
  /** The one-time payment token generated by Braintree payment gateway based on card details. Required field to make sale transaction. */
  payment_method_nonce: Scalars['String'];
};

/** Contains details about an individual category that comprises a breadcrumb. */
export type Breadcrumb = {
  __typename?: 'Breadcrumb';
  /**
   * The ID of the category.
   * @deprecated Use `category_uid` instead.
   */
  category_id?: Maybe<Scalars['Int']>;
  /** The category level. */
  category_level?: Maybe<Scalars['Int']>;
  /** The display name of the category. */
  category_name?: Maybe<Scalars['String']>;
  /** The unique ID for a `Breadcrumb` object. */
  category_uid: Scalars['ID'];
  /** The URL key of the category. */
  category_url_key?: Maybe<Scalars['String']>;
  /** The URL path of the category. */
  category_url_path?: Maybe<Scalars['String']>;
};

/** An implementation for bundle product cart items. */
export type BundleCartItem = CartItemInterface & {
  __typename?: 'BundleCartItem';
  /** The list of available gift wrapping options for the cart item. */
  available_gift_wrapping: Array<Maybe<GiftWrapping>>;
  /** An array containing the bundle options the shopper selected. */
  bundle_options: Array<Maybe<SelectedBundleOption>>;
  /** An array containing the customizable options the shopper selected. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** The entered gift message for the cart item */
  gift_message?: Maybe<GiftMessage>;
  /** The selected gift wrapping for the cart item. */
  gift_wrapping?: Maybe<GiftWrapping>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String'];
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float'];
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID'];
};

/** Defines bundle product options for `CreditMemoItemInterface`. */
export type BundleCreditMemoItem = CreditMemoItemInterface & {
  __typename?: 'BundleCreditMemoItem';
  /** A list of bundle options that are assigned to a bundle product that is part of a credit memo. */
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** Details about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for a `CreditMemoItemInterface` object. */
  id: Scalars['ID'];
  /** The order item the credit memo is applied to. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String'];
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']>;
};

/** Defines bundle product options for `InvoiceItemInterface`. */
export type BundleInvoiceItem = InvoiceItemInterface & {
  __typename?: 'BundleInvoiceItem';
  /** A list of bundle options that are assigned to an invoiced bundle product. */
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** Information about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for an `InvoiceItemInterface` object. */
  id: Scalars['ID'];
  /** Details about an individual order item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String'];
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']>;
};

/** Defines an individual item within a bundle product. */
export type BundleItem = {
  __typename?: 'BundleItem';
  /**
   * An ID assigned to each type of item in a bundle product.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** An array of additional options for this bundle item. */
  options?: Maybe<Array<Maybe<BundleItemOption>>>;
  /** A number indicating the sequence order of this item compared to the other bundle items. */
  position?: Maybe<Scalars['Int']>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** Indicates whether the item must be included in the bundle. */
  required?: Maybe<Scalars['Boolean']>;
  /** The SKU of the bundle product. */
  sku?: Maybe<Scalars['String']>;
  /** The display name of the item. */
  title?: Maybe<Scalars['String']>;
  /** The input type that the customer uses to select the item. Examples include radio button and checkbox. */
  type?: Maybe<Scalars['String']>;
  /** The unique ID for a `BundleItem` object. */
  uid?: Maybe<Scalars['ID']>;
};

/** Defines the characteristics that comprise a specific bundle item and its options. */
export type BundleItemOption = {
  __typename?: 'BundleItemOption';
  /** Indicates whether the customer can change the number of items for this option. */
  can_change_quantity?: Maybe<Scalars['Boolean']>;
  /**
   * The ID assigned to the bundled item option.
   * @deprecated Use `uid` instead
   */
  id?: Maybe<Scalars['Int']>;
  /** Indicates whether this option is the default option. */
  is_default?: Maybe<Scalars['Boolean']>;
  /** The text that identifies the bundled item option. */
  label?: Maybe<Scalars['String']>;
  /** When a bundle item contains multiple options, the relative position of this option compared to the other options. */
  position?: Maybe<Scalars['Int']>;
  /** The price of the selected option. */
  price?: Maybe<Scalars['Float']>;
  /** One of FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** Contains details about this product option. */
  product?: Maybe<ProductInterface>;
  /**
   * Indicates the quantity of this specific bundle item.
   * @deprecated Use `quantity` instead.
   */
  qty?: Maybe<Scalars['Float']>;
  /** The quantity of this specific bundle item. */
  quantity?: Maybe<Scalars['Float']>;
  /** The unique ID for a `BundleItemOption` object. */
  uid: Scalars['ID'];
};

/** Defines the input for a bundle option. */
export type BundleOptionInput = {
  /** The ID of the option. */
  id: Scalars['Int'];
  /** The number of the selected item to add to the cart. */
  quantity: Scalars['Float'];
  /** An array with the chosen value of the option. */
  value: Array<InputMaybe<Scalars['String']>>;
};

/** Defines bundle product options for `OrderItemInterface`. */
export type BundleOrderItem = OrderItemInterface & {
  __typename?: 'BundleOrderItem';
  /** A list of bundle options that are assigned to the bundle product. */
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** The final discount information for the product. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** Indicates whether the order item is eligible to be in a return request. */
  eligible_for_return?: Maybe<Scalars['Boolean']>;
  /** The entered option for the base product, such as a logo or image. */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The selected gift message for the order item */
  gift_message?: Maybe<GiftMessage>;
  /** The selected gift wrapping for the order item. */
  gift_wrapping?: Maybe<GiftWrapping>;
  /** The unique ID for an `OrderItemInterface` object. */
  id: Scalars['ID'];
  /** Query line total for the order */
  line_total?: Maybe<Scalars['Float']>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price of the base product, including selected options. */
  product_sale_price: Money;
  /** Sale price incl. tax for the order item */
  product_sale_price_incl_tax: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']>;
  /** URL key of the base product. */
  product_url_key?: Maybe<Scalars['String']>;
  /** The number of canceled items. */
  quantity_canceled?: Maybe<Scalars['Float']>;
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']>;
  /** The number of units ordered for this item. */
  quantity_ordered?: Maybe<Scalars['Float']>;
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']>;
  /** The number of returned items. */
  quantity_returned?: Maybe<Scalars['Float']>;
  /** The number of shipped items. */
  quantity_shipped?: Maybe<Scalars['Float']>;
  /** The selected options for the base product, such as color or size. */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item. */
  status?: Maybe<Scalars['String']>;
};

/** Defines basic features of a bundle product and contains multiple BundleItems. */
export type BundleProduct = CustomizableProductInterface & PhysicalProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'BundleProduct';
  /** @deprecated Use the `custom_attributes` field instead. */
  activity?: Maybe<Scalars['String']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']>;
  /** The availability state of the product. */
  availability?: Maybe<ProductAvailability>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_gear?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  climate?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  collar?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color?: Maybe<Scalars['String']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** An array of cross-sell products. */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** List of product custom attributes details. */
  custom_attributes: Array<Maybe<CustomAttribute>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** Indicates whether the bundle product has a dynamic price. */
  dynamic_price?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the bundle product has a dynamic SKU. */
  dynamic_sku?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the bundle product has a dynamically calculated weight. */
  dynamic_weight?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  eco_collection?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  erin_recommends?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  features_bags?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  format?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gender?: Maybe<Scalars['String']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** Indicates whether the product can be returned. */
  is_returnable?: Maybe<Scalars['String']>;
  /** An array containing information about individual bundle items. */
  items?: Maybe<Array<Maybe<BundleItem>>>;
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  marketplacer_brand?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  marketplacer_seller?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material?: Maybe<Scalars['String']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pattern?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  performance_fabric?: Maybe<Scalars['Int']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** One of PRICE_RANGE or AS_LOW_AS. */
  price_view?: Maybe<PriceViewEnum>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  purpose?: Maybe<Scalars['Int']>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int'];
  /** An array of related products. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']>;
  /** Indicates whether to ship bundle items together or individually. */
  ship_bundle_items?: Maybe<ShipBundleItemsEnum>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['Int']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sleeve?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  /** Indicates whether the product is staged for a future campaign. */
  staged: Scalars['Boolean'];
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  strap_bags?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bags?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bottom?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_general?: Maybe<Scalars['String']>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** An array of up-sell products. */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']>;
};


/** Defines basic features of a bundle product and contains multiple BundleItems. */
export type BundleProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

/** Defines a single bundle product. */
export type BundleProductCartItemInput = {
  /** A mandatory array of options for the bundle product, including each chosen option and specified quantity. */
  bundle_options: Array<InputMaybe<BundleOptionInput>>;
  /** The ID and value of the option. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** The quantity and SKU of the bundle product. */
  data: CartItemInput;
};

/** Defines bundle product options for `ShipmentItemInterface`. */
export type BundleShipmentItem = ShipmentItemInterface & {
  __typename?: 'BundleShipmentItem';
  /** A list of bundle options that are assigned to a shipped product. */
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** The unique ID for a `ShipmentItemInterface` object. */
  id: Scalars['ID'];
  /** The order item associated with the shipment item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String'];
  /** The number of shipped items. */
  quantity_shipped: Scalars['Float'];
};

/** Defines bundle product options for `WishlistItemInterface`. */
export type BundleWishlistItem = WishlistItemInterface & {
  __typename?: 'BundleWishlistItem';
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String'];
  /** An array containing information about the selected bundle items. */
  bundle_options?: Maybe<Array<Maybe<SelectedBundleOption>>>;
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID'];
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float'];
};

/** Contains the contents and other details about a guest or customer cart. */
export type Cart = {
  __typename?: 'Cart';
  /** @deprecated Use `applied_coupons` instead. */
  applied_coupon?: Maybe<AppliedCoupon>;
  /** An array of `AppliedCoupon` objects. Each object contains the `code` text attribute, which specifies the coupon code. */
  applied_coupons?: Maybe<Array<Maybe<AppliedCoupon>>>;
  /** An array of gift card items applied to the cart. */
  applied_gift_cards?: Maybe<Array<Maybe<AppliedGiftCard>>>;
  /** The amount of reward points applied to the cart. */
  applied_reward_points?: Maybe<RewardPointsAmount>;
  /** Store credit information applied to the cart. */
  applied_store_credit?: Maybe<AppliedStoreCredit>;
  /** The list of available gift wrapping options for the cart. */
  available_gift_wrappings: Array<Maybe<GiftWrapping>>;
  /** An array of available payment methods. */
  available_payment_methods?: Maybe<Array<Maybe<AvailablePaymentMethod>>>;
  /** The billing address assigned to the cart. */
  billing_address?: Maybe<BillingCartAddress>;
  /** The number of reward points applied with the cart total */
  cart_reward_points?: Maybe<RewardPointsAmount>;
  /** The email address of the guest or customer. */
  email?: Maybe<Scalars['String']>;
  /** Type of cart error, if present */
  error_type?: Maybe<CartErrorType>;
  /** Free shipping details */
  free_shipping_details?: Maybe<FreeShippingDetails>;
  /** The entered gift message for the cart */
  gift_message?: Maybe<GiftMessage>;
  /** Indicates whether the shopper requested gift receipt for the cart. */
  gift_receipt_included: Scalars['Boolean'];
  /** The selected gift wrapping for the cart. */
  gift_wrapping?: Maybe<GiftWrapping>;
  /** The unique ID for a `Cart` object. */
  id: Scalars['ID'];
  /** Indicates whether the cart contains only virtual products. */
  is_virtual: Scalars['Boolean'];
  /** An array of products that have been added to the cart. */
  items?: Maybe<Array<Maybe<CartItemInterface>>>;
  /** Pricing details for the quote. */
  prices?: Maybe<CartPrices>;
  /** Indicates whether the shopper requested a printed card for the cart. */
  printed_card_included: Scalars['Boolean'];
  /** Indicates which payment method was applied to the cart. */
  selected_payment_method?: Maybe<SelectedPaymentMethod>;
  /** An array of shipping addresses assigned to the cart. */
  shipping_addresses: Array<Maybe<ShippingCartAddress>>;
  /** The total number of items in the cart. */
  total_quantity: Scalars['Float'];
};

/** Contains details the country in a billing or shipping address. */
export type CartAddressCountry = {
  __typename?: 'CartAddressCountry';
  /** The country code. */
  code: Scalars['String'];
  /** The display label for the country. */
  label: Scalars['String'];
};

/** Defines the billing or shipping address to be applied to the cart. */
export type CartAddressInput = {
  /** The city specified for the billing or shipping address. */
  city: Scalars['String'];
  /** The company specified for the billing or shipping address. */
  company?: InputMaybe<Scalars['String']>;
  /** The country code and label for the billing or shipping address. */
  country_code: Scalars['String'];
  /** The first name of the customer or guest. */
  firstname: Scalars['String'];
  /** The last name of the customer or guest. */
  lastname: Scalars['String'];
  /** The ZIP or postal code of the billing or shipping address. */
  postcode?: InputMaybe<Scalars['String']>;
  /** A string that defines the state or province of the billing or shipping address. */
  region?: InputMaybe<Scalars['String']>;
  /** An integer that defines the state or province of the billing or shipping address. */
  region_id?: InputMaybe<Scalars['Int']>;
  /** Determines whether to save the address in the customer's address book. The default value is true. */
  save_in_address_book?: InputMaybe<Scalars['Boolean']>;
  /** An array containing the street for the billing or shipping address. */
  street: Array<InputMaybe<Scalars['String']>>;
  /** The telephone number for the billing or shipping address. */
  telephone?: InputMaybe<Scalars['String']>;
  /** The VAT company number for billing or shipping address. */
  vat_id?: InputMaybe<Scalars['String']>;
};

export type CartAddressInterface = {
  /** The city specified for the billing or shipping address. */
  city: Scalars['String'];
  /** The company specified for the billing or shipping address. */
  company?: Maybe<Scalars['String']>;
  /** An object containing the country label and code. */
  country: CartAddressCountry;
  /** The first name of the customer or guest. */
  firstname: Scalars['String'];
  /** The last name of the customer or guest. */
  lastname: Scalars['String'];
  /** The ZIP or postal code of the billing or shipping address. */
  postcode?: Maybe<Scalars['String']>;
  /** An object containing the region label and code. */
  region?: Maybe<CartAddressRegion>;
  /** An array containing the street for the billing or shipping address. */
  street: Array<Maybe<Scalars['String']>>;
  /** The telephone number for the billing or shipping address. */
  telephone?: Maybe<Scalars['String']>;
  /** The unique id of the customer address. */
  uid: Scalars['String'];
  /** The VAT company number for billing or shipping address. */
  vat_id?: Maybe<Scalars['String']>;
};

/** Contains details about the region in a billing or shipping address. */
export type CartAddressRegion = {
  __typename?: 'CartAddressRegion';
  /** The state or province code. */
  code?: Maybe<Scalars['String']>;
  /** The display label for the region. */
  label?: Maybe<Scalars['String']>;
  /** The unique ID for a pre-defined region. */
  region_id?: Maybe<Scalars['Int']>;
};

/** Contains information about discounts applied to the cart. */
export type CartDiscount = {
  __typename?: 'CartDiscount';
  /** The amount of the discount applied to the item. */
  amount: Money;
  /** The description of the discount. */
  label: Array<Maybe<Scalars['String']>>;
};

export type CartErrorType =
  | 'EXISTING_CART_ERROR'
  | 'NEW_CART_ERROR'
  | 'NONE';

export type CartItemError = {
  __typename?: 'CartItemError';
  /** An error code that describes the error encountered */
  code: CartItemErrorType;
  /** A localized error message */
  message: Scalars['String'];
};

export type CartItemErrorType =
  | 'ITEM_INCREMENTS'
  | 'ITEM_QTY'
  | 'UNDEFINED';

/** Defines an item to be added to the cart. */
export type CartItemInput = {
  /** An array of entered options for the base product, such as personalization text. */
  entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
  /** For a child product, the SKU of its parent product. */
  parent_sku?: InputMaybe<Scalars['String']>;
  /** The amount or number of an item to add. */
  quantity: Scalars['Float'];
  /** The selected options for the base product, such as color or size, using the unique ID for an object such as `CustomizableRadioOption`, `CustomizableDropDownOption`, or `ConfigurableProductOptionsValues`. */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** The SKU of the product. */
  sku: Scalars['String'];
  /** Temporary parameter to allow for use of AC without mesh */
  uid?: InputMaybe<Scalars['ID']>;
};

/** An interface for products in a cart. */
export type CartItemInterface = {
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String'];
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float'];
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID'];
};

/** Contains details about the price of the item, including taxes and discounts. */
export type CartItemPrices = {
  __typename?: 'CartItemPrices';
  /** An array of discounts to be applied to the cart item. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** An array of FPTs applied to the cart item. */
  fixed_product_taxes?: Maybe<Array<Maybe<FixedProductTax>>>;
  /** The price of the item before any discounts were applied. The price that might include tax, depending on the configured display settings for cart. */
  price: Money;
  /** The price of the item before any discounts were applied. The price that might include tax, depending on the configured display settings for cart. */
  price_including_tax: Money;
  /** The value of the price multiplied by the quantity of the item. */
  row_total: Money;
  /** The value of `row_total` plus the tax applied to the item. */
  row_total_including_tax: Money;
  /** The total of all discounts applied to the item. */
  total_item_discount?: Maybe<Money>;
};

/** Deprecated: The `ShippingCartAddress.cart_items` field now returns `CartItemInterface`. */
export type CartItemQuantity = {
  __typename?: 'CartItemQuantity';
  /** @deprecated The `ShippingCartAddress.cart_items` field now returns `CartItemInterface`. */
  cart_item_id: Scalars['Int'];
  /** @deprecated The `ShippingCartAddress.cart_items` field now returns `CartItemInterface`. */
  quantity: Scalars['Float'];
};

/** Contains details about the price of a selected customizable value. */
export type CartItemSelectedOptionValuePrice = {
  __typename?: 'CartItemSelectedOptionValuePrice';
  /** Indicates whether the price type is fixed, percent, or dynamic. */
  type: PriceTypeEnum;
  /** A string that describes the unit of the value. */
  units: Scalars['String'];
  /** A price value. */
  value: Scalars['Float'];
};

/** A single item to be updated. */
export type CartItemUpdateInput = {
  /** Deprecated. Use `cart_item_uid` instead. */
  cart_item_id?: InputMaybe<Scalars['Int']>;
  /** The unique ID for a `CartItemInterface` object. */
  cart_item_uid?: InputMaybe<Scalars['ID']>;
  /** An array that defines customizable options for the product. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** Gift message details for the cart item */
  gift_message?: InputMaybe<GiftMessageInput>;
  /** The unique ID for a `GiftWrapping` object to be used for the cart item. */
  gift_wrapping_id?: InputMaybe<Scalars['ID']>;
  /** The new quantity of the item. */
  quantity?: InputMaybe<Scalars['Float']>;
};

/** Contains details about the final price of items in the cart, including discount and tax information. */
export type CartPrices = {
  __typename?: 'CartPrices';
  /** List of individual applied discounts. */
  applied_discounts?: Maybe<Array<Maybe<Discount>>>;
  /** An array containing the names and amounts of taxes applied to each item in the cart. */
  applied_taxes?: Maybe<Array<Maybe<CartTaxItem>>>;
  /** @deprecated Use discounts instead. */
  discount?: Maybe<CartDiscount>;
  /** An array containing cart rule discounts, store credit and gift cards applied to the cart. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The list of prices for the selected gift options. */
  gift_options?: Maybe<GiftOptionsPrices>;
  /** The total, including discounts, taxes, shipping, and other fees. */
  grand_total?: Maybe<Money>;
  /** The subtotal without any applied taxes. */
  subtotal_excluding_tax?: Maybe<Money>;
  /** The subtotal including any applied taxes. */
  subtotal_including_tax?: Maybe<Money>;
  /** The subtotal with any discounts applied, but not taxes. */
  subtotal_with_discount_excluding_tax?: Maybe<Money>;
  subtotal_with_discount_including_tax?: Maybe<Money>;
};

/** Contains tax information about an item in the cart. */
export type CartTaxItem = {
  __typename?: 'CartTaxItem';
  /** The amount of tax applied to the item. */
  amount: Money;
  /** The description of the tax. */
  label: Scalars['String'];
};

/** An error encountered while adding an item to the the cart. */
export type CartUserInputError = {
  __typename?: 'CartUserInputError';
  /** A cart-specific error code. */
  code: CartUserInputErrorType;
  /** A localized error message. */
  message: Scalars['String'];
};

export type CartUserInputErrorType =
  | 'INSUFFICIENT_STOCK'
  | 'NOT_SALABLE'
  | 'PERMISSION_DENIED'
  | 'PRODUCT_NOT_FOUND'
  | 'UNDEFINED';

/** Defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type CategoryFilterInput = {
  /** Filter by the unique category ID for a `CategoryInterface` object. */
  category_uid?: InputMaybe<FilterEqualTypeInput>;
  /** Deprecated: use 'category_uid' to filter uniquely identifiers of categories. */
  ids?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the display name of the category. */
  name?: InputMaybe<FilterMatchTypeInput>;
  /** Filter by the unique parent category ID for a `CategoryInterface` object. */
  parent_category_uid?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the unique parent category ID for a `CategoryInterface` object. */
  parent_id?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the part of the URL that identifies the category. */
  url_key?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the URL path for the category. */
  url_path?: InputMaybe<FilterEqualTypeInput>;
};

/** Contains the full set of attributes that can be returned in a category search. */
export type CategoryInterface = {
  automatic_sorting?: Maybe<Scalars['String']>;
  available_sort_by?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** An array of breadcrumb items. */
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumb>>>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Categories' is enabled. */
  canonical_url?: Maybe<Scalars['String']>;
  children_count?: Maybe<Scalars['String']>;
  /** Contains a category CMS block. */
  cms_block?: Maybe<CmsBlock>;
  /**
   * The timestamp indicating when the category was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  custom_layout_update_file?: Maybe<Scalars['String']>;
  /** The attribute to use for sorting. */
  default_sort_by?: Maybe<Scalars['String']>;
  /** An optional description of the category. */
  description?: Maybe<Scalars['String']>;
  display_mode?: Maybe<Scalars['String']>;
  filter_price_range?: Maybe<Scalars['Float']>;
  /**
   * An ID that uniquely identifies the category.
   * @deprecated Use `uid` instead.
   */
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  include_in_menu?: Maybe<Scalars['Int']>;
  is_anchor?: Maybe<Scalars['Int']>;
  landing_page?: Maybe<Scalars['Int']>;
  /** The depth of the category within the tree. */
  level?: Maybe<Scalars['Int']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_keywords?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  /** The display name of the category. */
  name?: Maybe<Scalars['String']>;
  /** The full category path. */
  path?: Maybe<Scalars['String']>;
  /** The category path within the store. */
  path_in_store?: Maybe<Scalars['String']>;
  /** The position of the category relative to other categories at the same level in tree. */
  position?: Maybe<Scalars['Int']>;
  /** The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  product_count?: Maybe<Scalars['Int']>;
  /** The list of products assigned to the category. */
  products?: Maybe<CategoryProducts>;
  /** Indicates whether the category is staged for a future campaign. */
  staged: Scalars['Boolean'];
  /** The unique ID for a `CategoryInterface` object. */
  uid: Scalars['ID'];
  /**
   * The timestamp indicating when the category was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** The URL key assigned to the category. */
  url_key?: Maybe<Scalars['String']>;
  /** The URL path assigned to the category. */
  url_path?: Maybe<Scalars['String']>;
  /** The part of the category URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
};


/** Contains the full set of attributes that can be returned in a category search. */
export type CategoryInterfaceProductsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ProductAttributeSortInput>;
};

/** Contains details about the products assigned to a category. */
export type CategoryProducts = {
  __typename?: 'CategoryProducts';
  /** An array of products that are assigned to the category. */
  items?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Pagination metadata. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  total_count?: Maybe<Scalars['Int']>;
};

/** Contains a collection of `CategoryTree` objects and pagination information. */
export type CategoryResult = {
  __typename?: 'CategoryResult';
  /** A list of categories that match the filter criteria. */
  items?: Maybe<Array<Maybe<CategoryTree>>>;
  /** An object that includes the `page_info` and `currentPage` values specified in the query. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The total number of categories that match the criteria. */
  total_count?: Maybe<Scalars['Int']>;
};

/** Contains the hierarchy of categories. */
export type CategoryTree = CategoryInterface & RoutableInterface & {
  __typename?: 'CategoryTree';
  automatic_sorting?: Maybe<Scalars['String']>;
  available_sort_by?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** An array of breadcrumb items. */
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumb>>>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Categories' is enabled. */
  canonical_url?: Maybe<Scalars['String']>;
  /** A tree of child categories. */
  children?: Maybe<Array<Maybe<CategoryTree>>>;
  children_count?: Maybe<Scalars['String']>;
  /** Contains a category CMS block. */
  cms_block?: Maybe<CmsBlock>;
  /**
   * The timestamp indicating when the category was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  custom_layout_update_file?: Maybe<Scalars['String']>;
  /** The attribute to use for sorting. */
  default_sort_by?: Maybe<Scalars['String']>;
  /** An optional description of the category. */
  description?: Maybe<Scalars['String']>;
  display_mode?: Maybe<Scalars['String']>;
  filter_price_range?: Maybe<Scalars['Float']>;
  /**
   * An ID that uniquely identifies the category.
   * @deprecated Use `uid` instead.
   */
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  include_in_menu?: Maybe<Scalars['Int']>;
  is_anchor?: Maybe<Scalars['Int']>;
  landing_page?: Maybe<Scalars['Int']>;
  /** The depth of the category within the tree. */
  level?: Maybe<Scalars['Int']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_keywords?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  /** The display name of the category. */
  name?: Maybe<Scalars['String']>;
  /** The full category path. */
  path?: Maybe<Scalars['String']>;
  /** The category path within the store. */
  path_in_store?: Maybe<Scalars['String']>;
  /** The position of the category relative to other categories at the same level in tree. */
  position?: Maybe<Scalars['Int']>;
  /** The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  product_count?: Maybe<Scalars['Int']>;
  /** The list of products assigned to the category. */
  products?: Maybe<CategoryProducts>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int'];
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']>;
  /** Indicates whether the category is staged for a future campaign. */
  staged: Scalars['Boolean'];
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /** The unique ID for a `CategoryInterface` object. */
  uid: Scalars['ID'];
  /**
   * The timestamp indicating when the category was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** The URL key assigned to the category. */
  url_key?: Maybe<Scalars['String']>;
  /** The URL path assigned to the category. */
  url_path?: Maybe<Scalars['String']>;
  /** The part of the category URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
};


/** Contains the hierarchy of categories. */
export type CategoryTreeProductsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ProductAttributeSortInput>;
};

/** Defines details about an individual checkout agreement. */
export type CheckoutAgreement = {
  __typename?: 'CheckoutAgreement';
  /** The ID for a checkout agreement. */
  agreement_id: Scalars['Int'];
  /** The checkbox text for the checkout agreement. */
  checkbox_text: Scalars['String'];
  /** Required. The text of the agreement. */
  content: Scalars['String'];
  /** The height of the text box where the Terms and Conditions statement appears during checkout. */
  content_height?: Maybe<Scalars['String']>;
  /** Indicates whether the `content` text is in HTML format. */
  is_html: Scalars['Boolean'];
  /** Indicates whether agreements are accepted automatically or manually. */
  mode: CheckoutAgreementMode;
  /** The name given to the condition. */
  name: Scalars['String'];
};

/** Indicates how agreements are accepted. */
export type CheckoutAgreementMode =
  /** Conditions are automatically accepted upon checkout. */
  | 'AUTO'
  /** Shoppers must manually accept the conditions to place an order. */
  | 'MANUAL';

/** An error encountered while adding an item to the cart. */
export type CheckoutUserInputError = {
  __typename?: 'CheckoutUserInputError';
  /** An error code that is specific to Checkout. */
  code: CheckoutUserInputErrorCodes;
  /** A localized error message. */
  message: Scalars['String'];
  /** The path to the input field that caused an error. See the GraphQL specification about path errors for details: http://spec.graphql.org/draft/#sec-Errors */
  path: Array<Maybe<Scalars['String']>>;
};

export type CheckoutUserInputErrorCodes =
  | 'INSUFFICIENT_STOCK'
  | 'NOT_SALABLE'
  | 'PRODUCT_NOT_FOUND'
  | 'REORDER_NOT_AVAILABLE'
  | 'UNDEFINED';

/** Output of the request to clear the customer cart. */
export type ClearCustomerCartOutput = {
  __typename?: 'ClearCustomerCartOutput';
  /** The cart after clearing items. */
  cart?: Maybe<Cart>;
  /** Indicates whether cart was cleared. */
  status: Scalars['Boolean'];
};

/** Contains details about a specific CMS block. */
export type CmsBlock = {
  __typename?: 'CmsBlock';
  /** The content of the CMS block in raw HTML. */
  content?: Maybe<Scalars['String']>;
  /** The CMS block identifier. */
  identifier?: Maybe<Scalars['String']>;
  /** The title assigned to the CMS block. */
  title?: Maybe<Scalars['String']>;
};

/** Contains an array CMS block items. */
export type CmsBlocks = {
  __typename?: 'CmsBlocks';
  /** An array of CMS blocks. */
  items?: Maybe<Array<Maybe<CmsBlock>>>;
};

/** Contains details about a CMS page. */
export type CmsPage = RoutableInterface & {
  __typename?: 'CmsPage';
  /** The content of the CMS page in raw HTML. */
  content?: Maybe<Scalars['String']>;
  /** The heading that displays at the top of the CMS page. */
  content_heading?: Maybe<Scalars['String']>;
  /** The ID of a CMS page. */
  identifier?: Maybe<Scalars['String']>;
  /** A brief description of the page for search results listings. */
  meta_description?: Maybe<Scalars['String']>;
  /** A brief description of the page for search results listings. */
  meta_keywords?: Maybe<Scalars['String']>;
  /** A page title that is indexed by search engines and appears in search results listings. */
  meta_title?: Maybe<Scalars['String']>;
  /** The design layout of the page, indicating the number of columns and navigation features used on the page. */
  page_layout?: Maybe<Scalars['String']>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int'];
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']>;
  /** The name that appears in the breadcrumb trail navigation and in the browser title bar and tab. */
  title?: Maybe<Scalars['String']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /** The URL key of the CMS page, which is often based on the `content_heading`. */
  url_key?: Maybe<Scalars['String']>;
};

export type ColorSwatchData = SwatchDataInterface & {
  __typename?: 'ColorSwatchData';
  /** The value can be represented as color (HEX code), image link, or text. */
  value?: Maybe<Scalars['String']>;
};

/** Contains an attribute code that is used for product comparisons. */
export type ComparableAttribute = {
  __typename?: 'ComparableAttribute';
  /** An attribute code that is enabled for product comparisons. */
  code: Scalars['String'];
  /** The label of the attribute code. */
  label: Scalars['String'];
};

/** Defines an object used to iterate through items for product comparisons. */
export type ComparableItem = {
  __typename?: 'ComparableItem';
  /** An array of product attributes that can be used to compare products. */
  attributes: Array<Maybe<ProductAttribute>>;
  /** Details about a product in a compare list. */
  product: ProductInterface;
  /** The unique ID of an item in a compare list. */
  uid: Scalars['ID'];
};

/** Contains iterable information such as the array of items, the count, and attributes that represent the compare list. */
export type CompareList = {
  __typename?: 'CompareList';
  /** An array of attributes that can be used for comparing products. */
  attributes?: Maybe<Array<Maybe<ComparableAttribute>>>;
  /** The number of items in the compare list. */
  item_count: Scalars['Int'];
  /** An array of products to compare. */
  items?: Maybe<Array<Maybe<ComparableItem>>>;
  /** The unique ID assigned to the compare list. */
  uid: Scalars['ID'];
};

export type ComplexTextValue = {
  __typename?: 'ComplexTextValue';
  /** Text that can contain HTML tags. */
  html: Scalars['String'];
};

/** Contains details about a configurable product attribute option. */
export type ConfigurableAttributeOption = {
  __typename?: 'ConfigurableAttributeOption';
  /** The ID assigned to the attribute. */
  code?: Maybe<Scalars['String']>;
  /** A string that describes the configurable attribute option. */
  label?: Maybe<Scalars['String']>;
  /** The unique ID for a `ConfigurableAttributeOption` object. */
  uid: Scalars['ID'];
  /** A unique index number assigned to the configurable product option. */
  value_index?: Maybe<Scalars['Int']>;
};

/** An implementation for configurable product cart items. */
export type ConfigurableCartItem = CartItemInterface & {
  __typename?: 'ConfigurableCartItem';
  /** The list of available gift wrapping options for the cart item. */
  available_gift_wrapping: Array<Maybe<GiftWrapping>>;
  /** An array containing the configuranle options the shopper selected. */
  configurable_options: Array<Maybe<SelectedConfigurableOption>>;
  /** Product details of the cart item. */
  configured_variant: ProductInterface;
  /** An array containing the customizable options the shopper selected. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** The entered gift message for the cart item */
  gift_message?: Maybe<GiftMessage>;
  /** The selected gift wrapping for the cart item. */
  gift_wrapping?: Maybe<GiftWrapping>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String'];
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float'];
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID'];
};

/** Describes configurable options that have been selected and can be selected as a result of the previous selections. */
export type ConfigurableOptionAvailableForSelection = {
  __typename?: 'ConfigurableOptionAvailableForSelection';
  /** An attribute code that uniquely identifies a configurable option. */
  attribute_code: Scalars['String'];
  /** An array of selectable option value IDs. */
  option_value_uids: Array<Maybe<Scalars['ID']>>;
};

/** Defines basic features of a configurable product and its simple product variants. */
export type ConfigurableProduct = CustomizableProductInterface & PhysicalProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'ConfigurableProduct';
  /** @deprecated Use the `custom_attributes` field instead. */
  activity?: Maybe<Scalars['String']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']>;
  /** The availability state of the product. */
  availability?: Maybe<ProductAvailability>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_gear?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  climate?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  collar?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color?: Maybe<Scalars['String']>;
  /** An array of options for the configurable product. */
  configurable_options?: Maybe<Array<Maybe<ConfigurableProductOptions>>>;
  /** An array of media gallery items and other details about selected configurable product options as well as details about remaining selectable options. */
  configurable_product_options_selection?: Maybe<ConfigurableProductOptionsSelection>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** An array of cross-sell products. */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** List of product custom attributes details. */
  custom_attributes: Array<Maybe<CustomAttribute>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  eco_collection?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  erin_recommends?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  features_bags?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  format?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gender?: Maybe<Scalars['String']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** Indicates whether the product can be returned. */
  is_returnable?: Maybe<Scalars['String']>;
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  marketplacer_brand?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  marketplacer_seller?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material?: Maybe<Scalars['String']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pattern?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  performance_fabric?: Maybe<Scalars['Int']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  purpose?: Maybe<Scalars['Int']>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int'];
  /** An array of related products. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['Int']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sleeve?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  /** Indicates whether the product is staged for a future campaign. */
  staged: Scalars['Boolean'];
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  strap_bags?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bags?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bottom?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_general?: Maybe<Scalars['String']>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** An array of up-sell products. */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  /** An array of simple product variants. */
  variants?: Maybe<Array<Maybe<ConfigurableVariant>>>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']>;
};


/** Defines basic features of a configurable product and its simple product variants. */
export type ConfigurableProductConfigurable_Product_Options_SelectionArgs = {
  configurableOptionValueUids?: InputMaybe<Array<Scalars['ID']>>;
};


/** Defines basic features of a configurable product and its simple product variants. */
export type ConfigurableProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type ConfigurableProductCartItemInput = {
  /** The ID and value of the option. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** The quantity and SKU of the configurable product. */
  data: CartItemInput;
  /** The SKU of the parent configurable product. */
  parent_sku?: InputMaybe<Scalars['String']>;
  /** Deprecated. Use `CartItemInput.sku` instead. */
  variant_sku?: InputMaybe<Scalars['String']>;
};

/** Contains details about configurable product options. */
export type ConfigurableProductOption = {
  __typename?: 'ConfigurableProductOption';
  /** An attribute code that uniquely identifies a configurable option. */
  attribute_code: Scalars['String'];
  /** The display name of the option. */
  label: Scalars['String'];
  /** The unique ID of the configurable option. */
  uid: Scalars['ID'];
  /** An array of values that are applicable for this option. */
  values?: Maybe<Array<Maybe<ConfigurableProductOptionValue>>>;
};

/** Defines a value for a configurable product option. */
export type ConfigurableProductOptionValue = {
  __typename?: 'ConfigurableProductOptionValue';
  /** Indicates whether the product is available with this selected option. */
  is_available: Scalars['Boolean'];
  /** Indicates whether the value is the default. */
  is_use_default: Scalars['Boolean'];
  /** The display name of the value. */
  label: Scalars['String'];
  /** The URL assigned to the thumbnail of the swatch image. */
  swatch?: Maybe<SwatchDataInterface>;
  /** The unique ID of the value. */
  uid: Scalars['ID'];
};

/** Defines configurable attributes for the specified product. */
export type ConfigurableProductOptions = {
  __typename?: 'ConfigurableProductOptions';
  /** A string that identifies the attribute. */
  attribute_code?: Maybe<Scalars['String']>;
  /**
   * The ID assigned to the attribute.
   * @deprecated Use `attribute_uid` instead.
   */
  attribute_id?: Maybe<Scalars['String']>;
  /**
   * The ID assigned to the attribute.
   * @deprecated Use `attribute_uid` instead.
   */
  attribute_id_v2?: Maybe<Scalars['Int']>;
  /** The unique ID for an `Attribute` object. */
  attribute_uid: Scalars['ID'];
  /**
   * The configurable option ID number assigned by the system.
   * @deprecated Use `uid` instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** A displayed string that describes the configurable product option. */
  label?: Maybe<Scalars['String']>;
  /** A number that indicates the order in which the attribute is displayed. */
  position?: Maybe<Scalars['Int']>;
  /**
   * This is the same as a product's `id` field.
   * @deprecated `product_id` is not needed and can be obtained from its parent.
   */
  product_id?: Maybe<Scalars['Int']>;
  /** The unique ID for a `ConfigurableProductOptions` object. */
  uid: Scalars['ID'];
  /** Indicates whether the option is the default. */
  use_default?: Maybe<Scalars['Boolean']>;
  /** An array that defines the `value_index` codes assigned to the configurable product. */
  values?: Maybe<Array<Maybe<ConfigurableProductOptionsValues>>>;
};

/** Contains metadata corresponding to the selected configurable options. */
export type ConfigurableProductOptionsSelection = {
  __typename?: 'ConfigurableProductOptionsSelection';
  /** An array of all possible configurable options. */
  configurable_options?: Maybe<Array<Maybe<ConfigurableProductOption>>>;
  /** Product images and videos corresponding to the specified configurable options selection. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /** The configurable options available for further selection based on the current selection. */
  options_available_for_selection?: Maybe<Array<Maybe<ConfigurableOptionAvailableForSelection>>>;
  /** A variant represented by the specified configurable options selection. The value is expected to be null until selections are made for each configurable option. */
  variant?: Maybe<SimpleProduct>;
};

/** Contains the index number assigned to a configurable product option. */
export type ConfigurableProductOptionsValues = {
  __typename?: 'ConfigurableProductOptionsValues';
  /** The label of the product on the default store. */
  default_label?: Maybe<Scalars['String']>;
  /** The label of the product. */
  label?: Maybe<Scalars['String']>;
  /** The label of the product on the current store. */
  store_label?: Maybe<Scalars['String']>;
  /** Swatch data for a configurable product option. */
  swatch_data?: Maybe<SwatchDataInterface>;
  /** The unique ID for a `ConfigurableProductOptionsValues` object. */
  uid?: Maybe<Scalars['ID']>;
  /** Indicates whether to use the default_label. */
  use_default_value?: Maybe<Scalars['Boolean']>;
  /**
   * A unique index number assigned to the configurable product option.
   * @deprecated Use `uid` instead.
   */
  value_index?: Maybe<Scalars['Int']>;
};

/** Contains all the simple product variants of a configurable product. */
export type ConfigurableVariant = {
  __typename?: 'ConfigurableVariant';
  /** An array of configurable attribute options. */
  attributes?: Maybe<Array<Maybe<ConfigurableAttributeOption>>>;
  /** An array of linked simple products. */
  product?: Maybe<SimpleProduct>;
};

/** A configurable product wish list item. */
export type ConfigurableWishlistItem = WishlistItemInterface & {
  __typename?: 'ConfigurableWishlistItem';
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String'];
  /**
   * The SKU of the simple product corresponding to a set of selected configurable options.
   * @deprecated Use `ConfigurableWishlistItem.configured_variant.sku` instead.
   */
  child_sku: Scalars['String'];
  /** An array of selected configurable options. */
  configurable_options?: Maybe<Array<Maybe<SelectedConfigurableOption>>>;
  /** Product details of the selected variant. The value is null if some options are not configured. */
  configured_variant?: Maybe<ProductInterface>;
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID'];
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float'];
};

export type ContactUsInput = {
  /** Content of the email message. Required. */
  comment: Scalars['String'];
  /** The customer's email. Required. */
  email: Scalars['String'];
  /** The customer's name. Required. */
  name: Scalars['String'];
  /** The customer's phone number. */
  telephone?: InputMaybe<Scalars['String']>;
};

/** Contains the status of the request. */
export type ContactUsOutput = {
  __typename?: 'ContactUsOutput';
  /** Indicates whether the request was successful. */
  status: Scalars['Boolean'];
};

/** Coordinates used for location search. */
export type CoordinatesRequest = {
  /** Latitude */
  lat?: InputMaybe<Scalars['Float']>;
  /** Longitude */
  lng?: InputMaybe<Scalars['Float']>;
};

/** Contains the source and target wish lists after copying products. */
export type CopyProductsBetweenWishlistsOutput = {
  __typename?: 'CopyProductsBetweenWishlistsOutput';
  /** The destination wish list containing the copied products. */
  destination_wishlist: Wishlist;
  /** The wish list that the products were copied from. */
  source_wishlist: Wishlist;
  /** An array of errors encountered while copying products in a wish list. */
  user_errors: Array<Maybe<WishListUserInputError>>;
};

export type Country = {
  __typename?: 'Country';
  /** An array of regions within a particular country. */
  available_regions?: Maybe<Array<Maybe<Region>>>;
  /** The name of the country in English. */
  full_name_english?: Maybe<Scalars['String']>;
  /** The name of the country in the current locale. */
  full_name_locale?: Maybe<Scalars['String']>;
  /** The unique ID for a `Country` object. */
  id?: Maybe<Scalars['String']>;
  /** The three-letter abbreviation of the country, such as USA. */
  three_letter_abbreviation?: Maybe<Scalars['String']>;
  /** The two-letter abbreviation of the country, such as US. */
  two_letter_abbreviation?: Maybe<Scalars['String']>;
};

/** The list of country codes. */
export type CountryCodeEnum =
  /** Andorra */
  | 'AD'
  /** United Arab Emirates */
  | 'AE'
  /** Afghanistan */
  | 'AF'
  /** Antigua & Barbuda */
  | 'AG'
  /** Anguilla */
  | 'AI'
  /** Albania */
  | 'AL'
  /** Armenia */
  | 'AM'
  /** Netherlands Antilles */
  | 'AN'
  /** Angola */
  | 'AO'
  /** Antarctica */
  | 'AQ'
  /** Argentina */
  | 'AR'
  /** American Samoa */
  | 'AS'
  /** Austria */
  | 'AT'
  /** Australia */
  | 'AU'
  /** Aruba */
  | 'AW'
  /** Åland Islands */
  | 'AX'
  /** Azerbaijan */
  | 'AZ'
  /** Bosnia & Herzegovina */
  | 'BA'
  /** Barbados */
  | 'BB'
  /** Bangladesh */
  | 'BD'
  /** Belgium */
  | 'BE'
  /** Burkina Faso */
  | 'BF'
  /** Bulgaria */
  | 'BG'
  /** Bahrain */
  | 'BH'
  /** Burundi */
  | 'BI'
  /** Benin */
  | 'BJ'
  /** St. Barthélemy */
  | 'BL'
  /** Bermuda */
  | 'BM'
  /** Brunei */
  | 'BN'
  /** Bolivia */
  | 'BO'
  /** Brazil */
  | 'BR'
  /** Bahamas */
  | 'BS'
  /** Bhutan */
  | 'BT'
  /** Bouvet Island */
  | 'BV'
  /** Botswana */
  | 'BW'
  /** Belarus */
  | 'BY'
  /** Belize */
  | 'BZ'
  /** Canada */
  | 'CA'
  /** Cocos (Keeling) Islands */
  | 'CC'
  /** Congo-Kinshasa */
  | 'CD'
  /** Central African Republic */
  | 'CF'
  /** Congo-Brazzaville */
  | 'CG'
  /** Switzerland */
  | 'CH'
  /** Côte d’Ivoire */
  | 'CI'
  /** Cook Islands */
  | 'CK'
  /** Chile */
  | 'CL'
  /** Cameroon */
  | 'CM'
  /** China */
  | 'CN'
  /** Colombia */
  | 'CO'
  /** Costa Rica */
  | 'CR'
  /** Cuba */
  | 'CU'
  /** Cape Verde */
  | 'CV'
  /** Christmas Island */
  | 'CX'
  /** Cyprus */
  | 'CY'
  /** Czech Republic */
  | 'CZ'
  /** Germany */
  | 'DE'
  /** Djibouti */
  | 'DJ'
  /** Denmark */
  | 'DK'
  /** Dominica */
  | 'DM'
  /** Dominican Republic */
  | 'DO'
  /** Algeria */
  | 'DZ'
  /** Ecuador */
  | 'EC'
  /** Estonia */
  | 'EE'
  /** Egypt */
  | 'EG'
  /** Western Sahara */
  | 'EH'
  /** Eritrea */
  | 'ER'
  /** Spain */
  | 'ES'
  /** Ethiopia */
  | 'ET'
  /** Finland */
  | 'FI'
  /** Fiji */
  | 'FJ'
  /** Falkland Islands */
  | 'FK'
  /** Micronesia */
  | 'FM'
  /** Faroe Islands */
  | 'FO'
  /** France */
  | 'FR'
  /** Gabon */
  | 'GA'
  /** United Kingdom */
  | 'GB'
  /** Grenada */
  | 'GD'
  /** Georgia */
  | 'GE'
  /** French Guiana */
  | 'GF'
  /** Guernsey */
  | 'GG'
  /** Ghana */
  | 'GH'
  /** Gibraltar */
  | 'GI'
  /** Greenland */
  | 'GL'
  /** Gambia */
  | 'GM'
  /** Guinea */
  | 'GN'
  /** Guadeloupe */
  | 'GP'
  /** Equatorial Guinea */
  | 'GQ'
  /** Greece */
  | 'GR'
  /** South Georgia & South Sandwich Islands */
  | 'GS'
  /** Guatemala */
  | 'GT'
  /** Guam */
  | 'GU'
  /** Guinea-Bissau */
  | 'GW'
  /** Guyana */
  | 'GY'
  /** Hong Kong SAR China */
  | 'HK'
  /** Heard &amp; McDonald Islands */
  | 'HM'
  /** Honduras */
  | 'HN'
  /** Croatia */
  | 'HR'
  /** Haiti */
  | 'HT'
  /** Hungary */
  | 'HU'
  /** Indonesia */
  | 'ID'
  /** Ireland */
  | 'IE'
  /** Israel */
  | 'IL'
  /** Isle of Man */
  | 'IM'
  /** India */
  | 'IN'
  /** British Indian Ocean Territory */
  | 'IO'
  /** Iraq */
  | 'IQ'
  /** Iran */
  | 'IR'
  /** Iceland */
  | 'IS'
  /** Italy */
  | 'IT'
  /** Jersey */
  | 'JE'
  /** Jamaica */
  | 'JM'
  /** Jordan */
  | 'JO'
  /** Japan */
  | 'JP'
  /** Kenya */
  | 'KE'
  /** Kyrgyzstan */
  | 'KG'
  /** Cambodia */
  | 'KH'
  /** Kiribati */
  | 'KI'
  /** Comoros */
  | 'KM'
  /** St. Kitts & Nevis */
  | 'KN'
  /** North Korea */
  | 'KP'
  /** South Korea */
  | 'KR'
  /** Kuwait */
  | 'KW'
  /** Cayman Islands */
  | 'KY'
  /** Kazakhstan */
  | 'KZ'
  /** Laos */
  | 'LA'
  /** Lebanon */
  | 'LB'
  /** St. Lucia */
  | 'LC'
  /** Liechtenstein */
  | 'LI'
  /** Sri Lanka */
  | 'LK'
  /** Liberia */
  | 'LR'
  /** Lesotho */
  | 'LS'
  /** Lithuania */
  | 'LT'
  /** Luxembourg */
  | 'LU'
  /** Latvia */
  | 'LV'
  /** Libya */
  | 'LY'
  /** Morocco */
  | 'MA'
  /** Monaco */
  | 'MC'
  /** Moldova */
  | 'MD'
  /** Montenegro */
  | 'ME'
  /** St. Martin */
  | 'MF'
  /** Madagascar */
  | 'MG'
  /** Marshall Islands */
  | 'MH'
  /** Macedonia */
  | 'MK'
  /** Mali */
  | 'ML'
  /** Myanmar (Burma) */
  | 'MM'
  /** Mongolia */
  | 'MN'
  /** Macau SAR China */
  | 'MO'
  /** Northern Mariana Islands */
  | 'MP'
  /** Martinique */
  | 'MQ'
  /** Mauritania */
  | 'MR'
  /** Montserrat */
  | 'MS'
  /** Malta */
  | 'MT'
  /** Mauritius */
  | 'MU'
  /** Maldives */
  | 'MV'
  /** Malawi */
  | 'MW'
  /** Mexico */
  | 'MX'
  /** Malaysia */
  | 'MY'
  /** Mozambique */
  | 'MZ'
  /** Namibia */
  | 'NA'
  /** New Caledonia */
  | 'NC'
  /** Niger */
  | 'NE'
  /** Norfolk Island */
  | 'NF'
  /** Nigeria */
  | 'NG'
  /** Nicaragua */
  | 'NI'
  /** Netherlands */
  | 'NL'
  /** Norway */
  | 'NO'
  /** Nepal */
  | 'NP'
  /** Nauru */
  | 'NR'
  /** Niue */
  | 'NU'
  /** New Zealand */
  | 'NZ'
  /** Oman */
  | 'OM'
  /** Panama */
  | 'PA'
  /** Peru */
  | 'PE'
  /** French Polynesia */
  | 'PF'
  /** Papua New Guinea */
  | 'PG'
  /** Philippines */
  | 'PH'
  /** Pakistan */
  | 'PK'
  /** Poland */
  | 'PL'
  /** St. Pierre & Miquelon */
  | 'PM'
  /** Pitcairn Islands */
  | 'PN'
  /** Palestinian Territories */
  | 'PS'
  /** Portugal */
  | 'PT'
  /** Palau */
  | 'PW'
  /** Paraguay */
  | 'PY'
  /** Qatar */
  | 'QA'
  /** Réunion */
  | 'RE'
  /** Romania */
  | 'RO'
  /** Serbia */
  | 'RS'
  /** Russia */
  | 'RU'
  /** Rwanda */
  | 'RW'
  /** Saudi Arabia */
  | 'SA'
  /** Solomon Islands */
  | 'SB'
  /** Seychelles */
  | 'SC'
  /** Sudan */
  | 'SD'
  /** Sweden */
  | 'SE'
  /** Singapore */
  | 'SG'
  /** St. Helena */
  | 'SH'
  /** Slovenia */
  | 'SI'
  /** Svalbard & Jan Mayen */
  | 'SJ'
  /** Slovakia */
  | 'SK'
  /** Sierra Leone */
  | 'SL'
  /** San Marino */
  | 'SM'
  /** Senegal */
  | 'SN'
  /** Somalia */
  | 'SO'
  /** Suriname */
  | 'SR'
  /** São Tomé & Príncipe */
  | 'ST'
  /** El Salvador */
  | 'SV'
  /** Syria */
  | 'SY'
  /** Swaziland */
  | 'SZ'
  /** Turks & Caicos Islands */
  | 'TC'
  /** Chad */
  | 'TD'
  /** French Southern Territories */
  | 'TF'
  /** Togo */
  | 'TG'
  /** Thailand */
  | 'TH'
  /** Tajikistan */
  | 'TJ'
  /** Tokelau */
  | 'TK'
  /** Timor-Leste */
  | 'TL'
  /** Turkmenistan */
  | 'TM'
  /** Tunisia */
  | 'TN'
  /** Tonga */
  | 'TO'
  /** Turkey */
  | 'TR'
  /** Trinidad & Tobago */
  | 'TT'
  /** Tuvalu */
  | 'TV'
  /** Taiwan */
  | 'TW'
  /** Tanzania */
  | 'TZ'
  /** Ukraine */
  | 'UA'
  /** Uganda */
  | 'UG'
  /** U.S. Outlying Islands */
  | 'UM'
  /** United States */
  | 'US'
  /** Uruguay */
  | 'UY'
  /** Uzbekistan */
  | 'UZ'
  /** Vatican City */
  | 'VA'
  /** St. Vincent & Grenadines */
  | 'VC'
  /** Venezuela */
  | 'VE'
  /** British Virgin Islands */
  | 'VG'
  /** U.S. Virgin Islands */
  | 'VI'
  /** Vietnam */
  | 'VN'
  /** Vanuatu */
  | 'VU'
  /** Wallis & Futuna */
  | 'WF'
  /** Samoa */
  | 'WS'
  /** Yemen */
  | 'YE'
  /** Mayotte */
  | 'YT'
  /** South Africa */
  | 'ZA'
  /** Zambia */
  | 'ZM'
  /** Zimbabwe */
  | 'ZW';

export type CreateCartRedirectUrls = {
  __typename?: 'CreateCartRedirectUrls';
  data?: Maybe<RedirectUrls>;
};

/** Contains an array of product IDs to use for creating a compare list. */
export type CreateCompareListInput = {
  /** An array of product IDs to add to the compare list. */
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

/** Defines a new gift registry. */
export type CreateGiftRegistryInput = {
  /** Additional attributes specified as a code-value pair. */
  dynamic_attributes?: InputMaybe<Array<InputMaybe<GiftRegistryDynamicAttributeInput>>>;
  /** The name of the event. */
  event_name: Scalars['String'];
  /** The ID of the selected event type. */
  gift_registry_type_uid: Scalars['ID'];
  /** A message describing the event. */
  message: Scalars['String'];
  /** Indicates whether the registry is PRIVATE or PUBLIC. */
  privacy_settings: GiftRegistryPrivacySettings;
  /** The list of people who receive notifications about the registry. */
  registrants: Array<InputMaybe<AddGiftRegistryRegistrantInput>>;
  /** The shipping address for all gift registry items. */
  shipping_address?: InputMaybe<GiftRegistryShippingAddressInput>;
  /** Indicates whether the registry is ACTIVE or INACTIVE. */
  status: GiftRegistryStatus;
};

/** Contains the results of a request to create a gift registry. */
export type CreateGiftRegistryOutput = {
  __typename?: 'CreateGiftRegistryOutput';
  /** The newly-created gift registry. */
  gift_registry?: Maybe<GiftRegistry>;
};

/** Contains the secure information used to authorize transaction. Applies to Payflow Pro and Payments Pro payment methods. */
export type CreatePayflowProTokenOutput = {
  __typename?: 'CreatePayflowProTokenOutput';
  /** The RESPMSG returned by PayPal. If the `result` is `0`, then `response_message` is `Approved`. */
  response_message: Scalars['String'];
  /** A non-zero value if any errors occurred. */
  result: Scalars['Int'];
  /** The RESULT returned by PayPal. A value of `0` indicates the transaction was approved. */
  result_code: Scalars['Int'];
  /** A secure token generated by PayPal. */
  secure_token: Scalars['String'];
  /** A secure token ID generated by PayPal. */
  secure_token_id: Scalars['String'];
};

/** Defines a new product review. */
export type CreateProductReviewInput = {
  /** The customer's nickname. Defaults to the customer name, if logged in. */
  nickname: Scalars['String'];
  /** The ratings details by category. For example, Price: 5 stars, Quality: 4 stars, etc. */
  ratings: Array<InputMaybe<ProductReviewRatingInput>>;
  /** The SKU of the reviewed product. */
  sku: Scalars['String'];
  /** The summary (title) of the review. */
  summary: Scalars['String'];
  /** The review text. */
  text: Scalars['String'];
};

/** Contains the completed product review. */
export type CreateProductReviewOutput = {
  __typename?: 'CreateProductReviewOutput';
  /** Product review details. */
  review: ProductReview;
};

/** Defines the name and visibility of a new wish list. */
export type CreateWishlistInput = {
  /** The name of the new wish list. */
  name: Scalars['String'];
  /** Indicates whether the wish list is public or private. */
  visibility: WishlistVisibilityEnum;
};

/** Contains the wish list. */
export type CreateWishlistOutput = {
  __typename?: 'CreateWishlistOutput';
  /** The newly-created wish list */
  wishlist: Wishlist;
};

/** Required fields for Payflow Pro and Payments Pro credit card payments. */
export type CreditCardDetailsInput = {
  /** The credit card expiration month. */
  cc_exp_month: Scalars['Int'];
  /** The credit card expiration year. */
  cc_exp_year: Scalars['Int'];
  /** The last 4 digits of the credit card. */
  cc_last_4: Scalars['Int'];
  /** The credit card type. */
  cc_type: Scalars['String'];
};

/** Contains credit memo details. */
export type CreditMemo = {
  __typename?: 'CreditMemo';
  /** Comments on the credit memo. */
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** The unique ID for a `CreditMemo` object. */
  id: Scalars['ID'];
  /** An array containing details about refunded items. */
  items?: Maybe<Array<Maybe<CreditMemoItemInterface>>>;
  /** The sequential credit memo number. */
  number: Scalars['String'];
  /** Details about the total refunded amount. */
  total?: Maybe<CreditMemoTotal>;
};

export type CreditMemoItem = CreditMemoItemInterface & {
  __typename?: 'CreditMemoItem';
  /** Details about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for a `CreditMemoItemInterface` object. */
  id: Scalars['ID'];
  /** The order item the credit memo is applied to. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String'];
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']>;
};

/** Credit memo item details. */
export type CreditMemoItemInterface = {
  /** Details about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for a `CreditMemoItemInterface` object. */
  id: Scalars['ID'];
  /** The order item the credit memo is applied to. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String'];
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']>;
};

/** Contains credit memo price details. */
export type CreditMemoTotal = {
  __typename?: 'CreditMemoTotal';
  /** An adjustment manually applied to the order. */
  adjustment: Money;
  /** The final base grand total amount in the base currency. */
  base_grand_total: Money;
  /** The applied discounts to the credit memo. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The final total amount, including shipping, discounts, and taxes. */
  grand_total: Money;
  /** Details about the shipping and handling costs for the credit memo. */
  shipping_handling?: Maybe<ShippingHandling>;
  /** The subtotal of the invoice, excluding shipping, discounts, and taxes. */
  subtotal: Money;
  /** The credit memo tax details. */
  taxes?: Maybe<Array<Maybe<TaxItem>>>;
  /** The shipping amount for the credit memo. */
  total_shipping: Money;
  /** The amount of tax applied to the credit memo. */
  total_tax: Money;
};

export type Currency = {
  __typename?: 'Currency';
  /** An array of three-letter currency codes accepted by the store, such as USD and EUR. */
  available_currency_codes?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The base currency set for the store, such as USD. */
  base_currency_code?: Maybe<Scalars['String']>;
  /** The symbol for the specified base currency, such as $. */
  base_currency_symbol?: Maybe<Scalars['String']>;
  /** @deprecated Symbol was missed. Use `default_display_currency_code`. */
  default_display_currecy_code?: Maybe<Scalars['String']>;
  /** @deprecated Symbol was missed. Use `default_display_currency_code`. */
  default_display_currecy_symbol?: Maybe<Scalars['String']>;
  /** The currency that is displayed by default, such as USD. */
  default_display_currency_code?: Maybe<Scalars['String']>;
  /** The currency symbol that is displayed by default, such as $. */
  default_display_currency_symbol?: Maybe<Scalars['String']>;
  /** An array of exchange rates for currencies defined in the store. */
  exchange_rates?: Maybe<Array<Maybe<ExchangeRate>>>;
};

/** The list of available currency codes. */
export type CurrencyEnum =
  | 'AED'
  | 'AFN'
  | 'ALL'
  | 'AMD'
  | 'ANG'
  | 'AOA'
  | 'ARS'
  | 'AUD'
  | 'AWG'
  | 'AZM'
  | 'AZN'
  | 'BAM'
  | 'BBD'
  | 'BDT'
  | 'BGN'
  | 'BHD'
  | 'BIF'
  | 'BMD'
  | 'BND'
  | 'BOB'
  | 'BRL'
  | 'BSD'
  | 'BTN'
  | 'BUK'
  | 'BWP'
  | 'BYN'
  | 'BZD'
  | 'CAD'
  | 'CDF'
  | 'CHE'
  | 'CHF'
  | 'CHW'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'CRC'
  | 'CUP'
  | 'CVE'
  | 'CZK'
  | 'DJF'
  | 'DKK'
  | 'DOP'
  | 'DZD'
  | 'EEK'
  | 'EGP'
  | 'ERN'
  | 'ETB'
  | 'EUR'
  | 'FJD'
  | 'FKP'
  | 'GBP'
  | 'GEK'
  | 'GEL'
  | 'GHS'
  | 'GIP'
  | 'GMD'
  | 'GNF'
  | 'GQE'
  | 'GTQ'
  | 'GYD'
  | 'HKD'
  | 'HNL'
  | 'HRK'
  | 'HTG'
  | 'HUF'
  | 'IDR'
  | 'ILS'
  | 'INR'
  | 'IQD'
  | 'IRR'
  | 'ISK'
  | 'JMD'
  | 'JOD'
  | 'JPY'
  | 'KES'
  | 'KGS'
  | 'KHR'
  | 'KMF'
  | 'KPW'
  | 'KRW'
  | 'KWD'
  | 'KYD'
  | 'KZT'
  | 'LAK'
  | 'LBP'
  | 'LKR'
  | 'LRD'
  | 'LSL'
  | 'LSM'
  | 'LTL'
  | 'LVL'
  | 'LYD'
  | 'MAD'
  | 'MDL'
  | 'MGA'
  | 'MKD'
  | 'MMK'
  | 'MNT'
  | 'MOP'
  | 'MRO'
  | 'MUR'
  | 'MVR'
  | 'MWK'
  | 'MXN'
  | 'MYR'
  | 'MZN'
  | 'NAD'
  | 'NGN'
  | 'NIC'
  | 'NOK'
  | 'NPR'
  | 'NZD'
  | 'OMR'
  | 'PAB'
  | 'PEN'
  | 'PGK'
  | 'PHP'
  | 'PKR'
  | 'PLN'
  | 'PYG'
  | 'QAR'
  | 'RHD'
  | 'ROL'
  | 'RON'
  | 'RSD'
  | 'RUB'
  | 'RWF'
  | 'SAR'
  | 'SBD'
  | 'SCR'
  | 'SDG'
  | 'SEK'
  | 'SGD'
  | 'SHP'
  | 'SKK'
  | 'SLL'
  | 'SOS'
  | 'SRD'
  | 'STD'
  | 'SVC'
  | 'SYP'
  | 'SZL'
  | 'THB'
  | 'TJS'
  | 'TMM'
  | 'TND'
  | 'TOP'
  | 'TRL'
  | 'TRY'
  | 'TTD'
  | 'TWD'
  | 'TZS'
  | 'UAH'
  | 'UGX'
  | 'USD'
  | 'UYU'
  | 'UZS'
  | 'VEB'
  | 'VEF'
  | 'VND'
  | 'VUV'
  | 'WST'
  | 'XCD'
  | 'XOF'
  | 'XPF'
  | 'YER'
  | 'YTL'
  | 'ZAR'
  | 'ZMK'
  | 'ZWD';

/** Contains custom attribute value and metadata details. */
export type CustomAttribute = {
  __typename?: 'CustomAttribute';
  /** Attribute metadata details. */
  attribute_metadata?: Maybe<AttributeMetadataInterface>;
  /** Attribute value represented as entered data using input type like text field. */
  entered_attribute_value?: Maybe<EnteredAttributeValue>;
  /** Attribute value represented as selected options using input type like select. */
  selected_attribute_options?: Maybe<SelectedAttributeOption>;
};

/** Defines an array of custom attributes. */
export type CustomAttributeMetadata = {
  __typename?: 'CustomAttributeMetadata';
  /** An array of attributes. */
  items?: Maybe<Array<Maybe<Attribute>>>;
};

export type CustomAttributesListsEnum =
  | 'ADVANCED_CATALOG_SEARCH'
  | 'PRODUCTS_COMPARE'
  | 'PRODUCTS_LISTING'
  | 'PRODUCT_DETAILS_PAGE'
  | 'PRODUCT_FILTER'
  | 'PRODUCT_SEARCH_RESULTS_FILTER'
  | 'PRODUCT_SORT';

/** Defines the customer name, addresses, and other details. */
export type Customer = {
  __typename?: 'Customer';
  /** An array containing the customer's shipping and billing addresses. */
  addresses?: Maybe<Array<Maybe<CustomerAddress>>>;
  /** Indicates whether the customer has enabled remote shopping assistance. */
  allow_remote_shopping_assistance: Scalars['Boolean'];
  /** The contents of the customer's compare list. */
  compare_list?: Maybe<CompareList>;
  /** Timestamp indicating when the account was created. */
  created_at?: Maybe<Scalars['String']>;
  /** The customer's date of birth. */
  date_of_birth?: Maybe<Scalars['String']>;
  /** The ID assigned to the billing address. */
  default_billing?: Maybe<Scalars['String']>;
  /** The ID assigned to the shipping address. */
  default_shipping?: Maybe<Scalars['String']>;
  /**
   * The customer's date of birth.
   * @deprecated Use `date_of_birth` instead.
   */
  dob?: Maybe<Scalars['String']>;
  /** The customer's email address. Required. */
  email?: Maybe<Scalars['String']>;
  /** The customer's first name. */
  firstname?: Maybe<Scalars['String']>;
  /** The customer's gender (Male - 1, Female - 2). */
  gender?: Maybe<Scalars['Int']>;
  /** Details about all of the customer's gift registries. */
  gift_registries?: Maybe<Array<Maybe<GiftRegistry>>>;
  /** Details about a specific gift registry. */
  gift_registry?: Maybe<GiftRegistry>;
  /** @deprecated Customer group should not be exposed in the storefront scenarios. */
  group_id?: Maybe<Scalars['Int']>;
  /**
   * The ID assigned to the customer.
   * @deprecated `id` is not needed as part of `Customer`, because on the server side, it can be identified based on the customer token used for authentication. There is no need to know customer ID on the client side.
   */
  id?: Maybe<Scalars['Int']>;
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed?: Maybe<Scalars['Boolean']>;
  /** The customer's family name. */
  lastname?: Maybe<Scalars['String']>;
  /** The customer's middle name. */
  middlename?: Maybe<Scalars['String']>;
  orders?: Maybe<CustomerOrders>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']>;
  /** Details about the specified return request from the unique ID for a `Return` object. */
  return?: Maybe<Return>;
  /** Information about the customer's return requests. */
  returns?: Maybe<Returns>;
  /** Contains the customer's product reviews. */
  reviews: ProductReviews;
  /** Customer reward points details. */
  reward_points?: Maybe<RewardPoints>;
  /** Store credit information applied for the logged in customer. */
  store_credit?: Maybe<CustomerStoreCredit>;
  /** A value such as Sr., Jr., or III. */
  suffix?: Maybe<Scalars['String']>;
  /** The customer's Value-added tax (VAT) number (for corporate customers). */
  taxvat?: Maybe<Scalars['String']>;
  /**
   * Return a customer's wish lists.
   * @deprecated Use `Customer.wishlists` or `Customer.wishlist_v2` instead.
   */
  wishlist: Wishlist;
  /** Retrieve the wish list identified by the unique ID for a `Wishlist` object. */
  wishlist_v2?: Maybe<Wishlist>;
  /** An array of wishlists. In Magento Open Source, customers are limited to one wish list. The number of wish lists is configurable for Adobe Commerce. */
  wishlists: Array<Maybe<Wishlist>>;
};


/** Defines the customer name, addresses, and other details. */
export type CustomerGift_RegistryArgs = {
  giftRegistryUid: Scalars['ID'];
};


/** Defines the customer name, addresses, and other details. */
export type CustomerOrdersArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<CustomerOrdersFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']>;
  scope?: InputMaybe<ScopeTypeEnum>;
  sort?: InputMaybe<CustomerOrderSortInput>;
};


/** Defines the customer name, addresses, and other details. */
export type CustomerReturnArgs = {
  uid: Scalars['ID'];
};


/** Defines the customer name, addresses, and other details. */
export type CustomerReturnsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


/** Defines the customer name, addresses, and other details. */
export type CustomerReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


/** Defines the customer name, addresses, and other details. */
export type CustomerWishlist_V2Args = {
  id: Scalars['ID'];
};


/** Defines the customer name, addresses, and other details. */
export type CustomerWishlistsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

/** Contains detailed information about a customer's billing or shipping address. */
export type CustomerAddress = {
  __typename?: 'CustomerAddress';
  /** The customer's city or town. */
  city?: Maybe<Scalars['String']>;
  /** The customer's company. */
  company?: Maybe<Scalars['String']>;
  /** The customer's country. */
  country_code?: Maybe<CountryCodeEnum>;
  /**
   * The customer's country.
   * @deprecated Use `country_code` instead.
   */
  country_id?: Maybe<Scalars['String']>;
  /** @deprecated Custom attributes should not be put into a container. */
  custom_attributes?: Maybe<Array<Maybe<CustomerAddressAttribute>>>;
  /**
   * The customer ID
   * @deprecated `customer_id` is not needed as part of `CustomerAddress`. The `id` is a unique identifier for the addresses.
   */
  customer_id?: Maybe<Scalars['Int']>;
  /** Indicates whether the address is the customer's default billing address. */
  default_billing?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the address is the customer's default shipping address. */
  default_shipping?: Maybe<Scalars['Boolean']>;
  /** Contains any extension attributes for the address. */
  extension_attributes?: Maybe<Array<Maybe<CustomerAddressAttribute>>>;
  /** The customer's fax number. */
  fax?: Maybe<Scalars['String']>;
  /** The first name of the person associated with the shipping/billing address. */
  firstname?: Maybe<Scalars['String']>;
  /** The ID of a `CustomerAddress` object. */
  id?: Maybe<Scalars['Int']>;
  /** The family name of the person associated with the shipping/billing address. */
  lastname?: Maybe<Scalars['String']>;
  /** The middle name of the person associated with the shipping/billing address. */
  middlename?: Maybe<Scalars['String']>;
  /** The customer's ZIP or postal code. */
  postcode?: Maybe<Scalars['String']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']>;
  /** An object containing the region name, region code, and region ID. */
  region?: Maybe<CustomerAddressRegion>;
  /** The unique ID for a pre-defined region. */
  region_id?: Maybe<Scalars['Int']>;
  /** An array of strings that define the street number and name. */
  street?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** A value such as Sr., Jr., or III. */
  suffix?: Maybe<Scalars['String']>;
  /** The customer's telephone number. */
  telephone?: Maybe<Scalars['String']>;
  /** The customer's Value-added tax (VAT) number (for corporate customers). */
  vat_id?: Maybe<Scalars['String']>;
};

/** Specifies the attribute code and value of a customer address attribute. */
export type CustomerAddressAttribute = {
  __typename?: 'CustomerAddressAttribute';
  /** The name assigned to the customer address attribute. */
  attribute_code?: Maybe<Scalars['String']>;
  /** The valuue assigned to the customer address attribute. */
  value?: Maybe<Scalars['String']>;
};

/** Specifies the attribute code and value of a customer attribute. */
export type CustomerAddressAttributeInput = {
  /** The name assigned to the attribute. */
  attribute_code: Scalars['String'];
  /** The value assigned to the attribute. */
  value: Scalars['String'];
};

/** Contains details about a billing or shipping address. */
export type CustomerAddressInput = {
  /** The customer's city or town. */
  city?: InputMaybe<Scalars['String']>;
  /** The customer's company. */
  company?: InputMaybe<Scalars['String']>;
  /** The two-letter code representing the customer's country. */
  country_code?: InputMaybe<CountryCodeEnum>;
  /** Deprecated: use `country_code` instead. */
  country_id?: InputMaybe<CountryCodeEnum>;
  /** Deprecated: Custom attributes should not be put into container. */
  custom_attributes?: InputMaybe<Array<InputMaybe<CustomerAddressAttributeInput>>>;
  /** Indicates whether the address is the default billing address. */
  default_billing?: InputMaybe<Scalars['Boolean']>;
  /** Indicates whether the address is the default shipping address. */
  default_shipping?: InputMaybe<Scalars['Boolean']>;
  /** The customer's fax number. */
  fax?: InputMaybe<Scalars['String']>;
  /** The first name of the person associated with the billing/shipping address. */
  firstname?: InputMaybe<Scalars['String']>;
  /** The family name of the person associated with the billing/shipping address. */
  lastname?: InputMaybe<Scalars['String']>;
  /** The middle name of the person associated with the billing/shipping address. */
  middlename?: InputMaybe<Scalars['String']>;
  /** The customer's ZIP or postal code. */
  postcode?: InputMaybe<Scalars['String']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']>;
  /** An object containing the region name, region code, and region ID. */
  region?: InputMaybe<CustomerAddressRegionInput>;
  /** An array of strings that define the street number and name. */
  street?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** A value such as Sr., Jr., or III. */
  suffix?: InputMaybe<Scalars['String']>;
  /** The customer's telephone number. */
  telephone?: InputMaybe<Scalars['String']>;
  /** The customer's Tax/VAT number (for corporate customers). */
  vat_id?: InputMaybe<Scalars['String']>;
};

/** Defines the customer's state or province. */
export type CustomerAddressRegion = {
  __typename?: 'CustomerAddressRegion';
  /** The state or province name. */
  region?: Maybe<Scalars['String']>;
  /** The address region code. */
  region_code?: Maybe<Scalars['String']>;
  /** The unique ID for a pre-defined region. */
  region_id?: Maybe<Scalars['Int']>;
};

/** Defines the customer's state or province. */
export type CustomerAddressRegionInput = {
  /** The state or province name. */
  region?: InputMaybe<Scalars['String']>;
  /** The address region code. */
  region_code?: InputMaybe<Scalars['String']>;
  /** The unique ID for a pre-defined region. */
  region_id?: InputMaybe<Scalars['Int']>;
};

/** An input object for creating a customer. */
export type CustomerCreateInput = {
  /** Indicates whether the customer has enabled remote shopping assistance. */
  allow_remote_shopping_assistance?: InputMaybe<Scalars['Boolean']>;
  /** The customer's date of birth. */
  date_of_birth?: InputMaybe<Scalars['String']>;
  /** Deprecated: Use `date_of_birth` instead. */
  dob?: InputMaybe<Scalars['String']>;
  /** The customer's email address. */
  email: Scalars['String'];
  /** The customer's first name. */
  firstname: Scalars['String'];
  /** The customer's gender (Male - 1, Female - 2). */
  gender?: InputMaybe<Scalars['Int']>;
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed?: InputMaybe<Scalars['Boolean']>;
  /** The customer's family name. */
  lastname: Scalars['String'];
  /** The customer's middle name. */
  middlename?: InputMaybe<Scalars['String']>;
  /** The customer's password. */
  password?: InputMaybe<Scalars['String']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']>;
  /** A value such as Sr., Jr., or III. */
  suffix?: InputMaybe<Scalars['String']>;
  /** The customer's Tax/VAT number (for corporate customers). */
  taxvat?: InputMaybe<Scalars['String']>;
};

/** Contains details about a single downloadable product. */
export type CustomerDownloadableProduct = {
  __typename?: 'CustomerDownloadableProduct';
  /** The date and time the purchase was made. */
  date?: Maybe<Scalars['String']>;
  /** The fully qualified URL to the download file. */
  download_url?: Maybe<Scalars['String']>;
  /** The unique ID assigned to the item. */
  order_increment_id?: Maybe<Scalars['String']>;
  /** The remaining number of times the customer can download the product. */
  remaining_downloads?: Maybe<Scalars['String']>;
  /** Indicates when the product becomes available for download. Options are `Pending` and `Invoiced`. */
  status?: Maybe<Scalars['String']>;
};

/** Contains a list of downloadable products. */
export type CustomerDownloadableProducts = {
  __typename?: 'CustomerDownloadableProducts';
  /** An array of purchased downloadable items. */
  items?: Maybe<Array<Maybe<CustomerDownloadableProduct>>>;
};

/** An input object that assigns or updates customer attributes. */
export type CustomerInput = {
  /** The customer's date of birth. */
  date_of_birth?: InputMaybe<Scalars['String']>;
  /** Deprecated: Use `date_of_birth` instead. */
  dob?: InputMaybe<Scalars['String']>;
  /** The customer's email address. Required when creating a customer. */
  email?: InputMaybe<Scalars['String']>;
  /** The customer's first name. */
  firstname?: InputMaybe<Scalars['String']>;
  /** The customer's gender (Male - 1, Female - 2). */
  gender?: InputMaybe<Scalars['Int']>;
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed?: InputMaybe<Scalars['Boolean']>;
  /** The customer's family name. */
  lastname?: InputMaybe<Scalars['String']>;
  /** The customer's middle name. */
  middlename?: InputMaybe<Scalars['String']>;
  /** The customer's password. */
  password?: InputMaybe<Scalars['String']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']>;
  /** A value such as Sr., Jr., or III. */
  suffix?: InputMaybe<Scalars['String']>;
  /** The customer's Tax/VAT number (for corporate customers). */
  taxvat?: InputMaybe<Scalars['String']>;
};

/** Contains details about each of the customer's orders. */
export type CustomerOrder = {
  __typename?: 'CustomerOrder';
  /** The billing address for the order. */
  billing_address?: Maybe<OrderAddress>;
  /** The shipping carrier for the order delivery. */
  carrier?: Maybe<Scalars['String']>;
  /** Comments about the order. */
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** @deprecated Use the `order_date` field instead. */
  created_at?: Maybe<Scalars['String']>;
  /** A list of credit memos. */
  credit_memos?: Maybe<Array<Maybe<CreditMemo>>>;
  /** Order Currency code */
  currency_code: Scalars['String'];
  deliveryInstructions?: Maybe<DeliveryInstructions>;
  /** The entered gift message for the order */
  gift_message?: Maybe<GiftMessage>;
  /** Indicates whether the customer requested a gift receipt for the order. */
  gift_receipt_included: Scalars['Boolean'];
  /** The selected gift wrapping for the order. */
  gift_wrapping?: Maybe<GiftWrapping>;
  /** @deprecated Use the `totals.grand_total` field instead. */
  grand_total?: Maybe<Scalars['Float']>;
  /** The unique ID for a `CustomerOrder` object. */
  id: Scalars['ID'];
  /** @deprecated Use the `id` field instead. */
  increment_id?: Maybe<Scalars['String']>;
  /** A list of invoices for the order */
  invoices: Array<Maybe<Invoice>>;
  /** An array containing the items purchased in this order. */
  items?: Maybe<Array<Maybe<OrderItemInterface>>>;
  /** A list of order items eligible to be in a return request. */
  items_eligible_for_return?: Maybe<Array<Maybe<OrderItemInterface>>>;
  /** The order number. */
  number: Scalars['String'];
  /** The date the order was placed. */
  order_date: Scalars['String'];
  /** @deprecated Use the `number` field instead. */
  order_number: Scalars['String'];
  /** Payment details for the order. */
  payment_methods?: Maybe<Array<Maybe<OrderPaymentMethod>>>;
  /** Indicates whether the customer requested a printed card for the order. */
  printed_card_included: Scalars['Boolean'];
  /** Return requests associated with this order. */
  returns?: Maybe<Returns>;
  /** A list of shipments for the order. */
  shipments?: Maybe<Array<Maybe<OrderShipment>>>;
  /** The shipping address for the order. */
  shipping_address?: Maybe<OrderAddress>;
  /** The delivery method for the order. */
  shipping_method?: Maybe<Scalars['String']>;
  /** The current state of the order. */
  state: Scalars['String'];
  /** The current status of the order. */
  status: Scalars['String'];
  /** Details about the calculated totals for this order. */
  total?: Maybe<OrderTotal>;
};


/** Contains details about each of the customer's orders. */
export type CustomerOrderReturnsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

/** CustomerOrderSortInput specifies the field to use for sorting search results and indicates whether the results are sorted in ascending or descending order. */
export type CustomerOrderSortInput = {
  /** This enumeration indicates whether to return results in ascending or descending order */
  sort_direction: SortEnum;
  /** Specifies the field to use for sorting */
  sort_field: CustomerOrderSortableField;
};

/** Specifies the field to use for sorting */
export type CustomerOrderSortableField =
  /** Sorts customer orders by created_at field */
  | 'CREATED_AT'
  /** Sorts customer orders by number */
  | 'NUMBER';

/** The collection of orders that match the conditions defined in the filter. */
export type CustomerOrders = {
  __typename?: 'CustomerOrders';
  /** An array of customer orders. */
  items: Array<Maybe<CustomerOrder>>;
  /** Contains pagination metadata. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The total count of customer orders. */
  total_count?: Maybe<Scalars['Int']>;
};

/** Identifies the filter to use for filtering orders. */
export type CustomerOrdersFilterInput = {
  /** Filters by order number. */
  number?: InputMaybe<FilterStringTypeInput>;
};

/** Contains details about a newly-created or updated customer. */
export type CustomerOutput = {
  __typename?: 'CustomerOutput';
  /** Customer details after creating or updating a customer. */
  customer: Customer;
};

/** Contains payment tokens stored in the customer's vault. */
export type CustomerPaymentTokens = {
  __typename?: 'CustomerPaymentTokens';
  /** An array of payment tokens. */
  items: Array<Maybe<PaymentToken>>;
};

/** Contains store credit information with balance and history. */
export type CustomerStoreCredit = {
  __typename?: 'CustomerStoreCredit';
  /** Contains the customer's store credit balance history. If the history or store credit feature is disabled, then a null value will be returned. */
  balance_history?: Maybe<CustomerStoreCreditHistory>;
  /** The current balance of store credit. */
  current_balance?: Maybe<Money>;
  /** Indicates whether store credits are enabled. If the feature is disabled, then the balance will not be returned. */
  enabled?: Maybe<Scalars['Boolean']>;
};


/** Contains store credit information with balance and history. */
export type CustomerStoreCreditBalance_HistoryArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

/** Lists changes to the amount of store credit available to the customer. */
export type CustomerStoreCreditHistory = {
  __typename?: 'CustomerStoreCreditHistory';
  /** An array containing information about changes to the store credit available to the customer. */
  items?: Maybe<Array<Maybe<CustomerStoreCreditHistoryItem>>>;
  /** Metadata for pagination rendering. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The number of items returned. */
  total_count?: Maybe<Scalars['Int']>;
};

/** Contains store credit history information. */
export type CustomerStoreCreditHistoryItem = {
  __typename?: 'CustomerStoreCreditHistoryItem';
  /** The action that was made on the store credit. */
  action?: Maybe<Scalars['String']>;
  /** The store credit available to the customer as a result of this action. */
  actual_balance?: Maybe<Money>;
  /** The amount added to or subtracted from the store credit as a result of this action. */
  balance_change?: Maybe<Money>;
  /** The date and time when the store credit change was made. */
  date_time_changed?: Maybe<Scalars['String']>;
};

/** Contains a customer authorization token. */
export type CustomerToken = {
  __typename?: 'CustomerToken';
  /** The customer authorization token. */
  token?: Maybe<Scalars['String']>;
};

/** An input object for updating a customer. */
export type CustomerUpdateInput = {
  /** Indicates whether the customer has enabled remote shopping assistance. */
  allow_remote_shopping_assistance?: InputMaybe<Scalars['Boolean']>;
  /** The customer's date of birth. */
  date_of_birth?: InputMaybe<Scalars['String']>;
  /** Deprecated: Use `date_of_birth` instead. */
  dob?: InputMaybe<Scalars['String']>;
  /** The customer's first name. */
  firstname?: InputMaybe<Scalars['String']>;
  /** The customer's gender (Male - 1, Female - 2). */
  gender?: InputMaybe<Scalars['Int']>;
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed?: InputMaybe<Scalars['Boolean']>;
  /** The customer's family name. */
  lastname?: InputMaybe<Scalars['String']>;
  /** The customer's middle name. */
  middlename?: InputMaybe<Scalars['String']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']>;
  /** A value such as Sr., Jr., or III. */
  suffix?: InputMaybe<Scalars['String']>;
  /** The customer's Tax/VAT number (for corporate customers). */
  taxvat?: InputMaybe<Scalars['String']>;
};

/** Contains information about a text area that is defined as part of a customizable option. */
export type CustomizableAreaOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableAreaOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID'];
  /** An object that defines a text area. */
  value?: Maybe<CustomizableAreaValue>;
};

/** Defines the price and sku of a product whose page contains a customized text area. */
export type CustomizableAreaValue = {
  __typename?: 'CustomizableAreaValue';
  /** The maximum number of characters that can be entered for this customizable option. */
  max_characters?: Maybe<Scalars['Int']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableAreaValue` object. */
  uid: Scalars['ID'];
};

/** Contains information about a set of checkbox values that are defined as part of a customizable option. */
export type CustomizableCheckboxOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableCheckboxOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID'];
  /** An array that defines a set of checkbox values. */
  value?: Maybe<Array<Maybe<CustomizableCheckboxValue>>>;
};

/** Defines the price and sku of a product whose page contains a customized set of checkbox values. */
export type CustomizableCheckboxValue = {
  __typename?: 'CustomizableCheckboxValue';
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The order in which the checkbox value is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableCheckboxValue` object. */
  uid: Scalars['ID'];
};

/** Contains information about a date picker that is defined as part of a customizable option. */
export type CustomizableDateOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableDateOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID'];
  /** An object that defines a date field in a customizable option. */
  value?: Maybe<CustomizableDateValue>;
};

/** Defines the customizable date type. */
export type CustomizableDateTypeEnum =
  | 'DATE'
  | 'DATE_TIME'
  | 'TIME';

/** Defines the price and sku of a product whose page contains a customized date picker. */
export type CustomizableDateValue = {
  __typename?: 'CustomizableDateValue';
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** DATE, DATE_TIME or TIME */
  type?: Maybe<CustomizableDateTypeEnum>;
  /** The unique ID for a `CustomizableDateValue` object. */
  uid: Scalars['ID'];
};

/** Contains information about a drop down menu that is defined as part of a customizable option. */
export type CustomizableDropDownOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableDropDownOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID'];
  /** An array that defines the set of options for a drop down menu. */
  value?: Maybe<Array<Maybe<CustomizableDropDownValue>>>;
};

/** Defines the price and sku of a product whose page contains a customized drop down menu. */
export type CustomizableDropDownValue = {
  __typename?: 'CustomizableDropDownValue';
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableDropDownValue` object. */
  uid: Scalars['ID'];
};

/** Contains information about a text field that is defined as part of a customizable option. */
export type CustomizableFieldOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableFieldOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID'];
  /** An object that defines a text field. */
  value?: Maybe<CustomizableFieldValue>;
};

/** Defines the price and sku of a product whose page contains a customized text field. */
export type CustomizableFieldValue = {
  __typename?: 'CustomizableFieldValue';
  /** The maximum number of characters that can be entered for this customizable option. */
  max_characters?: Maybe<Scalars['Int']>;
  /** The price of the custom value. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableFieldValue` object. */
  uid: Scalars['ID'];
};

/** Contains information about a file picker that is defined as part of a customizable option. */
export type CustomizableFileOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableFileOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID'];
  /** An object that defines a file value. */
  value?: Maybe<CustomizableFileValue>;
};

/** Defines the price and sku of a product whose page contains a customized file picker. */
export type CustomizableFileValue = {
  __typename?: 'CustomizableFileValue';
  /** The file extension to accept. */
  file_extension?: Maybe<Scalars['String']>;
  /** The maximum width of an image. */
  image_size_x?: Maybe<Scalars['Int']>;
  /** The maximum height of an image. */
  image_size_y?: Maybe<Scalars['Int']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableFileValue` object. */
  uid: Scalars['ID'];
};

/** Contains information about a multiselect that is defined as part of a customizable option. */
export type CustomizableMultipleOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableMultipleOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID'];
  /** An array that defines the set of options for a multiselect. */
  value?: Maybe<Array<Maybe<CustomizableMultipleValue>>>;
};

/** Defines the price and sku of a product whose page contains a customized multiselect. */
export type CustomizableMultipleValue = {
  __typename?: 'CustomizableMultipleValue';
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableMultipleValue` object. */
  uid: Scalars['ID'];
};

/** Defines a customizable option. */
export type CustomizableOptionInput = {
  /** The customizable option ID of the product. */
  id?: InputMaybe<Scalars['Int']>;
  /** The unique ID for a `CartItemInterface` object. */
  uid?: InputMaybe<Scalars['ID']>;
  /** The string value of the option. */
  value_string: Scalars['String'];
};

/** Contains basic information about a customizable option. It can be implemented by several types of configurable options. */
export type CustomizableOptionInterface = {
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID'];
};

/** Contains information about customizable product options. */
export type CustomizableProductInterface = {
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
};

/** Contains information about a set of radio buttons that are defined as part of a customizable option. */
export type CustomizableRadioOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableRadioOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID'];
  /** An array that defines a set of radio buttons. */
  value?: Maybe<Array<Maybe<CustomizableRadioValue>>>;
};

/** Defines the price and sku of a product whose page contains a customized set of radio buttons. */
export type CustomizableRadioValue = {
  __typename?: 'CustomizableRadioValue';
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The order in which the radio button is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableRadioValue` object. */
  uid: Scalars['ID'];
};

/** Contains the results of the request to delete a compare list. */
export type DeleteCompareListOutput = {
  __typename?: 'DeleteCompareListOutput';
  /** Indicates whether the compare list was successfully deleted. */
  result: Scalars['Boolean'];
};

/** Indicates whether the request succeeded and returns the remaining customer payment tokens. */
export type DeletePaymentTokenOutput = {
  __typename?: 'DeletePaymentTokenOutput';
  /** A container for the customer's remaining payment tokens. */
  customerPaymentTokens?: Maybe<CustomerPaymentTokens>;
  /** Indicates whether the request succeeded. */
  result: Scalars['Boolean'];
};

/** Contains the status of the request to delete a wish list and an array of the customer's remaining wish lists. */
export type DeleteWishlistOutput = {
  __typename?: 'DeleteWishlistOutput';
  /** Indicates whether the wish list was deleted. */
  status: Scalars['Boolean'];
  /** A list of undeleted wish lists. */
  wishlists: Array<Maybe<Wishlist>>;
};

export type DeliveryInstructions = {
  __typename?: 'DeliveryInstructions';
  authorityToLeave?: Maybe<Scalars['Boolean']>;
  instructions?: Maybe<Scalars['String']>;
};

/** Defines an individual discount. A discount can be applied to the cart as a whole or to an item. */
export type Discount = {
  __typename?: 'Discount';
  /** The amount of the discount. */
  amount: Money;
  /** The coupon code of the cart price rule. */
  code?: Maybe<Scalars['String']>;
  /** A description of the discount. */
  label: Scalars['String'];
};

/** An implementation for downloadable product cart items. */
export type DownloadableCartItem = CartItemInterface & {
  __typename?: 'DownloadableCartItem';
  /** An array containing the customizable options the shopper selected. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String'];
  /** An array containing information about the links for the downloadable product added to the cart. */
  links?: Maybe<Array<Maybe<DownloadableProductLinks>>>;
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float'];
  /** An array containing information about samples of the selected downloadable product. */
  samples?: Maybe<Array<Maybe<DownloadableProductSamples>>>;
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID'];
};

/** Defines downloadable product options for `CreditMemoItemInterface`. */
export type DownloadableCreditMemoItem = CreditMemoItemInterface & {
  __typename?: 'DownloadableCreditMemoItem';
  /** Details about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** A list of downloadable links that are refunded from the downloadable product. */
  downloadable_links?: Maybe<Array<Maybe<DownloadableItemsLinks>>>;
  /** The unique ID for a `CreditMemoItemInterface` object. */
  id: Scalars['ID'];
  /** The order item the credit memo is applied to. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String'];
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']>;
};

export type DownloadableFileTypeEnum =
  | 'FILE'
  | 'URL';

/** Defines downloadable product options for `InvoiceItemInterface`. */
export type DownloadableInvoiceItem = InvoiceItemInterface & {
  __typename?: 'DownloadableInvoiceItem';
  /** Information about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** A list of downloadable links that are invoiced from the downloadable product. */
  downloadable_links?: Maybe<Array<Maybe<DownloadableItemsLinks>>>;
  /** The unique ID for an `InvoiceItemInterface` object. */
  id: Scalars['ID'];
  /** Details about an individual order item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String'];
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']>;
};

/** Defines characteristics of the links for downloadable product. */
export type DownloadableItemsLinks = {
  __typename?: 'DownloadableItemsLinks';
  /** A number indicating the sort order. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name of the link. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `DownloadableItemsLinks` object. */
  uid: Scalars['ID'];
};

/** Defines downloadable product options for `OrderItemInterface`. */
export type DownloadableOrderItem = OrderItemInterface & {
  __typename?: 'DownloadableOrderItem';
  /** The final discount information for the product. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** A list of downloadable links that are ordered from the downloadable product. */
  downloadable_links?: Maybe<Array<Maybe<DownloadableItemsLinks>>>;
  /** Indicates whether the order item is eligible to be in a return request. */
  eligible_for_return?: Maybe<Scalars['Boolean']>;
  /** The entered option for the base product, such as a logo or image. */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The selected gift message for the order item */
  gift_message?: Maybe<GiftMessage>;
  /** The selected gift wrapping for the order item. */
  gift_wrapping?: Maybe<GiftWrapping>;
  /** The unique ID for an `OrderItemInterface` object. */
  id: Scalars['ID'];
  /** Query line total for the order */
  line_total?: Maybe<Scalars['Float']>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price of the base product, including selected options. */
  product_sale_price: Money;
  /** Sale price incl. tax for the order item */
  product_sale_price_incl_tax: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']>;
  /** URL key of the base product. */
  product_url_key?: Maybe<Scalars['String']>;
  /** The number of canceled items. */
  quantity_canceled?: Maybe<Scalars['Float']>;
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']>;
  /** The number of units ordered for this item. */
  quantity_ordered?: Maybe<Scalars['Float']>;
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']>;
  /** The number of returned items. */
  quantity_returned?: Maybe<Scalars['Float']>;
  /** The number of shipped items. */
  quantity_shipped?: Maybe<Scalars['Float']>;
  /** The selected options for the base product, such as color or size. */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item. */
  status?: Maybe<Scalars['String']>;
};

/** Defines a product that the shopper downloads. */
export type DownloadableProduct = CustomizableProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'DownloadableProduct';
  /** @deprecated Use the `custom_attributes` field instead. */
  activity?: Maybe<Scalars['String']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']>;
  /** The availability state of the product. */
  availability?: Maybe<ProductAvailability>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_gear?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  climate?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  collar?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color?: Maybe<Scalars['String']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** An array of cross-sell products. */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** List of product custom attributes details. */
  custom_attributes: Array<Maybe<CustomAttribute>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** An array containing information about the links for this downloadable product. */
  downloadable_product_links?: Maybe<Array<Maybe<DownloadableProductLinks>>>;
  /** An array containing information about samples of this downloadable product. */
  downloadable_product_samples?: Maybe<Array<Maybe<DownloadableProductSamples>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  eco_collection?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  erin_recommends?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  features_bags?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  format?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gender?: Maybe<Scalars['String']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** Indicates whether the product can be returned. */
  is_returnable?: Maybe<Scalars['String']>;
  /** A value of 1 indicates that each link in the array must be purchased separately. */
  links_purchased_separately?: Maybe<Scalars['Int']>;
  /** The heading above the list of downloadable products. */
  links_title?: Maybe<Scalars['String']>;
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  marketplacer_brand?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  marketplacer_seller?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material?: Maybe<Scalars['String']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pattern?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  performance_fabric?: Maybe<Scalars['Int']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  purpose?: Maybe<Scalars['Int']>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int'];
  /** An array of related products. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['Int']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sleeve?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  /** Indicates whether the product is staged for a future campaign. */
  staged: Scalars['Boolean'];
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  strap_bags?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bags?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bottom?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_general?: Maybe<Scalars['String']>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** An array of up-sell products. */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
};


/** Defines a product that the shopper downloads. */
export type DownloadableProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

/** Defines a single downloadable product. */
export type DownloadableProductCartItemInput = {
  /** The ID and value of the option. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** The quantity and SKU of the downloadable product. */
  data: CartItemInput;
  /** An array of objects containing the link_id of the downloadable product link. */
  downloadable_product_links?: InputMaybe<Array<InputMaybe<DownloadableProductLinksInput>>>;
};

/** Defines characteristics of a downloadable product. */
export type DownloadableProductLinks = {
  __typename?: 'DownloadableProductLinks';
  /** @deprecated This information should not be exposed on frontend. */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated This information should not be exposed on frontend. */
  is_shareable?: Maybe<Scalars['Boolean']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  link_type?: Maybe<DownloadableFileTypeEnum>;
  /** @deprecated This information should not be exposed on frontend. */
  number_of_downloads?: Maybe<Scalars['Int']>;
  /** The price of the downloadable product. */
  price?: Maybe<Scalars['Float']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_file?: Maybe<Scalars['String']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_type?: Maybe<DownloadableFileTypeEnum>;
  /** The full URL to the downloadable sample. */
  sample_url?: Maybe<Scalars['String']>;
  /** A number indicating the sort order. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name of the link. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `DownloadableProductLinks` object. */
  uid: Scalars['ID'];
};

/** Contains the link ID for the downloadable product. */
export type DownloadableProductLinksInput = {
  /** The unique ID of the downloadable product link. */
  link_id: Scalars['Int'];
};

/** Defines characteristics of a downloadable product. */
export type DownloadableProductSamples = {
  __typename?: 'DownloadableProductSamples';
  /** @deprecated This information should not be exposed on frontend. */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_file?: Maybe<Scalars['String']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_type?: Maybe<DownloadableFileTypeEnum>;
  /** The full URL to the downloadable sample. */
  sample_url?: Maybe<Scalars['String']>;
  /** A number indicating the sort order. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name of the sample. */
  title?: Maybe<Scalars['String']>;
};

/** A downloadable product wish list item. */
export type DownloadableWishlistItem = WishlistItemInterface & {
  __typename?: 'DownloadableWishlistItem';
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String'];
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID'];
  /** An array containing information about the selected links. */
  links_v2?: Maybe<Array<Maybe<DownloadableProductLinks>>>;
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float'];
  /** An array containing information about the selected samples. */
  samples?: Maybe<Array<Maybe<DownloadableProductSamples>>>;
};

/** Contains a single dynamic block. */
export type DynamicBlock = {
  __typename?: 'DynamicBlock';
  /** The renderable HTML code of the dynamic block. */
  content: ComplexTextValue;
  /** The unique ID of a `DynamicBlock` object. */
  uid: Scalars['ID'];
};

/** Indicates the locations the dynamic block can be placed. If this field is not specified, the query returns all locations. */
export type DynamicBlockLocationEnum =
  | 'CONTENT'
  | 'FOOTER'
  | 'HEADER'
  | 'LEFT'
  | 'RIGHT';

/** Indicates the selected Dynamic Blocks Rotator inline widget. */
export type DynamicBlockTypeEnum =
  | 'CART_PRICE_RULE_RELATED'
  | 'CATALOG_PRICE_RULE_RELATED'
  | 'SPECIFIED';

/** Contains an array of dynamic blocks. */
export type DynamicBlocks = {
  __typename?: 'DynamicBlocks';
  /** An array containing individual dynamic blocks. */
  items: Array<Maybe<DynamicBlock>>;
  /** Metadata for pagination rendering. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The number of returned dynamic blocks. */
  total_count: Scalars['Int'];
};

/** Defines the dynamic block filter. The filter can identify the block type, location and IDs to return. */
export type DynamicBlocksFilterInput = {
  /** An array of dynamic block UIDs to filter on. */
  dynamic_block_uids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** An array indicating the locations the dynamic block can be placed. */
  locations?: InputMaybe<Array<InputMaybe<DynamicBlockLocationEnum>>>;
  /** A value indicating the type of dynamic block to filter on. */
  type: DynamicBlockTypeEnum;
};

export type EnteredAttributeValue = {
  __typename?: 'EnteredAttributeValue';
  /** Attribute value. */
  value?: Maybe<Scalars['String']>;
};

/** Contains details about a custom text attribute that the buyer entered. */
export type EnteredCustomAttributeInput = {
  /** A string that identifies the entered custom attribute. */
  attribute_code: Scalars['String'];
  /** The text or other entered value. */
  value: Scalars['String'];
};

/** Defines a customer-entered option. */
export type EnteredOptionInput = {
  /** The unique ID for a `CustomizableOptionInterface` object, such as a `CustomizableFieldOption`, `CustomizableFileOption`, or `CustomizableAreaOption` object. */
  uid: Scalars['ID'];
  /** Text the customer entered. */
  value: Scalars['String'];
};

/** Contains the `uid`, `relative_url`, and `type` attributes. */
export type EntityUrl = {
  __typename?: 'EntityUrl';
  /** @deprecated Use `relative_url` instead. */
  canonical_url?: Maybe<Scalars['String']>;
  /** The unique ID for a `ProductInterface`, `CategoryInterface`, `CmsPage`, or similar object associated with the specified URL. This could be a product, category, or CMS page UID. */
  entity_uid?: Maybe<Scalars['ID']>;
  /**
   * The ID assigned to the object associated with the specified url. This could be a product ID, category ID, or page ID.
   * @deprecated Use `entity_uid` instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirectCode?: Maybe<Scalars['Int']>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
};

export type ErrorInterface = {
  /** The returned error message. */
  message: Scalars['String'];
};

/** Lists the exchange rate. */
export type ExchangeRate = {
  __typename?: 'ExchangeRate';
  /** Specifies the store’s default currency to exchange to. */
  currency_to?: Maybe<Scalars['String']>;
  /** The exchange rate for the store’s default currency. */
  rate?: Maybe<Scalars['Float']>;
};

/** Defines a filter that matches the input exactly. */
export type FilterEqualTypeInput = {
  /** Use this attribute to exactly match the specified string. For example, to filter on a specific category ID, specify a value such as `5`. */
  eq?: InputMaybe<Scalars['String']>;
  /** Use this attribute to filter on an array of values. For example, to filter on category IDs 4, 5, and 6, specify a value of `["4", "5", "6"]`. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Defines a filter that performs a fuzzy search. */
export type FilterMatchTypeInput = {
  /** Use this attribute to exactly match the specified string. For example, to filter on a specific SKU, specify a value such as `24-MB01`. */
  match?: InputMaybe<Scalars['String']>;
};

/** Defines a filter that matches a range of values, such as prices or dates. */
export type FilterRangeTypeInput = {
  /** Use this attribute to specify the lowest possible value in the range. */
  from?: InputMaybe<Scalars['String']>;
  /** Use this attribute to specify the highest possible value in the range. */
  to?: InputMaybe<Scalars['String']>;
};

/** Defines a filter for an input string. */
export type FilterStringTypeInput = {
  /** Filters items that are exactly the same as the specified string. */
  eq?: InputMaybe<Scalars['String']>;
  /** Filters items that are exactly the same as entries specified in an array of strings. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Defines a filter that performs a fuzzy search using the specified string. */
  match?: InputMaybe<Scalars['String']>;
};

export type FilterTypeEnum =
  | 'FilterEqualTypeInput'
  | 'FilterMatchTypeInput'
  | 'FilterRangeTypeInput';

/** Defines the comparison operators that can be used in a filter. */
export type FilterTypeInput = {
  /** Equals. */
  eq?: InputMaybe<Scalars['String']>;
  finset?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** From. Must be used with the `to` field. */
  from?: InputMaybe<Scalars['String']>;
  /** Greater than. */
  gt?: InputMaybe<Scalars['String']>;
  /** Greater than or equal to. */
  gteq?: InputMaybe<Scalars['String']>;
  /** In. The value can contain a set of comma-separated values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Like. The specified value can contain % (percent signs) to allow matching of 0 or more characters. */
  like?: InputMaybe<Scalars['String']>;
  /** Less than. */
  lt?: InputMaybe<Scalars['String']>;
  /** Less than or equal to. */
  lteq?: InputMaybe<Scalars['String']>;
  /** More than or equal to. */
  moreq?: InputMaybe<Scalars['String']>;
  /** Not equal to. */
  neq?: InputMaybe<Scalars['String']>;
  /** Not in. The value can contain a set of comma-separated values. */
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Not null. */
  notnull?: InputMaybe<Scalars['String']>;
  /** Is null. */
  null?: InputMaybe<Scalars['String']>;
  /** To. Must be used with the `from` field. */
  to?: InputMaybe<Scalars['String']>;
};

/** A single FPT that can be applied to a product price. */
export type FixedProductTax = {
  __typename?: 'FixedProductTax';
  /** The amount of the Fixed Product Tax. */
  amount?: Maybe<Money>;
  /** The display label assigned to the Fixed Product Tax. */
  label?: Maybe<Scalars['String']>;
};

/** Lists display settings for the Fixed Product Tax. */
export type FixedProductTaxDisplaySettings =
  /** The displayed price does not include the FPT amount. The values of `ProductPrice.fixed_product_taxes` and the price including the FPT are displayed separately. This value corresponds to 'Excluding FPT, Including FPT description and final price.' */
  | 'EXCLUDE_FPT_AND_INCLUDE_WITH_DETAILS'
  /** The displayed price does not include the FPT amount. The values from `ProductPrice.fixed_product_taxes` are not displayed. This value corresponds to 'Excluding FPT'. */
  | 'EXCLUDE_FPT_WITHOUT_DETAILS'
  /** The FPT feature is not enabled. You can omit `ProductPrice.fixed_product_taxes` from your query. */
  | 'FPT_DISABLED'
  /** The displayed price includes the FPT amount without displaying the `ProductPrice.fixed_product_taxes` values. This value corresponds to 'Including FPT only'. */
  | 'INCLUDE_FPT_WITHOUT_DETAILS'
  /** The displayed price includes the FPT amount while displaying the values of `ProductPrice.fixed_product_taxes` separately. This value corresponds to 'Including FPT and FPT description'. */
  | 'INCLUDE_FPT_WITH_DETAILS';

export type FreeShippingDetails = {
  __typename?: 'FreeShippingDetails';
  /** Free shipping status */
  free_shipping_active?: Maybe<Scalars['Boolean']>;
  /** Percent of free shipping threshold reached (if greater than 100 and free_shipping_active is true, customer has free shipping) */
  free_shipping_percentage?: Maybe<Scalars['Float']>;
  /** Remaining value before free shipping achieved */
  free_shipping_remaining?: Maybe<Money>;
  /** Minimum spend to receive free shipping */
  free_shipping_threshold?: Maybe<Money>;
};

/** Identifies which customer requires remote shopping assistance. */
export type GenerateCustomerTokenAsAdminInput = {
  /** The email address of the customer requesting remote shopping assistance. */
  customer_email: Scalars['String'];
};

/** Contains the generated customer token. */
export type GenerateCustomerTokenAsAdminOutput = {
  __typename?: 'GenerateCustomerTokenAsAdminOutput';
  /** The generated customer token. */
  customer_token: Scalars['String'];
};

/** Contains details about the gift card account. */
export type GiftCardAccount = {
  __typename?: 'GiftCardAccount';
  /** The balance remaining on the gift card. */
  balance?: Maybe<Money>;
  /** The gift card account code. */
  code?: Maybe<Scalars['String']>;
  /** The expiration date of the gift card. */
  expiration_date?: Maybe<Scalars['String']>;
};

/** Contains the gift card code. */
export type GiftCardAccountInput = {
  /** The applied gift card code. */
  gift_card_code: Scalars['String'];
};

/** Contains the value of a gift card, the website that generated the card, and related information. */
export type GiftCardAmounts = {
  __typename?: 'GiftCardAmounts';
  /** An internal attribute ID. */
  attribute_id?: Maybe<Scalars['Int']>;
  /** The unique ID for a `GiftCardAmounts` object. */
  uid: Scalars['ID'];
  /** The value of the gift card. */
  value?: Maybe<Scalars['Float']>;
  /**
   * An ID that is assigned to each unique gift card amount.
   * @deprecated Use `uid` instead
   */
  value_id?: Maybe<Scalars['Int']>;
  /** The ID of the website that generated the gift card. */
  website_id?: Maybe<Scalars['Int']>;
  /** The value of the gift card. */
  website_value?: Maybe<Scalars['Float']>;
};

/** Contains details about a gift card that has been added to a cart. */
export type GiftCardCartItem = CartItemInterface & {
  __typename?: 'GiftCardCartItem';
  /** The amount and currency of the gift card. */
  amount: Money;
  /** An array of customizations applied to the gift card. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String'];
  /** The message from the sender to the recipient. */
  message?: Maybe<Scalars['String']>;
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float'];
  /** The email address of the person receiving the gift card. */
  recipient_email?: Maybe<Scalars['String']>;
  /** The name of the person receiving the gift card. */
  recipient_name: Scalars['String'];
  /** The email address of the sender. */
  sender_email?: Maybe<Scalars['String']>;
  /** The name of the sender. */
  sender_name: Scalars['String'];
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID'];
};

export type GiftCardCreditMemoItem = CreditMemoItemInterface & {
  __typename?: 'GiftCardCreditMemoItem';
  /** Details about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** Selected gift card properties for a credit memo item. */
  gift_card?: Maybe<GiftCardItem>;
  /** The unique ID for a `CreditMemoItemInterface` object. */
  id: Scalars['ID'];
  /** The order item the credit memo is applied to. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String'];
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']>;
};

export type GiftCardInvoiceItem = InvoiceItemInterface & {
  __typename?: 'GiftCardInvoiceItem';
  /** Information about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** Selected gift card properties for an invoice item. */
  gift_card?: Maybe<GiftCardItem>;
  /** The unique ID for an `InvoiceItemInterface` object. */
  id: Scalars['ID'];
  /** Details about an individual order item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String'];
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']>;
};

/** Contains details about a gift card. */
export type GiftCardItem = {
  __typename?: 'GiftCardItem';
  /** The message from the sender to the recipient. */
  message?: Maybe<Scalars['String']>;
  /** The email address of the receiver of a virtual gift card. */
  recipient_email?: Maybe<Scalars['String']>;
  /** The name of the receiver of a physical or virtual gift card. */
  recipient_name?: Maybe<Scalars['String']>;
  /** The email address of the sender of a virtual gift card. */
  sender_email?: Maybe<Scalars['String']>;
  /** The name of the sender of a physical or virtual gift card. */
  sender_name?: Maybe<Scalars['String']>;
};

/** Contains details about the sender, recipient, and amount of a gift card. */
export type GiftCardOptions = {
  __typename?: 'GiftCardOptions';
  /** The amount and currency of the gift card. */
  amount?: Maybe<Money>;
  /** The custom amount and currency of the gift card. */
  custom_giftcard_amount?: Maybe<Money>;
  /** The message from the sender to the recipient. */
  message?: Maybe<Scalars['String']>;
  /** The email address of the person receiving the gift card. */
  recipient_email?: Maybe<Scalars['String']>;
  /** The name of the person receiving the gift card. */
  recipient_name?: Maybe<Scalars['String']>;
  /** The email address of the sender. */
  sender_email?: Maybe<Scalars['String']>;
  /** The name of the sender. */
  sender_name?: Maybe<Scalars['String']>;
};

export type GiftCardOrderItem = OrderItemInterface & {
  __typename?: 'GiftCardOrderItem';
  /** The final discount information for the product. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** Indicates whether the order item is eligible to be in a return request. */
  eligible_for_return?: Maybe<Scalars['Boolean']>;
  /** The entered option for the base product, such as a logo or image. */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** Selected gift card properties for an order item. */
  gift_card?: Maybe<GiftCardItem>;
  /** The selected gift message for the order item */
  gift_message?: Maybe<GiftMessage>;
  /** The selected gift wrapping for the order item. */
  gift_wrapping?: Maybe<GiftWrapping>;
  /** The unique ID for an `OrderItemInterface` object. */
  id: Scalars['ID'];
  /** Query line total for the order */
  line_total?: Maybe<Scalars['Float']>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price of the base product, including selected options. */
  product_sale_price: Money;
  /** Sale price incl. tax for the order item */
  product_sale_price_incl_tax: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']>;
  /** URL key of the base product. */
  product_url_key?: Maybe<Scalars['String']>;
  /** The number of canceled items. */
  quantity_canceled?: Maybe<Scalars['Float']>;
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']>;
  /** The number of units ordered for this item. */
  quantity_ordered?: Maybe<Scalars['Float']>;
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']>;
  /** The number of returned items. */
  quantity_returned?: Maybe<Scalars['Float']>;
  /** The number of shipped items. */
  quantity_shipped?: Maybe<Scalars['Float']>;
  /** The selected options for the base product, such as color or size. */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item. */
  status?: Maybe<Scalars['String']>;
};

/** Defines properties of a gift card. */
export type GiftCardProduct = CustomizableProductInterface & PhysicalProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'GiftCardProduct';
  /** @deprecated Use the `custom_attributes` field instead. */
  activity?: Maybe<Scalars['String']>;
  /** Indicates whether the customer can provide a message to accompany the gift card. */
  allow_message?: Maybe<Scalars['Boolean']>;
  /** Indicates whether shoppers have the ability to set the value of the gift card. */
  allow_open_amount?: Maybe<Scalars['Boolean']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']>;
  /** The availability state of the product. */
  availability?: Maybe<ProductAvailability>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_gear?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  climate?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  collar?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color?: Maybe<Scalars['String']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** An array of cross-sell products. */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** List of product custom attributes details. */
  custom_attributes: Array<Maybe<CustomAttribute>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  eco_collection?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  erin_recommends?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  features_bags?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  format?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gender?: Maybe<Scalars['String']>;
  /** An array of customizable gift card options. */
  gift_card_options: Array<Maybe<CustomizableOptionInterface>>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  /** An array that contains information about the values and ID of a gift card. */
  giftcard_amounts?: Maybe<Array<Maybe<GiftCardAmounts>>>;
  /** An enumeration that specifies the type of gift card. */
  giftcard_type?: Maybe<GiftCardTypeEnum>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** Indicates whether the customer can redeem the value on the card for cash. */
  is_redeemable?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the product can be returned. */
  is_returnable?: Maybe<Scalars['String']>;
  /** The number of days after purchase until the gift card expires. A null value means there is no limit. */
  lifetime?: Maybe<Scalars['Int']>;
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  marketplacer_brand?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  marketplacer_seller?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material?: Maybe<Scalars['String']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** The maximum number of characters the gift message can contain. */
  message_max_length?: Maybe<Scalars['Int']>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** The maximum acceptable value of an open amount gift card. */
  open_amount_max?: Maybe<Scalars['Float']>;
  /** The minimum acceptable value of an open amount gift card. */
  open_amount_min?: Maybe<Scalars['Float']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pattern?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  performance_fabric?: Maybe<Scalars['Int']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  purpose?: Maybe<Scalars['Int']>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int'];
  /** An array of related products. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['Int']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sleeve?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  /** Indicates whether the product is staged for a future campaign. */
  staged: Scalars['Boolean'];
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  strap_bags?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bags?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bottom?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_general?: Maybe<Scalars['String']>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** An array of up-sell products. */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']>;
};


/** Defines properties of a gift card. */
export type GiftCardProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type GiftCardShipmentItem = ShipmentItemInterface & {
  __typename?: 'GiftCardShipmentItem';
  /** Selected gift card properties for a shipment item. */
  gift_card?: Maybe<GiftCardItem>;
  /** The unique ID for a `ShipmentItemInterface` object. */
  id: Scalars['ID'];
  /** The order item associated with the shipment item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String'];
  /** The number of shipped items. */
  quantity_shipped: Scalars['Float'];
};

/** Specifies the gift card type. */
export type GiftCardTypeEnum =
  | 'COMBINED'
  | 'PHYSICAL'
  | 'VIRTUAL';

/** A single gift card added to a wish list. */
export type GiftCardWishlistItem = WishlistItemInterface & {
  __typename?: 'GiftCardWishlistItem';
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String'];
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']>;
  /** Details about a gift card. */
  gift_card_options: GiftCardOptions;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID'];
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float'];
};

/** Contains the text of a gift message, its sender, and recipient */
export type GiftMessage = {
  __typename?: 'GiftMessage';
  /** Sender name */
  from: Scalars['String'];
  /** Gift message text */
  message: Scalars['String'];
  /** Recipient name */
  to: Scalars['String'];
};

/** Defines a gift message. */
export type GiftMessageInput = {
  /** The name of the sender. */
  from: Scalars['String'];
  /** The text of the gift message. */
  message: Scalars['String'];
  /** The name of the recepient. */
  to: Scalars['String'];
};

/** Contains prices for gift wrapping options. */
export type GiftOptionsPrices = {
  __typename?: 'GiftOptionsPrices';
  /** Price of the gift wrapping for all individual order items. */
  gift_wrapping_for_items?: Maybe<Money>;
  /** Price of the gift wrapping for the whole order. */
  gift_wrapping_for_order?: Maybe<Money>;
  /** Price for the printed card. */
  printed_card?: Maybe<Money>;
};

/** Contains details about a gift registry. */
export type GiftRegistry = {
  __typename?: 'GiftRegistry';
  /** The date on which the gift registry was created. Only the registry owner can access this attribute. */
  created_at: Scalars['String'];
  /** An array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair. */
  dynamic_attributes?: Maybe<Array<Maybe<GiftRegistryDynamicAttribute>>>;
  /** The name of the event. */
  event_name: Scalars['String'];
  /** An array of products added to the gift registry. */
  items?: Maybe<Array<Maybe<GiftRegistryItemInterface>>>;
  /** The message text the customer entered to describe the event. */
  message: Scalars['String'];
  /** The customer who created the gift registry. */
  owner_name: Scalars['String'];
  /** An enum that states whether the gift registry is PRIVATE or PUBLIC. Only the registry owner can access this attribute. */
  privacy_settings: GiftRegistryPrivacySettings;
  /** Contains details about each registrant for the event. */
  registrants?: Maybe<Array<Maybe<GiftRegistryRegistrant>>>;
  /** Contains the customer's shipping address. Only the registry owner can access this attribute. */
  shipping_address?: Maybe<CustomerAddress>;
  /** An enum that states whether the gift registry is ACTIVE or INACTIVE. Only the registry owner can access this attribute. */
  status: GiftRegistryStatus;
  /** The type of gift registry. */
  type?: Maybe<GiftRegistryType>;
  /** The unique ID assigned to the gift registry. */
  uid: Scalars['ID'];
};

export type GiftRegistryDynamicAttribute = GiftRegistryDynamicAttributeInterface & {
  __typename?: 'GiftRegistryDynamicAttribute';
  /** The internal ID of the dynamic attribute. */
  code: Scalars['ID'];
  /** Indicates which group the dynamic attribute is a member of. */
  group: GiftRegistryDynamicAttributeGroup;
  /** The display name of the dynamic attribute. */
  label: Scalars['String'];
  /** A corresponding value for the code. */
  value: Scalars['String'];
};

/** Defines the group type of a gift registry dynamic attribute. */
export type GiftRegistryDynamicAttributeGroup =
  | 'DETAILED_INFORMATION'
  | 'EVENT_INFORMATION'
  | 'GENERAL_INFORMATION'
  | 'PRIVACY_SETTINGS'
  | 'REGISTRANT'
  | 'SHIPPING_ADDRESS';

/** Defines a dynamic attribute. */
export type GiftRegistryDynamicAttributeInput = {
  /** A unique key for an additional attribute of the event. */
  code: Scalars['ID'];
  /** A string that describes a dynamic attribute. */
  value: Scalars['String'];
};

export type GiftRegistryDynamicAttributeInterface = {
  /** The internal ID of the dynamic attribute. */
  code: Scalars['ID'];
  /** The display name of the dynamic attribute. */
  label: Scalars['String'];
  /** A corresponding value for the code. */
  value: Scalars['String'];
};

export type GiftRegistryDynamicAttributeMetadata = GiftRegistryDynamicAttributeMetadataInterface & {
  __typename?: 'GiftRegistryDynamicAttributeMetadata';
  /** Indicates which group the dynamic attribute a member of. */
  attribute_group: Scalars['String'];
  /** The internal ID of the dynamic attribute. */
  code: Scalars['ID'];
  /** The selected input type for this dynamic attribute. The value can be one of several static or custom types. */
  input_type: Scalars['String'];
  /** Indicates whether the dynamic attribute is required. */
  is_required: Scalars['Boolean'];
  /** The display name of the dynamic attribute. */
  label: Scalars['String'];
  /** The order in which to display the dynamic attribute. */
  sort_order?: Maybe<Scalars['Int']>;
};

export type GiftRegistryDynamicAttributeMetadataInterface = {
  /** Indicates which group the dynamic attribute a member of. */
  attribute_group: Scalars['String'];
  /** The internal ID of the dynamic attribute. */
  code: Scalars['ID'];
  /** The selected input type for this dynamic attribute. The value can be one of several static or custom types. */
  input_type: Scalars['String'];
  /** Indicates whether the dynamic attribute is required. */
  is_required: Scalars['Boolean'];
  /** The display name of the dynamic attribute. */
  label: Scalars['String'];
  /** The order in which to display the dynamic attribute. */
  sort_order?: Maybe<Scalars['Int']>;
};

export type GiftRegistryItem = GiftRegistryItemInterface & {
  __typename?: 'GiftRegistryItem';
  /** The date the product was added to the gift registry. */
  created_at: Scalars['String'];
  /** A brief message about the gift registry item. */
  note?: Maybe<Scalars['String']>;
  /** Details about the gift registry item. */
  product?: Maybe<ProductInterface>;
  /** The requested quantity of the product. */
  quantity: Scalars['Float'];
  /** The fulfilled quantity of the product. */
  quantity_fulfilled: Scalars['Float'];
  /** The unique ID of a gift registry item. */
  uid: Scalars['ID'];
};

export type GiftRegistryItemInterface = {
  /** The date the product was added to the gift registry. */
  created_at: Scalars['String'];
  /** A brief message about the gift registry item. */
  note?: Maybe<Scalars['String']>;
  /** Details about the gift registry item. */
  product?: Maybe<ProductInterface>;
  /** The requested quantity of the product. */
  quantity: Scalars['Float'];
  /** The fulfilled quantity of the product. */
  quantity_fulfilled: Scalars['Float'];
  /** The unique ID of a gift registry item. */
  uid: Scalars['ID'];
};

/** Contains the status and any errors that encountered with the customer's gift register item. */
export type GiftRegistryItemUserErrorInterface = {
  /** Indicates whether the attempt to move the cart items to the gift registry was successful. */
  status: Scalars['Boolean'];
  /** An array of errors encountered while moving items from the cart to the gift registry. */
  user_errors: Array<Maybe<GiftRegistryItemsUserError>>;
};

/** Contains error information. */
export type GiftRegistryItemUserErrors = GiftRegistryItemUserErrorInterface & {
  __typename?: 'GiftRegistryItemUserErrors';
  /** Indicates whether the attempt to move the cart items to the gift registry was successful. */
  status: Scalars['Boolean'];
  /** An array of errors encountered while moving items from the cart to the gift registry. */
  user_errors: Array<Maybe<GiftRegistryItemsUserError>>;
};

/** Contains details about an error that occurred when processing a gift registry item. */
export type GiftRegistryItemsUserError = {
  __typename?: 'GiftRegistryItemsUserError';
  /** An error code that describes the error encountered. */
  code: GiftRegistryItemsUserErrorType;
  /** The unique ID of the gift registry item containing an error. */
  gift_registry_item_uid?: Maybe<Scalars['ID']>;
  /** The unique ID of the `GiftRegistry` object containing an error. */
  gift_registry_uid?: Maybe<Scalars['ID']>;
  /** A localized error message. */
  message: Scalars['String'];
  /** The unique ID of the product containing an error. */
  product_uid?: Maybe<Scalars['ID']>;
};

/** Defines the error type. */
export type GiftRegistryItemsUserErrorType =
  /** Used for exceptions like EntityNotFound. */
  | 'NOT_FOUND'
  /** Used for handling out of stock products. */
  | 'OUT_OF_STOCK'
  /** Used for other exceptions, such as database connection failures. */
  | 'UNDEFINED';

/** Contains details about the gift registry. */
export type GiftRegistryOutput = GiftRegistryOutputInterface & {
  __typename?: 'GiftRegistryOutput';
  /** The gift registry. */
  gift_registry?: Maybe<GiftRegistry>;
};

/** Contains the customer's gift registry. */
export type GiftRegistryOutputInterface = {
  /** The gift registry. */
  gift_registry?: Maybe<GiftRegistry>;
};

/** Defines the privacy setting of the gift registry. */
export type GiftRegistryPrivacySettings =
  | 'PRIVATE'
  | 'PUBLIC';

/** Contains details about a registrant. */
export type GiftRegistryRegistrant = {
  __typename?: 'GiftRegistryRegistrant';
  /** An array of dynamic attributes assigned to the registrant. */
  dynamic_attributes?: Maybe<Array<Maybe<GiftRegistryRegistrantDynamicAttribute>>>;
  /** The email address of the registrant. Only the registry owner can access this attribute. */
  email: Scalars['String'];
  /** The first name of the registrant. */
  firstname: Scalars['String'];
  /** The last name of the registrant. */
  lastname: Scalars['String'];
  /** The unique ID assigned to the registrant. */
  uid: Scalars['ID'];
};

export type GiftRegistryRegistrantDynamicAttribute = GiftRegistryDynamicAttributeInterface & {
  __typename?: 'GiftRegistryRegistrantDynamicAttribute';
  /** The internal ID of the dynamic attribute. */
  code: Scalars['ID'];
  /** The display name of the dynamic attribute. */
  label: Scalars['String'];
  /** A corresponding value for the code. */
  value: Scalars['String'];
};

/** Contains the results of a gift registry search. */
export type GiftRegistrySearchResult = {
  __typename?: 'GiftRegistrySearchResult';
  /** The date of the event. */
  event_date?: Maybe<Scalars['String']>;
  /** The title given to the event. */
  event_title: Scalars['String'];
  /** The URL key of the gift registry. */
  gift_registry_uid: Scalars['ID'];
  /** The location of the event. */
  location?: Maybe<Scalars['String']>;
  /** The name of the gift registry owner. */
  name: Scalars['String'];
  /** The type of event being held. */
  type?: Maybe<Scalars['String']>;
};

/** Defines a shipping address for a gift registry. Specify either `address_data` or the `address_id`. If both are provided, validation will fail. */
export type GiftRegistryShippingAddressInput = {
  /** Defines the shipping address for this gift registry. */
  address_data?: InputMaybe<CustomerAddressInput>;
  /** The ID assigned to this customer address. */
  address_id?: InputMaybe<Scalars['ID']>;
};

/** Defines the status of the gift registry. */
export type GiftRegistryStatus =
  | 'ACTIVE'
  | 'INACTIVE';

/** Contains details about a gift registry type. */
export type GiftRegistryType = {
  __typename?: 'GiftRegistryType';
  /** An array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair. */
  dynamic_attributes_metadata?: Maybe<Array<Maybe<GiftRegistryDynamicAttributeMetadataInterface>>>;
  /** The label assigned to the gift registry type on the Admin. */
  label: Scalars['String'];
  /** The unique ID assigned to the gift registry type. */
  uid: Scalars['ID'];
};

/** Contains details about the selected or available gift wrapping options. */
export type GiftWrapping = {
  __typename?: 'GiftWrapping';
  /** The name of the gift wrapping design. */
  design: Scalars['String'];
  /**
   * The unique ID for a `GiftWrapping` object.
   * @deprecated Use `uid` instead
   */
  id: Scalars['ID'];
  /** The preview image for a gift wrapping option. */
  image?: Maybe<GiftWrappingImage>;
  /** The gift wrapping price. */
  price: Money;
  /** The unique ID for a `GiftWrapping` object. */
  uid: Scalars['ID'];
};

/** Points to an image associated with a gift wrapping option. */
export type GiftWrappingImage = {
  __typename?: 'GiftWrappingImage';
  /** The gift wrapping preview image label. */
  label: Scalars['String'];
  /** The gift wrapping preview image URL. */
  url: Scalars['String'];
};

/** Defines a grouped product, which consists of simple standalone products that are presented as a group. */
export type GroupedProduct = PhysicalProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'GroupedProduct';
  /** @deprecated Use the `custom_attributes` field instead. */
  activity?: Maybe<Scalars['String']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']>;
  /** The availability state of the product. */
  availability?: Maybe<ProductAvailability>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_gear?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  climate?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  collar?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color?: Maybe<Scalars['String']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** An array of cross-sell products. */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** List of product custom attributes details. */
  custom_attributes: Array<Maybe<CustomAttribute>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  eco_collection?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  erin_recommends?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  features_bags?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  format?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gender?: Maybe<Scalars['String']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** Indicates whether the product can be returned. */
  is_returnable?: Maybe<Scalars['String']>;
  /** An array containing grouped product items. */
  items?: Maybe<Array<Maybe<GroupedProductItem>>>;
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  marketplacer_brand?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  marketplacer_seller?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material?: Maybe<Scalars['String']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pattern?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  performance_fabric?: Maybe<Scalars['Int']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  purpose?: Maybe<Scalars['Int']>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int'];
  /** An array of related products. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['Int']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sleeve?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  /** Indicates whether the product is staged for a future campaign. */
  staged: Scalars['Boolean'];
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  strap_bags?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bags?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bottom?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_general?: Maybe<Scalars['String']>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** An array of up-sell products. */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']>;
};


/** Defines a grouped product, which consists of simple standalone products that are presented as a group. */
export type GroupedProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

/** Contains information about an individual grouped product item. */
export type GroupedProductItem = {
  __typename?: 'GroupedProductItem';
  /** The relative position of this item compared to the other group items. */
  position?: Maybe<Scalars['Int']>;
  /** Details about this product option. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this grouped product item. */
  qty?: Maybe<Scalars['Float']>;
};

/** A grouped product wish list item. */
export type GroupedProductWishlistItem = WishlistItemInterface & {
  __typename?: 'GroupedProductWishlistItem';
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String'];
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID'];
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float'];
};

/** Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payments Pro Hosted Solution payment method. */
export type HostedProInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. For example, if the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String'];
  /** The relative URL of the final confirmation page that PayPal redirects to upon payment success. For example, if the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String'];
};

/** Contains the secure URL used for the Payments Pro Hosted Solution payment method. */
export type HostedProUrl = {
  __typename?: 'HostedProUrl';
  /** The secure URL generated by PayPal. */
  secure_form_url?: Maybe<Scalars['String']>;
};

/** Contains the required input to request the secure URL for Payments Pro Hosted Solution payment. */
export type HostedProUrlInput = {
  /** The unique ID that identifies the shopper's cart. */
  cart_id: Scalars['String'];
};

/** Contains target path parameters. */
export type HttpQueryParameter = {
  __typename?: 'HttpQueryParameter';
  /** A parameter name. */
  name?: Maybe<Scalars['String']>;
  /** A parameter value. */
  value?: Maybe<Scalars['String']>;
};

export type ImageSwatchData = SwatchDataInterface & {
  __typename?: 'ImageSwatchData';
  /** The URL assigned to the thumbnail of the swatch image. */
  thumbnail?: Maybe<Scalars['String']>;
  /** The value can be represented as color (HEX code), image link, or text. */
  value?: Maybe<Scalars['String']>;
};

/** Contains an error message when an internal error occurred. */
export type InternalError = ErrorInterface & {
  __typename?: 'InternalError';
  /** The returned error message. */
  message: Scalars['String'];
};

/** Contains invoice details. */
export type Invoice = {
  __typename?: 'Invoice';
  /** Comments on the invoice. */
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** The unique ID for a `Invoice` object. */
  id: Scalars['ID'];
  /** Invoiced product details. */
  items?: Maybe<Array<Maybe<InvoiceItemInterface>>>;
  /** Sequential invoice number. */
  number: Scalars['String'];
  /** Invoice total amount details. */
  total?: Maybe<InvoiceTotal>;
};

export type InvoiceItem = InvoiceItemInterface & {
  __typename?: 'InvoiceItem';
  /** Information about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for an `InvoiceItemInterface` object. */
  id: Scalars['ID'];
  /** Details about an individual order item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String'];
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']>;
};

/** Contains detailes about invoiced items. */
export type InvoiceItemInterface = {
  /** Information about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for an `InvoiceItemInterface` object. */
  id: Scalars['ID'];
  /** Details about an individual order item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String'];
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']>;
};

/** Contains price details from an invoice. */
export type InvoiceTotal = {
  __typename?: 'InvoiceTotal';
  /** The final base grand total amount in the base currency. */
  base_grand_total: Money;
  /** The applied discounts to the invoice. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The final total amount, including shipping, discounts, and taxes. */
  grand_total: Money;
  /** Grand Total Exclude Tax */
  grand_total_excl_tax?: Maybe<Money>;
  /** Details about the shipping and handling costs for the invoice. */
  shipping_handling?: Maybe<ShippingHandling>;
  /** The subtotal of the invoice, excluding shipping, discounts, and taxes. */
  subtotal: Money;
  /** Subtotal Including Tax */
  subtotal_incl_tax?: Maybe<Money>;
  /** The invoice tax details. */
  taxes?: Maybe<Array<Maybe<TaxItem>>>;
  /** The shipping amount for the invoice. */
  total_shipping: Money;
  /** The amount of tax applied to the invoice. */
  total_tax: Money;
};

/** Contains the result of the `isEmailAvailable` query. */
export type IsEmailAvailableOutput = {
  __typename?: 'IsEmailAvailableOutput';
  /** Indicates whether the specified email address can be used to create a customer. */
  is_email_available?: Maybe<Scalars['Boolean']>;
};

export type ItemMap = {
  __typename?: 'ItemMap';
  label?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** A list of options of the selected bundle product. */
export type ItemSelectedBundleOption = {
  __typename?: 'ItemSelectedBundleOption';
  /**
   * The unique ID for a `ItemSelectedBundleOption` object.
   * @deprecated Use `uid` instead.
   */
  id: Scalars['ID'];
  /** The label of the option. */
  label: Scalars['String'];
  /** The unique ID for a `ItemSelectedBundleOption` object. */
  uid: Scalars['ID'];
  /** A list of products that represent the values of the parent option. */
  values?: Maybe<Array<Maybe<ItemSelectedBundleOptionValue>>>;
};

/** A list of values for the selected bundle product. */
export type ItemSelectedBundleOptionValue = {
  __typename?: 'ItemSelectedBundleOptionValue';
  /**
   * The unique ID for a `ItemSelectedBundleOptionValue` object.
   * @deprecated Use `uid` instead.
   */
  id: Scalars['ID'];
  /** The price of the child bundle product. */
  price: Money;
  /** The name of the child bundle product. */
  product_name: Scalars['String'];
  /** The SKU of the child bundle product. */
  product_sku: Scalars['String'];
  /** The number of this bundle product that were ordered. */
  quantity: Scalars['Float'];
  /** The unique ID for a `ItemSelectedBundleOptionValue` object. */
  uid: Scalars['ID'];
};

export type KeyMessage = {
  __typename?: 'KeyMessage';
  link: Scalars['String'];
  message: Scalars['String'];
};

export type KeyMessageResult = {
  __typename?: 'KeyMessageResult';
  enabled: Scalars['Boolean'];
  messages?: Maybe<Array<Maybe<KeyMessage>>>;
};

/** Contains a key-value pair. */
export type KeyValue = {
  __typename?: 'KeyValue';
  /** The name part of the key/value pair. */
  name?: Maybe<Scalars['String']>;
  /** The value part of the key/value pair. */
  value?: Maybe<Scalars['String']>;
};

/** Contains information for rendering layered navigation. */
export type LayerFilter = {
  __typename?: 'LayerFilter';
  /**
   * An array of filter items.
   * @deprecated Use `Aggregation.options` instead.
   */
  filter_items?: Maybe<Array<Maybe<LayerFilterItemInterface>>>;
  /**
   * The count of filter items in filter group.
   * @deprecated Use `Aggregation.count` instead.
   */
  filter_items_count?: Maybe<Scalars['Int']>;
  /**
   * The name of a layered navigation filter.
   * @deprecated Use `Aggregation.label` instead.
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The request variable name for a filter query.
   * @deprecated Use `Aggregation.attribute_code` instead.
   */
  request_var?: Maybe<Scalars['String']>;
};

export type LayerFilterItem = LayerFilterItemInterface & {
  __typename?: 'LayerFilterItem';
  /**
   * The count of items per filter.
   * @deprecated Use `AggregationOption.count` instead.
   */
  items_count?: Maybe<Scalars['Int']>;
  /**
   * The label for a filter.
   * @deprecated Use `AggregationOption.label` instead.
   */
  label?: Maybe<Scalars['String']>;
  /**
   * The value of a filter request variable to be used in query.
   * @deprecated Use `AggregationOption.value` instead.
   */
  value_string?: Maybe<Scalars['String']>;
};

export type LayerFilterItemInterface = {
  /**
   * The count of items per filter.
   * @deprecated Use `AggregationOption.count` instead.
   */
  items_count?: Maybe<Scalars['Int']>;
  /**
   * The label for a filter.
   * @deprecated Use `AggregationOption.label` instead.
   */
  label?: Maybe<Scalars['String']>;
  /**
   * The value of a filter request variable to be used in query.
   * @deprecated Use `AggregationOption.value` instead.
   */
  value_string?: Maybe<Scalars['String']>;
};

/** Defines characteristics about images and videos associated with a specific product. */
export type MediaGalleryEntry = {
  __typename?: 'MediaGalleryEntry';
  /** Details about the content of the media gallery item. */
  content?: Maybe<ProductMediaGalleryEntriesContent>;
  /** Indicates whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']>;
  /** The path of the image on the server. */
  file?: Maybe<Scalars['String']>;
  /**
   * The identifier assigned to the object.
   * @deprecated Use `uid` instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** The alt text displayed on the storefront when the user points to the image. */
  label?: Maybe<Scalars['String']>;
  /** Either `image` or `video`. */
  media_type?: Maybe<Scalars['String']>;
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']>;
  /** Array of image types. It can have the following values: image, small_image, thumbnail. */
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The unique ID for a `MediaGalleryEntry` object. */
  uid: Scalars['ID'];
  /** Details about the content of a video item. */
  video_content?: Maybe<ProductMediaGalleryEntriesVideoContent>;
};

/** Contains basic information about a product image or video. */
export type MediaGalleryInterface = {
  /** Indicates whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']>;
  /** The label of the product image or video. */
  label?: Maybe<Scalars['String']>;
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']>;
  /** The URL of the product image or video. */
  url?: Maybe<Scalars['String']>;
};

/** Defines a monetary value, including a numeric value and a currency code. */
export type Money = {
  __typename?: 'Money';
  /** A three-letter currency code, such as USD or EUR. */
  currency?: Maybe<CurrencyEnum>;
  /** A number expressing a monetary value. */
  value?: Maybe<Scalars['Float']>;
};

/** Contains the customer's gift registry and any errors encountered. */
export type MoveCartItemsToGiftRegistryOutput = GiftRegistryItemUserErrorInterface & GiftRegistryOutputInterface & {
  __typename?: 'MoveCartItemsToGiftRegistryOutput';
  /** The gift registry. */
  gift_registry?: Maybe<GiftRegistry>;
  /** Indicates whether the attempt to move the cart items to the gift registry was successful. */
  status: Scalars['Boolean'];
  /** An array of errors encountered while moving items from the cart to the gift registry. */
  user_errors: Array<Maybe<GiftRegistryItemsUserError>>;
};

/** Contains the source and target wish lists after moving products. */
export type MoveProductsBetweenWishlistsOutput = {
  __typename?: 'MoveProductsBetweenWishlistsOutput';
  /** The destination wish list after receiving products moved from the source wish list. */
  destination_wishlist: Wishlist;
  /** The source wish list after moving products from it. */
  source_wishlist: Wishlist;
  /** An array of errors encountered while moving products to a wish list. */
  user_errors: Array<Maybe<WishListUserInputError>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Add one or more bundle products to the specified cart. We recommend using `addProductsToCart` instead. */
  addBundleProductsToCart?: Maybe<AddBundleProductsToCartOutput>;
  /** Add one or more configurable products to the specified cart. We recommend using `addProductsToCart` instead. */
  addConfigurableProductsToCart?: Maybe<AddConfigurableProductsToCartOutput>;
  /** Add one or more downloadable products to the specified cart. We recommend using `addProductsToCart` instead. */
  addDownloadableProductsToCart?: Maybe<AddDownloadableProductsToCartOutput>;
  /** Add registrants to the specified gift registry. */
  addGiftRegistryRegistrants?: Maybe<AddGiftRegistryRegistrantsOutput>;
  /** Add any type of product to the cart. */
  addProductsToCart?: Maybe<AddProductsToCartOutput>;
  /** Add products to the specified compare list. */
  addProductsToCompareList?: Maybe<CompareList>;
  /** Add one or more products to the specified wish list. This mutation supports all product types. */
  addProductsToWishlist?: Maybe<AddProductsToWishlistOutput>;
  /** Add a comment to an existing return. */
  addReturnComment?: Maybe<AddReturnCommentOutput>;
  /** Add tracking information to the return. */
  addReturnTracking?: Maybe<AddReturnTrackingOutput>;
  /** Add one or more simple products to the specified cart. We recommend using `addProductsToCart` instead. */
  addSimpleProductsToCart?: Maybe<AddSimpleProductsToCartOutput>;
  /** Add one or more virtual products to the specified cart. We recommend using `addProductsToCart` instead. */
  addVirtualProductsToCart?: Maybe<AddVirtualProductsToCartOutput>;
  /** Add items in the specified wishlist to the customer's cart. */
  addWishlistItemsToCart?: Maybe<AddWishlistItemsToCartOutput>;
  adyenPaymentDetails?: Maybe<AdyenPaymentStatus>;
  /** Apply a pre-defined coupon code to the specified cart. */
  applyCouponToCart?: Maybe<ApplyCouponToCartOutput>;
  /** Apply a pre-defined gift card code to the specified cart. */
  applyGiftCardToCart?: Maybe<ApplyGiftCardToCartOutput>;
  /** Apply all available points, up to the cart total. Partial redemption is not available. */
  applyRewardPointsToCart?: Maybe<ApplyRewardPointsToCartOutput>;
  /** Apply store credit to the specified cart. */
  applyStoreCreditToCart?: Maybe<ApplyStoreCreditToCartOutput>;
  /** Assign the specified compare list to the logged in customer. */
  assignCompareListToCustomer?: Maybe<AssignCompareListToCustomerOutput>;
  /** Assign a logged-in customer to the specified guest shopping cart. */
  assignCustomerToGuestCart: Cart;
  /** Change the password for the logged-in customer. */
  changeCustomerPassword?: Maybe<Customer>;
  /** Remove all items from the specified cart. */
  clearCustomerCart?: Maybe<ClearCustomerCartOutput>;
  /** Send a 'Contact Us' email to the merchant. */
  contactUs?: Maybe<ContactUsOutput>;
  /** Copy products from one wish list to another. The original wish list is unchanged. */
  copyProductsBetweenWishlists?: Maybe<CopyProductsBetweenWishlistsOutput>;
  /** Creates a customer account using details from the given order */
  createAccountFromOrder?: Maybe<CustomerOutput>;
  /** Creates an Afterpay Checkout. */
  createAfterpayCheckout?: Maybe<CreateAfterpayCheckoutOutput>;
  /** Creates Client Token for Braintree Javascript SDK initialization. */
  createBraintreeClientToken: Scalars['String'];
  /** Generate Redirect Urls for a cart */
  createCartRedirectUrls?: Maybe<CreateCartRedirectUrls>;
  /** Create a new compare list. The compare list is saved for logged in customers. */
  createCompareList?: Maybe<CompareList>;
  /** Use `createCustomerV2` instead. */
  createCustomer?: Maybe<CustomerOutput>;
  /** Create a billing or shipping address for a customer or guest. */
  createCustomerAddress?: Maybe<CustomerAddress>;
  /** Create a customer account. */
  createCustomerV2?: Maybe<CustomerOutput>;
  /** Create an empty shopping cart for a guest or logged in user */
  createEmptyCart?: Maybe<Scalars['String']>;
  /** Create a gift registry on behalf of the customer. */
  createGiftRegistry?: Maybe<CreateGiftRegistryOutput>;
  /** Initiate a transaction and receive a token. Use this mutation for Payflow Pro and Payments Pro payment methods */
  createPayflowProToken?: Maybe<CreatePayflowProTokenOutput>;
  /** Initiate an Express Checkout transaction and receive a token. Use this mutation for Express Checkout and Payments Standard payment methods. */
  createPaypalExpressToken?: Maybe<PaypalExpressTokenOutput>;
  /** Create a product review for the specified product. */
  createProductReview: CreateProductReviewOutput;
  /** Create a new wish list. */
  createWishlist?: Maybe<CreateWishlistOutput>;
  /** Delete the specified compare list. */
  deleteCompareList?: Maybe<DeleteCompareListOutput>;
  /** Delete customer account */
  deleteCustomer?: Maybe<Scalars['Boolean']>;
  /** Delete the billing or shipping address of a customer. */
  deleteCustomerAddress?: Maybe<Scalars['Boolean']>;
  /** Delete a customer's payment token. */
  deletePaymentToken?: Maybe<DeletePaymentTokenOutput>;
  /** Delete the specified wish list. You cannot delete the customer's default (first) wish list. */
  deleteWishlist?: Maybe<DeleteWishlistOutput>;
  /** Generate a token for specified customer. */
  generateCustomerToken?: Maybe<CustomerToken>;
  /** Request a customer token so that an administrator can perform remote shopping assistance. */
  generateCustomerTokenAsAdmin?: Maybe<GenerateCustomerTokenAsAdminOutput>;
  /** Get customer token */
  getCustomerTokenBySecretCode?: Maybe<GetCustomerTokenBySecretCodeOutput>;
  /** Handle a payment response and save the payment in Quote. Use this mutation for Payflow Pro and Payments Pro payment methods. */
  handlePayflowProResponse?: Maybe<PayflowProResponseOutput>;
  /** Transfer the contents of a guest cart into the cart of a logged-in customer. */
  mergeCarts: Cart;
  /** Move all items from the cart to a gift registry. */
  moveCartItemsToGiftRegistry?: Maybe<MoveCartItemsToGiftRegistryOutput>;
  /** Move products from one wish list to another. */
  moveProductsBetweenWishlists?: Maybe<MoveProductsBetweenWishlistsOutput>;
  /** Convert the quote into an order. */
  placeOrder?: Maybe<PlaceOrderOutput>;
  /**
   * Posts a Contact Us form
   * @deprecated Use 'contactUs' mutation instead
   */
  postContactForm?: Maybe<Scalars['Boolean']>;
  /** Redeem a gift card for store credit. */
  redeemGiftCardBalanceAsStoreCredit?: Maybe<GiftCardAccount>;
  /** Remove a previously-applied coupon from the cart. The cart must contain at least one item in order to remove the coupon. */
  removeCouponFromCart?: Maybe<RemoveCouponFromCartOutput>;
  /** Removes a gift card from the cart. */
  removeGiftCardFromCart?: Maybe<RemoveGiftCardFromCartOutput>;
  /** Delete the specified gift registry. */
  removeGiftRegistry?: Maybe<RemoveGiftRegistryOutput>;
  /** Delete the specified items from a gift registry. */
  removeGiftRegistryItems?: Maybe<RemoveGiftRegistryItemsOutput>;
  /** Removes registrants from a gift registry. */
  removeGiftRegistryRegistrants?: Maybe<RemoveGiftRegistryRegistrantsOutput>;
  /** Delete the entire quantity of a specified item from the cart. If you remove all items from the cart, the cart continues to exist. */
  removeItemFromCart?: Maybe<RemoveItemFromCartOutput>;
  /** Remove products from the specified compare list. */
  removeProductsFromCompareList?: Maybe<CompareList>;
  /** Remove one or more products from the specified wish list. */
  removeProductsFromWishlist?: Maybe<RemoveProductsFromWishlistOutput>;
  /** Remove a tracked shipment from a return. */
  removeReturnTracking?: Maybe<RemoveReturnTrackingOutput>;
  /** Cancel the application of reward points to the cart. */
  removeRewardPointsFromCart?: Maybe<RemoveRewardPointsFromCartOutput>;
  /** Remove store credit that has been applied to the specified cart. */
  removeStoreCreditFromCart?: Maybe<RemoveStoreCreditFromCartOutput>;
  /** Add all products from a customer's previous order to the cart. */
  reorderItems?: Maybe<ReorderItemsOutput>;
  /** Request an email with a reset password token for the registered customer identified by the specified email. */
  requestPasswordResetEmail?: Maybe<Scalars['Boolean']>;
  /** Initiates a buyer's request to return items for replacement or refund. */
  requestReturn?: Maybe<RequestReturnOutput>;
  /** Reset a customer's password using the reset password token that the customer received in an email after requesting it using `requestPasswordResetEmail`. */
  resetPassword?: Maybe<Scalars['Boolean']>;
  /** Revoke the customer token. */
  revokeCustomerToken?: Maybe<RevokeCustomerTokenOutput>;
  /** Send a message on behalf of a customer to the specified email addresses. */
  sendEmailToFriend?: Maybe<SendEmailToFriendOutput>;
  /** Set the billing address on a specific cart. */
  setBillingAddressOnCart?: Maybe<SetBillingAddressOnCartOutput>;
  /** Set gift options, including gift messages, gift wrapping, gift receipts, and printed cards. */
  setGiftOptionsOnCart?: Maybe<SetGiftOptionsOnCartOutput>;
  /** Assign the email address of a guest to the cart. */
  setGuestEmailOnCart?: Maybe<SetGuestEmailOnCartOutput>;
  /**
   * Set the cart payment method and convert the cart into an order.
   * @deprecated Should use setPaymentMethodOnCart and placeOrder mutations in single request.
   */
  setPaymentMethodAndPlaceOrder?: Maybe<PlaceOrderOutput>;
  /** Apply a payment method to the cart. */
  setPaymentMethodOnCart?: Maybe<SetPaymentMethodOnCartOutput>;
  /** Set one or more shipping addresses on a specific cart. */
  setShippingAddressesOnCart?: Maybe<SetShippingAddressesOnCartOutput>;
  /** Set one or more delivery methods on a cart. */
  setShippingMethodsOnCart?: Maybe<SetShippingMethodsOnCartOutput>;
  /** Send an email about the gift registry to a list of invitees. */
  shareGiftRegistry?: Maybe<ShareGiftRegistryOutput>;
  /** wishlist share via email */
  shareWishlist?: Maybe<WishlistOutput>;
  /** Subscribe the specified email to the store's newsletter. */
  subscribeEmailToNewsletter?: Maybe<SubscribeEmailToNewsletterOutput>;
  /** Modify items in the cart. */
  updateCartItems?: Maybe<UpdateCartItemsOutput>;
  /** Use `updateCustomerV2` instead. */
  updateCustomer?: Maybe<CustomerOutput>;
  /** Update the billing or shipping address of a customer or guest. */
  updateCustomerAddress?: Maybe<CustomerAddress>;
  /** Change the email address for the logged-in customer. */
  updateCustomerEmail?: Maybe<CustomerOutput>;
  /** Update the customer's personal information. */
  updateCustomerV2?: Maybe<CustomerOutput>;
  /** Update the specified gift registry. */
  updateGiftRegistry?: Maybe<UpdateGiftRegistryOutput>;
  /** Update the specified items in the gift registry. */
  updateGiftRegistryItems?: Maybe<UpdateGiftRegistryItemsOutput>;
  /** Modify the properties of one or more gift registry registrants. */
  updateGiftRegistryRegistrants?: Maybe<UpdateGiftRegistryRegistrantsOutput>;
  /** Update one or more products in the specified wish list. */
  updateProductsInWishlist?: Maybe<UpdateProductsInWishlistOutput>;
  /** Change the name and visibility of the specified wish list. */
  updateWishlist?: Maybe<UpdateWishlistOutput>;
};


export type MutationAddBundleProductsToCartArgs = {
  input?: InputMaybe<AddBundleProductsToCartInput>;
};


export type MutationAddConfigurableProductsToCartArgs = {
  input?: InputMaybe<AddConfigurableProductsToCartInput>;
};


export type MutationAddDownloadableProductsToCartArgs = {
  input?: InputMaybe<AddDownloadableProductsToCartInput>;
};


export type MutationAddGiftRegistryRegistrantsArgs = {
  giftRegistryUid: Scalars['ID'];
  registrants: Array<AddGiftRegistryRegistrantInput>;
};


export type MutationAddProductsToCartArgs = {
  cartId: Scalars['String'];
  cartItems: Array<CartItemInput>;
};


export type MutationAddProductsToCompareListArgs = {
  input?: InputMaybe<AddProductsToCompareListInput>;
};


export type MutationAddProductsToWishlistArgs = {
  wishlistId: Scalars['ID'];
  wishlistItems: Array<WishlistItemInput>;
};


export type MutationAddReturnCommentArgs = {
  input: AddReturnCommentInput;
};


export type MutationAddReturnTrackingArgs = {
  input: AddReturnTrackingInput;
};


export type MutationAddSimpleProductsToCartArgs = {
  input?: InputMaybe<AddSimpleProductsToCartInput>;
};


export type MutationAddVirtualProductsToCartArgs = {
  input?: InputMaybe<AddVirtualProductsToCartInput>;
};


export type MutationAddWishlistItemsToCartArgs = {
  wishlistId: Scalars['ID'];
  wishlistItemIds?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationAdyenPaymentDetailsArgs = {
  cart_id: Scalars['String'];
  payload: Scalars['String'];
};


export type MutationApplyCouponToCartArgs = {
  input?: InputMaybe<ApplyCouponToCartInput>;
};


export type MutationApplyGiftCardToCartArgs = {
  input?: InputMaybe<ApplyGiftCardToCartInput>;
};


export type MutationApplyRewardPointsToCartArgs = {
  cartId: Scalars['ID'];
};


export type MutationApplyStoreCreditToCartArgs = {
  input: ApplyStoreCreditToCartInput;
};


export type MutationAssignCompareListToCustomerArgs = {
  uid: Scalars['ID'];
};


export type MutationAssignCustomerToGuestCartArgs = {
  cart_id: Scalars['String'];
};


export type MutationChangeCustomerPasswordArgs = {
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
};


export type MutationClearCustomerCartArgs = {
  cartUid: Scalars['String'];
};


export type MutationContactUsArgs = {
  input: ContactUsInput;
};


export type MutationCopyProductsBetweenWishlistsArgs = {
  destinationWishlistUid: Scalars['ID'];
  sourceWishlistUid: Scalars['ID'];
  wishlistItems: Array<WishlistItemCopyInput>;
};


export type MutationCreateAccountFromOrderArgs = {
  orderId: Scalars['String'];
};


export type MutationCreateAfterpayCheckoutArgs = {
  input?: InputMaybe<CreateAfterpayCheckoutInput>;
};


export type MutationCreateCartRedirectUrlsArgs = {
  cartId: Scalars['ID'];
};


export type MutationCreateCompareListArgs = {
  input?: InputMaybe<CreateCompareListInput>;
};


export type MutationCreateCustomerArgs = {
  input: CustomerInput;
};


export type MutationCreateCustomerAddressArgs = {
  input: CustomerAddressInput;
};


export type MutationCreateCustomerV2Args = {
  input: CustomerCreateInput;
};


export type MutationCreateEmptyCartArgs = {
  input?: InputMaybe<CreateEmptyCartInput>;
};


export type MutationCreateGiftRegistryArgs = {
  giftRegistry: CreateGiftRegistryInput;
};


export type MutationCreatePayflowProTokenArgs = {
  input: PayflowProTokenInput;
};


export type MutationCreatePaypalExpressTokenArgs = {
  input: PaypalExpressTokenInput;
};


export type MutationCreateProductReviewArgs = {
  input: CreateProductReviewInput;
};


export type MutationCreateWishlistArgs = {
  input: CreateWishlistInput;
};


export type MutationDeleteCompareListArgs = {
  uid: Scalars['ID'];
};


export type MutationDeleteCustomerAddressArgs = {
  id: Scalars['Int'];
};


export type MutationDeletePaymentTokenArgs = {
  public_hash: Scalars['String'];
};


export type MutationDeleteWishlistArgs = {
  wishlistId: Scalars['ID'];
};


export type MutationGenerateCustomerTokenArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationGenerateCustomerTokenAsAdminArgs = {
  input: GenerateCustomerTokenAsAdminInput;
};


export type MutationGetCustomerTokenBySecretCodeArgs = {
  secret_code: Scalars['String'];
};


export type MutationHandlePayflowProResponseArgs = {
  input: PayflowProResponseInput;
};


export type MutationMergeCartsArgs = {
  destination_cart_id?: InputMaybe<Scalars['String']>;
  source_cart_id: Scalars['String'];
};


export type MutationMoveCartItemsToGiftRegistryArgs = {
  cartUid: Scalars['ID'];
  giftRegistryUid: Scalars['ID'];
};


export type MutationMoveProductsBetweenWishlistsArgs = {
  destinationWishlistUid: Scalars['ID'];
  sourceWishlistUid: Scalars['ID'];
  wishlistItems: Array<WishlistItemMoveInput>;
};


export type MutationPlaceOrderArgs = {
  input?: InputMaybe<PlaceOrderInput>;
};


export type MutationPostContactFormArgs = {
  input?: InputMaybe<ContactUsInput>;
};


export type MutationRedeemGiftCardBalanceAsStoreCreditArgs = {
  input: GiftCardAccountInput;
};


export type MutationRemoveCouponFromCartArgs = {
  input?: InputMaybe<RemoveCouponFromCartInput>;
};


export type MutationRemoveGiftCardFromCartArgs = {
  input?: InputMaybe<RemoveGiftCardFromCartInput>;
};


export type MutationRemoveGiftRegistryArgs = {
  giftRegistryUid: Scalars['ID'];
};


export type MutationRemoveGiftRegistryItemsArgs = {
  giftRegistryUid: Scalars['ID'];
  itemsUid: Array<Scalars['ID']>;
};


export type MutationRemoveGiftRegistryRegistrantsArgs = {
  giftRegistryUid: Scalars['ID'];
  registrantsUid: Array<Scalars['ID']>;
};


export type MutationRemoveItemFromCartArgs = {
  input?: InputMaybe<RemoveItemFromCartInput>;
};


export type MutationRemoveProductsFromCompareListArgs = {
  input?: InputMaybe<RemoveProductsFromCompareListInput>;
};


export type MutationRemoveProductsFromWishlistArgs = {
  wishlistId: Scalars['ID'];
  wishlistItemsIds: Array<Scalars['ID']>;
};


export type MutationRemoveReturnTrackingArgs = {
  input: RemoveReturnTrackingInput;
};


export type MutationRemoveRewardPointsFromCartArgs = {
  cartId: Scalars['ID'];
};


export type MutationRemoveStoreCreditFromCartArgs = {
  input: RemoveStoreCreditFromCartInput;
};


export type MutationReorderItemsArgs = {
  orderNumber: Scalars['String'];
};


export type MutationRequestPasswordResetEmailArgs = {
  email: Scalars['String'];
};


export type MutationRequestReturnArgs = {
  input: RequestReturnInput;
};


export type MutationResetPasswordArgs = {
  email: Scalars['String'];
  newPassword: Scalars['String'];
  resetPasswordToken: Scalars['String'];
};


export type MutationSendEmailToFriendArgs = {
  input?: InputMaybe<SendEmailToFriendInput>;
};


export type MutationSetBillingAddressOnCartArgs = {
  input?: InputMaybe<SetBillingAddressOnCartInput>;
};


export type MutationSetGiftOptionsOnCartArgs = {
  input?: InputMaybe<SetGiftOptionsOnCartInput>;
};


export type MutationSetGuestEmailOnCartArgs = {
  input?: InputMaybe<SetGuestEmailOnCartInput>;
};


export type MutationSetPaymentMethodAndPlaceOrderArgs = {
  input?: InputMaybe<SetPaymentMethodAndPlaceOrderInput>;
};


export type MutationSetPaymentMethodOnCartArgs = {
  input?: InputMaybe<SetPaymentMethodOnCartInput>;
};


export type MutationSetShippingAddressesOnCartArgs = {
  input?: InputMaybe<SetShippingAddressesOnCartInput>;
};


export type MutationSetShippingMethodsOnCartArgs = {
  input?: InputMaybe<SetShippingMethodsOnCartInput>;
};


export type MutationShareGiftRegistryArgs = {
  giftRegistryUid: Scalars['ID'];
  invitees: Array<ShareGiftRegistryInviteeInput>;
  sender: ShareGiftRegistrySenderInput;
};


export type MutationShareWishlistArgs = {
  input: WishlistInput;
};


export type MutationSubscribeEmailToNewsletterArgs = {
  email: Scalars['String'];
};


export type MutationUpdateCartItemsArgs = {
  input?: InputMaybe<UpdateCartItemsInput>;
};


export type MutationUpdateCustomerArgs = {
  input: CustomerInput;
};


export type MutationUpdateCustomerAddressArgs = {
  id: Scalars['Int'];
  input?: InputMaybe<CustomerAddressInput>;
};


export type MutationUpdateCustomerEmailArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateCustomerV2Args = {
  input: CustomerUpdateInput;
};


export type MutationUpdateGiftRegistryArgs = {
  giftRegistry: UpdateGiftRegistryInput;
  giftRegistryUid: Scalars['ID'];
};


export type MutationUpdateGiftRegistryItemsArgs = {
  giftRegistryUid: Scalars['ID'];
  items: Array<UpdateGiftRegistryItemInput>;
};


export type MutationUpdateGiftRegistryRegistrantsArgs = {
  giftRegistryUid: Scalars['ID'];
  registrants: Array<UpdateGiftRegistryRegistrantInput>;
};


export type MutationUpdateProductsInWishlistArgs = {
  wishlistId: Scalars['ID'];
  wishlistItems: Array<WishlistItemUpdateInput>;
};


export type MutationUpdateWishlistArgs = {
  name?: InputMaybe<Scalars['String']>;
  visibility?: InputMaybe<WishlistVisibilityEnum>;
  wishlistId: Scalars['ID'];
};

/** Contains an error message when an invalid UID was specified. */
export type NoSuchEntityUidError = ErrorInterface & {
  __typename?: 'NoSuchEntityUidError';
  /** The returned error message. */
  message: Scalars['String'];
  /** The specified invalid unique ID of an object. */
  uid: Scalars['ID'];
};

export type ObjectDataTypeEnum =
  | 'BOOLEAN'
  | 'COMPLEX'
  | 'FLOAT'
  | 'INT'
  | 'STRING';

/** Contains the order ID. */
export type Order = {
  __typename?: 'Order';
  adyen_payment_status?: Maybe<AdyenPaymentStatus>;
  /** Cart ID. */
  cart_id: Scalars['String'];
  /** @deprecated Use `order_number` instead. */
  order_id?: Maybe<Scalars['String']>;
  /** The unique ID for an `Order` object. */
  order_number: Scalars['String'];
};

/** Contains detailed information about an order's billing and shipping addresses. */
export type OrderAddress = {
  __typename?: 'OrderAddress';
  /** The city or town. */
  city: Scalars['String'];
  /** The customer's company. */
  company?: Maybe<Scalars['String']>;
  /** The customer's country. */
  country_code?: Maybe<CountryCodeEnum>;
  /** The fax number. */
  fax?: Maybe<Scalars['String']>;
  /** The first name of the person associated with the shipping/billing address. */
  firstname: Scalars['String'];
  /** The family name of the person associated with the shipping/billing address. */
  lastname: Scalars['String'];
  /** The middle name of the person associated with the shipping/billing address. */
  middlename?: Maybe<Scalars['String']>;
  /** The customer's ZIP or postal code. */
  postcode?: Maybe<Scalars['String']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']>;
  /** The state or province name. */
  region?: Maybe<Scalars['String']>;
  /** The unique ID for a `Region` object of a pre-defined region. */
  region_id?: Maybe<Scalars['ID']>;
  /** An array of strings that define the street number and name. */
  street: Array<Maybe<Scalars['String']>>;
  /** A value such as Sr., Jr., or III. */
  suffix?: Maybe<Scalars['String']>;
  /** The telephone number. */
  telephone?: Maybe<Scalars['String']>;
  /** The customer's Value-added tax (VAT) number (for corporate customers). */
  vat_id?: Maybe<Scalars['String']>;
};

export type OrderItem = OrderItemInterface & {
  __typename?: 'OrderItem';
  /** The final discount information for the product. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** Indicates whether the order item is eligible to be in a return request. */
  eligible_for_return?: Maybe<Scalars['Boolean']>;
  /** The entered option for the base product, such as a logo or image. */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The selected gift message for the order item */
  gift_message?: Maybe<GiftMessage>;
  /** The selected gift wrapping for the order item. */
  gift_wrapping?: Maybe<GiftWrapping>;
  /** The unique ID for an `OrderItemInterface` object. */
  id: Scalars['ID'];
  /** Query line total for the order */
  line_total?: Maybe<Scalars['Float']>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price of the base product, including selected options. */
  product_sale_price: Money;
  /** Sale price incl. tax for the order item */
  product_sale_price_incl_tax: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']>;
  /** URL key of the base product. */
  product_url_key?: Maybe<Scalars['String']>;
  /** The number of canceled items. */
  quantity_canceled?: Maybe<Scalars['Float']>;
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']>;
  /** The number of units ordered for this item. */
  quantity_ordered?: Maybe<Scalars['Float']>;
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']>;
  /** The number of returned items. */
  quantity_returned?: Maybe<Scalars['Float']>;
  /** The number of shipped items. */
  quantity_shipped?: Maybe<Scalars['Float']>;
  /** The selected options for the base product, such as color or size. */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item. */
  status?: Maybe<Scalars['String']>;
};

/** Order item details. */
export type OrderItemInterface = {
  /** The final discount information for the product. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** Indicates whether the order item is eligible to be in a return request. */
  eligible_for_return?: Maybe<Scalars['Boolean']>;
  /** The entered option for the base product, such as a logo or image. */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The selected gift message for the order item */
  gift_message?: Maybe<GiftMessage>;
  /** The selected gift wrapping for the order item. */
  gift_wrapping?: Maybe<GiftWrapping>;
  /** The unique ID for an `OrderItemInterface` object. */
  id: Scalars['ID'];
  /** Query line total for the order */
  line_total?: Maybe<Scalars['Float']>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price of the base product, including selected options. */
  product_sale_price: Money;
  /** Sale price incl. tax for the order item */
  product_sale_price_incl_tax: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']>;
  /** URL key of the base product. */
  product_url_key?: Maybe<Scalars['String']>;
  /** The number of canceled items. */
  quantity_canceled?: Maybe<Scalars['Float']>;
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']>;
  /** The number of units ordered for this item. */
  quantity_ordered?: Maybe<Scalars['Float']>;
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']>;
  /** The number of returned items. */
  quantity_returned?: Maybe<Scalars['Float']>;
  /** The number of shipped items. */
  quantity_shipped?: Maybe<Scalars['Float']>;
  /** The selected options for the base product, such as color or size. */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item. */
  status?: Maybe<Scalars['String']>;
};

/** Represents order item options like selected or entered. */
export type OrderItemOption = {
  __typename?: 'OrderItemOption';
  /** The name of the option. */
  label: Scalars['String'];
  /** The value of the option. */
  value: Scalars['String'];
};

/** Contains details about the payment method used to pay for the order. */
export type OrderPaymentMethod = {
  __typename?: 'OrderPaymentMethod';
  /** Additional data per payment method type. */
  additional_data?: Maybe<Array<Maybe<KeyValue>>>;
  /** The label that describes the payment method. */
  name: Scalars['String'];
  /** The payment method code that indicates how the order was paid for. */
  type: Scalars['String'];
};

/** Contains order shipment details. */
export type OrderShipment = {
  __typename?: 'OrderShipment';
  /** Comments added to the shipment. */
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** The unique ID for a `OrderShipment` object. */
  id: Scalars['ID'];
  /** An array of items included in the shipment. */
  items?: Maybe<Array<Maybe<ShipmentItemInterface>>>;
  /** The sequential credit shipment number. */
  number: Scalars['String'];
  /** An array of shipment tracking details. */
  tracking?: Maybe<Array<Maybe<ShipmentTracking>>>;
};

/** Contains details about the sales total amounts used to calculate the final price. */
export type OrderTotal = {
  __typename?: 'OrderTotal';
  /** The final base grand total amount in the base currency. */
  base_grand_total: Money;
  /** The applied discounts to the order. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The final total amount, including shipping, discounts, and taxes. */
  grand_total: Money;
  /** Grand Total Exclude Tax */
  grand_total_excl_tax?: Maybe<Money>;
  /** Details about the shipping and handling costs for the order. */
  shipping_handling?: Maybe<ShippingHandling>;
  /** The subtotal of the order, excluding shipping, discounts, and taxes. */
  subtotal: Money;
  /** Subtotal Including Tax */
  subtotal_incl_tax?: Maybe<Money>;
  /** The order tax details. */
  taxes?: Maybe<Array<Maybe<TaxItem>>>;
  /** The gift card balance applied to the order. */
  total_giftcard?: Maybe<Money>;
  /** The shipping amount for the order. */
  total_shipping: Money;
  /** The amount of tax applied to the order. */
  total_tax: Money;
};

/** Contains required input for Payflow Express Checkout payments. */
export type PayflowExpressInput = {
  /** The unique ID of the PayPal user. */
  payer_id: Scalars['String'];
  /** The token returned by the createPaypalExpressToken mutation. */
  token: Scalars['String'];
};

/** A set of relative URLs that PayPal uses in response to various actions during the authorization process. Adobe Commerce prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String'];
  /** The relative URL of the transaction error page that PayPal redirects to upon payment error. If the full URL to this page is https://www.example.com/paypal/action/error.html, the relative URL is paypal/action/error.html. */
  error_url: Scalars['String'];
  /** The relative URL of the order confirmation page that PayPal redirects to when the payment is successful and additional confirmation is not needed. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String'];
};

/** Indicates the mode for payment. Applies to the Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkMode =
  | 'LIVE'
  | 'TEST';

/** Contains information used to generate PayPal iframe for transaction. Applies to Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkToken = {
  __typename?: 'PayflowLinkToken';
  /** The mode for the Payflow transaction. */
  mode?: Maybe<PayflowLinkMode>;
  /** The PayPal URL used for requesting a Payflow form. */
  paypal_url?: Maybe<Scalars['String']>;
  /** The secure token generated by PayPal. */
  secure_token?: Maybe<Scalars['String']>;
  /** The secure token ID generated by PayPal. */
  secure_token_id?: Maybe<Scalars['String']>;
};

/** Contains information required to fetch payment token information for the Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkTokenInput = {
  /** The unique ID that identifies the customer's cart. */
  cart_id: Scalars['String'];
};

/** Contains input for the Payflow Pro and Payments Pro payment methods. */
export type PayflowProInput = {
  /** Required input for credit card related information. */
  cc_details: CreditCardDetailsInput;
  /** Indicates whether details about the shopper's credit/debit card should be tokenized for later usage. Required only if Vault is enabled for the PayPal Payflow Pro payment integration. */
  is_active_payment_token_enabler?: InputMaybe<Scalars['Boolean']>;
};

/** Input required to complete payment. Applies to Payflow Pro and Payments Pro payment methods. */
export type PayflowProResponseInput = {
  /** The unique ID that identifies the shopper's cart. */
  cart_id: Scalars['String'];
  /** The payload returned from PayPal. */
  paypal_payload: Scalars['String'];
};

export type PayflowProResponseOutput = {
  __typename?: 'PayflowProResponseOutput';
  /** The cart with the updated selected payment method. */
  cart: Cart;
};

/** Contains the secure information used to authorize transaction. Applies to Payflow Pro and Payments Pro payment methods. */
export type PayflowProToken = {
  __typename?: 'PayflowProToken';
  /** The RESPMSG returned by PayPal. If the `result` is `0`, then `response_message` is `Approved`. */
  response_message: Scalars['String'];
  /** A non-zero value if any errors occurred. */
  result: Scalars['Int'];
  /** The RESULT returned by PayPal. A value of `0` indicates the transaction was approved. */
  result_code: Scalars['Int'];
  /** A secure token generated by PayPal. */
  secure_token: Scalars['String'];
  /** A secure token ID generated by PayPal. */
  secure_token_id: Scalars['String'];
};

/** Contains input required to fetch payment token information for the Payflow Pro and Payments Pro payment methods. */
export type PayflowProTokenInput = {
  /** The unique ID that identifies the shopper's cart. */
  cart_id: Scalars['String'];
  /** A set of relative URLs that PayPal uses for callback. */
  urls: PayflowProUrlInput;
};

/** Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for the Payflow Pro and Payment Pro payment methods. */
export type PayflowProUrlInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String'];
  /** The relative URL of the transaction error page that PayPal redirects to upon payment error. If the full URL to this page is https://www.example.com/paypal/action/error.html, the relative URL is paypal/action/error.html. */
  error_url: Scalars['String'];
  /** The relative URL of the final confirmation page that PayPal redirects to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String'];
};

/** Defines the payment method. */
export type PaymentMethodInput = {
  /** Required input for Adyen Boleto payments. */
  adyen_additional_data_boleto?: InputMaybe<AdyenAdditionalDataBoleto>;
  /** Required input for Adyen CC payments. */
  adyen_additional_data_cc?: InputMaybe<AdyenAdditionalDataCc>;
  /** Required input for Adyen HPP payments. */
  adyen_additional_data_hpp?: InputMaybe<AdyenAdditionalDataHpp>;
  /** Required input for Adyen Oneclick payments. */
  adyen_additional_data_oneclick?: InputMaybe<AdyenAdditionalDataOneclick>;
  /** Required input for Adyen POS Cloud payments. */
  adyen_additional_data_pos_cloud?: InputMaybe<AdyenAdditionalDataPosCloud>;
  /** Required input for Afterpay payment */
  afterpay?: InputMaybe<AfterpayInput>;
  braintree?: InputMaybe<BraintreeInput>;
  braintree_cc_vault?: InputMaybe<BraintreeCcVaultInput>;
  /** The internal name for the payment method. */
  code: Scalars['String'];
  /** Required input for PayPal Hosted pro payments. */
  hosted_pro?: InputMaybe<HostedProInput>;
  /** Required input for Payflow Express Checkout payments. */
  payflow_express?: InputMaybe<PayflowExpressInput>;
  /** Required input for PayPal Payflow Link and Payments Advanced payments. */
  payflow_link?: InputMaybe<PayflowLinkInput>;
  /** Required input for PayPal Payflow Pro and Payment Pro payments. */
  payflowpro?: InputMaybe<PayflowProInput>;
  /** Required input for PayPal Payflow Pro vault payments. */
  payflowpro_cc_vault?: InputMaybe<VaultTokenInput>;
  /** Required input for Express Checkout and Payments Standard payments. */
  paypal_express?: InputMaybe<PaypalExpressInput>;
  /** The purchase order number. Optional for most payment methods. */
  purchase_order_number?: InputMaybe<Scalars['String']>;
};

/** The stored payment method available to the customer. */
export type PaymentToken = {
  __typename?: 'PaymentToken';
  /** A description of the stored account details. */
  details?: Maybe<Scalars['String']>;
  /** The payment method code associated with the token. */
  payment_method_code: Scalars['String'];
  /** The public hash of the token. */
  public_hash: Scalars['String'];
  /** Specifies the payment token type. */
  type: PaymentTokenTypeEnum;
};

/** The list of available payment token types. */
export type PaymentTokenTypeEnum =
  /** phpcs:ignore Magento2.GraphQL.ValidArgumentName */
  | 'account'
  /** phpcs:ignore Magento2.GraphQL.ValidArgumentName */
  | 'card';

export type PaypalExpressClientConfig = {
  __typename?: 'PaypalExpressClientConfig';
  button?: Maybe<Scalars['String']>;
  environment?: Maybe<Scalars['String']>;
  is_guest_checkout_allowed?: Maybe<Scalars['Boolean']>;
  is_visible_on_product_page?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  merchant_id?: Maybe<Scalars['String']>;
  styles?: Maybe<Array<Maybe<ItemMap>>>;
};

export type PaypalExpressConfig = {
  __typename?: 'PaypalExpressConfig';
  billing_agreement_code?: Maybe<Scalars['String']>;
  in_context_config?: Maybe<PaypalExpressInContextConfig>;
  is_context_checkout?: Maybe<Scalars['Boolean']>;
  paylater_enabled?: Maybe<Scalars['Boolean']>;
  payment_acceptance_mark_href?: Maybe<Scalars['String']>;
  payment_acceptance_mark_src?: Maybe<Scalars['String']>;
  redirect_url?: Maybe<Scalars['String']>;
  sdk_url?: Maybe<Scalars['String']>;
};

export type PaypalExpressInContextConfig = {
  __typename?: 'PaypalExpressInContextConfig';
  client_config?: Maybe<PaypalExpressClientConfig>;
  in_context_id?: Maybe<Scalars['String']>;
  merchant_id?: Maybe<Scalars['String']>;
};

/** Contains required input for Express Checkout and Payments Standard payments. */
export type PaypalExpressInput = {
  /** The unique ID of the PayPal user. */
  payer_id: Scalars['String'];
  /** The token returned by the `createPaypalExpressToken` mutation. */
  token: Scalars['String'];
};

/** Deprecated. Use `PaypalExpressTokenOutput` instead. */
export type PaypalExpressToken = {
  __typename?: 'PaypalExpressToken';
  /**
   * A set of URLs that allow the buyer to authorize payment and adjust checkout details.
   * @deprecated Use `PaypalExpressTokenOutput.paypal_urls` instead.
   */
  paypal_urls?: Maybe<PaypalExpressUrlList>;
  /**
   * The token returned by PayPal.
   * @deprecated Use `PaypalExpressTokenOutput.token` instead.
   */
  token?: Maybe<Scalars['String']>;
};

/** Defines the attributes required to receive a payment token for Express Checkout and Payments Standard payment methods. */
export type PaypalExpressTokenInput = {
  /** The unique ID that identifies the customer's cart. */
  cart_id: Scalars['String'];
  /** The payment method code. */
  code: Scalars['String'];
  /** Indicates whether the buyer selected the quick checkout button. The default value is false. */
  express_button?: InputMaybe<Scalars['Boolean']>;
  /** A set of relative URLs that PayPal uses in response to various actions during the authorization process. */
  urls: PaypalExpressUrlsInput;
  /** Indicates whether the buyer clicked the PayPal credit button. The default value is false. */
  use_paypal_credit?: InputMaybe<Scalars['Boolean']>;
};

/** Contains the token returned by PayPal and a set of URLs that allow the buyer to authorize payment and adjust checkout details. Applies to Express Checkout and Payments Standard payment methods. */
export type PaypalExpressTokenOutput = {
  __typename?: 'PaypalExpressTokenOutput';
  /** A set of URLs that allow the buyer to authorize payment and adjust checkout details. */
  paypal_urls?: Maybe<PaypalExpressUrlList>;
  /** The token returned by PayPal. */
  token?: Maybe<Scalars['String']>;
};

/** Contains a set of URLs that allow the buyer to authorize payment and adjust checkout details for Express Checkout and Payments Standard transactions. */
export type PaypalExpressUrlList = {
  __typename?: 'PaypalExpressUrlList';
  /** The PayPal URL that allows the buyer to edit their checkout details. */
  edit?: Maybe<Scalars['String']>;
  /** The URL to the PayPal login page. */
  start?: Maybe<Scalars['String']>;
};

/** Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Express Checkout and Payments Standard payment methods. */
export type PaypalExpressUrlsInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String'];
  /** The relative URL of the page that PayPal redirects to when the payment has been put on hold for additional review. This condition mostly applies to ACH transactions, and is not applicable to most PayPal solutions. If the full URL to this page is https://www.example.com/paypal/action/success_pending.html, the relative URL is paypal/action/success_pending.html. */
  pending_url?: InputMaybe<Scalars['String']>;
  /** The relative URL of the final confirmation page that PayPal redirects to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String'];
  /** The relative URL of the order confirmation page that PayPal redirects to when the payment is successful and additional confirmation is not needed. Not applicable to most PayPal solutions. If the full URL to this page is https://www.example.com/paypal/action/success.html, the relative URL is paypal/action/success.html. */
  success_url?: InputMaybe<Scalars['String']>;
};

/** Contains attributes specific to tangible products. */
export type PhysicalProductInterface = {
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']>;
};

/** Defines Pickup Location information. */
export type PickupLocation = {
  __typename?: 'PickupLocation';
  city?: Maybe<Scalars['String']>;
  contact_name?: Maybe<Scalars['String']>;
  country_id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  pickup_location_code?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  region_id?: Maybe<Scalars['Int']>;
  street?: Maybe<Scalars['String']>;
};

/** PickupLocationFilterInput defines the list of attributes and filters for the search. */
export type PickupLocationFilterInput = {
  /** Filter by city. */
  city?: InputMaybe<FilterTypeInput>;
  /** Filter by country. */
  country_id?: InputMaybe<FilterTypeInput>;
  /** Filter by pickup location name. */
  name?: InputMaybe<FilterTypeInput>;
  /** Filter by pickup location code. */
  pickup_location_code?: InputMaybe<FilterTypeInput>;
  /** Filter by postcode. */
  postcode?: InputMaybe<FilterTypeInput>;
  /** Filter by region. */
  region?: InputMaybe<FilterTypeInput>;
  /** Filter by region id. */
  region_id?: InputMaybe<FilterTypeInput>;
  /** Filter by street. */
  street?: InputMaybe<FilterTypeInput>;
};

/** PickupLocationSortInput specifies attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. */
export type PickupLocationSortInput = {
  /** City where pickup location is placed. */
  city?: InputMaybe<SortEnum>;
  /** Name of the contact person. */
  contact_name?: InputMaybe<SortEnum>;
  /** Id of the country in two letters. */
  country_id?: InputMaybe<SortEnum>;
  /** Description of the pickup location. */
  description?: InputMaybe<SortEnum>;
  /** Distance to the address, requested by distance filter. Applicable only with distance filter. If distance sort order is present, all other sort orders will be ignored. */
  distance?: InputMaybe<SortEnum>;
  /** Contact email of the pickup location. */
  email?: InputMaybe<SortEnum>;
  /** Contact fax of the pickup location. */
  fax?: InputMaybe<SortEnum>;
  /** Geographic latitude where pickup location is placed. */
  latitude?: InputMaybe<SortEnum>;
  /** Geographic longitude where pickup location is placed. */
  longitude?: InputMaybe<SortEnum>;
  /** The pickup location name. Customer use this to identify the pickup location. */
  name?: InputMaybe<SortEnum>;
  /** Contact phone number of the pickup location. */
  phone?: InputMaybe<SortEnum>;
  /** A code assigned to pickup location to identify the source. */
  pickup_location_code?: InputMaybe<SortEnum>;
  /** Postcode where pickup location is placed. */
  postcode?: InputMaybe<SortEnum>;
  /** Name of the region. */
  region?: InputMaybe<SortEnum>;
  /** Id of the region. */
  region_id?: InputMaybe<SortEnum>;
  /** Street where pickup location is placed. */
  street?: InputMaybe<SortEnum>;
};

/** Top level object returned in a pickup locations search. */
export type PickupLocations = {
  __typename?: 'PickupLocations';
  /** An array of pickup locations that match the specific search request. */
  items?: Maybe<Array<Maybe<PickupLocation>>>;
  /** An object that includes the page_info and currentPage values specified in the query. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The number of products returned. */
  total_count?: Maybe<Scalars['Int']>;
};

/** Specifies the quote to be converted to an order. */
export type PlaceOrderInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String'];
};

/** Contains the results of the request to place an order. */
export type PlaceOrderOutput = {
  __typename?: 'PlaceOrderOutput';
  /** The ID of the order. */
  order: Order;
};

/** Deprecated. Use `ProductPrice` instead. Defines the price of a product as well as any tax-related adjustments. */
export type Price = {
  __typename?: 'Price';
  /**
   * An array that provides information about tax, weee, or weee_tax adjustments.
   * @deprecated Use `ProductPrice` instead.
   */
  adjustments?: Maybe<Array<Maybe<PriceAdjustment>>>;
  /**
   * The price of a product plus a three-letter currency code.
   * @deprecated Use `ProductPrice` instead.
   */
  amount?: Maybe<Money>;
};

/** Deprecated. Taxes will be included or excluded in the price. Defines the amount of money to apply as an adjustment, the type of adjustment to apply, and whether the item is included or excluded from the adjustment. */
export type PriceAdjustment = {
  __typename?: 'PriceAdjustment';
  /** The amount of the price adjustment and its currency code. */
  amount?: Maybe<Money>;
  /**
   * Indicates whether the adjustment involves tax, weee, or weee_tax.
   * @deprecated `PriceAdjustment` is deprecated.
   */
  code?: Maybe<PriceAdjustmentCodesEnum>;
  /**
   * Indicates whether the entity described by the code attribute is included or excluded from the adjustment.
   * @deprecated `PriceAdjustment` is deprecated.
   */
  description?: Maybe<PriceAdjustmentDescriptionEnum>;
};

/** `PriceAdjustment.code` is deprecated. */
export type PriceAdjustmentCodesEnum =
  | 'TAX'
  | 'WEEE'
  | 'WEEE_TAX';

/** `PriceAdjustmentDescriptionEnum` is deprecated. States whether a price adjustment is included or excluded. */
export type PriceAdjustmentDescriptionEnum =
  | 'EXCLUDED'
  | 'INCLUDED';

/** Contains the price range for a product. If the product has a single price, the minimum and maximum price will be the same. */
export type PriceRange = {
  __typename?: 'PriceRange';
  /** The highest possible price for the product. */
  maximum_price?: Maybe<ProductPrice>;
  /** The lowest possible price for the product. */
  minimum_price: ProductPrice;
};

/** Defines the price type. */
export type PriceTypeEnum =
  | 'DYNAMIC'
  | 'FIXED'
  | 'PERCENT';

/** Defines whether a bundle product's price is displayed as the lowest possible value or as a range. */
export type PriceViewEnum =
  | 'AS_LOW_AS'
  | 'PRICE_RANGE';

/** Contains a product attribute code and value. */
export type ProductAttribute = {
  __typename?: 'ProductAttribute';
  /** The unique identifier for a product attribute code. */
  code: Scalars['String'];
  /** The display value of the attribute. */
  value: Scalars['String'];
};

/** Defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type ProductAttributeFilterInput = {
  /** Attribute label: Activity */
  activity?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Brand */
  brand?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Category Gear */
  category_gear?: InputMaybe<FilterEqualTypeInput>;
  /** Deprecated: use `category_uid` to filter product by category ID. */
  category_id?: InputMaybe<FilterEqualTypeInput>;
  /** Filter product by the unique ID for a `CategoryInterface` object. */
  category_uid?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Climate */
  climate?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Collar */
  collar?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Color */
  color?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Description */
  description?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: Eco Collection */
  eco_collection?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Erin Recommends */
  erin_recommends?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Features */
  features_bags?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Format */
  format?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Gender */
  gender?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Seller */
  marketplacer_seller?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Material */
  material?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Product Name */
  name?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: New */
  new?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Pattern */
  pattern?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Performance Fabric */
  performance_fabric?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Price */
  price?: InputMaybe<FilterRangeTypeInput>;
  /** Attribute label: Purpose */
  purpose?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: rating */
  rating?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Sale */
  sale?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Short Description */
  short_description?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: Size */
  size?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: SKU */
  sku?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Sleeve */
  sleeve?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Strap/Handle */
  strap_bags?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Style Bags */
  style_bags?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Style Bottom */
  style_bottom?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Style General */
  style_general?: InputMaybe<FilterEqualTypeInput>;
  /** The part of the URL that identifies the product */
  url_key?: InputMaybe<FilterEqualTypeInput>;
};

export type ProductAttributeMetadata = AttributeMetadataInterface & {
  __typename?: 'ProductAttributeMetadata';
  /** An array of attribute labels defined for the current store. */
  attribute_labels?: Maybe<Array<Maybe<StoreLabels>>>;
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  code?: Maybe<Scalars['String']>;
  /** The data type of the attribute. */
  data_type?: Maybe<ObjectDataTypeEnum>;
  /** The type of entity that defines the attribute. */
  entity_type?: Maybe<AttributeEntityTypeEnum>;
  /** Indicates whether the attribute is a system attribute. */
  is_system?: Maybe<Scalars['Boolean']>;
  /** The label assigned to the attribute. */
  label?: Maybe<Scalars['String']>;
  /** The relative position of the attribute. */
  sort_order?: Maybe<Scalars['Int']>;
  /** Frontend UI properties of the attribute. */
  ui_input?: Maybe<UiInputTypeInterface>;
  /** The unique ID of an attribute. */
  uid?: Maybe<Scalars['ID']>;
  /** Places in the store front where the attribute is used. */
  used_in_components?: Maybe<Array<Maybe<CustomAttributesListsEnum>>>;
};

/** Specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. It's possible to sort products using searchable attributes with enabled 'Use in Filter Options' option */
export type ProductAttributeSortInput = {
  /** Attribute label: Product Name */
  name?: InputMaybe<SortEnum>;
  /** Sort by the position assigned to each product. */
  position?: InputMaybe<SortEnum>;
  /** Attribute label: Price */
  price?: InputMaybe<SortEnum>;
  /** Sort by the search relevance score (default). */
  relevance?: InputMaybe<SortEnum>;
};

export type ProductAvailability = {
  __typename?: 'ProductAvailability';
  /** A few words telling the customer how long it will normally take to ship this product, such as 'Usually ships in 24 hours'. */
  description?: Maybe<Scalars['String']>;
  /** The message to be shown in the store when a product is put into the pre-order availability state, e.g. "Expected release date is %%DATE%%" */
  message?: Maybe<Scalars['String']>;
  /** The availability state of the product. */
  status?: Maybe<ProductAvailabilityStatus>;
  /** Product release date */
  willBeReleasedAt?: Maybe<ReleaseDate>;
};

/** Product availability status */
export type ProductAvailabilityStatus =
  | 'Available'
  | 'Preorder'
  | 'Unavailable';

/** Contains the discount applied to a product price. */
export type ProductDiscount = {
  __typename?: 'ProductDiscount';
  /** The actual value of the discount. */
  amount_off?: Maybe<Scalars['Float']>;
  /** The discount expressed a percentage. */
  percent_off?: Maybe<Scalars['Float']>;
};

/** ProductFilterInput is deprecated, use @ProductAttributeFilterInput instead. ProductFilterInput defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type ProductFilterInput = {
  /** The category ID the product belongs to. */
  category_id?: InputMaybe<FilterTypeInput>;
  /** The product's country of origin. */
  country_of_manufacture?: InputMaybe<FilterTypeInput>;
  /** The timestamp indicating when the product was created. */
  created_at?: InputMaybe<FilterTypeInput>;
  /** The name of a custom layout. */
  custom_layout?: InputMaybe<FilterTypeInput>;
  /** XML code that is applied as a layout update to the product page. */
  custom_layout_update?: InputMaybe<FilterTypeInput>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: InputMaybe<FilterTypeInput>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: InputMaybe<FilterTypeInput>;
  /** Indicates whether additional attributes have been created for the product. */
  has_options?: InputMaybe<FilterTypeInput>;
  /** The relative path to the main image on the product page. */
  image?: InputMaybe<FilterTypeInput>;
  /** The label assigned to a product image. */
  image_label?: InputMaybe<FilterTypeInput>;
  /** Indicates whether the product can be returned. */
  is_returnable?: InputMaybe<FilterTypeInput>;
  /** A number representing the product's manufacturer. */
  manufacturer?: InputMaybe<FilterTypeInput>;
  /** The numeric maximal price of the product. Do not include the currency code. */
  max_price?: InputMaybe<FilterTypeInput>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: InputMaybe<FilterTypeInput>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: InputMaybe<FilterTypeInput>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: InputMaybe<FilterTypeInput>;
  /** The numeric minimal price of the product. Do not include the currency code. */
  min_price?: InputMaybe<FilterTypeInput>;
  /** The product name. Customers use this name to identify the product. */
  name?: InputMaybe<FilterTypeInput>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  news_from_date?: InputMaybe<FilterTypeInput>;
  /** The end date for new product listings. */
  news_to_date?: InputMaybe<FilterTypeInput>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: InputMaybe<FilterTypeInput>;
  /** The keyword required to perform a logical OR comparison. */
  or?: InputMaybe<ProductFilterInput>;
  /** The price of an item. */
  price?: InputMaybe<FilterTypeInput>;
  /** Indicates whether the product has required options. */
  required_options?: InputMaybe<FilterTypeInput>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: InputMaybe<FilterTypeInput>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: InputMaybe<FilterTypeInput>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: InputMaybe<FilterTypeInput>;
  /** The label assigned to a product's small image. */
  small_image_label?: InputMaybe<FilterTypeInput>;
  /** The beginning date that a product has a special price. */
  special_from_date?: InputMaybe<FilterTypeInput>;
  /** The discounted price of the product. Do not include the currency code. */
  special_price?: InputMaybe<FilterTypeInput>;
  /** The end date that a product has a special price. */
  special_to_date?: InputMaybe<FilterTypeInput>;
  /** The file name of a swatch image. */
  swatch_image?: InputMaybe<FilterTypeInput>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: InputMaybe<FilterTypeInput>;
  /** The label assigned to a product's thumbnail image. */
  thumbnail_label?: InputMaybe<FilterTypeInput>;
  /** The price when tier pricing is in effect and the items purchased threshold has been reached. */
  tier_price?: InputMaybe<FilterTypeInput>;
  /** The timestamp indicating when the product was updated. */
  updated_at?: InputMaybe<FilterTypeInput>;
  /** The part of the URL that identifies the product */
  url_key?: InputMaybe<FilterTypeInput>;
  url_path?: InputMaybe<FilterTypeInput>;
  /** The weight of the item, in units defined by the store. */
  weight?: InputMaybe<FilterTypeInput>;
};

/** Contains product image information, including the image URL and label. */
export type ProductImage = MediaGalleryInterface & {
  __typename?: 'ProductImage';
  /** Indicates whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']>;
  /** The label of the product image or video. */
  label?: Maybe<Scalars['String']>;
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']>;
  /** The URL of the product image or video. */
  url?: Maybe<Scalars['String']>;
};

/** Product Information used for Pickup Locations search. */
export type ProductInfoInput = {
  /** Product SKU. */
  sku: Scalars['String'];
};

/** Contains fields that are common to all types of products. */
export type ProductInterface = {
  /** @deprecated Use the `custom_attributes` field instead. */
  activity?: Maybe<Scalars['String']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']>;
  /** The availability state of the product. */
  availability?: Maybe<ProductAvailability>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_gear?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  climate?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  collar?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color?: Maybe<Scalars['String']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** An array of cross-sell products. */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** List of product custom attributes details. */
  custom_attributes: Array<Maybe<CustomAttribute>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  eco_collection?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  erin_recommends?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  features_bags?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  format?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gender?: Maybe<Scalars['String']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** Indicates whether the product can be returned. */
  is_returnable?: Maybe<Scalars['String']>;
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  marketplacer_brand?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  marketplacer_seller?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material?: Maybe<Scalars['String']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pattern?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  performance_fabric?: Maybe<Scalars['Int']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  purpose?: Maybe<Scalars['Int']>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /** An array of related products. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['Int']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sleeve?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  /** Indicates whether the product is staged for a future campaign. */
  staged: Scalars['Boolean'];
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  strap_bags?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bags?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bottom?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_general?: Maybe<Scalars['String']>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** An array of up-sell products. */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
};


/** Contains fields that are common to all types of products. */
export type ProductInterfaceReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

/** An implementation of `ProductLinksInterface`. */
export type ProductLinks = ProductLinksInterface & {
  __typename?: 'ProductLinks';
  /** One of related, associated, upsell, or crosssell. */
  link_type?: Maybe<Scalars['String']>;
  /** The SKU of the linked product. */
  linked_product_sku?: Maybe<Scalars['String']>;
  /** The type of linked product (simple, virtual, bundle, downloadable, grouped, configurable). */
  linked_product_type?: Maybe<Scalars['String']>;
  /** The position within the list of product links. */
  position?: Maybe<Scalars['Int']>;
  /** The identifier of the linked product. */
  sku?: Maybe<Scalars['String']>;
};

/** Contains information about linked products, including the link type and product type of each item. */
export type ProductLinksInterface = {
  /** One of related, associated, upsell, or crosssell. */
  link_type?: Maybe<Scalars['String']>;
  /** The SKU of the linked product. */
  linked_product_sku?: Maybe<Scalars['String']>;
  /** The type of linked product (simple, virtual, bundle, downloadable, grouped, configurable). */
  linked_product_type?: Maybe<Scalars['String']>;
  /** The position within the list of product links. */
  position?: Maybe<Scalars['Int']>;
  /** The identifier of the linked product. */
  sku?: Maybe<Scalars['String']>;
};

/** Contains an image in base64 format and basic information about the image. */
export type ProductMediaGalleryEntriesContent = {
  __typename?: 'ProductMediaGalleryEntriesContent';
  /** The image in base64 format. */
  base64_encoded_data?: Maybe<Scalars['String']>;
  /** The file name of the image. */
  name?: Maybe<Scalars['String']>;
  /** The MIME type of the file, such as image/png. */
  type?: Maybe<Scalars['String']>;
};

/** Contains a link to a video file and basic information about the video. */
export type ProductMediaGalleryEntriesVideoContent = {
  __typename?: 'ProductMediaGalleryEntriesVideoContent';
  /** Must be external-video. */
  media_type?: Maybe<Scalars['String']>;
  /** A description of the video. */
  video_description?: Maybe<Scalars['String']>;
  /** Optional data about the video. */
  video_metadata?: Maybe<Scalars['String']>;
  /** Describes the video source. */
  video_provider?: Maybe<Scalars['String']>;
  /** The title of the video. */
  video_title?: Maybe<Scalars['String']>;
  /** The URL to the video. */
  video_url?: Maybe<Scalars['String']>;
};

/** Represents a product price. */
export type ProductPrice = {
  __typename?: 'ProductPrice';
  /** The price discount. Represents the difference between the regular and final price. */
  discount?: Maybe<ProductDiscount>;
  /** The final price of the product after applying discounts. */
  final_price: Money;
  /** An array of the multiple Fixed Product Taxes that can be applied to a product price. */
  fixed_product_taxes?: Maybe<Array<Maybe<FixedProductTax>>>;
  /** The regular price of the product. */
  regular_price: Money;
};

/** Deprecated. Use `PriceRange` instead. Contains the regular price of an item, as well as its minimum and maximum prices. Only composite products, which include bundle, configurable, and grouped products, can contain a minimum and maximum price. */
export type ProductPrices = {
  __typename?: 'ProductPrices';
  /**
   * The highest possible final price for all the options defined within a composite product. If you are specifying a price range, this would be the `to` value.
   * @deprecated Use `PriceRange.maximum_price` instead.
   */
  maximalPrice?: Maybe<Price>;
  /**
   * The lowest possible final price for all the options defined within a composite product. If you are specifying a price range, this would be the `from` value.
   * @deprecated Use `PriceRange.minimum_price` instead.
   */
  minimalPrice?: Maybe<Price>;
  /**
   * The base price of a product.
   * @deprecated Use `regular_price` from `PriceRange.minimum_price` or `PriceRange.maximum_price` instead.
   */
  regularPrice?: Maybe<Price>;
};

/** Contains details of a product review. */
export type ProductReview = {
  __typename?: 'ProductReview';
  /** The average of all ratings for this product. */
  average_rating: Scalars['Float'];
  /** The date the review was created. */
  created_at: Scalars['String'];
  /** The customer's nickname. Defaults to the customer name, if logged in. */
  nickname: Scalars['String'];
  /** The reviewed product. */
  product: ProductInterface;
  /** An array of ratings by rating category, such as quality, price, and value. */
  ratings_breakdown: Array<Maybe<ProductReviewRating>>;
  /** The summary (title) of the review. */
  summary: Scalars['String'];
  /** The review text. */
  text: Scalars['String'];
};

/** Contains data about a single aspect of a product review. */
export type ProductReviewRating = {
  __typename?: 'ProductReviewRating';
  /** The label assigned to an aspect of a product that is being rated, such as quality or price. */
  name: Scalars['String'];
  /** The rating value given by customer. By default, possible values range from 1 to 5. */
  value: Scalars['String'];
};

/** Contains the reviewer's rating for a single aspect of a review. */
export type ProductReviewRatingInput = {
  /** An encoded rating ID. */
  id: Scalars['String'];
  /** An encoded rating value ID. */
  value_id: Scalars['String'];
};

/** Contains details about a single aspect of a product review. */
export type ProductReviewRatingMetadata = {
  __typename?: 'ProductReviewRatingMetadata';
  /** An encoded rating ID. */
  id: Scalars['String'];
  /** The label assigned to an aspect of a product that is being rated, such as quality or price. */
  name: Scalars['String'];
  /** List of product review ratings sorted by position. */
  values: Array<Maybe<ProductReviewRatingValueMetadata>>;
};

/** Contains details about a single value in a product review. */
export type ProductReviewRatingValueMetadata = {
  __typename?: 'ProductReviewRatingValueMetadata';
  /** A ratings scale, such as the number of stars awarded. */
  value: Scalars['String'];
  /** An encoded rating value ID. */
  value_id: Scalars['String'];
};

/** Contains an array of metadata about each aspect of a product review. */
export type ProductReviewRatingsMetadata = {
  __typename?: 'ProductReviewRatingsMetadata';
  /** An array of product reviews sorted by position. */
  items: Array<Maybe<ProductReviewRatingMetadata>>;
};

/** Contains an array of product reviews. */
export type ProductReviews = {
  __typename?: 'ProductReviews';
  /** An array of product reviews. */
  items: Array<Maybe<ProductReview>>;
  /** Metadata for pagination rendering. */
  page_info: SearchResultPageInfo;
};

/** Deprecated. Use `ProductAttributeSortInput` instead. Specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. */
export type ProductSortInput = {
  /** The product's country of origin. */
  country_of_manufacture?: InputMaybe<SortEnum>;
  /** The timestamp indicating when the product was created. */
  created_at?: InputMaybe<SortEnum>;
  /** The name of a custom layout. */
  custom_layout?: InputMaybe<SortEnum>;
  /** XML code that is applied as a layout update to the product page. */
  custom_layout_update?: InputMaybe<SortEnum>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: InputMaybe<SortEnum>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: InputMaybe<SortEnum>;
  /** Indicates whether additional attributes have been created for the product. */
  has_options?: InputMaybe<SortEnum>;
  /** The relative path to the main image on the product page. */
  image?: InputMaybe<SortEnum>;
  /** The label assigned to a product image. */
  image_label?: InputMaybe<SortEnum>;
  /** Indicates whether the product can be returned. */
  is_returnable?: InputMaybe<SortEnum>;
  /** A number representing the product's manufacturer. */
  manufacturer?: InputMaybe<SortEnum>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: InputMaybe<SortEnum>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: InputMaybe<SortEnum>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: InputMaybe<SortEnum>;
  /** The product name. Customers use this name to identify the product. */
  name?: InputMaybe<SortEnum>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  news_from_date?: InputMaybe<SortEnum>;
  /** The end date for new product listings. */
  news_to_date?: InputMaybe<SortEnum>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: InputMaybe<SortEnum>;
  /** The price of the item. */
  price?: InputMaybe<SortEnum>;
  /** Indicates whether the product has required options. */
  required_options?: InputMaybe<SortEnum>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: InputMaybe<SortEnum>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: InputMaybe<SortEnum>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: InputMaybe<SortEnum>;
  /** The label assigned to a product's small image. */
  small_image_label?: InputMaybe<SortEnum>;
  /** The beginning date that a product has a special price. */
  special_from_date?: InputMaybe<SortEnum>;
  /** The discounted price of the product. */
  special_price?: InputMaybe<SortEnum>;
  /** The end date that a product has a special price. */
  special_to_date?: InputMaybe<SortEnum>;
  /** Indicates the criteria to sort swatches. */
  swatch_image?: InputMaybe<SortEnum>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: InputMaybe<SortEnum>;
  /** The label assigned to a product's thumbnail image. */
  thumbnail_label?: InputMaybe<SortEnum>;
  /** The price when tier pricing is in effect and the items purchased threshold has been reached. */
  tier_price?: InputMaybe<SortEnum>;
  /** The timestamp indicating when the product was updated. */
  updated_at?: InputMaybe<SortEnum>;
  /** The part of the URL that identifies the product */
  url_key?: InputMaybe<SortEnum>;
  url_path?: InputMaybe<SortEnum>;
  /** The weight of the item, in units defined by the store. */
  weight?: InputMaybe<SortEnum>;
};

/** This enumeration states whether a product stock status is in stock or out of stock */
export type ProductStockStatus =
  | 'IN_STOCK'
  | 'OUT_OF_STOCK';

/** Deprecated. Use `TierPrice` instead. Defines a tier price, which is a quantity discount offered to a specific customer group. */
export type ProductTierPrices = {
  __typename?: 'ProductTierPrices';
  /**
   * The ID of the customer group.
   * @deprecated Not relevant for the storefront.
   */
  customer_group_id?: Maybe<Scalars['String']>;
  /**
   * The percentage discount of the item.
   * @deprecated Use `TierPrice.discount` instead.
   */
  percentage_value?: Maybe<Scalars['Float']>;
  /**
   * The number of items that must be purchased to qualify for tier pricing.
   * @deprecated Use `TierPrice.quantity` instead.
   */
  qty?: Maybe<Scalars['Float']>;
  /**
   * The price of the fixed price item.
   * @deprecated Use `TierPrice.final_price` instead.
   */
  value?: Maybe<Scalars['Float']>;
  /**
   * The ID assigned to the website.
   * @deprecated Not relevant for the storefront.
   */
  website_id?: Maybe<Scalars['Float']>;
};

/** Contains information about a product video. */
export type ProductVideo = MediaGalleryInterface & {
  __typename?: 'ProductVideo';
  /** Indicates whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']>;
  /** The label of the product image or video. */
  label?: Maybe<Scalars['String']>;
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']>;
  /** The URL of the product image or video. */
  url?: Maybe<Scalars['String']>;
  /** Contains a `ProductMediaGalleryEntriesVideoContent` object. */
  video_content?: Maybe<ProductMediaGalleryEntriesVideoContent>;
};

/** Contains the results of a `products` query. */
export type Products = {
  __typename?: 'Products';
  /** A bucket that contains the attribute code and label for each filterable option. */
  aggregations?: Maybe<Array<Maybe<Aggregation>>>;
  /**
   * Layered navigation filters array.
   * @deprecated Use `aggregations` instead.
   */
  filters?: Maybe<Array<Maybe<LayerFilter>>>;
  /** An array of products that match the specified search criteria. */
  items?: Maybe<Array<Maybe<ProductInterface>>>;
  /** An object that includes the page_info and currentPage values specified in the query. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** An object that includes the default sort field and all available sort fields. */
  sort_fields?: Maybe<SortFields>;
  /** An array of search suggestions for case when search query have no results. */
  suggestions?: Maybe<Array<Maybe<SearchSuggestion>>>;
  /** The number of products that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  total_count?: Maybe<Scalars['Int']>;
};


/** Contains the results of a `products` query. */
export type ProductsAggregationsArgs = {
  filter?: InputMaybe<AggregationsFilterInput>;
};

export type ProductsBySkusInput = {
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku: FilterTypeInput;
};

/** Specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. It's possible to sort products using searchable attributes with enabled 'Use in Filter Options' option */
export type ProductsBySkusSortInput = {
  /** Attribute label: Product Name */
  name?: InputMaybe<SortEnum>;
  /** Sort by the position of the sku items. */
  position?: InputMaybe<SortEnum>;
  /** Attribute label: Price */
  price?: InputMaybe<SortEnum>;
};

export type Query = {
  __typename?: 'Query';
  adyenPaymentMethods?: Maybe<AdyenPaymentMethods>;
  adyenPaymentStatus?: Maybe<AdyenPaymentStatus>;
  /** return Afterpay config */
  afterpayConfig?: Maybe<AfterpayConfigOutput>;
  /** Return details about custom EAV attributes, and optionally, system attributes. */
  attributesMetadata?: Maybe<AttributesMetadata>;
  /** Get a list of available store views and their config information. */
  availableStores?: Maybe<Array<Maybe<StoreConfig>>>;
  /** Return information about the specified shopping cart. */
  cart?: Maybe<Cart>;
  /** Return a list of categories that match the specified filter. */
  categories?: Maybe<CategoryResult>;
  /**
   * Search for categories that match the criteria specified in the `search` and `filter` attributes.
   * @deprecated Use `categories` instead.
   */
  category?: Maybe<CategoryTree>;
  /**
   * Return an array of categories based on the specified filters.
   * @deprecated Use `categories` instead.
   */
  categoryList?: Maybe<Array<Maybe<CategoryTree>>>;
  /** Return Terms and Conditions configuration information. */
  checkoutAgreements?: Maybe<Array<Maybe<CheckoutAgreement>>>;
  /** Return information about CMS blocks. */
  cmsBlocks?: Maybe<CmsBlocks>;
  /** Return details about a CMS page. */
  cmsPage?: Maybe<CmsPage>;
  /** Return products that have been added to the specified compare list. */
  compareList?: Maybe<CompareList>;
  /** The countries query provides information for all countries. */
  countries?: Maybe<Array<Maybe<Country>>>;
  /** The countries query provides information for a single country. */
  country?: Maybe<Country>;
  /** Return information about the store's currency. */
  currency?: Maybe<Currency>;
  /** Return the attribute type, given an attribute code and entity type. */
  customAttributeMetadata?: Maybe<CustomAttributeMetadata>;
  /** Return detailed information about a customer account. */
  customer?: Maybe<Customer>;
  /** Return information about the customer's shopping cart. */
  customerCart: Cart;
  /** Return a list of downloadable products the customer has purchased. */
  customerDownloadableProducts?: Maybe<CustomerDownloadableProducts>;
  /** @deprecated Use the `customer` query instead. */
  customerOrders?: Maybe<CustomerOrders>;
  /** Return a list of customer payment tokens stored in the vault. */
  customerPaymentTokens?: Maybe<CustomerPaymentTokens>;
  /** Return a list of dynamic blocks filtered by type, location, or UIDs. */
  dynamicBlocks: DynamicBlocks;
  /** Retrieve the secure PayPal URL for a Payments Pro Hosted Solution transaction. */
  getHostedProUrl?: Maybe<HostedProUrl>;
  /** Retrieve payment credentials for a transaction. Use this query for Payflow Link and Payments Advanced payment methods. */
  getPayflowLinkToken?: Maybe<PayflowLinkToken>;
  getSocialLinks?: Maybe<Array<Maybe<SocialLink>>>;
  /** Return details about a specific gift card. */
  giftCardAccount?: Maybe<GiftCardAccount>;
  /** Return the specified gift registry. Some details will not be available to guests. */
  giftRegistry?: Maybe<GiftRegistry>;
  /** Search for gift registries by specifying a registrant email address. */
  giftRegistryEmailSearch?: Maybe<Array<Maybe<GiftRegistrySearchResult>>>;
  /** Search for gift registries by specifying a registry URL key. */
  giftRegistryIdSearch?: Maybe<Array<Maybe<GiftRegistrySearchResult>>>;
  /** Search for gift registries by specifying the registrant name and registry type ID. */
  giftRegistryTypeSearch?: Maybe<Array<Maybe<GiftRegistrySearchResult>>>;
  /** Get a list of available gift registry types. */
  giftRegistryTypes?: Maybe<Array<Maybe<GiftRegistryType>>>;
  /** Check whether the specified email has already been used to create a customer account. */
  isEmailAvailable?: Maybe<IsEmailAvailableOutput>;
  /** Key messages shown at the top of the page(s) */
  keyMessages?: Maybe<KeyMessageResult>;
  /** The pickup locations query searches for locations that match the search request requirements. */
  pickupLocations?: Maybe<PickupLocations>;
  /** Return the active ratings attributes and the values each rating can have. */
  productReviewRatingsMetadata: ProductReviewRatingsMetadata;
  /** Search for products that match the criteria specified in the `search` and `filter` attributes. */
  products?: Maybe<Products>;
  /** Search for products that match the criteria specified in the `search` and `filter` attributes. */
  productsBySku?: Maybe<Products>;
  /** Returns details about Google reCAPTCHA V3-Invisible configuration. */
  recaptchaV3Config?: Maybe<ReCaptchaConfigurationV3>;
  /** Return the full details for a specified product, category, or CMS page. */
  route?: Maybe<RoutableInterface>;
  /** Return details about the store's configuration. */
  storeConfig?: Maybe<StoreConfig>;
  storeLocations?: Maybe<StoreLocations>;
  /**
   * Return the relative URL for a specified product, category or CMS page.
   * @deprecated Use the `route` query instead.
   */
  urlResolver?: Maybe<EntityUrl>;
  /** Validate Password Reset Token */
  validatePasswordResetToken?: Maybe<Scalars['Boolean']>;
  /**
   * Return the contents of a customer's wish list.
   * @deprecated Moved under `Customer.wishlist`.
   */
  wishlist?: Maybe<WishlistOutput>;
};


export type QueryAdyenPaymentMethodsArgs = {
  cart_id: Scalars['String'];
  shopper_locale?: InputMaybe<Scalars['String']>;
};


export type QueryAdyenPaymentStatusArgs = {
  cartId?: InputMaybe<Scalars['String']>;
  orderNumber?: InputMaybe<Scalars['String']>;
};


export type QueryAttributesMetadataArgs = {
  attributeUids?: InputMaybe<Array<Scalars['ID']>>;
  entityType: AttributeEntityTypeEnum;
  showSystemAttributes?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAvailableStoresArgs = {
  useCurrentGroup?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCartArgs = {
  cart_id: Scalars['String'];
};


export type QueryCategoriesArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  filters?: InputMaybe<CategoryFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type QueryCategoryListArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  filters?: InputMaybe<CategoryFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QueryCmsBlocksArgs = {
  identifiers?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCmsPageArgs = {
  id?: InputMaybe<Scalars['Int']>;
  identifier?: InputMaybe<Scalars['String']>;
};


export type QueryCompareListArgs = {
  uid: Scalars['ID'];
};


export type QueryCountryArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryCustomAttributeMetadataArgs = {
  attributes: Array<AttributeInput>;
};


export type QueryDynamicBlocksArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<DynamicBlocksFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QueryGetHostedProUrlArgs = {
  input: HostedProUrlInput;
};


export type QueryGetPayflowLinkTokenArgs = {
  input: PayflowLinkTokenInput;
};


export type QueryGiftCardAccountArgs = {
  input: GiftCardAccountInput;
};


export type QueryGiftRegistryArgs = {
  giftRegistryUid: Scalars['ID'];
};


export type QueryGiftRegistryEmailSearchArgs = {
  email: Scalars['String'];
};


export type QueryGiftRegistryIdSearchArgs = {
  giftRegistryUid: Scalars['ID'];
};


export type QueryGiftRegistryTypeSearchArgs = {
  firstName: Scalars['String'];
  giftRegistryTypeUid?: InputMaybe<Scalars['ID']>;
  lastName: Scalars['String'];
};


export type QueryIsEmailAvailableArgs = {
  email: Scalars['String'];
};


export type QueryPickupLocationsArgs = {
  area?: InputMaybe<AreaInput>;
  currentPage?: InputMaybe<Scalars['Int']>;
  filters?: InputMaybe<PickupLocationFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']>;
  productsInfo?: InputMaybe<Array<InputMaybe<ProductInfoInput>>>;
  sort?: InputMaybe<PickupLocationSortInput>;
};


export type QueryProductsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<ProductAttributeFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ProductAttributeSortInput>;
};


export type QueryProductsBySkuArgs = {
  filter: ProductsBySkusInput;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ProductsBySkusSortInput>;
};


export type QueryRouteArgs = {
  url: Scalars['String'];
};


export type QueryStoreLocationsArgs = {
  area?: InputMaybe<AreaInput>;
  currentPage?: InputMaybe<Scalars['Int']>;
  filters?: InputMaybe<PickupLocationFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<PickupLocationSortInput>;
};


export type QueryUrlResolverArgs = {
  url: Scalars['String'];
};


export type QueryValidatePasswordResetTokenArgs = {
  resetToken?: InputMaybe<Scalars['String']>;
};

/** Contains reCAPTCHA V3-Invisible configuration details. */
export type ReCaptchaConfigurationV3 = {
  __typename?: 'ReCaptchaConfigurationV3';
  /** The position of the invisible reCAPTCHA badge on each page. */
  badge_position: Scalars['String'];
  /** The message that appears to the user if validation fails. */
  failure_message: Scalars['String'];
  /** A list of forms on the storefront that have been configured to use reCAPTCHA V3. */
  forms: Array<Maybe<ReCaptchaFormEnum>>;
  /** A two-character code that specifies the language that is used for Google reCAPTCHA text and messaging. */
  language_code?: Maybe<Scalars['String']>;
  /** The minimum score that identifies a user interaction as a potential risk. */
  minimum_score: Scalars['Float'];
  /** The website key generated when the Google reCAPTCHA account was registered. */
  website_key: Scalars['String'];
};

export type ReCaptchaFormEnum =
  | 'BRAINTREE'
  | 'CONTACT'
  | 'CUSTOMER_CREATE'
  | 'CUSTOMER_EDIT'
  | 'CUSTOMER_FORGOT_PASSWORD'
  | 'CUSTOMER_LOGIN'
  | 'NEWSLETTER'
  | 'PLACE_ORDER'
  | 'PRODUCT_REVIEW'
  | 'SENDFRIEND';

export type RedirectUrls = {
  __typename?: 'RedirectUrls';
  cart_url: Scalars['String'];
  checkout_url: Scalars['String'];
  embedded_checkout_url: Scalars['String'];
};

export type Region = {
  __typename?: 'Region';
  /** The two-letter code for the region, such as TX for Texas. */
  code?: Maybe<Scalars['String']>;
  /** The unique ID for a `Region` object. */
  id?: Maybe<Scalars['Int']>;
  /** The name of the region, such as Texas. */
  name?: Maybe<Scalars['String']>;
};

/** Release date for preorder products */
export type ReleaseDate = {
  __typename?: 'ReleaseDate';
  utc?: Maybe<Scalars['String']>;
};

/** Specifies the cart from which to remove a coupon. */
export type RemoveCouponFromCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String'];
};

/** Contains details about the cart after removing a coupon. */
export type RemoveCouponFromCartOutput = {
  __typename?: 'RemoveCouponFromCartOutput';
  /** The cart after removing a coupon. */
  cart?: Maybe<Cart>;
};

/** Defines the input required to run the `removeGiftCardFromCart` mutation. */
export type RemoveGiftCardFromCartInput = {
  /** The unique ID that identifies the customer's cart. */
  cart_id: Scalars['String'];
  /** The gift card code to be removed to the cart. */
  gift_card_code: Scalars['String'];
};

/** Defines the possible output for the `removeGiftCardFromCart` mutation. */
export type RemoveGiftCardFromCartOutput = {
  __typename?: 'RemoveGiftCardFromCartOutput';
  /** The contents of the specified shopping cart. */
  cart: Cart;
};

/** Contains the results of a request to remove an item from a gift registry. */
export type RemoveGiftRegistryItemsOutput = {
  __typename?: 'RemoveGiftRegistryItemsOutput';
  /** The gift registry after removing items. */
  gift_registry?: Maybe<GiftRegistry>;
};

/** Contains the results of a request to delete a gift registry. */
export type RemoveGiftRegistryOutput = {
  __typename?: 'RemoveGiftRegistryOutput';
  /** Indicates whether the gift registry was successfully deleted. */
  success: Scalars['Boolean'];
};

/** Contains the results of a request to delete a registrant. */
export type RemoveGiftRegistryRegistrantsOutput = {
  __typename?: 'RemoveGiftRegistryRegistrantsOutput';
  /** The gift registry after deleting registrants. */
  gift_registry?: Maybe<GiftRegistry>;
};

/** Specifies which items to remove from the cart. */
export type RemoveItemFromCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String'];
  /** Deprecated. Use `cart_item_uid` instead. */
  cart_item_id?: InputMaybe<Scalars['Int']>;
  /** Required field. The unique ID for a `CartItemInterface` object. */
  cart_item_uid?: InputMaybe<Scalars['ID']>;
};

/** Contains details about the cart after removing an item. */
export type RemoveItemFromCartOutput = {
  __typename?: 'RemoveItemFromCartOutput';
  /** The cart after removing an item. */
  cart: Cart;
};

/** Defines which products to remove from a compare list. */
export type RemoveProductsFromCompareListInput = {
  /** An array of product IDs to remove from the compare list. */
  products: Array<InputMaybe<Scalars['ID']>>;
  /** The unique identifier of the compare list to modify. */
  uid: Scalars['ID'];
};

/** Contains the customer's wish list and any errors encountered. */
export type RemoveProductsFromWishlistOutput = {
  __typename?: 'RemoveProductsFromWishlistOutput';
  /** An array of errors encountered while deleting products from a wish list. */
  user_errors: Array<Maybe<WishListUserInputError>>;
  /** Contains the wish list with after items were successfully deleted. */
  wishlist: Wishlist;
};

/** Defines the tracking information to delete. */
export type RemoveReturnTrackingInput = {
  /** The unique ID for a `ReturnShippingTracking` object. */
  return_shipping_tracking_uid: Scalars['ID'];
};

/** Contains the response after deleting tracking information. */
export type RemoveReturnTrackingOutput = {
  __typename?: 'RemoveReturnTrackingOutput';
  /** Contains details about the modified return. */
  return?: Maybe<Return>;
};

/** Contains the customer cart. */
export type RemoveRewardPointsFromCartOutput = {
  __typename?: 'RemoveRewardPointsFromCartOutput';
  /** The customer cart after reward points are removed. */
  cart: Cart;
};

/** Defines the input required to run the `removeStoreCreditFromCart` mutation. */
export type RemoveStoreCreditFromCartInput = {
  /** The unique ID that identifies the customer's cart. */
  cart_id: Scalars['String'];
};

/** Defines the possible output for the `removeStoreCreditFromCart` mutation. */
export type RemoveStoreCreditFromCartOutput = {
  __typename?: 'RemoveStoreCreditFromCartOutput';
  /** The contents of the specified shopping cart. */
  cart: Cart;
};

/** Contains the cart and any errors after adding products. */
export type ReorderItemsOutput = {
  __typename?: 'ReorderItemsOutput';
  /** Detailed information about the customer's cart. */
  cart: Cart;
  /** An array of reordering errors. */
  userInputErrors: Array<Maybe<CheckoutUserInputError>>;
};

/** Contains information needed to start a return request. */
export type RequestReturnInput = {
  /** Text the buyer entered that describes the reason for the refund request. */
  comment_text?: InputMaybe<Scalars['String']>;
  /** The email address the buyer enters to receive notifications about the status of the return. */
  contact_email?: InputMaybe<Scalars['String']>;
  /** An array of items to be returned. */
  items: Array<InputMaybe<RequestReturnItemInput>>;
  /** The unique ID for a `Order` object. */
  order_uid: Scalars['ID'];
};

/** Contains details about an item to be returned. */
export type RequestReturnItemInput = {
  /** Details about a custom attribute that was entered. */
  entered_custom_attributes?: InputMaybe<Array<InputMaybe<EnteredCustomAttributeInput>>>;
  /** The unique ID for a `OrderItemInterface` object. */
  order_item_uid: Scalars['ID'];
  /** The quantity of the item to be returned. */
  quantity_to_return: Scalars['Float'];
  /** An array of selected custom option IDs associated with the item to be returned. For example, the IDs for the selected color and size of a configurable product. */
  selected_custom_attributes?: InputMaybe<Array<InputMaybe<SelectedCustomAttributeInput>>>;
};

/** Contains the response to a return request. */
export type RequestReturnOutput = {
  __typename?: 'RequestReturnOutput';
  /** Details about a single return request. */
  return?: Maybe<Return>;
  /** An array of return requests. */
  returns?: Maybe<Returns>;
};


/** Contains the response to a return request. */
export type RequestReturnOutputReturnsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

/** Contains details about a return. */
export type Return = {
  __typename?: 'Return';
  /** A list of shipping carriers available for returns. */
  available_shipping_carriers?: Maybe<Array<Maybe<ReturnShippingCarrier>>>;
  /** A list of comments posted for the return request. */
  comments?: Maybe<Array<Maybe<ReturnComment>>>;
  /** The date the return was requested. */
  created_at: Scalars['String'];
  /** Data from the customer who created the return request. */
  customer: ReturnCustomer;
  /** A list of items being returned. */
  items?: Maybe<Array<Maybe<ReturnItem>>>;
  /** A human-readable return number. */
  number: Scalars['String'];
  /** The order associated with the return. */
  order?: Maybe<CustomerOrder>;
  /** Shipping information for the return. */
  shipping?: Maybe<ReturnShipping>;
  /** The status of the return request. */
  status?: Maybe<ReturnStatus>;
  /** The unique ID for a `Return` object. */
  uid: Scalars['ID'];
};

/** Contains details about a return comment. */
export type ReturnComment = {
  __typename?: 'ReturnComment';
  /** The name or author who posted the comment. */
  author_name: Scalars['String'];
  /** The date and time the comment was posted. */
  created_at: Scalars['String'];
  /** The contents of the comment. */
  text: Scalars['String'];
  /** The unique ID for a `ReturnComment` object. */
  uid: Scalars['ID'];
};

/** Contains details about a `ReturnCustomerAttribute` object. */
export type ReturnCustomAttribute = {
  __typename?: 'ReturnCustomAttribute';
  /** A description of the attribute. */
  label: Scalars['String'];
  /** The unique ID for a `ReturnCustomAttribute` object. */
  uid: Scalars['ID'];
  /** A JSON-encoded value of the attribute. */
  value: Scalars['String'];
};

/** The customer information for the return. */
export type ReturnCustomer = {
  __typename?: 'ReturnCustomer';
  /** The email address of the customer. */
  email: Scalars['String'];
  /** The first name of the customer. */
  firstname?: Maybe<Scalars['String']>;
  /** The last name of the customer. */
  lastname?: Maybe<Scalars['String']>;
};

/** Contains details about a product being returned. */
export type ReturnItem = {
  __typename?: 'ReturnItem';
  /** Return item custom attributes that are visible on the storefront. */
  custom_attributes?: Maybe<Array<Maybe<ReturnCustomAttribute>>>;
  /** Provides access to the product being returned, including information about selected and entered options. */
  order_item: OrderItemInterface;
  /** The quantity of the item the merchant authorized to be returned. */
  quantity: Scalars['Float'];
  /** The quantity of the item requested to be returned. */
  request_quantity: Scalars['Float'];
  /** The return status of the item. */
  status: ReturnItemStatus;
  /** The unique ID for a `ReturnItem` object. */
  uid: Scalars['ID'];
};

export type ReturnItemStatus =
  | 'APPROVED'
  | 'AUTHORIZED'
  | 'DENIED'
  | 'PENDING'
  | 'RECEIVED'
  | 'REJECTED';

/** Contains details about the return shipping address. */
export type ReturnShipping = {
  __typename?: 'ReturnShipping';
  /** The merchant-defined return shipping address. */
  address?: Maybe<ReturnShippingAddress>;
  /** The unique ID for a `ReturnShippingTracking` object. If a single UID is specified, the array contains a single tracking record. Otherwise, array contains all tracking information. */
  tracking?: Maybe<Array<Maybe<ReturnShippingTracking>>>;
};


/** Contains details about the return shipping address. */
export type ReturnShippingTrackingArgs = {
  uid?: InputMaybe<Scalars['ID']>;
};

/** Contains details about the shipping address used for receiving returned items. */
export type ReturnShippingAddress = {
  __typename?: 'ReturnShippingAddress';
  /** The city for product returns. */
  city: Scalars['String'];
  /** The merchant's contact person. */
  contact_name?: Maybe<Scalars['String']>;
  /** An object that defines the country for product returns. */
  country: Country;
  /** The postal code for product returns. */
  postcode: Scalars['String'];
  /** An object that defines the state or province for product returns. */
  region: Region;
  /** The street address for product returns. */
  street: Array<Maybe<Scalars['String']>>;
  /** The telephone number for product returns. */
  telephone?: Maybe<Scalars['String']>;
};

/** Contains details about the carrier on a return. */
export type ReturnShippingCarrier = {
  __typename?: 'ReturnShippingCarrier';
  /** A description of the shipping carrier. */
  label: Scalars['String'];
  /** The unique ID for a `ReturnShippingCarrier` object assigned to the shipping carrier. */
  uid: Scalars['ID'];
};

/** Contains shipping and tracking details. */
export type ReturnShippingTracking = {
  __typename?: 'ReturnShippingTracking';
  /** Contains details of a shipping carrier. */
  carrier: ReturnShippingCarrier;
  /** Details about the status of a shipment. */
  status?: Maybe<ReturnShippingTrackingStatus>;
  /** A tracking number assigned by the carrier. */
  tracking_number: Scalars['String'];
  /** The unique ID for a `ReturnShippingTracking` object assigned to the tracking item. */
  uid: Scalars['ID'];
};

/** Contains the status of a shipment. */
export type ReturnShippingTrackingStatus = {
  __typename?: 'ReturnShippingTrackingStatus';
  /** Text that describes the status. */
  text: Scalars['String'];
  /** Indicates whether the status type is informational or an error. */
  type: ReturnShippingTrackingStatusType;
};

export type ReturnShippingTrackingStatusType =
  | 'ERROR'
  | 'INFORMATION';

export type ReturnStatus =
  | 'APPROVED'
  | 'AUTHORIZED'
  | 'CLOSED'
  | 'DENIED'
  | 'PARTIALLY_APPROVED'
  | 'PARTIALLY_AUTHORIZED'
  | 'PARTIALLY_RECEIVED'
  | 'PARTIALLY_REJECTED'
  | 'PENDING'
  | 'PROCESSED_AND_CLOSED'
  | 'RECEIVED'
  | 'REJECTED';

/** Contains a list of customer return requests. */
export type Returns = {
  __typename?: 'Returns';
  /** A list of return requests. */
  items?: Maybe<Array<Maybe<Return>>>;
  /** Pagination metadata. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The total number of return requests. */
  total_count?: Maybe<Scalars['Int']>;
};

/** Contains the result of a request to revoke a customer token. */
export type RevokeCustomerTokenOutput = {
  __typename?: 'RevokeCustomerTokenOutput';
  /** The result of a request to revoke a customer token. */
  result: Scalars['Boolean'];
};

/** Contains details about a customer's reward points. */
export type RewardPoints = {
  __typename?: 'RewardPoints';
  /** The current balance of reward points. */
  balance?: Maybe<RewardPointsAmount>;
  /** The balance history of reward points. If the ability for customers to view the balance history has been disabled in the Admin, this field will be set to null. */
  balance_history?: Maybe<Array<Maybe<RewardPointsBalanceHistoryItem>>>;
  /** The current exchange rates for reward points. */
  exchange_rates?: Maybe<RewardPointsExchangeRates>;
  /** The subscription status of emails related to reward points. */
  subscription_status?: Maybe<RewardPointsSubscriptionStatus>;
};

export type RewardPointsAmount = {
  __typename?: 'RewardPointsAmount';
  /** The reward points amount in store currency. */
  money: Money;
  /** The reward points amount in points. */
  points: Scalars['Float'];
};

/** Contain details about the reward points transaction. */
export type RewardPointsBalanceHistoryItem = {
  __typename?: 'RewardPointsBalanceHistoryItem';
  /** The award points balance after the completion of the transaction. */
  balance?: Maybe<RewardPointsAmount>;
  /** The reason the balance changed. */
  change_reason: Scalars['String'];
  /** The date of the transaction. */
  date: Scalars['String'];
  /** The number of points added or deducted in the transaction. */
  points_change: Scalars['Float'];
};

/** Lists the reward points exchange rates. The values depend on the customer group. */
export type RewardPointsExchangeRates = {
  __typename?: 'RewardPointsExchangeRates';
  /** How many points are earned for a given amount spent. */
  earning?: Maybe<RewardPointsRate>;
  /** How many points must be redeemed to get a given amount of currency discount at the checkout. */
  redemption?: Maybe<RewardPointsRate>;
};

/** Contains details about customer's reward points rate. */
export type RewardPointsRate = {
  __typename?: 'RewardPointsRate';
  /** The money value for the exchange rate. For earnings, this is the amount spent to earn the specified points. For redemption, this is the amount of money the number of points represents. */
  currency_amount: Scalars['Float'];
  /** The number of points for an exchange rate. For earnings, this is the number of points earned. For redemption, this is the number of points needed for redemption. */
  points: Scalars['Float'];
};

/** Indicates whether the customer subscribes to reward points emails. */
export type RewardPointsSubscriptionStatus = {
  __typename?: 'RewardPointsSubscriptionStatus';
  /** Indicates whether the customer subscribes to 'Reward points balance updates' emails. */
  balance_updates: RewardPointsSubscriptionStatusesEnum;
  /** Indicates whether the customer subscribes to 'Reward points expiration notifications' emails. */
  points_expiration_notifications: RewardPointsSubscriptionStatusesEnum;
};

export type RewardPointsSubscriptionStatusesEnum =
  | 'NOT_SUBSCRIBED'
  | 'SUBSCRIBED';

/** Routable entities serve as the model for a rendered page. */
export type RoutableInterface = {
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int'];
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
};

/** Contains details about a comment. */
export type SalesCommentItem = {
  __typename?: 'SalesCommentItem';
  /** The text of the message. */
  message: Scalars['String'];
  /** The timestamp of the comment. */
  timestamp: Scalars['String'];
};

export type SalesItemInterface = {
  __typename?: 'SalesItemInterface';
  /** The entered gift message for the order item */
  gift_message?: Maybe<GiftMessage>;
};

/** This enumeration defines the scope type for customer orders. */
export type ScopeTypeEnum =
  | 'GLOBAL'
  | 'STORE'
  | 'WEBSITE';

/** Provides navigation for the query response. */
export type SearchResultPageInfo = {
  __typename?: 'SearchResultPageInfo';
  /** The specific page to return. */
  current_page?: Maybe<Scalars['Int']>;
  /** The maximum number of items to return per page of results. */
  page_size?: Maybe<Scalars['Int']>;
  /** The total number of pages in the response. */
  total_pages?: Maybe<Scalars['Int']>;
};

/** A string that contains search suggestion */
export type SearchSuggestion = {
  __typename?: 'SearchSuggestion';
  /** The search suggestion of existing product. */
  search: Scalars['String'];
};

/** Defines selectable input types of the attribute. */
export type SelectableInputTypeInterface = {
  /** An array of attribute options. */
  attribute_options?: Maybe<Array<Maybe<AttributeOptionInterface>>>;
};

export type SelectedAttributeOption = {
  __typename?: 'SelectedAttributeOption';
  /** Selected attribute option details. */
  attribute_option?: Maybe<Array<Maybe<AttributeOptionInterface>>>;
};

/** Contains details about a selected bundle option. */
export type SelectedBundleOption = {
  __typename?: 'SelectedBundleOption';
  /** @deprecated Use `uid` instead */
  id: Scalars['Int'];
  /** The display name of the selected bundle product option. */
  label: Scalars['String'];
  /** The type of selected bundle product option. */
  type: Scalars['String'];
  /** The unique ID for a `SelectedBundleOption` object */
  uid: Scalars['ID'];
  /** An array of selected bundle option values. */
  values: Array<Maybe<SelectedBundleOptionValue>>;
};

/** Contains details about a value for a selected bundle option. */
export type SelectedBundleOptionValue = {
  __typename?: 'SelectedBundleOptionValue';
  /** Use `uid` instead */
  id: Scalars['Int'];
  /** The display name of the value for the selected bundle product option. */
  label: Scalars['String'];
  /** The price of the value for the selected bundle product option. */
  price: Scalars['Float'];
  /** The quantity of the value for the selected bundle product option. */
  quantity: Scalars['Float'];
  /** The unique ID for a `SelectedBundleOptionValue` object */
  uid: Scalars['ID'];
};

/** Contains details about a selected configurable option. */
export type SelectedConfigurableOption = {
  __typename?: 'SelectedConfigurableOption';
  /** The unique ID for a `ConfigurableProductOptions` object. */
  configurable_product_option_uid: Scalars['ID'];
  /** The unique ID for a `ConfigurableProductOptionsValues` object. */
  configurable_product_option_value_uid: Scalars['ID'];
  /** @deprecated Use `SelectedConfigurableOption.configurable_product_option_uid` instead. */
  id: Scalars['Int'];
  /** The display text for the option. */
  option_label: Scalars['String'];
  /** @deprecated Use `SelectedConfigurableOption.configurable_product_option_value_uid` instead. */
  value_id: Scalars['Int'];
  /** The display name of the selected configurable option. */
  value_label: Scalars['String'];
};

/** Contains details about an attribute the buyer selected. */
export type SelectedCustomAttributeInput = {
  /** A string that identifies the selected attribute. */
  attribute_code: Scalars['String'];
  /** The unique ID for a `CustomAttribute` object of a selected custom attribute. */
  value: Scalars['ID'];
};

/** Identifies a customized product that has been placed in a cart. */
export type SelectedCustomizableOption = {
  __typename?: 'SelectedCustomizableOption';
  /** The unique ID for a specific `CustomizableOptionInterface` object, such as a `CustomizableFieldOption`, `CustomizableFileOption`, or `CustomizableAreaOption` object. */
  customizable_option_uid: Scalars['ID'];
  /** @deprecated Use `SelectedCustomizableOption.customizable_option_uid` instead. */
  id: Scalars['Int'];
  /** Indicates whether the customizable option is required. */
  is_required: Scalars['Boolean'];
  /** The display name of the selected customizable option. */
  label: Scalars['String'];
  /** A value indicating the order to display this option. */
  sort_order: Scalars['Int'];
  /** The type of `CustomizableOptionInterface` object. */
  type: Scalars['String'];
  /** An array of selectable values. */
  values: Array<Maybe<SelectedCustomizableOptionValue>>;
};

/** Identifies the value of the selected customized option. */
export type SelectedCustomizableOptionValue = {
  __typename?: 'SelectedCustomizableOptionValue';
  /** The unique ID for a value object that corresponds to the object represented by the `customizable_option_uid` attribute. */
  customizable_option_value_uid: Scalars['ID'];
  /** @deprecated Use `SelectedCustomizableOptionValue.customizable_option_value_uid` instead. */
  id: Scalars['Int'];
  /** The display name of the selected value. */
  label: Scalars['String'];
  /** The price of the selected customizable value. */
  price: CartItemSelectedOptionValuePrice;
  /** The text identifying the selected value. */
  value: Scalars['String'];
};

/** Describes the payment method the shopper selected. */
export type SelectedPaymentMethod = {
  __typename?: 'SelectedPaymentMethod';
  /** The payment method code. */
  code: Scalars['String'];
  /** The purchase order number. */
  purchase_order_number?: Maybe<Scalars['String']>;
  /** The payment method title. */
  title: Scalars['String'];
};

/** Contains details about the selected shipping method and carrier. */
export type SelectedShippingMethod = {
  __typename?: 'SelectedShippingMethod';
  /** The cost of shipping using this shipping method. */
  amount: Money;
  /** @deprecated The field should not be used on the storefront. */
  base_amount?: Maybe<Money>;
  /** A string that identifies a commercial carrier or an offline shipping method. */
  carrier_code: Scalars['String'];
  /** The label for the carrier code. */
  carrier_title: Scalars['String'];
  /** A shipping method code associated with a carrier. */
  method_code: Scalars['String'];
  /** The label for the method code. */
  method_title: Scalars['String'];
  /** The cost of shipping using this shipping method, excluding tax. */
  price_excl_tax: Money;
  /** The cost of shipping using this shipping method, including tax. */
  price_incl_tax: Money;
};

/** Defines the referenced product and the email sender and recipients. */
export type SendEmailToFriendInput = {
  /** The ID of the product that the sender is referencing. */
  product_id: Scalars['Int'];
  /** An array containing information about each recipient. */
  recipients: Array<InputMaybe<SendEmailToFriendRecipientInput>>;
  /** Information about the customer and the content of the message. */
  sender: SendEmailToFriendSenderInput;
};

/** Contains information about the sender and recipients. */
export type SendEmailToFriendOutput = {
  __typename?: 'SendEmailToFriendOutput';
  /** An array containing information about each recipient. */
  recipients?: Maybe<Array<Maybe<SendEmailToFriendRecipient>>>;
  /** Information about the customer and the content of the message. */
  sender?: Maybe<SendEmailToFriendSender>;
};

/** An output object that contains information about the recipient. */
export type SendEmailToFriendRecipient = {
  __typename?: 'SendEmailToFriendRecipient';
  /** The email address of the recipient. */
  email: Scalars['String'];
  /** The name of the recipient. */
  name: Scalars['String'];
};

/** Contains details about a recipient. */
export type SendEmailToFriendRecipientInput = {
  /** The email address of the recipient. */
  email: Scalars['String'];
  /** The name of the recipient. */
  name: Scalars['String'];
};

/** An output object that contains information about the sender. */
export type SendEmailToFriendSender = {
  __typename?: 'SendEmailToFriendSender';
  /** The email address of the sender. */
  email: Scalars['String'];
  /** The text of the message to be sent. */
  message: Scalars['String'];
  /** The name of the sender. */
  name: Scalars['String'];
};

/** Contains details about the sender. */
export type SendEmailToFriendSenderInput = {
  /** The email address of the sender. */
  email: Scalars['String'];
  /** The text of the message to be sent. */
  message: Scalars['String'];
  /** The name of the sender. */
  name: Scalars['String'];
};

/** Contains details about the configuration of the Email to a Friend feature. */
export type SendFriendConfiguration = {
  __typename?: 'SendFriendConfiguration';
  /** Indicates whether the Email to a Friend feature is enabled. */
  enabled_for_customers: Scalars['Boolean'];
  /** Indicates whether the Email to a Friend feature is enabled for guests. */
  enabled_for_guests: Scalars['Boolean'];
};

/** Sets the billing address. */
export type SetBillingAddressOnCartInput = {
  /** The billing address. */
  billing_address: BillingAddressInput;
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String'];
};

/** Contains details about the cart after setting the billing address. */
export type SetBillingAddressOnCartOutput = {
  __typename?: 'SetBillingAddressOnCartOutput';
  /** The cart after setting the billing address. */
  cart: Cart;
};

/** Defines the gift options applied to the cart. */
export type SetGiftOptionsOnCartInput = {
  /** The unique ID that identifies the shopper's cart. */
  cart_id: Scalars['String'];
  /** Gift message details for the cart. */
  gift_message?: InputMaybe<GiftMessageInput>;
  /** Whether customer requested gift receipt for the cart. */
  gift_receipt_included: Scalars['Boolean'];
  /** The unique ID for a `GiftWrapping` object to be used for the cart. */
  gift_wrapping_id?: InputMaybe<Scalars['ID']>;
  /** Whether customer requested printed card for the cart. */
  printed_card_included: Scalars['Boolean'];
};

/** Contains the cart after gift options have been applied. */
export type SetGiftOptionsOnCartOutput = {
  __typename?: 'SetGiftOptionsOnCartOutput';
  /** The modified cart object. */
  cart: Cart;
};

/** Defines the guest email and cart. */
export type SetGuestEmailOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String'];
  /** The email address of the guest. */
  email: Scalars['String'];
};

/** Contains details about the cart after setting the email of a guest. */
export type SetGuestEmailOnCartOutput = {
  __typename?: 'SetGuestEmailOnCartOutput';
  /** The cart after setting the guest email. */
  cart: Cart;
};

/** Applies a payment method to the quote. */
export type SetPaymentMethodAndPlaceOrderInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String'];
  /** The payment method data to apply to the cart. */
  payment_method: PaymentMethodInput;
};

/** Applies a payment method to the cart. */
export type SetPaymentMethodOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String'];
  /** The payment method data to apply to the cart. */
  payment_method: PaymentMethodInput;
};

/** Contains details about the cart after setting the payment method. */
export type SetPaymentMethodOnCartOutput = {
  __typename?: 'SetPaymentMethodOnCartOutput';
  /** The cart after setting the payment method. */
  cart: Cart;
};

/** Specifies an array of addresses to use for shipping. */
export type SetShippingAddressesOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String'];
  /** An array of shipping addresses. */
  shipping_addresses: Array<InputMaybe<ShippingAddressInput>>;
};

/** Contains details about the cart after setting the shipping addresses. */
export type SetShippingAddressesOnCartOutput = {
  __typename?: 'SetShippingAddressesOnCartOutput';
  /** The cart after setting the shipping addresses. */
  cart: Cart;
};

/** Applies one or shipping methods to the cart. */
export type SetShippingMethodsOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String'];
  /** An array of shipping methods. */
  shipping_methods: Array<InputMaybe<ShippingMethodInput>>;
};

/** Contains details about the cart after setting the shipping methods. */
export type SetShippingMethodsOnCartOutput = {
  __typename?: 'SetShippingMethodsOnCartOutput';
  /** The cart after setting the shipping methods. */
  cart: Cart;
};

/** Defines a gift registry invitee. */
export type ShareGiftRegistryInviteeInput = {
  /** The email address of the gift registry invitee. */
  email: Scalars['String'];
  /** The name of the gift registry invitee. */
  name: Scalars['String'];
};

/** Contains the results of a request to share a gift registry. */
export type ShareGiftRegistryOutput = {
  __typename?: 'ShareGiftRegistryOutput';
  /** Indicates whether the gift registry was successfully shared. */
  is_shared: Scalars['Boolean'];
};

/** Defines the sender of an invitation to view a gift registry. */
export type ShareGiftRegistrySenderInput = {
  /** A brief message from the sender. */
  message: Scalars['String'];
  /** The sender of the gift registry invitation. */
  name: Scalars['String'];
};

/** Defines whether bundle items must be shipped together. */
export type ShipBundleItemsEnum =
  | 'SEPARATELY'
  | 'TOGETHER';

export type ShipmentItem = ShipmentItemInterface & {
  __typename?: 'ShipmentItem';
  /** The unique ID for a `ShipmentItemInterface` object. */
  id: Scalars['ID'];
  /** The order item associated with the shipment item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String'];
  /** The number of shipped items. */
  quantity_shipped: Scalars['Float'];
};

/** Order shipment item details. */
export type ShipmentItemInterface = {
  /** The unique ID for a `ShipmentItemInterface` object. */
  id: Scalars['ID'];
  /** The order item associated with the shipment item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String'];
  /** The number of shipped items. */
  quantity_shipped: Scalars['Float'];
};

/** Contains order shipment tracking details. */
export type ShipmentTracking = {
  __typename?: 'ShipmentTracking';
  /** The shipping carrier for the order delivery. */
  carrier: Scalars['String'];
  /** The tracking number of the order shipment. */
  number?: Maybe<Scalars['String']>;
  /** The shipment tracking title. */
  title: Scalars['String'];
};

/** Defines a single shipping address. */
export type ShippingAddressInput = {
  /** Defines a shipping address. */
  address?: InputMaybe<CartAddressInput>;
  authorityToLeave?: InputMaybe<Scalars['Boolean']>;
  /** An ID from the customer's address book that uniquely identifies the address to be used for shipping. */
  customer_address_id?: InputMaybe<Scalars['Int']>;
  /** Text provided by the shopper. */
  customer_notes?: InputMaybe<Scalars['String']>;
  deliveryInstructions?: InputMaybe<Scalars['String']>;
  /** The code of Pickup Location which will be used for In-Store Pickup. */
  pickup_location_code?: InputMaybe<Scalars['String']>;
};

/** Contains shipping addresses and methods. */
export type ShippingCartAddress = CartAddressInterface & {
  __typename?: 'ShippingCartAddress';
  /** An array that lists the shipping methods that can be applied to the cart. */
  available_shipping_methods?: Maybe<Array<Maybe<AvailableShippingMethod>>>;
  /** @deprecated Use `cart_items_v2` instead. */
  cart_items?: Maybe<Array<Maybe<CartItemQuantity>>>;
  /** An array that lists the items in the cart. */
  cart_items_v2?: Maybe<Array<Maybe<CartItemInterface>>>;
  /** The city specified for the billing or shipping address. */
  city: Scalars['String'];
  /** The company specified for the billing or shipping address. */
  company?: Maybe<Scalars['String']>;
  /** An object containing the country label and code. */
  country: CartAddressCountry;
  /** Text provided by the shopper. */
  customer_notes?: Maybe<Scalars['String']>;
  deliveryInstructions?: Maybe<DeliveryInstructions>;
  /** The first name of the customer or guest. */
  firstname: Scalars['String'];
  /** @deprecated This information should not be exposed on the frontend. */
  items_weight?: Maybe<Scalars['Float']>;
  /** The last name of the customer or guest. */
  lastname: Scalars['String'];
  pickup_location_code?: Maybe<Scalars['String']>;
  /** The ZIP or postal code of the billing or shipping address. */
  postcode?: Maybe<Scalars['String']>;
  /** An object containing the region label and code. */
  region?: Maybe<CartAddressRegion>;
  /** An object that describes the selected shipping method. */
  selected_shipping_method?: Maybe<SelectedShippingMethod>;
  /** An array containing the street for the billing or shipping address. */
  street: Array<Maybe<Scalars['String']>>;
  /** The telephone number for the billing or shipping address. */
  telephone?: Maybe<Scalars['String']>;
  /** The unique id of the customer address. */
  uid: Scalars['String'];
  /** The VAT company number for billing or shipping address. */
  vat_id?: Maybe<Scalars['String']>;
};

/** Defines an individual shipping discount. This discount can be applied to shipping. */
export type ShippingDiscount = {
  __typename?: 'ShippingDiscount';
  /** The amount of the discount. */
  amount: Money;
};

/** Contains details about shipping and handling costs. */
export type ShippingHandling = {
  __typename?: 'ShippingHandling';
  /** The shipping amount, excluding tax. */
  amount_excluding_tax?: Maybe<Money>;
  /** The shipping amount, including tax. */
  amount_including_tax?: Maybe<Money>;
  /** The applied discounts to the shipping. */
  discounts?: Maybe<Array<Maybe<ShippingDiscount>>>;
  /** Details about taxes applied for shipping. */
  taxes?: Maybe<Array<Maybe<TaxItem>>>;
  /** The total amount for shipping. */
  total_amount: Money;
};

/** Defines the shipping carrier and method. */
export type ShippingMethodInput = {
  /** A string that identifies a commercial carrier or an offline delivery method. */
  carrier_code: Scalars['String'];
  /** A string that indicates which service a commercial carrier will use to ship items. For offline delivery methods, this value is similar to the label displayed on the checkout page. */
  method_code: Scalars['String'];
};

/** An implementation for simple product cart items. */
export type SimpleCartItem = CartItemInterface & {
  __typename?: 'SimpleCartItem';
  /** The list of available gift wrapping options for the cart item. */
  available_gift_wrapping: Array<Maybe<GiftWrapping>>;
  /** An array containing the customizable options the shopper selected. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** The entered gift message for the cart item */
  gift_message?: Maybe<GiftMessage>;
  /** The selected gift wrapping for the cart item. */
  gift_wrapping?: Maybe<GiftWrapping>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String'];
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float'];
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID'];
};

/** Defines a simple product, which is tangible and is usually sold in single units or in fixed quantities. */
export type SimpleProduct = CustomizableProductInterface & PhysicalProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'SimpleProduct';
  /** @deprecated Use the `custom_attributes` field instead. */
  activity?: Maybe<Scalars['String']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']>;
  /** The availability state of the product. */
  availability?: Maybe<ProductAvailability>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_gear?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  climate?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  collar?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color?: Maybe<Scalars['String']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** An array of cross-sell products. */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** List of product custom attributes details. */
  custom_attributes: Array<Maybe<CustomAttribute>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  eco_collection?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  erin_recommends?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  features_bags?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  format?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gender?: Maybe<Scalars['String']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** Indicates whether the product can be returned. */
  is_returnable?: Maybe<Scalars['String']>;
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  marketplacer_brand?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  marketplacer_seller?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material?: Maybe<Scalars['String']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pattern?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  performance_fabric?: Maybe<Scalars['Int']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  purpose?: Maybe<Scalars['Int']>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int'];
  /** An array of related products. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['Int']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sleeve?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  /** Indicates whether the product is staged for a future campaign. */
  staged: Scalars['Boolean'];
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  strap_bags?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bags?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bottom?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_general?: Maybe<Scalars['String']>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** An array of up-sell products. */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']>;
};


/** Defines a simple product, which is tangible and is usually sold in single units or in fixed quantities. */
export type SimpleProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

/** Defines a single product to add to the cart. */
export type SimpleProductCartItemInput = {
  /** An array that defines customizable options for the product. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** An object containing the `sku`, `quantity`, and other relevant information about the product. */
  data: CartItemInput;
};

/** Contains a simple product wish list item. */
export type SimpleWishlistItem = WishlistItemInterface & {
  __typename?: 'SimpleWishlistItem';
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String'];
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID'];
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float'];
};

export type SocialLink = {
  __typename?: 'SocialLink';
  destination: Scalars['String'];
  name: Scalars['String'];
};

/** Indicates whether to return results in ascending or descending order. */
export type SortEnum =
  | 'ASC'
  | 'DESC';

/** Defines a possible sort field. */
export type SortField = {
  __typename?: 'SortField';
  /** The label of the sort field. */
  label?: Maybe<Scalars['String']>;
  /** The attribute code of the sort field. */
  value?: Maybe<Scalars['String']>;
};

/** Contains a default value for sort fields and all available sort fields. */
export type SortFields = {
  __typename?: 'SortFields';
  /** The default sort field value. */
  default?: Maybe<Scalars['String']>;
  /** An array of possible sort fields. */
  options?: Maybe<Array<Maybe<SortField>>>;
};

/** The type contains information about a store config */
export type StoreConfig = {
  __typename?: 'StoreConfig';
  /** Contains scripts that must be included in the HTML before the closing `<body>` tag. */
  absolute_footer?: Maybe<Scalars['String']>;
  /** Adyen front end resources region. */
  adyen_checkout_frontend_region?: Maybe<Scalars['String']>;
  /** Adyen client key for LIVE environment. */
  adyen_client_key_live?: Maybe<Scalars['String']>;
  /** Adyen client key for TEST environment. */
  adyen_client_key_test?: Maybe<Scalars['String']>;
  /** Adyen demo mode enabled (TEST). */
  adyen_demo_mode?: Maybe<Scalars['Boolean']>;
  /** Adyen card holder's name is visible. */
  adyen_has_holder_name?: Maybe<Scalars['Boolean']>;
  /** Adyen card holder's name is required. */
  adyen_holder_name_required?: Maybe<Scalars['Boolean']>;
  /** Use Magento Vault (one-click CVC-less payments) or the more secure Adyen Tokens (one-click CVC required payments) functionality */
  adyen_oneclick_card_mode?: Maybe<Scalars['String']>;
  /** Adyen Return path in case of error */
  adyen_return_path_error?: Maybe<Scalars['String']>;
  /** Adyen Render Mode for Payment Method. */
  adyen_title_renderer?: Maybe<Scalars['String']>;
  /** Afterpay Enabled */
  afterpaypay_active?: Maybe<Scalars['String']>;
  /** Afterpay Display on Cart Page */
  afterpaypay_api_enable_cta_cart_page?: Maybe<Scalars['String']>;
  /** Afterpay Display on Mini Cart */
  afterpaypay_api_enable_cta_mini_cart?: Maybe<Scalars['String']>;
  /** Afterpay Display on Product Page */
  afterpaypay_api_enable_cta_product_page?: Maybe<Scalars['String']>;
  /** Afterpay Maximum Order Total */
  afterpaypay_api_max_order_total?: Maybe<Scalars['String']>;
  /** Afterpay Minimum Order Total */
  afterpaypay_api_min_order_total?: Maybe<Scalars['String']>;
  /** Afterpay API Mode */
  afterpaypay_api_mode?: Maybe<Scalars['String']>;
  /** Afterpay Title */
  afterpaypay_title?: Maybe<Scalars['String']>;
  /** Indicates if the gift sender has the option to send a gift receipt. Possible values: 1 (Yes) and 0 (No). */
  allow_gift_receipt?: Maybe<Scalars['String']>;
  /** Indicates whether gift wrapping can be added for the entire order. Possible values: 1 (Yes) and 0 (No). */
  allow_gift_wrapping_on_order?: Maybe<Scalars['String']>;
  /** Indicates whether gift wrapping can be added for individual order items. Possible values: 1 (Yes) and 0 (No). */
  allow_gift_wrapping_on_order_items?: Maybe<Scalars['String']>;
  /** Indicates whether guest users can write product reviews. Possible values: 1 (Yes) and 0 (No). */
  allow_guests_to_write_product_reviews?: Maybe<Scalars['String']>;
  /** The value of the Allow Gift Messages for Order Items option */
  allow_items?: Maybe<Scalars['String']>;
  /** The value of the Allow Gift Messages on Order Level option */
  allow_order?: Maybe<Scalars['String']>;
  /** Indicates if a printed card can accompany an order. Possible values: 1 (Yes) and 0 (No). */
  allow_printed_card?: Maybe<Scalars['String']>;
  /** Indicates whether to enable autocomplete on login and forgot password forms. */
  autocomplete_on_storefront?: Maybe<Scalars['Boolean']>;
  /** The base currency code. */
  base_currency_code?: Maybe<Scalars['String']>;
  /** A fully-qualified URL that is used to create relative links to the `base_url`. */
  base_link_url?: Maybe<Scalars['String']>;
  /** The fully-qualified URL that specifies the location of media files. */
  base_media_url?: Maybe<Scalars['String']>;
  /** The fully-qualified URL that specifies the location of static view files. */
  base_static_url?: Maybe<Scalars['String']>;
  /** The store’s fully-qualified base URL. */
  base_url?: Maybe<Scalars['String']>;
  /** Braintree cc vault status. */
  braintree_cc_vault_active?: Maybe<Scalars['String']>;
  /** Google API website key for reCAPTCHA v2 - Checkbox */
  captcha_public_key_v2_checkbox?: Maybe<Scalars['String']>;
  /** Google API website key for reCAPTCHA v2 - Invisible */
  captcha_public_key_v2_invisible?: Maybe<Scalars['String']>;
  /** Google API website key for reCAPTCHA v3 */
  captcha_public_key_v3_invisible?: Maybe<Scalars['String']>;
  /** reCAPTCHA type for Contact Us form */
  captcha_type_contact?: Maybe<Scalars['String']>;
  /** reCAPTCHA type for Customer Create form */
  captcha_type_customer_create?: Maybe<Scalars['String']>;
  /** reCAPTCHA type for Customer Edit form */
  captcha_type_customer_edit?: Maybe<Scalars['String']>;
  /** reCAPTCHA type for Forgot Password form */
  captcha_type_customer_forgot_password?: Maybe<Scalars['String']>;
  /** reCAPTCHA type for Customer Login form */
  captcha_type_customer_login?: Maybe<Scalars['String']>;
  /** reCAPTCHA type for Newsletter form */
  captcha_type_newsletter?: Maybe<Scalars['String']>;
  /** reCAPTCHA type for place order form */
  captcha_type_place_order?: Maybe<Scalars['String']>;
  /** reCAPTCHA type for Product Review form */
  captcha_type_product_review?: Maybe<Scalars['String']>;
  /** reCAPTCHA type for Send Friend form */
  captcha_type_sendfriend?: Maybe<Scalars['String']>;
  /** reCAPTCHA type for wishlist share */
  captcha_type_wishlist_sharing?: Maybe<Scalars['String']>;
  /** Indicates if gift wrapping prices are displayed on the Shopping Cart page. Possible values: 1 (Yes) and 0 (No). */
  cart_gift_wrapping?: Maybe<Scalars['String']>;
  /** Indicates if printed card prices are displayed on the Shopping Cart page. Possible values: 1 (Yes) and 0 (No). */
  cart_printed_card?: Maybe<Scalars['String']>;
  /** The default sort order of the search results list. */
  catalog_default_sort_by?: Maybe<Scalars['String']>;
  /** Corresponds to the 'Display Prices In Product Lists' field in the Admin. It indicates how FPT information is displayed on category pages. */
  category_fixed_product_tax_display_setting?: Maybe<FixedProductTaxDisplaySettings>;
  /** The suffix applied to category pages, such as `.htm` or `.html`. */
  category_url_suffix?: Maybe<Scalars['String']>;
  /** Indicates whether only specific countries can use this payment method. */
  check_money_order_enable_for_specific_countries?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the Check/Money Order payment method is enabled. */
  check_money_order_enabled?: Maybe<Scalars['Boolean']>;
  /** The name of the party to whom the check must be payable. */
  check_money_order_make_check_payable_to?: Maybe<Scalars['String']>;
  /** The maximum order amount required to qualify for the Check/Money Order payment method. */
  check_money_order_max_order_total?: Maybe<Scalars['String']>;
  /** The minimum order amount required to qualify for the Check/Money Order payment method. */
  check_money_order_min_order_total?: Maybe<Scalars['String']>;
  /** The status of new orders placed using the Check/Money Order payment method. */
  check_money_order_new_order_status?: Maybe<Scalars['String']>;
  /** A comma-separated list of specific countries allowed to use the Check/Money Order payment method. */
  check_money_order_payment_from_specific_countries?: Maybe<Scalars['String']>;
  /** The full street address or PO Box where the checks are mailed. */
  check_money_order_send_check_to?: Maybe<Scalars['String']>;
  /** A number indicating the position of the Check/Money Order payment method in the list of available payment methods during checkout. */
  check_money_order_sort_order?: Maybe<Scalars['Int']>;
  /** The title of the Check/Money Order payment method displayed on the storefront. */
  check_money_order_title?: Maybe<Scalars['String']>;
  /** The name of the CMS page that identifies the home page for the store. */
  cms_home_page?: Maybe<Scalars['String']>;
  /** A specific CMS page that displays when cookies are not enabled for the browser. */
  cms_no_cookies?: Maybe<Scalars['String']>;
  /** A specific CMS page that displays when a 404 'Page Not Found' error occurs. */
  cms_no_route?: Maybe<Scalars['String']>;
  /**
   * A code assigned to the store to identify it.
   * @deprecated Use `store_code` instead.
   */
  code?: Maybe<Scalars['String']>;
  /** Indicates whether the `parent` or child (`itself`) thumbnail should be used in the cart for configurable products. */
  configurable_thumbnail_source?: Maybe<Scalars['String']>;
  /** Indicates whether the Contact Us form in enabled. */
  contact_enabled: Scalars['Boolean'];
  /** The copyright statement that appears at the bottom of each page. */
  copyright?: Maybe<Scalars['String']>;
  /** The description that provides a summary of your site for search engine listings. It should not be more than 160 characters in length. */
  default_description?: Maybe<Scalars['String']>;
  /** The default display currency code. */
  default_display_currency_code?: Maybe<Scalars['String']>;
  /** A series of keywords that describe your store, each separated by a comma. */
  default_keywords?: Maybe<Scalars['String']>;
  /** The title that appears at the title bar of each page when viewed in a browser. */
  default_title?: Maybe<Scalars['String']>;
  /** Controls the display of the demo store notice at the top of the page. Options: 0 (No) or 1 (Yes). */
  demonotice?: Maybe<Scalars['Int']>;
  /** Indicates whether customers can have multiple wish lists. Possible values: 1 (Yes) and 0 (No). */
  enable_multiple_wishlists?: Maybe<Scalars['String']>;
  /** The landing page that is associated with the base URL. */
  front?: Maybe<Scalars['String']>;
  /** Google maps API key */
  googleMapsAPIKey?: Maybe<Scalars['String']>;
  /** The default number of products per page in Grid View. */
  grid_per_page?: Maybe<Scalars['Int']>;
  /** A list of numbers that define how many products can be displayed in Grid View. */
  grid_per_page_values?: Maybe<Scalars['String']>;
  /** Scripts that must be included in the HTML before the closing `<head>` tag. */
  head_includes?: Maybe<Scalars['String']>;
  /** The small graphic image (favicon) that appears in the address bar and tab of the browser. */
  head_shortcut_icon?: Maybe<Scalars['String']>;
  /** The path to the logo that appears in the header. */
  header_logo_src?: Maybe<Scalars['String']>;
  /**
   * The ID number assigned to the store.
   * @deprecated Use `store_code` instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** Indicates whether the store view has been designated as the default within the store group. */
  is_default_store?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the store group has been designated as the default within the website. */
  is_default_store_group?: Maybe<Scalars['Boolean']>;
  /** The format of the search results list. */
  list_mode?: Maybe<Scalars['String']>;
  /** The default number of products per page in List View. */
  list_per_page?: Maybe<Scalars['Int']>;
  /** A list of numbers that define how many products can be displayed in List View. */
  list_per_page_values?: Maybe<Scalars['String']>;
  /** The store locale. */
  locale?: Maybe<Scalars['String']>;
  /** The Alt text that is associated with the logo. */
  logo_alt?: Maybe<Scalars['String']>;
  /** The height of the logo image, in pixels. */
  logo_height?: Maybe<Scalars['Int']>;
  /** The width of the logo image, in pixels. */
  logo_width?: Maybe<Scalars['Int']>;
  /** Indicates whether reward points functionality is enabled. Possible values: 1 (Enabled) and 0 (Disabled). */
  magento_reward_general_is_enabled?: Maybe<Scalars['String']>;
  /** Indicates whether reward points functionality is enabled on the storefront. Possible values: 1 (Enabled) and 0 (Disabled). */
  magento_reward_general_is_enabled_on_front?: Maybe<Scalars['String']>;
  /** The minimum point balance customers must have before they can redeem them. A null value indicates no minimum. */
  magento_reward_general_min_points_balance?: Maybe<Scalars['String']>;
  /** When enabled, customers can see a detailed history of their reward points. Possible values: 1 (Enabled) and 0 (Disabled). */
  magento_reward_general_publish_history?: Maybe<Scalars['String']>;
  /** The number of points for a referral when an invitee registers on the site. */
  magento_reward_points_invitation_customer?: Maybe<Scalars['String']>;
  /** The maximum number of registration referrals that will qualify for rewards. A null value indicates no limit. */
  magento_reward_points_invitation_customer_limit?: Maybe<Scalars['String']>;
  /** The number of points for a referral, when an invitee places their first order on the site. */
  magento_reward_points_invitation_order?: Maybe<Scalars['String']>;
  /** The number of order conversions that can earn points for the customer who sends the invitation. A null value indicates no limit. */
  magento_reward_points_invitation_order_limit?: Maybe<Scalars['String']>;
  /** The number of points earned by registered customers who subscribe to a newsletter. */
  magento_reward_points_newsletter?: Maybe<Scalars['String']>;
  /** Indicates customers earn points for shopping according to the reward point exchange rate. In Luma, this also controls whether to show a message in the shopping cart about the rewards points earned for the purchase, as well as the customer’s current reward point balance. */
  magento_reward_points_order?: Maybe<Scalars['String']>;
  /** The number of points customer gets for registering. */
  magento_reward_points_register?: Maybe<Scalars['String']>;
  /** The number of points for writing a review. */
  magento_reward_points_review?: Maybe<Scalars['String']>;
  /** The maximum number of reviews that will qualify for the rewards. A null value indicates no limit. */
  magento_reward_points_review_limit?: Maybe<Scalars['String']>;
  /** Indicates whether wishlists are enabled (1) or disabled (0). */
  magento_wishlist_general_is_enabled?: Maybe<Scalars['String']>;
  /** If multiple wish lists are enabled, the maximum number of wish lists the customer can have. */
  maximum_number_of_wishlists?: Maybe<Scalars['String']>;
  /** The minimum number of characters required for a valid password. */
  minimum_password_length?: Maybe<Scalars['String']>;
  /** Indicates whether newsletters are enabled. */
  newsletter_enabled: Scalars['Boolean'];
  /** The default page that displays when a 404 'Page not Found' error occurs. */
  no_route?: Maybe<Scalars['String']>;
  /** Payflow Pro vault status. */
  payment_payflowpro_cc_vault_active?: Maybe<Scalars['String']>;
  /** Configuration for the PayPal Express payment method */
  paypal_express?: Maybe<PaypalExpressConfig>;
  /** Indicates if add to cart is enabled for PLP */
  plpAddToCartEnabled?: Maybe<Scalars['Boolean']>;
  /** Indicates if quantity modifier is enabled for PLP */
  plpQtyModifierEnabled?: Maybe<Scalars['Boolean']>;
  /** The default price of a printed card that accompanies an order. */
  printed_card_price?: Maybe<Scalars['String']>;
  /** Corresponds to the 'Display Prices On Product View Page' field in the Admin. It indicates how FPT information is displayed on product pages. */
  product_fixed_product_tax_display_setting?: Maybe<FixedProductTaxDisplaySettings>;
  /** Indicates whether product reviews are enabled. Possible values: 1 (Yes) and 0 (No). */
  product_reviews_enabled?: Maybe<Scalars['String']>;
  /** The suffix applied to product pages, such as `.htm` or `.html`. */
  product_url_suffix?: Maybe<Scalars['String']>;
  /** The base URL of the PWA frontend */
  pwa_base_url: Scalars['String'];
  /** The number of different character classes (lowercase, uppercase, digits, special characters) required in a password. */
  required_character_classes_number?: Maybe<Scalars['String']>;
  /** Indicates whether RMA is enabled on the storefront. Possible values: enabled/disabled. */
  returns_enabled: Scalars['String'];
  /**
   * The ID of the root category.
   * @deprecated Use `root_category_uid` instead.
   */
  root_category_id?: Maybe<Scalars['Int']>;
  /** The unique ID for a `CategoryInterface` object. */
  root_category_uid?: Maybe<Scalars['ID']>;
  /** Corresponds to the 'Display Prices In Sales Modules' field in the Admin. It indicates how FPT information is displayed on cart, checkout, and order pages. */
  sales_fixed_product_tax_display_setting?: Maybe<FixedProductTaxDisplaySettings>;
  /** Indicates if gift wrapping prices are displayed on the Orders page. Possible values: 1 (Yes) and 0 (No). */
  sales_gift_wrapping?: Maybe<Scalars['String']>;
  /** Indicates if printed card prices are displayed on the Orders page. Possible values: 1 (Yes) and 0 (No). */
  sales_printed_card?: Maybe<Scalars['String']>;
  /** A secure fully-qualified URL that is used to create relative links to the `base_url`. */
  secure_base_link_url?: Maybe<Scalars['String']>;
  /** The secure fully-qualified URL that specifies the location of media files. */
  secure_base_media_url?: Maybe<Scalars['String']>;
  /** The secure fully-qualified URL that specifies the location of static view files. */
  secure_base_static_url?: Maybe<Scalars['String']>;
  /** The store’s fully-qualified secure base URL. */
  secure_base_url?: Maybe<Scalars['String']>;
  /** Email to a Friend configuration. */
  send_friend?: Maybe<SendFriendConfiguration>;
  /** Indicates whether a breadcrumb trail appears on all CMS pages in the catalog. 0 (No) or 1 (Yes). */
  show_cms_breadcrumbs?: Maybe<Scalars['Int']>;
  /** The unique ID of the store view. In the Admin, this is called the Store View Code. When making a GraphQL call, assign this value to the `Store` header to provide the scope. */
  store_code?: Maybe<Scalars['ID']>;
  /** The unique ID assigned to the store group. In the Admin, this is called the Store Name. */
  store_group_code?: Maybe<Scalars['ID']>;
  /** The label assigned to the store group. */
  store_group_name?: Maybe<Scalars['String']>;
  /** Returns information about the store address */
  store_information?: Maybe<StoreInformation>;
  /** The label assigned to the store view. */
  store_name?: Maybe<Scalars['String']>;
  /**
   * Store Phone Number
   * @deprecated The field is available under store_information now.
   */
  store_phone_number?: Maybe<Scalars['String']>;
  /** The store view sort order. */
  store_sort_order?: Maybe<Scalars['Int']>;
  /** The time zone of the store. */
  timezone?: Maybe<Scalars['String']>;
  /** A prefix that appears before the title to create a two- or three-part title. */
  title_prefix?: Maybe<Scalars['String']>;
  /** The character that separates the category name and subcategory in the browser title bar. */
  title_separator?: Maybe<Scalars['String']>;
  /** A suffix that appears after the title to create a two- or three-part title. */
  title_suffix?: Maybe<Scalars['String']>;
  /** Indicates whether the store code should be used in the URL. */
  use_store_in_url?: Maybe<Scalars['Boolean']>;
  /** The unique ID for the website. */
  website_code?: Maybe<Scalars['ID']>;
  /**
   * The ID number assigned to the website store.
   * @deprecated The field should not be used on the storefront.
   */
  website_id?: Maybe<Scalars['Int']>;
  /** The label assigned to the website. */
  website_name?: Maybe<Scalars['String']>;
  /** The unit of weight. */
  weight_unit?: Maybe<Scalars['String']>;
  /** Text that appears in the header of the page and includes the name of the logged in customer. */
  welcome?: Maybe<Scalars['String']>;
  /** Indicates whether only specific countries can use this payment method. */
  zero_subtotal_enable_for_specific_countries?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the Zero Subtotal payment method is enabled. */
  zero_subtotal_enabled?: Maybe<Scalars['Boolean']>;
  /** The status of new orders placed using the Zero Subtotal payment method. */
  zero_subtotal_new_order_status?: Maybe<Scalars['String']>;
  /** When the new order status is 'Processing', this can be set to `authorize_capture` to automatically invoice all items that have a zero balance. */
  zero_subtotal_payment_action?: Maybe<Scalars['String']>;
  /** A comma-separated list of specific countries allowed to use the Zero Subtotal payment method. */
  zero_subtotal_payment_from_specific_countries?: Maybe<Scalars['String']>;
  /** A number indicating the position of the Zero Subtotal payment method in the list of available payment methods during checkout. */
  zero_subtotal_sort_order?: Maybe<Scalars['Int']>;
  /** The title of the Zero Subtotal payment method displayed on the storefront. */
  zero_subtotal_title?: Maybe<Scalars['String']>;
};

export type StoreInformation = {
  __typename?: 'StoreInformation';
  /** Store city */
  city?: Maybe<Scalars['String']>;
  /** Country Id */
  country_id?: Maybe<Scalars['String']>;
  /** Country Name */
  country_name?: Maybe<Scalars['String']>;
  /** Store hours */
  hours?: Maybe<Scalars['String']>;
  /** Merchant VAT number */
  merchant_vat_number?: Maybe<Scalars['String']>;
  /** Store Name */
  name?: Maybe<Scalars['String']>;
  /** Store Phone number */
  phone?: Maybe<Scalars['String']>;
  /** Zip/Postal Code */
  postcode?: Maybe<Scalars['String']>;
  /** Region/State Id */
  region_id?: Maybe<Scalars['String']>;
  /** Region/State name */
  region_name?: Maybe<Scalars['String']>;
  /** Street Address Line 1 */
  street_line1?: Maybe<Scalars['String']>;
  /** Street Address Line 2 */
  street_line2?: Maybe<Scalars['String']>;
};

/** Contains the store code and label of an attribute. */
export type StoreLabels = {
  __typename?: 'StoreLabels';
  /** The label assigned to the attribute. */
  label?: Maybe<Scalars['String']>;
  /** The assigned store code. */
  store_code?: Maybe<Scalars['String']>;
};

/** Defines Pickup Location information. */
export type StoreLocation = {
  __typename?: 'StoreLocation';
  city?: Maybe<Scalars['String']>;
  contact_name?: Maybe<Scalars['String']>;
  country_id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** Distance to the store in KM */
  distance?: Maybe<Scalars['Float']>;
  email?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  pickup_location_code?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  region_id?: Maybe<Scalars['Int']>;
  street?: Maybe<Scalars['String']>;
};

/** Top level object returned in a pickup locations search. */
export type StoreLocations = {
  __typename?: 'StoreLocations';
  /** An array of pickup locations that match the specific search request. */
  items?: Maybe<Array<Maybe<StoreLocation>>>;
  /** An object that includes the page_info and currentPage values specified in the query. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The number of products returned. */
  total_count?: Maybe<Scalars['Int']>;
};

/** Indicates where an attribute can be displayed. */
export type StorefrontProperties = {
  __typename?: 'StorefrontProperties';
  /** The relative position of the attribute in the layered navigation block. */
  position?: Maybe<Scalars['Int']>;
  /** Indicates whether the attribute is filterable with results, without results, or not at all. */
  use_in_layered_navigation?: Maybe<UseInLayeredNavigationOptions>;
  /** Indicates whether the attribute is displayed in product listings. */
  use_in_product_listing?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the attribute can be used in layered navigation on search results pages. */
  use_in_search_results_layered_navigation?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the attribute is displayed on product pages. */
  visible_on_catalog_pages?: Maybe<Scalars['Boolean']>;
};

/** Contains the result of the `subscribeEmailToNewsletter` operation. */
export type SubscribeEmailToNewsletterOutput = {
  __typename?: 'SubscribeEmailToNewsletterOutput';
  /** The status of the subscription request. */
  status?: Maybe<SubscriptionStatusesEnum>;
};

/** Indicates the status of the request. */
export type SubscriptionStatusesEnum =
  | 'NOT_ACTIVE'
  | 'SUBSCRIBED'
  | 'UNCONFIRMED'
  | 'UNSUBSCRIBED';

/** Describes the swatch type and a value. */
export type SwatchData = {
  __typename?: 'SwatchData';
  /** Type of swatch filter (TextSwatchData, ColorSwatchData and ImageSwatchData) */
  type?: Maybe<Scalars['String']>;
  /** Value for swatch item (text or image link) */
  value?: Maybe<Scalars['String']>;
};

export type SwatchDataInterface = {
  /** The value can be represented as color (HEX code), image link, or text. */
  value?: Maybe<Scalars['String']>;
};

export type SwatchLayerFilterItem = LayerFilterItemInterface & SwatchLayerFilterItemInterface & {
  __typename?: 'SwatchLayerFilterItem';
  /**
   * The count of items per filter.
   * @deprecated Use `AggregationOption.count` instead.
   */
  items_count?: Maybe<Scalars['Int']>;
  /**
   * The label for a filter.
   * @deprecated Use `AggregationOption.label` instead.
   */
  label?: Maybe<Scalars['String']>;
  /** Data required to render a swatch filter item. */
  swatch_data?: Maybe<SwatchData>;
  /**
   * The value of a filter request variable to be used in query.
   * @deprecated Use `AggregationOption.value` instead.
   */
  value_string?: Maybe<Scalars['String']>;
};

export type SwatchLayerFilterItemInterface = {
  /** Data required to render a swatch filter item. */
  swatch_data?: Maybe<SwatchData>;
};

/** Contains tax item details. */
export type TaxItem = {
  __typename?: 'TaxItem';
  /** The amount of tax applied to the item. */
  amount: Money;
  /** The rate used to calculate the tax. */
  rate: Scalars['Float'];
  /** A title that describes the tax. */
  title: Scalars['String'];
};

export type TextSwatchData = SwatchDataInterface & {
  __typename?: 'TextSwatchData';
  /** The value can be represented as color (HEX code), image link, or text. */
  value?: Maybe<Scalars['String']>;
};

/** Defines a price based on the quantity purchased. */
export type TierPrice = {
  __typename?: 'TierPrice';
  /** The price discount that this tier represents. */
  discount?: Maybe<ProductDiscount>;
  /** The price of the product at this tier. */
  final_price?: Maybe<Money>;
  /** The minimum number of items that must be purchased to qualify for this price tier. */
  quantity?: Maybe<Scalars['Float']>;
};

export type UiAttributeTypeAny = UiInputTypeInterface & {
  __typename?: 'UiAttributeTypeAny';
  /** Indicates whether the attribute value allowed to have html content. */
  is_html_allowed?: Maybe<Scalars['Boolean']>;
  /** The frontend input type of the attribute. */
  ui_input_type?: Maybe<UiInputTypeEnum>;
};

export type UiAttributeTypeBoolean = AttributeOptionsInterface & SelectableInputTypeInterface & UiInputTypeInterface & {
  __typename?: 'UiAttributeTypeBoolean';
  /** An array of attribute options. */
  attribute_options?: Maybe<Array<Maybe<AttributeOptionInterface>>>;
  /** Indicates whether the attribute value allowed to have html content. */
  is_html_allowed?: Maybe<Scalars['Boolean']>;
  /** The frontend input type of the attribute. */
  ui_input_type?: Maybe<UiInputTypeEnum>;
};

export type UiAttributeTypeFixedProductTax = UiInputTypeInterface & {
  __typename?: 'UiAttributeTypeFixedProductTax';
  /** Indicates whether the attribute value allowed to have html content. */
  is_html_allowed?: Maybe<Scalars['Boolean']>;
  /** The frontend input type of the attribute. */
  ui_input_type?: Maybe<UiInputTypeEnum>;
};

export type UiAttributeTypeMultiSelect = AttributeOptionsInterface & SelectableInputTypeInterface & UiInputTypeInterface & {
  __typename?: 'UiAttributeTypeMultiSelect';
  /** An array of attribute options. */
  attribute_options?: Maybe<Array<Maybe<AttributeOptionInterface>>>;
  /** Indicates whether the attribute value allowed to have html content. */
  is_html_allowed?: Maybe<Scalars['Boolean']>;
  /** The frontend input type of the attribute. */
  ui_input_type?: Maybe<UiInputTypeEnum>;
};

export type UiAttributeTypePageBuilder = UiInputTypeInterface & {
  __typename?: 'UiAttributeTypePageBuilder';
  /** Indicates whether the attribute value allowed to have html content. */
  is_html_allowed?: Maybe<Scalars['Boolean']>;
  /** The frontend input type of the attribute. */
  ui_input_type?: Maybe<UiInputTypeEnum>;
};

export type UiAttributeTypeSelect = AttributeOptionsInterface & SelectableInputTypeInterface & UiInputTypeInterface & {
  __typename?: 'UiAttributeTypeSelect';
  /** An array of attribute options. */
  attribute_options?: Maybe<Array<Maybe<AttributeOptionInterface>>>;
  /** Indicates whether the attribute value allowed to have html content. */
  is_html_allowed?: Maybe<Scalars['Boolean']>;
  /** The frontend input type of the attribute. */
  ui_input_type?: Maybe<UiInputTypeEnum>;
};

export type UiAttributeTypeTextEditor = UiInputTypeInterface & {
  __typename?: 'UiAttributeTypeTextEditor';
  /** Indicates whether the attribute value allowed to have html content. */
  is_html_allowed?: Maybe<Scalars['Boolean']>;
  /** The frontend input type of the attribute. */
  ui_input_type?: Maybe<UiInputTypeEnum>;
};

export type UiAttributeTypeTextarea = UiInputTypeInterface & {
  __typename?: 'UiAttributeTypeTextarea';
  /** Indicates whether the attribute value allowed to have html content. */
  is_html_allowed?: Maybe<Scalars['Boolean']>;
  /** The frontend input type of the attribute. */
  ui_input_type?: Maybe<UiInputTypeEnum>;
};

export type UiInputTypeEnum =
  | 'BOOLEAN'
  | 'DATE'
  | 'DATETIME'
  | 'FIXED_PRODUCT_TAX'
  | 'GALLERY'
  | 'IMAGE'
  | 'MEDIA_IMAGE'
  | 'MULTISELECT'
  | 'PAGEBUILDER'
  | 'PRICE'
  | 'SELECT'
  | 'TEXT'
  | 'TEXTAREA'
  | 'TEXTEDITOR'
  | 'WEIGHT';

/** Defines frontend UI properties of an attribute. */
export type UiInputTypeInterface = {
  /** Indicates whether the attribute value allowed to have html content. */
  is_html_allowed?: Maybe<Scalars['Boolean']>;
  /** The frontend input type of the attribute. */
  ui_input_type?: Maybe<UiInputTypeEnum>;
};

/** Modifies the specified items in the cart. */
export type UpdateCartItemsInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String'];
  /** An array of items to be updated. */
  cart_items: Array<InputMaybe<CartItemUpdateInput>>;
};

/** Contains details about the cart after updating items. */
export type UpdateCartItemsOutput = {
  __typename?: 'UpdateCartItemsOutput';
  /** The cart after updating products. */
  cart: Cart;
};

/** Defines updates to a `GiftRegistry` object. */
export type UpdateGiftRegistryInput = {
  /** Additional attributes specified as a code-value pair. Unspecified dynamic attributes are not changed. */
  dynamic_attributes?: InputMaybe<Array<InputMaybe<GiftRegistryDynamicAttributeInput>>>;
  /** The updated name of the event. */
  event_name?: InputMaybe<Scalars['String']>;
  /** The updated message describing the event. */
  message?: InputMaybe<Scalars['String']>;
  /** Indicates whether the gift registry is PRIVATE or PUBLIC. */
  privacy_settings?: InputMaybe<GiftRegistryPrivacySettings>;
  /** The updated shipping address for all gift registry items. */
  shipping_address?: InputMaybe<GiftRegistryShippingAddressInput>;
  /** Indicates whether the gift registry is ACTIVE or INACTIVE. */
  status?: InputMaybe<GiftRegistryStatus>;
};

/** Defines updates to an item in a gift registry. */
export type UpdateGiftRegistryItemInput = {
  /** The unique ID of a `giftRegistryItem` object. */
  gift_registry_item_uid: Scalars['ID'];
  /** The updated description of the item. */
  note?: InputMaybe<Scalars['String']>;
  /** The updated quantity of the gift registry item. */
  quantity: Scalars['Float'];
};

/** Contains the results of a request to update gift registry items. */
export type UpdateGiftRegistryItemsOutput = {
  __typename?: 'UpdateGiftRegistryItemsOutput';
  /** The gift registry after updating updating items. */
  gift_registry?: Maybe<GiftRegistry>;
};

/** Contains the results of a request to update a gift registry. */
export type UpdateGiftRegistryOutput = {
  __typename?: 'UpdateGiftRegistryOutput';
  /** The updated gift registry. */
  gift_registry?: Maybe<GiftRegistry>;
};

/** Defines updates to an existing registrant. */
export type UpdateGiftRegistryRegistrantInput = {
  /** As a result of the update, only the values of provided attributes will be affected. If the attribute is missing in the request, its value will not be changed. */
  dynamic_attributes?: InputMaybe<Array<InputMaybe<GiftRegistryDynamicAttributeInput>>>;
  /** The updated email address of the registrant. */
  email?: InputMaybe<Scalars['String']>;
  /** The updated first name of the registrant. */
  firstname?: InputMaybe<Scalars['String']>;
  /** The unique ID of a `giftRegistryRegistrant` object. */
  gift_registry_registrant_uid: Scalars['ID'];
  /** The updated last name of the registrant. */
  lastname?: InputMaybe<Scalars['String']>;
};

/** Contains the results a request to update registrants. */
export type UpdateGiftRegistryRegistrantsOutput = {
  __typename?: 'UpdateGiftRegistryRegistrantsOutput';
  /** The gift registry after updating registrants. */
  gift_registry?: Maybe<GiftRegistry>;
};

/** Contains the customer's wish list and any errors encountered. */
export type UpdateProductsInWishlistOutput = {
  __typename?: 'UpdateProductsInWishlistOutput';
  /** An array of errors encountered while updating products in a wish list. */
  user_errors: Array<Maybe<WishListUserInputError>>;
  /** Contains the wish list with all items that were successfully updated. */
  wishlist: Wishlist;
};

/** Contains the name and visibility of an updated wish list. */
export type UpdateWishlistOutput = {
  __typename?: 'UpdateWishlistOutput';
  /** The wish list name. */
  name: Scalars['String'];
  /** The unique ID of a `Wishlist` object. */
  uid: Scalars['ID'];
  /** Indicates whether the wish list is public or private. */
  visibility: WishlistVisibilityEnum;
};

/** Contains URL rewrite details. */
export type UrlRewrite = {
  __typename?: 'UrlRewrite';
  /** An array of request parameters. */
  parameters?: Maybe<Array<Maybe<HttpQueryParameter>>>;
  /** The request URL. */
  url?: Maybe<Scalars['String']>;
};

/** This enumeration defines the entity type. */
export type UrlRewriteEntityTypeEnum =
  | 'CATEGORY'
  | 'CMS_PAGE'
  | 'PRODUCT';

/** Defines whether the attribute is filterable in layered navigation. */
export type UseInLayeredNavigationOptions =
  | 'FILTERABLE_NO_RESULT'
  | 'FILTERABLE_WITH_RESULTS'
  | 'NO';

/** Contains required input for payment methods with Vault support. */
export type VaultTokenInput = {
  /** The public hash of the payment token. */
  public_hash: Scalars['String'];
};

/** An implementation for virtual product cart items. */
export type VirtualCartItem = CartItemInterface & {
  __typename?: 'VirtualCartItem';
  /** An array containing customizable options the shopper selected. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String'];
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float'];
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID'];
};

/** Defines a virtual product, which is a non-tangible product that does not require shipping and is not kept in inventory. */
export type VirtualProduct = CustomizableProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'VirtualProduct';
  /** @deprecated Use the `custom_attributes` field instead. */
  activity?: Maybe<Scalars['String']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']>;
  /** The availability state of the product. */
  availability?: Maybe<ProductAvailability>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_gear?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  climate?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  collar?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color?: Maybe<Scalars['String']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** An array of cross-sell products. */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** List of product custom attributes details. */
  custom_attributes: Array<Maybe<CustomAttribute>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  eco_collection?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  erin_recommends?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  features_bags?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  format?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gender?: Maybe<Scalars['String']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** Indicates whether the product can be returned. */
  is_returnable?: Maybe<Scalars['String']>;
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  marketplacer_brand?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  marketplacer_seller?: Maybe<Scalars['Int']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material?: Maybe<Scalars['String']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pattern?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  performance_fabric?: Maybe<Scalars['Int']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  purpose?: Maybe<Scalars['Int']>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int'];
  /** An array of related products. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['Int']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sleeve?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  /** Indicates whether the product is staged for a future campaign. */
  staged: Scalars['Boolean'];
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  strap_bags?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bags?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bottom?: Maybe<Scalars['String']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  style_general?: Maybe<Scalars['String']>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** An array of up-sell products. */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
};


/** Defines a virtual product, which is a non-tangible product that does not require shipping and is not kept in inventory. */
export type VirtualProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

/** Defines a single product to add to the cart. */
export type VirtualProductCartItemInput = {
  /** An array that defines customizable options for the product. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** An object containing the `sku`, `quantity`, and other relevant information about the product. */
  data: CartItemInput;
};

/** Contains a virtual product wish list item. */
export type VirtualWishlistItem = WishlistItemInterface & {
  __typename?: 'VirtualWishlistItem';
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String'];
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID'];
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float'];
};

/** Deprecated. It should not be used on the storefront. Contains information about a website. */
export type Website = {
  __typename?: 'Website';
  /**
   * A code assigned to the website to identify it.
   * @deprecated The field should not be used on the storefront.
   */
  code?: Maybe<Scalars['String']>;
  /**
   * The default group ID of the website.
   * @deprecated The field should not be used on the storefront.
   */
  default_group_id?: Maybe<Scalars['String']>;
  /**
   * The ID number assigned to the website.
   * @deprecated The field should not be used on the storefront.
   */
  id?: Maybe<Scalars['Int']>;
  /**
   * Indicates whether this is the default website.
   * @deprecated The field should not be used on the storefront.
   */
  is_default?: Maybe<Scalars['Boolean']>;
  /**
   * The website name. Websites use this name to identify it easier.
   * @deprecated The field should not be used on the storefront.
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The attribute to use for sorting websites.
   * @deprecated The field should not be used on the storefront.
   */
  sort_order?: Maybe<Scalars['Int']>;
};

/** An error encountered while performing operations with WishList. */
export type WishListUserInputError = {
  __typename?: 'WishListUserInputError';
  /** A wish list-specific error code. */
  code: WishListUserInputErrorType;
  /** A localized error message. */
  message: Scalars['String'];
};

/** A list of possible error types. */
export type WishListUserInputErrorType =
  | 'PRODUCT_NOT_FOUND'
  | 'UNDEFINED';

/** Contains a customer wish list. */
export type Wishlist = {
  __typename?: 'Wishlist';
  /** The unique ID for a `Wishlist` object. */
  id?: Maybe<Scalars['ID']>;
  /** @deprecated Use the `items_v2` field instead. */
  items?: Maybe<Array<Maybe<WishlistItem>>>;
  /** The number of items in the wish list. */
  items_count?: Maybe<Scalars['Int']>;
  /** An array of items in the customer's wish list. */
  items_v2?: Maybe<WishlistItems>;
  /** The name of the wish list. */
  name?: Maybe<Scalars['String']>;
  /** An encrypted code that Magento uses to link to the wish list. */
  sharing_code?: Maybe<Scalars['String']>;
  /** The time of the last modification to the wish list. */
  updated_at?: Maybe<Scalars['String']>;
  /** Indicates whether the wish list is public or private. */
  visibility: WishlistVisibilityEnum;
};


/** Contains a customer wish list. */
export type WishlistItems_V2Args = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

/** Contains details about errors encountered when a customer added wish list items to the cart. */
export type WishlistCartUserInputError = {
  __typename?: 'WishlistCartUserInputError';
  /** An error code that describes the error encountered. */
  code: WishlistCartUserInputErrorType;
  /** A localized error message. */
  message: Scalars['String'];
  /** The unique ID of the `Wishlist` object containing an error. */
  wishlistId: Scalars['ID'];
  /** The unique ID of the wish list item containing an error. */
  wishlistItemId: Scalars['ID'];
};

/** A list of possible error types. */
export type WishlistCartUserInputErrorType =
  | 'INSUFFICIENT_STOCK'
  | 'NOT_SALABLE'
  | 'PRODUCT_NOT_FOUND'
  | 'UNDEFINED';

/** Contains details about a wish list item. */
export type WishlistItem = {
  __typename?: 'WishlistItem';
  /** The time when the customer added the item to the wish list. */
  added_at?: Maybe<Scalars['String']>;
  /** The customer's comment about this item. */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItem` object. */
  id?: Maybe<Scalars['Int']>;
  /** Details about the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item */
  qty?: Maybe<Scalars['Float']>;
};

/** Specifies the IDs of items to copy and their quantities. */
export type WishlistItemCopyInput = {
  /** The quantity of this item to copy to the destination wish list. This value can't be greater than the quantity in the source wish list. */
  quantity?: InputMaybe<Scalars['Float']>;
  /** The unique ID of the `WishlistItemInterface` object to be copied. */
  wishlist_item_id: Scalars['ID'];
};

/** Defines the items to add to a wish list. */
export type WishlistItemInput = {
  /** An array of options that the customer entered. */
  entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
  /** For complex product types, the SKU of the parent product. */
  parent_sku?: InputMaybe<Scalars['String']>;
  /** The amount or number of items to add. */
  quantity: Scalars['Float'];
  /** An array of strings corresponding to options the customer selected. */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** The SKU of the product to add. For complex product types, specify the child product SKU. */
  sku: Scalars['String'];
};

/** The interface for wish list items. */
export type WishlistItemInterface = {
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String'];
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID'];
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float'];
};

/** Specifies the IDs of the items to move and their quantities. */
export type WishlistItemMoveInput = {
  /** The quantity of this item to move to the destination wish list. This value can't be greater than the quantity in the source wish list. */
  quantity?: InputMaybe<Scalars['Float']>;
  /** The unique ID of the `WishlistItemInterface` object to be moved. */
  wishlist_item_id: Scalars['ID'];
};

/** Defines updates to items in a wish list. */
export type WishlistItemUpdateInput = {
  /** Customer-entered comments about the item. */
  description?: InputMaybe<Scalars['String']>;
  /** An array of options that the customer entered. */
  entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
  /** The new amount or number of this item. */
  quantity?: InputMaybe<Scalars['Float']>;
  /** An array of strings corresponding to options the customer selected. */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** The unique ID for a `WishlistItemInterface` object. */
  wishlist_item_id: Scalars['ID'];
};

/** Contains an array of items in a wish list. */
export type WishlistItems = {
  __typename?: 'WishlistItems';
  /** A list of items in the wish list. */
  items: Array<Maybe<WishlistItemInterface>>;
  /** Contains pagination metadata. */
  page_info?: Maybe<SearchResultPageInfo>;
};

/** Deprecated: Use the `Wishlist` type instead. */
export type WishlistOutput = {
  __typename?: 'WishlistOutput';
  /**
   * An array of items in the customer's wish list
   * @deprecated Use the `Wishlist.items` field instead.
   */
  items?: Maybe<Array<Maybe<WishlistItem>>>;
  /**
   * The number of items in the wish list.
   * @deprecated Use the `Wishlist.items_count` field instead.
   */
  items_count?: Maybe<Scalars['Int']>;
  /** Wishlist share output Message */
  message: Scalars['String'];
  /**
   * When multiple wish lists are enabled, the name the customer assigns to the wishlist.
   * @deprecated This field is related to Commerce functionality and is always `null` in Open Source.
   */
  name?: Maybe<Scalars['String']>;
  /**
   * An encrypted code that links to the wish list.
   * @deprecated Use the `Wishlist.sharing_code` field instead.
   */
  sharing_code?: Maybe<Scalars['String']>;
  /**
   * The time of the last modification to the wish list.
   * @deprecated Use the `Wishlist.updated_at` field instead.
   */
  updated_at?: Maybe<Scalars['String']>;
};

/** Defines the wish list visibility types. */
export type WishlistVisibilityEnum =
  | 'PRIVATE'
  | 'PUBLIC';

export type AfterpayConfigOutput = {
  __typename?: 'afterpayConfigOutput';
  allowed_currencies?: Maybe<Array<Maybe<Scalars['String']>>>;
  is_enabled?: Maybe<Scalars['Boolean']>;
  is_enabled_cta_checkout?: Maybe<Scalars['Boolean']>;
  is_enabled_cta_minicart?: Maybe<Scalars['Boolean']>;
  is_enabled_cta_pdp?: Maybe<Scalars['Boolean']>;
  max_amount?: Maybe<Scalars['String']>;
  min_amount?: Maybe<Scalars['String']>;
};

export type CreateAfterpayCheckoutInput = {
  cart_id: Scalars['String'];
  /** A set of relative URLs that Afterpay uses in response to various actions during the authorization process */
  redirect_path: AfterpayRedirectPathInput;
};

export type CreateAfterpayCheckoutOutput = {
  __typename?: 'createAfterpayCheckoutOutput';
  /** The UTC timestamp of when the checkout token will expire, in ISO 8601 format. */
  afterpay_expires: Scalars['String'];
  /** A URL that can be used to redirect the consumer to the Afterpay screenflow. */
  afterpay_redirectCheckoutUrl: Scalars['String'];
  /** Afterpay checkout token to be used to complete payment. */
  afterpay_token: Scalars['String'];
};

/** Assigns a specific `cart_id` to the empty cart. */
export type CreateEmptyCartInput = {
  /** The ID to assign to the cart. */
  cart_id?: InputMaybe<Scalars['String']>;
};

export type GetCustomerTokenBySecretCodeOutput = {
  __typename?: 'getCustomerTokenBySecretCodeOutput';
  /** Customer's token */
  customer_token: Scalars['String'];
};

export type WishlistInput = {
  /** Customer email address */
  email_address?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Customer's message */
  message?: InputMaybe<Scalars['String']>;
  /** Wishlist sharing code */
  sharing_code: Scalars['String'];
  /** Wishlist ID */
  wishlist_id: Scalars['Int'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AddBundleProductsToCartInput: AddBundleProductsToCartInput;
  AddBundleProductsToCartOutput: ResolverTypeWrapper<AddBundleProductsToCartOutput>;
  AddConfigurableProductsToCartInput: AddConfigurableProductsToCartInput;
  AddConfigurableProductsToCartOutput: ResolverTypeWrapper<AddConfigurableProductsToCartOutput>;
  AddDownloadableProductsToCartInput: AddDownloadableProductsToCartInput;
  AddDownloadableProductsToCartOutput: ResolverTypeWrapper<AddDownloadableProductsToCartOutput>;
  AddGiftRegistryItemInput: AddGiftRegistryItemInput;
  AddGiftRegistryRegistrantInput: AddGiftRegistryRegistrantInput;
  AddGiftRegistryRegistrantsOutput: ResolverTypeWrapper<AddGiftRegistryRegistrantsOutput>;
  AddProductsToCartOutput: ResolverTypeWrapper<AddProductsToCartOutput>;
  AddProductsToCompareListInput: AddProductsToCompareListInput;
  AddProductsToWishlistOutput: ResolverTypeWrapper<AddProductsToWishlistOutput>;
  AddReturnCommentInput: AddReturnCommentInput;
  AddReturnCommentOutput: ResolverTypeWrapper<AddReturnCommentOutput>;
  AddReturnTrackingInput: AddReturnTrackingInput;
  AddReturnTrackingOutput: ResolverTypeWrapper<AddReturnTrackingOutput>;
  AddSimpleProductsToCartInput: AddSimpleProductsToCartInput;
  AddSimpleProductsToCartOutput: ResolverTypeWrapper<AddSimpleProductsToCartOutput>;
  AddVirtualProductsToCartInput: AddVirtualProductsToCartInput;
  AddVirtualProductsToCartOutput: ResolverTypeWrapper<AddVirtualProductsToCartOutput>;
  AddWishlistItemsToCartOutput: ResolverTypeWrapper<AddWishlistItemsToCartOutput>;
  AdyenAdditionalDataBoleto: AdyenAdditionalDataBoleto;
  AdyenAdditionalDataCc: AdyenAdditionalDataCc;
  AdyenAdditionalDataHpp: AdyenAdditionalDataHpp;
  AdyenAdditionalDataOneclick: AdyenAdditionalDataOneclick;
  AdyenAdditionalDataPosCloud: AdyenAdditionalDataPosCloud;
  AdyenPaymentMethodIcon: ResolverTypeWrapper<AdyenPaymentMethodIcon>;
  AdyenPaymentMethods: ResolverTypeWrapper<AdyenPaymentMethods>;
  AdyenPaymentMethodsArray: ResolverTypeWrapper<AdyenPaymentMethodsArray>;
  AdyenPaymentMethodsConfiguration: ResolverTypeWrapper<AdyenPaymentMethodsConfiguration>;
  AdyenPaymentMethodsDetails: ResolverTypeWrapper<AdyenPaymentMethodsDetails>;
  AdyenPaymentMethodsDetailsItems: ResolverTypeWrapper<AdyenPaymentMethodsDetailsItems>;
  AdyenPaymentMethodsExtraDetails: ResolverTypeWrapper<AdyenPaymentMethodsExtraDetails>;
  AdyenPaymentMethodsExtraDetailsConfiguration: ResolverTypeWrapper<AdyenPaymentMethodsExtraDetailsConfiguration>;
  AdyenPaymentMethodsIssuers: ResolverTypeWrapper<AdyenPaymentMethodsIssuers>;
  AdyenPaymentMethodsResponse: ResolverTypeWrapper<AdyenPaymentMethodsResponse>;
  AdyenPaymentStatus: ResolverTypeWrapper<AdyenPaymentStatus>;
  AdyenStoredPaymentMethodsArray: ResolverTypeWrapper<AdyenStoredPaymentMethodsArray>;
  AfterpayInput: AfterpayInput;
  AfterpayRedirectPathInput: AfterpayRedirectPathInput;
  Aggregation: ResolverTypeWrapper<Aggregation>;
  AggregationOption: ResolverTypeWrapper<AggregationOption>;
  AggregationOptionInterface: ResolversTypes['AggregationOption'];
  AggregationsCategoryFilterInput: AggregationsCategoryFilterInput;
  AggregationsFilterInput: AggregationsFilterInput;
  AppliedCoupon: ResolverTypeWrapper<AppliedCoupon>;
  AppliedGiftCard: ResolverTypeWrapper<AppliedGiftCard>;
  AppliedStoreCredit: ResolverTypeWrapper<AppliedStoreCredit>;
  ApplyCouponToCartInput: ApplyCouponToCartInput;
  ApplyCouponToCartOutput: ResolverTypeWrapper<ApplyCouponToCartOutput>;
  ApplyGiftCardToCartInput: ApplyGiftCardToCartInput;
  ApplyGiftCardToCartOutput: ResolverTypeWrapper<ApplyGiftCardToCartOutput>;
  ApplyRewardPointsToCartOutput: ResolverTypeWrapper<ApplyRewardPointsToCartOutput>;
  ApplyStoreCreditToCartInput: ApplyStoreCreditToCartInput;
  ApplyStoreCreditToCartOutput: ResolverTypeWrapper<ApplyStoreCreditToCartOutput>;
  AreaInput: AreaInput;
  AssignCompareListToCustomerOutput: ResolverTypeWrapper<AssignCompareListToCustomerOutput>;
  Attribute: ResolverTypeWrapper<Attribute>;
  AttributeEntityTypeEnum: AttributeEntityTypeEnum;
  AttributeInput: AttributeInput;
  AttributeMetadataInterface: ResolversTypes['ProductAttributeMetadata'];
  AttributeOption: ResolverTypeWrapper<AttributeOption>;
  AttributeOptionInterface: ResolversTypes['AttributeOption'];
  AttributeOptions: ResolverTypeWrapper<AttributeOptions>;
  AttributeOptionsInterface: ResolversTypes['AttributeOptions'] | ResolversTypes['UiAttributeTypeBoolean'] | ResolversTypes['UiAttributeTypeMultiSelect'] | ResolversTypes['UiAttributeTypeSelect'];
  AttributesMetadata: ResolverTypeWrapper<AttributesMetadata>;
  AvailablePaymentMethod: ResolverTypeWrapper<AvailablePaymentMethod>;
  AvailableShippingMethod: ResolverTypeWrapper<AvailableShippingMethod>;
  BatchMutationStatus: BatchMutationStatus;
  BillingAddressInput: BillingAddressInput;
  BillingCartAddress: ResolverTypeWrapper<BillingCartAddress>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  BraintreeCcVaultInput: BraintreeCcVaultInput;
  BraintreeInput: BraintreeInput;
  Breadcrumb: ResolverTypeWrapper<Breadcrumb>;
  BundleCartItem: ResolverTypeWrapper<BundleCartItem>;
  BundleCreditMemoItem: ResolverTypeWrapper<BundleCreditMemoItem>;
  BundleInvoiceItem: ResolverTypeWrapper<BundleInvoiceItem>;
  BundleItem: ResolverTypeWrapper<BundleItem>;
  BundleItemOption: ResolverTypeWrapper<BundleItemOption>;
  BundleOptionInput: BundleOptionInput;
  BundleOrderItem: ResolverTypeWrapper<BundleOrderItem>;
  BundleProduct: ResolverTypeWrapper<BundleProduct>;
  BundleProductCartItemInput: BundleProductCartItemInput;
  BundleShipmentItem: ResolverTypeWrapper<BundleShipmentItem>;
  BundleWishlistItem: ResolverTypeWrapper<BundleWishlistItem>;
  Cart: ResolverTypeWrapper<Cart>;
  CartAddressCountry: ResolverTypeWrapper<CartAddressCountry>;
  CartAddressInput: CartAddressInput;
  CartAddressInterface: ResolversTypes['BillingCartAddress'] | ResolversTypes['ShippingCartAddress'];
  CartAddressRegion: ResolverTypeWrapper<CartAddressRegion>;
  CartDiscount: ResolverTypeWrapper<CartDiscount>;
  CartErrorType: CartErrorType;
  CartItemError: ResolverTypeWrapper<CartItemError>;
  CartItemErrorType: CartItemErrorType;
  CartItemInput: CartItemInput;
  CartItemInterface: ResolversTypes['BundleCartItem'] | ResolversTypes['ConfigurableCartItem'] | ResolversTypes['DownloadableCartItem'] | ResolversTypes['GiftCardCartItem'] | ResolversTypes['SimpleCartItem'] | ResolversTypes['VirtualCartItem'];
  CartItemPrices: ResolverTypeWrapper<CartItemPrices>;
  CartItemQuantity: ResolverTypeWrapper<CartItemQuantity>;
  CartItemSelectedOptionValuePrice: ResolverTypeWrapper<CartItemSelectedOptionValuePrice>;
  CartItemUpdateInput: CartItemUpdateInput;
  CartPrices: ResolverTypeWrapper<CartPrices>;
  CartTaxItem: ResolverTypeWrapper<CartTaxItem>;
  CartUserInputError: ResolverTypeWrapper<CartUserInputError>;
  CartUserInputErrorType: CartUserInputErrorType;
  CategoryFilterInput: CategoryFilterInput;
  CategoryInterface: ResolversTypes['CategoryTree'];
  CategoryProducts: ResolverTypeWrapper<CategoryProducts>;
  CategoryResult: ResolverTypeWrapper<CategoryResult>;
  CategoryTree: ResolverTypeWrapper<CategoryTree>;
  CheckoutAgreement: ResolverTypeWrapper<CheckoutAgreement>;
  CheckoutAgreementMode: CheckoutAgreementMode;
  CheckoutUserInputError: ResolverTypeWrapper<CheckoutUserInputError>;
  CheckoutUserInputErrorCodes: CheckoutUserInputErrorCodes;
  ClearCustomerCartOutput: ResolverTypeWrapper<ClearCustomerCartOutput>;
  CmsBlock: ResolverTypeWrapper<CmsBlock>;
  CmsBlocks: ResolverTypeWrapper<CmsBlocks>;
  CmsPage: ResolverTypeWrapper<CmsPage>;
  ColorSwatchData: ResolverTypeWrapper<ColorSwatchData>;
  ComparableAttribute: ResolverTypeWrapper<ComparableAttribute>;
  ComparableItem: ResolverTypeWrapper<ComparableItem>;
  CompareList: ResolverTypeWrapper<CompareList>;
  ComplexTextValue: ResolverTypeWrapper<ComplexTextValue>;
  ConfigurableAttributeOption: ResolverTypeWrapper<ConfigurableAttributeOption>;
  ConfigurableCartItem: ResolverTypeWrapper<ConfigurableCartItem>;
  ConfigurableOptionAvailableForSelection: ResolverTypeWrapper<ConfigurableOptionAvailableForSelection>;
  ConfigurableProduct: ResolverTypeWrapper<ConfigurableProduct>;
  ConfigurableProductCartItemInput: ConfigurableProductCartItemInput;
  ConfigurableProductOption: ResolverTypeWrapper<ConfigurableProductOption>;
  ConfigurableProductOptionValue: ResolverTypeWrapper<ConfigurableProductOptionValue>;
  ConfigurableProductOptions: ResolverTypeWrapper<ConfigurableProductOptions>;
  ConfigurableProductOptionsSelection: ResolverTypeWrapper<ConfigurableProductOptionsSelection>;
  ConfigurableProductOptionsValues: ResolverTypeWrapper<ConfigurableProductOptionsValues>;
  ConfigurableVariant: ResolverTypeWrapper<ConfigurableVariant>;
  ConfigurableWishlistItem: ResolverTypeWrapper<ConfigurableWishlistItem>;
  ContactUsInput: ContactUsInput;
  ContactUsOutput: ResolverTypeWrapper<ContactUsOutput>;
  CoordinatesRequest: CoordinatesRequest;
  CopyProductsBetweenWishlistsOutput: ResolverTypeWrapper<CopyProductsBetweenWishlistsOutput>;
  Country: ResolverTypeWrapper<Country>;
  CountryCodeEnum: CountryCodeEnum;
  CreateCartRedirectUrls: ResolverTypeWrapper<CreateCartRedirectUrls>;
  CreateCompareListInput: CreateCompareListInput;
  CreateGiftRegistryInput: CreateGiftRegistryInput;
  CreateGiftRegistryOutput: ResolverTypeWrapper<CreateGiftRegistryOutput>;
  CreatePayflowProTokenOutput: ResolverTypeWrapper<CreatePayflowProTokenOutput>;
  CreateProductReviewInput: CreateProductReviewInput;
  CreateProductReviewOutput: ResolverTypeWrapper<CreateProductReviewOutput>;
  CreateWishlistInput: CreateWishlistInput;
  CreateWishlistOutput: ResolverTypeWrapper<CreateWishlistOutput>;
  CreditCardDetailsInput: CreditCardDetailsInput;
  CreditMemo: ResolverTypeWrapper<CreditMemo>;
  CreditMemoItem: ResolverTypeWrapper<CreditMemoItem>;
  CreditMemoItemInterface: ResolversTypes['BundleCreditMemoItem'] | ResolversTypes['CreditMemoItem'] | ResolversTypes['DownloadableCreditMemoItem'] | ResolversTypes['GiftCardCreditMemoItem'];
  CreditMemoTotal: ResolverTypeWrapper<CreditMemoTotal>;
  Currency: ResolverTypeWrapper<Currency>;
  CurrencyEnum: CurrencyEnum;
  CustomAttribute: ResolverTypeWrapper<CustomAttribute>;
  CustomAttributeMetadata: ResolverTypeWrapper<CustomAttributeMetadata>;
  CustomAttributesListsEnum: CustomAttributesListsEnum;
  Customer: ResolverTypeWrapper<Customer>;
  CustomerAddress: ResolverTypeWrapper<CustomerAddress>;
  CustomerAddressAttribute: ResolverTypeWrapper<CustomerAddressAttribute>;
  CustomerAddressAttributeInput: CustomerAddressAttributeInput;
  CustomerAddressInput: CustomerAddressInput;
  CustomerAddressRegion: ResolverTypeWrapper<CustomerAddressRegion>;
  CustomerAddressRegionInput: CustomerAddressRegionInput;
  CustomerCreateInput: CustomerCreateInput;
  CustomerDownloadableProduct: ResolverTypeWrapper<CustomerDownloadableProduct>;
  CustomerDownloadableProducts: ResolverTypeWrapper<CustomerDownloadableProducts>;
  CustomerInput: CustomerInput;
  CustomerOrder: ResolverTypeWrapper<CustomerOrder>;
  CustomerOrderSortInput: CustomerOrderSortInput;
  CustomerOrderSortableField: CustomerOrderSortableField;
  CustomerOrders: ResolverTypeWrapper<CustomerOrders>;
  CustomerOrdersFilterInput: CustomerOrdersFilterInput;
  CustomerOutput: ResolverTypeWrapper<CustomerOutput>;
  CustomerPaymentTokens: ResolverTypeWrapper<CustomerPaymentTokens>;
  CustomerStoreCredit: ResolverTypeWrapper<CustomerStoreCredit>;
  CustomerStoreCreditHistory: ResolverTypeWrapper<CustomerStoreCreditHistory>;
  CustomerStoreCreditHistoryItem: ResolverTypeWrapper<CustomerStoreCreditHistoryItem>;
  CustomerToken: ResolverTypeWrapper<CustomerToken>;
  CustomerUpdateInput: CustomerUpdateInput;
  CustomizableAreaOption: ResolverTypeWrapper<CustomizableAreaOption>;
  CustomizableAreaValue: ResolverTypeWrapper<CustomizableAreaValue>;
  CustomizableCheckboxOption: ResolverTypeWrapper<CustomizableCheckboxOption>;
  CustomizableCheckboxValue: ResolverTypeWrapper<CustomizableCheckboxValue>;
  CustomizableDateOption: ResolverTypeWrapper<CustomizableDateOption>;
  CustomizableDateTypeEnum: CustomizableDateTypeEnum;
  CustomizableDateValue: ResolverTypeWrapper<CustomizableDateValue>;
  CustomizableDropDownOption: ResolverTypeWrapper<CustomizableDropDownOption>;
  CustomizableDropDownValue: ResolverTypeWrapper<CustomizableDropDownValue>;
  CustomizableFieldOption: ResolverTypeWrapper<CustomizableFieldOption>;
  CustomizableFieldValue: ResolverTypeWrapper<CustomizableFieldValue>;
  CustomizableFileOption: ResolverTypeWrapper<CustomizableFileOption>;
  CustomizableFileValue: ResolverTypeWrapper<CustomizableFileValue>;
  CustomizableMultipleOption: ResolverTypeWrapper<CustomizableMultipleOption>;
  CustomizableMultipleValue: ResolverTypeWrapper<CustomizableMultipleValue>;
  CustomizableOptionInput: CustomizableOptionInput;
  CustomizableOptionInterface: ResolversTypes['CustomizableAreaOption'] | ResolversTypes['CustomizableCheckboxOption'] | ResolversTypes['CustomizableDateOption'] | ResolversTypes['CustomizableDropDownOption'] | ResolversTypes['CustomizableFieldOption'] | ResolversTypes['CustomizableFileOption'] | ResolversTypes['CustomizableMultipleOption'] | ResolversTypes['CustomizableRadioOption'];
  CustomizableProductInterface: ResolversTypes['BundleProduct'] | ResolversTypes['ConfigurableProduct'] | ResolversTypes['DownloadableProduct'] | ResolversTypes['GiftCardProduct'] | ResolversTypes['SimpleProduct'] | ResolversTypes['VirtualProduct'];
  CustomizableRadioOption: ResolverTypeWrapper<CustomizableRadioOption>;
  CustomizableRadioValue: ResolverTypeWrapper<CustomizableRadioValue>;
  DeleteCompareListOutput: ResolverTypeWrapper<DeleteCompareListOutput>;
  DeletePaymentTokenOutput: ResolverTypeWrapper<DeletePaymentTokenOutput>;
  DeleteWishlistOutput: ResolverTypeWrapper<DeleteWishlistOutput>;
  DeliveryInstructions: ResolverTypeWrapper<DeliveryInstructions>;
  Discount: ResolverTypeWrapper<Discount>;
  DownloadableCartItem: ResolverTypeWrapper<DownloadableCartItem>;
  DownloadableCreditMemoItem: ResolverTypeWrapper<DownloadableCreditMemoItem>;
  DownloadableFileTypeEnum: DownloadableFileTypeEnum;
  DownloadableInvoiceItem: ResolverTypeWrapper<DownloadableInvoiceItem>;
  DownloadableItemsLinks: ResolverTypeWrapper<DownloadableItemsLinks>;
  DownloadableOrderItem: ResolverTypeWrapper<DownloadableOrderItem>;
  DownloadableProduct: ResolverTypeWrapper<DownloadableProduct>;
  DownloadableProductCartItemInput: DownloadableProductCartItemInput;
  DownloadableProductLinks: ResolverTypeWrapper<DownloadableProductLinks>;
  DownloadableProductLinksInput: DownloadableProductLinksInput;
  DownloadableProductSamples: ResolverTypeWrapper<DownloadableProductSamples>;
  DownloadableWishlistItem: ResolverTypeWrapper<DownloadableWishlistItem>;
  DynamicBlock: ResolverTypeWrapper<DynamicBlock>;
  DynamicBlockLocationEnum: DynamicBlockLocationEnum;
  DynamicBlockTypeEnum: DynamicBlockTypeEnum;
  DynamicBlocks: ResolverTypeWrapper<DynamicBlocks>;
  DynamicBlocksFilterInput: DynamicBlocksFilterInput;
  EnteredAttributeValue: ResolverTypeWrapper<EnteredAttributeValue>;
  EnteredCustomAttributeInput: EnteredCustomAttributeInput;
  EnteredOptionInput: EnteredOptionInput;
  EntityUrl: ResolverTypeWrapper<EntityUrl>;
  ErrorInterface: ResolversTypes['InternalError'] | ResolversTypes['NoSuchEntityUidError'];
  ExchangeRate: ResolverTypeWrapper<ExchangeRate>;
  FilterEqualTypeInput: FilterEqualTypeInput;
  FilterMatchTypeInput: FilterMatchTypeInput;
  FilterRangeTypeInput: FilterRangeTypeInput;
  FilterStringTypeInput: FilterStringTypeInput;
  FilterTypeEnum: FilterTypeEnum;
  FilterTypeInput: FilterTypeInput;
  FixedProductTax: ResolverTypeWrapper<FixedProductTax>;
  FixedProductTaxDisplaySettings: FixedProductTaxDisplaySettings;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  FreeShippingDetails: ResolverTypeWrapper<FreeShippingDetails>;
  GenerateCustomerTokenAsAdminInput: GenerateCustomerTokenAsAdminInput;
  GenerateCustomerTokenAsAdminOutput: ResolverTypeWrapper<GenerateCustomerTokenAsAdminOutput>;
  GiftCardAccount: ResolverTypeWrapper<GiftCardAccount>;
  GiftCardAccountInput: GiftCardAccountInput;
  GiftCardAmounts: ResolverTypeWrapper<GiftCardAmounts>;
  GiftCardCartItem: ResolverTypeWrapper<GiftCardCartItem>;
  GiftCardCreditMemoItem: ResolverTypeWrapper<GiftCardCreditMemoItem>;
  GiftCardInvoiceItem: ResolverTypeWrapper<GiftCardInvoiceItem>;
  GiftCardItem: ResolverTypeWrapper<GiftCardItem>;
  GiftCardOptions: ResolverTypeWrapper<GiftCardOptions>;
  GiftCardOrderItem: ResolverTypeWrapper<GiftCardOrderItem>;
  GiftCardProduct: ResolverTypeWrapper<GiftCardProduct>;
  GiftCardShipmentItem: ResolverTypeWrapper<GiftCardShipmentItem>;
  GiftCardTypeEnum: GiftCardTypeEnum;
  GiftCardWishlistItem: ResolverTypeWrapper<GiftCardWishlistItem>;
  GiftMessage: ResolverTypeWrapper<GiftMessage>;
  GiftMessageInput: GiftMessageInput;
  GiftOptionsPrices: ResolverTypeWrapper<GiftOptionsPrices>;
  GiftRegistry: ResolverTypeWrapper<GiftRegistry>;
  GiftRegistryDynamicAttribute: ResolverTypeWrapper<GiftRegistryDynamicAttribute>;
  GiftRegistryDynamicAttributeGroup: GiftRegistryDynamicAttributeGroup;
  GiftRegistryDynamicAttributeInput: GiftRegistryDynamicAttributeInput;
  GiftRegistryDynamicAttributeInterface: ResolversTypes['GiftRegistryDynamicAttribute'] | ResolversTypes['GiftRegistryRegistrantDynamicAttribute'];
  GiftRegistryDynamicAttributeMetadata: ResolverTypeWrapper<GiftRegistryDynamicAttributeMetadata>;
  GiftRegistryDynamicAttributeMetadataInterface: ResolversTypes['GiftRegistryDynamicAttributeMetadata'];
  GiftRegistryItem: ResolverTypeWrapper<GiftRegistryItem>;
  GiftRegistryItemInterface: ResolversTypes['GiftRegistryItem'];
  GiftRegistryItemUserErrorInterface: ResolversTypes['GiftRegistryItemUserErrors'] | ResolversTypes['MoveCartItemsToGiftRegistryOutput'];
  GiftRegistryItemUserErrors: ResolverTypeWrapper<GiftRegistryItemUserErrors>;
  GiftRegistryItemsUserError: ResolverTypeWrapper<GiftRegistryItemsUserError>;
  GiftRegistryItemsUserErrorType: GiftRegistryItemsUserErrorType;
  GiftRegistryOutput: ResolverTypeWrapper<GiftRegistryOutput>;
  GiftRegistryOutputInterface: ResolversTypes['GiftRegistryOutput'] | ResolversTypes['MoveCartItemsToGiftRegistryOutput'];
  GiftRegistryPrivacySettings: GiftRegistryPrivacySettings;
  GiftRegistryRegistrant: ResolverTypeWrapper<GiftRegistryRegistrant>;
  GiftRegistryRegistrantDynamicAttribute: ResolverTypeWrapper<GiftRegistryRegistrantDynamicAttribute>;
  GiftRegistrySearchResult: ResolverTypeWrapper<GiftRegistrySearchResult>;
  GiftRegistryShippingAddressInput: GiftRegistryShippingAddressInput;
  GiftRegistryStatus: GiftRegistryStatus;
  GiftRegistryType: ResolverTypeWrapper<GiftRegistryType>;
  GiftWrapping: ResolverTypeWrapper<GiftWrapping>;
  GiftWrappingImage: ResolverTypeWrapper<GiftWrappingImage>;
  GroupedProduct: ResolverTypeWrapper<GroupedProduct>;
  GroupedProductItem: ResolverTypeWrapper<GroupedProductItem>;
  GroupedProductWishlistItem: ResolverTypeWrapper<GroupedProductWishlistItem>;
  HostedProInput: HostedProInput;
  HostedProUrl: ResolverTypeWrapper<HostedProUrl>;
  HostedProUrlInput: HostedProUrlInput;
  HttpQueryParameter: ResolverTypeWrapper<HttpQueryParameter>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  ImageSwatchData: ResolverTypeWrapper<ImageSwatchData>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  InternalError: ResolverTypeWrapper<InternalError>;
  Invoice: ResolverTypeWrapper<Invoice>;
  InvoiceItem: ResolverTypeWrapper<InvoiceItem>;
  InvoiceItemInterface: ResolversTypes['BundleInvoiceItem'] | ResolversTypes['DownloadableInvoiceItem'] | ResolversTypes['GiftCardInvoiceItem'] | ResolversTypes['InvoiceItem'];
  InvoiceTotal: ResolverTypeWrapper<InvoiceTotal>;
  IsEmailAvailableOutput: ResolverTypeWrapper<IsEmailAvailableOutput>;
  ItemMap: ResolverTypeWrapper<ItemMap>;
  ItemSelectedBundleOption: ResolverTypeWrapper<ItemSelectedBundleOption>;
  ItemSelectedBundleOptionValue: ResolverTypeWrapper<ItemSelectedBundleOptionValue>;
  KeyMessage: ResolverTypeWrapper<KeyMessage>;
  KeyMessageResult: ResolverTypeWrapper<KeyMessageResult>;
  KeyValue: ResolverTypeWrapper<KeyValue>;
  LayerFilter: ResolverTypeWrapper<LayerFilter>;
  LayerFilterItem: ResolverTypeWrapper<LayerFilterItem>;
  LayerFilterItemInterface: ResolversTypes['LayerFilterItem'] | ResolversTypes['SwatchLayerFilterItem'];
  MediaGalleryEntry: ResolverTypeWrapper<MediaGalleryEntry>;
  MediaGalleryInterface: ResolversTypes['ProductImage'] | ResolversTypes['ProductVideo'];
  Money: ResolverTypeWrapper<Money>;
  MoveCartItemsToGiftRegistryOutput: ResolverTypeWrapper<MoveCartItemsToGiftRegistryOutput>;
  MoveProductsBetweenWishlistsOutput: ResolverTypeWrapper<MoveProductsBetweenWishlistsOutput>;
  Mutation: ResolverTypeWrapper<{}>;
  NoSuchEntityUidError: ResolverTypeWrapper<NoSuchEntityUidError>;
  ObjectDataTypeEnum: ObjectDataTypeEnum;
  Order: ResolverTypeWrapper<Order>;
  OrderAddress: ResolverTypeWrapper<OrderAddress>;
  OrderItem: ResolverTypeWrapper<OrderItem>;
  OrderItemInterface: ResolversTypes['BundleOrderItem'] | ResolversTypes['DownloadableOrderItem'] | ResolversTypes['GiftCardOrderItem'] | ResolversTypes['OrderItem'];
  OrderItemOption: ResolverTypeWrapper<OrderItemOption>;
  OrderPaymentMethod: ResolverTypeWrapper<OrderPaymentMethod>;
  OrderShipment: ResolverTypeWrapper<OrderShipment>;
  OrderTotal: ResolverTypeWrapper<OrderTotal>;
  PayflowExpressInput: PayflowExpressInput;
  PayflowLinkInput: PayflowLinkInput;
  PayflowLinkMode: PayflowLinkMode;
  PayflowLinkToken: ResolverTypeWrapper<PayflowLinkToken>;
  PayflowLinkTokenInput: PayflowLinkTokenInput;
  PayflowProInput: PayflowProInput;
  PayflowProResponseInput: PayflowProResponseInput;
  PayflowProResponseOutput: ResolverTypeWrapper<PayflowProResponseOutput>;
  PayflowProToken: ResolverTypeWrapper<PayflowProToken>;
  PayflowProTokenInput: PayflowProTokenInput;
  PayflowProUrlInput: PayflowProUrlInput;
  PaymentMethodInput: PaymentMethodInput;
  PaymentToken: ResolverTypeWrapper<PaymentToken>;
  PaymentTokenTypeEnum: PaymentTokenTypeEnum;
  PaypalExpressClientConfig: ResolverTypeWrapper<PaypalExpressClientConfig>;
  PaypalExpressConfig: ResolverTypeWrapper<PaypalExpressConfig>;
  PaypalExpressInContextConfig: ResolverTypeWrapper<PaypalExpressInContextConfig>;
  PaypalExpressInput: PaypalExpressInput;
  PaypalExpressToken: ResolverTypeWrapper<PaypalExpressToken>;
  PaypalExpressTokenInput: PaypalExpressTokenInput;
  PaypalExpressTokenOutput: ResolverTypeWrapper<PaypalExpressTokenOutput>;
  PaypalExpressUrlList: ResolverTypeWrapper<PaypalExpressUrlList>;
  PaypalExpressUrlsInput: PaypalExpressUrlsInput;
  PhysicalProductInterface: ResolversTypes['BundleProduct'] | ResolversTypes['ConfigurableProduct'] | ResolversTypes['GiftCardProduct'] | ResolversTypes['GroupedProduct'] | ResolversTypes['SimpleProduct'];
  PickupLocation: ResolverTypeWrapper<PickupLocation>;
  PickupLocationFilterInput: PickupLocationFilterInput;
  PickupLocationSortInput: PickupLocationSortInput;
  PickupLocations: ResolverTypeWrapper<PickupLocations>;
  PlaceOrderInput: PlaceOrderInput;
  PlaceOrderOutput: ResolverTypeWrapper<PlaceOrderOutput>;
  Price: ResolverTypeWrapper<Price>;
  PriceAdjustment: ResolverTypeWrapper<PriceAdjustment>;
  PriceAdjustmentCodesEnum: PriceAdjustmentCodesEnum;
  PriceAdjustmentDescriptionEnum: PriceAdjustmentDescriptionEnum;
  PriceRange: ResolverTypeWrapper<PriceRange>;
  PriceTypeEnum: PriceTypeEnum;
  PriceViewEnum: PriceViewEnum;
  ProductAttribute: ResolverTypeWrapper<ProductAttribute>;
  ProductAttributeFilterInput: ProductAttributeFilterInput;
  ProductAttributeMetadata: ResolverTypeWrapper<ProductAttributeMetadata>;
  ProductAttributeSortInput: ProductAttributeSortInput;
  ProductAvailability: ResolverTypeWrapper<ProductAvailability>;
  ProductAvailabilityStatus: ProductAvailabilityStatus;
  ProductDiscount: ResolverTypeWrapper<ProductDiscount>;
  ProductFilterInput: ProductFilterInput;
  ProductImage: ResolverTypeWrapper<ProductImage>;
  ProductInfoInput: ProductInfoInput;
  ProductInterface: ResolversTypes['BundleProduct'] | ResolversTypes['ConfigurableProduct'] | ResolversTypes['DownloadableProduct'] | ResolversTypes['GiftCardProduct'] | ResolversTypes['GroupedProduct'] | ResolversTypes['SimpleProduct'] | ResolversTypes['VirtualProduct'];
  ProductLinks: ResolverTypeWrapper<ProductLinks>;
  ProductLinksInterface: ResolversTypes['ProductLinks'];
  ProductMediaGalleryEntriesContent: ResolverTypeWrapper<ProductMediaGalleryEntriesContent>;
  ProductMediaGalleryEntriesVideoContent: ResolverTypeWrapper<ProductMediaGalleryEntriesVideoContent>;
  ProductPrice: ResolverTypeWrapper<ProductPrice>;
  ProductPrices: ResolverTypeWrapper<ProductPrices>;
  ProductReview: ResolverTypeWrapper<ProductReview>;
  ProductReviewRating: ResolverTypeWrapper<ProductReviewRating>;
  ProductReviewRatingInput: ProductReviewRatingInput;
  ProductReviewRatingMetadata: ResolverTypeWrapper<ProductReviewRatingMetadata>;
  ProductReviewRatingValueMetadata: ResolverTypeWrapper<ProductReviewRatingValueMetadata>;
  ProductReviewRatingsMetadata: ResolverTypeWrapper<ProductReviewRatingsMetadata>;
  ProductReviews: ResolverTypeWrapper<ProductReviews>;
  ProductSortInput: ProductSortInput;
  ProductStockStatus: ProductStockStatus;
  ProductTierPrices: ResolverTypeWrapper<ProductTierPrices>;
  ProductVideo: ResolverTypeWrapper<ProductVideo>;
  Products: ResolverTypeWrapper<Products>;
  ProductsBySkusInput: ProductsBySkusInput;
  ProductsBySkusSortInput: ProductsBySkusSortInput;
  Query: ResolverTypeWrapper<{}>;
  ReCaptchaConfigurationV3: ResolverTypeWrapper<ReCaptchaConfigurationV3>;
  ReCaptchaFormEnum: ReCaptchaFormEnum;
  RedirectUrls: ResolverTypeWrapper<RedirectUrls>;
  Region: ResolverTypeWrapper<Region>;
  ReleaseDate: ResolverTypeWrapper<ReleaseDate>;
  RemoveCouponFromCartInput: RemoveCouponFromCartInput;
  RemoveCouponFromCartOutput: ResolverTypeWrapper<RemoveCouponFromCartOutput>;
  RemoveGiftCardFromCartInput: RemoveGiftCardFromCartInput;
  RemoveGiftCardFromCartOutput: ResolverTypeWrapper<RemoveGiftCardFromCartOutput>;
  RemoveGiftRegistryItemsOutput: ResolverTypeWrapper<RemoveGiftRegistryItemsOutput>;
  RemoveGiftRegistryOutput: ResolverTypeWrapper<RemoveGiftRegistryOutput>;
  RemoveGiftRegistryRegistrantsOutput: ResolverTypeWrapper<RemoveGiftRegistryRegistrantsOutput>;
  RemoveItemFromCartInput: RemoveItemFromCartInput;
  RemoveItemFromCartOutput: ResolverTypeWrapper<RemoveItemFromCartOutput>;
  RemoveProductsFromCompareListInput: RemoveProductsFromCompareListInput;
  RemoveProductsFromWishlistOutput: ResolverTypeWrapper<RemoveProductsFromWishlistOutput>;
  RemoveReturnTrackingInput: RemoveReturnTrackingInput;
  RemoveReturnTrackingOutput: ResolverTypeWrapper<RemoveReturnTrackingOutput>;
  RemoveRewardPointsFromCartOutput: ResolverTypeWrapper<RemoveRewardPointsFromCartOutput>;
  RemoveStoreCreditFromCartInput: RemoveStoreCreditFromCartInput;
  RemoveStoreCreditFromCartOutput: ResolverTypeWrapper<RemoveStoreCreditFromCartOutput>;
  ReorderItemsOutput: ResolverTypeWrapper<ReorderItemsOutput>;
  RequestReturnInput: RequestReturnInput;
  RequestReturnItemInput: RequestReturnItemInput;
  RequestReturnOutput: ResolverTypeWrapper<RequestReturnOutput>;
  Return: ResolverTypeWrapper<Return>;
  ReturnComment: ResolverTypeWrapper<ReturnComment>;
  ReturnCustomAttribute: ResolverTypeWrapper<ReturnCustomAttribute>;
  ReturnCustomer: ResolverTypeWrapper<ReturnCustomer>;
  ReturnItem: ResolverTypeWrapper<ReturnItem>;
  ReturnItemStatus: ReturnItemStatus;
  ReturnShipping: ResolverTypeWrapper<ReturnShipping>;
  ReturnShippingAddress: ResolverTypeWrapper<ReturnShippingAddress>;
  ReturnShippingCarrier: ResolverTypeWrapper<ReturnShippingCarrier>;
  ReturnShippingTracking: ResolverTypeWrapper<ReturnShippingTracking>;
  ReturnShippingTrackingStatus: ResolverTypeWrapper<ReturnShippingTrackingStatus>;
  ReturnShippingTrackingStatusType: ReturnShippingTrackingStatusType;
  ReturnStatus: ReturnStatus;
  Returns: ResolverTypeWrapper<Returns>;
  RevokeCustomerTokenOutput: ResolverTypeWrapper<RevokeCustomerTokenOutput>;
  RewardPoints: ResolverTypeWrapper<RewardPoints>;
  RewardPointsAmount: ResolverTypeWrapper<RewardPointsAmount>;
  RewardPointsBalanceHistoryItem: ResolverTypeWrapper<RewardPointsBalanceHistoryItem>;
  RewardPointsExchangeRates: ResolverTypeWrapper<RewardPointsExchangeRates>;
  RewardPointsRate: ResolverTypeWrapper<RewardPointsRate>;
  RewardPointsSubscriptionStatus: ResolverTypeWrapper<RewardPointsSubscriptionStatus>;
  RewardPointsSubscriptionStatusesEnum: RewardPointsSubscriptionStatusesEnum;
  RoutableInterface: ResolversTypes['BundleProduct'] | ResolversTypes['CategoryTree'] | ResolversTypes['CmsPage'] | ResolversTypes['ConfigurableProduct'] | ResolversTypes['DownloadableProduct'] | ResolversTypes['GiftCardProduct'] | ResolversTypes['GroupedProduct'] | ResolversTypes['SimpleProduct'] | ResolversTypes['VirtualProduct'];
  SalesCommentItem: ResolverTypeWrapper<SalesCommentItem>;
  SalesItemInterface: ResolverTypeWrapper<SalesItemInterface>;
  ScopeTypeEnum: ScopeTypeEnum;
  SearchResultPageInfo: ResolverTypeWrapper<SearchResultPageInfo>;
  SearchSuggestion: ResolverTypeWrapper<SearchSuggestion>;
  SelectableInputTypeInterface: ResolversTypes['UiAttributeTypeBoolean'] | ResolversTypes['UiAttributeTypeMultiSelect'] | ResolversTypes['UiAttributeTypeSelect'];
  SelectedAttributeOption: ResolverTypeWrapper<SelectedAttributeOption>;
  SelectedBundleOption: ResolverTypeWrapper<SelectedBundleOption>;
  SelectedBundleOptionValue: ResolverTypeWrapper<SelectedBundleOptionValue>;
  SelectedConfigurableOption: ResolverTypeWrapper<SelectedConfigurableOption>;
  SelectedCustomAttributeInput: SelectedCustomAttributeInput;
  SelectedCustomizableOption: ResolverTypeWrapper<SelectedCustomizableOption>;
  SelectedCustomizableOptionValue: ResolverTypeWrapper<SelectedCustomizableOptionValue>;
  SelectedPaymentMethod: ResolverTypeWrapper<SelectedPaymentMethod>;
  SelectedShippingMethod: ResolverTypeWrapper<SelectedShippingMethod>;
  SendEmailToFriendInput: SendEmailToFriendInput;
  SendEmailToFriendOutput: ResolverTypeWrapper<SendEmailToFriendOutput>;
  SendEmailToFriendRecipient: ResolverTypeWrapper<SendEmailToFriendRecipient>;
  SendEmailToFriendRecipientInput: SendEmailToFriendRecipientInput;
  SendEmailToFriendSender: ResolverTypeWrapper<SendEmailToFriendSender>;
  SendEmailToFriendSenderInput: SendEmailToFriendSenderInput;
  SendFriendConfiguration: ResolverTypeWrapper<SendFriendConfiguration>;
  SetBillingAddressOnCartInput: SetBillingAddressOnCartInput;
  SetBillingAddressOnCartOutput: ResolverTypeWrapper<SetBillingAddressOnCartOutput>;
  SetGiftOptionsOnCartInput: SetGiftOptionsOnCartInput;
  SetGiftOptionsOnCartOutput: ResolverTypeWrapper<SetGiftOptionsOnCartOutput>;
  SetGuestEmailOnCartInput: SetGuestEmailOnCartInput;
  SetGuestEmailOnCartOutput: ResolverTypeWrapper<SetGuestEmailOnCartOutput>;
  SetPaymentMethodAndPlaceOrderInput: SetPaymentMethodAndPlaceOrderInput;
  SetPaymentMethodOnCartInput: SetPaymentMethodOnCartInput;
  SetPaymentMethodOnCartOutput: ResolverTypeWrapper<SetPaymentMethodOnCartOutput>;
  SetShippingAddressesOnCartInput: SetShippingAddressesOnCartInput;
  SetShippingAddressesOnCartOutput: ResolverTypeWrapper<SetShippingAddressesOnCartOutput>;
  SetShippingMethodsOnCartInput: SetShippingMethodsOnCartInput;
  SetShippingMethodsOnCartOutput: ResolverTypeWrapper<SetShippingMethodsOnCartOutput>;
  ShareGiftRegistryInviteeInput: ShareGiftRegistryInviteeInput;
  ShareGiftRegistryOutput: ResolverTypeWrapper<ShareGiftRegistryOutput>;
  ShareGiftRegistrySenderInput: ShareGiftRegistrySenderInput;
  ShipBundleItemsEnum: ShipBundleItemsEnum;
  ShipmentItem: ResolverTypeWrapper<ShipmentItem>;
  ShipmentItemInterface: ResolversTypes['BundleShipmentItem'] | ResolversTypes['GiftCardShipmentItem'] | ResolversTypes['ShipmentItem'];
  ShipmentTracking: ResolverTypeWrapper<ShipmentTracking>;
  ShippingAddressInput: ShippingAddressInput;
  ShippingCartAddress: ResolverTypeWrapper<ShippingCartAddress>;
  ShippingDiscount: ResolverTypeWrapper<ShippingDiscount>;
  ShippingHandling: ResolverTypeWrapper<ShippingHandling>;
  ShippingMethodInput: ShippingMethodInput;
  SimpleCartItem: ResolverTypeWrapper<SimpleCartItem>;
  SimpleProduct: ResolverTypeWrapper<SimpleProduct>;
  SimpleProductCartItemInput: SimpleProductCartItemInput;
  SimpleWishlistItem: ResolverTypeWrapper<SimpleWishlistItem>;
  SocialLink: ResolverTypeWrapper<SocialLink>;
  SortEnum: SortEnum;
  SortField: ResolverTypeWrapper<SortField>;
  SortFields: ResolverTypeWrapper<SortFields>;
  StoreConfig: ResolverTypeWrapper<StoreConfig>;
  StoreInformation: ResolverTypeWrapper<StoreInformation>;
  StoreLabels: ResolverTypeWrapper<StoreLabels>;
  StoreLocation: ResolverTypeWrapper<StoreLocation>;
  StoreLocations: ResolverTypeWrapper<StoreLocations>;
  StorefrontProperties: ResolverTypeWrapper<StorefrontProperties>;
  String: ResolverTypeWrapper<Scalars['String']>;
  SubscribeEmailToNewsletterOutput: ResolverTypeWrapper<SubscribeEmailToNewsletterOutput>;
  SubscriptionStatusesEnum: SubscriptionStatusesEnum;
  SwatchData: ResolverTypeWrapper<SwatchData>;
  SwatchDataInterface: ResolversTypes['ColorSwatchData'] | ResolversTypes['ImageSwatchData'] | ResolversTypes['TextSwatchData'];
  SwatchLayerFilterItem: ResolverTypeWrapper<SwatchLayerFilterItem>;
  SwatchLayerFilterItemInterface: ResolversTypes['SwatchLayerFilterItem'];
  TaxItem: ResolverTypeWrapper<TaxItem>;
  TextSwatchData: ResolverTypeWrapper<TextSwatchData>;
  TierPrice: ResolverTypeWrapper<TierPrice>;
  UiAttributeTypeAny: ResolverTypeWrapper<UiAttributeTypeAny>;
  UiAttributeTypeBoolean: ResolverTypeWrapper<UiAttributeTypeBoolean>;
  UiAttributeTypeFixedProductTax: ResolverTypeWrapper<UiAttributeTypeFixedProductTax>;
  UiAttributeTypeMultiSelect: ResolverTypeWrapper<UiAttributeTypeMultiSelect>;
  UiAttributeTypePageBuilder: ResolverTypeWrapper<UiAttributeTypePageBuilder>;
  UiAttributeTypeSelect: ResolverTypeWrapper<UiAttributeTypeSelect>;
  UiAttributeTypeTextEditor: ResolverTypeWrapper<UiAttributeTypeTextEditor>;
  UiAttributeTypeTextarea: ResolverTypeWrapper<UiAttributeTypeTextarea>;
  UiInputTypeEnum: UiInputTypeEnum;
  UiInputTypeInterface: ResolversTypes['UiAttributeTypeAny'] | ResolversTypes['UiAttributeTypeBoolean'] | ResolversTypes['UiAttributeTypeFixedProductTax'] | ResolversTypes['UiAttributeTypeMultiSelect'] | ResolversTypes['UiAttributeTypePageBuilder'] | ResolversTypes['UiAttributeTypeSelect'] | ResolversTypes['UiAttributeTypeTextEditor'] | ResolversTypes['UiAttributeTypeTextarea'];
  UpdateCartItemsInput: UpdateCartItemsInput;
  UpdateCartItemsOutput: ResolverTypeWrapper<UpdateCartItemsOutput>;
  UpdateGiftRegistryInput: UpdateGiftRegistryInput;
  UpdateGiftRegistryItemInput: UpdateGiftRegistryItemInput;
  UpdateGiftRegistryItemsOutput: ResolverTypeWrapper<UpdateGiftRegistryItemsOutput>;
  UpdateGiftRegistryOutput: ResolverTypeWrapper<UpdateGiftRegistryOutput>;
  UpdateGiftRegistryRegistrantInput: UpdateGiftRegistryRegistrantInput;
  UpdateGiftRegistryRegistrantsOutput: ResolverTypeWrapper<UpdateGiftRegistryRegistrantsOutput>;
  UpdateProductsInWishlistOutput: ResolverTypeWrapper<UpdateProductsInWishlistOutput>;
  UpdateWishlistOutput: ResolverTypeWrapper<UpdateWishlistOutput>;
  UrlRewrite: ResolverTypeWrapper<UrlRewrite>;
  UrlRewriteEntityTypeEnum: UrlRewriteEntityTypeEnum;
  UseInLayeredNavigationOptions: UseInLayeredNavigationOptions;
  VaultTokenInput: VaultTokenInput;
  VirtualCartItem: ResolverTypeWrapper<VirtualCartItem>;
  VirtualProduct: ResolverTypeWrapper<VirtualProduct>;
  VirtualProductCartItemInput: VirtualProductCartItemInput;
  VirtualWishlistItem: ResolverTypeWrapper<VirtualWishlistItem>;
  Website: ResolverTypeWrapper<Website>;
  WishListUserInputError: ResolverTypeWrapper<WishListUserInputError>;
  WishListUserInputErrorType: WishListUserInputErrorType;
  Wishlist: ResolverTypeWrapper<Wishlist>;
  WishlistCartUserInputError: ResolverTypeWrapper<WishlistCartUserInputError>;
  WishlistCartUserInputErrorType: WishlistCartUserInputErrorType;
  WishlistItem: ResolverTypeWrapper<WishlistItem>;
  WishlistItemCopyInput: WishlistItemCopyInput;
  WishlistItemInput: WishlistItemInput;
  WishlistItemInterface: ResolversTypes['BundleWishlistItem'] | ResolversTypes['ConfigurableWishlistItem'] | ResolversTypes['DownloadableWishlistItem'] | ResolversTypes['GiftCardWishlistItem'] | ResolversTypes['GroupedProductWishlistItem'] | ResolversTypes['SimpleWishlistItem'] | ResolversTypes['VirtualWishlistItem'];
  WishlistItemMoveInput: WishlistItemMoveInput;
  WishlistItemUpdateInput: WishlistItemUpdateInput;
  WishlistItems: ResolverTypeWrapper<WishlistItems>;
  WishlistOutput: ResolverTypeWrapper<WishlistOutput>;
  WishlistVisibilityEnum: WishlistVisibilityEnum;
  afterpayConfigOutput: ResolverTypeWrapper<AfterpayConfigOutput>;
  createAfterpayCheckoutInput: CreateAfterpayCheckoutInput;
  createAfterpayCheckoutOutput: ResolverTypeWrapper<CreateAfterpayCheckoutOutput>;
  createEmptyCartInput: CreateEmptyCartInput;
  getCustomerTokenBySecretCodeOutput: ResolverTypeWrapper<GetCustomerTokenBySecretCodeOutput>;
  wishlistInput: WishlistInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddBundleProductsToCartInput: AddBundleProductsToCartInput;
  AddBundleProductsToCartOutput: AddBundleProductsToCartOutput;
  AddConfigurableProductsToCartInput: AddConfigurableProductsToCartInput;
  AddConfigurableProductsToCartOutput: AddConfigurableProductsToCartOutput;
  AddDownloadableProductsToCartInput: AddDownloadableProductsToCartInput;
  AddDownloadableProductsToCartOutput: AddDownloadableProductsToCartOutput;
  AddGiftRegistryItemInput: AddGiftRegistryItemInput;
  AddGiftRegistryRegistrantInput: AddGiftRegistryRegistrantInput;
  AddGiftRegistryRegistrantsOutput: AddGiftRegistryRegistrantsOutput;
  AddProductsToCartOutput: AddProductsToCartOutput;
  AddProductsToCompareListInput: AddProductsToCompareListInput;
  AddProductsToWishlistOutput: AddProductsToWishlistOutput;
  AddReturnCommentInput: AddReturnCommentInput;
  AddReturnCommentOutput: AddReturnCommentOutput;
  AddReturnTrackingInput: AddReturnTrackingInput;
  AddReturnTrackingOutput: AddReturnTrackingOutput;
  AddSimpleProductsToCartInput: AddSimpleProductsToCartInput;
  AddSimpleProductsToCartOutput: AddSimpleProductsToCartOutput;
  AddVirtualProductsToCartInput: AddVirtualProductsToCartInput;
  AddVirtualProductsToCartOutput: AddVirtualProductsToCartOutput;
  AddWishlistItemsToCartOutput: AddWishlistItemsToCartOutput;
  AdyenAdditionalDataBoleto: AdyenAdditionalDataBoleto;
  AdyenAdditionalDataCc: AdyenAdditionalDataCc;
  AdyenAdditionalDataHpp: AdyenAdditionalDataHpp;
  AdyenAdditionalDataOneclick: AdyenAdditionalDataOneclick;
  AdyenAdditionalDataPosCloud: AdyenAdditionalDataPosCloud;
  AdyenPaymentMethodIcon: AdyenPaymentMethodIcon;
  AdyenPaymentMethods: AdyenPaymentMethods;
  AdyenPaymentMethodsArray: AdyenPaymentMethodsArray;
  AdyenPaymentMethodsConfiguration: AdyenPaymentMethodsConfiguration;
  AdyenPaymentMethodsDetails: AdyenPaymentMethodsDetails;
  AdyenPaymentMethodsDetailsItems: AdyenPaymentMethodsDetailsItems;
  AdyenPaymentMethodsExtraDetails: AdyenPaymentMethodsExtraDetails;
  AdyenPaymentMethodsExtraDetailsConfiguration: AdyenPaymentMethodsExtraDetailsConfiguration;
  AdyenPaymentMethodsIssuers: AdyenPaymentMethodsIssuers;
  AdyenPaymentMethodsResponse: AdyenPaymentMethodsResponse;
  AdyenPaymentStatus: AdyenPaymentStatus;
  AdyenStoredPaymentMethodsArray: AdyenStoredPaymentMethodsArray;
  AfterpayInput: AfterpayInput;
  AfterpayRedirectPathInput: AfterpayRedirectPathInput;
  Aggregation: Aggregation;
  AggregationOption: AggregationOption;
  AggregationOptionInterface: ResolversParentTypes['AggregationOption'];
  AggregationsCategoryFilterInput: AggregationsCategoryFilterInput;
  AggregationsFilterInput: AggregationsFilterInput;
  AppliedCoupon: AppliedCoupon;
  AppliedGiftCard: AppliedGiftCard;
  AppliedStoreCredit: AppliedStoreCredit;
  ApplyCouponToCartInput: ApplyCouponToCartInput;
  ApplyCouponToCartOutput: ApplyCouponToCartOutput;
  ApplyGiftCardToCartInput: ApplyGiftCardToCartInput;
  ApplyGiftCardToCartOutput: ApplyGiftCardToCartOutput;
  ApplyRewardPointsToCartOutput: ApplyRewardPointsToCartOutput;
  ApplyStoreCreditToCartInput: ApplyStoreCreditToCartInput;
  ApplyStoreCreditToCartOutput: ApplyStoreCreditToCartOutput;
  AreaInput: AreaInput;
  AssignCompareListToCustomerOutput: AssignCompareListToCustomerOutput;
  Attribute: Attribute;
  AttributeInput: AttributeInput;
  AttributeMetadataInterface: ResolversParentTypes['ProductAttributeMetadata'];
  AttributeOption: AttributeOption;
  AttributeOptionInterface: ResolversParentTypes['AttributeOption'];
  AttributeOptions: AttributeOptions;
  AttributeOptionsInterface: ResolversParentTypes['AttributeOptions'] | ResolversParentTypes['UiAttributeTypeBoolean'] | ResolversParentTypes['UiAttributeTypeMultiSelect'] | ResolversParentTypes['UiAttributeTypeSelect'];
  AttributesMetadata: AttributesMetadata;
  AvailablePaymentMethod: AvailablePaymentMethod;
  AvailableShippingMethod: AvailableShippingMethod;
  BillingAddressInput: BillingAddressInput;
  BillingCartAddress: BillingCartAddress;
  Boolean: Scalars['Boolean'];
  BraintreeCcVaultInput: BraintreeCcVaultInput;
  BraintreeInput: BraintreeInput;
  Breadcrumb: Breadcrumb;
  BundleCartItem: BundleCartItem;
  BundleCreditMemoItem: BundleCreditMemoItem;
  BundleInvoiceItem: BundleInvoiceItem;
  BundleItem: BundleItem;
  BundleItemOption: BundleItemOption;
  BundleOptionInput: BundleOptionInput;
  BundleOrderItem: BundleOrderItem;
  BundleProduct: BundleProduct;
  BundleProductCartItemInput: BundleProductCartItemInput;
  BundleShipmentItem: BundleShipmentItem;
  BundleWishlistItem: BundleWishlistItem;
  Cart: Cart;
  CartAddressCountry: CartAddressCountry;
  CartAddressInput: CartAddressInput;
  CartAddressInterface: ResolversParentTypes['BillingCartAddress'] | ResolversParentTypes['ShippingCartAddress'];
  CartAddressRegion: CartAddressRegion;
  CartDiscount: CartDiscount;
  CartItemError: CartItemError;
  CartItemInput: CartItemInput;
  CartItemInterface: ResolversParentTypes['BundleCartItem'] | ResolversParentTypes['ConfigurableCartItem'] | ResolversParentTypes['DownloadableCartItem'] | ResolversParentTypes['GiftCardCartItem'] | ResolversParentTypes['SimpleCartItem'] | ResolversParentTypes['VirtualCartItem'];
  CartItemPrices: CartItemPrices;
  CartItemQuantity: CartItemQuantity;
  CartItemSelectedOptionValuePrice: CartItemSelectedOptionValuePrice;
  CartItemUpdateInput: CartItemUpdateInput;
  CartPrices: CartPrices;
  CartTaxItem: CartTaxItem;
  CartUserInputError: CartUserInputError;
  CategoryFilterInput: CategoryFilterInput;
  CategoryInterface: ResolversParentTypes['CategoryTree'];
  CategoryProducts: CategoryProducts;
  CategoryResult: CategoryResult;
  CategoryTree: CategoryTree;
  CheckoutAgreement: CheckoutAgreement;
  CheckoutUserInputError: CheckoutUserInputError;
  ClearCustomerCartOutput: ClearCustomerCartOutput;
  CmsBlock: CmsBlock;
  CmsBlocks: CmsBlocks;
  CmsPage: CmsPage;
  ColorSwatchData: ColorSwatchData;
  ComparableAttribute: ComparableAttribute;
  ComparableItem: ComparableItem;
  CompareList: CompareList;
  ComplexTextValue: ComplexTextValue;
  ConfigurableAttributeOption: ConfigurableAttributeOption;
  ConfigurableCartItem: ConfigurableCartItem;
  ConfigurableOptionAvailableForSelection: ConfigurableOptionAvailableForSelection;
  ConfigurableProduct: ConfigurableProduct;
  ConfigurableProductCartItemInput: ConfigurableProductCartItemInput;
  ConfigurableProductOption: ConfigurableProductOption;
  ConfigurableProductOptionValue: ConfigurableProductOptionValue;
  ConfigurableProductOptions: ConfigurableProductOptions;
  ConfigurableProductOptionsSelection: ConfigurableProductOptionsSelection;
  ConfigurableProductOptionsValues: ConfigurableProductOptionsValues;
  ConfigurableVariant: ConfigurableVariant;
  ConfigurableWishlistItem: ConfigurableWishlistItem;
  ContactUsInput: ContactUsInput;
  ContactUsOutput: ContactUsOutput;
  CoordinatesRequest: CoordinatesRequest;
  CopyProductsBetweenWishlistsOutput: CopyProductsBetweenWishlistsOutput;
  Country: Country;
  CreateCartRedirectUrls: CreateCartRedirectUrls;
  CreateCompareListInput: CreateCompareListInput;
  CreateGiftRegistryInput: CreateGiftRegistryInput;
  CreateGiftRegistryOutput: CreateGiftRegistryOutput;
  CreatePayflowProTokenOutput: CreatePayflowProTokenOutput;
  CreateProductReviewInput: CreateProductReviewInput;
  CreateProductReviewOutput: CreateProductReviewOutput;
  CreateWishlistInput: CreateWishlistInput;
  CreateWishlistOutput: CreateWishlistOutput;
  CreditCardDetailsInput: CreditCardDetailsInput;
  CreditMemo: CreditMemo;
  CreditMemoItem: CreditMemoItem;
  CreditMemoItemInterface: ResolversParentTypes['BundleCreditMemoItem'] | ResolversParentTypes['CreditMemoItem'] | ResolversParentTypes['DownloadableCreditMemoItem'] | ResolversParentTypes['GiftCardCreditMemoItem'];
  CreditMemoTotal: CreditMemoTotal;
  Currency: Currency;
  CustomAttribute: CustomAttribute;
  CustomAttributeMetadata: CustomAttributeMetadata;
  Customer: Customer;
  CustomerAddress: CustomerAddress;
  CustomerAddressAttribute: CustomerAddressAttribute;
  CustomerAddressAttributeInput: CustomerAddressAttributeInput;
  CustomerAddressInput: CustomerAddressInput;
  CustomerAddressRegion: CustomerAddressRegion;
  CustomerAddressRegionInput: CustomerAddressRegionInput;
  CustomerCreateInput: CustomerCreateInput;
  CustomerDownloadableProduct: CustomerDownloadableProduct;
  CustomerDownloadableProducts: CustomerDownloadableProducts;
  CustomerInput: CustomerInput;
  CustomerOrder: CustomerOrder;
  CustomerOrderSortInput: CustomerOrderSortInput;
  CustomerOrders: CustomerOrders;
  CustomerOrdersFilterInput: CustomerOrdersFilterInput;
  CustomerOutput: CustomerOutput;
  CustomerPaymentTokens: CustomerPaymentTokens;
  CustomerStoreCredit: CustomerStoreCredit;
  CustomerStoreCreditHistory: CustomerStoreCreditHistory;
  CustomerStoreCreditHistoryItem: CustomerStoreCreditHistoryItem;
  CustomerToken: CustomerToken;
  CustomerUpdateInput: CustomerUpdateInput;
  CustomizableAreaOption: CustomizableAreaOption;
  CustomizableAreaValue: CustomizableAreaValue;
  CustomizableCheckboxOption: CustomizableCheckboxOption;
  CustomizableCheckboxValue: CustomizableCheckboxValue;
  CustomizableDateOption: CustomizableDateOption;
  CustomizableDateValue: CustomizableDateValue;
  CustomizableDropDownOption: CustomizableDropDownOption;
  CustomizableDropDownValue: CustomizableDropDownValue;
  CustomizableFieldOption: CustomizableFieldOption;
  CustomizableFieldValue: CustomizableFieldValue;
  CustomizableFileOption: CustomizableFileOption;
  CustomizableFileValue: CustomizableFileValue;
  CustomizableMultipleOption: CustomizableMultipleOption;
  CustomizableMultipleValue: CustomizableMultipleValue;
  CustomizableOptionInput: CustomizableOptionInput;
  CustomizableOptionInterface: ResolversParentTypes['CustomizableAreaOption'] | ResolversParentTypes['CustomizableCheckboxOption'] | ResolversParentTypes['CustomizableDateOption'] | ResolversParentTypes['CustomizableDropDownOption'] | ResolversParentTypes['CustomizableFieldOption'] | ResolversParentTypes['CustomizableFileOption'] | ResolversParentTypes['CustomizableMultipleOption'] | ResolversParentTypes['CustomizableRadioOption'];
  CustomizableProductInterface: ResolversParentTypes['BundleProduct'] | ResolversParentTypes['ConfigurableProduct'] | ResolversParentTypes['DownloadableProduct'] | ResolversParentTypes['GiftCardProduct'] | ResolversParentTypes['SimpleProduct'] | ResolversParentTypes['VirtualProduct'];
  CustomizableRadioOption: CustomizableRadioOption;
  CustomizableRadioValue: CustomizableRadioValue;
  DeleteCompareListOutput: DeleteCompareListOutput;
  DeletePaymentTokenOutput: DeletePaymentTokenOutput;
  DeleteWishlistOutput: DeleteWishlistOutput;
  DeliveryInstructions: DeliveryInstructions;
  Discount: Discount;
  DownloadableCartItem: DownloadableCartItem;
  DownloadableCreditMemoItem: DownloadableCreditMemoItem;
  DownloadableInvoiceItem: DownloadableInvoiceItem;
  DownloadableItemsLinks: DownloadableItemsLinks;
  DownloadableOrderItem: DownloadableOrderItem;
  DownloadableProduct: DownloadableProduct;
  DownloadableProductCartItemInput: DownloadableProductCartItemInput;
  DownloadableProductLinks: DownloadableProductLinks;
  DownloadableProductLinksInput: DownloadableProductLinksInput;
  DownloadableProductSamples: DownloadableProductSamples;
  DownloadableWishlistItem: DownloadableWishlistItem;
  DynamicBlock: DynamicBlock;
  DynamicBlocks: DynamicBlocks;
  DynamicBlocksFilterInput: DynamicBlocksFilterInput;
  EnteredAttributeValue: EnteredAttributeValue;
  EnteredCustomAttributeInput: EnteredCustomAttributeInput;
  EnteredOptionInput: EnteredOptionInput;
  EntityUrl: EntityUrl;
  ErrorInterface: ResolversParentTypes['InternalError'] | ResolversParentTypes['NoSuchEntityUidError'];
  ExchangeRate: ExchangeRate;
  FilterEqualTypeInput: FilterEqualTypeInput;
  FilterMatchTypeInput: FilterMatchTypeInput;
  FilterRangeTypeInput: FilterRangeTypeInput;
  FilterStringTypeInput: FilterStringTypeInput;
  FilterTypeInput: FilterTypeInput;
  FixedProductTax: FixedProductTax;
  Float: Scalars['Float'];
  FreeShippingDetails: FreeShippingDetails;
  GenerateCustomerTokenAsAdminInput: GenerateCustomerTokenAsAdminInput;
  GenerateCustomerTokenAsAdminOutput: GenerateCustomerTokenAsAdminOutput;
  GiftCardAccount: GiftCardAccount;
  GiftCardAccountInput: GiftCardAccountInput;
  GiftCardAmounts: GiftCardAmounts;
  GiftCardCartItem: GiftCardCartItem;
  GiftCardCreditMemoItem: GiftCardCreditMemoItem;
  GiftCardInvoiceItem: GiftCardInvoiceItem;
  GiftCardItem: GiftCardItem;
  GiftCardOptions: GiftCardOptions;
  GiftCardOrderItem: GiftCardOrderItem;
  GiftCardProduct: GiftCardProduct;
  GiftCardShipmentItem: GiftCardShipmentItem;
  GiftCardWishlistItem: GiftCardWishlistItem;
  GiftMessage: GiftMessage;
  GiftMessageInput: GiftMessageInput;
  GiftOptionsPrices: GiftOptionsPrices;
  GiftRegistry: GiftRegistry;
  GiftRegistryDynamicAttribute: GiftRegistryDynamicAttribute;
  GiftRegistryDynamicAttributeInput: GiftRegistryDynamicAttributeInput;
  GiftRegistryDynamicAttributeInterface: ResolversParentTypes['GiftRegistryDynamicAttribute'] | ResolversParentTypes['GiftRegistryRegistrantDynamicAttribute'];
  GiftRegistryDynamicAttributeMetadata: GiftRegistryDynamicAttributeMetadata;
  GiftRegistryDynamicAttributeMetadataInterface: ResolversParentTypes['GiftRegistryDynamicAttributeMetadata'];
  GiftRegistryItem: GiftRegistryItem;
  GiftRegistryItemInterface: ResolversParentTypes['GiftRegistryItem'];
  GiftRegistryItemUserErrorInterface: ResolversParentTypes['GiftRegistryItemUserErrors'] | ResolversParentTypes['MoveCartItemsToGiftRegistryOutput'];
  GiftRegistryItemUserErrors: GiftRegistryItemUserErrors;
  GiftRegistryItemsUserError: GiftRegistryItemsUserError;
  GiftRegistryOutput: GiftRegistryOutput;
  GiftRegistryOutputInterface: ResolversParentTypes['GiftRegistryOutput'] | ResolversParentTypes['MoveCartItemsToGiftRegistryOutput'];
  GiftRegistryRegistrant: GiftRegistryRegistrant;
  GiftRegistryRegistrantDynamicAttribute: GiftRegistryRegistrantDynamicAttribute;
  GiftRegistrySearchResult: GiftRegistrySearchResult;
  GiftRegistryShippingAddressInput: GiftRegistryShippingAddressInput;
  GiftRegistryType: GiftRegistryType;
  GiftWrapping: GiftWrapping;
  GiftWrappingImage: GiftWrappingImage;
  GroupedProduct: GroupedProduct;
  GroupedProductItem: GroupedProductItem;
  GroupedProductWishlistItem: GroupedProductWishlistItem;
  HostedProInput: HostedProInput;
  HostedProUrl: HostedProUrl;
  HostedProUrlInput: HostedProUrlInput;
  HttpQueryParameter: HttpQueryParameter;
  ID: Scalars['ID'];
  ImageSwatchData: ImageSwatchData;
  Int: Scalars['Int'];
  InternalError: InternalError;
  Invoice: Invoice;
  InvoiceItem: InvoiceItem;
  InvoiceItemInterface: ResolversParentTypes['BundleInvoiceItem'] | ResolversParentTypes['DownloadableInvoiceItem'] | ResolversParentTypes['GiftCardInvoiceItem'] | ResolversParentTypes['InvoiceItem'];
  InvoiceTotal: InvoiceTotal;
  IsEmailAvailableOutput: IsEmailAvailableOutput;
  ItemMap: ItemMap;
  ItemSelectedBundleOption: ItemSelectedBundleOption;
  ItemSelectedBundleOptionValue: ItemSelectedBundleOptionValue;
  KeyMessage: KeyMessage;
  KeyMessageResult: KeyMessageResult;
  KeyValue: KeyValue;
  LayerFilter: LayerFilter;
  LayerFilterItem: LayerFilterItem;
  LayerFilterItemInterface: ResolversParentTypes['LayerFilterItem'] | ResolversParentTypes['SwatchLayerFilterItem'];
  MediaGalleryEntry: MediaGalleryEntry;
  MediaGalleryInterface: ResolversParentTypes['ProductImage'] | ResolversParentTypes['ProductVideo'];
  Money: Money;
  MoveCartItemsToGiftRegistryOutput: MoveCartItemsToGiftRegistryOutput;
  MoveProductsBetweenWishlistsOutput: MoveProductsBetweenWishlistsOutput;
  Mutation: {};
  NoSuchEntityUidError: NoSuchEntityUidError;
  Order: Order;
  OrderAddress: OrderAddress;
  OrderItem: OrderItem;
  OrderItemInterface: ResolversParentTypes['BundleOrderItem'] | ResolversParentTypes['DownloadableOrderItem'] | ResolversParentTypes['GiftCardOrderItem'] | ResolversParentTypes['OrderItem'];
  OrderItemOption: OrderItemOption;
  OrderPaymentMethod: OrderPaymentMethod;
  OrderShipment: OrderShipment;
  OrderTotal: OrderTotal;
  PayflowExpressInput: PayflowExpressInput;
  PayflowLinkInput: PayflowLinkInput;
  PayflowLinkToken: PayflowLinkToken;
  PayflowLinkTokenInput: PayflowLinkTokenInput;
  PayflowProInput: PayflowProInput;
  PayflowProResponseInput: PayflowProResponseInput;
  PayflowProResponseOutput: PayflowProResponseOutput;
  PayflowProToken: PayflowProToken;
  PayflowProTokenInput: PayflowProTokenInput;
  PayflowProUrlInput: PayflowProUrlInput;
  PaymentMethodInput: PaymentMethodInput;
  PaymentToken: PaymentToken;
  PaypalExpressClientConfig: PaypalExpressClientConfig;
  PaypalExpressConfig: PaypalExpressConfig;
  PaypalExpressInContextConfig: PaypalExpressInContextConfig;
  PaypalExpressInput: PaypalExpressInput;
  PaypalExpressToken: PaypalExpressToken;
  PaypalExpressTokenInput: PaypalExpressTokenInput;
  PaypalExpressTokenOutput: PaypalExpressTokenOutput;
  PaypalExpressUrlList: PaypalExpressUrlList;
  PaypalExpressUrlsInput: PaypalExpressUrlsInput;
  PhysicalProductInterface: ResolversParentTypes['BundleProduct'] | ResolversParentTypes['ConfigurableProduct'] | ResolversParentTypes['GiftCardProduct'] | ResolversParentTypes['GroupedProduct'] | ResolversParentTypes['SimpleProduct'];
  PickupLocation: PickupLocation;
  PickupLocationFilterInput: PickupLocationFilterInput;
  PickupLocationSortInput: PickupLocationSortInput;
  PickupLocations: PickupLocations;
  PlaceOrderInput: PlaceOrderInput;
  PlaceOrderOutput: PlaceOrderOutput;
  Price: Price;
  PriceAdjustment: PriceAdjustment;
  PriceRange: PriceRange;
  ProductAttribute: ProductAttribute;
  ProductAttributeFilterInput: ProductAttributeFilterInput;
  ProductAttributeMetadata: ProductAttributeMetadata;
  ProductAttributeSortInput: ProductAttributeSortInput;
  ProductAvailability: ProductAvailability;
  ProductDiscount: ProductDiscount;
  ProductFilterInput: ProductFilterInput;
  ProductImage: ProductImage;
  ProductInfoInput: ProductInfoInput;
  ProductInterface: ResolversParentTypes['BundleProduct'] | ResolversParentTypes['ConfigurableProduct'] | ResolversParentTypes['DownloadableProduct'] | ResolversParentTypes['GiftCardProduct'] | ResolversParentTypes['GroupedProduct'] | ResolversParentTypes['SimpleProduct'] | ResolversParentTypes['VirtualProduct'];
  ProductLinks: ProductLinks;
  ProductLinksInterface: ResolversParentTypes['ProductLinks'];
  ProductMediaGalleryEntriesContent: ProductMediaGalleryEntriesContent;
  ProductMediaGalleryEntriesVideoContent: ProductMediaGalleryEntriesVideoContent;
  ProductPrice: ProductPrice;
  ProductPrices: ProductPrices;
  ProductReview: ProductReview;
  ProductReviewRating: ProductReviewRating;
  ProductReviewRatingInput: ProductReviewRatingInput;
  ProductReviewRatingMetadata: ProductReviewRatingMetadata;
  ProductReviewRatingValueMetadata: ProductReviewRatingValueMetadata;
  ProductReviewRatingsMetadata: ProductReviewRatingsMetadata;
  ProductReviews: ProductReviews;
  ProductSortInput: ProductSortInput;
  ProductTierPrices: ProductTierPrices;
  ProductVideo: ProductVideo;
  Products: Products;
  ProductsBySkusInput: ProductsBySkusInput;
  ProductsBySkusSortInput: ProductsBySkusSortInput;
  Query: {};
  ReCaptchaConfigurationV3: ReCaptchaConfigurationV3;
  RedirectUrls: RedirectUrls;
  Region: Region;
  ReleaseDate: ReleaseDate;
  RemoveCouponFromCartInput: RemoveCouponFromCartInput;
  RemoveCouponFromCartOutput: RemoveCouponFromCartOutput;
  RemoveGiftCardFromCartInput: RemoveGiftCardFromCartInput;
  RemoveGiftCardFromCartOutput: RemoveGiftCardFromCartOutput;
  RemoveGiftRegistryItemsOutput: RemoveGiftRegistryItemsOutput;
  RemoveGiftRegistryOutput: RemoveGiftRegistryOutput;
  RemoveGiftRegistryRegistrantsOutput: RemoveGiftRegistryRegistrantsOutput;
  RemoveItemFromCartInput: RemoveItemFromCartInput;
  RemoveItemFromCartOutput: RemoveItemFromCartOutput;
  RemoveProductsFromCompareListInput: RemoveProductsFromCompareListInput;
  RemoveProductsFromWishlistOutput: RemoveProductsFromWishlistOutput;
  RemoveReturnTrackingInput: RemoveReturnTrackingInput;
  RemoveReturnTrackingOutput: RemoveReturnTrackingOutput;
  RemoveRewardPointsFromCartOutput: RemoveRewardPointsFromCartOutput;
  RemoveStoreCreditFromCartInput: RemoveStoreCreditFromCartInput;
  RemoveStoreCreditFromCartOutput: RemoveStoreCreditFromCartOutput;
  ReorderItemsOutput: ReorderItemsOutput;
  RequestReturnInput: RequestReturnInput;
  RequestReturnItemInput: RequestReturnItemInput;
  RequestReturnOutput: RequestReturnOutput;
  Return: Return;
  ReturnComment: ReturnComment;
  ReturnCustomAttribute: ReturnCustomAttribute;
  ReturnCustomer: ReturnCustomer;
  ReturnItem: ReturnItem;
  ReturnShipping: ReturnShipping;
  ReturnShippingAddress: ReturnShippingAddress;
  ReturnShippingCarrier: ReturnShippingCarrier;
  ReturnShippingTracking: ReturnShippingTracking;
  ReturnShippingTrackingStatus: ReturnShippingTrackingStatus;
  Returns: Returns;
  RevokeCustomerTokenOutput: RevokeCustomerTokenOutput;
  RewardPoints: RewardPoints;
  RewardPointsAmount: RewardPointsAmount;
  RewardPointsBalanceHistoryItem: RewardPointsBalanceHistoryItem;
  RewardPointsExchangeRates: RewardPointsExchangeRates;
  RewardPointsRate: RewardPointsRate;
  RewardPointsSubscriptionStatus: RewardPointsSubscriptionStatus;
  RoutableInterface: ResolversParentTypes['BundleProduct'] | ResolversParentTypes['CategoryTree'] | ResolversParentTypes['CmsPage'] | ResolversParentTypes['ConfigurableProduct'] | ResolversParentTypes['DownloadableProduct'] | ResolversParentTypes['GiftCardProduct'] | ResolversParentTypes['GroupedProduct'] | ResolversParentTypes['SimpleProduct'] | ResolversParentTypes['VirtualProduct'];
  SalesCommentItem: SalesCommentItem;
  SalesItemInterface: SalesItemInterface;
  SearchResultPageInfo: SearchResultPageInfo;
  SearchSuggestion: SearchSuggestion;
  SelectableInputTypeInterface: ResolversParentTypes['UiAttributeTypeBoolean'] | ResolversParentTypes['UiAttributeTypeMultiSelect'] | ResolversParentTypes['UiAttributeTypeSelect'];
  SelectedAttributeOption: SelectedAttributeOption;
  SelectedBundleOption: SelectedBundleOption;
  SelectedBundleOptionValue: SelectedBundleOptionValue;
  SelectedConfigurableOption: SelectedConfigurableOption;
  SelectedCustomAttributeInput: SelectedCustomAttributeInput;
  SelectedCustomizableOption: SelectedCustomizableOption;
  SelectedCustomizableOptionValue: SelectedCustomizableOptionValue;
  SelectedPaymentMethod: SelectedPaymentMethod;
  SelectedShippingMethod: SelectedShippingMethod;
  SendEmailToFriendInput: SendEmailToFriendInput;
  SendEmailToFriendOutput: SendEmailToFriendOutput;
  SendEmailToFriendRecipient: SendEmailToFriendRecipient;
  SendEmailToFriendRecipientInput: SendEmailToFriendRecipientInput;
  SendEmailToFriendSender: SendEmailToFriendSender;
  SendEmailToFriendSenderInput: SendEmailToFriendSenderInput;
  SendFriendConfiguration: SendFriendConfiguration;
  SetBillingAddressOnCartInput: SetBillingAddressOnCartInput;
  SetBillingAddressOnCartOutput: SetBillingAddressOnCartOutput;
  SetGiftOptionsOnCartInput: SetGiftOptionsOnCartInput;
  SetGiftOptionsOnCartOutput: SetGiftOptionsOnCartOutput;
  SetGuestEmailOnCartInput: SetGuestEmailOnCartInput;
  SetGuestEmailOnCartOutput: SetGuestEmailOnCartOutput;
  SetPaymentMethodAndPlaceOrderInput: SetPaymentMethodAndPlaceOrderInput;
  SetPaymentMethodOnCartInput: SetPaymentMethodOnCartInput;
  SetPaymentMethodOnCartOutput: SetPaymentMethodOnCartOutput;
  SetShippingAddressesOnCartInput: SetShippingAddressesOnCartInput;
  SetShippingAddressesOnCartOutput: SetShippingAddressesOnCartOutput;
  SetShippingMethodsOnCartInput: SetShippingMethodsOnCartInput;
  SetShippingMethodsOnCartOutput: SetShippingMethodsOnCartOutput;
  ShareGiftRegistryInviteeInput: ShareGiftRegistryInviteeInput;
  ShareGiftRegistryOutput: ShareGiftRegistryOutput;
  ShareGiftRegistrySenderInput: ShareGiftRegistrySenderInput;
  ShipmentItem: ShipmentItem;
  ShipmentItemInterface: ResolversParentTypes['BundleShipmentItem'] | ResolversParentTypes['GiftCardShipmentItem'] | ResolversParentTypes['ShipmentItem'];
  ShipmentTracking: ShipmentTracking;
  ShippingAddressInput: ShippingAddressInput;
  ShippingCartAddress: ShippingCartAddress;
  ShippingDiscount: ShippingDiscount;
  ShippingHandling: ShippingHandling;
  ShippingMethodInput: ShippingMethodInput;
  SimpleCartItem: SimpleCartItem;
  SimpleProduct: SimpleProduct;
  SimpleProductCartItemInput: SimpleProductCartItemInput;
  SimpleWishlistItem: SimpleWishlistItem;
  SocialLink: SocialLink;
  SortField: SortField;
  SortFields: SortFields;
  StoreConfig: StoreConfig;
  StoreInformation: StoreInformation;
  StoreLabels: StoreLabels;
  StoreLocation: StoreLocation;
  StoreLocations: StoreLocations;
  StorefrontProperties: StorefrontProperties;
  String: Scalars['String'];
  SubscribeEmailToNewsletterOutput: SubscribeEmailToNewsletterOutput;
  SwatchData: SwatchData;
  SwatchDataInterface: ResolversParentTypes['ColorSwatchData'] | ResolversParentTypes['ImageSwatchData'] | ResolversParentTypes['TextSwatchData'];
  SwatchLayerFilterItem: SwatchLayerFilterItem;
  SwatchLayerFilterItemInterface: ResolversParentTypes['SwatchLayerFilterItem'];
  TaxItem: TaxItem;
  TextSwatchData: TextSwatchData;
  TierPrice: TierPrice;
  UiAttributeTypeAny: UiAttributeTypeAny;
  UiAttributeTypeBoolean: UiAttributeTypeBoolean;
  UiAttributeTypeFixedProductTax: UiAttributeTypeFixedProductTax;
  UiAttributeTypeMultiSelect: UiAttributeTypeMultiSelect;
  UiAttributeTypePageBuilder: UiAttributeTypePageBuilder;
  UiAttributeTypeSelect: UiAttributeTypeSelect;
  UiAttributeTypeTextEditor: UiAttributeTypeTextEditor;
  UiAttributeTypeTextarea: UiAttributeTypeTextarea;
  UiInputTypeInterface: ResolversParentTypes['UiAttributeTypeAny'] | ResolversParentTypes['UiAttributeTypeBoolean'] | ResolversParentTypes['UiAttributeTypeFixedProductTax'] | ResolversParentTypes['UiAttributeTypeMultiSelect'] | ResolversParentTypes['UiAttributeTypePageBuilder'] | ResolversParentTypes['UiAttributeTypeSelect'] | ResolversParentTypes['UiAttributeTypeTextEditor'] | ResolversParentTypes['UiAttributeTypeTextarea'];
  UpdateCartItemsInput: UpdateCartItemsInput;
  UpdateCartItemsOutput: UpdateCartItemsOutput;
  UpdateGiftRegistryInput: UpdateGiftRegistryInput;
  UpdateGiftRegistryItemInput: UpdateGiftRegistryItemInput;
  UpdateGiftRegistryItemsOutput: UpdateGiftRegistryItemsOutput;
  UpdateGiftRegistryOutput: UpdateGiftRegistryOutput;
  UpdateGiftRegistryRegistrantInput: UpdateGiftRegistryRegistrantInput;
  UpdateGiftRegistryRegistrantsOutput: UpdateGiftRegistryRegistrantsOutput;
  UpdateProductsInWishlistOutput: UpdateProductsInWishlistOutput;
  UpdateWishlistOutput: UpdateWishlistOutput;
  UrlRewrite: UrlRewrite;
  VaultTokenInput: VaultTokenInput;
  VirtualCartItem: VirtualCartItem;
  VirtualProduct: VirtualProduct;
  VirtualProductCartItemInput: VirtualProductCartItemInput;
  VirtualWishlistItem: VirtualWishlistItem;
  Website: Website;
  WishListUserInputError: WishListUserInputError;
  Wishlist: Wishlist;
  WishlistCartUserInputError: WishlistCartUserInputError;
  WishlistItem: WishlistItem;
  WishlistItemCopyInput: WishlistItemCopyInput;
  WishlistItemInput: WishlistItemInput;
  WishlistItemInterface: ResolversParentTypes['BundleWishlistItem'] | ResolversParentTypes['ConfigurableWishlistItem'] | ResolversParentTypes['DownloadableWishlistItem'] | ResolversParentTypes['GiftCardWishlistItem'] | ResolversParentTypes['GroupedProductWishlistItem'] | ResolversParentTypes['SimpleWishlistItem'] | ResolversParentTypes['VirtualWishlistItem'];
  WishlistItemMoveInput: WishlistItemMoveInput;
  WishlistItemUpdateInput: WishlistItemUpdateInput;
  WishlistItems: WishlistItems;
  WishlistOutput: WishlistOutput;
  afterpayConfigOutput: AfterpayConfigOutput;
  createAfterpayCheckoutInput: CreateAfterpayCheckoutInput;
  createAfterpayCheckoutOutput: CreateAfterpayCheckoutOutput;
  createEmptyCartInput: CreateEmptyCartInput;
  getCustomerTokenBySecretCodeOutput: GetCustomerTokenBySecretCodeOutput;
  wishlistInput: WishlistInput;
};

export type AddBundleProductsToCartOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AddBundleProductsToCartOutput'] = ResolversParentTypes['AddBundleProductsToCartOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddConfigurableProductsToCartOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AddConfigurableProductsToCartOutput'] = ResolversParentTypes['AddConfigurableProductsToCartOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddDownloadableProductsToCartOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AddDownloadableProductsToCartOutput'] = ResolversParentTypes['AddDownloadableProductsToCartOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddGiftRegistryRegistrantsOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AddGiftRegistryRegistrantsOutput'] = ResolversParentTypes['AddGiftRegistryRegistrantsOutput']> = {
  gift_registry?: Resolver<Maybe<ResolversTypes['GiftRegistry']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddProductsToCartOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AddProductsToCartOutput'] = ResolversParentTypes['AddProductsToCartOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  user_errors?: Resolver<Array<Maybe<ResolversTypes['CartUserInputError']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddProductsToWishlistOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AddProductsToWishlistOutput'] = ResolversParentTypes['AddProductsToWishlistOutput']> = {
  user_errors?: Resolver<Array<Maybe<ResolversTypes['WishListUserInputError']>>, ParentType, ContextType>;
  wishlist?: Resolver<ResolversTypes['Wishlist'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddReturnCommentOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AddReturnCommentOutput'] = ResolversParentTypes['AddReturnCommentOutput']> = {
  return?: Resolver<Maybe<ResolversTypes['Return']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddReturnTrackingOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AddReturnTrackingOutput'] = ResolversParentTypes['AddReturnTrackingOutput']> = {
  return?: Resolver<Maybe<ResolversTypes['Return']>, ParentType, ContextType>;
  return_shipping_tracking?: Resolver<Maybe<ResolversTypes['ReturnShippingTracking']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddSimpleProductsToCartOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AddSimpleProductsToCartOutput'] = ResolversParentTypes['AddSimpleProductsToCartOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddVirtualProductsToCartOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AddVirtualProductsToCartOutput'] = ResolversParentTypes['AddVirtualProductsToCartOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddWishlistItemsToCartOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AddWishlistItemsToCartOutput'] = ResolversParentTypes['AddWishlistItemsToCartOutput']> = {
  add_wishlist_items_to_cart_user_errors?: Resolver<Array<Maybe<ResolversTypes['WishlistCartUserInputError']>>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  wishlist?: Resolver<ResolversTypes['Wishlist'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdyenPaymentMethodIconResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AdyenPaymentMethodIcon'] = ResolversParentTypes['AdyenPaymentMethodIcon']> = {
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdyenPaymentMethodsResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AdyenPaymentMethods'] = ResolversParentTypes['AdyenPaymentMethods']> = {
  paymentMethodsExtraDetails?: Resolver<Maybe<Array<Maybe<ResolversTypes['AdyenPaymentMethodsExtraDetails']>>>, ParentType, ContextType>;
  paymentMethodsResponse?: Resolver<Maybe<ResolversTypes['AdyenPaymentMethodsResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdyenPaymentMethodsArrayResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AdyenPaymentMethodsArray'] = ResolversParentTypes['AdyenPaymentMethodsArray']> = {
  brand?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  brands?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  configuration?: Resolver<Maybe<ResolversTypes['AdyenPaymentMethodsConfiguration']>, ParentType, ContextType>;
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['AdyenPaymentMethodsDetails']>>>, ParentType, ContextType>;
  issuers?: Resolver<Maybe<Array<Maybe<ResolversTypes['AdyenPaymentMethodsIssuers']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdyenPaymentMethodsConfigurationResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AdyenPaymentMethodsConfiguration'] = ResolversParentTypes['AdyenPaymentMethodsConfiguration']> = {
  gatewayMerchantId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  merchantId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  merchantName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdyenPaymentMethodsDetailsResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AdyenPaymentMethodsDetails'] = ResolversParentTypes['AdyenPaymentMethodsDetails']> = {
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['AdyenPaymentMethodsDetailsItems']>>>, ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  optional?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdyenPaymentMethodsDetailsItemsResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AdyenPaymentMethodsDetailsItems'] = ResolversParentTypes['AdyenPaymentMethodsDetailsItems']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdyenPaymentMethodsExtraDetailsResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AdyenPaymentMethodsExtraDetails'] = ResolversParentTypes['AdyenPaymentMethodsExtraDetails']> = {
  configuration?: Resolver<Maybe<ResolversTypes['AdyenPaymentMethodsExtraDetailsConfiguration']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['AdyenPaymentMethodIcon']>, ParentType, ContextType>;
  isOpenInvoice?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdyenPaymentMethodsExtraDetailsConfigurationResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AdyenPaymentMethodsExtraDetailsConfiguration'] = ResolversParentTypes['AdyenPaymentMethodsExtraDetailsConfiguration']> = {
  amount?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdyenPaymentMethodsIssuersResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AdyenPaymentMethodsIssuers'] = ResolversParentTypes['AdyenPaymentMethodsIssuers']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdyenPaymentMethodsResponseResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AdyenPaymentMethodsResponse'] = ResolversParentTypes['AdyenPaymentMethodsResponse']> = {
  paymentMethods?: Resolver<Maybe<Array<Maybe<ResolversTypes['AdyenPaymentMethodsArray']>>>, ParentType, ContextType>;
  storedPaymentMethods?: Resolver<Maybe<Array<Maybe<ResolversTypes['AdyenStoredPaymentMethodsArray']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdyenPaymentStatusResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AdyenPaymentStatus'] = ResolversParentTypes['AdyenPaymentStatus']> = {
  action?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  additionalData?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isFinal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  resultCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdyenStoredPaymentMethodsArrayResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AdyenStoredPaymentMethodsArray'] = ResolversParentTypes['AdyenStoredPaymentMethodsArray']> = {
  brand?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expiryMonth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expiryYear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  holderName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  iban?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastFour?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  networkTxReference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ownerName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shopperEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  supportedShopperInteractions?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AggregationResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['Aggregation'] = ResolversParentTypes['Aggregation']> = {
  attribute_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  filterType?: Resolver<Maybe<ResolversTypes['FilterTypeEnum']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['AggregationOption']>>>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AggregationOptionResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AggregationOption'] = ResolversParentTypes['AggregationOption']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  swatch_data?: Resolver<Maybe<ResolversTypes['SwatchData']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AggregationOptionInterfaceResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AggregationOptionInterface'] = ResolversParentTypes['AggregationOptionInterface']> = {
  __resolveType: TypeResolveFn<'AggregationOption', ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  swatch_data?: Resolver<Maybe<ResolversTypes['SwatchData']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type AppliedCouponResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AppliedCoupon'] = ResolversParentTypes['AppliedCoupon']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AppliedGiftCardResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AppliedGiftCard'] = ResolversParentTypes['AppliedGiftCard']> = {
  applied_balance?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  current_balance?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  expiration_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AppliedStoreCreditResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AppliedStoreCredit'] = ResolversParentTypes['AppliedStoreCredit']> = {
  applied_balance?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  current_balance?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplyCouponToCartOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ApplyCouponToCartOutput'] = ResolversParentTypes['ApplyCouponToCartOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplyGiftCardToCartOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ApplyGiftCardToCartOutput'] = ResolversParentTypes['ApplyGiftCardToCartOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplyRewardPointsToCartOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ApplyRewardPointsToCartOutput'] = ResolversParentTypes['ApplyRewardPointsToCartOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplyStoreCreditToCartOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ApplyStoreCreditToCartOutput'] = ResolversParentTypes['ApplyStoreCreditToCartOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssignCompareListToCustomerOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AssignCompareListToCustomerOutput'] = ResolversParentTypes['AssignCompareListToCustomerOutput']> = {
  compare_list?: Resolver<Maybe<ResolversTypes['CompareList']>, ParentType, ContextType>;
  result?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AttributeResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['Attribute'] = ResolversParentTypes['Attribute']> = {
  attribute_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribute_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['AttributeOption']>>>, ParentType, ContextType>;
  attribute_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entity_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  input_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storefront_properties?: Resolver<Maybe<ResolversTypes['StorefrontProperties']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AttributeMetadataInterfaceResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AttributeMetadataInterface'] = ResolversParentTypes['AttributeMetadataInterface']> = {
  __resolveType: TypeResolveFn<'ProductAttributeMetadata', ParentType, ContextType>;
  attribute_labels?: Resolver<Maybe<Array<Maybe<ResolversTypes['StoreLabels']>>>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  data_type?: Resolver<Maybe<ResolversTypes['ObjectDataTypeEnum']>, ParentType, ContextType>;
  entity_type?: Resolver<Maybe<ResolversTypes['AttributeEntityTypeEnum']>, ParentType, ContextType>;
  is_system?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ui_input?: Resolver<Maybe<ResolversTypes['UiInputTypeInterface']>, ParentType, ContextType>;
  uid?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
};

export type AttributeOptionResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AttributeOption'] = ResolversParentTypes['AttributeOption']> = {
  is_default?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AttributeOptionInterfaceResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AttributeOptionInterface'] = ResolversParentTypes['AttributeOptionInterface']> = {
  __resolveType: TypeResolveFn<'AttributeOption', ParentType, ContextType>;
  is_default?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type AttributeOptionsResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AttributeOptions'] = ResolversParentTypes['AttributeOptions']> = {
  attribute_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['AttributeOptionInterface']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AttributeOptionsInterfaceResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AttributeOptionsInterface'] = ResolversParentTypes['AttributeOptionsInterface']> = {
  __resolveType: TypeResolveFn<'AttributeOptions' | 'UiAttributeTypeBoolean' | 'UiAttributeTypeMultiSelect' | 'UiAttributeTypeSelect', ParentType, ContextType>;
  attribute_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['AttributeOptionInterface']>>>, ParentType, ContextType>;
};

export type AttributesMetadataResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AttributesMetadata'] = ResolversParentTypes['AttributesMetadata']> = {
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['AttributeMetadataInterface']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AvailablePaymentMethodResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AvailablePaymentMethod'] = ResolversParentTypes['AvailablePaymentMethod']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  is_deferred?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AvailableShippingMethodResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['AvailableShippingMethod'] = ResolversParentTypes['AvailableShippingMethod']> = {
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  available?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  base_amount?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  carrier_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  carrier_title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  error_message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  method_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  method_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price_excl_tax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  price_incl_tax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BillingCartAddressResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['BillingCartAddress'] = ResolversParentTypes['BillingCartAddress']> = {
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<ResolversTypes['CartAddressCountry'], ParentType, ContextType>;
  customer_notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  postcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['CartAddressRegion']>, ParentType, ContextType>;
  street?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  telephone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vat_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BreadcrumbResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['Breadcrumb'] = ResolversParentTypes['Breadcrumb']> = {
  category_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  category_level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  category_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category_uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  category_url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category_url_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BundleCartItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['BundleCartItem'] = ResolversParentTypes['BundleCartItem']> = {
  available_gift_wrapping?: Resolver<Array<Maybe<ResolversTypes['GiftWrapping']>>, ParentType, ContextType>;
  bundle_options?: Resolver<Array<Maybe<ResolversTypes['SelectedBundleOption']>>, ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['CartItemError']>>>, ParentType, ContextType>;
  gift_message?: Resolver<Maybe<ResolversTypes['GiftMessage']>, ParentType, ContextType>;
  gift_wrapping?: Resolver<Maybe<ResolversTypes['GiftWrapping']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prices?: Resolver<Maybe<ResolversTypes['CartItemPrices']>, ParentType, ContextType>;
  product?: Resolver<ResolversTypes['ProductInterface'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BundleCreditMemoItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['BundleCreditMemoItem'] = ResolversParentTypes['BundleCreditMemoItem']> = {
  bundle_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemSelectedBundleOption']>>>, ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity_refunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BundleInvoiceItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['BundleInvoiceItem'] = ResolversParentTypes['BundleInvoiceItem']> = {
  bundle_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemSelectedBundleOption']>>>, ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity_invoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BundleItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['BundleItem'] = ResolversParentTypes['BundleItem']> = {
  option_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['BundleItemOption']>>>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price_range?: Resolver<ResolversTypes['PriceRange'], ParentType, ContextType>;
  required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BundleItemOptionResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['BundleItemOption'] = ResolversParentTypes['BundleItemOption']> = {
  can_change_quantity?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  is_default?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price_type?: Resolver<Maybe<ResolversTypes['PriceTypeEnum']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  qty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BundleOrderItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['BundleOrderItem'] = ResolversParentTypes['BundleOrderItem']> = {
  bundle_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemSelectedBundleOption']>>>, ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  eligible_for_return?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  entered_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderItemOption']>>>, ParentType, ContextType>;
  gift_message?: Resolver<Maybe<ResolversTypes['GiftMessage']>, ParentType, ContextType>;
  gift_wrapping?: Resolver<Maybe<ResolversTypes['GiftWrapping']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  line_total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sale_price_incl_tax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity_canceled?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_invoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_ordered?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_refunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_returned?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_shipped?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  selected_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderItemOption']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BundleProductResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['BundleProduct'] = ResolversParentTypes['BundleProduct']> = {
  activity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribute_set_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  availability?: Resolver<Maybe<ResolversTypes['ProductAvailability']>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryInterface']>>>, ParentType, ContextType>;
  category_gear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  climate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_of_manufacture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  crosssell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  custom_attributes?: Resolver<Array<Maybe<ResolversTypes['CustomAttribute']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  dynamic_price?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dynamic_sku?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dynamic_weight?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  eco_collection?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  erin_recommends?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  features_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  format?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_message_available?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  is_returnable?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['BundleItem']>>>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  marketplacer_brand?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  marketplacer_seller?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  material?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryInterface']>>>, ParentType, ContextType>;
  media_gallery_entries?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryEntry']>>>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_keyword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  new_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  only_x_left_in_stock?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomizableOptionInterface']>>>, ParentType, ContextType>;
  options_container?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  performance_fabric?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['ProductPrices']>, ParentType, ContextType>;
  price_range?: Resolver<ResolversTypes['PriceRange'], ParentType, ContextType>;
  price_tiers?: Resolver<Maybe<Array<Maybe<ResolversTypes['TierPrice']>>>, ParentType, ContextType>;
  price_view?: Resolver<Maybe<ResolversTypes['PriceViewEnum']>, ParentType, ContextType>;
  product_links?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductLinksInterface']>>>, ParentType, ContextType>;
  purpose?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rating_summary?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  redirect_code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  related_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  relative_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  review_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reviews?: Resolver<ResolversTypes['ProductReviews'], ParentType, ContextType, RequireFields<BundleProductReviewsArgs, 'currentPage' | 'pageSize'>>;
  sale?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ship_bundle_items?: Resolver<Maybe<ResolversTypes['ShipBundleItemsEnum']>, ParentType, ContextType>;
  short_description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sleeve?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  small_image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  special_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  special_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  special_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  staged?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  stock_status?: Resolver<Maybe<ResolversTypes['ProductStockStatus']>, ParentType, ContextType>;
  strap_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_bottom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_general?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  swatch_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  tier_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tier_prices?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductTierPrices']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  type_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upsell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_rewrites?: Resolver<Maybe<Array<Maybe<ResolversTypes['UrlRewrite']>>>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  websites?: Resolver<Maybe<Array<Maybe<ResolversTypes['Website']>>>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BundleShipmentItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['BundleShipmentItem'] = ResolversParentTypes['BundleShipmentItem']> = {
  bundle_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemSelectedBundleOption']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity_shipped?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BundleWishlistItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['BundleWishlistItem'] = ResolversParentTypes['BundleWishlistItem']> = {
  added_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bundle_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['SelectedBundleOption']>>>, ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['Cart'] = ResolversParentTypes['Cart']> = {
  applied_coupon?: Resolver<Maybe<ResolversTypes['AppliedCoupon']>, ParentType, ContextType>;
  applied_coupons?: Resolver<Maybe<Array<Maybe<ResolversTypes['AppliedCoupon']>>>, ParentType, ContextType>;
  applied_gift_cards?: Resolver<Maybe<Array<Maybe<ResolversTypes['AppliedGiftCard']>>>, ParentType, ContextType>;
  applied_reward_points?: Resolver<Maybe<ResolversTypes['RewardPointsAmount']>, ParentType, ContextType>;
  applied_store_credit?: Resolver<Maybe<ResolversTypes['AppliedStoreCredit']>, ParentType, ContextType>;
  available_gift_wrappings?: Resolver<Array<Maybe<ResolversTypes['GiftWrapping']>>, ParentType, ContextType>;
  available_payment_methods?: Resolver<Maybe<Array<Maybe<ResolversTypes['AvailablePaymentMethod']>>>, ParentType, ContextType>;
  billing_address?: Resolver<Maybe<ResolversTypes['BillingCartAddress']>, ParentType, ContextType>;
  cart_reward_points?: Resolver<Maybe<ResolversTypes['RewardPointsAmount']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error_type?: Resolver<Maybe<ResolversTypes['CartErrorType']>, ParentType, ContextType>;
  free_shipping_details?: Resolver<Maybe<ResolversTypes['FreeShippingDetails']>, ParentType, ContextType>;
  gift_message?: Resolver<Maybe<ResolversTypes['GiftMessage']>, ParentType, ContextType>;
  gift_receipt_included?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  gift_wrapping?: Resolver<Maybe<ResolversTypes['GiftWrapping']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_virtual?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['CartItemInterface']>>>, ParentType, ContextType>;
  prices?: Resolver<Maybe<ResolversTypes['CartPrices']>, ParentType, ContextType>;
  printed_card_included?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  selected_payment_method?: Resolver<Maybe<ResolversTypes['SelectedPaymentMethod']>, ParentType, ContextType>;
  shipping_addresses?: Resolver<Array<Maybe<ResolversTypes['ShippingCartAddress']>>, ParentType, ContextType>;
  total_quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartAddressCountryResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CartAddressCountry'] = ResolversParentTypes['CartAddressCountry']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartAddressInterfaceResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CartAddressInterface'] = ResolversParentTypes['CartAddressInterface']> = {
  __resolveType: TypeResolveFn<'BillingCartAddress' | 'ShippingCartAddress', ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<ResolversTypes['CartAddressCountry'], ParentType, ContextType>;
  firstname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  postcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['CartAddressRegion']>, ParentType, ContextType>;
  street?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  telephone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vat_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type CartAddressRegionResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CartAddressRegion'] = ResolversParentTypes['CartAddressRegion']> = {
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartDiscountResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CartDiscount'] = ResolversParentTypes['CartDiscount']> = {
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  label?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartItemErrorResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CartItemError'] = ResolversParentTypes['CartItemError']> = {
  code?: Resolver<ResolversTypes['CartItemErrorType'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartItemInterfaceResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CartItemInterface'] = ResolversParentTypes['CartItemInterface']> = {
  __resolveType: TypeResolveFn<'BundleCartItem' | 'ConfigurableCartItem' | 'DownloadableCartItem' | 'GiftCardCartItem' | 'SimpleCartItem' | 'VirtualCartItem', ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['CartItemError']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prices?: Resolver<Maybe<ResolversTypes['CartItemPrices']>, ParentType, ContextType>;
  product?: Resolver<ResolversTypes['ProductInterface'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type CartItemPricesResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CartItemPrices'] = ResolversParentTypes['CartItemPrices']> = {
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  fixed_product_taxes?: Resolver<Maybe<Array<Maybe<ResolversTypes['FixedProductTax']>>>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  price_including_tax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  row_total?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  row_total_including_tax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  total_item_discount?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartItemQuantityResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CartItemQuantity'] = ResolversParentTypes['CartItemQuantity']> = {
  cart_item_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartItemSelectedOptionValuePriceResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CartItemSelectedOptionValuePrice'] = ResolversParentTypes['CartItemSelectedOptionValuePrice']> = {
  type?: Resolver<ResolversTypes['PriceTypeEnum'], ParentType, ContextType>;
  units?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartPricesResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CartPrices'] = ResolversParentTypes['CartPrices']> = {
  applied_discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  applied_taxes?: Resolver<Maybe<Array<Maybe<ResolversTypes['CartTaxItem']>>>, ParentType, ContextType>;
  discount?: Resolver<Maybe<ResolversTypes['CartDiscount']>, ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  gift_options?: Resolver<Maybe<ResolversTypes['GiftOptionsPrices']>, ParentType, ContextType>;
  grand_total?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  subtotal_excluding_tax?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  subtotal_including_tax?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  subtotal_with_discount_excluding_tax?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  subtotal_with_discount_including_tax?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartTaxItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CartTaxItem'] = ResolversParentTypes['CartTaxItem']> = {
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartUserInputErrorResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CartUserInputError'] = ResolversParentTypes['CartUserInputError']> = {
  code?: Resolver<ResolversTypes['CartUserInputErrorType'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryInterfaceResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CategoryInterface'] = ResolversParentTypes['CategoryInterface']> = {
  __resolveType: TypeResolveFn<'CategoryTree', ParentType, ContextType>;
  automatic_sorting?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  available_sort_by?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  breadcrumbs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Breadcrumb']>>>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  children_count?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cms_block?: Resolver<Maybe<ResolversTypes['CmsBlock']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  custom_layout_update_file?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_sort_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  display_mode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  filter_price_range?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  include_in_menu?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  is_anchor?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  landing_page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_keywords?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path_in_store?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  products?: Resolver<Maybe<ResolversTypes['CategoryProducts']>, ParentType, ContextType, RequireFields<CategoryInterfaceProductsArgs, 'currentPage' | 'pageSize'>>;
  staged?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type CategoryProductsResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CategoryProducts'] = ResolversParentTypes['CategoryProducts']> = {
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  page_info?: Resolver<Maybe<ResolversTypes['SearchResultPageInfo']>, ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResultResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CategoryResult'] = ResolversParentTypes['CategoryResult']> = {
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryTree']>>>, ParentType, ContextType>;
  page_info?: Resolver<Maybe<ResolversTypes['SearchResultPageInfo']>, ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryTreeResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CategoryTree'] = ResolversParentTypes['CategoryTree']> = {
  automatic_sorting?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  available_sort_by?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  breadcrumbs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Breadcrumb']>>>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  children?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryTree']>>>, ParentType, ContextType>;
  children_count?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cms_block?: Resolver<Maybe<ResolversTypes['CmsBlock']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  custom_layout_update_file?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_sort_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  display_mode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  filter_price_range?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  include_in_menu?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  is_anchor?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  landing_page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_keywords?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path_in_store?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  products?: Resolver<Maybe<ResolversTypes['CategoryProducts']>, ParentType, ContextType, RequireFields<CategoryTreeProductsArgs, 'currentPage' | 'pageSize'>>;
  redirect_code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relative_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  staged?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutAgreementResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CheckoutAgreement'] = ResolversParentTypes['CheckoutAgreement']> = {
  agreement_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  checkbox_text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content_height?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  is_html?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  mode?: Resolver<ResolversTypes['CheckoutAgreementMode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutUserInputErrorResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CheckoutUserInputError'] = ResolversParentTypes['CheckoutUserInputError']> = {
  code?: Resolver<ResolversTypes['CheckoutUserInputErrorCodes'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClearCustomerCartOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ClearCustomerCartOutput'] = ResolversParentTypes['ClearCustomerCartOutput']> = {
  cart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CmsBlockResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CmsBlock'] = ResolversParentTypes['CmsBlock']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CmsBlocksResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CmsBlocks'] = ResolversParentTypes['CmsBlocks']> = {
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['CmsBlock']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CmsPageResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CmsPage'] = ResolversParentTypes['CmsPage']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content_heading?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_keywords?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  page_layout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  redirect_code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relative_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ColorSwatchDataResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ColorSwatchData'] = ResolversParentTypes['ColorSwatchData']> = {
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComparableAttributeResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ComparableAttribute'] = ResolversParentTypes['ComparableAttribute']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComparableItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ComparableItem'] = ResolversParentTypes['ComparableItem']> = {
  attributes?: Resolver<Array<Maybe<ResolversTypes['ProductAttribute']>>, ParentType, ContextType>;
  product?: Resolver<ResolversTypes['ProductInterface'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompareListResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CompareList'] = ResolversParentTypes['CompareList']> = {
  attributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ComparableAttribute']>>>, ParentType, ContextType>;
  item_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['ComparableItem']>>>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComplexTextValueResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ComplexTextValue'] = ResolversParentTypes['ComplexTextValue']> = {
  html?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigurableAttributeOptionResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ConfigurableAttributeOption'] = ResolversParentTypes['ConfigurableAttributeOption']> = {
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value_index?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigurableCartItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ConfigurableCartItem'] = ResolversParentTypes['ConfigurableCartItem']> = {
  available_gift_wrapping?: Resolver<Array<Maybe<ResolversTypes['GiftWrapping']>>, ParentType, ContextType>;
  configurable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedConfigurableOption']>>, ParentType, ContextType>;
  configured_variant?: Resolver<ResolversTypes['ProductInterface'], ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['CartItemError']>>>, ParentType, ContextType>;
  gift_message?: Resolver<Maybe<ResolversTypes['GiftMessage']>, ParentType, ContextType>;
  gift_wrapping?: Resolver<Maybe<ResolversTypes['GiftWrapping']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prices?: Resolver<Maybe<ResolversTypes['CartItemPrices']>, ParentType, ContextType>;
  product?: Resolver<ResolversTypes['ProductInterface'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigurableOptionAvailableForSelectionResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ConfigurableOptionAvailableForSelection'] = ResolversParentTypes['ConfigurableOptionAvailableForSelection']> = {
  attribute_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  option_value_uids?: Resolver<Array<Maybe<ResolversTypes['ID']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigurableProductResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ConfigurableProduct'] = ResolversParentTypes['ConfigurableProduct']> = {
  activity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribute_set_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  availability?: Resolver<Maybe<ResolversTypes['ProductAvailability']>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryInterface']>>>, ParentType, ContextType>;
  category_gear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  climate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  configurable_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConfigurableProductOptions']>>>, ParentType, ContextType>;
  configurable_product_options_selection?: Resolver<Maybe<ResolversTypes['ConfigurableProductOptionsSelection']>, ParentType, ContextType, Partial<ConfigurableProductConfigurable_Product_Options_SelectionArgs>>;
  country_of_manufacture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  crosssell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  custom_attributes?: Resolver<Array<Maybe<ResolversTypes['CustomAttribute']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  eco_collection?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  erin_recommends?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  features_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  format?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_message_available?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  is_returnable?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  marketplacer_brand?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  marketplacer_seller?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  material?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryInterface']>>>, ParentType, ContextType>;
  media_gallery_entries?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryEntry']>>>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_keyword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  new_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  only_x_left_in_stock?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomizableOptionInterface']>>>, ParentType, ContextType>;
  options_container?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  performance_fabric?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['ProductPrices']>, ParentType, ContextType>;
  price_range?: Resolver<ResolversTypes['PriceRange'], ParentType, ContextType>;
  price_tiers?: Resolver<Maybe<Array<Maybe<ResolversTypes['TierPrice']>>>, ParentType, ContextType>;
  product_links?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductLinksInterface']>>>, ParentType, ContextType>;
  purpose?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rating_summary?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  redirect_code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  related_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  relative_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  review_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reviews?: Resolver<ResolversTypes['ProductReviews'], ParentType, ContextType, RequireFields<ConfigurableProductReviewsArgs, 'currentPage' | 'pageSize'>>;
  sale?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  short_description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sleeve?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  small_image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  special_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  special_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  special_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  staged?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  stock_status?: Resolver<Maybe<ResolversTypes['ProductStockStatus']>, ParentType, ContextType>;
  strap_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_bottom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_general?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  swatch_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  tier_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tier_prices?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductTierPrices']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  type_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upsell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_rewrites?: Resolver<Maybe<Array<Maybe<ResolversTypes['UrlRewrite']>>>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  variants?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConfigurableVariant']>>>, ParentType, ContextType>;
  websites?: Resolver<Maybe<Array<Maybe<ResolversTypes['Website']>>>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigurableProductOptionResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ConfigurableProductOption'] = ResolversParentTypes['ConfigurableProductOption']> = {
  attribute_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConfigurableProductOptionValue']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigurableProductOptionValueResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ConfigurableProductOptionValue'] = ResolversParentTypes['ConfigurableProductOptionValue']> = {
  is_available?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  is_use_default?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  swatch?: Resolver<Maybe<ResolversTypes['SwatchDataInterface']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigurableProductOptionsResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ConfigurableProductOptions'] = ResolversParentTypes['ConfigurableProductOptions']> = {
  attribute_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribute_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribute_id_v2?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  attribute_uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  use_default?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConfigurableProductOptionsValues']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigurableProductOptionsSelectionResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ConfigurableProductOptionsSelection'] = ResolversParentTypes['ConfigurableProductOptionsSelection']> = {
  configurable_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConfigurableProductOption']>>>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryInterface']>>>, ParentType, ContextType>;
  options_available_for_selection?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConfigurableOptionAvailableForSelection']>>>, ParentType, ContextType>;
  variant?: Resolver<Maybe<ResolversTypes['SimpleProduct']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigurableProductOptionsValuesResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ConfigurableProductOptionsValues'] = ResolversParentTypes['ConfigurableProductOptionsValues']> = {
  default_label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  store_label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  swatch_data?: Resolver<Maybe<ResolversTypes['SwatchDataInterface']>, ParentType, ContextType>;
  uid?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  use_default_value?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  value_index?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigurableVariantResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ConfigurableVariant'] = ResolversParentTypes['ConfigurableVariant']> = {
  attributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConfigurableAttributeOption']>>>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['SimpleProduct']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigurableWishlistItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ConfigurableWishlistItem'] = ResolversParentTypes['ConfigurableWishlistItem']> = {
  added_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  child_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  configurable_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['SelectedConfigurableOption']>>>, ParentType, ContextType>;
  configured_variant?: Resolver<Maybe<ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContactUsOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ContactUsOutput'] = ResolversParentTypes['ContactUsOutput']> = {
  status?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CopyProductsBetweenWishlistsOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CopyProductsBetweenWishlistsOutput'] = ResolversParentTypes['CopyProductsBetweenWishlistsOutput']> = {
  destination_wishlist?: Resolver<ResolversTypes['Wishlist'], ParentType, ContextType>;
  source_wishlist?: Resolver<ResolversTypes['Wishlist'], ParentType, ContextType>;
  user_errors?: Resolver<Array<Maybe<ResolversTypes['WishListUserInputError']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CountryResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['Country'] = ResolversParentTypes['Country']> = {
  available_regions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Region']>>>, ParentType, ContextType>;
  full_name_english?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  full_name_locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  three_letter_abbreviation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  two_letter_abbreviation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCartRedirectUrlsResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CreateCartRedirectUrls'] = ResolversParentTypes['CreateCartRedirectUrls']> = {
  data?: Resolver<Maybe<ResolversTypes['RedirectUrls']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateGiftRegistryOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CreateGiftRegistryOutput'] = ResolversParentTypes['CreateGiftRegistryOutput']> = {
  gift_registry?: Resolver<Maybe<ResolversTypes['GiftRegistry']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatePayflowProTokenOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CreatePayflowProTokenOutput'] = ResolversParentTypes['CreatePayflowProTokenOutput']> = {
  response_message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  result?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  result_code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  secure_token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  secure_token_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateProductReviewOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CreateProductReviewOutput'] = ResolversParentTypes['CreateProductReviewOutput']> = {
  review?: Resolver<ResolversTypes['ProductReview'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateWishlistOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CreateWishlistOutput'] = ResolversParentTypes['CreateWishlistOutput']> = {
  wishlist?: Resolver<ResolversTypes['Wishlist'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreditMemoResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CreditMemo'] = ResolversParentTypes['CreditMemo']> = {
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['SalesCommentItem']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['CreditMemoItemInterface']>>>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['CreditMemoTotal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreditMemoItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CreditMemoItem'] = ResolversParentTypes['CreditMemoItem']> = {
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity_refunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreditMemoItemInterfaceResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CreditMemoItemInterface'] = ResolversParentTypes['CreditMemoItemInterface']> = {
  __resolveType: TypeResolveFn<'BundleCreditMemoItem' | 'CreditMemoItem' | 'DownloadableCreditMemoItem' | 'GiftCardCreditMemoItem', ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity_refunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type CreditMemoTotalResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CreditMemoTotal'] = ResolversParentTypes['CreditMemoTotal']> = {
  adjustment?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  base_grand_total?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  grand_total?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  shipping_handling?: Resolver<Maybe<ResolversTypes['ShippingHandling']>, ParentType, ContextType>;
  subtotal?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  taxes?: Resolver<Maybe<Array<Maybe<ResolversTypes['TaxItem']>>>, ParentType, ContextType>;
  total_shipping?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  total_tax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrencyResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['Currency'] = ResolversParentTypes['Currency']> = {
  available_currency_codes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  base_currency_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  base_currency_symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_display_currecy_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_display_currecy_symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_display_currency_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_display_currency_symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exchange_rates?: Resolver<Maybe<Array<Maybe<ResolversTypes['ExchangeRate']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomAttributeResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CustomAttribute'] = ResolversParentTypes['CustomAttribute']> = {
  attribute_metadata?: Resolver<Maybe<ResolversTypes['AttributeMetadataInterface']>, ParentType, ContextType>;
  entered_attribute_value?: Resolver<Maybe<ResolversTypes['EnteredAttributeValue']>, ParentType, ContextType>;
  selected_attribute_options?: Resolver<Maybe<ResolversTypes['SelectedAttributeOption']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomAttributeMetadataResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CustomAttributeMetadata'] = ResolversParentTypes['CustomAttributeMetadata']> = {
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Attribute']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer']> = {
  addresses?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomerAddress']>>>, ParentType, ContextType>;
  allow_remote_shopping_assistance?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  compare_list?: Resolver<Maybe<ResolversTypes['CompareList']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date_of_birth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_billing?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_shipping?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dob?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gift_registries?: Resolver<Maybe<Array<Maybe<ResolversTypes['GiftRegistry']>>>, ParentType, ContextType>;
  gift_registry?: Resolver<Maybe<ResolversTypes['GiftRegistry']>, ParentType, ContextType, RequireFields<CustomerGift_RegistryArgs, 'giftRegistryUid'>>;
  group_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  is_subscribed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  middlename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orders?: Resolver<Maybe<ResolversTypes['CustomerOrders']>, ParentType, ContextType, RequireFields<CustomerOrdersArgs, 'currentPage' | 'pageSize'>>;
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  return?: Resolver<Maybe<ResolversTypes['Return']>, ParentType, ContextType, RequireFields<CustomerReturnArgs, 'uid'>>;
  returns?: Resolver<Maybe<ResolversTypes['Returns']>, ParentType, ContextType, RequireFields<CustomerReturnsArgs, 'currentPage' | 'pageSize'>>;
  reviews?: Resolver<ResolversTypes['ProductReviews'], ParentType, ContextType, RequireFields<CustomerReviewsArgs, 'currentPage' | 'pageSize'>>;
  reward_points?: Resolver<Maybe<ResolversTypes['RewardPoints']>, ParentType, ContextType>;
  store_credit?: Resolver<Maybe<ResolversTypes['CustomerStoreCredit']>, ParentType, ContextType>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  taxvat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wishlist?: Resolver<ResolversTypes['Wishlist'], ParentType, ContextType>;
  wishlist_v2?: Resolver<Maybe<ResolversTypes['Wishlist']>, ParentType, ContextType, RequireFields<CustomerWishlist_V2Args, 'id'>>;
  wishlists?: Resolver<Array<Maybe<ResolversTypes['Wishlist']>>, ParentType, ContextType, RequireFields<CustomerWishlistsArgs, 'currentPage' | 'pageSize'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerAddressResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CustomerAddress'] = ResolversParentTypes['CustomerAddress']> = {
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_code?: Resolver<Maybe<ResolversTypes['CountryCodeEnum']>, ParentType, ContextType>;
  country_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  custom_attributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomerAddressAttribute']>>>, ParentType, ContextType>;
  customer_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  default_billing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  default_shipping?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  extension_attributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomerAddressAttribute']>>>, ParentType, ContextType>;
  fax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  middlename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['CustomerAddressRegion']>, ParentType, ContextType>;
  region_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  street?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  telephone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vat_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerAddressAttributeResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CustomerAddressAttribute'] = ResolversParentTypes['CustomerAddressAttribute']> = {
  attribute_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerAddressRegionResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CustomerAddressRegion'] = ResolversParentTypes['CustomerAddressRegion']> = {
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerDownloadableProductResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CustomerDownloadableProduct'] = ResolversParentTypes['CustomerDownloadableProduct']> = {
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  download_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order_increment_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  remaining_downloads?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerDownloadableProductsResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CustomerDownloadableProducts'] = ResolversParentTypes['CustomerDownloadableProducts']> = {
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomerDownloadableProduct']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerOrderResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CustomerOrder'] = ResolversParentTypes['CustomerOrder']> = {
  billing_address?: Resolver<Maybe<ResolversTypes['OrderAddress']>, ParentType, ContextType>;
  carrier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['SalesCommentItem']>>>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  credit_memos?: Resolver<Maybe<Array<Maybe<ResolversTypes['CreditMemo']>>>, ParentType, ContextType>;
  currency_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  deliveryInstructions?: Resolver<Maybe<ResolversTypes['DeliveryInstructions']>, ParentType, ContextType>;
  gift_message?: Resolver<Maybe<ResolversTypes['GiftMessage']>, ParentType, ContextType>;
  gift_receipt_included?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  gift_wrapping?: Resolver<Maybe<ResolversTypes['GiftWrapping']>, ParentType, ContextType>;
  grand_total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  increment_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invoices?: Resolver<Array<Maybe<ResolversTypes['Invoice']>>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderItemInterface']>>>, ParentType, ContextType>;
  items_eligible_for_return?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderItemInterface']>>>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  order_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  order_number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  payment_methods?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderPaymentMethod']>>>, ParentType, ContextType>;
  printed_card_included?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  returns?: Resolver<Maybe<ResolversTypes['Returns']>, ParentType, ContextType, RequireFields<CustomerOrderReturnsArgs, 'currentPage' | 'pageSize'>>;
  shipments?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderShipment']>>>, ParentType, ContextType>;
  shipping_address?: Resolver<Maybe<ResolversTypes['OrderAddress']>, ParentType, ContextType>;
  shipping_method?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['OrderTotal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerOrdersResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CustomerOrders'] = ResolversParentTypes['CustomerOrders']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['CustomerOrder']>>, ParentType, ContextType>;
  page_info?: Resolver<Maybe<ResolversTypes['SearchResultPageInfo']>, ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CustomerOutput'] = ResolversParentTypes['CustomerOutput']> = {
  customer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerPaymentTokensResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CustomerPaymentTokens'] = ResolversParentTypes['CustomerPaymentTokens']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['PaymentToken']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerStoreCreditResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CustomerStoreCredit'] = ResolversParentTypes['CustomerStoreCredit']> = {
  balance_history?: Resolver<Maybe<ResolversTypes['CustomerStoreCreditHistory']>, ParentType, ContextType, RequireFields<CustomerStoreCreditBalance_HistoryArgs, 'currentPage' | 'pageSize'>>;
  current_balance?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerStoreCreditHistoryResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CustomerStoreCreditHistory'] = ResolversParentTypes['CustomerStoreCreditHistory']> = {
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomerStoreCreditHistoryItem']>>>, ParentType, ContextType>;
  page_info?: Resolver<Maybe<ResolversTypes['SearchResultPageInfo']>, ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerStoreCreditHistoryItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CustomerStoreCreditHistoryItem'] = ResolversParentTypes['CustomerStoreCreditHistoryItem']> = {
  action?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  actual_balance?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  balance_change?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  date_time_changed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerTokenResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CustomerToken'] = ResolversParentTypes['CustomerToken']> = {
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomizableAreaOptionResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CustomizableAreaOption'] = ResolversParentTypes['CustomizableAreaOption']> = {
  option_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product_sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['CustomizableAreaValue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomizableAreaValueResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CustomizableAreaValue'] = ResolversParentTypes['CustomizableAreaValue']> = {
  max_characters?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price_type?: Resolver<Maybe<ResolversTypes['PriceTypeEnum']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomizableCheckboxOptionResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CustomizableCheckboxOption'] = ResolversParentTypes['CustomizableCheckboxOption']> = {
  option_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomizableCheckboxValue']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomizableCheckboxValueResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CustomizableCheckboxValue'] = ResolversParentTypes['CustomizableCheckboxValue']> = {
  option_type_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price_type?: Resolver<Maybe<ResolversTypes['PriceTypeEnum']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomizableDateOptionResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CustomizableDateOption'] = ResolversParentTypes['CustomizableDateOption']> = {
  option_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product_sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['CustomizableDateValue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomizableDateValueResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CustomizableDateValue'] = ResolversParentTypes['CustomizableDateValue']> = {
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price_type?: Resolver<Maybe<ResolversTypes['PriceTypeEnum']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['CustomizableDateTypeEnum']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomizableDropDownOptionResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CustomizableDropDownOption'] = ResolversParentTypes['CustomizableDropDownOption']> = {
  option_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomizableDropDownValue']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomizableDropDownValueResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CustomizableDropDownValue'] = ResolversParentTypes['CustomizableDropDownValue']> = {
  option_type_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price_type?: Resolver<Maybe<ResolversTypes['PriceTypeEnum']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomizableFieldOptionResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CustomizableFieldOption'] = ResolversParentTypes['CustomizableFieldOption']> = {
  option_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product_sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['CustomizableFieldValue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomizableFieldValueResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CustomizableFieldValue'] = ResolversParentTypes['CustomizableFieldValue']> = {
  max_characters?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price_type?: Resolver<Maybe<ResolversTypes['PriceTypeEnum']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomizableFileOptionResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CustomizableFileOption'] = ResolversParentTypes['CustomizableFileOption']> = {
  option_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product_sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['CustomizableFileValue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomizableFileValueResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CustomizableFileValue'] = ResolversParentTypes['CustomizableFileValue']> = {
  file_extension?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image_size_x?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image_size_y?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price_type?: Resolver<Maybe<ResolversTypes['PriceTypeEnum']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomizableMultipleOptionResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CustomizableMultipleOption'] = ResolversParentTypes['CustomizableMultipleOption']> = {
  option_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomizableMultipleValue']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomizableMultipleValueResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CustomizableMultipleValue'] = ResolversParentTypes['CustomizableMultipleValue']> = {
  option_type_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price_type?: Resolver<Maybe<ResolversTypes['PriceTypeEnum']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomizableOptionInterfaceResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CustomizableOptionInterface'] = ResolversParentTypes['CustomizableOptionInterface']> = {
  __resolveType: TypeResolveFn<'CustomizableAreaOption' | 'CustomizableCheckboxOption' | 'CustomizableDateOption' | 'CustomizableDropDownOption' | 'CustomizableFieldOption' | 'CustomizableFileOption' | 'CustomizableMultipleOption' | 'CustomizableRadioOption', ParentType, ContextType>;
  option_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type CustomizableProductInterfaceResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CustomizableProductInterface'] = ResolversParentTypes['CustomizableProductInterface']> = {
  __resolveType: TypeResolveFn<'BundleProduct' | 'ConfigurableProduct' | 'DownloadableProduct' | 'GiftCardProduct' | 'SimpleProduct' | 'VirtualProduct', ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomizableOptionInterface']>>>, ParentType, ContextType>;
};

export type CustomizableRadioOptionResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CustomizableRadioOption'] = ResolversParentTypes['CustomizableRadioOption']> = {
  option_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomizableRadioValue']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomizableRadioValueResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['CustomizableRadioValue'] = ResolversParentTypes['CustomizableRadioValue']> = {
  option_type_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price_type?: Resolver<Maybe<ResolversTypes['PriceTypeEnum']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteCompareListOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['DeleteCompareListOutput'] = ResolversParentTypes['DeleteCompareListOutput']> = {
  result?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeletePaymentTokenOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['DeletePaymentTokenOutput'] = ResolversParentTypes['DeletePaymentTokenOutput']> = {
  customerPaymentTokens?: Resolver<Maybe<ResolversTypes['CustomerPaymentTokens']>, ParentType, ContextType>;
  result?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteWishlistOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['DeleteWishlistOutput'] = ResolversParentTypes['DeleteWishlistOutput']> = {
  status?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  wishlists?: Resolver<Array<Maybe<ResolversTypes['Wishlist']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeliveryInstructionsResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['DeliveryInstructions'] = ResolversParentTypes['DeliveryInstructions']> = {
  authorityToLeave?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  instructions?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DiscountResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['Discount'] = ResolversParentTypes['Discount']> = {
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DownloadableCartItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['DownloadableCartItem'] = ResolversParentTypes['DownloadableCartItem']> = {
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['CartItemError']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['DownloadableProductLinks']>>>, ParentType, ContextType>;
  prices?: Resolver<Maybe<ResolversTypes['CartItemPrices']>, ParentType, ContextType>;
  product?: Resolver<ResolversTypes['ProductInterface'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  samples?: Resolver<Maybe<Array<Maybe<ResolversTypes['DownloadableProductSamples']>>>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DownloadableCreditMemoItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['DownloadableCreditMemoItem'] = ResolversParentTypes['DownloadableCreditMemoItem']> = {
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  downloadable_links?: Resolver<Maybe<Array<Maybe<ResolversTypes['DownloadableItemsLinks']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity_refunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DownloadableInvoiceItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['DownloadableInvoiceItem'] = ResolversParentTypes['DownloadableInvoiceItem']> = {
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  downloadable_links?: Resolver<Maybe<Array<Maybe<ResolversTypes['DownloadableItemsLinks']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity_invoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DownloadableItemsLinksResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['DownloadableItemsLinks'] = ResolversParentTypes['DownloadableItemsLinks']> = {
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DownloadableOrderItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['DownloadableOrderItem'] = ResolversParentTypes['DownloadableOrderItem']> = {
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  downloadable_links?: Resolver<Maybe<Array<Maybe<ResolversTypes['DownloadableItemsLinks']>>>, ParentType, ContextType>;
  eligible_for_return?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  entered_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderItemOption']>>>, ParentType, ContextType>;
  gift_message?: Resolver<Maybe<ResolversTypes['GiftMessage']>, ParentType, ContextType>;
  gift_wrapping?: Resolver<Maybe<ResolversTypes['GiftWrapping']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  line_total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sale_price_incl_tax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity_canceled?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_invoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_ordered?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_refunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_returned?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_shipped?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  selected_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderItemOption']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DownloadableProductResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['DownloadableProduct'] = ResolversParentTypes['DownloadableProduct']> = {
  activity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribute_set_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  availability?: Resolver<Maybe<ResolversTypes['ProductAvailability']>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryInterface']>>>, ParentType, ContextType>;
  category_gear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  climate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_of_manufacture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  crosssell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  custom_attributes?: Resolver<Array<Maybe<ResolversTypes['CustomAttribute']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  downloadable_product_links?: Resolver<Maybe<Array<Maybe<ResolversTypes['DownloadableProductLinks']>>>, ParentType, ContextType>;
  downloadable_product_samples?: Resolver<Maybe<Array<Maybe<ResolversTypes['DownloadableProductSamples']>>>, ParentType, ContextType>;
  eco_collection?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  erin_recommends?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  features_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  format?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_message_available?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  is_returnable?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  links_purchased_separately?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  links_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  marketplacer_brand?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  marketplacer_seller?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  material?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryInterface']>>>, ParentType, ContextType>;
  media_gallery_entries?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryEntry']>>>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_keyword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  new_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  only_x_left_in_stock?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomizableOptionInterface']>>>, ParentType, ContextType>;
  options_container?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  performance_fabric?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['ProductPrices']>, ParentType, ContextType>;
  price_range?: Resolver<ResolversTypes['PriceRange'], ParentType, ContextType>;
  price_tiers?: Resolver<Maybe<Array<Maybe<ResolversTypes['TierPrice']>>>, ParentType, ContextType>;
  product_links?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductLinksInterface']>>>, ParentType, ContextType>;
  purpose?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rating_summary?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  redirect_code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  related_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  relative_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  review_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reviews?: Resolver<ResolversTypes['ProductReviews'], ParentType, ContextType, RequireFields<DownloadableProductReviewsArgs, 'currentPage' | 'pageSize'>>;
  sale?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  short_description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sleeve?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  small_image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  special_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  special_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  special_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  staged?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  stock_status?: Resolver<Maybe<ResolversTypes['ProductStockStatus']>, ParentType, ContextType>;
  strap_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_bottom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_general?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  swatch_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  tier_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tier_prices?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductTierPrices']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  type_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upsell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_rewrites?: Resolver<Maybe<Array<Maybe<ResolversTypes['UrlRewrite']>>>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  websites?: Resolver<Maybe<Array<Maybe<ResolversTypes['Website']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DownloadableProductLinksResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['DownloadableProductLinks'] = ResolversParentTypes['DownloadableProductLinks']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  is_shareable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  link_type?: Resolver<Maybe<ResolversTypes['DownloadableFileTypeEnum']>, ParentType, ContextType>;
  number_of_downloads?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sample_file?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sample_type?: Resolver<Maybe<ResolversTypes['DownloadableFileTypeEnum']>, ParentType, ContextType>;
  sample_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DownloadableProductSamplesResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['DownloadableProductSamples'] = ResolversParentTypes['DownloadableProductSamples']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sample_file?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sample_type?: Resolver<Maybe<ResolversTypes['DownloadableFileTypeEnum']>, ParentType, ContextType>;
  sample_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DownloadableWishlistItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['DownloadableWishlistItem'] = ResolversParentTypes['DownloadableWishlistItem']> = {
  added_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  links_v2?: Resolver<Maybe<Array<Maybe<ResolversTypes['DownloadableProductLinks']>>>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  samples?: Resolver<Maybe<Array<Maybe<ResolversTypes['DownloadableProductSamples']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DynamicBlockResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['DynamicBlock'] = ResolversParentTypes['DynamicBlock']> = {
  content?: Resolver<ResolversTypes['ComplexTextValue'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DynamicBlocksResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['DynamicBlocks'] = ResolversParentTypes['DynamicBlocks']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['DynamicBlock']>>, ParentType, ContextType>;
  page_info?: Resolver<Maybe<ResolversTypes['SearchResultPageInfo']>, ParentType, ContextType>;
  total_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EnteredAttributeValueResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['EnteredAttributeValue'] = ResolversParentTypes['EnteredAttributeValue']> = {
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntityUrlResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['EntityUrl'] = ResolversParentTypes['EntityUrl']> = {
  canonical_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entity_uid?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  redirectCode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  relative_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ErrorInterfaceResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ErrorInterface'] = ResolversParentTypes['ErrorInterface']> = {
  __resolveType: TypeResolveFn<'InternalError' | 'NoSuchEntityUidError', ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ExchangeRateResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ExchangeRate'] = ResolversParentTypes['ExchangeRate']> = {
  currency_to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FixedProductTaxResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['FixedProductTax'] = ResolversParentTypes['FixedProductTax']> = {
  amount?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FreeShippingDetailsResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['FreeShippingDetails'] = ResolversParentTypes['FreeShippingDetails']> = {
  free_shipping_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  free_shipping_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  free_shipping_remaining?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  free_shipping_threshold?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GenerateCustomerTokenAsAdminOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['GenerateCustomerTokenAsAdminOutput'] = ResolversParentTypes['GenerateCustomerTokenAsAdminOutput']> = {
  customer_token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GiftCardAccountResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['GiftCardAccount'] = ResolversParentTypes['GiftCardAccount']> = {
  balance?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expiration_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GiftCardAmountsResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['GiftCardAmounts'] = ResolversParentTypes['GiftCardAmounts']> = {
  attribute_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  value_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  website_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  website_value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GiftCardCartItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['GiftCardCartItem'] = ResolversParentTypes['GiftCardCartItem']> = {
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['CartItemError']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prices?: Resolver<Maybe<ResolversTypes['CartItemPrices']>, ParentType, ContextType>;
  product?: Resolver<ResolversTypes['ProductInterface'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  recipient_email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recipient_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sender_email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sender_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GiftCardCreditMemoItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['GiftCardCreditMemoItem'] = ResolversParentTypes['GiftCardCreditMemoItem']> = {
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  gift_card?: Resolver<Maybe<ResolversTypes['GiftCardItem']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity_refunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GiftCardInvoiceItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['GiftCardInvoiceItem'] = ResolversParentTypes['GiftCardInvoiceItem']> = {
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  gift_card?: Resolver<Maybe<ResolversTypes['GiftCardItem']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity_invoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GiftCardItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['GiftCardItem'] = ResolversParentTypes['GiftCardItem']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recipient_email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recipient_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sender_email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sender_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GiftCardOptionsResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['GiftCardOptions'] = ResolversParentTypes['GiftCardOptions']> = {
  amount?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  custom_giftcard_amount?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recipient_email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recipient_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sender_email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sender_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GiftCardOrderItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['GiftCardOrderItem'] = ResolversParentTypes['GiftCardOrderItem']> = {
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  eligible_for_return?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  entered_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderItemOption']>>>, ParentType, ContextType>;
  gift_card?: Resolver<Maybe<ResolversTypes['GiftCardItem']>, ParentType, ContextType>;
  gift_message?: Resolver<Maybe<ResolversTypes['GiftMessage']>, ParentType, ContextType>;
  gift_wrapping?: Resolver<Maybe<ResolversTypes['GiftWrapping']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  line_total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sale_price_incl_tax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity_canceled?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_invoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_ordered?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_refunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_returned?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_shipped?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  selected_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderItemOption']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GiftCardProductResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['GiftCardProduct'] = ResolversParentTypes['GiftCardProduct']> = {
  activity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  allow_message?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  allow_open_amount?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  attribute_set_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  availability?: Resolver<Maybe<ResolversTypes['ProductAvailability']>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryInterface']>>>, ParentType, ContextType>;
  category_gear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  climate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_of_manufacture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  crosssell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  custom_attributes?: Resolver<Array<Maybe<ResolversTypes['CustomAttribute']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  eco_collection?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  erin_recommends?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  features_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  format?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_card_options?: Resolver<Array<Maybe<ResolversTypes['CustomizableOptionInterface']>>, ParentType, ContextType>;
  gift_message_available?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  giftcard_amounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['GiftCardAmounts']>>>, ParentType, ContextType>;
  giftcard_type?: Resolver<Maybe<ResolversTypes['GiftCardTypeEnum']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  is_redeemable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_returnable?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lifetime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  marketplacer_brand?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  marketplacer_seller?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  material?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryInterface']>>>, ParentType, ContextType>;
  media_gallery_entries?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryEntry']>>>, ParentType, ContextType>;
  message_max_length?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_keyword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  new_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  only_x_left_in_stock?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  open_amount_max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  open_amount_min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomizableOptionInterface']>>>, ParentType, ContextType>;
  options_container?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  performance_fabric?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['ProductPrices']>, ParentType, ContextType>;
  price_range?: Resolver<ResolversTypes['PriceRange'], ParentType, ContextType>;
  price_tiers?: Resolver<Maybe<Array<Maybe<ResolversTypes['TierPrice']>>>, ParentType, ContextType>;
  product_links?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductLinksInterface']>>>, ParentType, ContextType>;
  purpose?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rating_summary?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  redirect_code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  related_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  relative_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  review_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reviews?: Resolver<ResolversTypes['ProductReviews'], ParentType, ContextType, RequireFields<GiftCardProductReviewsArgs, 'currentPage' | 'pageSize'>>;
  sale?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  short_description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sleeve?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  small_image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  special_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  special_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  special_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  staged?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  stock_status?: Resolver<Maybe<ResolversTypes['ProductStockStatus']>, ParentType, ContextType>;
  strap_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_bottom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_general?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  swatch_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  tier_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tier_prices?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductTierPrices']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  type_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upsell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_rewrites?: Resolver<Maybe<Array<Maybe<ResolversTypes['UrlRewrite']>>>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  websites?: Resolver<Maybe<Array<Maybe<ResolversTypes['Website']>>>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GiftCardShipmentItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['GiftCardShipmentItem'] = ResolversParentTypes['GiftCardShipmentItem']> = {
  gift_card?: Resolver<Maybe<ResolversTypes['GiftCardItem']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity_shipped?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GiftCardWishlistItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['GiftCardWishlistItem'] = ResolversParentTypes['GiftCardWishlistItem']> = {
  added_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_card_options?: Resolver<ResolversTypes['GiftCardOptions'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GiftMessageResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['GiftMessage'] = ResolversParentTypes['GiftMessage']> = {
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GiftOptionsPricesResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['GiftOptionsPrices'] = ResolversParentTypes['GiftOptionsPrices']> = {
  gift_wrapping_for_items?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  gift_wrapping_for_order?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  printed_card?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GiftRegistryResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['GiftRegistry'] = ResolversParentTypes['GiftRegistry']> = {
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dynamic_attributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['GiftRegistryDynamicAttribute']>>>, ParentType, ContextType>;
  event_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['GiftRegistryItemInterface']>>>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  privacy_settings?: Resolver<ResolversTypes['GiftRegistryPrivacySettings'], ParentType, ContextType>;
  registrants?: Resolver<Maybe<Array<Maybe<ResolversTypes['GiftRegistryRegistrant']>>>, ParentType, ContextType>;
  shipping_address?: Resolver<Maybe<ResolversTypes['CustomerAddress']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['GiftRegistryStatus'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['GiftRegistryType']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GiftRegistryDynamicAttributeResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['GiftRegistryDynamicAttribute'] = ResolversParentTypes['GiftRegistryDynamicAttribute']> = {
  code?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  group?: Resolver<ResolversTypes['GiftRegistryDynamicAttributeGroup'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GiftRegistryDynamicAttributeInterfaceResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['GiftRegistryDynamicAttributeInterface'] = ResolversParentTypes['GiftRegistryDynamicAttributeInterface']> = {
  __resolveType: TypeResolveFn<'GiftRegistryDynamicAttribute' | 'GiftRegistryRegistrantDynamicAttribute', ParentType, ContextType>;
  code?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type GiftRegistryDynamicAttributeMetadataResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['GiftRegistryDynamicAttributeMetadata'] = ResolversParentTypes['GiftRegistryDynamicAttributeMetadata']> = {
  attribute_group?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  input_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  is_required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GiftRegistryDynamicAttributeMetadataInterfaceResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['GiftRegistryDynamicAttributeMetadataInterface'] = ResolversParentTypes['GiftRegistryDynamicAttributeMetadataInterface']> = {
  __resolveType: TypeResolveFn<'GiftRegistryDynamicAttributeMetadata', ParentType, ContextType>;
  attribute_group?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  input_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  is_required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type GiftRegistryItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['GiftRegistryItem'] = ResolversParentTypes['GiftRegistryItem']> = {
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  quantity_fulfilled?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GiftRegistryItemInterfaceResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['GiftRegistryItemInterface'] = ResolversParentTypes['GiftRegistryItemInterface']> = {
  __resolveType: TypeResolveFn<'GiftRegistryItem', ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  quantity_fulfilled?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type GiftRegistryItemUserErrorInterfaceResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['GiftRegistryItemUserErrorInterface'] = ResolversParentTypes['GiftRegistryItemUserErrorInterface']> = {
  __resolveType: TypeResolveFn<'GiftRegistryItemUserErrors' | 'MoveCartItemsToGiftRegistryOutput', ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user_errors?: Resolver<Array<Maybe<ResolversTypes['GiftRegistryItemsUserError']>>, ParentType, ContextType>;
};

export type GiftRegistryItemUserErrorsResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['GiftRegistryItemUserErrors'] = ResolversParentTypes['GiftRegistryItemUserErrors']> = {
  status?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user_errors?: Resolver<Array<Maybe<ResolversTypes['GiftRegistryItemsUserError']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GiftRegistryItemsUserErrorResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['GiftRegistryItemsUserError'] = ResolversParentTypes['GiftRegistryItemsUserError']> = {
  code?: Resolver<ResolversTypes['GiftRegistryItemsUserErrorType'], ParentType, ContextType>;
  gift_registry_item_uid?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  gift_registry_uid?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product_uid?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GiftRegistryOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['GiftRegistryOutput'] = ResolversParentTypes['GiftRegistryOutput']> = {
  gift_registry?: Resolver<Maybe<ResolversTypes['GiftRegistry']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GiftRegistryOutputInterfaceResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['GiftRegistryOutputInterface'] = ResolversParentTypes['GiftRegistryOutputInterface']> = {
  __resolveType: TypeResolveFn<'GiftRegistryOutput' | 'MoveCartItemsToGiftRegistryOutput', ParentType, ContextType>;
  gift_registry?: Resolver<Maybe<ResolversTypes['GiftRegistry']>, ParentType, ContextType>;
};

export type GiftRegistryRegistrantResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['GiftRegistryRegistrant'] = ResolversParentTypes['GiftRegistryRegistrant']> = {
  dynamic_attributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['GiftRegistryRegistrantDynamicAttribute']>>>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GiftRegistryRegistrantDynamicAttributeResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['GiftRegistryRegistrantDynamicAttribute'] = ResolversParentTypes['GiftRegistryRegistrantDynamicAttribute']> = {
  code?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GiftRegistrySearchResultResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['GiftRegistrySearchResult'] = ResolversParentTypes['GiftRegistrySearchResult']> = {
  event_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  event_title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gift_registry_uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GiftRegistryTypeResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['GiftRegistryType'] = ResolversParentTypes['GiftRegistryType']> = {
  dynamic_attributes_metadata?: Resolver<Maybe<Array<Maybe<ResolversTypes['GiftRegistryDynamicAttributeMetadataInterface']>>>, ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GiftWrappingResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['GiftWrapping'] = ResolversParentTypes['GiftWrapping']> = {
  design?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['GiftWrappingImage']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GiftWrappingImageResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['GiftWrappingImage'] = ResolversParentTypes['GiftWrappingImage']> = {
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupedProductResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['GroupedProduct'] = ResolversParentTypes['GroupedProduct']> = {
  activity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribute_set_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  availability?: Resolver<Maybe<ResolversTypes['ProductAvailability']>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryInterface']>>>, ParentType, ContextType>;
  category_gear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  climate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_of_manufacture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  crosssell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  custom_attributes?: Resolver<Array<Maybe<ResolversTypes['CustomAttribute']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  eco_collection?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  erin_recommends?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  features_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  format?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_message_available?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  is_returnable?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['GroupedProductItem']>>>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  marketplacer_brand?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  marketplacer_seller?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  material?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryInterface']>>>, ParentType, ContextType>;
  media_gallery_entries?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryEntry']>>>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_keyword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  new_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  only_x_left_in_stock?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  options_container?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  performance_fabric?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['ProductPrices']>, ParentType, ContextType>;
  price_range?: Resolver<ResolversTypes['PriceRange'], ParentType, ContextType>;
  price_tiers?: Resolver<Maybe<Array<Maybe<ResolversTypes['TierPrice']>>>, ParentType, ContextType>;
  product_links?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductLinksInterface']>>>, ParentType, ContextType>;
  purpose?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rating_summary?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  redirect_code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  related_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  relative_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  review_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reviews?: Resolver<ResolversTypes['ProductReviews'], ParentType, ContextType, RequireFields<GroupedProductReviewsArgs, 'currentPage' | 'pageSize'>>;
  sale?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  short_description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sleeve?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  small_image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  special_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  special_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  special_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  staged?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  stock_status?: Resolver<Maybe<ResolversTypes['ProductStockStatus']>, ParentType, ContextType>;
  strap_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_bottom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_general?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  swatch_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  tier_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tier_prices?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductTierPrices']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  type_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upsell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_rewrites?: Resolver<Maybe<Array<Maybe<ResolversTypes['UrlRewrite']>>>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  websites?: Resolver<Maybe<Array<Maybe<ResolversTypes['Website']>>>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupedProductItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['GroupedProductItem'] = ResolversParentTypes['GroupedProductItem']> = {
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  qty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupedProductWishlistItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['GroupedProductWishlistItem'] = ResolversParentTypes['GroupedProductWishlistItem']> = {
  added_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HostedProUrlResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['HostedProUrl'] = ResolversParentTypes['HostedProUrl']> = {
  secure_form_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HttpQueryParameterResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['HttpQueryParameter'] = ResolversParentTypes['HttpQueryParameter']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSwatchDataResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ImageSwatchData'] = ResolversParentTypes['ImageSwatchData']> = {
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InternalErrorResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['InternalError'] = ResolversParentTypes['InternalError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvoiceResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['Invoice'] = ResolversParentTypes['Invoice']> = {
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['SalesCommentItem']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['InvoiceItemInterface']>>>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['InvoiceTotal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvoiceItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['InvoiceItem'] = ResolversParentTypes['InvoiceItem']> = {
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity_invoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvoiceItemInterfaceResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['InvoiceItemInterface'] = ResolversParentTypes['InvoiceItemInterface']> = {
  __resolveType: TypeResolveFn<'BundleInvoiceItem' | 'DownloadableInvoiceItem' | 'GiftCardInvoiceItem' | 'InvoiceItem', ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity_invoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type InvoiceTotalResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['InvoiceTotal'] = ResolversParentTypes['InvoiceTotal']> = {
  base_grand_total?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  grand_total?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  grand_total_excl_tax?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  shipping_handling?: Resolver<Maybe<ResolversTypes['ShippingHandling']>, ParentType, ContextType>;
  subtotal?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  subtotal_incl_tax?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  taxes?: Resolver<Maybe<Array<Maybe<ResolversTypes['TaxItem']>>>, ParentType, ContextType>;
  total_shipping?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  total_tax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IsEmailAvailableOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['IsEmailAvailableOutput'] = ResolversParentTypes['IsEmailAvailableOutput']> = {
  is_email_available?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemMapResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ItemMap'] = ResolversParentTypes['ItemMap']> = {
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemSelectedBundleOptionResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ItemSelectedBundleOption'] = ResolversParentTypes['ItemSelectedBundleOption']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemSelectedBundleOptionValue']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemSelectedBundleOptionValueResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ItemSelectedBundleOptionValue'] = ResolversParentTypes['ItemSelectedBundleOptionValue']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeyMessageResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['KeyMessage'] = ResolversParentTypes['KeyMessage']> = {
  link?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeyMessageResultResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['KeyMessageResult'] = ResolversParentTypes['KeyMessageResult']> = {
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['KeyMessage']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeyValueResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['KeyValue'] = ResolversParentTypes['KeyValue']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LayerFilterResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['LayerFilter'] = ResolversParentTypes['LayerFilter']> = {
  filter_items?: Resolver<Maybe<Array<Maybe<ResolversTypes['LayerFilterItemInterface']>>>, ParentType, ContextType>;
  filter_items_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  request_var?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LayerFilterItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['LayerFilterItem'] = ResolversParentTypes['LayerFilterItem']> = {
  items_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value_string?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LayerFilterItemInterfaceResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['LayerFilterItemInterface'] = ResolversParentTypes['LayerFilterItemInterface']> = {
  __resolveType: TypeResolveFn<'LayerFilterItem' | 'SwatchLayerFilterItem', ParentType, ContextType>;
  items_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value_string?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type MediaGalleryEntryResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['MediaGalleryEntry'] = ResolversParentTypes['MediaGalleryEntry']> = {
  content?: Resolver<Maybe<ResolversTypes['ProductMediaGalleryEntriesContent']>, ParentType, ContextType>;
  disabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  file?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  types?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  video_content?: Resolver<Maybe<ResolversTypes['ProductMediaGalleryEntriesVideoContent']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaGalleryInterfaceResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['MediaGalleryInterface'] = ResolversParentTypes['MediaGalleryInterface']> = {
  __resolveType: TypeResolveFn<'ProductImage' | 'ProductVideo', ParentType, ContextType>;
  disabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type MoneyResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['Money'] = ResolversParentTypes['Money']> = {
  currency?: Resolver<Maybe<ResolversTypes['CurrencyEnum']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MoveCartItemsToGiftRegistryOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['MoveCartItemsToGiftRegistryOutput'] = ResolversParentTypes['MoveCartItemsToGiftRegistryOutput']> = {
  gift_registry?: Resolver<Maybe<ResolversTypes['GiftRegistry']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user_errors?: Resolver<Array<Maybe<ResolversTypes['GiftRegistryItemsUserError']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MoveProductsBetweenWishlistsOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['MoveProductsBetweenWishlistsOutput'] = ResolversParentTypes['MoveProductsBetweenWishlistsOutput']> = {
  destination_wishlist?: Resolver<ResolversTypes['Wishlist'], ParentType, ContextType>;
  source_wishlist?: Resolver<ResolversTypes['Wishlist'], ParentType, ContextType>;
  user_errors?: Resolver<Array<Maybe<ResolversTypes['WishListUserInputError']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addBundleProductsToCart?: Resolver<Maybe<ResolversTypes['AddBundleProductsToCartOutput']>, ParentType, ContextType, Partial<MutationAddBundleProductsToCartArgs>>;
  addConfigurableProductsToCart?: Resolver<Maybe<ResolversTypes['AddConfigurableProductsToCartOutput']>, ParentType, ContextType, Partial<MutationAddConfigurableProductsToCartArgs>>;
  addDownloadableProductsToCart?: Resolver<Maybe<ResolversTypes['AddDownloadableProductsToCartOutput']>, ParentType, ContextType, Partial<MutationAddDownloadableProductsToCartArgs>>;
  addGiftRegistryRegistrants?: Resolver<Maybe<ResolversTypes['AddGiftRegistryRegistrantsOutput']>, ParentType, ContextType, RequireFields<MutationAddGiftRegistryRegistrantsArgs, 'giftRegistryUid' | 'registrants'>>;
  addProductsToCart?: Resolver<Maybe<ResolversTypes['AddProductsToCartOutput']>, ParentType, ContextType, RequireFields<MutationAddProductsToCartArgs, 'cartId' | 'cartItems'>>;
  addProductsToCompareList?: Resolver<Maybe<ResolversTypes['CompareList']>, ParentType, ContextType, Partial<MutationAddProductsToCompareListArgs>>;
  addProductsToWishlist?: Resolver<Maybe<ResolversTypes['AddProductsToWishlistOutput']>, ParentType, ContextType, RequireFields<MutationAddProductsToWishlistArgs, 'wishlistId' | 'wishlistItems'>>;
  addReturnComment?: Resolver<Maybe<ResolversTypes['AddReturnCommentOutput']>, ParentType, ContextType, RequireFields<MutationAddReturnCommentArgs, 'input'>>;
  addReturnTracking?: Resolver<Maybe<ResolversTypes['AddReturnTrackingOutput']>, ParentType, ContextType, RequireFields<MutationAddReturnTrackingArgs, 'input'>>;
  addSimpleProductsToCart?: Resolver<Maybe<ResolversTypes['AddSimpleProductsToCartOutput']>, ParentType, ContextType, Partial<MutationAddSimpleProductsToCartArgs>>;
  addVirtualProductsToCart?: Resolver<Maybe<ResolversTypes['AddVirtualProductsToCartOutput']>, ParentType, ContextType, Partial<MutationAddVirtualProductsToCartArgs>>;
  addWishlistItemsToCart?: Resolver<Maybe<ResolversTypes['AddWishlistItemsToCartOutput']>, ParentType, ContextType, RequireFields<MutationAddWishlistItemsToCartArgs, 'wishlistId'>>;
  adyenPaymentDetails?: Resolver<Maybe<ResolversTypes['AdyenPaymentStatus']>, ParentType, ContextType, RequireFields<MutationAdyenPaymentDetailsArgs, 'cart_id' | 'payload'>>;
  applyCouponToCart?: Resolver<Maybe<ResolversTypes['ApplyCouponToCartOutput']>, ParentType, ContextType, Partial<MutationApplyCouponToCartArgs>>;
  applyGiftCardToCart?: Resolver<Maybe<ResolversTypes['ApplyGiftCardToCartOutput']>, ParentType, ContextType, Partial<MutationApplyGiftCardToCartArgs>>;
  applyRewardPointsToCart?: Resolver<Maybe<ResolversTypes['ApplyRewardPointsToCartOutput']>, ParentType, ContextType, RequireFields<MutationApplyRewardPointsToCartArgs, 'cartId'>>;
  applyStoreCreditToCart?: Resolver<Maybe<ResolversTypes['ApplyStoreCreditToCartOutput']>, ParentType, ContextType, RequireFields<MutationApplyStoreCreditToCartArgs, 'input'>>;
  assignCompareListToCustomer?: Resolver<Maybe<ResolversTypes['AssignCompareListToCustomerOutput']>, ParentType, ContextType, RequireFields<MutationAssignCompareListToCustomerArgs, 'uid'>>;
  assignCustomerToGuestCart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType, RequireFields<MutationAssignCustomerToGuestCartArgs, 'cart_id'>>;
  changeCustomerPassword?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType, RequireFields<MutationChangeCustomerPasswordArgs, 'currentPassword' | 'newPassword'>>;
  clearCustomerCart?: Resolver<Maybe<ResolversTypes['ClearCustomerCartOutput']>, ParentType, ContextType, RequireFields<MutationClearCustomerCartArgs, 'cartUid'>>;
  contactUs?: Resolver<Maybe<ResolversTypes['ContactUsOutput']>, ParentType, ContextType, RequireFields<MutationContactUsArgs, 'input'>>;
  copyProductsBetweenWishlists?: Resolver<Maybe<ResolversTypes['CopyProductsBetweenWishlistsOutput']>, ParentType, ContextType, RequireFields<MutationCopyProductsBetweenWishlistsArgs, 'destinationWishlistUid' | 'sourceWishlistUid' | 'wishlistItems'>>;
  createAccountFromOrder?: Resolver<Maybe<ResolversTypes['CustomerOutput']>, ParentType, ContextType, RequireFields<MutationCreateAccountFromOrderArgs, 'orderId'>>;
  createAfterpayCheckout?: Resolver<Maybe<ResolversTypes['createAfterpayCheckoutOutput']>, ParentType, ContextType, Partial<MutationCreateAfterpayCheckoutArgs>>;
  createBraintreeClientToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createCartRedirectUrls?: Resolver<Maybe<ResolversTypes['CreateCartRedirectUrls']>, ParentType, ContextType, RequireFields<MutationCreateCartRedirectUrlsArgs, 'cartId'>>;
  createCompareList?: Resolver<Maybe<ResolversTypes['CompareList']>, ParentType, ContextType, Partial<MutationCreateCompareListArgs>>;
  createCustomer?: Resolver<Maybe<ResolversTypes['CustomerOutput']>, ParentType, ContextType, RequireFields<MutationCreateCustomerArgs, 'input'>>;
  createCustomerAddress?: Resolver<Maybe<ResolversTypes['CustomerAddress']>, ParentType, ContextType, RequireFields<MutationCreateCustomerAddressArgs, 'input'>>;
  createCustomerV2?: Resolver<Maybe<ResolversTypes['CustomerOutput']>, ParentType, ContextType, RequireFields<MutationCreateCustomerV2Args, 'input'>>;
  createEmptyCart?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<MutationCreateEmptyCartArgs>>;
  createGiftRegistry?: Resolver<Maybe<ResolversTypes['CreateGiftRegistryOutput']>, ParentType, ContextType, RequireFields<MutationCreateGiftRegistryArgs, 'giftRegistry'>>;
  createPayflowProToken?: Resolver<Maybe<ResolversTypes['CreatePayflowProTokenOutput']>, ParentType, ContextType, RequireFields<MutationCreatePayflowProTokenArgs, 'input'>>;
  createPaypalExpressToken?: Resolver<Maybe<ResolversTypes['PaypalExpressTokenOutput']>, ParentType, ContextType, RequireFields<MutationCreatePaypalExpressTokenArgs, 'input'>>;
  createProductReview?: Resolver<ResolversTypes['CreateProductReviewOutput'], ParentType, ContextType, RequireFields<MutationCreateProductReviewArgs, 'input'>>;
  createWishlist?: Resolver<Maybe<ResolversTypes['CreateWishlistOutput']>, ParentType, ContextType, RequireFields<MutationCreateWishlistArgs, 'input'>>;
  deleteCompareList?: Resolver<Maybe<ResolversTypes['DeleteCompareListOutput']>, ParentType, ContextType, RequireFields<MutationDeleteCompareListArgs, 'uid'>>;
  deleteCustomer?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  deleteCustomerAddress?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteCustomerAddressArgs, 'id'>>;
  deletePaymentToken?: Resolver<Maybe<ResolversTypes['DeletePaymentTokenOutput']>, ParentType, ContextType, RequireFields<MutationDeletePaymentTokenArgs, 'public_hash'>>;
  deleteWishlist?: Resolver<Maybe<ResolversTypes['DeleteWishlistOutput']>, ParentType, ContextType, RequireFields<MutationDeleteWishlistArgs, 'wishlistId'>>;
  generateCustomerToken?: Resolver<Maybe<ResolversTypes['CustomerToken']>, ParentType, ContextType, RequireFields<MutationGenerateCustomerTokenArgs, 'email' | 'password'>>;
  generateCustomerTokenAsAdmin?: Resolver<Maybe<ResolversTypes['GenerateCustomerTokenAsAdminOutput']>, ParentType, ContextType, RequireFields<MutationGenerateCustomerTokenAsAdminArgs, 'input'>>;
  getCustomerTokenBySecretCode?: Resolver<Maybe<ResolversTypes['getCustomerTokenBySecretCodeOutput']>, ParentType, ContextType, RequireFields<MutationGetCustomerTokenBySecretCodeArgs, 'secret_code'>>;
  handlePayflowProResponse?: Resolver<Maybe<ResolversTypes['PayflowProResponseOutput']>, ParentType, ContextType, RequireFields<MutationHandlePayflowProResponseArgs, 'input'>>;
  mergeCarts?: Resolver<ResolversTypes['Cart'], ParentType, ContextType, RequireFields<MutationMergeCartsArgs, 'source_cart_id'>>;
  moveCartItemsToGiftRegistry?: Resolver<Maybe<ResolversTypes['MoveCartItemsToGiftRegistryOutput']>, ParentType, ContextType, RequireFields<MutationMoveCartItemsToGiftRegistryArgs, 'cartUid' | 'giftRegistryUid'>>;
  moveProductsBetweenWishlists?: Resolver<Maybe<ResolversTypes['MoveProductsBetweenWishlistsOutput']>, ParentType, ContextType, RequireFields<MutationMoveProductsBetweenWishlistsArgs, 'destinationWishlistUid' | 'sourceWishlistUid' | 'wishlistItems'>>;
  placeOrder?: Resolver<Maybe<ResolversTypes['PlaceOrderOutput']>, ParentType, ContextType, Partial<MutationPlaceOrderArgs>>;
  postContactForm?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationPostContactFormArgs>>;
  redeemGiftCardBalanceAsStoreCredit?: Resolver<Maybe<ResolversTypes['GiftCardAccount']>, ParentType, ContextType, RequireFields<MutationRedeemGiftCardBalanceAsStoreCreditArgs, 'input'>>;
  removeCouponFromCart?: Resolver<Maybe<ResolversTypes['RemoveCouponFromCartOutput']>, ParentType, ContextType, Partial<MutationRemoveCouponFromCartArgs>>;
  removeGiftCardFromCart?: Resolver<Maybe<ResolversTypes['RemoveGiftCardFromCartOutput']>, ParentType, ContextType, Partial<MutationRemoveGiftCardFromCartArgs>>;
  removeGiftRegistry?: Resolver<Maybe<ResolversTypes['RemoveGiftRegistryOutput']>, ParentType, ContextType, RequireFields<MutationRemoveGiftRegistryArgs, 'giftRegistryUid'>>;
  removeGiftRegistryItems?: Resolver<Maybe<ResolversTypes['RemoveGiftRegistryItemsOutput']>, ParentType, ContextType, RequireFields<MutationRemoveGiftRegistryItemsArgs, 'giftRegistryUid' | 'itemsUid'>>;
  removeGiftRegistryRegistrants?: Resolver<Maybe<ResolversTypes['RemoveGiftRegistryRegistrantsOutput']>, ParentType, ContextType, RequireFields<MutationRemoveGiftRegistryRegistrantsArgs, 'giftRegistryUid' | 'registrantsUid'>>;
  removeItemFromCart?: Resolver<Maybe<ResolversTypes['RemoveItemFromCartOutput']>, ParentType, ContextType, Partial<MutationRemoveItemFromCartArgs>>;
  removeProductsFromCompareList?: Resolver<Maybe<ResolversTypes['CompareList']>, ParentType, ContextType, Partial<MutationRemoveProductsFromCompareListArgs>>;
  removeProductsFromWishlist?: Resolver<Maybe<ResolversTypes['RemoveProductsFromWishlistOutput']>, ParentType, ContextType, RequireFields<MutationRemoveProductsFromWishlistArgs, 'wishlistId' | 'wishlistItemsIds'>>;
  removeReturnTracking?: Resolver<Maybe<ResolversTypes['RemoveReturnTrackingOutput']>, ParentType, ContextType, RequireFields<MutationRemoveReturnTrackingArgs, 'input'>>;
  removeRewardPointsFromCart?: Resolver<Maybe<ResolversTypes['RemoveRewardPointsFromCartOutput']>, ParentType, ContextType, RequireFields<MutationRemoveRewardPointsFromCartArgs, 'cartId'>>;
  removeStoreCreditFromCart?: Resolver<Maybe<ResolversTypes['RemoveStoreCreditFromCartOutput']>, ParentType, ContextType, RequireFields<MutationRemoveStoreCreditFromCartArgs, 'input'>>;
  reorderItems?: Resolver<Maybe<ResolversTypes['ReorderItemsOutput']>, ParentType, ContextType, RequireFields<MutationReorderItemsArgs, 'orderNumber'>>;
  requestPasswordResetEmail?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationRequestPasswordResetEmailArgs, 'email'>>;
  requestReturn?: Resolver<Maybe<ResolversTypes['RequestReturnOutput']>, ParentType, ContextType, RequireFields<MutationRequestReturnArgs, 'input'>>;
  resetPassword?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationResetPasswordArgs, 'email' | 'newPassword' | 'resetPasswordToken'>>;
  revokeCustomerToken?: Resolver<Maybe<ResolversTypes['RevokeCustomerTokenOutput']>, ParentType, ContextType>;
  sendEmailToFriend?: Resolver<Maybe<ResolversTypes['SendEmailToFriendOutput']>, ParentType, ContextType, Partial<MutationSendEmailToFriendArgs>>;
  setBillingAddressOnCart?: Resolver<Maybe<ResolversTypes['SetBillingAddressOnCartOutput']>, ParentType, ContextType, Partial<MutationSetBillingAddressOnCartArgs>>;
  setGiftOptionsOnCart?: Resolver<Maybe<ResolversTypes['SetGiftOptionsOnCartOutput']>, ParentType, ContextType, Partial<MutationSetGiftOptionsOnCartArgs>>;
  setGuestEmailOnCart?: Resolver<Maybe<ResolversTypes['SetGuestEmailOnCartOutput']>, ParentType, ContextType, Partial<MutationSetGuestEmailOnCartArgs>>;
  setPaymentMethodAndPlaceOrder?: Resolver<Maybe<ResolversTypes['PlaceOrderOutput']>, ParentType, ContextType, Partial<MutationSetPaymentMethodAndPlaceOrderArgs>>;
  setPaymentMethodOnCart?: Resolver<Maybe<ResolversTypes['SetPaymentMethodOnCartOutput']>, ParentType, ContextType, Partial<MutationSetPaymentMethodOnCartArgs>>;
  setShippingAddressesOnCart?: Resolver<Maybe<ResolversTypes['SetShippingAddressesOnCartOutput']>, ParentType, ContextType, Partial<MutationSetShippingAddressesOnCartArgs>>;
  setShippingMethodsOnCart?: Resolver<Maybe<ResolversTypes['SetShippingMethodsOnCartOutput']>, ParentType, ContextType, Partial<MutationSetShippingMethodsOnCartArgs>>;
  shareGiftRegistry?: Resolver<Maybe<ResolversTypes['ShareGiftRegistryOutput']>, ParentType, ContextType, RequireFields<MutationShareGiftRegistryArgs, 'giftRegistryUid' | 'invitees' | 'sender'>>;
  shareWishlist?: Resolver<Maybe<ResolversTypes['WishlistOutput']>, ParentType, ContextType, RequireFields<MutationShareWishlistArgs, 'input'>>;
  subscribeEmailToNewsletter?: Resolver<Maybe<ResolversTypes['SubscribeEmailToNewsletterOutput']>, ParentType, ContextType, RequireFields<MutationSubscribeEmailToNewsletterArgs, 'email'>>;
  updateCartItems?: Resolver<Maybe<ResolversTypes['UpdateCartItemsOutput']>, ParentType, ContextType, Partial<MutationUpdateCartItemsArgs>>;
  updateCustomer?: Resolver<Maybe<ResolversTypes['CustomerOutput']>, ParentType, ContextType, RequireFields<MutationUpdateCustomerArgs, 'input'>>;
  updateCustomerAddress?: Resolver<Maybe<ResolversTypes['CustomerAddress']>, ParentType, ContextType, RequireFields<MutationUpdateCustomerAddressArgs, 'id'>>;
  updateCustomerEmail?: Resolver<Maybe<ResolversTypes['CustomerOutput']>, ParentType, ContextType, RequireFields<MutationUpdateCustomerEmailArgs, 'email' | 'password'>>;
  updateCustomerV2?: Resolver<Maybe<ResolversTypes['CustomerOutput']>, ParentType, ContextType, RequireFields<MutationUpdateCustomerV2Args, 'input'>>;
  updateGiftRegistry?: Resolver<Maybe<ResolversTypes['UpdateGiftRegistryOutput']>, ParentType, ContextType, RequireFields<MutationUpdateGiftRegistryArgs, 'giftRegistry' | 'giftRegistryUid'>>;
  updateGiftRegistryItems?: Resolver<Maybe<ResolversTypes['UpdateGiftRegistryItemsOutput']>, ParentType, ContextType, RequireFields<MutationUpdateGiftRegistryItemsArgs, 'giftRegistryUid' | 'items'>>;
  updateGiftRegistryRegistrants?: Resolver<Maybe<ResolversTypes['UpdateGiftRegistryRegistrantsOutput']>, ParentType, ContextType, RequireFields<MutationUpdateGiftRegistryRegistrantsArgs, 'giftRegistryUid' | 'registrants'>>;
  updateProductsInWishlist?: Resolver<Maybe<ResolversTypes['UpdateProductsInWishlistOutput']>, ParentType, ContextType, RequireFields<MutationUpdateProductsInWishlistArgs, 'wishlistId' | 'wishlistItems'>>;
  updateWishlist?: Resolver<Maybe<ResolversTypes['UpdateWishlistOutput']>, ParentType, ContextType, RequireFields<MutationUpdateWishlistArgs, 'wishlistId'>>;
};

export type NoSuchEntityUidErrorResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['NoSuchEntityUidError'] = ResolversParentTypes['NoSuchEntityUidError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  adyen_payment_status?: Resolver<Maybe<ResolversTypes['AdyenPaymentStatus']>, ParentType, ContextType>;
  cart_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  order_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order_number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderAddressResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['OrderAddress'] = ResolversParentTypes['OrderAddress']> = {
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_code?: Resolver<Maybe<ResolversTypes['CountryCodeEnum']>, ParentType, ContextType>;
  fax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  middlename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  street?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  telephone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vat_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['OrderItem'] = ResolversParentTypes['OrderItem']> = {
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  eligible_for_return?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  entered_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderItemOption']>>>, ParentType, ContextType>;
  gift_message?: Resolver<Maybe<ResolversTypes['GiftMessage']>, ParentType, ContextType>;
  gift_wrapping?: Resolver<Maybe<ResolversTypes['GiftWrapping']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  line_total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sale_price_incl_tax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity_canceled?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_invoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_ordered?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_refunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_returned?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_shipped?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  selected_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderItemOption']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderItemInterfaceResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['OrderItemInterface'] = ResolversParentTypes['OrderItemInterface']> = {
  __resolveType: TypeResolveFn<'BundleOrderItem' | 'DownloadableOrderItem' | 'GiftCardOrderItem' | 'OrderItem', ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  eligible_for_return?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  entered_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderItemOption']>>>, ParentType, ContextType>;
  gift_message?: Resolver<Maybe<ResolversTypes['GiftMessage']>, ParentType, ContextType>;
  gift_wrapping?: Resolver<Maybe<ResolversTypes['GiftWrapping']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  line_total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sale_price_incl_tax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity_canceled?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_invoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_ordered?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_refunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_returned?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_shipped?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  selected_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderItemOption']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type OrderItemOptionResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['OrderItemOption'] = ResolversParentTypes['OrderItemOption']> = {
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderPaymentMethodResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['OrderPaymentMethod'] = ResolversParentTypes['OrderPaymentMethod']> = {
  additional_data?: Resolver<Maybe<Array<Maybe<ResolversTypes['KeyValue']>>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderShipmentResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['OrderShipment'] = ResolversParentTypes['OrderShipment']> = {
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['SalesCommentItem']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['ShipmentItemInterface']>>>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tracking?: Resolver<Maybe<Array<Maybe<ResolversTypes['ShipmentTracking']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderTotalResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['OrderTotal'] = ResolversParentTypes['OrderTotal']> = {
  base_grand_total?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  grand_total?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  grand_total_excl_tax?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  shipping_handling?: Resolver<Maybe<ResolversTypes['ShippingHandling']>, ParentType, ContextType>;
  subtotal?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  subtotal_incl_tax?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  taxes?: Resolver<Maybe<Array<Maybe<ResolversTypes['TaxItem']>>>, ParentType, ContextType>;
  total_giftcard?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  total_shipping?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  total_tax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PayflowLinkTokenResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['PayflowLinkToken'] = ResolversParentTypes['PayflowLinkToken']> = {
  mode?: Resolver<Maybe<ResolversTypes['PayflowLinkMode']>, ParentType, ContextType>;
  paypal_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secure_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secure_token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PayflowProResponseOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['PayflowProResponseOutput'] = ResolversParentTypes['PayflowProResponseOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PayflowProTokenResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['PayflowProToken'] = ResolversParentTypes['PayflowProToken']> = {
  response_message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  result?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  result_code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  secure_token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  secure_token_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentTokenResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['PaymentToken'] = ResolversParentTypes['PaymentToken']> = {
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payment_method_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  public_hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['PaymentTokenTypeEnum'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaypalExpressClientConfigResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['PaypalExpressClientConfig'] = ResolversParentTypes['PaypalExpressClientConfig']> = {
  button?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  environment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  is_guest_checkout_allowed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_visible_on_product_page?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  merchant_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  styles?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemMap']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaypalExpressConfigResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['PaypalExpressConfig'] = ResolversParentTypes['PaypalExpressConfig']> = {
  billing_agreement_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  in_context_config?: Resolver<Maybe<ResolversTypes['PaypalExpressInContextConfig']>, ParentType, ContextType>;
  is_context_checkout?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  paylater_enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  payment_acceptance_mark_href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payment_acceptance_mark_src?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  redirect_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sdk_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaypalExpressInContextConfigResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['PaypalExpressInContextConfig'] = ResolversParentTypes['PaypalExpressInContextConfig']> = {
  client_config?: Resolver<Maybe<ResolversTypes['PaypalExpressClientConfig']>, ParentType, ContextType>;
  in_context_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  merchant_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaypalExpressTokenResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['PaypalExpressToken'] = ResolversParentTypes['PaypalExpressToken']> = {
  paypal_urls?: Resolver<Maybe<ResolversTypes['PaypalExpressUrlList']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaypalExpressTokenOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['PaypalExpressTokenOutput'] = ResolversParentTypes['PaypalExpressTokenOutput']> = {
  paypal_urls?: Resolver<Maybe<ResolversTypes['PaypalExpressUrlList']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaypalExpressUrlListResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['PaypalExpressUrlList'] = ResolversParentTypes['PaypalExpressUrlList']> = {
  edit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  start?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PhysicalProductInterfaceResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['PhysicalProductInterface'] = ResolversParentTypes['PhysicalProductInterface']> = {
  __resolveType: TypeResolveFn<'BundleProduct' | 'ConfigurableProduct' | 'GiftCardProduct' | 'GroupedProduct' | 'SimpleProduct', ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type PickupLocationResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['PickupLocation'] = ResolversParentTypes['PickupLocation']> = {
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contact_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pickup_location_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  street?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PickupLocationsResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['PickupLocations'] = ResolversParentTypes['PickupLocations']> = {
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['PickupLocation']>>>, ParentType, ContextType>;
  page_info?: Resolver<Maybe<ResolversTypes['SearchResultPageInfo']>, ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlaceOrderOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['PlaceOrderOutput'] = ResolversParentTypes['PlaceOrderOutput']> = {
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PriceResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['Price'] = ResolversParentTypes['Price']> = {
  adjustments?: Resolver<Maybe<Array<Maybe<ResolversTypes['PriceAdjustment']>>>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PriceAdjustmentResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['PriceAdjustment'] = ResolversParentTypes['PriceAdjustment']> = {
  amount?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['PriceAdjustmentCodesEnum']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['PriceAdjustmentDescriptionEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PriceRangeResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['PriceRange'] = ResolversParentTypes['PriceRange']> = {
  maximum_price?: Resolver<Maybe<ResolversTypes['ProductPrice']>, ParentType, ContextType>;
  minimum_price?: Resolver<ResolversTypes['ProductPrice'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductAttributeResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ProductAttribute'] = ResolversParentTypes['ProductAttribute']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductAttributeMetadataResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ProductAttributeMetadata'] = ResolversParentTypes['ProductAttributeMetadata']> = {
  attribute_labels?: Resolver<Maybe<Array<Maybe<ResolversTypes['StoreLabels']>>>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  data_type?: Resolver<Maybe<ResolversTypes['ObjectDataTypeEnum']>, ParentType, ContextType>;
  entity_type?: Resolver<Maybe<ResolversTypes['AttributeEntityTypeEnum']>, ParentType, ContextType>;
  is_system?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ui_input?: Resolver<Maybe<ResolversTypes['UiInputTypeInterface']>, ParentType, ContextType>;
  uid?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  used_in_components?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomAttributesListsEnum']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductAvailabilityResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ProductAvailability'] = ResolversParentTypes['ProductAvailability']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['ProductAvailabilityStatus']>, ParentType, ContextType>;
  willBeReleasedAt?: Resolver<Maybe<ResolversTypes['ReleaseDate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductDiscountResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ProductDiscount'] = ResolversParentTypes['ProductDiscount']> = {
  amount_off?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  percent_off?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductImageResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ProductImage'] = ResolversParentTypes['ProductImage']> = {
  disabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductInterfaceResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ProductInterface'] = ResolversParentTypes['ProductInterface']> = {
  __resolveType: TypeResolveFn<'BundleProduct' | 'ConfigurableProduct' | 'DownloadableProduct' | 'GiftCardProduct' | 'GroupedProduct' | 'SimpleProduct' | 'VirtualProduct', ParentType, ContextType>;
  activity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribute_set_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  availability?: Resolver<Maybe<ResolversTypes['ProductAvailability']>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryInterface']>>>, ParentType, ContextType>;
  category_gear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  climate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_of_manufacture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  crosssell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  custom_attributes?: Resolver<Array<Maybe<ResolversTypes['CustomAttribute']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  eco_collection?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  erin_recommends?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  features_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  format?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_message_available?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  is_returnable?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  marketplacer_brand?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  marketplacer_seller?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  material?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryInterface']>>>, ParentType, ContextType>;
  media_gallery_entries?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryEntry']>>>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_keyword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  new_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  only_x_left_in_stock?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  options_container?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  performance_fabric?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['ProductPrices']>, ParentType, ContextType>;
  price_range?: Resolver<ResolversTypes['PriceRange'], ParentType, ContextType>;
  price_tiers?: Resolver<Maybe<Array<Maybe<ResolversTypes['TierPrice']>>>, ParentType, ContextType>;
  product_links?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductLinksInterface']>>>, ParentType, ContextType>;
  purpose?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rating_summary?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  related_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  review_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reviews?: Resolver<ResolversTypes['ProductReviews'], ParentType, ContextType, RequireFields<ProductInterfaceReviewsArgs, 'currentPage' | 'pageSize'>>;
  sale?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  short_description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sleeve?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  small_image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  special_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  special_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  special_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  staged?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  stock_status?: Resolver<Maybe<ResolversTypes['ProductStockStatus']>, ParentType, ContextType>;
  strap_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_bottom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_general?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  swatch_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  tier_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tier_prices?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductTierPrices']>>>, ParentType, ContextType>;
  type_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upsell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_rewrites?: Resolver<Maybe<Array<Maybe<ResolversTypes['UrlRewrite']>>>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  websites?: Resolver<Maybe<Array<Maybe<ResolversTypes['Website']>>>, ParentType, ContextType>;
};

export type ProductLinksResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ProductLinks'] = ResolversParentTypes['ProductLinks']> = {
  link_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linked_product_sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linked_product_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductLinksInterfaceResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ProductLinksInterface'] = ResolversParentTypes['ProductLinksInterface']> = {
  __resolveType: TypeResolveFn<'ProductLinks', ParentType, ContextType>;
  link_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linked_product_sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linked_product_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type ProductMediaGalleryEntriesContentResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ProductMediaGalleryEntriesContent'] = ResolversParentTypes['ProductMediaGalleryEntriesContent']> = {
  base64_encoded_data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductMediaGalleryEntriesVideoContentResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ProductMediaGalleryEntriesVideoContent'] = ResolversParentTypes['ProductMediaGalleryEntriesVideoContent']> = {
  media_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  video_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  video_metadata?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  video_provider?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  video_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  video_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductPriceResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ProductPrice'] = ResolversParentTypes['ProductPrice']> = {
  discount?: Resolver<Maybe<ResolversTypes['ProductDiscount']>, ParentType, ContextType>;
  final_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  fixed_product_taxes?: Resolver<Maybe<Array<Maybe<ResolversTypes['FixedProductTax']>>>, ParentType, ContextType>;
  regular_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductPricesResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ProductPrices'] = ResolversParentTypes['ProductPrices']> = {
  maximalPrice?: Resolver<Maybe<ResolversTypes['Price']>, ParentType, ContextType>;
  minimalPrice?: Resolver<Maybe<ResolversTypes['Price']>, ParentType, ContextType>;
  regularPrice?: Resolver<Maybe<ResolversTypes['Price']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductReviewResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ProductReview'] = ResolversParentTypes['ProductReview']> = {
  average_rating?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nickname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['ProductInterface'], ParentType, ContextType>;
  ratings_breakdown?: Resolver<Array<Maybe<ResolversTypes['ProductReviewRating']>>, ParentType, ContextType>;
  summary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductReviewRatingResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ProductReviewRating'] = ResolversParentTypes['ProductReviewRating']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductReviewRatingMetadataResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ProductReviewRatingMetadata'] = ResolversParentTypes['ProductReviewRatingMetadata']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  values?: Resolver<Array<Maybe<ResolversTypes['ProductReviewRatingValueMetadata']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductReviewRatingValueMetadataResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ProductReviewRatingValueMetadata'] = ResolversParentTypes['ProductReviewRatingValueMetadata']> = {
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductReviewRatingsMetadataResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ProductReviewRatingsMetadata'] = ResolversParentTypes['ProductReviewRatingsMetadata']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['ProductReviewRatingMetadata']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductReviewsResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ProductReviews'] = ResolversParentTypes['ProductReviews']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['ProductReview']>>, ParentType, ContextType>;
  page_info?: Resolver<ResolversTypes['SearchResultPageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductTierPricesResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ProductTierPrices'] = ResolversParentTypes['ProductTierPrices']> = {
  customer_group_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  percentage_value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  qty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  website_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductVideoResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ProductVideo'] = ResolversParentTypes['ProductVideo']> = {
  disabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  video_content?: Resolver<Maybe<ResolversTypes['ProductMediaGalleryEntriesVideoContent']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductsResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['Products'] = ResolversParentTypes['Products']> = {
  aggregations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Aggregation']>>>, ParentType, ContextType, Partial<ProductsAggregationsArgs>>;
  filters?: Resolver<Maybe<Array<Maybe<ResolversTypes['LayerFilter']>>>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  page_info?: Resolver<Maybe<ResolversTypes['SearchResultPageInfo']>, ParentType, ContextType>;
  sort_fields?: Resolver<Maybe<ResolversTypes['SortFields']>, ParentType, ContextType>;
  suggestions?: Resolver<Maybe<Array<Maybe<ResolversTypes['SearchSuggestion']>>>, ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  adyenPaymentMethods?: Resolver<Maybe<ResolversTypes['AdyenPaymentMethods']>, ParentType, ContextType, RequireFields<QueryAdyenPaymentMethodsArgs, 'cart_id'>>;
  adyenPaymentStatus?: Resolver<Maybe<ResolversTypes['AdyenPaymentStatus']>, ParentType, ContextType, Partial<QueryAdyenPaymentStatusArgs>>;
  afterpayConfig?: Resolver<Maybe<ResolversTypes['afterpayConfigOutput']>, ParentType, ContextType>;
  attributesMetadata?: Resolver<Maybe<ResolversTypes['AttributesMetadata']>, ParentType, ContextType, RequireFields<QueryAttributesMetadataArgs, 'entityType'>>;
  availableStores?: Resolver<Maybe<Array<Maybe<ResolversTypes['StoreConfig']>>>, ParentType, ContextType, Partial<QueryAvailableStoresArgs>>;
  cart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<QueryCartArgs, 'cart_id'>>;
  categories?: Resolver<Maybe<ResolversTypes['CategoryResult']>, ParentType, ContextType, RequireFields<QueryCategoriesArgs, 'currentPage' | 'pageSize'>>;
  category?: Resolver<Maybe<ResolversTypes['CategoryTree']>, ParentType, ContextType, Partial<QueryCategoryArgs>>;
  categoryList?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryTree']>>>, ParentType, ContextType, RequireFields<QueryCategoryListArgs, 'currentPage' | 'pageSize'>>;
  checkoutAgreements?: Resolver<Maybe<Array<Maybe<ResolversTypes['CheckoutAgreement']>>>, ParentType, ContextType>;
  cmsBlocks?: Resolver<Maybe<ResolversTypes['CmsBlocks']>, ParentType, ContextType, Partial<QueryCmsBlocksArgs>>;
  cmsPage?: Resolver<Maybe<ResolversTypes['CmsPage']>, ParentType, ContextType, Partial<QueryCmsPageArgs>>;
  compareList?: Resolver<Maybe<ResolversTypes['CompareList']>, ParentType, ContextType, RequireFields<QueryCompareListArgs, 'uid'>>;
  countries?: Resolver<Maybe<Array<Maybe<ResolversTypes['Country']>>>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType, Partial<QueryCountryArgs>>;
  currency?: Resolver<Maybe<ResolversTypes['Currency']>, ParentType, ContextType>;
  customAttributeMetadata?: Resolver<Maybe<ResolversTypes['CustomAttributeMetadata']>, ParentType, ContextType, RequireFields<QueryCustomAttributeMetadataArgs, 'attributes'>>;
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType>;
  customerCart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  customerDownloadableProducts?: Resolver<Maybe<ResolversTypes['CustomerDownloadableProducts']>, ParentType, ContextType>;
  customerOrders?: Resolver<Maybe<ResolversTypes['CustomerOrders']>, ParentType, ContextType>;
  customerPaymentTokens?: Resolver<Maybe<ResolversTypes['CustomerPaymentTokens']>, ParentType, ContextType>;
  dynamicBlocks?: Resolver<ResolversTypes['DynamicBlocks'], ParentType, ContextType, RequireFields<QueryDynamicBlocksArgs, 'currentPage' | 'pageSize'>>;
  getHostedProUrl?: Resolver<Maybe<ResolversTypes['HostedProUrl']>, ParentType, ContextType, RequireFields<QueryGetHostedProUrlArgs, 'input'>>;
  getPayflowLinkToken?: Resolver<Maybe<ResolversTypes['PayflowLinkToken']>, ParentType, ContextType, RequireFields<QueryGetPayflowLinkTokenArgs, 'input'>>;
  getSocialLinks?: Resolver<Maybe<Array<Maybe<ResolversTypes['SocialLink']>>>, ParentType, ContextType>;
  giftCardAccount?: Resolver<Maybe<ResolversTypes['GiftCardAccount']>, ParentType, ContextType, RequireFields<QueryGiftCardAccountArgs, 'input'>>;
  giftRegistry?: Resolver<Maybe<ResolversTypes['GiftRegistry']>, ParentType, ContextType, RequireFields<QueryGiftRegistryArgs, 'giftRegistryUid'>>;
  giftRegistryEmailSearch?: Resolver<Maybe<Array<Maybe<ResolversTypes['GiftRegistrySearchResult']>>>, ParentType, ContextType, RequireFields<QueryGiftRegistryEmailSearchArgs, 'email'>>;
  giftRegistryIdSearch?: Resolver<Maybe<Array<Maybe<ResolversTypes['GiftRegistrySearchResult']>>>, ParentType, ContextType, RequireFields<QueryGiftRegistryIdSearchArgs, 'giftRegistryUid'>>;
  giftRegistryTypeSearch?: Resolver<Maybe<Array<Maybe<ResolversTypes['GiftRegistrySearchResult']>>>, ParentType, ContextType, RequireFields<QueryGiftRegistryTypeSearchArgs, 'firstName' | 'lastName'>>;
  giftRegistryTypes?: Resolver<Maybe<Array<Maybe<ResolversTypes['GiftRegistryType']>>>, ParentType, ContextType>;
  isEmailAvailable?: Resolver<Maybe<ResolversTypes['IsEmailAvailableOutput']>, ParentType, ContextType, RequireFields<QueryIsEmailAvailableArgs, 'email'>>;
  keyMessages?: Resolver<Maybe<ResolversTypes['KeyMessageResult']>, ParentType, ContextType>;
  pickupLocations?: Resolver<Maybe<ResolversTypes['PickupLocations']>, ParentType, ContextType, RequireFields<QueryPickupLocationsArgs, 'currentPage' | 'pageSize'>>;
  productReviewRatingsMetadata?: Resolver<ResolversTypes['ProductReviewRatingsMetadata'], ParentType, ContextType>;
  products?: Resolver<Maybe<ResolversTypes['Products']>, ParentType, ContextType, RequireFields<QueryProductsArgs, 'currentPage' | 'pageSize'>>;
  productsBySku?: Resolver<Maybe<ResolversTypes['Products']>, ParentType, ContextType, RequireFields<QueryProductsBySkuArgs, 'filter' | 'pageSize'>>;
  recaptchaV3Config?: Resolver<Maybe<ResolversTypes['ReCaptchaConfigurationV3']>, ParentType, ContextType>;
  route?: Resolver<Maybe<ResolversTypes['RoutableInterface']>, ParentType, ContextType, RequireFields<QueryRouteArgs, 'url'>>;
  storeConfig?: Resolver<Maybe<ResolversTypes['StoreConfig']>, ParentType, ContextType>;
  storeLocations?: Resolver<Maybe<ResolversTypes['StoreLocations']>, ParentType, ContextType, RequireFields<QueryStoreLocationsArgs, 'currentPage' | 'pageSize'>>;
  urlResolver?: Resolver<Maybe<ResolversTypes['EntityUrl']>, ParentType, ContextType, RequireFields<QueryUrlResolverArgs, 'url'>>;
  validatePasswordResetToken?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<QueryValidatePasswordResetTokenArgs>>;
  wishlist?: Resolver<Maybe<ResolversTypes['WishlistOutput']>, ParentType, ContextType>;
};

export type ReCaptchaConfigurationV3Resolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ReCaptchaConfigurationV3'] = ResolversParentTypes['ReCaptchaConfigurationV3']> = {
  badge_position?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  failure_message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  forms?: Resolver<Array<Maybe<ResolversTypes['ReCaptchaFormEnum']>>, ParentType, ContextType>;
  language_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minimum_score?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  website_key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RedirectUrlsResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['RedirectUrls'] = ResolversParentTypes['RedirectUrls']> = {
  cart_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  checkout_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  embedded_checkout_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegionResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['Region'] = ResolversParentTypes['Region']> = {
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReleaseDateResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ReleaseDate'] = ResolversParentTypes['ReleaseDate']> = {
  utc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RemoveCouponFromCartOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['RemoveCouponFromCartOutput'] = ResolversParentTypes['RemoveCouponFromCartOutput']> = {
  cart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RemoveGiftCardFromCartOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['RemoveGiftCardFromCartOutput'] = ResolversParentTypes['RemoveGiftCardFromCartOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RemoveGiftRegistryItemsOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['RemoveGiftRegistryItemsOutput'] = ResolversParentTypes['RemoveGiftRegistryItemsOutput']> = {
  gift_registry?: Resolver<Maybe<ResolversTypes['GiftRegistry']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RemoveGiftRegistryOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['RemoveGiftRegistryOutput'] = ResolversParentTypes['RemoveGiftRegistryOutput']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RemoveGiftRegistryRegistrantsOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['RemoveGiftRegistryRegistrantsOutput'] = ResolversParentTypes['RemoveGiftRegistryRegistrantsOutput']> = {
  gift_registry?: Resolver<Maybe<ResolversTypes['GiftRegistry']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RemoveItemFromCartOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['RemoveItemFromCartOutput'] = ResolversParentTypes['RemoveItemFromCartOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RemoveProductsFromWishlistOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['RemoveProductsFromWishlistOutput'] = ResolversParentTypes['RemoveProductsFromWishlistOutput']> = {
  user_errors?: Resolver<Array<Maybe<ResolversTypes['WishListUserInputError']>>, ParentType, ContextType>;
  wishlist?: Resolver<ResolversTypes['Wishlist'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RemoveReturnTrackingOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['RemoveReturnTrackingOutput'] = ResolversParentTypes['RemoveReturnTrackingOutput']> = {
  return?: Resolver<Maybe<ResolversTypes['Return']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RemoveRewardPointsFromCartOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['RemoveRewardPointsFromCartOutput'] = ResolversParentTypes['RemoveRewardPointsFromCartOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RemoveStoreCreditFromCartOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['RemoveStoreCreditFromCartOutput'] = ResolversParentTypes['RemoveStoreCreditFromCartOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReorderItemsOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ReorderItemsOutput'] = ResolversParentTypes['ReorderItemsOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  userInputErrors?: Resolver<Array<Maybe<ResolversTypes['CheckoutUserInputError']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RequestReturnOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['RequestReturnOutput'] = ResolversParentTypes['RequestReturnOutput']> = {
  return?: Resolver<Maybe<ResolversTypes['Return']>, ParentType, ContextType>;
  returns?: Resolver<Maybe<ResolversTypes['Returns']>, ParentType, ContextType, RequireFields<RequestReturnOutputReturnsArgs, 'currentPage' | 'pageSize'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReturnResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['Return'] = ResolversParentTypes['Return']> = {
  available_shipping_carriers?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReturnShippingCarrier']>>>, ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReturnComment']>>>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customer?: Resolver<ResolversTypes['ReturnCustomer'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReturnItem']>>>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['CustomerOrder']>, ParentType, ContextType>;
  shipping?: Resolver<Maybe<ResolversTypes['ReturnShipping']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['ReturnStatus']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReturnCommentResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ReturnComment'] = ResolversParentTypes['ReturnComment']> = {
  author_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReturnCustomAttributeResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ReturnCustomAttribute'] = ResolversParentTypes['ReturnCustomAttribute']> = {
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReturnCustomerResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ReturnCustomer'] = ResolversParentTypes['ReturnCustomer']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReturnItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ReturnItem'] = ResolversParentTypes['ReturnItem']> = {
  custom_attributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReturnCustomAttribute']>>>, ParentType, ContextType>;
  order_item?: Resolver<ResolversTypes['OrderItemInterface'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  request_quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ReturnItemStatus'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReturnShippingResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ReturnShipping'] = ResolversParentTypes['ReturnShipping']> = {
  address?: Resolver<Maybe<ResolversTypes['ReturnShippingAddress']>, ParentType, ContextType>;
  tracking?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReturnShippingTracking']>>>, ParentType, ContextType, Partial<ReturnShippingTrackingArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReturnShippingAddressResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ReturnShippingAddress'] = ResolversParentTypes['ReturnShippingAddress']> = {
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contact_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<ResolversTypes['Country'], ParentType, ContextType>;
  postcode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  region?: Resolver<ResolversTypes['Region'], ParentType, ContextType>;
  street?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  telephone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReturnShippingCarrierResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ReturnShippingCarrier'] = ResolversParentTypes['ReturnShippingCarrier']> = {
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReturnShippingTrackingResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ReturnShippingTracking'] = ResolversParentTypes['ReturnShippingTracking']> = {
  carrier?: Resolver<ResolversTypes['ReturnShippingCarrier'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['ReturnShippingTrackingStatus']>, ParentType, ContextType>;
  tracking_number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReturnShippingTrackingStatusResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ReturnShippingTrackingStatus'] = ResolversParentTypes['ReturnShippingTrackingStatus']> = {
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ReturnShippingTrackingStatusType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReturnsResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['Returns'] = ResolversParentTypes['Returns']> = {
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Return']>>>, ParentType, ContextType>;
  page_info?: Resolver<Maybe<ResolversTypes['SearchResultPageInfo']>, ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RevokeCustomerTokenOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['RevokeCustomerTokenOutput'] = ResolversParentTypes['RevokeCustomerTokenOutput']> = {
  result?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RewardPointsResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['RewardPoints'] = ResolversParentTypes['RewardPoints']> = {
  balance?: Resolver<Maybe<ResolversTypes['RewardPointsAmount']>, ParentType, ContextType>;
  balance_history?: Resolver<Maybe<Array<Maybe<ResolversTypes['RewardPointsBalanceHistoryItem']>>>, ParentType, ContextType>;
  exchange_rates?: Resolver<Maybe<ResolversTypes['RewardPointsExchangeRates']>, ParentType, ContextType>;
  subscription_status?: Resolver<Maybe<ResolversTypes['RewardPointsSubscriptionStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RewardPointsAmountResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['RewardPointsAmount'] = ResolversParentTypes['RewardPointsAmount']> = {
  money?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  points?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RewardPointsBalanceHistoryItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['RewardPointsBalanceHistoryItem'] = ResolversParentTypes['RewardPointsBalanceHistoryItem']> = {
  balance?: Resolver<Maybe<ResolversTypes['RewardPointsAmount']>, ParentType, ContextType>;
  change_reason?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  points_change?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RewardPointsExchangeRatesResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['RewardPointsExchangeRates'] = ResolversParentTypes['RewardPointsExchangeRates']> = {
  earning?: Resolver<Maybe<ResolversTypes['RewardPointsRate']>, ParentType, ContextType>;
  redemption?: Resolver<Maybe<ResolversTypes['RewardPointsRate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RewardPointsRateResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['RewardPointsRate'] = ResolversParentTypes['RewardPointsRate']> = {
  currency_amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  points?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RewardPointsSubscriptionStatusResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['RewardPointsSubscriptionStatus'] = ResolversParentTypes['RewardPointsSubscriptionStatus']> = {
  balance_updates?: Resolver<ResolversTypes['RewardPointsSubscriptionStatusesEnum'], ParentType, ContextType>;
  points_expiration_notifications?: Resolver<ResolversTypes['RewardPointsSubscriptionStatusesEnum'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoutableInterfaceResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['RoutableInterface'] = ResolversParentTypes['RoutableInterface']> = {
  __resolveType: TypeResolveFn<'BundleProduct' | 'CategoryTree' | 'CmsPage' | 'ConfigurableProduct' | 'DownloadableProduct' | 'GiftCardProduct' | 'GroupedProduct' | 'SimpleProduct' | 'VirtualProduct', ParentType, ContextType>;
  redirect_code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relative_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
};

export type SalesCommentItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['SalesCommentItem'] = ResolversParentTypes['SalesCommentItem']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SalesItemInterfaceResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['SalesItemInterface'] = ResolversParentTypes['SalesItemInterface']> = {
  gift_message?: Resolver<Maybe<ResolversTypes['GiftMessage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchResultPageInfoResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['SearchResultPageInfo'] = ResolversParentTypes['SearchResultPageInfo']> = {
  current_page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  page_size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total_pages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchSuggestionResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['SearchSuggestion'] = ResolversParentTypes['SearchSuggestion']> = {
  search?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SelectableInputTypeInterfaceResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['SelectableInputTypeInterface'] = ResolversParentTypes['SelectableInputTypeInterface']> = {
  __resolveType: TypeResolveFn<'UiAttributeTypeBoolean' | 'UiAttributeTypeMultiSelect' | 'UiAttributeTypeSelect', ParentType, ContextType>;
  attribute_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['AttributeOptionInterface']>>>, ParentType, ContextType>;
};

export type SelectedAttributeOptionResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['SelectedAttributeOption'] = ResolversParentTypes['SelectedAttributeOption']> = {
  attribute_option?: Resolver<Maybe<Array<Maybe<ResolversTypes['AttributeOptionInterface']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SelectedBundleOptionResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['SelectedBundleOption'] = ResolversParentTypes['SelectedBundleOption']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  values?: Resolver<Array<Maybe<ResolversTypes['SelectedBundleOptionValue']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SelectedBundleOptionValueResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['SelectedBundleOptionValue'] = ResolversParentTypes['SelectedBundleOptionValue']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SelectedConfigurableOptionResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['SelectedConfigurableOption'] = ResolversParentTypes['SelectedConfigurableOption']> = {
  configurable_product_option_uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  configurable_product_option_value_uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  option_label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  value_label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SelectedCustomizableOptionResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['SelectedCustomizableOption'] = ResolversParentTypes['SelectedCustomizableOption']> = {
  customizable_option_uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  is_required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sort_order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  values?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOptionValue']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SelectedCustomizableOptionValueResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['SelectedCustomizableOptionValue'] = ResolversParentTypes['SelectedCustomizableOptionValue']> = {
  customizable_option_value_uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['CartItemSelectedOptionValuePrice'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SelectedPaymentMethodResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['SelectedPaymentMethod'] = ResolversParentTypes['SelectedPaymentMethod']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  purchase_order_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SelectedShippingMethodResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['SelectedShippingMethod'] = ResolversParentTypes['SelectedShippingMethod']> = {
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  base_amount?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  carrier_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  carrier_title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  method_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  method_title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price_excl_tax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  price_incl_tax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SendEmailToFriendOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['SendEmailToFriendOutput'] = ResolversParentTypes['SendEmailToFriendOutput']> = {
  recipients?: Resolver<Maybe<Array<Maybe<ResolversTypes['SendEmailToFriendRecipient']>>>, ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes['SendEmailToFriendSender']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SendEmailToFriendRecipientResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['SendEmailToFriendRecipient'] = ResolversParentTypes['SendEmailToFriendRecipient']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SendEmailToFriendSenderResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['SendEmailToFriendSender'] = ResolversParentTypes['SendEmailToFriendSender']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SendFriendConfigurationResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['SendFriendConfiguration'] = ResolversParentTypes['SendFriendConfiguration']> = {
  enabled_for_customers?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  enabled_for_guests?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetBillingAddressOnCartOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['SetBillingAddressOnCartOutput'] = ResolversParentTypes['SetBillingAddressOnCartOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetGiftOptionsOnCartOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['SetGiftOptionsOnCartOutput'] = ResolversParentTypes['SetGiftOptionsOnCartOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetGuestEmailOnCartOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['SetGuestEmailOnCartOutput'] = ResolversParentTypes['SetGuestEmailOnCartOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetPaymentMethodOnCartOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['SetPaymentMethodOnCartOutput'] = ResolversParentTypes['SetPaymentMethodOnCartOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetShippingAddressesOnCartOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['SetShippingAddressesOnCartOutput'] = ResolversParentTypes['SetShippingAddressesOnCartOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetShippingMethodsOnCartOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['SetShippingMethodsOnCartOutput'] = ResolversParentTypes['SetShippingMethodsOnCartOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShareGiftRegistryOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ShareGiftRegistryOutput'] = ResolversParentTypes['ShareGiftRegistryOutput']> = {
  is_shared?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShipmentItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ShipmentItem'] = ResolversParentTypes['ShipmentItem']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity_shipped?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShipmentItemInterfaceResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ShipmentItemInterface'] = ResolversParentTypes['ShipmentItemInterface']> = {
  __resolveType: TypeResolveFn<'BundleShipmentItem' | 'GiftCardShipmentItem' | 'ShipmentItem', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity_shipped?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
};

export type ShipmentTrackingResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ShipmentTracking'] = ResolversParentTypes['ShipmentTracking']> = {
  carrier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShippingCartAddressResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ShippingCartAddress'] = ResolversParentTypes['ShippingCartAddress']> = {
  available_shipping_methods?: Resolver<Maybe<Array<Maybe<ResolversTypes['AvailableShippingMethod']>>>, ParentType, ContextType>;
  cart_items?: Resolver<Maybe<Array<Maybe<ResolversTypes['CartItemQuantity']>>>, ParentType, ContextType>;
  cart_items_v2?: Resolver<Maybe<Array<Maybe<ResolversTypes['CartItemInterface']>>>, ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<ResolversTypes['CartAddressCountry'], ParentType, ContextType>;
  customer_notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deliveryInstructions?: Resolver<Maybe<ResolversTypes['DeliveryInstructions']>, ParentType, ContextType>;
  firstname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  items_weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pickup_location_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['CartAddressRegion']>, ParentType, ContextType>;
  selected_shipping_method?: Resolver<Maybe<ResolversTypes['SelectedShippingMethod']>, ParentType, ContextType>;
  street?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  telephone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vat_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShippingDiscountResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ShippingDiscount'] = ResolversParentTypes['ShippingDiscount']> = {
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShippingHandlingResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['ShippingHandling'] = ResolversParentTypes['ShippingHandling']> = {
  amount_excluding_tax?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  amount_including_tax?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['ShippingDiscount']>>>, ParentType, ContextType>;
  taxes?: Resolver<Maybe<Array<Maybe<ResolversTypes['TaxItem']>>>, ParentType, ContextType>;
  total_amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SimpleCartItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['SimpleCartItem'] = ResolversParentTypes['SimpleCartItem']> = {
  available_gift_wrapping?: Resolver<Array<Maybe<ResolversTypes['GiftWrapping']>>, ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['CartItemError']>>>, ParentType, ContextType>;
  gift_message?: Resolver<Maybe<ResolversTypes['GiftMessage']>, ParentType, ContextType>;
  gift_wrapping?: Resolver<Maybe<ResolversTypes['GiftWrapping']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prices?: Resolver<Maybe<ResolversTypes['CartItemPrices']>, ParentType, ContextType>;
  product?: Resolver<ResolversTypes['ProductInterface'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SimpleProductResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['SimpleProduct'] = ResolversParentTypes['SimpleProduct']> = {
  activity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribute_set_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  availability?: Resolver<Maybe<ResolversTypes['ProductAvailability']>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryInterface']>>>, ParentType, ContextType>;
  category_gear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  climate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_of_manufacture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  crosssell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  custom_attributes?: Resolver<Array<Maybe<ResolversTypes['CustomAttribute']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  eco_collection?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  erin_recommends?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  features_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  format?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_message_available?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  is_returnable?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  marketplacer_brand?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  marketplacer_seller?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  material?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryInterface']>>>, ParentType, ContextType>;
  media_gallery_entries?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryEntry']>>>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_keyword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  new_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  only_x_left_in_stock?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomizableOptionInterface']>>>, ParentType, ContextType>;
  options_container?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  performance_fabric?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['ProductPrices']>, ParentType, ContextType>;
  price_range?: Resolver<ResolversTypes['PriceRange'], ParentType, ContextType>;
  price_tiers?: Resolver<Maybe<Array<Maybe<ResolversTypes['TierPrice']>>>, ParentType, ContextType>;
  product_links?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductLinksInterface']>>>, ParentType, ContextType>;
  purpose?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rating_summary?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  redirect_code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  related_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  relative_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  review_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reviews?: Resolver<ResolversTypes['ProductReviews'], ParentType, ContextType, RequireFields<SimpleProductReviewsArgs, 'currentPage' | 'pageSize'>>;
  sale?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  short_description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sleeve?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  small_image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  special_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  special_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  special_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  staged?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  stock_status?: Resolver<Maybe<ResolversTypes['ProductStockStatus']>, ParentType, ContextType>;
  strap_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_bottom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_general?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  swatch_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  tier_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tier_prices?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductTierPrices']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  type_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upsell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_rewrites?: Resolver<Maybe<Array<Maybe<ResolversTypes['UrlRewrite']>>>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  websites?: Resolver<Maybe<Array<Maybe<ResolversTypes['Website']>>>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SimpleWishlistItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['SimpleWishlistItem'] = ResolversParentTypes['SimpleWishlistItem']> = {
  added_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SocialLinkResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['SocialLink'] = ResolversParentTypes['SocialLink']> = {
  destination?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SortFieldResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['SortField'] = ResolversParentTypes['SortField']> = {
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SortFieldsResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['SortFields'] = ResolversParentTypes['SortFields']> = {
  default?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['SortField']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StoreConfigResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['StoreConfig'] = ResolversParentTypes['StoreConfig']> = {
  absolute_footer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  adyen_checkout_frontend_region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  adyen_client_key_live?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  adyen_client_key_test?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  adyen_demo_mode?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  adyen_has_holder_name?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  adyen_holder_name_required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  adyen_oneclick_card_mode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  adyen_return_path_error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  adyen_title_renderer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  afterpaypay_active?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  afterpaypay_api_enable_cta_cart_page?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  afterpaypay_api_enable_cta_mini_cart?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  afterpaypay_api_enable_cta_product_page?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  afterpaypay_api_max_order_total?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  afterpaypay_api_min_order_total?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  afterpaypay_api_mode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  afterpaypay_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  allow_gift_receipt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  allow_gift_wrapping_on_order?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  allow_gift_wrapping_on_order_items?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  allow_guests_to_write_product_reviews?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  allow_items?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  allow_order?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  allow_printed_card?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  autocomplete_on_storefront?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  base_currency_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  base_link_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  base_media_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  base_static_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  base_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  braintree_cc_vault_active?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  captcha_public_key_v2_checkbox?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  captcha_public_key_v2_invisible?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  captcha_public_key_v3_invisible?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  captcha_type_contact?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  captcha_type_customer_create?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  captcha_type_customer_edit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  captcha_type_customer_forgot_password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  captcha_type_customer_login?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  captcha_type_newsletter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  captcha_type_place_order?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  captcha_type_product_review?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  captcha_type_sendfriend?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  captcha_type_wishlist_sharing?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cart_gift_wrapping?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cart_printed_card?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  catalog_default_sort_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category_fixed_product_tax_display_setting?: Resolver<Maybe<ResolversTypes['FixedProductTaxDisplaySettings']>, ParentType, ContextType>;
  category_url_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  check_money_order_enable_for_specific_countries?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  check_money_order_enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  check_money_order_make_check_payable_to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  check_money_order_max_order_total?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  check_money_order_min_order_total?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  check_money_order_new_order_status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  check_money_order_payment_from_specific_countries?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  check_money_order_send_check_to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  check_money_order_sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  check_money_order_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cms_home_page?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cms_no_cookies?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cms_no_route?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  configurable_thumbnail_source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contact_enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  copyright?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_display_currency_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_keywords?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  demonotice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  enable_multiple_wishlists?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  front?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  googleMapsAPIKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  grid_per_page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  grid_per_page_values?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  head_includes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  head_shortcut_icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  header_logo_src?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  is_default_store?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_default_store_group?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  list_mode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  list_per_page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  list_per_page_values?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  logo_alt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  logo_height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  logo_width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  magento_reward_general_is_enabled?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  magento_reward_general_is_enabled_on_front?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  magento_reward_general_min_points_balance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  magento_reward_general_publish_history?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  magento_reward_points_invitation_customer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  magento_reward_points_invitation_customer_limit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  magento_reward_points_invitation_order?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  magento_reward_points_invitation_order_limit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  magento_reward_points_newsletter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  magento_reward_points_order?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  magento_reward_points_register?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  magento_reward_points_review?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  magento_reward_points_review_limit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  magento_wishlist_general_is_enabled?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maximum_number_of_wishlists?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minimum_password_length?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  newsletter_enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  no_route?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payment_payflowpro_cc_vault_active?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paypal_express?: Resolver<Maybe<ResolversTypes['PaypalExpressConfig']>, ParentType, ContextType>;
  plpAddToCartEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  plpQtyModifierEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  printed_card_price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_fixed_product_tax_display_setting?: Resolver<Maybe<ResolversTypes['FixedProductTaxDisplaySettings']>, ParentType, ContextType>;
  product_reviews_enabled?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_url_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pwa_base_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required_character_classes_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  returns_enabled?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  root_category_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  root_category_uid?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  sales_fixed_product_tax_display_setting?: Resolver<Maybe<ResolversTypes['FixedProductTaxDisplaySettings']>, ParentType, ContextType>;
  sales_gift_wrapping?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sales_printed_card?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secure_base_link_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secure_base_media_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secure_base_static_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secure_base_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  send_friend?: Resolver<Maybe<ResolversTypes['SendFriendConfiguration']>, ParentType, ContextType>;
  show_cms_breadcrumbs?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  store_code?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  store_group_code?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  store_group_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  store_information?: Resolver<Maybe<ResolversTypes['StoreInformation']>, ParentType, ContextType>;
  store_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  store_phone_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  store_sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title_prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title_separator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  use_store_in_url?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  website_code?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  website_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  website_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  weight_unit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  welcome?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zero_subtotal_enable_for_specific_countries?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  zero_subtotal_enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  zero_subtotal_new_order_status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zero_subtotal_payment_action?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zero_subtotal_payment_from_specific_countries?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zero_subtotal_sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  zero_subtotal_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StoreInformationResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['StoreInformation'] = ResolversParentTypes['StoreInformation']> = {
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hours?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  merchant_vat_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  street_line1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  street_line2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StoreLabelsResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['StoreLabels'] = ResolversParentTypes['StoreLabels']> = {
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  store_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StoreLocationResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['StoreLocation'] = ResolversParentTypes['StoreLocation']> = {
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contact_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  distance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pickup_location_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  street?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StoreLocationsResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['StoreLocations'] = ResolversParentTypes['StoreLocations']> = {
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['StoreLocation']>>>, ParentType, ContextType>;
  page_info?: Resolver<Maybe<ResolversTypes['SearchResultPageInfo']>, ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StorefrontPropertiesResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['StorefrontProperties'] = ResolversParentTypes['StorefrontProperties']> = {
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  use_in_layered_navigation?: Resolver<Maybe<ResolversTypes['UseInLayeredNavigationOptions']>, ParentType, ContextType>;
  use_in_product_listing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  use_in_search_results_layered_navigation?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  visible_on_catalog_pages?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscribeEmailToNewsletterOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['SubscribeEmailToNewsletterOutput'] = ResolversParentTypes['SubscribeEmailToNewsletterOutput']> = {
  status?: Resolver<Maybe<ResolversTypes['SubscriptionStatusesEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SwatchDataResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['SwatchData'] = ResolversParentTypes['SwatchData']> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SwatchDataInterfaceResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['SwatchDataInterface'] = ResolversParentTypes['SwatchDataInterface']> = {
  __resolveType: TypeResolveFn<'ColorSwatchData' | 'ImageSwatchData' | 'TextSwatchData', ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type SwatchLayerFilterItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['SwatchLayerFilterItem'] = ResolversParentTypes['SwatchLayerFilterItem']> = {
  items_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  swatch_data?: Resolver<Maybe<ResolversTypes['SwatchData']>, ParentType, ContextType>;
  value_string?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SwatchLayerFilterItemInterfaceResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['SwatchLayerFilterItemInterface'] = ResolversParentTypes['SwatchLayerFilterItemInterface']> = {
  __resolveType: TypeResolveFn<'SwatchLayerFilterItem', ParentType, ContextType>;
  swatch_data?: Resolver<Maybe<ResolversTypes['SwatchData']>, ParentType, ContextType>;
};

export type TaxItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['TaxItem'] = ResolversParentTypes['TaxItem']> = {
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  rate?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TextSwatchDataResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['TextSwatchData'] = ResolversParentTypes['TextSwatchData']> = {
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TierPriceResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['TierPrice'] = ResolversParentTypes['TierPrice']> = {
  discount?: Resolver<Maybe<ResolversTypes['ProductDiscount']>, ParentType, ContextType>;
  final_price?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UiAttributeTypeAnyResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['UiAttributeTypeAny'] = ResolversParentTypes['UiAttributeTypeAny']> = {
  is_html_allowed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ui_input_type?: Resolver<Maybe<ResolversTypes['UiInputTypeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UiAttributeTypeBooleanResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['UiAttributeTypeBoolean'] = ResolversParentTypes['UiAttributeTypeBoolean']> = {
  attribute_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['AttributeOptionInterface']>>>, ParentType, ContextType>;
  is_html_allowed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ui_input_type?: Resolver<Maybe<ResolversTypes['UiInputTypeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UiAttributeTypeFixedProductTaxResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['UiAttributeTypeFixedProductTax'] = ResolversParentTypes['UiAttributeTypeFixedProductTax']> = {
  is_html_allowed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ui_input_type?: Resolver<Maybe<ResolversTypes['UiInputTypeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UiAttributeTypeMultiSelectResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['UiAttributeTypeMultiSelect'] = ResolversParentTypes['UiAttributeTypeMultiSelect']> = {
  attribute_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['AttributeOptionInterface']>>>, ParentType, ContextType>;
  is_html_allowed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ui_input_type?: Resolver<Maybe<ResolversTypes['UiInputTypeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UiAttributeTypePageBuilderResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['UiAttributeTypePageBuilder'] = ResolversParentTypes['UiAttributeTypePageBuilder']> = {
  is_html_allowed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ui_input_type?: Resolver<Maybe<ResolversTypes['UiInputTypeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UiAttributeTypeSelectResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['UiAttributeTypeSelect'] = ResolversParentTypes['UiAttributeTypeSelect']> = {
  attribute_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['AttributeOptionInterface']>>>, ParentType, ContextType>;
  is_html_allowed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ui_input_type?: Resolver<Maybe<ResolversTypes['UiInputTypeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UiAttributeTypeTextEditorResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['UiAttributeTypeTextEditor'] = ResolversParentTypes['UiAttributeTypeTextEditor']> = {
  is_html_allowed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ui_input_type?: Resolver<Maybe<ResolversTypes['UiInputTypeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UiAttributeTypeTextareaResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['UiAttributeTypeTextarea'] = ResolversParentTypes['UiAttributeTypeTextarea']> = {
  is_html_allowed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ui_input_type?: Resolver<Maybe<ResolversTypes['UiInputTypeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UiInputTypeInterfaceResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['UiInputTypeInterface'] = ResolversParentTypes['UiInputTypeInterface']> = {
  __resolveType: TypeResolveFn<'UiAttributeTypeAny' | 'UiAttributeTypeBoolean' | 'UiAttributeTypeFixedProductTax' | 'UiAttributeTypeMultiSelect' | 'UiAttributeTypePageBuilder' | 'UiAttributeTypeSelect' | 'UiAttributeTypeTextEditor' | 'UiAttributeTypeTextarea', ParentType, ContextType>;
  is_html_allowed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ui_input_type?: Resolver<Maybe<ResolversTypes['UiInputTypeEnum']>, ParentType, ContextType>;
};

export type UpdateCartItemsOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['UpdateCartItemsOutput'] = ResolversParentTypes['UpdateCartItemsOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateGiftRegistryItemsOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['UpdateGiftRegistryItemsOutput'] = ResolversParentTypes['UpdateGiftRegistryItemsOutput']> = {
  gift_registry?: Resolver<Maybe<ResolversTypes['GiftRegistry']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateGiftRegistryOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['UpdateGiftRegistryOutput'] = ResolversParentTypes['UpdateGiftRegistryOutput']> = {
  gift_registry?: Resolver<Maybe<ResolversTypes['GiftRegistry']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateGiftRegistryRegistrantsOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['UpdateGiftRegistryRegistrantsOutput'] = ResolversParentTypes['UpdateGiftRegistryRegistrantsOutput']> = {
  gift_registry?: Resolver<Maybe<ResolversTypes['GiftRegistry']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateProductsInWishlistOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['UpdateProductsInWishlistOutput'] = ResolversParentTypes['UpdateProductsInWishlistOutput']> = {
  user_errors?: Resolver<Array<Maybe<ResolversTypes['WishListUserInputError']>>, ParentType, ContextType>;
  wishlist?: Resolver<ResolversTypes['Wishlist'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateWishlistOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['UpdateWishlistOutput'] = ResolversParentTypes['UpdateWishlistOutput']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  visibility?: Resolver<ResolversTypes['WishlistVisibilityEnum'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UrlRewriteResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['UrlRewrite'] = ResolversParentTypes['UrlRewrite']> = {
  parameters?: Resolver<Maybe<Array<Maybe<ResolversTypes['HttpQueryParameter']>>>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VirtualCartItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['VirtualCartItem'] = ResolversParentTypes['VirtualCartItem']> = {
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['CartItemError']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prices?: Resolver<Maybe<ResolversTypes['CartItemPrices']>, ParentType, ContextType>;
  product?: Resolver<ResolversTypes['ProductInterface'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VirtualProductResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['VirtualProduct'] = ResolversParentTypes['VirtualProduct']> = {
  activity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribute_set_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  availability?: Resolver<Maybe<ResolversTypes['ProductAvailability']>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryInterface']>>>, ParentType, ContextType>;
  category_gear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  climate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_of_manufacture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  crosssell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  custom_attributes?: Resolver<Array<Maybe<ResolversTypes['CustomAttribute']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  eco_collection?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  erin_recommends?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  features_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  format?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_message_available?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  is_returnable?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  marketplacer_brand?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  marketplacer_seller?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  material?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryInterface']>>>, ParentType, ContextType>;
  media_gallery_entries?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryEntry']>>>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_keyword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  new_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  only_x_left_in_stock?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomizableOptionInterface']>>>, ParentType, ContextType>;
  options_container?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  performance_fabric?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['ProductPrices']>, ParentType, ContextType>;
  price_range?: Resolver<ResolversTypes['PriceRange'], ParentType, ContextType>;
  price_tiers?: Resolver<Maybe<Array<Maybe<ResolversTypes['TierPrice']>>>, ParentType, ContextType>;
  product_links?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductLinksInterface']>>>, ParentType, ContextType>;
  purpose?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rating_summary?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  redirect_code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  related_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  relative_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  review_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reviews?: Resolver<ResolversTypes['ProductReviews'], ParentType, ContextType, RequireFields<VirtualProductReviewsArgs, 'currentPage' | 'pageSize'>>;
  sale?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  short_description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sleeve?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  small_image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  special_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  special_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  special_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  staged?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  stock_status?: Resolver<Maybe<ResolversTypes['ProductStockStatus']>, ParentType, ContextType>;
  strap_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_bags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_bottom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style_general?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  swatch_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  tier_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tier_prices?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductTierPrices']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  type_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upsell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_rewrites?: Resolver<Maybe<Array<Maybe<ResolversTypes['UrlRewrite']>>>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  websites?: Resolver<Maybe<Array<Maybe<ResolversTypes['Website']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VirtualWishlistItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['VirtualWishlistItem'] = ResolversParentTypes['VirtualWishlistItem']> = {
  added_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WebsiteResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['Website'] = ResolversParentTypes['Website']> = {
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_group_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  is_default?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WishListUserInputErrorResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['WishListUserInputError'] = ResolversParentTypes['WishListUserInputError']> = {
  code?: Resolver<ResolversTypes['WishListUserInputErrorType'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WishlistResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['Wishlist'] = ResolversParentTypes['Wishlist']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['WishlistItem']>>>, ParentType, ContextType>;
  items_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  items_v2?: Resolver<Maybe<ResolversTypes['WishlistItems']>, ParentType, ContextType, RequireFields<WishlistItems_V2Args, 'currentPage' | 'pageSize'>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sharing_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  visibility?: Resolver<ResolversTypes['WishlistVisibilityEnum'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WishlistCartUserInputErrorResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['WishlistCartUserInputError'] = ResolversParentTypes['WishlistCartUserInputError']> = {
  code?: Resolver<ResolversTypes['WishlistCartUserInputErrorType'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  wishlistId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  wishlistItemId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WishlistItemResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['WishlistItem'] = ResolversParentTypes['WishlistItem']> = {
  added_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  qty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WishlistItemInterfaceResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['WishlistItemInterface'] = ResolversParentTypes['WishlistItemInterface']> = {
  __resolveType: TypeResolveFn<'BundleWishlistItem' | 'ConfigurableWishlistItem' | 'DownloadableWishlistItem' | 'GiftCardWishlistItem' | 'GroupedProductWishlistItem' | 'SimpleWishlistItem' | 'VirtualWishlistItem', ParentType, ContextType>;
  added_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
};

export type WishlistItemsResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['WishlistItems'] = ResolversParentTypes['WishlistItems']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['WishlistItemInterface']>>, ParentType, ContextType>;
  page_info?: Resolver<Maybe<ResolversTypes['SearchResultPageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WishlistOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['WishlistOutput'] = ResolversParentTypes['WishlistOutput']> = {
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['WishlistItem']>>>, ParentType, ContextType>;
  items_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sharing_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AfterpayConfigOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['afterpayConfigOutput'] = ResolversParentTypes['afterpayConfigOutput']> = {
  allowed_currencies?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  is_enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_enabled_cta_checkout?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_enabled_cta_minicart?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_enabled_cta_pdp?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  max_amount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  min_amount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateAfterpayCheckoutOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['createAfterpayCheckoutOutput'] = ResolversParentTypes['createAfterpayCheckoutOutput']> = {
  afterpay_expires?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  afterpay_redirectCheckoutUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  afterpay_token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetCustomerTokenBySecretCodeOutputResolvers<ContextType = GraphQLModules.ModuleContext, ParentType extends ResolversParentTypes['getCustomerTokenBySecretCodeOutput'] = ResolversParentTypes['getCustomerTokenBySecretCodeOutput']> = {
  customer_token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = GraphQLModules.ModuleContext> = {
  AddBundleProductsToCartOutput?: AddBundleProductsToCartOutputResolvers<ContextType>;
  AddConfigurableProductsToCartOutput?: AddConfigurableProductsToCartOutputResolvers<ContextType>;
  AddDownloadableProductsToCartOutput?: AddDownloadableProductsToCartOutputResolvers<ContextType>;
  AddGiftRegistryRegistrantsOutput?: AddGiftRegistryRegistrantsOutputResolvers<ContextType>;
  AddProductsToCartOutput?: AddProductsToCartOutputResolvers<ContextType>;
  AddProductsToWishlistOutput?: AddProductsToWishlistOutputResolvers<ContextType>;
  AddReturnCommentOutput?: AddReturnCommentOutputResolvers<ContextType>;
  AddReturnTrackingOutput?: AddReturnTrackingOutputResolvers<ContextType>;
  AddSimpleProductsToCartOutput?: AddSimpleProductsToCartOutputResolvers<ContextType>;
  AddVirtualProductsToCartOutput?: AddVirtualProductsToCartOutputResolvers<ContextType>;
  AddWishlistItemsToCartOutput?: AddWishlistItemsToCartOutputResolvers<ContextType>;
  AdyenPaymentMethodIcon?: AdyenPaymentMethodIconResolvers<ContextType>;
  AdyenPaymentMethods?: AdyenPaymentMethodsResolvers<ContextType>;
  AdyenPaymentMethodsArray?: AdyenPaymentMethodsArrayResolvers<ContextType>;
  AdyenPaymentMethodsConfiguration?: AdyenPaymentMethodsConfigurationResolvers<ContextType>;
  AdyenPaymentMethodsDetails?: AdyenPaymentMethodsDetailsResolvers<ContextType>;
  AdyenPaymentMethodsDetailsItems?: AdyenPaymentMethodsDetailsItemsResolvers<ContextType>;
  AdyenPaymentMethodsExtraDetails?: AdyenPaymentMethodsExtraDetailsResolvers<ContextType>;
  AdyenPaymentMethodsExtraDetailsConfiguration?: AdyenPaymentMethodsExtraDetailsConfigurationResolvers<ContextType>;
  AdyenPaymentMethodsIssuers?: AdyenPaymentMethodsIssuersResolvers<ContextType>;
  AdyenPaymentMethodsResponse?: AdyenPaymentMethodsResponseResolvers<ContextType>;
  AdyenPaymentStatus?: AdyenPaymentStatusResolvers<ContextType>;
  AdyenStoredPaymentMethodsArray?: AdyenStoredPaymentMethodsArrayResolvers<ContextType>;
  Aggregation?: AggregationResolvers<ContextType>;
  AggregationOption?: AggregationOptionResolvers<ContextType>;
  AggregationOptionInterface?: AggregationOptionInterfaceResolvers<ContextType>;
  AppliedCoupon?: AppliedCouponResolvers<ContextType>;
  AppliedGiftCard?: AppliedGiftCardResolvers<ContextType>;
  AppliedStoreCredit?: AppliedStoreCreditResolvers<ContextType>;
  ApplyCouponToCartOutput?: ApplyCouponToCartOutputResolvers<ContextType>;
  ApplyGiftCardToCartOutput?: ApplyGiftCardToCartOutputResolvers<ContextType>;
  ApplyRewardPointsToCartOutput?: ApplyRewardPointsToCartOutputResolvers<ContextType>;
  ApplyStoreCreditToCartOutput?: ApplyStoreCreditToCartOutputResolvers<ContextType>;
  AssignCompareListToCustomerOutput?: AssignCompareListToCustomerOutputResolvers<ContextType>;
  Attribute?: AttributeResolvers<ContextType>;
  AttributeMetadataInterface?: AttributeMetadataInterfaceResolvers<ContextType>;
  AttributeOption?: AttributeOptionResolvers<ContextType>;
  AttributeOptionInterface?: AttributeOptionInterfaceResolvers<ContextType>;
  AttributeOptions?: AttributeOptionsResolvers<ContextType>;
  AttributeOptionsInterface?: AttributeOptionsInterfaceResolvers<ContextType>;
  AttributesMetadata?: AttributesMetadataResolvers<ContextType>;
  AvailablePaymentMethod?: AvailablePaymentMethodResolvers<ContextType>;
  AvailableShippingMethod?: AvailableShippingMethodResolvers<ContextType>;
  BillingCartAddress?: BillingCartAddressResolvers<ContextType>;
  Breadcrumb?: BreadcrumbResolvers<ContextType>;
  BundleCartItem?: BundleCartItemResolvers<ContextType>;
  BundleCreditMemoItem?: BundleCreditMemoItemResolvers<ContextType>;
  BundleInvoiceItem?: BundleInvoiceItemResolvers<ContextType>;
  BundleItem?: BundleItemResolvers<ContextType>;
  BundleItemOption?: BundleItemOptionResolvers<ContextType>;
  BundleOrderItem?: BundleOrderItemResolvers<ContextType>;
  BundleProduct?: BundleProductResolvers<ContextType>;
  BundleShipmentItem?: BundleShipmentItemResolvers<ContextType>;
  BundleWishlistItem?: BundleWishlistItemResolvers<ContextType>;
  Cart?: CartResolvers<ContextType>;
  CartAddressCountry?: CartAddressCountryResolvers<ContextType>;
  CartAddressInterface?: CartAddressInterfaceResolvers<ContextType>;
  CartAddressRegion?: CartAddressRegionResolvers<ContextType>;
  CartDiscount?: CartDiscountResolvers<ContextType>;
  CartItemError?: CartItemErrorResolvers<ContextType>;
  CartItemInterface?: CartItemInterfaceResolvers<ContextType>;
  CartItemPrices?: CartItemPricesResolvers<ContextType>;
  CartItemQuantity?: CartItemQuantityResolvers<ContextType>;
  CartItemSelectedOptionValuePrice?: CartItemSelectedOptionValuePriceResolvers<ContextType>;
  CartPrices?: CartPricesResolvers<ContextType>;
  CartTaxItem?: CartTaxItemResolvers<ContextType>;
  CartUserInputError?: CartUserInputErrorResolvers<ContextType>;
  CategoryInterface?: CategoryInterfaceResolvers<ContextType>;
  CategoryProducts?: CategoryProductsResolvers<ContextType>;
  CategoryResult?: CategoryResultResolvers<ContextType>;
  CategoryTree?: CategoryTreeResolvers<ContextType>;
  CheckoutAgreement?: CheckoutAgreementResolvers<ContextType>;
  CheckoutUserInputError?: CheckoutUserInputErrorResolvers<ContextType>;
  ClearCustomerCartOutput?: ClearCustomerCartOutputResolvers<ContextType>;
  CmsBlock?: CmsBlockResolvers<ContextType>;
  CmsBlocks?: CmsBlocksResolvers<ContextType>;
  CmsPage?: CmsPageResolvers<ContextType>;
  ColorSwatchData?: ColorSwatchDataResolvers<ContextType>;
  ComparableAttribute?: ComparableAttributeResolvers<ContextType>;
  ComparableItem?: ComparableItemResolvers<ContextType>;
  CompareList?: CompareListResolvers<ContextType>;
  ComplexTextValue?: ComplexTextValueResolvers<ContextType>;
  ConfigurableAttributeOption?: ConfigurableAttributeOptionResolvers<ContextType>;
  ConfigurableCartItem?: ConfigurableCartItemResolvers<ContextType>;
  ConfigurableOptionAvailableForSelection?: ConfigurableOptionAvailableForSelectionResolvers<ContextType>;
  ConfigurableProduct?: ConfigurableProductResolvers<ContextType>;
  ConfigurableProductOption?: ConfigurableProductOptionResolvers<ContextType>;
  ConfigurableProductOptionValue?: ConfigurableProductOptionValueResolvers<ContextType>;
  ConfigurableProductOptions?: ConfigurableProductOptionsResolvers<ContextType>;
  ConfigurableProductOptionsSelection?: ConfigurableProductOptionsSelectionResolvers<ContextType>;
  ConfigurableProductOptionsValues?: ConfigurableProductOptionsValuesResolvers<ContextType>;
  ConfigurableVariant?: ConfigurableVariantResolvers<ContextType>;
  ConfigurableWishlistItem?: ConfigurableWishlistItemResolvers<ContextType>;
  ContactUsOutput?: ContactUsOutputResolvers<ContextType>;
  CopyProductsBetweenWishlistsOutput?: CopyProductsBetweenWishlistsOutputResolvers<ContextType>;
  Country?: CountryResolvers<ContextType>;
  CreateCartRedirectUrls?: CreateCartRedirectUrlsResolvers<ContextType>;
  CreateGiftRegistryOutput?: CreateGiftRegistryOutputResolvers<ContextType>;
  CreatePayflowProTokenOutput?: CreatePayflowProTokenOutputResolvers<ContextType>;
  CreateProductReviewOutput?: CreateProductReviewOutputResolvers<ContextType>;
  CreateWishlistOutput?: CreateWishlistOutputResolvers<ContextType>;
  CreditMemo?: CreditMemoResolvers<ContextType>;
  CreditMemoItem?: CreditMemoItemResolvers<ContextType>;
  CreditMemoItemInterface?: CreditMemoItemInterfaceResolvers<ContextType>;
  CreditMemoTotal?: CreditMemoTotalResolvers<ContextType>;
  Currency?: CurrencyResolvers<ContextType>;
  CustomAttribute?: CustomAttributeResolvers<ContextType>;
  CustomAttributeMetadata?: CustomAttributeMetadataResolvers<ContextType>;
  Customer?: CustomerResolvers<ContextType>;
  CustomerAddress?: CustomerAddressResolvers<ContextType>;
  CustomerAddressAttribute?: CustomerAddressAttributeResolvers<ContextType>;
  CustomerAddressRegion?: CustomerAddressRegionResolvers<ContextType>;
  CustomerDownloadableProduct?: CustomerDownloadableProductResolvers<ContextType>;
  CustomerDownloadableProducts?: CustomerDownloadableProductsResolvers<ContextType>;
  CustomerOrder?: CustomerOrderResolvers<ContextType>;
  CustomerOrders?: CustomerOrdersResolvers<ContextType>;
  CustomerOutput?: CustomerOutputResolvers<ContextType>;
  CustomerPaymentTokens?: CustomerPaymentTokensResolvers<ContextType>;
  CustomerStoreCredit?: CustomerStoreCreditResolvers<ContextType>;
  CustomerStoreCreditHistory?: CustomerStoreCreditHistoryResolvers<ContextType>;
  CustomerStoreCreditHistoryItem?: CustomerStoreCreditHistoryItemResolvers<ContextType>;
  CustomerToken?: CustomerTokenResolvers<ContextType>;
  CustomizableAreaOption?: CustomizableAreaOptionResolvers<ContextType>;
  CustomizableAreaValue?: CustomizableAreaValueResolvers<ContextType>;
  CustomizableCheckboxOption?: CustomizableCheckboxOptionResolvers<ContextType>;
  CustomizableCheckboxValue?: CustomizableCheckboxValueResolvers<ContextType>;
  CustomizableDateOption?: CustomizableDateOptionResolvers<ContextType>;
  CustomizableDateValue?: CustomizableDateValueResolvers<ContextType>;
  CustomizableDropDownOption?: CustomizableDropDownOptionResolvers<ContextType>;
  CustomizableDropDownValue?: CustomizableDropDownValueResolvers<ContextType>;
  CustomizableFieldOption?: CustomizableFieldOptionResolvers<ContextType>;
  CustomizableFieldValue?: CustomizableFieldValueResolvers<ContextType>;
  CustomizableFileOption?: CustomizableFileOptionResolvers<ContextType>;
  CustomizableFileValue?: CustomizableFileValueResolvers<ContextType>;
  CustomizableMultipleOption?: CustomizableMultipleOptionResolvers<ContextType>;
  CustomizableMultipleValue?: CustomizableMultipleValueResolvers<ContextType>;
  CustomizableOptionInterface?: CustomizableOptionInterfaceResolvers<ContextType>;
  CustomizableProductInterface?: CustomizableProductInterfaceResolvers<ContextType>;
  CustomizableRadioOption?: CustomizableRadioOptionResolvers<ContextType>;
  CustomizableRadioValue?: CustomizableRadioValueResolvers<ContextType>;
  DeleteCompareListOutput?: DeleteCompareListOutputResolvers<ContextType>;
  DeletePaymentTokenOutput?: DeletePaymentTokenOutputResolvers<ContextType>;
  DeleteWishlistOutput?: DeleteWishlistOutputResolvers<ContextType>;
  DeliveryInstructions?: DeliveryInstructionsResolvers<ContextType>;
  Discount?: DiscountResolvers<ContextType>;
  DownloadableCartItem?: DownloadableCartItemResolvers<ContextType>;
  DownloadableCreditMemoItem?: DownloadableCreditMemoItemResolvers<ContextType>;
  DownloadableInvoiceItem?: DownloadableInvoiceItemResolvers<ContextType>;
  DownloadableItemsLinks?: DownloadableItemsLinksResolvers<ContextType>;
  DownloadableOrderItem?: DownloadableOrderItemResolvers<ContextType>;
  DownloadableProduct?: DownloadableProductResolvers<ContextType>;
  DownloadableProductLinks?: DownloadableProductLinksResolvers<ContextType>;
  DownloadableProductSamples?: DownloadableProductSamplesResolvers<ContextType>;
  DownloadableWishlistItem?: DownloadableWishlistItemResolvers<ContextType>;
  DynamicBlock?: DynamicBlockResolvers<ContextType>;
  DynamicBlocks?: DynamicBlocksResolvers<ContextType>;
  EnteredAttributeValue?: EnteredAttributeValueResolvers<ContextType>;
  EntityUrl?: EntityUrlResolvers<ContextType>;
  ErrorInterface?: ErrorInterfaceResolvers<ContextType>;
  ExchangeRate?: ExchangeRateResolvers<ContextType>;
  FixedProductTax?: FixedProductTaxResolvers<ContextType>;
  FreeShippingDetails?: FreeShippingDetailsResolvers<ContextType>;
  GenerateCustomerTokenAsAdminOutput?: GenerateCustomerTokenAsAdminOutputResolvers<ContextType>;
  GiftCardAccount?: GiftCardAccountResolvers<ContextType>;
  GiftCardAmounts?: GiftCardAmountsResolvers<ContextType>;
  GiftCardCartItem?: GiftCardCartItemResolvers<ContextType>;
  GiftCardCreditMemoItem?: GiftCardCreditMemoItemResolvers<ContextType>;
  GiftCardInvoiceItem?: GiftCardInvoiceItemResolvers<ContextType>;
  GiftCardItem?: GiftCardItemResolvers<ContextType>;
  GiftCardOptions?: GiftCardOptionsResolvers<ContextType>;
  GiftCardOrderItem?: GiftCardOrderItemResolvers<ContextType>;
  GiftCardProduct?: GiftCardProductResolvers<ContextType>;
  GiftCardShipmentItem?: GiftCardShipmentItemResolvers<ContextType>;
  GiftCardWishlistItem?: GiftCardWishlistItemResolvers<ContextType>;
  GiftMessage?: GiftMessageResolvers<ContextType>;
  GiftOptionsPrices?: GiftOptionsPricesResolvers<ContextType>;
  GiftRegistry?: GiftRegistryResolvers<ContextType>;
  GiftRegistryDynamicAttribute?: GiftRegistryDynamicAttributeResolvers<ContextType>;
  GiftRegistryDynamicAttributeInterface?: GiftRegistryDynamicAttributeInterfaceResolvers<ContextType>;
  GiftRegistryDynamicAttributeMetadata?: GiftRegistryDynamicAttributeMetadataResolvers<ContextType>;
  GiftRegistryDynamicAttributeMetadataInterface?: GiftRegistryDynamicAttributeMetadataInterfaceResolvers<ContextType>;
  GiftRegistryItem?: GiftRegistryItemResolvers<ContextType>;
  GiftRegistryItemInterface?: GiftRegistryItemInterfaceResolvers<ContextType>;
  GiftRegistryItemUserErrorInterface?: GiftRegistryItemUserErrorInterfaceResolvers<ContextType>;
  GiftRegistryItemUserErrors?: GiftRegistryItemUserErrorsResolvers<ContextType>;
  GiftRegistryItemsUserError?: GiftRegistryItemsUserErrorResolvers<ContextType>;
  GiftRegistryOutput?: GiftRegistryOutputResolvers<ContextType>;
  GiftRegistryOutputInterface?: GiftRegistryOutputInterfaceResolvers<ContextType>;
  GiftRegistryRegistrant?: GiftRegistryRegistrantResolvers<ContextType>;
  GiftRegistryRegistrantDynamicAttribute?: GiftRegistryRegistrantDynamicAttributeResolvers<ContextType>;
  GiftRegistrySearchResult?: GiftRegistrySearchResultResolvers<ContextType>;
  GiftRegistryType?: GiftRegistryTypeResolvers<ContextType>;
  GiftWrapping?: GiftWrappingResolvers<ContextType>;
  GiftWrappingImage?: GiftWrappingImageResolvers<ContextType>;
  GroupedProduct?: GroupedProductResolvers<ContextType>;
  GroupedProductItem?: GroupedProductItemResolvers<ContextType>;
  GroupedProductWishlistItem?: GroupedProductWishlistItemResolvers<ContextType>;
  HostedProUrl?: HostedProUrlResolvers<ContextType>;
  HttpQueryParameter?: HttpQueryParameterResolvers<ContextType>;
  ImageSwatchData?: ImageSwatchDataResolvers<ContextType>;
  InternalError?: InternalErrorResolvers<ContextType>;
  Invoice?: InvoiceResolvers<ContextType>;
  InvoiceItem?: InvoiceItemResolvers<ContextType>;
  InvoiceItemInterface?: InvoiceItemInterfaceResolvers<ContextType>;
  InvoiceTotal?: InvoiceTotalResolvers<ContextType>;
  IsEmailAvailableOutput?: IsEmailAvailableOutputResolvers<ContextType>;
  ItemMap?: ItemMapResolvers<ContextType>;
  ItemSelectedBundleOption?: ItemSelectedBundleOptionResolvers<ContextType>;
  ItemSelectedBundleOptionValue?: ItemSelectedBundleOptionValueResolvers<ContextType>;
  KeyMessage?: KeyMessageResolvers<ContextType>;
  KeyMessageResult?: KeyMessageResultResolvers<ContextType>;
  KeyValue?: KeyValueResolvers<ContextType>;
  LayerFilter?: LayerFilterResolvers<ContextType>;
  LayerFilterItem?: LayerFilterItemResolvers<ContextType>;
  LayerFilterItemInterface?: LayerFilterItemInterfaceResolvers<ContextType>;
  MediaGalleryEntry?: MediaGalleryEntryResolvers<ContextType>;
  MediaGalleryInterface?: MediaGalleryInterfaceResolvers<ContextType>;
  Money?: MoneyResolvers<ContextType>;
  MoveCartItemsToGiftRegistryOutput?: MoveCartItemsToGiftRegistryOutputResolvers<ContextType>;
  MoveProductsBetweenWishlistsOutput?: MoveProductsBetweenWishlistsOutputResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  NoSuchEntityUidError?: NoSuchEntityUidErrorResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  OrderAddress?: OrderAddressResolvers<ContextType>;
  OrderItem?: OrderItemResolvers<ContextType>;
  OrderItemInterface?: OrderItemInterfaceResolvers<ContextType>;
  OrderItemOption?: OrderItemOptionResolvers<ContextType>;
  OrderPaymentMethod?: OrderPaymentMethodResolvers<ContextType>;
  OrderShipment?: OrderShipmentResolvers<ContextType>;
  OrderTotal?: OrderTotalResolvers<ContextType>;
  PayflowLinkToken?: PayflowLinkTokenResolvers<ContextType>;
  PayflowProResponseOutput?: PayflowProResponseOutputResolvers<ContextType>;
  PayflowProToken?: PayflowProTokenResolvers<ContextType>;
  PaymentToken?: PaymentTokenResolvers<ContextType>;
  PaypalExpressClientConfig?: PaypalExpressClientConfigResolvers<ContextType>;
  PaypalExpressConfig?: PaypalExpressConfigResolvers<ContextType>;
  PaypalExpressInContextConfig?: PaypalExpressInContextConfigResolvers<ContextType>;
  PaypalExpressToken?: PaypalExpressTokenResolvers<ContextType>;
  PaypalExpressTokenOutput?: PaypalExpressTokenOutputResolvers<ContextType>;
  PaypalExpressUrlList?: PaypalExpressUrlListResolvers<ContextType>;
  PhysicalProductInterface?: PhysicalProductInterfaceResolvers<ContextType>;
  PickupLocation?: PickupLocationResolvers<ContextType>;
  PickupLocations?: PickupLocationsResolvers<ContextType>;
  PlaceOrderOutput?: PlaceOrderOutputResolvers<ContextType>;
  Price?: PriceResolvers<ContextType>;
  PriceAdjustment?: PriceAdjustmentResolvers<ContextType>;
  PriceRange?: PriceRangeResolvers<ContextType>;
  ProductAttribute?: ProductAttributeResolvers<ContextType>;
  ProductAttributeMetadata?: ProductAttributeMetadataResolvers<ContextType>;
  ProductAvailability?: ProductAvailabilityResolvers<ContextType>;
  ProductDiscount?: ProductDiscountResolvers<ContextType>;
  ProductImage?: ProductImageResolvers<ContextType>;
  ProductInterface?: ProductInterfaceResolvers<ContextType>;
  ProductLinks?: ProductLinksResolvers<ContextType>;
  ProductLinksInterface?: ProductLinksInterfaceResolvers<ContextType>;
  ProductMediaGalleryEntriesContent?: ProductMediaGalleryEntriesContentResolvers<ContextType>;
  ProductMediaGalleryEntriesVideoContent?: ProductMediaGalleryEntriesVideoContentResolvers<ContextType>;
  ProductPrice?: ProductPriceResolvers<ContextType>;
  ProductPrices?: ProductPricesResolvers<ContextType>;
  ProductReview?: ProductReviewResolvers<ContextType>;
  ProductReviewRating?: ProductReviewRatingResolvers<ContextType>;
  ProductReviewRatingMetadata?: ProductReviewRatingMetadataResolvers<ContextType>;
  ProductReviewRatingValueMetadata?: ProductReviewRatingValueMetadataResolvers<ContextType>;
  ProductReviewRatingsMetadata?: ProductReviewRatingsMetadataResolvers<ContextType>;
  ProductReviews?: ProductReviewsResolvers<ContextType>;
  ProductTierPrices?: ProductTierPricesResolvers<ContextType>;
  ProductVideo?: ProductVideoResolvers<ContextType>;
  Products?: ProductsResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ReCaptchaConfigurationV3?: ReCaptchaConfigurationV3Resolvers<ContextType>;
  RedirectUrls?: RedirectUrlsResolvers<ContextType>;
  Region?: RegionResolvers<ContextType>;
  ReleaseDate?: ReleaseDateResolvers<ContextType>;
  RemoveCouponFromCartOutput?: RemoveCouponFromCartOutputResolvers<ContextType>;
  RemoveGiftCardFromCartOutput?: RemoveGiftCardFromCartOutputResolvers<ContextType>;
  RemoveGiftRegistryItemsOutput?: RemoveGiftRegistryItemsOutputResolvers<ContextType>;
  RemoveGiftRegistryOutput?: RemoveGiftRegistryOutputResolvers<ContextType>;
  RemoveGiftRegistryRegistrantsOutput?: RemoveGiftRegistryRegistrantsOutputResolvers<ContextType>;
  RemoveItemFromCartOutput?: RemoveItemFromCartOutputResolvers<ContextType>;
  RemoveProductsFromWishlistOutput?: RemoveProductsFromWishlistOutputResolvers<ContextType>;
  RemoveReturnTrackingOutput?: RemoveReturnTrackingOutputResolvers<ContextType>;
  RemoveRewardPointsFromCartOutput?: RemoveRewardPointsFromCartOutputResolvers<ContextType>;
  RemoveStoreCreditFromCartOutput?: RemoveStoreCreditFromCartOutputResolvers<ContextType>;
  ReorderItemsOutput?: ReorderItemsOutputResolvers<ContextType>;
  RequestReturnOutput?: RequestReturnOutputResolvers<ContextType>;
  Return?: ReturnResolvers<ContextType>;
  ReturnComment?: ReturnCommentResolvers<ContextType>;
  ReturnCustomAttribute?: ReturnCustomAttributeResolvers<ContextType>;
  ReturnCustomer?: ReturnCustomerResolvers<ContextType>;
  ReturnItem?: ReturnItemResolvers<ContextType>;
  ReturnShipping?: ReturnShippingResolvers<ContextType>;
  ReturnShippingAddress?: ReturnShippingAddressResolvers<ContextType>;
  ReturnShippingCarrier?: ReturnShippingCarrierResolvers<ContextType>;
  ReturnShippingTracking?: ReturnShippingTrackingResolvers<ContextType>;
  ReturnShippingTrackingStatus?: ReturnShippingTrackingStatusResolvers<ContextType>;
  Returns?: ReturnsResolvers<ContextType>;
  RevokeCustomerTokenOutput?: RevokeCustomerTokenOutputResolvers<ContextType>;
  RewardPoints?: RewardPointsResolvers<ContextType>;
  RewardPointsAmount?: RewardPointsAmountResolvers<ContextType>;
  RewardPointsBalanceHistoryItem?: RewardPointsBalanceHistoryItemResolvers<ContextType>;
  RewardPointsExchangeRates?: RewardPointsExchangeRatesResolvers<ContextType>;
  RewardPointsRate?: RewardPointsRateResolvers<ContextType>;
  RewardPointsSubscriptionStatus?: RewardPointsSubscriptionStatusResolvers<ContextType>;
  RoutableInterface?: RoutableInterfaceResolvers<ContextType>;
  SalesCommentItem?: SalesCommentItemResolvers<ContextType>;
  SalesItemInterface?: SalesItemInterfaceResolvers<ContextType>;
  SearchResultPageInfo?: SearchResultPageInfoResolvers<ContextType>;
  SearchSuggestion?: SearchSuggestionResolvers<ContextType>;
  SelectableInputTypeInterface?: SelectableInputTypeInterfaceResolvers<ContextType>;
  SelectedAttributeOption?: SelectedAttributeOptionResolvers<ContextType>;
  SelectedBundleOption?: SelectedBundleOptionResolvers<ContextType>;
  SelectedBundleOptionValue?: SelectedBundleOptionValueResolvers<ContextType>;
  SelectedConfigurableOption?: SelectedConfigurableOptionResolvers<ContextType>;
  SelectedCustomizableOption?: SelectedCustomizableOptionResolvers<ContextType>;
  SelectedCustomizableOptionValue?: SelectedCustomizableOptionValueResolvers<ContextType>;
  SelectedPaymentMethod?: SelectedPaymentMethodResolvers<ContextType>;
  SelectedShippingMethod?: SelectedShippingMethodResolvers<ContextType>;
  SendEmailToFriendOutput?: SendEmailToFriendOutputResolvers<ContextType>;
  SendEmailToFriendRecipient?: SendEmailToFriendRecipientResolvers<ContextType>;
  SendEmailToFriendSender?: SendEmailToFriendSenderResolvers<ContextType>;
  SendFriendConfiguration?: SendFriendConfigurationResolvers<ContextType>;
  SetBillingAddressOnCartOutput?: SetBillingAddressOnCartOutputResolvers<ContextType>;
  SetGiftOptionsOnCartOutput?: SetGiftOptionsOnCartOutputResolvers<ContextType>;
  SetGuestEmailOnCartOutput?: SetGuestEmailOnCartOutputResolvers<ContextType>;
  SetPaymentMethodOnCartOutput?: SetPaymentMethodOnCartOutputResolvers<ContextType>;
  SetShippingAddressesOnCartOutput?: SetShippingAddressesOnCartOutputResolvers<ContextType>;
  SetShippingMethodsOnCartOutput?: SetShippingMethodsOnCartOutputResolvers<ContextType>;
  ShareGiftRegistryOutput?: ShareGiftRegistryOutputResolvers<ContextType>;
  ShipmentItem?: ShipmentItemResolvers<ContextType>;
  ShipmentItemInterface?: ShipmentItemInterfaceResolvers<ContextType>;
  ShipmentTracking?: ShipmentTrackingResolvers<ContextType>;
  ShippingCartAddress?: ShippingCartAddressResolvers<ContextType>;
  ShippingDiscount?: ShippingDiscountResolvers<ContextType>;
  ShippingHandling?: ShippingHandlingResolvers<ContextType>;
  SimpleCartItem?: SimpleCartItemResolvers<ContextType>;
  SimpleProduct?: SimpleProductResolvers<ContextType>;
  SimpleWishlistItem?: SimpleWishlistItemResolvers<ContextType>;
  SocialLink?: SocialLinkResolvers<ContextType>;
  SortField?: SortFieldResolvers<ContextType>;
  SortFields?: SortFieldsResolvers<ContextType>;
  StoreConfig?: StoreConfigResolvers<ContextType>;
  StoreInformation?: StoreInformationResolvers<ContextType>;
  StoreLabels?: StoreLabelsResolvers<ContextType>;
  StoreLocation?: StoreLocationResolvers<ContextType>;
  StoreLocations?: StoreLocationsResolvers<ContextType>;
  StorefrontProperties?: StorefrontPropertiesResolvers<ContextType>;
  SubscribeEmailToNewsletterOutput?: SubscribeEmailToNewsletterOutputResolvers<ContextType>;
  SwatchData?: SwatchDataResolvers<ContextType>;
  SwatchDataInterface?: SwatchDataInterfaceResolvers<ContextType>;
  SwatchLayerFilterItem?: SwatchLayerFilterItemResolvers<ContextType>;
  SwatchLayerFilterItemInterface?: SwatchLayerFilterItemInterfaceResolvers<ContextType>;
  TaxItem?: TaxItemResolvers<ContextType>;
  TextSwatchData?: TextSwatchDataResolvers<ContextType>;
  TierPrice?: TierPriceResolvers<ContextType>;
  UiAttributeTypeAny?: UiAttributeTypeAnyResolvers<ContextType>;
  UiAttributeTypeBoolean?: UiAttributeTypeBooleanResolvers<ContextType>;
  UiAttributeTypeFixedProductTax?: UiAttributeTypeFixedProductTaxResolvers<ContextType>;
  UiAttributeTypeMultiSelect?: UiAttributeTypeMultiSelectResolvers<ContextType>;
  UiAttributeTypePageBuilder?: UiAttributeTypePageBuilderResolvers<ContextType>;
  UiAttributeTypeSelect?: UiAttributeTypeSelectResolvers<ContextType>;
  UiAttributeTypeTextEditor?: UiAttributeTypeTextEditorResolvers<ContextType>;
  UiAttributeTypeTextarea?: UiAttributeTypeTextareaResolvers<ContextType>;
  UiInputTypeInterface?: UiInputTypeInterfaceResolvers<ContextType>;
  UpdateCartItemsOutput?: UpdateCartItemsOutputResolvers<ContextType>;
  UpdateGiftRegistryItemsOutput?: UpdateGiftRegistryItemsOutputResolvers<ContextType>;
  UpdateGiftRegistryOutput?: UpdateGiftRegistryOutputResolvers<ContextType>;
  UpdateGiftRegistryRegistrantsOutput?: UpdateGiftRegistryRegistrantsOutputResolvers<ContextType>;
  UpdateProductsInWishlistOutput?: UpdateProductsInWishlistOutputResolvers<ContextType>;
  UpdateWishlistOutput?: UpdateWishlistOutputResolvers<ContextType>;
  UrlRewrite?: UrlRewriteResolvers<ContextType>;
  VirtualCartItem?: VirtualCartItemResolvers<ContextType>;
  VirtualProduct?: VirtualProductResolvers<ContextType>;
  VirtualWishlistItem?: VirtualWishlistItemResolvers<ContextType>;
  Website?: WebsiteResolvers<ContextType>;
  WishListUserInputError?: WishListUserInputErrorResolvers<ContextType>;
  Wishlist?: WishlistResolvers<ContextType>;
  WishlistCartUserInputError?: WishlistCartUserInputErrorResolvers<ContextType>;
  WishlistItem?: WishlistItemResolvers<ContextType>;
  WishlistItemInterface?: WishlistItemInterfaceResolvers<ContextType>;
  WishlistItems?: WishlistItemsResolvers<ContextType>;
  WishlistOutput?: WishlistOutputResolvers<ContextType>;
  afterpayConfigOutput?: AfterpayConfigOutputResolvers<ContextType>;
  createAfterpayCheckoutOutput?: CreateAfterpayCheckoutOutputResolvers<ContextType>;
  getCustomerTokenBySecretCodeOutput?: GetCustomerTokenBySecretCodeOutputResolvers<ContextType>;
};


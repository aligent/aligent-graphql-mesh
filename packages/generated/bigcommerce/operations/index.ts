import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  DateTime: any;
  Long: any;
};

/** Add cart line items data object */
export type AddCartLineItemsDataInput = {
  /** List of gift certificates */
  giftCertificates?: InputMaybe<Array<CartGiftCertificateInput>>;
  /** List of cart line items */
  lineItems?: InputMaybe<Array<CartLineItemInput>>;
};

/** Add cart line items input object */
export type AddCartLineItemsInput = {
  /** The cart id */
  cartEntityId: Scalars['String'];
  /** Add cart line items data object */
  data: AddCartLineItemsDataInput;
};

/** Add cart line items result */
export type AddCartLineItemsResult = {
  __typename?: 'AddCartLineItemsResult';
  /** The Cart that is updated as a result of mutation. */
  cart?: Maybe<Cart>;
};

/** Add checkout billing address data object */
export type AddCheckoutBillingAddressDataInput = {
  /** The checkout billing address */
  address: CheckoutAddressInput;
};

/** Add checkout billing address input object */
export type AddCheckoutBillingAddressInput = {
  /** The checkout id */
  checkoutEntityId: Scalars['String'];
  /** Add checkout billing address data object */
  data: AddCheckoutBillingAddressDataInput;
};

/** Add checkout billing address result */
export type AddCheckoutBillingAddressResult = {
  __typename?: 'AddCheckoutBillingAddressResult';
  /** The Checkout that is updated as a result of mutation. */
  checkout?: Maybe<Checkout>;
};

/** Add checkout shipping consignments data object */
export type AddCheckoutShippingConsignmentsDataInput = {
  /** The list of shipping consignments */
  consignments: Array<CheckoutShippingConsignmentInput>;
};

/** Add checkout shipping consignments input object */
export type AddCheckoutShippingConsignmentsInput = {
  /** The checkout id */
  checkoutEntityId: Scalars['String'];
  /** Add checkout shipping consignments data object */
  data: AddCheckoutShippingConsignmentsDataInput;
};

/** Apply checkout shipping consignments result */
export type AddCheckoutShippingConsignmentsResult = {
  __typename?: 'AddCheckoutShippingConsignmentsResult';
  /** The Checkout that is updated as a result of mutation. */
  checkout?: Maybe<Checkout>;
};

/** Add wishlist items input object */
export type AddWishlistItemsInput = {
  /** The wishlist id */
  entityId: Scalars['Int'];
  /** The new wishlist items */
  items: Array<WishlistItemInput>;
};

/** Add wishlist items */
export type AddWishlistItemsResult = {
  __typename?: 'AddWishlistItemsResult';
  /** The wishlist */
  result: Wishlist;
};

/** Aggregated */
export type Aggregated = {
  __typename?: 'Aggregated';
  /** Number of available products in stock. This can be 'null' if inventory is not set orif the store's Inventory Settings disable displaying stock levels on the storefront. */
  availableToSell: Scalars['Long'];
  /** Indicates a threshold low-stock level.  This can be 'null' if the inventory warning level is not set or if the store's Inventory Settings disable displaying stock levels on the storefront. */
  warningLevel: Scalars['Int'];
};

/** Aggregated Product Inventory */
export type AggregatedInventory = {
  __typename?: 'AggregatedInventory';
  /** Number of available products in stock. This can be 'null' if inventory is not set orif the store's Inventory Settings disable displaying stock levels on the storefront. */
  availableToSell: Scalars['Int'];
  /** Indicates a threshold low-stock level. This can be 'null' if the inventory warning level is not set or if the store's Inventory Settings disable displaying stock levels on the storefront. */
  warningLevel: Scalars['Int'];
};

/** Apply checkout coupon data object */
export type ApplyCheckoutCouponDataInput = {
  /** The checkout coupon code */
  couponCode: Scalars['String'];
};

/** Apply checkout coupon input object */
export type ApplyCheckoutCouponInput = {
  /** The checkout id */
  checkoutEntityId: Scalars['String'];
  /** Apply checkout coupon data object */
  data: ApplyCheckoutCouponDataInput;
};

/** Apply checkout coupon result */
export type ApplyCheckoutCouponResult = {
  __typename?: 'ApplyCheckoutCouponResult';
  /** The Checkout that is updated as a result of mutation. */
  checkout?: Maybe<Checkout>;
};

/** Apply checkout spam protection data object */
export type ApplyCheckoutSpamProtectionDataInput = {
  /** The checkout spam protection token */
  token: Scalars['String'];
};

/** Apply checkout spam protection input object */
export type ApplyCheckoutSpamProtectionInput = {
  /** The checkout id */
  checkoutEntityId: Scalars['String'];
  /** Apply checkout spam protection data object */
  data: ApplyCheckoutSpamProtectionDataInput;
};

/** Apply checkout spam protection result */
export type ApplyCheckoutSpamProtectionResult = {
  __typename?: 'ApplyCheckoutSpamProtectionResult';
  /** The Checkout that is updated as a result of mutation. */
  checkout?: Maybe<Checkout>;
};

/** Assign cart to the customer input object. */
export type AssignCartToCustomerInput = {
  /** The cart id. */
  cartEntityId: Scalars['String'];
};

/** Assign cart to the customer result. */
export type AssignCartToCustomerResult = {
  __typename?: 'AssignCartToCustomerResult';
  /** The Cart that is updated as a result of mutation. */
  cart?: Maybe<Cart>;
};

/** Author */
export type Author = {
  __typename?: 'Author';
  /** Author name. */
  name: Scalars['String'];
};

/** Banner details. */
export type Banner = Node & {
  __typename?: 'Banner';
  /** The content of the Banner. */
  content: Scalars['String'];
  /** The id of the Banner. */
  entityId: Scalars['Long'];
  /** The ID of an object */
  id: Scalars['ID'];
  /** The location of the Banner. */
  location: BannerLocation;
  /** The name of the Banner. */
  name: Scalars['String'];
};

/** A connection to a list of items. */
export type BannerConnection = {
  __typename?: 'BannerConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BannerEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BannerEdge = {
  __typename?: 'BannerEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Banner;
};

/** Banner location */
export type BannerLocation =
  | 'BOTTOM'
  | 'TOP';

/** Banners details. */
export type Banners = {
  __typename?: 'Banners';
  /** List of brand page banners. */
  brandPage: BrandPageBannerConnection;
  /** List of category page banners. */
  categoryPage: CategoryPageBannerConnection;
  /** List of home page banners. */
  homePage: BannerConnection;
  /** List of search page banners. */
  searchPage: BannerConnection;
};


/** Banners details. */
export type BannersBrandPageArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  brandEntityId: Scalars['Int'];
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Banners details. */
export type BannersCategoryPageArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  categoryEntityId: Scalars['Int'];
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Banners details. */
export type BannersHomePageArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Banners details. */
export type BannersSearchPageArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Blog details. */
export type Blog = Node & {
  __typename?: 'Blog';
  /** The description of the Blog. */
  description: Scalars['String'];
  /** The ID of an object */
  id: Scalars['ID'];
  /** Whether or not the blog should be visible in the navigation menu. */
  isVisibleInNavigation: Scalars['Boolean'];
  /** The name of the Blog. */
  name: Scalars['String'];
  /** The path of the Blog. */
  path: Scalars['String'];
  /** Blog post details. */
  post?: Maybe<BlogPost>;
  /** Details of the Blog posts. */
  posts: BlogPostConnection;
  /** The rendered regions for the blog index. */
  renderedRegions: RenderedRegionsByPageType;
};


/** Blog details. */
export type BlogPostArgs = {
  entityId: Scalars['Int'];
};


/** Blog details. */
export type BlogPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<BlogPostsFiltersInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortBy>;
};

/** A blog index page. */
export type BlogIndexPage = Node & WebPage & {
  __typename?: 'BlogIndexPage';
  /** Unique ID for the web page. */
  entityId: Scalars['Int'];
  /** The ID of an object */
  id: Scalars['ID'];
  /** Whether or not the page should be visible in the navigation menu. */
  isVisibleInNavigation: Scalars['Boolean'];
  /** Page name. */
  name: Scalars['String'];
  /** Unique ID for the parent page. */
  parentEntityId?: Maybe<Scalars['Int']>;
  /** The URL path of the page. */
  path: Scalars['String'];
  /** The rendered regions for the web page. */
  renderedRegions: RenderedRegionsByPageType;
  /** Page SEO details. */
  seo: SeoDetails;
};

/** Blog post details. */
export type BlogPost = Node & {
  __typename?: 'BlogPost';
  /** Blog post author. */
  author?: Maybe<Scalars['String']>;
  /** Unique ID for the blog post. */
  entityId: Scalars['Int'];
  /** The body of the Blog post. */
  htmlBody: Scalars['String'];
  /** The ID of an object */
  id: Scalars['ID'];
  /** Blog post name. */
  name: Scalars['String'];
  /** Blog post path. */
  path: Scalars['String'];
  /** The plain text summary of the Blog post. */
  plainTextSummary: Scalars['String'];
  /** Blog post published date. */
  publishedDate: DateTimeExtended;
  /** The rendered regions for the blog post. */
  renderedRegions: RenderedRegionsByPageType;
  /** Blog post SEO details. */
  seo: SeoDetails;
  /** Blog post tags. */
  tags: Array<Scalars['String']>;
  /** Blog post thumbnail image. */
  thumbnailImage?: Maybe<Image>;
};


/** Blog post details. */
export type BlogPostPlainTextSummaryArgs = {
  characterLimit?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type BlogPostConnection = {
  __typename?: 'BlogPostConnection';
  /** Collection info */
  collectionInfo?: Maybe<CollectionInfo>;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BlogPostEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BlogPostEdge = {
  __typename?: 'BlogPostEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: BlogPost;
};

/** Redirect to a blog post. */
export type BlogPostRedirect = {
  __typename?: 'BlogPostRedirect';
  /** Entity id. */
  entityId: Scalars['Int'];
  /** The ID of an object. */
  id: Scalars['ID'];
  /** Relative destination url. */
  path: Scalars['String'];
};

/** Object containing the filters for querying blog posts */
export type BlogPostsFiltersInput = {
  /** Ids of the expected blog posts. */
  entityIds?: InputMaybe<Array<Scalars['Int']>>;
  /** Tags of the expected blog posts. */
  tags?: InputMaybe<Array<Scalars['String']>>;
};

/** Brand */
export type Brand = Node & {
  __typename?: 'Brand';
  /** Default image for brand. */
  defaultImage?: Maybe<Image>;
  /** Id of the brand. */
  entityId: Scalars['Int'];
  /** The ID of an object */
  id: Scalars['ID'];
  /**
   * Meta description for the brand.
   * @deprecated Use SEO details instead.
   */
  metaDesc: Scalars['String'];
  /**
   * Meta keywords for the brand.
   * @deprecated Use SEO details instead.
   */
  metaKeywords: Array<Scalars['String']>;
  /** Metafield data related to a brand. */
  metafields: MetafieldConnection;
  /** Name of the brand. */
  name: Scalars['String'];
  /**
   * Page title for the brand.
   * @deprecated Use SEO details instead.
   */
  pageTitle: Scalars['String'];
  /** Path for the brand page. */
  path: Scalars['String'];
  /** List of products associated with the brand. */
  products: ProductConnection;
  /** Search keywords for the brand. */
  searchKeywords: Array<Scalars['String']>;
  /** Brand SEO details. */
  seo: SeoDetails;
};


/** Brand */
export type BrandMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  keys?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['Int']>;
  namespace: Scalars['String'];
};


/** Brand */
export type BrandProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  hideOutOfStock?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type BrandConnection = {
  __typename?: 'BrandConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BrandEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BrandEdge = {
  __typename?: 'BrandEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Brand;
};

/** A connection to a list of items. */
export type BrandPageBannerConnection = {
  __typename?: 'BrandPageBannerConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BrandPageBannerEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BrandPageBannerEdge = {
  __typename?: 'BrandPageBannerEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Banner;
};

/** Redirect to a brand. */
export type BrandRedirect = {
  __typename?: 'BrandRedirect';
  /** Entity id. */
  entityId: Scalars['Int'];
  /** The ID of an object. */
  id: Scalars['ID'];
  /** Relative destination url. */
  path: Scalars['String'];
};

/** Brand Filter */
export type BrandSearchFilter = SearchProductFilter & {
  __typename?: 'BrandSearchFilter';
  /** List of available brands. */
  brands: BrandSearchFilterItemConnection;
  /** Indicates whether to display product count next to the filter. */
  displayProductCount: Scalars['Boolean'];
  /** Indicates whether filter is collapsed by default. */
  isCollapsedByDefault: Scalars['Boolean'];
  /** Display name for the filter. */
  name: Scalars['String'];
};


/** Brand Filter */
export type BrandSearchFilterBrandsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Specific brand filter item */
export type BrandSearchFilterItem = {
  __typename?: 'BrandSearchFilterItem';
  /** Brand ID. */
  entityId: Scalars['Int'];
  /** Indicates whether brand is selected. */
  isSelected: Scalars['Boolean'];
  /** Brand name. */
  name: Scalars['String'];
  /** Indicates how many products available for this filter. */
  productCount: Scalars['Int'];
};

/** A connection to a list of items. */
export type BrandSearchFilterItemConnection = {
  __typename?: 'BrandSearchFilterItemConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BrandSearchFilterItemEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BrandSearchFilterItemEdge = {
  __typename?: 'BrandSearchFilterItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: BrandSearchFilterItem;
};

/** Breadcrumb */
export type Breadcrumb = {
  __typename?: 'Breadcrumb';
  /** Category id. */
  entityId: Scalars['Int'];
  /** Name of the category. */
  name: Scalars['String'];
  /** Path to the category. */
  path?: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type BreadcrumbConnection = {
  __typename?: 'BreadcrumbConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BreadcrumbEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BreadcrumbEdge = {
  __typename?: 'BreadcrumbEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Breadcrumb;
};

/** Bulk pricing tier that sets a fixed price for the product or variant. */
export type BulkPricingFixedPriceDiscount = BulkPricingTier & {
  __typename?: 'BulkPricingFixedPriceDiscount';
  /** Maximum item quantity that applies to this bulk pricing tier - if not defined then the tier does not have an upper bound. */
  maximumQuantity?: Maybe<Scalars['Int']>;
  /** Minimum item quantity that applies to this bulk pricing tier. */
  minimumQuantity: Scalars['Int'];
  /** This price will override the current product price. */
  price: Scalars['BigDecimal'];
};

/** Bulk pricing tier that reduces the price of the product or variant by a percentage. */
export type BulkPricingPercentageDiscount = BulkPricingTier & {
  __typename?: 'BulkPricingPercentageDiscount';
  /** Maximum item quantity that applies to this bulk pricing tier - if not defined then the tier does not have an upper bound. */
  maximumQuantity?: Maybe<Scalars['Int']>;
  /** Minimum item quantity that applies to this bulk pricing tier. */
  minimumQuantity: Scalars['Int'];
  /** The percentage that will be removed from the product price. */
  percentOff: Scalars['BigDecimal'];
};

/** Bulk pricing tier that will subtract an amount from the price of the product or variant. */
export type BulkPricingRelativePriceDiscount = BulkPricingTier & {
  __typename?: 'BulkPricingRelativePriceDiscount';
  /** Maximum item quantity that applies to this bulk pricing tier - if not defined then the tier does not have an upper bound. */
  maximumQuantity?: Maybe<Scalars['Int']>;
  /** Minimum item quantity that applies to this bulk pricing tier. */
  minimumQuantity: Scalars['Int'];
  /** The price of the product/variant will be reduced by this priceAdjustment. */
  priceAdjustment: Scalars['BigDecimal'];
};

/** A set of bulk pricing tiers that define price discounts which apply when purchasing specified quantities of a product or variant. */
export type BulkPricingTier = {
  /** Maximum item quantity that applies to this bulk pricing tier - if not defined then the tier does not have an upper bound. */
  maximumQuantity?: Maybe<Scalars['Int']>;
  /** Minimum item quantity that applies to this bulk pricing tier. */
  minimumQuantity: Scalars['Int'];
};

/** A cart */
export type Cart = Node & {
  __typename?: 'Cart';
  /** Sum of line-items amounts, minus cart-level discounts and coupons. This amount includes taxes (where applicable). */
  amount: Money;
  /** Cost of cart's contents, before applying discounts. */
  baseAmount: Money;
  /** Time when the cart was created. */
  createdAt: DateTimeExtended;
  /** ISO-4217 currency code. */
  currencyCode: Scalars['String'];
  /** Discounted amount. */
  discountedAmount: Money;
  /** List of discounts applied to this cart. */
  discounts: Array<CartDiscount>;
  /** Cart ID. */
  entityId: Scalars['String'];
  /** The ID of an object */
  id: Scalars['ID'];
  /** Whether this item is taxable. */
  isTaxIncluded: Scalars['Boolean'];
  /** List of line items. */
  lineItems: CartLineItems;
  /** Locale of the cart. */
  locale: Scalars['String'];
  /** Time when the cart was last updated. */
  updatedAt: DateTimeExtended;
};

/** Cart custom item. */
export type CartCustomItem = {
  __typename?: 'CartCustomItem';
  /** ID of the custom item. */
  entityId: Scalars['String'];
  /** Item's list price multiplied by the quantity. */
  extendedListPrice: Money;
  /** Price of the item. With or without tax depending on your stores set up. */
  listPrice: Money;
  /** Custom item name. */
  name: Scalars['String'];
  /** Quantity of this item. */
  quantity: Scalars['Int'];
  /** Custom item sku. */
  sku?: Maybe<Scalars['String']>;
};

/** Cart digital item. */
export type CartDigitalItem = {
  __typename?: 'CartDigitalItem';
  /** The product brand. */
  brand?: Maybe<Scalars['String']>;
  /** The total value of all coupons applied to this item. */
  couponAmount: Money;
  /** The total value of all discounts applied to this item (excluding coupon). */
  discountedAmount: Money;
  /** List of discounts applied to this item. */
  discounts: Array<CartDiscount>;
  /** The line-item ID. */
  entityId: Scalars['String'];
  /** Item's list price multiplied by the quantity. */
  extendedListPrice: Money;
  /** Item's sale price multiplied by the quantity. */
  extendedSalePrice: Money;
  /** URL of an image of this item, accessible on the internet. */
  imageUrl?: Maybe<Scalars['String']>;
  /** Whether the item is taxable. */
  isTaxable: Scalars['Boolean'];
  /** The net item price before discounts and coupons. It is based on the product default price or sale price (if set) configured in BigCommerce Admin. */
  listPrice: Money;
  /** The item's product name. */
  name: Scalars['String'];
  /** An item’s original price is the same as the product default price in the admin panel. */
  originalPrice: Money;
  /** The product is part of a bundle such as a product pick list, then the parentId or the main product id will populate. */
  parentEntityId?: Maybe<Scalars['String']>;
  /** ID of the product. */
  productEntityId: Scalars['Int'];
  /** Quantity of this item. */
  quantity: Scalars['Int'];
  /** Item's price after all discounts are applied. (The final price before tax calculation). */
  salePrice: Money;
  /** The list of selected options for this product. */
  selectedOptions: Array<CartSelectedCheckboxOption | CartSelectedDateFieldOption | CartSelectedFileUploadOption | CartSelectedMultiLineTextFieldOption | CartSelectedMultipleChoiceOption | CartSelectedNumberFieldOption | CartSelectedTextFieldOption>;
  /** SKU of the variant. */
  sku?: Maybe<Scalars['String']>;
  /** The product URL. */
  url: Scalars['String'];
  /** ID of the variant. */
  variantEntityId?: Maybe<Scalars['Int']>;
};

/** Discount applied to the cart. */
export type CartDiscount = {
  __typename?: 'CartDiscount';
  /** The discounted amount applied within a given context. */
  discountedAmount: Money;
  /** ID of the applied discount. */
  entityId: Scalars['String'];
};

/** Cart gift certificate */
export type CartGiftCertificate = {
  __typename?: 'CartGiftCertificate';
  /** Value must be between 1.00 and 1,000.00 in the store's default currency. */
  amount: Money;
  /** ID of this gift certificate. */
  entityId: Scalars['String'];
  /** Whether or not the gift certificate is taxable. */
  isTaxable: Scalars['Boolean'];
  /** Message that will be sent to the gift certificate's recipient. Limited to 200 characters. */
  message?: Maybe<Scalars['String']>;
  /** GiftCertificate-provided name that will appear in the control panel. */
  name: Scalars['String'];
  /** Recipient of the gift certificate. */
  recipient: CartGiftCertificateRecipient;
  /** Sender of the gift certificate. */
  sender: CartGiftCertificateSender;
  /** Currently supports Birthday, Boy, Celebration, Christmas, General, and Girl. */
  theme: CartGiftCertificateTheme;
};

/** Cart gift certificate input object */
export type CartGiftCertificateInput = {
  /** Value must be between 1.00 and 1,000.00 in the store's default currency. */
  amount: Scalars['BigDecimal'];
  /** Message that will be sent to the gift certificate's recipient. Limited to 200 characters. */
  message?: InputMaybe<Scalars['String']>;
  /** GiftCertificate-provided name that will appear in the control panel. */
  name: Scalars['String'];
  /** The total number of certificates */
  quantity: Scalars['Int'];
  /** Recipient of the gift certificate. */
  recipient: CartGiftCertificateRecipientInput;
  /** Sender of the gift certificate. */
  sender: CartGiftCertificateSenderInput;
  /** Currently supports Birthday, Boy, Celebration, Christmas, General, and Girl. */
  theme: CartGiftCertificateTheme;
};

/** Cart gift certificate recipient */
export type CartGiftCertificateRecipient = {
  __typename?: 'CartGiftCertificateRecipient';
  /** Contact's email address. */
  email: Scalars['String'];
  /** Contact's name. */
  name: Scalars['String'];
};

/** Cart gift certificate recipient input object */
export type CartGiftCertificateRecipientInput = {
  /** Contact's email address. */
  email: Scalars['String'];
  /** Contact's name. */
  name: Scalars['String'];
};

/** Cart gift certificate sender */
export type CartGiftCertificateSender = {
  __typename?: 'CartGiftCertificateSender';
  /** Contact's email address. */
  email: Scalars['String'];
  /** Contact's name. */
  name: Scalars['String'];
};

/** Cart gift certificate sender input object */
export type CartGiftCertificateSenderInput = {
  /** Contact's email address. */
  email: Scalars['String'];
  /** Contact's name. */
  name: Scalars['String'];
};

/** Cart gift certificate theme */
export type CartGiftCertificateTheme =
  | 'BIRTHDAY'
  | 'BOY'
  | 'CELEBRATION'
  | 'CHRISTMAS'
  | 'GENERAL'
  | 'GIRL';

/** Gift wrapping for the item */
export type CartGiftWrapping = {
  __typename?: 'CartGiftWrapping';
  /** Gift-wrapping price per product. */
  amount: Money;
  /** Custom gift message along with items wrapped in this wrapping option. */
  message?: Maybe<Scalars['String']>;
  /** Name of the gift-wrapping option. */
  name: Scalars['String'];
};

/** Cart line item input object */
export type CartLineItemInput = {
  /** The product id */
  productEntityId: Scalars['Int'];
  /** Total number of line items. */
  quantity: Scalars['Int'];
  /** The list of selected options for this item. */
  selectedOptions?: InputMaybe<CartSelectedOptionsInput>;
  /** The variant id */
  variantEntityId?: InputMaybe<Scalars['Int']>;
};

/** Cart line items */
export type CartLineItems = {
  __typename?: 'CartLineItems';
  /** List of custom items. */
  customItems: Array<CartCustomItem>;
  /** List of digital items. */
  digitalItems: Array<CartDigitalItem>;
  /** List of gift certificates. */
  giftCertificates: Array<CartGiftCertificate>;
  /** List of physical items. */
  physicalItems: Array<CartPhysicalItem>;
  /** Total number of line items. */
  totalQuantity: Scalars['Int'];
};

/** Cart mutations */
export type CartMutations = {
  __typename?: 'CartMutations';
  /** Adds line item(s) to the cart. */
  addCartLineItems?: Maybe<AddCartLineItemsResult>;
  /** Assign cart to the customer. */
  assignCartToCustomer?: Maybe<AssignCartToCustomerResult>;
  /** Creates a cart and generates a cart ID. */
  createCart?: Maybe<CreateCartResult>;
  /** Deletes a Cart. */
  deleteCart?: Maybe<DeleteCartResult>;
  /** Delete line item in the cart. Removing the last line item in the Cart deletes the Cart. */
  deleteCartLineItem?: Maybe<DeleteCartLineItemResult>;
  /** Unassign cart from the customer. */
  unassignCartFromCustomer?: Maybe<UnassignCartFromCustomerResult>;
  /** Update currency of the cart. */
  updateCartCurrency?: Maybe<UpdateCartCurrencyResult>;
  /** Updates line item in the cart. */
  updateCartLineItem?: Maybe<UpdateCartLineItemResult>;
};


/** Cart mutations */
export type CartMutationsAddCartLineItemsArgs = {
  input: AddCartLineItemsInput;
};


/** Cart mutations */
export type CartMutationsAssignCartToCustomerArgs = {
  input: AssignCartToCustomerInput;
};


/** Cart mutations */
export type CartMutationsCreateCartArgs = {
  input: CreateCartInput;
};


/** Cart mutations */
export type CartMutationsDeleteCartArgs = {
  input: DeleteCartInput;
};


/** Cart mutations */
export type CartMutationsDeleteCartLineItemArgs = {
  input: DeleteCartLineItemInput;
};


/** Cart mutations */
export type CartMutationsUnassignCartFromCustomerArgs = {
  input: UnassignCartFromCustomerInput;
};


/** Cart mutations */
export type CartMutationsUpdateCartCurrencyArgs = {
  input: UpdateCartCurrencyInput;
};


/** Cart mutations */
export type CartMutationsUpdateCartLineItemArgs = {
  input: UpdateCartLineItemInput;
};

/** Cart physical item. */
export type CartPhysicalItem = {
  __typename?: 'CartPhysicalItem';
  /** The product brand. */
  brand?: Maybe<Scalars['String']>;
  /** The total value of all coupons applied to this item. */
  couponAmount: Money;
  /** The total value of all discounts applied to this item (excluding coupon). */
  discountedAmount: Money;
  /** List of discounts applied to this item. */
  discounts: Array<CartDiscount>;
  /** The line-item ID. */
  entityId: Scalars['String'];
  /** Item's list price multiplied by the quantity. */
  extendedListPrice: Money;
  /** Item's sale price multiplied by the quantity. */
  extendedSalePrice: Money;
  /** Gift wrapping for this item. */
  giftWrapping?: Maybe<CartGiftWrapping>;
  /** URL of an image of this item, accessible on the internet. */
  imageUrl?: Maybe<Scalars['String']>;
  /** Whether this item requires shipping to a physical address. */
  isShippingRequired: Scalars['Boolean'];
  /** Whether the item is taxable. */
  isTaxable: Scalars['Boolean'];
  /** The net item price before discounts and coupons. It is based on the product default price or sale price (if set) configured in BigCommerce Admin. */
  listPrice: Money;
  /** The item's product name. */
  name: Scalars['String'];
  /** An item’s original price is the same as the product default price in the admin panel. */
  originalPrice: Money;
  /** The product is part of a bundle such as a product pick list, then the parentId or the main product id will populate. */
  parentEntityId?: Maybe<Scalars['String']>;
  /** ID of the product. */
  productEntityId: Scalars['Int'];
  /** Quantity of this item. */
  quantity: Scalars['Int'];
  /** Item's price after all discounts are applied. (The final price before tax calculation). */
  salePrice: Money;
  /** The list of selected options for this item. */
  selectedOptions: Array<CartSelectedCheckboxOption | CartSelectedDateFieldOption | CartSelectedFileUploadOption | CartSelectedMultiLineTextFieldOption | CartSelectedMultipleChoiceOption | CartSelectedNumberFieldOption | CartSelectedTextFieldOption>;
  /** SKU of the variant. */
  sku?: Maybe<Scalars['String']>;
  /** The product URL. */
  url: Scalars['String'];
  /** ID of the variant. */
  variantEntityId?: Maybe<Scalars['Int']>;
};

/** Selected checkbox option. */
export type CartSelectedCheckboxOption = CartSelectedOption & {
  __typename?: 'CartSelectedCheckboxOption';
  /** The product option ID. */
  entityId: Scalars['Int'];
  /** The product option name. */
  name: Scalars['String'];
  /** The product option value. */
  value: Scalars['String'];
  /** The product option value ID. */
  valueEntityId: Scalars['Int'];
};

/** Cart selected checkbox option input object */
export type CartSelectedCheckboxOptionInput = {
  /** The product option ID. */
  optionEntityId: Scalars['Int'];
  /** The product option value ID. */
  optionValueEntityId: Scalars['Int'];
};

/** Selected date field option. */
export type CartSelectedDateFieldOption = CartSelectedOption & {
  __typename?: 'CartSelectedDateFieldOption';
  /** Date value. */
  date: DateTimeExtended;
  /** The product option ID. */
  entityId: Scalars['Int'];
  /** The product option name. */
  name: Scalars['String'];
};

/** Cart selected date field option input object */
export type CartSelectedDateFieldOptionInput = {
  /** Date value. */
  date: Scalars['DateTime'];
  /** The product option ID. */
  optionEntityId: Scalars['Int'];
};

/** Selected file upload option. */
export type CartSelectedFileUploadOption = CartSelectedOption & {
  __typename?: 'CartSelectedFileUploadOption';
  /** The product option ID. */
  entityId: Scalars['Int'];
  /** Uploaded file name. */
  fileName: Scalars['String'];
  /** The product option name. */
  name: Scalars['String'];
};

/** Selected multi-line text field option. */
export type CartSelectedMultiLineTextFieldOption = CartSelectedOption & {
  __typename?: 'CartSelectedMultiLineTextFieldOption';
  /** The product option ID. */
  entityId: Scalars['Int'];
  /** The product option name. */
  name: Scalars['String'];
  /** Text value. */
  text: Scalars['String'];
};

/** Cart selected multiple line text field option input object */
export type CartSelectedMultiLineTextFieldOptionInput = {
  /** The product option ID. */
  optionEntityId: Scalars['Int'];
  /** Text value. */
  text: Scalars['String'];
};

/** Selected multiple choice option. */
export type CartSelectedMultipleChoiceOption = CartSelectedOption & {
  __typename?: 'CartSelectedMultipleChoiceOption';
  /** The product option ID. */
  entityId: Scalars['Int'];
  /** The product option name. */
  name: Scalars['String'];
  /** The product option value. */
  value: Scalars['String'];
  /** The product option value ID. */
  valueEntityId: Scalars['Int'];
};

/** Cart selected multiple choice option input object */
export type CartSelectedMultipleChoiceOptionInput = {
  /** The product option ID. */
  optionEntityId: Scalars['Int'];
  /** The product option value ID. */
  optionValueEntityId: Scalars['Int'];
};

/** Selected number field option. */
export type CartSelectedNumberFieldOption = CartSelectedOption & {
  __typename?: 'CartSelectedNumberFieldOption';
  /** The product option ID. */
  entityId: Scalars['Int'];
  /** The product option name. */
  name: Scalars['String'];
  /** Number value. */
  number: Scalars['Float'];
};

/** Cart selected number field option input object */
export type CartSelectedNumberFieldOptionInput = {
  /** Number value. */
  number: Scalars['Float'];
  /** The product option ID. */
  optionEntityId: Scalars['Int'];
};

/** Selected option for the item. */
export type CartSelectedOption = {
  /** The product option ID. */
  entityId: Scalars['Int'];
  /** The product option name. */
  name: Scalars['String'];
};

/** Selected product options. */
export type CartSelectedOptionsInput = {
  /** List of selected checkbox options. */
  checkboxes?: InputMaybe<Array<CartSelectedCheckboxOptionInput>>;
  /** List of selected date field options. */
  dateFields?: InputMaybe<Array<CartSelectedDateFieldOptionInput>>;
  /** List of selected multi-line text field options. */
  multiLineTextFields?: InputMaybe<Array<CartSelectedMultiLineTextFieldOptionInput>>;
  /** List of selected multiple choice options. */
  multipleChoices?: InputMaybe<Array<CartSelectedMultipleChoiceOptionInput>>;
  /** List of selected number field options. */
  numberFields?: InputMaybe<Array<CartSelectedNumberFieldOptionInput>>;
  /** List of selected text field options. */
  textFields?: InputMaybe<Array<CartSelectedTextFieldOptionInput>>;
};

/** Selected text field option. */
export type CartSelectedTextFieldOption = CartSelectedOption & {
  __typename?: 'CartSelectedTextFieldOption';
  /** The product option ID. */
  entityId: Scalars['Int'];
  /** The product option name. */
  name: Scalars['String'];
  /** Text value. */
  text: Scalars['String'];
};

/** Cart selected multiple line text field option input object */
export type CartSelectedTextFieldOptionInput = {
  /** The product option ID. */
  optionEntityId: Scalars['Int'];
  /** TODO */
  text: Scalars['String'];
};

/** Storefront catalog settings. */
export type Catalog = {
  __typename?: 'Catalog';
  /** Product comparisons enabled. */
  productComparisonsEnabled?: Maybe<Scalars['Boolean']>;
};

/** Product Option */
export type CatalogProductOption = {
  /** Display name for the option. */
  displayName: Scalars['String'];
  /** Unique ID for the option. */
  entityId: Scalars['Int'];
  /** One of the option values is required to be selected for the checkout. */
  isRequired: Scalars['Boolean'];
  /** Indicates whether it is a variant option or modifier. */
  isVariantOption: Scalars['Boolean'];
};

/** Product Option Value */
export type CatalogProductOptionValue = {
  /** Unique ID for the option value. */
  entityId: Scalars['Int'];
  /** Indicates whether this value is the chosen default selected value. */
  isDefault: Scalars['Boolean'];
  /** Indicates whether this value is selected based on sku/variantEntityId/optionValueIds overlay requested on the product node level. */
  isSelected?: Maybe<Scalars['Boolean']>;
  /** Label for the option value. */
  label: Scalars['String'];
};

/** Category */
export type Category = Node & {
  __typename?: 'Category';
  /** Category breadcrumbs. */
  breadcrumbs: BreadcrumbConnection;
  /** Default image for the category. */
  defaultImage?: Maybe<Image>;
  /** Category default product sort. */
  defaultProductSort?: Maybe<CategoryProductSort>;
  /** Category description. */
  description: Scalars['String'];
  /** Unique ID for the category. */
  entityId: Scalars['Int'];
  /** The ID of an object */
  id: Scalars['ID'];
  /** Metafield data related to a category. */
  metafields: MetafieldConnection;
  /** Category name. */
  name: Scalars['String'];
  /** Category path. */
  path: Scalars['String'];
  /** List of products associated with category */
  products: ProductConnection;
  /** Category SEO details. */
  seo: SeoDetails;
  /**
   * Category shop by price money ranges.
   * @deprecated Alpha version. Do not use in production.
   */
  shopByPriceRanges: ShopByPriceConnection;
};


/** Category */
export type CategoryBreadcrumbsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  depth: Scalars['Int'];
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Category */
export type CategoryMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  keys?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['Int']>;
  namespace: Scalars['String'];
};


/** Category */
export type CategoryProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  hideOutOfStock?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<CategoryProductSort>;
};


/** Category */
export type CategoryShopByPriceRangesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<CurrencyCode>;
  first?: InputMaybe<Scalars['Int']>;
  includeTax?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CategoryEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CategoryEdge = {
  __typename?: 'CategoryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Category;
};

/** A connection to a list of items. */
export type CategoryPageBannerConnection = {
  __typename?: 'CategoryPageBannerConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CategoryPageBannerEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CategoryPageBannerEdge = {
  __typename?: 'CategoryPageBannerEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Banner;
};

/** Product sorting by categories. */
export type CategoryProductSort =
  | 'A_TO_Z'
  | 'BEST_REVIEWED'
  | 'BEST_SELLING'
  | 'DEFAULT'
  | 'FEATURED'
  | 'HIGHEST_PRICE'
  | 'LOWEST_PRICE'
  | 'NEWEST'
  | 'Z_TO_A';

/** Redirect to a category. */
export type CategoryRedirect = {
  __typename?: 'CategoryRedirect';
  /** Entity id. */
  entityId: Scalars['Int'];
  /** The ID of an object. */
  id: Scalars['ID'];
  /** Relative destination url. */
  path: Scalars['String'];
};

/** Category Filter */
export type CategorySearchFilter = SearchProductFilter & {
  __typename?: 'CategorySearchFilter';
  /** List of available categories. */
  categories: CategorySearchFilterItemConnection;
  /** Indicates whether to display product count next to the filter. */
  displayProductCount: Scalars['Boolean'];
  /** Indicates whether filter is collapsed by default. */
  isCollapsedByDefault: Scalars['Boolean'];
  /** Display name for the filter. */
  name: Scalars['String'];
};


/** Category Filter */
export type CategorySearchFilterCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Specific category filter item */
export type CategorySearchFilterItem = {
  __typename?: 'CategorySearchFilterItem';
  /** Category ID. */
  entityId: Scalars['Int'];
  /** Indicates whether category is selected. */
  isSelected: Scalars['Boolean'];
  /** Category name. */
  name: Scalars['String'];
  /** Indicates how many products available for this filter. */
  productCount: Scalars['Int'];
  /** List of available sub-categories. */
  subCategories: SubCategorySearchFilterItemConnection;
};


/** Specific category filter item */
export type CategorySearchFilterItemSubCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type CategorySearchFilterItemConnection = {
  __typename?: 'CategorySearchFilterItemConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CategorySearchFilterItemEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CategorySearchFilterItemEdge = {
  __typename?: 'CategorySearchFilterItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: CategorySearchFilterItem;
};

/** An item in a tree of categories. */
export type CategoryTreeItem = {
  __typename?: 'CategoryTreeItem';
  /** Subcategories of this category */
  children: Array<CategoryTreeItem>;
  /** The description of this category. */
  description: Scalars['String'];
  /** The id category. */
  entityId: Scalars['Int'];
  /** If a category has children. */
  hasChildren: Scalars['Boolean'];
  /** The category image. */
  image?: Maybe<Image>;
  /** The name of category. */
  name: Scalars['String'];
  /** Path assigned to this category */
  path: Scalars['String'];
  /** The number of products in this category. */
  productCount: Scalars['Int'];
};

/** The Channel */
export type Channel = {
  __typename?: 'Channel';
  /** The ID of the channel. */
  entityId: Scalars['Long'];
  /** Metafield data related to a channel. */
  metafields: MetafieldConnection;
};


/** The Channel */
export type ChannelMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  keys?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['Int']>;
  namespace: Scalars['String'];
};

/** A simple yes/no question represented by a checkbox. */
export type CheckboxOption = CatalogProductOption & {
  __typename?: 'CheckboxOption';
  /** Indicates the default checked status. */
  checkedByDefault: Scalars['Boolean'];
  /** Option value entity ID used for specifying the checkbox is checked. */
  checkedOptionValueEntityId: Scalars['Int'];
  /** Display name for the option. */
  displayName: Scalars['String'];
  /** Unique ID for the option. */
  entityId: Scalars['Int'];
  /** One of the option values is required to be selected for the checkout. */
  isRequired: Scalars['Boolean'];
  /** Indicates whether it is a variant option or modifier. */
  isVariantOption: Scalars['Boolean'];
  /** Label of the checkbox option. */
  label: Scalars['String'];
  /** Option value entity ID used for specifying the checkbox is not checked. */
  uncheckedOptionValueEntityId: Scalars['Int'];
};

/** The checkout. */
export type Checkout = Node & {
  __typename?: 'Checkout';
  /** Billing address information. */
  billingAddress?: Maybe<CheckoutBillingAddress>;
  /** Cart associated with the checkout. */
  cart?: Maybe<Cart>;
  /** Coupons applied at checkout level. */
  coupons: Array<CheckoutCoupon>;
  /** Time when the checkout was created. */
  createdAt: DateTimeExtended;
  /** Shopper's message provided as details for the order to be created from the checkout. */
  customerMessage?: Maybe<Scalars['String']>;
  /** Checkout ID. */
  entityId: Scalars['String'];
  /** Gift wrapping cost for all items, including or excluding tax. */
  giftWrappingCostTotal?: Maybe<Money>;
  /** The total payable amount, before applying any store credit or gift certificate. */
  grandTotal?: Maybe<Money>;
  /** Handling cost for all consignments including or excluding tax. */
  handlingCostTotal?: Maybe<Money>;
  /** The ID of an object */
  id: Scalars['ID'];
  /** Order associated with the checkout. */
  order?: Maybe<Order>;
  /** GrandTotal subtract the store-credit amount. */
  outstandingBalance?: Maybe<Money>;
  /** List of promotions */
  promotions: Array<CheckoutPromotion>;
  /** List of shipping consignments. */
  shippingConsignments?: Maybe<Array<CheckoutShippingConsignment>>;
  /** Total shipping cost before any discounts are applied. */
  shippingCostTotal?: Maybe<Money>;
  /** Subtotal of the checkout before applying item-level discounts. Tax inclusive based on the store settings. */
  subtotal?: Maybe<Money>;
  /** Total amount of taxes applied. */
  taxTotal?: Maybe<Money>;
  /** List of taxes applied. */
  taxes?: Maybe<Array<CheckoutTax>>;
  /** Time when the checkout was last updated. */
  updatedAt: DateTimeExtended;
};

/** Checkout address. */
export type CheckoutAddress = {
  /** Address line 1. */
  address1?: Maybe<Scalars['String']>;
  /** Address line 2. */
  address2?: Maybe<Scalars['String']>;
  /** Name of the city. */
  city?: Maybe<Scalars['String']>;
  /** Company name. */
  company?: Maybe<Scalars['String']>;
  /** Country code. */
  countryCode: Scalars['String'];
  /** List of custom fields. */
  customFields: Array<CheckoutAddressCheckboxesCustomField | CheckoutAddressDateCustomField | CheckoutAddressMultipleChoiceCustomField | CheckoutAddressNumberCustomField | CheckoutAddressPasswordCustomField | CheckoutAddressTextFieldCustomField>;
  /** Email address. */
  email?: Maybe<Scalars['String']>;
  /** The first name. */
  firstName?: Maybe<Scalars['String']>;
  /** The last name. */
  lastName?: Maybe<Scalars['String']>;
  /** Phone number. */
  phone?: Maybe<Scalars['String']>;
  /** Postal code. */
  postalCode?: Maybe<Scalars['String']>;
  /** State or province. */
  stateOrProvince?: Maybe<Scalars['String']>;
  /** Code of the state or province. */
  stateOrProvinceCode?: Maybe<Scalars['String']>;
};

/** Checkboxes custom field. */
export type CheckoutAddressCheckboxesCustomField = CheckoutAddressCustomField & {
  __typename?: 'CheckoutAddressCheckboxesCustomField';
  /** Custom field ID. */
  entityId: Scalars['Int'];
  /** List of custom field value IDs. */
  valueEntityIds: Array<Scalars['Int']>;
};

/** Checkout address checkboxes custom field input object */
export type CheckoutAddressCheckboxesCustomFieldInput = {
  /** The custom field ID. */
  fieldEntityId: Scalars['Int'];
  /** List of custom field value IDs. */
  fieldValueEntityIds: Array<Scalars['Int']>;
};

/** Custom field of the checkout address. */
export type CheckoutAddressCustomField = {
  /** Custom field ID. */
  entityId: Scalars['Int'];
};

/** Checkout address custom field input object */
export type CheckoutAddressCustomFieldInput = {
  /** List of checkboxes custom fields. */
  checkboxes?: InputMaybe<Array<CheckoutAddressCheckboxesCustomFieldInput>>;
  /** List of date custom fields. */
  dates?: InputMaybe<Array<CheckoutAddressDateCustomFieldInput>>;
  /** List of multiple choice custom fields. */
  multipleChoices?: InputMaybe<Array<CheckoutAddressMultipleChoiceCustomFieldInput>>;
  /** List of number custom fields. */
  numbers?: InputMaybe<Array<CheckoutAddressNumberCustomFieldInput>>;
  /** List of password custom fields. */
  passwords?: InputMaybe<Array<CheckoutAddressPasswordCustomFieldInput>>;
  /** List of text custom fields. */
  texts?: InputMaybe<Array<CheckoutAddressTextCustomFieldInput>>;
};

/** Date custom field. */
export type CheckoutAddressDateCustomField = CheckoutAddressCustomField & {
  __typename?: 'CheckoutAddressDateCustomField';
  /** Date value. */
  date: DateTimeExtended;
  /** Custom field ID. */
  entityId: Scalars['Int'];
};

/** Checkout address date custom field input object */
export type CheckoutAddressDateCustomFieldInput = {
  /** Date value. */
  date: Scalars['DateTime'];
  /** The custom field ID. */
  fieldEntityId: Scalars['Int'];
};

/** Checkout address input object */
export type CheckoutAddressInput = {
  /** Address line 1 */
  address1?: InputMaybe<Scalars['String']>;
  /** Address line 2 */
  address2?: InputMaybe<Scalars['String']>;
  /** Name of the city */
  city?: InputMaybe<Scalars['String']>;
  /** Company name */
  company?: InputMaybe<Scalars['String']>;
  /** Country code */
  countryCode: Scalars['String'];
  /** List of custom fields */
  customFields?: InputMaybe<CheckoutAddressCustomFieldInput>;
  /** Email address */
  email?: InputMaybe<Scalars['String']>;
  /** The first name */
  firstName?: InputMaybe<Scalars['String']>;
  /** The last name */
  lastName?: InputMaybe<Scalars['String']>;
  /** Phone number */
  phone?: InputMaybe<Scalars['String']>;
  /** Postal code */
  postalCode?: InputMaybe<Scalars['String']>;
  /** Should we save this address? */
  shouldSaveAddress: Scalars['Boolean'];
  /** State or province */
  stateOrProvince?: InputMaybe<Scalars['String']>;
  /** Code of the state or province */
  stateOrProvinceCode?: InputMaybe<Scalars['String']>;
};

/** Multiple choice custom field. */
export type CheckoutAddressMultipleChoiceCustomField = CheckoutAddressCustomField & {
  __typename?: 'CheckoutAddressMultipleChoiceCustomField';
  /** Custom field ID. */
  entityId: Scalars['Int'];
  /** Custom field value ID. */
  valueEntityId: Scalars['Int'];
};

/** Checkout address multiple choice custom field input object */
export type CheckoutAddressMultipleChoiceCustomFieldInput = {
  /** The custom field ID. */
  fieldEntityId: Scalars['Int'];
  /** The custom field value ID. */
  fieldValueEntityId: Scalars['Int'];
};

/** Number custom field. */
export type CheckoutAddressNumberCustomField = CheckoutAddressCustomField & {
  __typename?: 'CheckoutAddressNumberCustomField';
  /** Custom field ID. */
  entityId: Scalars['Int'];
  /** Number value. */
  number: Scalars['Float'];
};

/** Checkout address number custom field input object */
export type CheckoutAddressNumberCustomFieldInput = {
  /** The custom field ID. */
  fieldEntityId: Scalars['Int'];
  /** Number value. */
  number: Scalars['Float'];
};

/** Password custom field. */
export type CheckoutAddressPasswordCustomField = CheckoutAddressCustomField & {
  __typename?: 'CheckoutAddressPasswordCustomField';
  /** Custom field ID. */
  entityId: Scalars['Int'];
  /** Password value. */
  password: Scalars['String'];
};

/** Checkout address password custom field input object */
export type CheckoutAddressPasswordCustomFieldInput = {
  /** The custom field ID. */
  fieldEntityId: Scalars['Int'];
  /** Password value. */
  password: Scalars['String'];
};

/** Checkout address text custom field input object */
export type CheckoutAddressTextCustomFieldInput = {
  /** The custom field ID. */
  fieldEntityId: Scalars['Int'];
  /** Text value. */
  text: Scalars['String'];
};

/** Text custom field. */
export type CheckoutAddressTextFieldCustomField = CheckoutAddressCustomField & {
  __typename?: 'CheckoutAddressTextFieldCustomField';
  /** Custom field ID. */
  entityId: Scalars['Int'];
  /** Text value. */
  text: Scalars['String'];
};

/** Available shipping option. */
export type CheckoutAvailableShippingOption = {
  __typename?: 'CheckoutAvailableShippingOption';
  /** Shipping option cost. */
  cost: Money;
  /** Shipping option description. */
  description: Scalars['String'];
  /** Shipping option ID. */
  entityId: Scalars['String'];
  /** Shipping option image URL. */
  imageUrl?: Maybe<Scalars['String']>;
  /** Is this shipping method the recommended shipping option or not. */
  isRecommended: Scalars['Boolean'];
  /** An estimate of the arrival time. */
  transitTime?: Maybe<Scalars['String']>;
  /** Shipping option type. Flat rate, UPS, etc. */
  type: Scalars['String'];
};

/** Checkboxes billing address. */
export type CheckoutBillingAddress = CheckoutAddress & {
  __typename?: 'CheckoutBillingAddress';
  /** Address line 1. */
  address1?: Maybe<Scalars['String']>;
  /** Address line 2. */
  address2?: Maybe<Scalars['String']>;
  /** Name of the city. */
  city?: Maybe<Scalars['String']>;
  /** Company name. */
  company?: Maybe<Scalars['String']>;
  /** Country code. */
  countryCode: Scalars['String'];
  /** List of custom fields. */
  customFields: Array<CheckoutAddressCheckboxesCustomField | CheckoutAddressDateCustomField | CheckoutAddressMultipleChoiceCustomField | CheckoutAddressNumberCustomField | CheckoutAddressPasswordCustomField | CheckoutAddressTextFieldCustomField>;
  /** Email address. */
  email?: Maybe<Scalars['String']>;
  /** Billing address ID. */
  entityId: Scalars['String'];
  /** The first name. */
  firstName?: Maybe<Scalars['String']>;
  /** The last name. */
  lastName?: Maybe<Scalars['String']>;
  /** Phone number. */
  phone?: Maybe<Scalars['String']>;
  /** Postal code. */
  postalCode?: Maybe<Scalars['String']>;
  /** State or province. */
  stateOrProvince?: Maybe<Scalars['String']>;
  /** Code of the state or province. */
  stateOrProvinceCode?: Maybe<Scalars['String']>;
};

/** Checkboxes consignment address. */
export type CheckoutConsignmentAddress = CheckoutAddress & {
  __typename?: 'CheckoutConsignmentAddress';
  /** Address line 1. */
  address1?: Maybe<Scalars['String']>;
  /** Address line 2. */
  address2?: Maybe<Scalars['String']>;
  /** Name of the city. */
  city?: Maybe<Scalars['String']>;
  /** Company name. */
  company?: Maybe<Scalars['String']>;
  /** Country code. */
  countryCode: Scalars['String'];
  /** List of custom fields. */
  customFields: Array<CheckoutAddressCheckboxesCustomField | CheckoutAddressDateCustomField | CheckoutAddressMultipleChoiceCustomField | CheckoutAddressNumberCustomField | CheckoutAddressPasswordCustomField | CheckoutAddressTextFieldCustomField>;
  /** Email address. */
  email?: Maybe<Scalars['String']>;
  /** The first name. */
  firstName?: Maybe<Scalars['String']>;
  /** The last name. */
  lastName?: Maybe<Scalars['String']>;
  /** Phone number. */
  phone?: Maybe<Scalars['String']>;
  /** Postal code. */
  postalCode?: Maybe<Scalars['String']>;
  /** State or province. */
  stateOrProvince?: Maybe<Scalars['String']>;
  /** Code of the state or province. */
  stateOrProvinceCode?: Maybe<Scalars['String']>;
};

/** Checkout consignment line item input object */
export type CheckoutConsignmentLineItemInput = {
  /** The line item id */
  lineItemEntityId: Scalars['String'];
  /** The total number of consignment line items */
  quantity: Scalars['Int'];
};

/** The checkout coupon. */
export type CheckoutCoupon = {
  __typename?: 'CheckoutCoupon';
  /** The coupon code. */
  code: Scalars['String'];
  /** The coupon type. */
  couponType?: Maybe<CouponType>;
  /** The discounted amount applied within a given context. */
  discountedAmount: Money;
  /** The coupon ID. */
  entityId: Scalars['Int'];
};

/** Checkout mutations */
export type CheckoutMutations = {
  __typename?: 'CheckoutMutations';
  /** Creates a checkout billing address. */
  addCheckoutBillingAddress?: Maybe<AddCheckoutBillingAddressResult>;
  /** Creates a checkout shipping consignments. */
  addCheckoutShippingConsignments?: Maybe<AddCheckoutShippingConsignmentsResult>;
  /** Applies a checkout coupon. */
  applyCheckoutCoupon?: Maybe<ApplyCheckoutCouponResult>;
  /** Applies a checkout spam protection. */
  applyCheckoutSpamProtection?: Maybe<ApplyCheckoutSpamProtectionResult>;
  /** Completes the checkout. */
  completeCheckout?: Maybe<CompleteCheckoutResult>;
  /** Deletes a checkout consignment. */
  deleteCheckoutConsignment?: Maybe<DeleteCheckoutConsignmentResult>;
  /** Selects a checkout shipping option. */
  selectCheckoutShippingOption?: Maybe<SelectCheckoutShippingOptionResult>;
  /** Unapply a checkout coupon. */
  unapplyCheckoutCoupon?: Maybe<UnapplyCheckoutCouponResult>;
  /** Update a checkout billing address. */
  updateCheckoutBillingAddress?: Maybe<UpdateCheckoutBillingAddressResult>;
  /** Updates a checkout customer message. */
  updateCheckoutCustomerMessage?: Maybe<UpdateCheckoutCustomerMessageResult>;
  /** Updates a checkout shipping consignments. */
  updateCheckoutShippingConsignment?: Maybe<UpdateCheckoutShippingConsignmentResult>;
};


/** Checkout mutations */
export type CheckoutMutationsAddCheckoutBillingAddressArgs = {
  input: AddCheckoutBillingAddressInput;
};


/** Checkout mutations */
export type CheckoutMutationsAddCheckoutShippingConsignmentsArgs = {
  input: AddCheckoutShippingConsignmentsInput;
};


/** Checkout mutations */
export type CheckoutMutationsApplyCheckoutCouponArgs = {
  input: ApplyCheckoutCouponInput;
};


/** Checkout mutations */
export type CheckoutMutationsApplyCheckoutSpamProtectionArgs = {
  input: ApplyCheckoutSpamProtectionInput;
};


/** Checkout mutations */
export type CheckoutMutationsCompleteCheckoutArgs = {
  input: CompleteCheckoutInput;
};


/** Checkout mutations */
export type CheckoutMutationsDeleteCheckoutConsignmentArgs = {
  input: DeleteCheckoutConsignmentInput;
};


/** Checkout mutations */
export type CheckoutMutationsSelectCheckoutShippingOptionArgs = {
  input: SelectCheckoutShippingOptionInput;
};


/** Checkout mutations */
export type CheckoutMutationsUnapplyCheckoutCouponArgs = {
  input: UnapplyCheckoutCouponInput;
};


/** Checkout mutations */
export type CheckoutMutationsUpdateCheckoutBillingAddressArgs = {
  input: UpdateCheckoutBillingAddressInput;
};


/** Checkout mutations */
export type CheckoutMutationsUpdateCheckoutCustomerMessageArgs = {
  input: UpdateCheckoutCustomerMessageInput;
};


/** Checkout mutations */
export type CheckoutMutationsUpdateCheckoutShippingConsignmentArgs = {
  input: UpdateCheckoutShippingConsignmentInput;
};

/** The checkout promotion */
export type CheckoutPromotion = {
  __typename?: 'CheckoutPromotion';
  /** The checkout promotion banners. */
  banners: Array<CheckoutPromotionBanner>;
};

/** The checkout promotion banner */
export type CheckoutPromotionBanner = {
  __typename?: 'CheckoutPromotionBanner';
  /** The checkout promotion banner ID. */
  entityId: Scalars['Int'];
  /** The list of the locations where the banner will display. */
  locations: Array<CheckoutPromotionBannerLocation>;
  /** Text of the banner. */
  text: Scalars['String'];
  /** Type of the banner. */
  type: CheckoutPromotionBannerType;
};

/** Checkout promotion banner location. */
export type CheckoutPromotionBannerLocation =
  | 'CART_PAGE'
  | 'CHECKOUT_PAGE'
  | 'HOME_PAGE'
  | 'PRODUCT_PAGE';

/** Checkout promotion banner type. */
export type CheckoutPromotionBannerType =
  | 'APPLIED'
  | 'ELIGIBLE'
  | 'PROMOTION'
  | 'UPSELL';

/** Selected shipping option. */
export type CheckoutSelectedShippingOption = {
  __typename?: 'CheckoutSelectedShippingOption';
  /** Shipping option cost. */
  cost: Money;
  /** Shipping option description. */
  description: Scalars['String'];
  /** Shipping option ID. */
  entityId: Scalars['String'];
  /** Shipping option image URL. */
  imageUrl?: Maybe<Scalars['String']>;
  /** An estimate of the arrival time. */
  transitTime?: Maybe<Scalars['String']>;
  /** Shipping option type. Flat rate, UPS, etc. */
  type: Scalars['String'];
};

/** Checkout settings. */
export type CheckoutSettings = {
  __typename?: 'CheckoutSettings';
  /** Indicates whether ReCaptcha is enabled on checkout. */
  reCaptchaEnabled: Scalars['Boolean'];
};

/** Checkout shipping consignment. */
export type CheckoutShippingConsignment = {
  __typename?: 'CheckoutShippingConsignment';
  /** Shipping consignment address. */
  address: CheckoutConsignmentAddress;
  /** List of available shipping options. */
  availableShippingOptions?: Maybe<Array<CheckoutAvailableShippingOption>>;
  /** List of coupons applied to this shipping consignment. */
  coupons?: Maybe<Array<CheckoutCoupon>>;
  /** Shipping consignment ID. */
  entityId: Scalars['String'];
  /** The handling cost of shipping for the consignment. */
  handlingCost?: Maybe<Money>;
  /** List of line item IDs for the consignment. */
  lineItemIds: Array<Scalars['String']>;
  /** Selected shipping option. */
  selectedShippingOption?: Maybe<CheckoutSelectedShippingOption>;
  /** The shipping cost for the consignment. */
  shippingCost?: Maybe<Money>;
};

/** Checkout shipping consignments input object */
export type CheckoutShippingConsignmentInput = {
  /** Shipping consignment address. */
  address: CheckoutAddressInput;
  /** List of line items for the consignment. */
  lineItems: Array<CheckoutConsignmentLineItemInput>;
};

/** The checkout. */
export type CheckoutTax = {
  __typename?: 'CheckoutTax';
  /** Tax amount. */
  amount: Money;
  /** Name of the tax. */
  name: Scalars['String'];
};

/** Additional information about the collection. */
export type CollectionInfo = {
  __typename?: 'CollectionInfo';
  /** Total items in the collection despite pagination. */
  totalItems?: Maybe<Scalars['Long']>;
};

/** Complete checkout input object */
export type CompleteCheckoutInput = {
  /** The checkout id */
  checkoutEntityId: Scalars['String'];
};

/** Complete checkout result */
export type CompleteCheckoutResult = {
  __typename?: 'CompleteCheckoutResult';
  /** The Order ID created as a result of the checkout. */
  orderEntityId?: Maybe<Scalars['Int']>;
  /** The access token to be used to complete a payment. */
  paymentAccessToken?: Maybe<Scalars['String']>;
};

/** Contact field */
export type ContactField = {
  __typename?: 'ContactField';
  /** Store address line. */
  address: Scalars['String'];
  /** Store address type. */
  addressType: Scalars['String'];
  /** Store country. */
  country: Scalars['String'];
  /** Store email. */
  email: Scalars['String'];
  /** Store phone number. */
  phone: Scalars['String'];
};

/** A contact page. */
export type ContactPage = Node & WebPage & {
  __typename?: 'ContactPage';
  /** The contact fields that should be used on the page. */
  contactFields: Array<Scalars['String']>;
  /** Unique ID for the web page. */
  entityId: Scalars['Int'];
  /** The body of the page. */
  htmlBody: Scalars['String'];
  /** The ID of an object */
  id: Scalars['ID'];
  /** Whether or not the page should be visible in the navigation menu. */
  isVisibleInNavigation: Scalars['Boolean'];
  /** Page name. */
  name: Scalars['String'];
  /** Unique ID for the parent page. */
  parentEntityId?: Maybe<Scalars['Int']>;
  /** The URL path of the page. */
  path: Scalars['String'];
  /** The plain text summary of the page body. */
  plainTextSummary: Scalars['String'];
  /** The rendered regions for the web page. */
  renderedRegions: RenderedRegionsByPageType;
  /** Page SEO details. */
  seo: SeoDetails;
};


/** A contact page. */
export type ContactPagePlainTextSummaryArgs = {
  characterLimit?: InputMaybe<Scalars['Int']>;
};

/** The page content. */
export type Content = {
  __typename?: 'Content';
  /** Banners details. */
  banners?: Maybe<Banners>;
  /** Blog details. */
  blog?: Maybe<Blog>;
  /** Page details. */
  page?: Maybe<BlogIndexPage | ContactPage | ExternalLinkPage | NormalPage | RawHtmlPage>;
  /** Details of the pages. */
  pages: PageConnection;
  /** The rendered regions by specific page. */
  renderedRegionsByPageType: RenderedRegionsByPageType;
  /** The rendered regions by specific page and id. */
  renderedRegionsByPageTypeAndEntityId: RenderedRegionsByPageType;
};


/** The page content. */
export type ContentPageArgs = {
  entityId: Scalars['Int'];
};


/** The page content. */
export type ContentPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<WebPagesFiltersInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The page content. */
export type ContentRenderedRegionsByPageTypeArgs = {
  pageType: PageType;
};


/** The page content. */
export type ContentRenderedRegionsByPageTypeAndEntityIdArgs = {
  entityId: Scalars['Long'];
  entityPageType: EntityPageType;
};

/** The coupon type. */
export type CouponType =
  | 'FREE_SHIPPING'
  | 'PERCENTAGE_DISCOUNT'
  | 'PER_ITEM_DISCOUNT'
  | 'PER_TOTAL_DISCOUNT'
  | 'PROMOTION'
  | 'SHIPPING_DISCOUNT';

/** Create cart input object */
export type CreateCartInput = {
  /** ISO-4217 currency code */
  currencyCode?: InputMaybe<Scalars['String']>;
  /** List of gift certificates */
  giftCertificates?: InputMaybe<Array<CartGiftCertificateInput>>;
  /** List of cart line items */
  lineItems?: InputMaybe<Array<CartLineItemInput>>;
  /** Locale of the cart */
  locale?: InputMaybe<Scalars['String']>;
};

/** Create cart result */
export type CreateCartResult = {
  __typename?: 'CreateCartResult';
  /** The Cart that is created as a result of mutation. */
  cart?: Maybe<Cart>;
};

/** Create wishlist input object */
export type CreateWishlistInput = {
  /** A wishlist visibility mode */
  isPublic: Scalars['Boolean'];
  /** A wishlist items */
  items?: InputMaybe<Array<WishlistItemInput>>;
  /** A wishlist name */
  name: Scalars['String'];
};

/** Create wishlist */
export type CreateWishlistResult = {
  __typename?: 'CreateWishlistResult';
  /** The newly created wishlist */
  result: Wishlist;
};

/** Currency details. */
export type Currency = {
  __typename?: 'Currency';
  /** Currency code. */
  code: CurrencyCode;
  /** Currency display settings. */
  display: CurrencyDisplay;
  /** Currency ID. */
  entityId: Scalars['Int'];
  /** Exchange rate relative to default currency. */
  exchangeRate: Scalars['Float'];
  /** Flag image URL. */
  flagImage?: Maybe<Scalars['String']>;
  /** Indicates whether this currency is active. */
  isActive: Scalars['Boolean'];
  /** Indicates whether this currency is transactional. */
  isTransactional: Scalars['Boolean'];
  /** Currency name. */
  name: Scalars['String'];
};

/** A connection to a list of items. */
export type CurrencyConnection = {
  __typename?: 'CurrencyConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CurrencyEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Currency display settings. */
export type CurrencyDisplay = {
  __typename?: 'CurrencyDisplay';
  /** Currency decimal places. */
  decimalPlaces: Scalars['Int'];
  /** Currency decimal token. */
  decimalToken: Scalars['String'];
  /** Currency symbol. */
  symbol: Scalars['String'];
  /** Currency symbol. */
  symbolPlacement: CurrencySymbolPosition;
  /** Currency thousands token. */
  thousandsToken: Scalars['String'];
};

/** An edge in a connection. */
export type CurrencyEdge = {
  __typename?: 'CurrencyEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Currency;
};

/** Currency symbol position */
export type CurrencySymbolPosition =
  | 'LEFT'
  | 'RIGHT';

/** Custom field */
export type CustomField = {
  __typename?: 'CustomField';
  /** Custom field id. */
  entityId: Scalars['Int'];
  /** Name of the custom field. */
  name: Scalars['String'];
  /** Value of the custom field. */
  value: Scalars['String'];
};

/** A connection to a list of items. */
export type CustomFieldConnection = {
  __typename?: 'CustomFieldConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CustomFieldEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CustomFieldEdge = {
  __typename?: 'CustomFieldEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: CustomField;
};

/** A customer that shops on a store */
export type Customer = {
  __typename?: 'Customer';
  /** Customer addresses count. */
  addressCount: Scalars['Int'];
  /** Customer attributes count. */
  attributeCount: Scalars['Int'];
  /** Customer attributes. */
  attributes: CustomerAttributes;
  /** The company name of the customer. */
  company: Scalars['String'];
  /** The customer group id of the customer. */
  customerGroupId: Scalars['Int'];
  /** The email address of the customer. */
  email: Scalars['String'];
  /** The ID of the customer. */
  entityId: Scalars['Int'];
  /** The first name of the customer. */
  firstName: Scalars['String'];
  /** The last name of the customer. */
  lastName: Scalars['String'];
  /** The notes of the customer. */
  notes: Scalars['String'];
  /** The phone number of the customer. */
  phone: Scalars['String'];
  /** Customer store credit. */
  storeCredit: Array<Money>;
  /** The tax exempt category of the customer. */
  taxExemptCategory: Scalars['String'];
  /** Customer wishlists. */
  wishlists: WishlistConnection;
};


/** A customer that shops on a store */
export type CustomerWishlistsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<WishlistFiltersInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A custom, store-specific attribute for a customer */
export type CustomerAttribute = {
  __typename?: 'CustomerAttribute';
  /** The ID of the custom customer attribute */
  entityId: Scalars['Int'];
  /** The name of the custom customer attribute */
  name: Scalars['String'];
  /** The value of the custom customer attribute */
  value?: Maybe<Scalars['String']>;
};

/** Custom, store-specific customer attributes */
export type CustomerAttributes = {
  __typename?: 'CustomerAttributes';
  /** A custom, store-specific attribute for a customer */
  attribute: CustomerAttribute;
};


/** Custom, store-specific customer attributes */
export type CustomerAttributesAttributeArgs = {
  entityId: Scalars['Int'];
};

/** A calendar for allowing selection of a date. */
export type DateFieldOption = CatalogProductOption & {
  __typename?: 'DateFieldOption';
  /** The default timestamp of date option. */
  defaultValue?: Maybe<Scalars['DateTime']>;
  /** Display name for the option. */
  displayName: Scalars['String'];
  /** The earliest timestamp of date option. */
  earliest?: Maybe<Scalars['DateTime']>;
  /** Unique ID for the option. */
  entityId: Scalars['Int'];
  /** One of the option values is required to be selected for the checkout. */
  isRequired: Scalars['Boolean'];
  /** Indicates whether it is a variant option or modifier. */
  isVariantOption: Scalars['Boolean'];
  /** The latest timestamp of date option. */
  latest?: Maybe<Scalars['DateTime']>;
  /** Limit date by */
  limitDateBy: LimitDateOption;
};

/** Date Time Extended */
export type DateTimeExtended = {
  __typename?: 'DateTimeExtended';
  /** ISO-8601 formatted date in UTC */
  utc: Scalars['DateTime'];
};

/** Delete cart input object */
export type DeleteCartInput = {
  /** The cart id */
  cartEntityId: Scalars['String'];
};

/** Delete cart line item input object */
export type DeleteCartLineItemInput = {
  /** The cart id */
  cartEntityId: Scalars['String'];
  /** The line item id */
  lineItemEntityId: Scalars['String'];
};

/** Delete cart lien item result */
export type DeleteCartLineItemResult = {
  __typename?: 'DeleteCartLineItemResult';
  /** The Cart that is updated as a result of mutation. */
  cart?: Maybe<Cart>;
  /** The ID of the Cart if it is deleted as a result of mutation. */
  deletedCartEntityId?: Maybe<Scalars['String']>;
  /** The ID of the line item that is deleted as a result of mutation. */
  deletedLineItemEntityId?: Maybe<Scalars['String']>;
};

/** Delete cart result */
export type DeleteCartResult = {
  __typename?: 'DeleteCartResult';
  /** The ID of the Cart that is deleted as a result of mutation. */
  deletedCartEntityId?: Maybe<Scalars['String']>;
};

/** Delete checkout consignment input object */
export type DeleteCheckoutConsignmentInput = {
  /** The checkout id */
  checkoutEntityId: Scalars['String'];
  /** The consignment id */
  consignmentEntityId: Scalars['String'];
};

/** Delete checkout consignment result */
export type DeleteCheckoutConsignmentResult = {
  __typename?: 'DeleteCheckoutConsignmentResult';
  /** The Checkout that is updated as a result of mutation. */
  checkout?: Maybe<Checkout>;
};

/** Delete wishlist items input object */
export type DeleteWishlistItemsInput = {
  /** The wishlist id */
  entityId: Scalars['Int'];
  /** The wishlist item ids */
  itemEntityIds: Array<Scalars['Int']>;
};

/** Delete wishlist items */
export type DeleteWishlistItemsResult = {
  __typename?: 'DeleteWishlistItemsResult';
  /** The wishlist */
  result: Wishlist;
};

/** Delete wishlist */
export type DeleteWishlistResult = {
  __typename?: 'DeleteWishlistResult';
  /** The result of the operation */
  result: Scalars['String'];
};

/** Delete wishlists input object */
export type DeleteWishlistsInput = {
  /** The wishlist ids */
  entityIds: Array<Scalars['Int']>;
};

/** Display field */
export type DisplayField = {
  __typename?: 'DisplayField';
  /** Extended date format. */
  extendedDateFormat: Scalars['String'];
  /** Short date format. */
  shortDateFormat: Scalars['String'];
};

/** Distance */
export type Distance = {
  __typename?: 'Distance';
  /** Length unit */
  lengthUnit: LengthUnit;
  /** Distance in specified length unit */
  value: Scalars['Float'];
};

/** Filter locations by the distance */
export type DistanceFilter = {
  /** Signed decimal degrees without compass direction */
  latitude: Scalars['Float'];
  /** Length unit */
  lengthUnit: LengthUnit;
  /** Signed decimal degrees without compass direction */
  longitude: Scalars['Float'];
  /** Radius of search in length units specified in lengthUnit argument */
  radius: Scalars['Float'];
};

/** Entity page type */
export type EntityPageType =
  | 'BLOG_POST'
  | 'BRAND'
  | 'CATEGORY'
  | 'CONTACT_US'
  | 'PAGE'
  | 'PRODUCT';

/** An external link page. */
export type ExternalLinkPage = WebPage & {
  __typename?: 'ExternalLinkPage';
  /** Unique ID for the web page. */
  entityId: Scalars['Int'];
  /** Whether or not the page should be visible in the navigation menu. */
  isVisibleInNavigation: Scalars['Boolean'];
  /** The URL that the page links to. */
  link: Scalars['String'];
  /** Page name. */
  name: Scalars['String'];
  /** Unique ID for the parent page. */
  parentEntityId?: Maybe<Scalars['Int']>;
  /** Page SEO details. */
  seo: SeoDetails;
};

/** A form allowing selection and uploading of a file from the user's local computer. */
export type FileUploadFieldOption = CatalogProductOption & {
  __typename?: 'FileUploadFieldOption';
  /** Display name for the option. */
  displayName: Scalars['String'];
  /** Unique ID for the option. */
  entityId: Scalars['Int'];
  /** All possible file extensions. Empty means that all files allowed. */
  fileTypes: Array<Scalars['String']>;
  /** One of the option values is required to be selected for the checkout. */
  isRequired: Scalars['Boolean'];
  /** Indicates whether it is a variant option or modifier. */
  isVariantOption: Scalars['Boolean'];
  /** The maximum size of the file in kilobytes */
  maxFileSize: Scalars['Int'];
};

/** Gift wrapping for product */
export type GiftWrapping = {
  __typename?: 'GiftWrapping';
  /** Indicates whether commenting is allowed for the gift wrapping. */
  allowComments: Scalars['Boolean'];
  /** Gift wrapping id. */
  entityId: Scalars['Int'];
  /** Gift wrapping name. */
  name: Scalars['String'];
  /** Gift wrapping preview image url. */
  previewImageUrl?: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type GiftWrappingConnection = {
  __typename?: 'GiftWrappingConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GiftWrappingEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type GiftWrappingEdge = {
  __typename?: 'GiftWrappingEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: GiftWrapping;
};

/** Image */
export type Image = {
  __typename?: 'Image';
  /** Text description of an image that can be used for SEO and/or accessibility purposes. */
  altText: Scalars['String'];
  /** Indicates whether this is the primary image. */
  isDefault: Scalars['Boolean'];
  /** Absolute path to image using store CDN. */
  url: Scalars['String'];
  /** Absolute path to original image using store CDN. */
  urlOriginal: Scalars['String'];
};


/** Image */
export type ImageUrlArgs = {
  height?: InputMaybe<Scalars['Int']>;
  width: Scalars['Int'];
};

/** A connection to a list of items. */
export type ImageConnection = {
  __typename?: 'ImageConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ImageEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ImageEdge = {
  __typename?: 'ImageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Image;
};

/** An inventory */
export type Inventory = {
  __typename?: 'Inventory';
  /** Locations */
  locations: InventoryLocationConnection;
};


/** An inventory */
export type InventoryLocationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  cities?: InputMaybe<Array<Scalars['String']>>;
  codes?: InputMaybe<Array<Scalars['String']>>;
  countryCodes?: InputMaybe<Array<CountryCode>>;
  distanceFilter?: InputMaybe<DistanceFilter>;
  entityIds?: InputMaybe<Array<Scalars['Int']>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  serviceTypeIds?: InputMaybe<Array<Scalars['String']>>;
  states?: InputMaybe<Array<Scalars['String']>>;
  typeIds?: InputMaybe<Array<Scalars['String']>>;
};

/** Address */
export type InventoryAddress = {
  __typename?: 'InventoryAddress';
  /** Address line1. */
  address1: Scalars['String'];
  /** Address line2. */
  address2: Scalars['String'];
  /** Address city. */
  city: Scalars['String'];
  /** Address code. */
  code: Scalars['String'];
  /** Country code. */
  countryCode: Scalars['String'];
  /** Address description. */
  description?: Maybe<Scalars['String']>;
  /** Address email. */
  email: Scalars['String'];
  /** Address id. */
  entityId: Scalars['Int'];
  /** Address label. */
  label: Scalars['String'];
  /** Address latitude. */
  latitude?: Maybe<Scalars['Float']>;
  /** Address longitude. */
  longitude?: Maybe<Scalars['Float']>;
  /** Address phone. */
  phone: Scalars['String'];
  /** Address zip. */
  postalCode: Scalars['String'];
  /** Address state. */
  stateOrProvince: Scalars['String'];
};

/** Inventory By Locations */
export type InventoryByLocations = {
  __typename?: 'InventoryByLocations';
  /** Number of available products in stock. */
  availableToSell: Scalars['Long'];
  /** Indicates whether this product is in stock. */
  isInStock: Scalars['Boolean'];
  /** Distance between location and specified longitude and latitude */
  locationDistance?: Maybe<Distance>;
  /** Location code. */
  locationEntityCode: Scalars['String'];
  /** Location id. */
  locationEntityId: Scalars['Long'];
  /**
   * Location service type ids.
   * @deprecated Deprecated. Will be substituted with pickup methods.
   */
  locationEntityServiceTypeIds: Array<Scalars['String']>;
  /** Location type id. */
  locationEntityTypeId?: Maybe<Scalars['String']>;
  /** Indicates a threshold low-stock level. */
  warningLevel: Scalars['Int'];
};

/** Location */
export type InventoryLocation = {
  __typename?: 'InventoryLocation';
  /** Location address */
  address?: Maybe<InventoryAddress>;
  /**
   * Upcoming events
   * @deprecated Deprecated. Use specialHours instead
   */
  blackoutHours: Array<SpecialHour>;
  /** Location code. */
  code: Scalars['String'];
  /** Location description. */
  description?: Maybe<Scalars['String']>;
  /** Distance between location and specified longitude and latitude */
  distance?: Maybe<Distance>;
  /** Location id. */
  entityId: Scalars['Int'];
  /** Location label. */
  label: Scalars['String'];
  /** Metafield data related to a location. */
  metafields: MetafieldConnection;
  /** Location OperatingHours */
  operatingHours?: Maybe<OperatingHours>;
  /**
   * Location service type ids.
   * @deprecated Deprecated. Will be substituted with pickup methods.
   */
  serviceTypeIds: Array<Scalars['String']>;
  /** Upcoming events */
  specialHours: Array<SpecialHour>;
  /** Time zone of location */
  timeZone?: Maybe<Scalars['String']>;
  /** Location type id. */
  typeId?: Maybe<Scalars['String']>;
};


/** Location */
export type InventoryLocationMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  keys?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['Int']>;
  namespace: Scalars['String'];
};

/** A connection to a list of items. */
export type InventoryLocationConnection = {
  __typename?: 'InventoryLocationConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<InventoryLocationEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type InventoryLocationEdge = {
  __typename?: 'InventoryLocationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: InventoryLocation;
};

/** Inventory settings from control panel. */
export type InventorySettings = {
  __typename?: 'InventorySettings';
  /** Out of stock message. */
  defaultOutOfStockMessage: Scalars['String'];
  /** Flag to show or not on product filtering when option is out of stock */
  hideInProductFiltering: Scalars['Boolean'];
  /** The option out of stock behavior. */
  optionOutOfStockBehavior?: Maybe<OptionOutOfStockBehavior>;
  /** The product out of stock behavior. */
  productOutOfStockBehavior?: Maybe<ProductOutOfStockBehavior>;
  /** Show out of stock message on product listing pages */
  showOutOfStockMessage: Scalars['Boolean'];
  /** Show pre-order inventory */
  showPreOrderStockLevels: Scalars['Boolean'];
  /** Hide or show inventory node for product */
  stockLevelDisplay?: Maybe<StockLevelDisplay>;
  /** The behavior to use to update stock levels. */
  updateStockBehavior?: Maybe<UpdateStockBehavior>;
};

/** length unit */
export type LengthUnit =
  | 'Kilometres'
  | 'Miles';

/** Limit date by */
export type LimitDateOption =
  | 'EARLIEST_DATE'
  | 'LATEST_DATE'
  | 'NO_LIMIT'
  | 'RANGE';

/** Limit numbers by several options. */
export type LimitInputBy =
  | 'HIGHEST_VALUE'
  | 'LOWEST_VALUE'
  | 'NO_LIMIT'
  | 'RANGE';

/** A connection to a list of items. */
export type LocationConnection = {
  __typename?: 'LocationConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<LocationEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type LocationEdge = {
  __typename?: 'LocationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: InventoryByLocations;
};

/** Login result */
export type LoginResult = {
  __typename?: 'LoginResult';
  /** The currently logged in customer. */
  customer?: Maybe<Customer>;
  /**
   * The result of a login
   * @deprecated Use customer node instead.
   */
  result: Scalars['String'];
};

/** Logo field */
export type LogoField = {
  __typename?: 'LogoField';
  /** Store logo image. */
  image: Image;
  /** Logo title. */
  title: Scalars['String'];
};

/** Logout result */
export type LogoutResult = {
  __typename?: 'LogoutResult';
  /** The result of a logout */
  result: Scalars['String'];
};

/** Redirect to manually input url. */
export type ManualRedirect = {
  __typename?: 'ManualRedirect';
  /** Url. */
  url: Scalars['String'];
};

/** Measurement */
export type Measurement = {
  __typename?: 'Measurement';
  /** Unit of measurement. */
  unit: Scalars['String'];
  /** Unformatted weight measurement value. */
  value: Scalars['Float'];
};

/** A connection to a list of items. */
export type MetafieldConnection = {
  __typename?: 'MetafieldConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<MetafieldEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MetafieldEdge = {
  __typename?: 'MetafieldEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Metafields;
};

/** Key/Value pairs of data attached tied to a resource entity (product, brand, category, etc.) */
export type Metafields = {
  __typename?: 'Metafields';
  /** The ID of the metafield when referencing via our backend API. */
  entityId: Scalars['Int'];
  /** The ID of metafield. */
  id: Scalars['ID'];
  /** A label for identifying metafield's data value. */
  key: Scalars['String'];
  /** A metafield's value. */
  value: Scalars['String'];
};

/** A money object - includes currency code and a money amount */
export type Money = {
  __typename?: 'Money';
  /** Currency code of the current money. */
  currencyCode: Scalars['String'];
  /**
   * The formatted currency string for the current money.
   * @deprecated Deprecated. Don't use - it will be removed soon.
   */
  formatted?: Maybe<Scalars['String']>;
  /** The amount of money. */
  value: Scalars['BigDecimal'];
};

/** A min and max pair of money objects */
export type MoneyRange = {
  __typename?: 'MoneyRange';
  /** Maximum money object. */
  max: Money;
  /** Minimum money object. */
  min: Money;
};

/** A multi-line text input field, aka a text box. */
export type MultiLineTextFieldOption = CatalogProductOption & {
  __typename?: 'MultiLineTextFieldOption';
  /** Default value of the multiline text field option. */
  defaultValue?: Maybe<Scalars['String']>;
  /** Display name for the option. */
  displayName: Scalars['String'];
  /** Unique ID for the option. */
  entityId: Scalars['Int'];
  /** One of the option values is required to be selected for the checkout. */
  isRequired: Scalars['Boolean'];
  /** Indicates whether it is a variant option or modifier. */
  isVariantOption: Scalars['Boolean'];
  /** The maximum number of characters. */
  maxLength?: Maybe<Scalars['Int']>;
  /** The maximum number of lines. */
  maxLines?: Maybe<Scalars['Int']>;
  /** The minimum number of characters. */
  minLength?: Maybe<Scalars['Int']>;
};

/** An option type that has a fixed list of values. */
export type MultipleChoiceOption = CatalogProductOption & {
  __typename?: 'MultipleChoiceOption';
  /** Display name for the option. */
  displayName: Scalars['String'];
  /** The chosen display style for this multiple choice option. */
  displayStyle: Scalars['String'];
  /** Unique ID for the option. */
  entityId: Scalars['Int'];
  /** One of the option values is required to be selected for the checkout. */
  isRequired: Scalars['Boolean'];
  /** Indicates whether it is a variant option or modifier. */
  isVariantOption: Scalars['Boolean'];
  /** List of option values. */
  values: ProductOptionValueConnection;
};


/** An option type that has a fixed list of values. */
export type MultipleChoiceOptionValuesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A simple multiple choice value comprised of an id and a label. */
export type MultipleChoiceOptionValue = CatalogProductOptionValue & {
  __typename?: 'MultipleChoiceOptionValue';
  /** Unique ID for the option value. */
  entityId: Scalars['Int'];
  /** Indicates whether this value is the chosen default selected value. */
  isDefault: Scalars['Boolean'];
  /** Indicates whether this value is selected based on sku/variantEntityId/optionValueIds overlay requested on the product node level. */
  isSelected?: Maybe<Scalars['Boolean']>;
  /** Label for the option value. */
  label: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** The Cart mutations. */
  cart: CartMutations;
  /** The Checkout mutations. */
  checkout: CheckoutMutations;
  /** Customer login */
  login: LoginResult;
  /** Customer logout */
  logout: LogoutResult;
  /** The wishlist mutations. */
  wishlist: WishlistMutations;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
};

/** A normal page. */
export type NormalPage = Node & WebPage & {
  __typename?: 'NormalPage';
  /** Unique ID for the web page. */
  entityId: Scalars['Int'];
  /** The body of the page. */
  htmlBody: Scalars['String'];
  /** The ID of an object */
  id: Scalars['ID'];
  /** Whether or not the page should be visible in the navigation menu. */
  isVisibleInNavigation: Scalars['Boolean'];
  /** Page name. */
  name: Scalars['String'];
  /** Unique ID for the parent page. */
  parentEntityId?: Maybe<Scalars['Int']>;
  /** The URL path of the page. */
  path: Scalars['String'];
  /** The plain text summary of the page body. */
  plainTextSummary: Scalars['String'];
  /** The rendered regions for the web page. */
  renderedRegions: RenderedRegionsByPageType;
  /** Page SEO details. */
  seo: SeoDetails;
};


/** A normal page. */
export type NormalPagePlainTextSummaryArgs = {
  characterLimit?: InputMaybe<Scalars['Int']>;
};

/** A single line text input field that only accepts numbers. */
export type NumberFieldOption = CatalogProductOption & {
  __typename?: 'NumberFieldOption';
  /** Default value of the text field option. */
  defaultValue?: Maybe<Scalars['Float']>;
  /** Display name for the option. */
  displayName: Scalars['String'];
  /** Unique ID for the option. */
  entityId: Scalars['Int'];
  /** The top limit of possible numbers. */
  highest?: Maybe<Scalars['Float']>;
  /** Allow whole numbers only. */
  isIntegerOnly: Scalars['Boolean'];
  /** One of the option values is required to be selected for the checkout. */
  isRequired: Scalars['Boolean'];
  /** Indicates whether it is a variant option or modifier. */
  isVariantOption: Scalars['Boolean'];
  /** Limit numbers by several options. */
  limitNumberBy: LimitInputBy;
  /** The bottom limit of possible numbers. */
  lowest?: Maybe<Scalars['Float']>;
};

/** Operating day */
export type OperatingDay = {
  __typename?: 'OperatingDay';
  /** Closing. */
  closing: Scalars['String'];
  /** Open. */
  open: Scalars['Boolean'];
  /** Opening. */
  opening: Scalars['String'];
};

/** Operating hours */
export type OperatingHours = {
  __typename?: 'OperatingHours';
  /** Friday. */
  friday?: Maybe<OperatingDay>;
  /** Monday. */
  monday?: Maybe<OperatingDay>;
  /** Saturday. */
  saturday?: Maybe<OperatingDay>;
  /** Sunday. */
  sunday?: Maybe<OperatingDay>;
  /** Thursday. */
  thursday?: Maybe<OperatingDay>;
  /** Tuesday. */
  tuesday?: Maybe<OperatingDay>;
  /** Wednesday. */
  wednesday?: Maybe<OperatingDay>;
};

/** A connection to a list of items. */
export type OptionConnection = {
  __typename?: 'OptionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<OptionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type OptionEdge = {
  __typename?: 'OptionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ProductOption;
};

/** Behavior of the variant when stock is equal to 0 */
export type OptionOutOfStockBehavior =
  | 'DO_NOTHING'
  | 'HIDE_OPTION'
  | 'LABEL_OPTION';

/** A connection to a list of items. */
export type OptionValueConnection = {
  __typename?: 'OptionValueConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<OptionValueEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type OptionValueEdge = {
  __typename?: 'OptionValueEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ProductOptionValue;
};

/** A variant option value id input object */
export type OptionValueId = {
  /** A variant option id filter */
  optionEntityId: Scalars['Int'];
  /** A variant value id filter. */
  valueEntityId: Scalars['Int'];
};

/** The order. */
export type Order = {
  __typename?: 'Order';
  /** Order ID. */
  entityId: Scalars['Int'];
};

/** Other Filter */
export type OtherSearchFilter = SearchProductFilter & {
  __typename?: 'OtherSearchFilter';
  /** Indicates whether to display product count next to the filter. */
  displayProductCount: Scalars['Boolean'];
  /** Free shipping filter. */
  freeShipping?: Maybe<OtherSearchFilterItem>;
  /** Indicates whether filter is collapsed by default. */
  isCollapsedByDefault: Scalars['Boolean'];
  /** Is Featured filter. */
  isFeatured?: Maybe<OtherSearchFilterItem>;
  /** Is In Stock filter. */
  isInStock?: Maybe<OtherSearchFilterItem>;
  /** Display name for the filter. */
  name: Scalars['String'];
};

/** Other Filter Item */
export type OtherSearchFilterItem = {
  __typename?: 'OtherSearchFilterItem';
  /** Indicates whether this filter is selected. */
  isSelected: Scalars['Boolean'];
  /** Indicates how many products available for this filter. */
  productCount: Scalars['Int'];
};

/** A connection to a list of items. */
export type PageConnection = {
  __typename?: 'PageConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PageEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PageEdge = {
  __typename?: 'PageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: BlogIndexPage | ContactPage | ExternalLinkPage | NormalPage | RawHtmlPage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Redirect to a page. */
export type PageRedirect = {
  __typename?: 'PageRedirect';
  /** Entity id. */
  entityId: Scalars['Int'];
  /** The ID of an object. */
  id: Scalars['ID'];
  /** Relative destination url. */
  path: Scalars['String'];
};

/** Page type */
export type PageType =
  | 'ACCOUNT_ADDRESS'
  | 'ACCOUNT_ADD_ADDRESS'
  | 'ACCOUNT_ADD_RETURN'
  | 'ACCOUNT_ADD_WISHLIST'
  | 'ACCOUNT_DOWNLOAD_ITEM'
  | 'ACCOUNT_EDIT'
  | 'ACCOUNT_INBOX'
  | 'ACCOUNT_ORDERS_ALL'
  | 'ACCOUNT_ORDERS_COMPLETED'
  | 'ACCOUNT_ORDERS_DETAILS'
  | 'ACCOUNT_ORDERS_INVOICE'
  | 'ACCOUNT_RECENT_ITEMS'
  | 'ACCOUNT_RETURNS'
  | 'ACCOUNT_RETURN_SAVED'
  | 'ACCOUNT_WISHLISTS'
  | 'ACCOUNT_WISHLIST_DETAILS'
  | 'AUTH_ACCOUNT_CREATED'
  | 'AUTH_CREATE_ACC'
  | 'AUTH_FORGOT_PASS'
  | 'AUTH_LOGIN'
  | 'AUTH_NEW_PASS'
  | 'BLOG'
  | 'BRANDS'
  | 'CART'
  | 'COMPARE'
  | 'GIFT_CERT_BALANCE'
  | 'GIFT_CERT_PURCHASE'
  | 'GIFT_CERT_REDEEM'
  | 'HOME'
  | 'ORDER_INFO'
  | 'SEARCH'
  | 'SITEMAP'
  | 'SUBSCRIBED'
  | 'UNSUBSCRIBE';

/** A connection to a list of items. */
export type PopularBrandConnection = {
  __typename?: 'PopularBrandConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PopularBrandEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PopularBrandEdge = {
  __typename?: 'PopularBrandEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: PopularBrandType;
};

/** PopularBrandType */
export type PopularBrandType = {
  __typename?: 'PopularBrandType';
  /** Brand count */
  count: Scalars['Int'];
  /** Brand id */
  entityId: Scalars['Int'];
  /** Brand name */
  name: Scalars['String'];
  /** Brand URL as a relative path */
  path?: Maybe<Scalars['String']>;
};

/** The min and max range of prices that apply to this product. */
export type PriceRanges = {
  __typename?: 'PriceRanges';
  /** Product price min/max range. */
  priceRange: MoneyRange;
  /** Product retail price min/max range. */
  retailPriceRange?: Maybe<MoneyRange>;
};

/** Price Filter */
export type PriceSearchFilter = SearchProductFilter & {
  __typename?: 'PriceSearchFilter';
  /** Indicates whether filter is collapsed by default. */
  isCollapsedByDefault: Scalars['Boolean'];
  /** Display name for the filter. */
  name: Scalars['String'];
  /** Selected price filters. */
  selected?: Maybe<PriceSearchFilterItem>;
};

/** Search by price range. At least a minPrice or maxPrice must be supplied. */
export type PriceSearchFilterInput = {
  /** Maximum price of the product. */
  maxPrice?: InputMaybe<Scalars['Float']>;
  /** Minimum price of the product. */
  minPrice?: InputMaybe<Scalars['Float']>;
};

/** Price filter range */
export type PriceSearchFilterItem = {
  __typename?: 'PriceSearchFilterItem';
  /** Maximum price of the product. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Minimum price of the product. */
  minPrice?: Maybe<Scalars['Float']>;
};

/** The various prices that can be set on a product. */
export type Prices = {
  __typename?: 'Prices';
  /** Original price of the product. */
  basePrice?: Maybe<Money>;
  /** List of bulk pricing tiers applicable to a product or variant. */
  bulkPricing: Array<BulkPricingFixedPriceDiscount | BulkPricingPercentageDiscount | BulkPricingRelativePriceDiscount>;
  /** Minimum advertised price of the product. */
  mapPrice?: Maybe<Money>;
  /** Calculated price of the product.  Calculated price takes into account basePrice, salePrice, rules (modifier, option, option set) that apply to the product configuration, and customer group discounts.  It represents the in-cart price for a product configuration without bulk pricing rules. */
  price: Money;
  /** Product price min/max range. */
  priceRange: MoneyRange;
  /** Retail price of the product. */
  retailPrice?: Maybe<Money>;
  /** Product retail price min/max range. */
  retailPriceRange?: Maybe<MoneyRange>;
  /** Sale price of the product. */
  salePrice?: Maybe<Money>;
  /** The difference between the retail price (MSRP) and the current price, which can be presented to the shopper as their savings. */
  saved?: Maybe<Money>;
};

/** Product */
export type Product = Node & {
  __typename?: 'Product';
  /** Absolute URL path for adding a product to cart. */
  addToCartUrl: Scalars['String'];
  /**
   * Absolute URL path for adding a product to customer's wishlist.
   * @deprecated Deprecated.
   */
  addToWishlistUrl: Scalars['String'];
  /**
   * The availability state of the product.
   * @deprecated Use status inside availabilityV2 instead.
   */
  availability: Scalars['String'];
  /**
   * A few words telling the customer how long it will normally take to ship this product, such as 'Usually ships in 24 hours'.
   * @deprecated Use description inside availabilityV2 instead.
   */
  availabilityDescription: Scalars['String'];
  /** The availability state of the product. */
  availabilityV2: ProductAvailable | ProductPreOrder | ProductUnavailable;
  /** Brand associated with the product. */
  brand?: Maybe<Brand>;
  /** List of categories associated with the product. */
  categories: CategoryConnection;
  /** Product condition */
  condition?: Maybe<ProductConditionType>;
  /**
   * Product creation date
   * @deprecated Alpha version. Do not use in production.
   */
  createdAt: DateTimeExtended;
  /** Custom fields of the product. */
  customFields: CustomFieldConnection;
  /** Default image for a product. */
  defaultImage?: Maybe<Image>;
  /** Depth of the product. */
  depth?: Maybe<Measurement>;
  /** Description of the product. */
  description: Scalars['String'];
  /** Id of the product. */
  entityId: Scalars['Int'];
  /** Gift wrapping options available for the product. */
  giftWrappingOptions: GiftWrappingConnection;
  /** Global trade item number. */
  gtin?: Maybe<Scalars['String']>;
  /** Height of the product. */
  height?: Maybe<Measurement>;
  /** The ID of an object */
  id: Scalars['ID'];
  /** A list of the images for a product. */
  images: ImageConnection;
  /** Inventory information of the product. */
  inventory: ProductInventory;
  /** Maximum purchasable quantity for this product in a single order. */
  maxPurchaseQuantity?: Maybe<Scalars['Int']>;
  /** Metafield data related to a product. */
  metafields: MetafieldConnection;
  /** Minimum purchasable quantity for this product in a single order. */
  minPurchaseQuantity?: Maybe<Scalars['Int']>;
  /** Manufacturer part number. */
  mpn?: Maybe<Scalars['String']>;
  /** Name of the product. */
  name: Scalars['String'];
  /**
   * Product options.
   * @deprecated Use productOptions instead.
   */
  options: OptionConnection;
  /** Relative URL path to product page. */
  path: Scalars['String'];
  /** Description of the product in plain text. */
  plainTextDescription: Scalars['String'];
  /**
   * The minimum and maximum price of this product based on variant pricing and/or modifier price rules.
   * @deprecated Use priceRanges inside prices node instead.
   */
  priceRanges?: Maybe<PriceRanges>;
  /** Prices object determined by supplied product ID, variant ID, and selected option IDs. */
  prices?: Maybe<Prices>;
  /** Product options. */
  productOptions: ProductOptionConnection;
  /** Related products for this product. */
  relatedProducts: RelatedProductsConnection;
  /** Summary of the product reviews, includes the total number of reviews submitted and summation of the ratings on the reviews (ratings range from 0-5 per review). */
  reviewSummary: Reviews;
  /** Reviews associated with the product. */
  reviews: ReviewConnection;
  /** Product SEO details. */
  seo: SeoDetails;
  /** Whether or not the cart call to action should be visible for this product. */
  showCartAction: Scalars['Boolean'];
  /** Default product variant when no options are selected. */
  sku: Scalars['String'];
  /** Type of product, ex: physical, digital */
  type: Scalars['String'];
  /** Universal product code. */
  upc?: Maybe<Scalars['String']>;
  /** Variants associated with the product. */
  variants: VariantConnection;
  /** Warranty information of the product. */
  warranty: Scalars['String'];
  /** Weight of the product. */
  weight?: Maybe<Measurement>;
  /** Width of the product. */
  width?: Maybe<Measurement>;
};


/** Product */
export type ProductCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Product */
export type ProductCustomFieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  names?: InputMaybe<Array<Scalars['String']>>;
};


/** Product */
export type ProductGiftWrappingOptionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Product */
export type ProductImagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Product */
export type ProductMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  keys?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['Int']>;
  namespace: Scalars['String'];
};


/** Product */
export type ProductOptionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Product */
export type ProductPlainTextDescriptionArgs = {
  characterLimit?: InputMaybe<Scalars['Int']>;
};


/** Product */
export type ProductPriceRangesArgs = {
  includeTax?: InputMaybe<Scalars['Boolean']>;
};


/** Product */
export type ProductPricesArgs = {
  currencyCode?: InputMaybe<CurrencyCode>;
  includeTax?: InputMaybe<Scalars['Boolean']>;
};


/** Product */
export type ProductProductOptionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Product */
export type ProductRelatedProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  hideOutOfStock?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Product */
export type ProductReviewsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<ProductReviewsFiltersInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ProductReviewsSortInput>;
};


/** Product */
export type ProductVariantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  entityIds?: InputMaybe<Array<Scalars['Int']>>;
  first?: InputMaybe<Scalars['Int']>;
  isPurchasable?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  optionValueIds?: InputMaybe<Array<OptionValueId>>;
};

/** Product Attribute Filter */
export type ProductAttributeSearchFilter = SearchProductFilter & {
  __typename?: 'ProductAttributeSearchFilter';
  /** List of available product attributes. */
  attributes: ProductAttributeSearchFilterItemConnection;
  /** Indicates whether to display product count next to the filter. */
  displayProductCount: Scalars['Boolean'];
  /** Filter name for building filter URLs */
  filterName: Scalars['String'];
  /** Indicates whether filter is collapsed by default. */
  isCollapsedByDefault: Scalars['Boolean'];
  /** Display name for the filter. */
  name: Scalars['String'];
};


/** Product Attribute Filter */
export type ProductAttributeSearchFilterAttributesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Filter by the attributes of products such as Product Options and Product Custom Fields. This filter will do nothing unless your store has the Product Filtering feature available on your plan and enabled. If it is supplied when your store does not have the feature enabled, it will be silently ignored. */
export type ProductAttributeSearchFilterInput = {
  /** Product attributes */
  attribute: Scalars['String'];
  /** Product attribute values */
  values: Array<Scalars['String']>;
};

/** Specific product attribute filter item */
export type ProductAttributeSearchFilterItem = {
  __typename?: 'ProductAttributeSearchFilterItem';
  /** Indicates whether product attribute is selected. */
  isSelected: Scalars['Boolean'];
  /** Indicates how many products available for this filter. */
  productCount: Scalars['Int'];
  /** Product attribute value. */
  value: Scalars['String'];
};

/** A connection to a list of items. */
export type ProductAttributeSearchFilterItemConnection = {
  __typename?: 'ProductAttributeSearchFilterItemConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ProductAttributeSearchFilterItemEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ProductAttributeSearchFilterItemEdge = {
  __typename?: 'ProductAttributeSearchFilterItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ProductAttributeSearchFilterItem;
};

/** Product availability */
export type ProductAvailability = {
  /** A few words telling the customer how long it will normally take to ship this product, such as 'Usually ships in 24 hours'. */
  description: Scalars['String'];
  /** The availability state of the product. */
  status: ProductAvailabilityStatus;
};

/** Product availability status */
export type ProductAvailabilityStatus =
  | 'Available'
  | 'Preorder'
  | 'Unavailable';

/** Available Product */
export type ProductAvailable = ProductAvailability & {
  __typename?: 'ProductAvailable';
  /** A few words telling the customer how long it will normally take to ship this product, such as 'Usually ships in 24 hours'. */
  description: Scalars['String'];
  /** The availability state of the product. */
  status: ProductAvailabilityStatus;
};

/** Product condition */
export type ProductConditionType =
  | 'NEW'
  | 'REFURBISHED'
  | 'USED';

/** A connection to a list of items. */
export type ProductConnection = {
  __typename?: 'ProductConnection';
  /** Collection info */
  collectionInfo?: Maybe<CollectionInfo>;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ProductEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ProductEdge = {
  __typename?: 'ProductEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Product;
};

/** Product Inventory Information */
export type ProductInventory = {
  __typename?: 'ProductInventory';
  /** Aggregated product inventory information. This data may not be available if not set or if the store's Inventory Settings have disabled displaying stock levels on the storefront. */
  aggregated?: Maybe<AggregatedInventory>;
  /** Indicates whether this product's inventory is being tracked on variant level. If true, you may wish to check the variants node to understand the true inventory of each individual variant, rather than relying on this product-level aggregate to understand how many items may be added to cart. */
  hasVariantInventory: Scalars['Boolean'];
  /** Indicates whether this product is in stock. */
  isInStock: Scalars['Boolean'];
};

/** Product Option */
export type ProductOption = {
  __typename?: 'ProductOption';
  /** Display name for the option. */
  displayName: Scalars['String'];
  /** Unique ID for the option. */
  entityId: Scalars['Int'];
  /** One of the option values is required to be selected for the checkout. */
  isRequired: Scalars['Boolean'];
  /** Option values. */
  values: OptionValueConnection;
};


/** Product Option */
export type ProductOptionValuesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type ProductOptionConnection = {
  __typename?: 'ProductOptionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ProductOptionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ProductOptionEdge = {
  __typename?: 'ProductOptionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: CheckboxOption | DateFieldOption | FileUploadFieldOption | MultiLineTextFieldOption | MultipleChoiceOption | NumberFieldOption | TextFieldOption;
};

/** Product Option Value */
export type ProductOptionValue = {
  __typename?: 'ProductOptionValue';
  /** Unique ID for the option value. */
  entityId: Scalars['Int'];
  /** Label for the option value. */
  label: Scalars['String'];
};

/** A connection to a list of items. */
export type ProductOptionValueConnection = {
  __typename?: 'ProductOptionValueConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ProductOptionValueEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ProductOptionValueEdge = {
  __typename?: 'ProductOptionValueEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: MultipleChoiceOptionValue | ProductPickListOptionValue | SwatchOptionValue;
};

/** Behavior of the product when stock is equal to 0 */
export type ProductOutOfStockBehavior =
  | 'DO_NOTHING'
  | 'HIDE_PRODUCT'
  | 'HIDE_PRODUCT_AND_ACCESSIBLE'
  | 'HIDE_PRODUCT_AND_REDIRECT';

/** A Product PickList Value - a product to be mapped to the base product if selected. */
export type ProductPickListOptionValue = CatalogProductOptionValue & {
  __typename?: 'ProductPickListOptionValue';
  /** Default image for a pick list product. */
  defaultImage?: Maybe<Image>;
  /** Unique ID for the option value. */
  entityId: Scalars['Int'];
  /** Indicates whether this value is the chosen default selected value. */
  isDefault: Scalars['Boolean'];
  /** Indicates whether this value is selected based on sku/variantEntityId/optionValueIds overlay requested on the product node level. */
  isSelected?: Maybe<Scalars['Boolean']>;
  /** Label for the option value. */
  label: Scalars['String'];
  /** The ID of the product associated with this option value. */
  productId: Scalars['Int'];
};

/** PreOrder Product */
export type ProductPreOrder = ProductAvailability & {
  __typename?: 'ProductPreOrder';
  /** A few words telling the customer how long it will normally take to ship this product, such as 'Usually ships in 24 hours'. */
  description: Scalars['String'];
  /** The message to be shown in the store when a product is put into the pre-order availability state, e.g. "Expected release date is %%DATE%%" */
  message?: Maybe<Scalars['String']>;
  /** The availability state of the product. */
  status: ProductAvailabilityStatus;
  /** Product release date */
  willBeReleasedAt?: Maybe<DateTimeExtended>;
};

/** Redirect to a product. */
export type ProductRedirect = {
  __typename?: 'ProductRedirect';
  /** Entity id. */
  entityId: Scalars['Int'];
  /** The ID of an object. */
  id: Scalars['ID'];
  /** Relative destination url. */
  path: Scalars['String'];
};

/** Product reviews filters. */
export type ProductReviewsFiltersInput = {
  /** Product reviews filter by rating. */
  rating?: InputMaybe<ProductReviewsRatingFilterInput>;
};

/** Product reviews filter by rating. */
export type ProductReviewsRatingFilterInput = {
  /** Maximum rating of the product. */
  maxRating?: InputMaybe<Scalars['Int']>;
  /** Minimum rating of the product. */
  minRating?: InputMaybe<Scalars['Int']>;
};

/** Product reviews sorting. */
export type ProductReviewsSortInput =
  | 'HIGHEST_RATING'
  | 'LOWEST_RATING'
  | 'NEWEST'
  | 'OLDEST';

/** Unavailable Product */
export type ProductUnavailable = ProductAvailability & {
  __typename?: 'ProductUnavailable';
  /** A few words telling the customer how long it will normally take to ship this product, such as 'Usually ships in 24 hours'. */
  description: Scalars['String'];
  /** The message to be shown in the store when "Call for pricing" is enabled for this product, e.g. "Contact us at 555-5555" */
  message?: Maybe<Scalars['String']>;
  /** The availability state of the product. */
  status: ProductAvailabilityStatus;
};

/** Public Wishlist */
export type PublicWishlist = {
  __typename?: 'PublicWishlist';
  /** The wishlist id. */
  entityId: Scalars['Int'];
  /** A list of the wishlist items */
  items: WishlistItemConnection;
  /** The wishlist name. */
  name: Scalars['String'];
  /** The wishlist token. */
  token: Scalars['String'];
};


/** Public Wishlist */
export type PublicWishlistItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  hideOutOfStock?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  /** The current channel. */
  channel: Channel;
  /** The currently logged in customer. */
  customer?: Maybe<Customer>;
  /** An inventory */
  inventory: Inventory;
  /** Fetches an object given its ID */
  node?: Maybe<Banner | Blog | BlogIndexPage | BlogPost | Brand | Cart | Category | Checkout | ContactPage | NormalPage | Product | RawHtmlPage | Redirect | Variant>;
  /** A site */
  site: Site;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};

/** Rating Filter */
export type RatingSearchFilter = SearchProductFilter & {
  __typename?: 'RatingSearchFilter';
  /** Indicates whether filter is collapsed by default. */
  isCollapsedByDefault: Scalars['Boolean'];
  /** Display name for the filter. */
  name: Scalars['String'];
  /** List of available ratings. */
  ratings: RatingSearchFilterItemConnection;
};


/** Rating Filter */
export type RatingSearchFilterRatingsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Filter by rating. At least a minRating or maxRating must be supplied. This filter will do nothing unless your store has the Product Filtering feature available on your plan and enabled. If it is supplied when your store does not have the feature enabled, it will be silently ignored. */
export type RatingSearchFilterInput = {
  /** Maximum rating of the product. */
  maxRating?: InputMaybe<Scalars['Float']>;
  /** Minimum rating of the product. */
  minRating?: InputMaybe<Scalars['Float']>;
};

/** Specific rating filter item */
export type RatingSearchFilterItem = {
  __typename?: 'RatingSearchFilterItem';
  /** Indicates whether rating is selected. */
  isSelected: Scalars['Boolean'];
  /** Indicates how many products available for this filter. */
  productCount: Scalars['Int'];
  /** Rating value. */
  value: Scalars['String'];
};

/** A connection to a list of items. */
export type RatingSearchFilterItemConnection = {
  __typename?: 'RatingSearchFilterItemConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<RatingSearchFilterItemEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type RatingSearchFilterItemEdge = {
  __typename?: 'RatingSearchFilterItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: RatingSearchFilterItem;
};

/** A raw HTML page. */
export type RawHtmlPage = Node & WebPage & {
  __typename?: 'RawHtmlPage';
  /** Unique ID for the web page. */
  entityId: Scalars['Int'];
  /** The body of the page. */
  htmlBody: Scalars['String'];
  /** The ID of an object */
  id: Scalars['ID'];
  /** Whether or not the page should be visible in the navigation menu. */
  isVisibleInNavigation: Scalars['Boolean'];
  /** Page name. */
  name: Scalars['String'];
  /** Unique ID for the parent page. */
  parentEntityId?: Maybe<Scalars['Int']>;
  /** The URL path of the page. */
  path: Scalars['String'];
  /** The plain text summary of the page body. */
  plainTextSummary: Scalars['String'];
  /** Page SEO details. */
  seo: SeoDetails;
};


/** A raw HTML page. */
export type RawHtmlPagePlainTextSummaryArgs = {
  characterLimit?: InputMaybe<Scalars['Int']>;
};

/** ReCaptcha settings. */
export type ReCaptchaSettings = {
  __typename?: 'ReCaptchaSettings';
  /** ReCaptcha site key. */
  siteKey: Scalars['String'];
};

/** Redirect. */
export type Redirect = Node & {
  __typename?: 'Redirect';
  /** Redirected url. */
  fromPath: Scalars['String'];
  /** The ID of an object. */
  id: Scalars['ID'];
  /** Additional information about redirect. */
  to: RedirectTo;
  /** Full destination url. */
  toUrl: Scalars['String'];
};

/** Type of the redirect. */
export type RedirectTo = BlogPostRedirect | BrandRedirect | CategoryRedirect | ManualRedirect | PageRedirect | ProductRedirect;

/** The region object */
export type Region = {
  __typename?: 'Region';
  /** The rendered HTML content targeted at the region. */
  html: Scalars['String'];
  /** The name of a region. */
  name: Scalars['String'];
};

/** A connection to a list of items. */
export type RelatedProductsConnection = {
  __typename?: 'RelatedProductsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<RelatedProductsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type RelatedProductsEdge = {
  __typename?: 'RelatedProductsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Product;
};

/** The rendered regions by specific page. */
export type RenderedRegionsByPageType = {
  __typename?: 'RenderedRegionsByPageType';
  /** List of regions */
  regions: Array<Region>;
};

/** Review */
export type Review = {
  __typename?: 'Review';
  /** Product review author. */
  author: Author;
  /** Product review creation date. */
  createdAt: DateTimeExtended;
  /** Unique ID for the product review. */
  entityId: Scalars['Long'];
  /** Product review rating. */
  rating: Scalars['Int'];
  /** Product review text. */
  text: Scalars['String'];
  /** Product review title. */
  title: Scalars['String'];
};

/** A connection to a list of items. */
export type ReviewConnection = {
  __typename?: 'ReviewConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ReviewEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ReviewEdge = {
  __typename?: 'ReviewEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Review;
};

/** Review Rating Summary */
export type Reviews = {
  __typename?: 'Reviews';
  /**
   * Average rating of the product.
   * @deprecated Alpha version. Do not use in production.
   */
  averageRating: Scalars['Float'];
  /** Total number of reviews on product. */
  numberOfReviews: Scalars['Int'];
  /** Summation of rating scores from each review. */
  summationOfRatings: Scalars['Int'];
};

/** route */
export type Route = {
  __typename?: 'Route';
  /** Node */
  node?: Maybe<Banner | Blog | BlogIndexPage | BlogPost | Brand | Cart | Category | Checkout | ContactPage | NormalPage | Product | RawHtmlPage | Redirect | Variant>;
  /** Redirect details for a given path (if exists). */
  redirect?: Maybe<Redirect>;
};

/** Enum value to specify the desired behavior when encountering a redirect for the requested route. */
export type RouteRedirectBehavior =
  /** If there is a dynamic/association redirect configured, the `node` node will return a resulting entity (category, product, etc.) that a redirect points to. If there is a static/manual redirect configured, the `node` node will return null, as there is no entity associated with it, the `redirect node` however will return the redirect details. */
  | 'FOLLOW'
  /** No redirects are taken into account, relying on custom URLs only. If there is the same path for both redirect and entity URL configured, both `redirect` node and `node` node return respective non-null values. */
  | 'IGNORE';

/** Store search settings. */
export type Search = {
  __typename?: 'Search';
  /** Product filtering enabled. */
  productFilteringEnabled: Scalars['Boolean'];
};

/** Search Product Filter */
export type SearchProductFilter = {
  /** Indicates whether filter is collapsed by default. */
  isCollapsedByDefault: Scalars['Boolean'];
  /** Display name for the filter. */
  name: Scalars['String'];
};

/** A connection to a list of items. */
export type SearchProductFilterConnection = {
  __typename?: 'SearchProductFilterConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SearchProductFilterEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SearchProductFilterEdge = {
  __typename?: 'SearchProductFilterEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: BrandSearchFilter | CategorySearchFilter | OtherSearchFilter | PriceSearchFilter | ProductAttributeSearchFilter | RatingSearchFilter;
};

/** Container for catalog search results, which may contain both products as well as a list of search filters for further refinement. */
export type SearchProducts = {
  __typename?: 'SearchProducts';
  /** Available product filters. */
  filters: SearchProductFilterConnection;
  /** Details of the products. */
  products: ProductConnection;
};


/** Container for catalog search results, which may contain both products as well as a list of search filters for further refinement. */
export type SearchProductsFiltersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Container for catalog search results, which may contain both products as well as a list of search filters for further refinement. */
export type SearchProductsProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

/** Object containing available search filters for use when querying Products. */
export type SearchProductsFiltersInput = {
  /** Filter by products belonging to any of the specified Brands. */
  brandEntityIds?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter by products belonging to a single Category. This is intended for use when presenting a Category page in a PLP experience. This argument must be used in order for custom product sorts and custom product filtering settings targeted at a particular category to take effect. */
  categoryEntityId?: InputMaybe<Scalars['Int']>;
  /** Filter by products belonging to any of the specified Categories. Intended for Advanced Search and Faceted Search/Product Filtering use cases, not for a page for a specific Category. */
  categoryEntityIds?: InputMaybe<Array<Scalars['Int']>>;
  /** When set to True, hides products which are out of stock. Defaults to False. This filter will do nothing unless your store has the Product Filtering feature available on your plan and enabled. If it is supplied when your store does not have the feature enabled, it will be silently ignored. */
  hideOutOfStock?: InputMaybe<Scalars['Boolean']>;
  /** Filters by Products which have explicitly been marked as Featured within the catalog. If not supplied, the Featured status of products will not be considered when returning the list of products. */
  isFeatured?: InputMaybe<Scalars['Boolean']>;
  /** Filters by Products which have explicit Free Shipping configured within the catalog. If not supplied, the Free Shipping status of products will not be considered when returning the list of products. */
  isFreeShipping?: InputMaybe<Scalars['Boolean']>;
  /** Search by price range. At least a minPrice or maxPrice must be supplied. */
  price?: InputMaybe<PriceSearchFilterInput>;
  /** Filter by the attributes of products such as Product Options and Product Custom Fields. This filter will do nothing unless your store has the Product Filtering feature available on your plan and enabled. If it is supplied when your store does not have the feature enabled, it will be silently ignored. */
  productAttributes?: InputMaybe<Array<ProductAttributeSearchFilterInput>>;
  /** Filter by rating. At least a minRating or maxRating must be supplied. This filter will do nothing unless your store has the Product Filtering feature available on your plan and enabled. If it is supplied when your store does not have the feature enabled, it will be silently ignored. */
  rating?: InputMaybe<RatingSearchFilterInput>;
  /** Boolean argument to determine whether products within sub-Categories will be returned when filtering products by Category. Defaults to False if not supplied. */
  searchSubCategories?: InputMaybe<Scalars['Boolean']>;
  /** Textual search term. Used to search for products based on text entered by a shopper, typically in a search box. Searches against several fields on the product including Name, SKU, and Description. */
  searchTerm?: InputMaybe<Scalars['String']>;
};

/** Sort to use for the product results. Relevance is the default for textual search terms, and “Featured” is the default for category page contexts without a search term. */
export type SearchProductsSortInput =
  | 'A_TO_Z'
  | 'BEST_REVIEWED'
  | 'BEST_SELLING'
  | 'FEATURED'
  | 'HIGHEST_PRICE'
  | 'LOWEST_PRICE'
  | 'NEWEST'
  | 'RELEVANCE'
  | 'Z_TO_A';

/** The Search queries. */
export type SearchQueries = {
  __typename?: 'SearchQueries';
  /** Details of the products and facets matching given search criteria. */
  searchProducts: SearchProducts;
};


/** The Search queries. */
export type SearchQueriesSearchProductsArgs = {
  filters: SearchProductsFiltersInput;
  sort?: InputMaybe<SearchProductsSortInput>;
};

/** Select checkout shipping option input data object */
export type SelectCheckoutShippingOptionDataInput = {
  /** The shipping option id */
  shippingOptionEntityId: Scalars['String'];
};

/** Select checkout shipping option input object */
export type SelectCheckoutShippingOptionInput = {
  /** The checkout id */
  checkoutEntityId: Scalars['String'];
  /** The consignment id */
  consignmentEntityId: Scalars['String'];
  /** Select checkout shipping option data object */
  data: SelectCheckoutShippingOptionDataInput;
};

/** Select checkout shipping option result */
export type SelectCheckoutShippingOptionResult = {
  __typename?: 'SelectCheckoutShippingOptionResult';
  /** The Checkout that is updated as a result of mutation. */
  checkout?: Maybe<Checkout>;
};

/** Seo Details */
export type SeoDetails = {
  __typename?: 'SeoDetails';
  /** Meta description. */
  metaDescription: Scalars['String'];
  /** Meta keywords. */
  metaKeywords: Scalars['String'];
  /** Page title. */
  pageTitle: Scalars['String'];
};

/** Store settings information from the control panel. */
export type Settings = {
  __typename?: 'Settings';
  /** Channel ID. */
  channelId: Scalars['Long'];
  /** Checkout settings. */
  checkout?: Maybe<CheckoutSettings>;
  /** Contact information for the store. */
  contact?: Maybe<ContactField>;
  /** Store display format information. */
  display: DisplayField;
  /** Inventory settings. */
  inventory?: Maybe<InventorySettings>;
  /**
   * Logo information for the store.
   * @deprecated Use `logoV2` instead.
   */
  logo: LogoField;
  /** Logo information for the store. */
  logoV2: StoreLogo;
  /** ReCaptcha settings. */
  reCaptcha: ReCaptchaSettings;
  /** Store search settings. */
  search: Search;
  /** The social media links of connected platforms to the storefront. */
  socialMediaLinks: Array<SocialMediaLink>;
  /** The current store status. */
  status: StorefrontStatusType;
  /** The customer-facing message associated with the current store status. */
  statusMessage?: Maybe<Scalars['String']>;
  /** The hash of the store. */
  storeHash: Scalars['String'];
  /** The name of the store. */
  storeName: Scalars['String'];
  /** Storefront settings. */
  storefront: Storefront;
  /** The tax display settings object */
  tax?: Maybe<TaxDisplaySettings>;
  /** Store urls. */
  url: UrlField;
};

/** A connection to a list of items. */
export type ShopByPriceConnection = {
  __typename?: 'ShopByPriceConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ShopByPriceEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ShopByPriceEdge = {
  __typename?: 'ShopByPriceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ShopByPriceRange;
};

/** Category shop by price money ranges */
export type ShopByPriceRange = {
  __typename?: 'ShopByPriceRange';
  /** Category shop by price range. */
  ranges: MoneyRange;
};

/** A site */
export type Site = {
  __typename?: 'Site';
  /** Details of the best selling products. */
  bestSellingProducts: ProductConnection;
  /** Details of a brand. */
  brand?: Maybe<Brand>;
  /** Details of the brand. */
  brands: BrandConnection;
  /** The Cart of the current customer. */
  cart?: Maybe<Cart>;
  /** Retrieve a category object by the id. */
  category?: Maybe<Category>;
  /** A tree of categories. */
  categoryTree: Array<CategoryTreeItem>;
  /** The checkout of the current customer. */
  checkout?: Maybe<Checkout>;
  /** The page content. */
  content: Content;
  /** Store Currencies. */
  currencies: CurrencyConnection;
  /** Currency details. */
  currency?: Maybe<Currency>;
  /** Details of the featured products. */
  featuredProducts: ProductConnection;
  /** Details of the newest products. */
  newestProducts: ProductConnection;
  /** List of brands sorted by product count. */
  popularBrands: PopularBrandConnection;
  /** A single product object with variant pricing overlay capabilities. */
  product?: Maybe<Product>;
  /** Details of the products. */
  products: ProductConnection;
  /** Public Wishlist */
  publicWishlist?: Maybe<PublicWishlist>;
  /** Route for a node */
  route: Route;
  /** The Search queries. */
  search: SearchQueries;
  /** Store settings. */
  settings?: Maybe<Settings>;
};


/** A site */
export type SiteBestSellingProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  hideOutOfStock?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A site */
export type SiteBrandArgs = {
  entityId: Scalars['Int'];
};


/** A site */
export type SiteBrandsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  entityIds?: InputMaybe<Array<Scalars['Int']>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  productEntityIds?: InputMaybe<Array<Scalars['Int']>>;
};


/** A site */
export type SiteCartArgs = {
  entityId?: InputMaybe<Scalars['String']>;
};


/** A site */
export type SiteCategoryArgs = {
  entityId: Scalars['Int'];
};


/** A site */
export type SiteCategoryTreeArgs = {
  rootEntityId?: InputMaybe<Scalars['Int']>;
};


/** A site */
export type SiteCheckoutArgs = {
  entityId?: InputMaybe<Scalars['String']>;
};


/** A site */
export type SiteCurrenciesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A site */
export type SiteCurrencyArgs = {
  currencyCode: CurrencyCode;
};


/** A site */
export type SiteFeaturedProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  hideOutOfStock?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A site */
export type SiteNewestProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  hideOutOfStock?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A site */
export type SitePopularBrandsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A site */
export type SiteProductArgs = {
  entityId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  optionValueIds?: InputMaybe<Array<OptionValueId>>;
  sku?: InputMaybe<Scalars['String']>;
  useDefaultOptionSelections?: InputMaybe<Scalars['Boolean']>;
  variantEntityId?: InputMaybe<Scalars['Int']>;
};


/** A site */
export type SiteProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  entityIds?: InputMaybe<Array<Scalars['Int']>>;
  first?: InputMaybe<Scalars['Int']>;
  hideOutOfStock?: InputMaybe<Scalars['Boolean']>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A site */
export type SitePublicWishlistArgs = {
  token: Scalars['String'];
};


/** A site */
export type SiteRouteArgs = {
  path: Scalars['String'];
  redirectBehavior?: RouteRedirectBehavior;
};

/** The social media link. */
export type SocialMediaLink = {
  __typename?: 'SocialMediaLink';
  /** The name of the social media link. */
  name: Scalars['String'];
  /** The url of the social media link. */
  url: Scalars['String'];
};

/** Special hour */
export type SpecialHour = {
  __typename?: 'SpecialHour';
  /** Closing time */
  closing?: Maybe<Scalars['DateTime']>;
  /** Upcoming event name */
  label: Scalars['String'];
  /** Is open */
  open: Scalars['Boolean'];
  /** Opening time */
  opening?: Maybe<Scalars['DateTime']>;
};

/** Stock level display setting */
export type StockLevelDisplay =
  | 'DONT_SHOW'
  | 'SHOW'
  | 'SHOW_WHEN_LOW';

/** Store logo as image. */
export type StoreImageLogo = {
  __typename?: 'StoreImageLogo';
  /** Logo image. */
  image: Image;
};

/** Store logo. */
export type StoreLogo = StoreImageLogo | StoreTextLogo;

/** Store logo as text. */
export type StoreTextLogo = {
  __typename?: 'StoreTextLogo';
  /** Logo text. */
  text: Scalars['String'];
};

/** Storefront settings. */
export type Storefront = {
  __typename?: 'Storefront';
  /** Storefront catalog settings. */
  catalog?: Maybe<Catalog>;
};

/** Storefront Mode */
export type StorefrontStatusType =
  | 'HIBERNATION'
  | 'LAUNCHED'
  | 'MAINTENANCE'
  | 'PRE_LAUNCH';

/** Specific sub-category filter item */
export type SubCategorySearchFilterItem = {
  __typename?: 'SubCategorySearchFilterItem';
  /** Category ID. */
  entityId: Scalars['Int'];
  /** Indicates whether category is selected. */
  isSelected: Scalars['Boolean'];
  /** Category name. */
  name: Scalars['String'];
  /** Indicates how many products available for this filter. */
  productCount: Scalars['Int'];
  /** List of available sub-categories. */
  subCategories: SubCategorySearchFilterItemConnection;
};


/** Specific sub-category filter item */
export type SubCategorySearchFilterItemSubCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type SubCategorySearchFilterItemConnection = {
  __typename?: 'SubCategorySearchFilterItemConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SubCategorySearchFilterItemEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SubCategorySearchFilterItemEdge = {
  __typename?: 'SubCategorySearchFilterItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: SubCategorySearchFilterItem;
};

/** A swatch option value - swatch values can be associated with a list of hexidecimal colors or an image. */
export type SwatchOptionValue = CatalogProductOptionValue & {
  __typename?: 'SwatchOptionValue';
  /** Unique ID for the option value. */
  entityId: Scalars['Int'];
  /** List of up to 3 hex encoded colors to associate with a swatch value. */
  hexColors: Array<Scalars['String']>;
  /** Absolute path of a swatch texture image. */
  imageUrl?: Maybe<Scalars['String']>;
  /** Indicates whether this value is the chosen default selected value. */
  isDefault: Scalars['Boolean'];
  /** Indicates whether this value is selected based on sku/variantEntityId/optionValueIds overlay requested on the product node level. */
  isSelected?: Maybe<Scalars['Boolean']>;
  /** Label for the option value. */
  label: Scalars['String'];
};


/** A swatch option value - swatch values can be associated with a list of hexidecimal colors or an image. */
export type SwatchOptionValueImageUrlArgs = {
  height?: InputMaybe<Scalars['Int']>;
  width: Scalars['Int'];
};

/** The tax display settings object */
export type TaxDisplaySettings = {
  __typename?: 'TaxDisplaySettings';
  /** Tax display setting for Product Details Page. */
  pdp: TaxPriceDisplay;
  /** Tax display setting for Product List Page. */
  plp: TaxPriceDisplay;
};

/** Tax setting can be set included or excluded (Tax setting can also be set to both on PDP/PLP). */
export type TaxPriceDisplay =
  | 'BOTH'
  | 'EX'
  | 'INC';

/** A single line text input field. */
export type TextFieldOption = CatalogProductOption & {
  __typename?: 'TextFieldOption';
  /** Default value of the text field option. */
  defaultValue?: Maybe<Scalars['String']>;
  /** Display name for the option. */
  displayName: Scalars['String'];
  /** Unique ID for the option. */
  entityId: Scalars['Int'];
  /** One of the option values is required to be selected for the checkout. */
  isRequired: Scalars['Boolean'];
  /** Indicates whether it is a variant option or modifier. */
  isVariantOption: Scalars['Boolean'];
  /** The maximum number of characters. */
  maxLength?: Maybe<Scalars['Int']>;
  /** The minimum number of characters. */
  minLength?: Maybe<Scalars['Int']>;
};

/** Unapply checkout coupon data object */
export type UnapplyCheckoutCouponDataInput = {
  /** The checkout coupon code */
  couponCode: Scalars['String'];
};

/** Unapply checkout coupon input object */
export type UnapplyCheckoutCouponInput = {
  /** The checkout id */
  checkoutEntityId: Scalars['String'];
  /** Unapply checkout coupon data object */
  data: UnapplyCheckoutCouponDataInput;
};

/** Unapply checkout coupon result */
export type UnapplyCheckoutCouponResult = {
  __typename?: 'UnapplyCheckoutCouponResult';
  /** The Checkout that is updated as a result of mutation. */
  checkout?: Maybe<Checkout>;
};

/** Unassign cart from the customer input object. */
export type UnassignCartFromCustomerInput = {
  /** The cart id. */
  cartEntityId: Scalars['String'];
};

/** Unassign cart from the customer result. */
export type UnassignCartFromCustomerResult = {
  __typename?: 'UnassignCartFromCustomerResult';
  /** The Cart that is updated as a result of mutation. */
  cart?: Maybe<Cart>;
};

/** Update cart currency data object */
export type UpdateCartCurrencyDataInput = {
  /** ISO-4217 currency code */
  currencyCode: Scalars['String'];
};

/** Update cart currency input object */
export type UpdateCartCurrencyInput = {
  /** The cart id */
  cartEntityId: Scalars['String'];
  /** Update cart currency data object */
  data: UpdateCartCurrencyDataInput;
};

/** Update cart currency result */
export type UpdateCartCurrencyResult = {
  __typename?: 'UpdateCartCurrencyResult';
  /** The Cart that is updated as a result of mutation. */
  cart?: Maybe<Cart>;
};

/** Update cart line item data object */
export type UpdateCartLineItemDataInput = {
  /** The gift certificate */
  giftCertificate?: InputMaybe<CartGiftCertificateInput>;
  /** The cart line item */
  lineItem?: InputMaybe<CartLineItemInput>;
};

/** Update cart line item input object */
export type UpdateCartLineItemInput = {
  /** The cart id */
  cartEntityId: Scalars['String'];
  /** Update cart line item data object */
  data: UpdateCartLineItemDataInput;
  /** The line item id */
  lineItemEntityId: Scalars['String'];
};

/** Update cart line item result */
export type UpdateCartLineItemResult = {
  __typename?: 'UpdateCartLineItemResult';
  /** The Cart that is updated as a result of mutation. */
  cart?: Maybe<Cart>;
};

/** Update checkout billing address data object */
export type UpdateCheckoutBillingAddressDataInput = {
  /** The checkout billing address */
  address: CheckoutAddressInput;
};

/** Update checkout billing address input object */
export type UpdateCheckoutBillingAddressInput = {
  /** The address id */
  addressEntityId: Scalars['String'];
  /** The checkout id */
  checkoutEntityId: Scalars['String'];
  /** Update checkout billing address data object */
  data: UpdateCheckoutBillingAddressDataInput;
};

/** Update checkout billing address result */
export type UpdateCheckoutBillingAddressResult = {
  __typename?: 'UpdateCheckoutBillingAddressResult';
  /** The Checkout that is updated as a result of mutation. */
  checkout?: Maybe<Checkout>;
};

/** Update checkout customer message data object */
export type UpdateCheckoutCustomerMessageDataInput = {
  /** The checkout customer message */
  message: Scalars['String'];
};

/** Update checkout customer message input object */
export type UpdateCheckoutCustomerMessageInput = {
  /** The checkout id */
  checkoutEntityId: Scalars['String'];
  /** Update checkout customer message data object */
  data: UpdateCheckoutCustomerMessageDataInput;
};

/** Update checkout customer message result */
export type UpdateCheckoutCustomerMessageResult = {
  __typename?: 'UpdateCheckoutCustomerMessageResult';
  /** The Checkout that is updated as a result of mutation. */
  checkout?: Maybe<Checkout>;
};

/** Update checkout shipping consignment data object */
export type UpdateCheckoutShippingConsignmentDataInput = {
  /** Checkout shipping consignment input object */
  consignment: CheckoutShippingConsignmentInput;
};

/** Update checkout shipping consignment input object */
export type UpdateCheckoutShippingConsignmentInput = {
  /** The checkout id */
  checkoutEntityId: Scalars['String'];
  /** The consignment id */
  consignmentEntityId: Scalars['String'];
  /** Update checkout shipping consignment data object */
  data: UpdateCheckoutShippingConsignmentDataInput;
};

/** Update checkout shipping consignment result */
export type UpdateCheckoutShippingConsignmentResult = {
  __typename?: 'UpdateCheckoutShippingConsignmentResult';
  /** The Checkout that is updated as a result of mutation. */
  checkout?: Maybe<Checkout>;
};

/** The behavior type for updating stock levels. */
export type UpdateStockBehavior =
  | 'ORDER_COMPLETED_OR_SHIPPED'
  | 'ORDER_PLACED';

/** Update wishlist input object */
export type UpdateWishlistInput = {
  /** Wishlist data to update */
  data: WishlistUpdateDataInput;
  /** The wishlist id */
  entityId: Scalars['Int'];
};

/** Update wishlist */
export type UpdateWishlistResult = {
  __typename?: 'UpdateWishlistResult';
  /** The wishlist */
  result: Wishlist;
};

/** Url field */
export type UrlField = {
  __typename?: 'UrlField';
  /** CDN url to fetch assets. */
  cdnUrl: Scalars['String'];
  /** Checkout url. */
  checkoutUrl?: Maybe<Scalars['String']>;
  /** Store url. */
  vanityUrl: Scalars['String'];
};

/** Variant */
export type Variant = Node & {
  __typename?: 'Variant';
  /** Default image for a variant. */
  defaultImage?: Maybe<Image>;
  /** The variant's depth. If a depth was not explicitly specified on the variant, this will be the product's depth. */
  depth?: Maybe<Measurement>;
  /** Id of the variant. */
  entityId: Scalars['Int'];
  /** Global trade item number. */
  gtin?: Maybe<Scalars['String']>;
  /** The variant's height. If a height was not explicitly specified on the variant, this will be the product's height. */
  height?: Maybe<Measurement>;
  /** The ID of an object */
  id: Scalars['ID'];
  /** Variant inventory */
  inventory?: Maybe<VariantInventory>;
  /** Whether the product can be purchased */
  isPurchasable: Scalars['Boolean'];
  /** Metafield data related to a variant. */
  metafields: MetafieldConnection;
  /** Manufacturer part number. */
  mpn?: Maybe<Scalars['String']>;
  /** The options which define a variant. */
  options: OptionConnection;
  /** Variant prices */
  prices?: Maybe<Prices>;
  /** Product options that compose this variant. */
  productOptions: ProductOptionConnection;
  /** Sku of the variant. */
  sku: Scalars['String'];
  /** Universal product code. */
  upc?: Maybe<Scalars['String']>;
  /** The variant's weight. If a weight was not explicitly specified on the variant, this will be the product's weight. */
  weight?: Maybe<Measurement>;
  /** The variant's width. If a width was not explicitly specified on the variant, this will be the product's width. */
  width?: Maybe<Measurement>;
};


/** Variant */
export type VariantMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  keys?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['Int']>;
  namespace: Scalars['String'];
};


/** Variant */
export type VariantOptionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Variant */
export type VariantPricesArgs = {
  currencyCode?: InputMaybe<CurrencyCode>;
  includeTax?: InputMaybe<Scalars['Boolean']>;
};


/** Variant */
export type VariantProductOptionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type VariantConnection = {
  __typename?: 'VariantConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<VariantEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type VariantEdge = {
  __typename?: 'VariantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Variant;
};

/** Variant Inventory */
export type VariantInventory = {
  __typename?: 'VariantInventory';
  /** Aggregated product variant inventory information. This data may not be available if not set or if the store's Inventory Settings have disabled displaying stock levels on the storefront. */
  aggregated?: Maybe<Aggregated>;
  /** Inventory by locations. */
  byLocation?: Maybe<LocationConnection>;
  /** Indicates whether this product is in stock. */
  isInStock: Scalars['Boolean'];
};


/** Variant Inventory */
export type VariantInventoryByLocationArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distanceFilter?: InputMaybe<DistanceFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locationEntityCodes?: InputMaybe<Array<Scalars['String']>>;
  locationEntityIds?: InputMaybe<Array<Scalars['Int']>>;
  locationEntityServiceTypeIds?: InputMaybe<Array<Scalars['String']>>;
  locationEntityTypeIds?: InputMaybe<Array<Scalars['String']>>;
};

/** WebPage details. */
export type WebPage = {
  /** Unique ID for the web page. */
  entityId: Scalars['Int'];
  /** Whether or not the page should be visible in the navigation menu. */
  isVisibleInNavigation: Scalars['Boolean'];
  /** Page name. */
  name: Scalars['String'];
  /** Unique ID for the parent page. */
  parentEntityId?: Maybe<Scalars['Int']>;
  /** Page SEO details. */
  seo: SeoDetails;
};

/** Web page type */
export type WebPageType =
  | 'BLOG'
  | 'CONTACT'
  | 'LINK'
  | 'NORMAL'
  | 'RAW';

/** Object containing filters for querying web pages */
export type WebPagesFiltersInput = {
  /** Ids of the expected pages. */
  entityIds?: InputMaybe<Array<Scalars['Int']>>;
  /** Whether the expected pages are visible in the navigation bar. */
  isVisibleInNavigation?: InputMaybe<Scalars['Boolean']>;
  /** Type of the expected pages. */
  pageType?: InputMaybe<WebPageType>;
};

/** A wishlist */
export type Wishlist = {
  __typename?: 'Wishlist';
  /** The wishlist id. */
  entityId: Scalars['Int'];
  /** Is the wishlist public? */
  isPublic: Scalars['Boolean'];
  /** A list of the wishlist items */
  items: WishlistItemConnection;
  /** The wishlist name. */
  name: Scalars['String'];
  /** The wishlist token. */
  token: Scalars['String'];
};


/** A wishlist */
export type WishlistItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  hideOutOfStock?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type WishlistConnection = {
  __typename?: 'WishlistConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<WishlistEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type WishlistEdge = {
  __typename?: 'WishlistEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Wishlist;
};

/** Wishlist filters input object */
export type WishlistFiltersInput = {
  /** A wishlist ids filter. */
  entityIds?: InputMaybe<Array<Scalars['Int']>>;
};

/** The wishlist item */
export type WishlistItem = {
  __typename?: 'WishlistItem';
  /** Wishlist item id. */
  entityId: Scalars['Int'];
  /** A product included in the wishlist. */
  product: Product;
  /** An id of the product from the wishlist. */
  productEntityId: Scalars['Int'];
  /** An id of the specific product variant from the wishlist. */
  variantEntityId?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type WishlistItemConnection = {
  __typename?: 'WishlistItemConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<WishlistItemEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type WishlistItemEdge = {
  __typename?: 'WishlistItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: WishlistItem;
};

/** Wishlist item input object */
export type WishlistItemInput = {
  /** An id of the product from the wishlist. */
  productEntityId: Scalars['Int'];
  /** An id of the specific product variant from the wishlist. */
  variantEntityId?: InputMaybe<Scalars['Int']>;
};

/** The wishlist mutations. */
export type WishlistMutations = {
  __typename?: 'WishlistMutations';
  /** Add wishlist items */
  addWishlistItems?: Maybe<AddWishlistItemsResult>;
  /** Create wishlist */
  createWishlist?: Maybe<CreateWishlistResult>;
  /** Delete wishlist items */
  deleteWishlistItems?: Maybe<DeleteWishlistItemsResult>;
  /** Delete wishlist */
  deleteWishlists?: Maybe<DeleteWishlistResult>;
  /** Update wishlist */
  updateWishlist?: Maybe<UpdateWishlistResult>;
};


/** The wishlist mutations. */
export type WishlistMutationsAddWishlistItemsArgs = {
  input: AddWishlistItemsInput;
};


/** The wishlist mutations. */
export type WishlistMutationsCreateWishlistArgs = {
  input: CreateWishlistInput;
};


/** The wishlist mutations. */
export type WishlistMutationsDeleteWishlistItemsArgs = {
  input: DeleteWishlistItemsInput;
};


/** The wishlist mutations. */
export type WishlistMutationsDeleteWishlistsArgs = {
  input: DeleteWishlistsInput;
};


/** The wishlist mutations. */
export type WishlistMutationsUpdateWishlistArgs = {
  input: UpdateWishlistInput;
};

/** Wishlist data to update */
export type WishlistUpdateDataInput = {
  /** A new wishlist visibility mode */
  isPublic?: InputMaybe<Scalars['Boolean']>;
  /** A new wishlist name */
  name?: InputMaybe<Scalars['String']>;
};

/** Country Code */
export type CountryCode =
  | 'AD'
  | 'AE'
  | 'AF'
  | 'AG'
  | 'AI'
  | 'AL'
  | 'AM'
  | 'AO'
  | 'AQ'
  | 'AR'
  | 'AS'
  | 'AT'
  | 'AU'
  | 'AW'
  | 'AX'
  | 'AZ'
  | 'BA'
  | 'BB'
  | 'BD'
  | 'BE'
  | 'BF'
  | 'BG'
  | 'BH'
  | 'BI'
  | 'BJ'
  | 'BL'
  | 'BM'
  | 'BN'
  | 'BO'
  | 'BQ'
  | 'BR'
  | 'BS'
  | 'BT'
  | 'BV'
  | 'BW'
  | 'BY'
  | 'BZ'
  | 'CA'
  | 'CC'
  | 'CD'
  | 'CF'
  | 'CG'
  | 'CH'
  | 'CI'
  | 'CK'
  | 'CL'
  | 'CM'
  | 'CN'
  | 'CO'
  | 'CR'
  | 'CU'
  | 'CV'
  | 'CW'
  | 'CX'
  | 'CY'
  | 'CZ'
  | 'DE'
  | 'DJ'
  | 'DK'
  | 'DM'
  | 'DO'
  | 'DZ'
  | 'EC'
  | 'EE'
  | 'EG'
  | 'EH'
  | 'ER'
  | 'ES'
  | 'ET'
  | 'FI'
  | 'FJ'
  | 'FK'
  | 'FM'
  | 'FO'
  | 'FR'
  | 'GA'
  | 'GB'
  | 'GD'
  | 'GE'
  | 'GF'
  | 'GG'
  | 'GH'
  | 'GI'
  | 'GL'
  | 'GM'
  | 'GN'
  | 'GP'
  | 'GQ'
  | 'GR'
  | 'GS'
  | 'GT'
  | 'GU'
  | 'GW'
  | 'GY'
  | 'HK'
  | 'HM'
  | 'HN'
  | 'HR'
  | 'HT'
  | 'HU'
  | 'ID'
  | 'IE'
  | 'IL'
  | 'IM'
  | 'IN'
  | 'IO'
  | 'IQ'
  | 'IR'
  | 'IS'
  | 'IT'
  | 'JE'
  | 'JM'
  | 'JO'
  | 'JP'
  | 'KE'
  | 'KG'
  | 'KH'
  | 'KI'
  | 'KM'
  | 'KN'
  | 'KP'
  | 'KR'
  | 'KW'
  | 'KY'
  | 'KZ'
  | 'LA'
  | 'LB'
  | 'LC'
  | 'LI'
  | 'LK'
  | 'LR'
  | 'LS'
  | 'LT'
  | 'LU'
  | 'LV'
  | 'LY'
  | 'MA'
  | 'MC'
  | 'MD'
  | 'ME'
  | 'MF'
  | 'MG'
  | 'MH'
  | 'MK'
  | 'ML'
  | 'MM'
  | 'MN'
  | 'MO'
  | 'MP'
  | 'MQ'
  | 'MR'
  | 'MS'
  | 'MT'
  | 'MU'
  | 'MV'
  | 'MW'
  | 'MX'
  | 'MY'
  | 'MZ'
  | 'NA'
  | 'NC'
  | 'NE'
  | 'NF'
  | 'NG'
  | 'NI'
  | 'NL'
  | 'NO'
  | 'NP'
  | 'NR'
  | 'NU'
  | 'NZ'
  | 'OM'
  | 'PA'
  | 'PE'
  | 'PF'
  | 'PG'
  | 'PH'
  | 'PK'
  | 'PL'
  | 'PM'
  | 'PN'
  | 'PR'
  | 'PS'
  | 'PT'
  | 'PW'
  | 'PY'
  | 'QA'
  | 'RE'
  | 'RO'
  | 'RS'
  | 'RU'
  | 'RW'
  | 'SA'
  | 'SB'
  | 'SC'
  | 'SD'
  | 'SE'
  | 'SG'
  | 'SH'
  | 'SI'
  | 'SJ'
  | 'SK'
  | 'SL'
  | 'SM'
  | 'SN'
  | 'SO'
  | 'SR'
  | 'SS'
  | 'ST'
  | 'SV'
  | 'SX'
  | 'SY'
  | 'SZ'
  | 'TC'
  | 'TD'
  | 'TF'
  | 'TG'
  | 'TH'
  | 'TJ'
  | 'TK'
  | 'TL'
  | 'TM'
  | 'TN'
  | 'TO'
  | 'TR'
  | 'TT'
  | 'TV'
  | 'TW'
  | 'TZ'
  | 'UA'
  | 'UG'
  | 'UM'
  | 'US'
  | 'UY'
  | 'UZ'
  | 'VA'
  | 'VC'
  | 'VE'
  | 'VG'
  | 'VI'
  | 'VN'
  | 'VU'
  | 'WF'
  | 'WS'
  | 'YE'
  | 'YT'
  | 'ZA'
  | 'ZM'
  | 'ZW';

/** Currency Code */
export type CurrencyCode =
  | 'ADP'
  | 'AED'
  | 'AFA'
  | 'AFN'
  | 'ALK'
  | 'ALL'
  | 'AMD'
  | 'ANG'
  | 'AOA'
  | 'AOK'
  | 'AON'
  | 'AOR'
  | 'ARA'
  | 'ARL'
  | 'ARM'
  | 'ARP'
  | 'ARS'
  | 'ATS'
  | 'AUD'
  | 'AWG'
  | 'AZM'
  | 'AZN'
  | 'BAD'
  | 'BAM'
  | 'BAN'
  | 'BBD'
  | 'BDT'
  | 'BEC'
  | 'BEF'
  | 'BEL'
  | 'BGL'
  | 'BGM'
  | 'BGN'
  | 'BGO'
  | 'BHD'
  | 'BIF'
  | 'BMD'
  | 'BND'
  | 'BOB'
  | 'BOL'
  | 'BOP'
  | 'BOV'
  | 'BRB'
  | 'BRC'
  | 'BRE'
  | 'BRL'
  | 'BRN'
  | 'BRR'
  | 'BRZ'
  | 'BSD'
  | 'BTN'
  | 'BUK'
  | 'BWP'
  | 'BYB'
  | 'BYN'
  | 'BYR'
  | 'BZD'
  | 'CAD'
  | 'CDF'
  | 'CHE'
  | 'CHF'
  | 'CHW'
  | 'CLE'
  | 'CLF'
  | 'CLP'
  | 'CNX'
  | 'CNY'
  | 'COP'
  | 'COU'
  | 'CRC'
  | 'CSD'
  | 'CSK'
  | 'CUC'
  | 'CUP'
  | 'CVE'
  | 'CYP'
  | 'CZK'
  | 'DDM'
  | 'DEM'
  | 'DJF'
  | 'DKK'
  | 'DOP'
  | 'DZD'
  | 'ECS'
  | 'ECV'
  | 'EEK'
  | 'EGP'
  | 'ERN'
  | 'ESA'
  | 'ESB'
  | 'ESP'
  | 'ETB'
  | 'EUR'
  | 'FIM'
  | 'FJD'
  | 'FKP'
  | 'FRF'
  | 'GBP'
  | 'GEK'
  | 'GEL'
  | 'GHC'
  | 'GHS'
  | 'GIP'
  | 'GMD'
  | 'GNF'
  | 'GNS'
  | 'GQE'
  | 'GRD'
  | 'GTQ'
  | 'GWE'
  | 'GWP'
  | 'GYD'
  | 'HKD'
  | 'HNL'
  | 'HRD'
  | 'HRK'
  | 'HTG'
  | 'HUF'
  | 'IDR'
  | 'IEP'
  | 'ILP'
  | 'ILR'
  | 'ILS'
  | 'INR'
  | 'IQD'
  | 'IRR'
  | 'ISJ'
  | 'ISK'
  | 'ITL'
  | 'JMD'
  | 'JOD'
  | 'JPY'
  | 'KES'
  | 'KGS'
  | 'KHR'
  | 'KMF'
  | 'KPW'
  | 'KRH'
  | 'KRO'
  | 'KRW'
  | 'KWD'
  | 'KYD'
  | 'KZT'
  | 'LAK'
  | 'LBP'
  | 'LKR'
  | 'LRD'
  | 'LSL'
  | 'LTL'
  | 'LTT'
  | 'LUC'
  | 'LUF'
  | 'LUL'
  | 'LVL'
  | 'LVR'
  | 'LYD'
  | 'MAD'
  | 'MAF'
  | 'MCF'
  | 'MDC'
  | 'MDL'
  | 'MGA'
  | 'MGF'
  | 'MKD'
  | 'MKN'
  | 'MLF'
  | 'MMK'
  | 'MNT'
  | 'MOP'
  | 'MRO'
  | 'MTL'
  | 'MTP'
  | 'MUR'
  | 'MVP'
  | 'MVR'
  | 'MWK'
  | 'MXN'
  | 'MXP'
  | 'MXV'
  | 'MYR'
  | 'MZE'
  | 'MZM'
  | 'MZN'
  | 'NAD'
  | 'NGN'
  | 'NIC'
  | 'NIO'
  | 'NLG'
  | 'NOK'
  | 'NPR'
  | 'NZD'
  | 'OMR'
  | 'PAB'
  | 'PEI'
  | 'PEN'
  | 'PES'
  | 'PGK'
  | 'PHP'
  | 'PKR'
  | 'PLN'
  | 'PLZ'
  | 'PTE'
  | 'PYG'
  | 'QAR'
  | 'RHD'
  | 'ROL'
  | 'RON'
  | 'RSD'
  | 'RUB'
  | 'RUR'
  | 'RWF'
  | 'SAR'
  | 'SBD'
  | 'SCR'
  | 'SDD'
  | 'SDG'
  | 'SDP'
  | 'SEK'
  | 'SGD'
  | 'SHP'
  | 'SIT'
  | 'SKK'
  | 'SLL'
  | 'SOS'
  | 'SRD'
  | 'SRG'
  | 'SSP'
  | 'STD'
  | 'SUR'
  | 'SVC'
  | 'SYP'
  | 'SZL'
  | 'THB'
  | 'TJR'
  | 'TJS'
  | 'TMM'
  | 'TMT'
  | 'TND'
  | 'TOP'
  | 'TPE'
  | 'TRL'
  | 'TRY'
  | 'TTD'
  | 'TWD'
  | 'TZS'
  | 'UAH'
  | 'UAK'
  | 'UGS'
  | 'UGX'
  | 'USD'
  | 'USN'
  | 'USS'
  | 'UYI'
  | 'UYP'
  | 'UYU'
  | 'UZS'
  | 'VEB'
  | 'VEF'
  | 'VND'
  | 'VNN'
  | 'VUV'
  | 'WST'
  | 'XAF'
  | 'XCD'
  | 'XEU'
  | 'XFO'
  | 'XFU'
  | 'XOF'
  | 'XPF'
  | 'XRE'
  | 'YDD'
  | 'YER'
  | 'YUD'
  | 'YUM'
  | 'YUN'
  | 'YUR'
  | 'ZAL'
  | 'ZAR'
  | 'ZMK'
  | 'ZMW'
  | 'ZRN'
  | 'ZRZ'
  | 'ZWD'
  | 'ZWL'
  | 'ZWR';

/** Blog post sort */
export type SortBy =
  | 'NEWEST'
  | 'OLDEST';

export type InventoryAddressFragment = { __typename?: 'InventoryAddress', address1: string, address2: string, city: string, code: string, countryCode: string, description?: string | null, email: string, entityId: number, label: string, latitude?: number | null, longitude?: number | null, phone: string, postalCode: string, stateOrProvince: string };

export type BreadcrumbsFragment = { __typename?: 'BreadcrumbConnection', edges?: Array<{ __typename?: 'BreadcrumbEdge', cursor: string, node: { __typename?: 'Breadcrumb', name: string, path?: string | null, entityId: number } } | null> | null };

export type CartDetailsFragment = { __typename?: 'Cart', currencyCode: string, entityId: string, id: string, isTaxIncluded: boolean, locale: string, amount: { __typename?: 'Money', currencyCode: string, value: any }, baseAmount: { __typename?: 'Money', currencyCode: string, value: any }, createdAt: { __typename?: 'DateTimeExtended', utc: any }, discountedAmount: { __typename?: 'Money', currencyCode: string, value: any }, discounts: Array<{ __typename?: 'CartDiscount', entityId: string, discountedAmount: { __typename?: 'Money', currencyCode: string, value: any } }>, lineItems: { __typename?: 'CartLineItems', totalQuantity: number, customItems: Array<{ __typename?: 'CartCustomItem', entityId: string, name: string, quantity: number, sku?: string | null, extendedListPrice: { __typename?: 'Money', currencyCode: string, value: any }, listPrice: { __typename?: 'Money', currencyCode: string, value: any } }>, digitalItems: Array<{ __typename?: 'CartDigitalItem', brand?: string | null, entityId: string, imageUrl?: string | null, isTaxable: boolean, name: string, parentEntityId?: string | null, productEntityId: number, quantity: number, sku?: string | null, url: string, variantEntityId?: number | null, couponAmount: { __typename?: 'Money', currencyCode: string, value: any }, discountedAmount: { __typename?: 'Money', currencyCode: string, value: any }, discounts: Array<{ __typename?: 'CartDiscount', entityId: string, discountedAmount: { __typename?: 'Money', currencyCode: string, value: any } }>, extendedListPrice: { __typename?: 'Money', currencyCode: string, value: any }, extendedSalePrice: { __typename?: 'Money', currencyCode: string, value: any }, listPrice: { __typename?: 'Money', currencyCode: string, value: any }, originalPrice: { __typename?: 'Money', currencyCode: string, value: any }, salePrice: { __typename?: 'Money', currencyCode: string, value: any }, selectedOptions: Array<{ __typename: 'CartSelectedCheckboxOption', valueEntityId: number, value: string, name: string, entityId: number } | { __typename: 'CartSelectedDateFieldOption', name: string, entityId: number, date: { __typename?: 'DateTimeExtended', utc: any } } | { __typename: 'CartSelectedFileUploadOption', name: string, fileName: string, entityId: number } | { __typename: 'CartSelectedMultiLineTextFieldOption', text: string, name: string, entityId: number } | { __typename: 'CartSelectedMultipleChoiceOption', valueEntityId: number, value: string, name: string, entityId: number } | { __typename: 'CartSelectedNumberFieldOption', name: string, entityId: number, number: number } | { __typename: 'CartSelectedTextFieldOption', entityId: number, name: string, text: string }> }>, giftCertificates: Array<{ __typename?: 'CartGiftCertificate', entityId: string, isTaxable: boolean, message?: string | null, name: string, theme: CartGiftCertificateTheme, amount: { __typename?: 'Money', currencyCode: string, value: any }, recipient: { __typename?: 'CartGiftCertificateRecipient', name: string, email: string }, sender: { __typename?: 'CartGiftCertificateSender', email: string, name: string } }>, physicalItems: Array<{ __typename?: 'CartPhysicalItem', brand?: string | null, entityId: string, imageUrl?: string | null, isShippingRequired: boolean, isTaxable: boolean, name: string, parentEntityId?: string | null, productEntityId: number, quantity: number, url: string, sku?: string | null, variantEntityId?: number | null, couponAmount: { __typename?: 'Money', currencyCode: string, value: any }, discountedAmount: { __typename?: 'Money', currencyCode: string, value: any }, discounts: Array<{ __typename?: 'CartDiscount', entityId: string, discountedAmount: { __typename?: 'Money', currencyCode: string, value: any } }>, extendedListPrice: { __typename?: 'Money', currencyCode: string, value: any }, extendedSalePrice: { __typename?: 'Money', currencyCode: string, value: any }, giftWrapping?: { __typename?: 'CartGiftWrapping', message?: string | null, name: string, amount: { __typename?: 'Money', currencyCode: string, value: any } } | null, listPrice: { __typename?: 'Money', currencyCode: string, value: any }, originalPrice: { __typename?: 'Money', currencyCode: string, value: any }, salePrice: { __typename?: 'Money', currencyCode: string, value: any }, selectedOptions: Array<{ __typename: 'CartSelectedCheckboxOption', valueEntityId: number, value: string, name: string, entityId: number } | { __typename: 'CartSelectedDateFieldOption', name: string, entityId: number, date: { __typename?: 'DateTimeExtended', utc: any } } | { __typename: 'CartSelectedFileUploadOption', name: string, fileName: string, entityId: number } | { __typename: 'CartSelectedMultiLineTextFieldOption', text: string, name: string, entityId: number } | { __typename: 'CartSelectedMultipleChoiceOption', valueEntityId: number, value: string, name: string, entityId: number } | { __typename: 'CartSelectedNumberFieldOption', number: number, name: string, entityId: number } | { __typename: 'CartSelectedTextFieldOption', text: string, name: string, entityId: number }> }> }, updatedAt: { __typename?: 'DateTimeExtended', utc: any } };

export type CategoryDetailsFragment = { __typename?: 'Category', id: string, entityId: number, name: string, path: string, description: string, defaultProductSort?: CategoryProductSort | null, defaultImage?: { __typename?: 'Image', url: string, urlOriginal: string, altText: string, isDefault: boolean } | null, breadcrumbs: { __typename?: 'BreadcrumbConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null }, edges?: Array<{ __typename?: 'BreadcrumbEdge', cursor: string, node: { __typename?: 'Breadcrumb', name: string, path?: string | null, entityId: number } } | null> | null }, metafields: { __typename?: 'MetafieldConnection', edges?: Array<{ __typename?: 'MetafieldEdge', node: { __typename?: 'Metafields', key: string, value: string } } | null> | null }, products: { __typename?: 'ProductConnection', collectionInfo?: { __typename?: 'CollectionInfo', totalItems?: any | null } | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } }, seo: { __typename?: 'SeoDetails', pageTitle: string, metaDescription: string, metaKeywords: string } };

export type CategoryTreeItemFragment = { __typename?: 'CategoryTreeItem', description: string, entityId: number, name: string, path: string, productCount: number, image?: { __typename?: 'Image', urlOriginal: string } | null };

export type ImageFragment = { __typename?: 'Image', url: string, urlOriginal: string, altText: string, isDefault: boolean };

export type MoneyFragment = { __typename?: 'Money', currencyCode: string, value: any };

export type MoneyRangeFragment = { __typename?: 'MoneyRange', min: { __typename?: 'Money', currencyCode: string, value: any }, max: { __typename?: 'Money', currencyCode: string, value: any } };

export type PageInfoFragment = { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null };

export type PricesFragment = { __typename?: 'Prices', basePrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, bulkPricing: Array<{ __typename?: 'BulkPricingFixedPriceDiscount', price: any, minimumQuantity: number } | { __typename?: 'BulkPricingPercentageDiscount', percentOff: any, minimumQuantity: number } | { __typename?: 'BulkPricingRelativePriceDiscount', priceAdjustment: any, minimumQuantity: number }>, mapPrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, price: { __typename?: 'Money', currencyCode: string, value: any }, priceRange: { __typename?: 'MoneyRange', min: { __typename?: 'Money', currencyCode: string, value: any }, max: { __typename?: 'Money', currencyCode: string, value: any } }, retailPrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, retailPriceRange?: { __typename?: 'MoneyRange', min: { __typename?: 'Money', currencyCode: string, value: any }, max: { __typename?: 'Money', currencyCode: string, value: any } } | null, salePrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, saved?: { __typename?: 'Money', currencyCode: string, value: any } | null };

export type ProductDetailsFragment = { __typename: 'Product', id: string, entityId: number, sku: string, name: string, addToCartUrl: string, description: string, path: string, defaultImage?: { __typename?: 'Image', url: string, urlOriginal: string, altText: string, isDefault: boolean } | null, seo: { __typename?: 'SeoDetails', pageTitle: string, metaDescription: string, metaKeywords: string }, images: { __typename?: 'ImageConnection', edges?: Array<{ __typename?: 'ImageEdge', node: { __typename?: 'Image', url: string, urlOriginal: string, altText: string, isDefault: boolean } } | null> | null }, inventory: { __typename?: 'ProductInventory', hasVariantInventory: boolean, isInStock: boolean, aggregated?: { __typename?: 'AggregatedInventory', availableToSell: number, warningLevel: number } | null }, categories: { __typename?: 'CategoryConnection', edges?: Array<{ __typename?: 'CategoryEdge', node: { __typename?: 'Category', id: string, entityId: number, name: string, path: string, description: string, defaultProductSort?: CategoryProductSort | null, defaultImage?: { __typename?: 'Image', url: string, urlOriginal: string, altText: string, isDefault: boolean } | null, breadcrumbs: { __typename?: 'BreadcrumbConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null }, edges?: Array<{ __typename?: 'BreadcrumbEdge', cursor: string, node: { __typename?: 'Breadcrumb', name: string, path?: string | null, entityId: number } } | null> | null }, metafields: { __typename?: 'MetafieldConnection', edges?: Array<{ __typename?: 'MetafieldEdge', node: { __typename?: 'Metafields', key: string, value: string } } | null> | null }, products: { __typename?: 'ProductConnection', collectionInfo?: { __typename?: 'CollectionInfo', totalItems?: any | null } | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } }, seo: { __typename?: 'SeoDetails', pageTitle: string, metaDescription: string, metaKeywords: string } } } | null> | null }, availabilityV2: { __typename?: 'ProductAvailable', status: ProductAvailabilityStatus } | { __typename?: 'ProductPreOrder', message?: string | null, description: string, status: ProductAvailabilityStatus, willBeReleasedAt?: { __typename?: 'DateTimeExtended', utc: any } | null } | { __typename?: 'ProductUnavailable', status: ProductAvailabilityStatus }, reviewSummary: { __typename?: 'Reviews', numberOfReviews: number, summationOfRatings: number }, reviews: { __typename?: 'ReviewConnection', edges?: Array<{ __typename?: 'ReviewEdge', node: { __typename?: 'Review', entityId: any, title: string, text: string, rating: number, author: { __typename?: 'Author', name: string }, createdAt: { __typename?: 'DateTimeExtended', utc: any } } } | null> | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } }, customFields: { __typename?: 'CustomFieldConnection', edges?: Array<{ __typename?: 'CustomFieldEdge', node: { __typename?: 'CustomField', name: string, value: string } } | null> | null }, metafields: { __typename?: 'MetafieldConnection', edges?: Array<{ __typename?: 'MetafieldEdge', node: { __typename?: 'Metafields', key: string, value: string } } | null> | null }, prices?: { __typename?: 'Prices', basePrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, bulkPricing: Array<{ __typename?: 'BulkPricingFixedPriceDiscount', price: any, minimumQuantity: number } | { __typename?: 'BulkPricingPercentageDiscount', percentOff: any, minimumQuantity: number } | { __typename?: 'BulkPricingRelativePriceDiscount', priceAdjustment: any, minimumQuantity: number }>, mapPrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, price: { __typename?: 'Money', currencyCode: string, value: any }, priceRange: { __typename?: 'MoneyRange', min: { __typename?: 'Money', currencyCode: string, value: any }, max: { __typename?: 'Money', currencyCode: string, value: any } }, retailPrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, retailPriceRange?: { __typename?: 'MoneyRange', min: { __typename?: 'Money', currencyCode: string, value: any }, max: { __typename?: 'Money', currencyCode: string, value: any } } | null, salePrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, saved?: { __typename?: 'Money', currencyCode: string, value: any } | null } | null, productOptions: { __typename?: 'ProductOptionConnection', edges?: Array<{ __typename?: 'ProductOptionEdge', node: { __typename?: 'CheckboxOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'DateFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'FileUploadFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'MultiLineTextFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'MultipleChoiceOption', displayStyle: string, entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean, values: { __typename?: 'ProductOptionValueConnection', edges?: Array<{ __typename?: 'ProductOptionValueEdge', node: { __typename?: 'MultipleChoiceOptionValue', entityId: number, label: string, isDefault: boolean } | { __typename?: 'ProductPickListOptionValue', entityId: number, label: string, isDefault: boolean } | { __typename?: 'SwatchOptionValue', hexColors: Array<string>, entityId: number, label: string, isDefault: boolean } } | null> | null } } | { __typename?: 'NumberFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'TextFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } } | null> | null }, variants: { __typename?: 'VariantConnection', edges?: Array<{ __typename?: 'VariantEdge', node: { __typename?: 'Variant', id: string, entityId: number, sku: string, isPurchasable: boolean, defaultImage?: { __typename?: 'Image', url: string, urlOriginal: string, altText: string, isDefault: boolean } | null, prices?: { __typename?: 'Prices', basePrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, bulkPricing: Array<{ __typename?: 'BulkPricingFixedPriceDiscount', price: any, minimumQuantity: number } | { __typename?: 'BulkPricingPercentageDiscount', percentOff: any, minimumQuantity: number } | { __typename?: 'BulkPricingRelativePriceDiscount', priceAdjustment: any, minimumQuantity: number }>, mapPrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, price: { __typename?: 'Money', currencyCode: string, value: any }, priceRange: { __typename?: 'MoneyRange', min: { __typename?: 'Money', currencyCode: string, value: any }, max: { __typename?: 'Money', currencyCode: string, value: any } }, retailPrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, retailPriceRange?: { __typename?: 'MoneyRange', min: { __typename?: 'Money', currencyCode: string, value: any }, max: { __typename?: 'Money', currencyCode: string, value: any } } | null, salePrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, saved?: { __typename?: 'Money', currencyCode: string, value: any } | null } | null, metafields: { __typename?: 'MetafieldConnection', edges?: Array<{ __typename?: 'MetafieldEdge', node: { __typename?: 'Metafields', key: string, value: string } } | null> | null }, options: { __typename?: 'OptionConnection', edges?: Array<{ __typename?: 'OptionEdge', node: { __typename?: 'ProductOption', entityId: number, displayName: string, values: { __typename?: 'OptionValueConnection', edges?: Array<{ __typename?: 'OptionValueEdge', cursor: string, node: { __typename?: 'ProductOptionValue', entityId: number, label: string } } | null> | null } } } | null> | null }, productOptions: { __typename?: 'ProductOptionConnection', edges?: Array<{ __typename?: 'ProductOptionEdge', node: { __typename?: 'CheckboxOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'DateFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'FileUploadFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'MultiLineTextFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'MultipleChoiceOption', displayStyle: string, entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean, values: { __typename?: 'ProductOptionValueConnection', edges?: Array<{ __typename?: 'ProductOptionValueEdge', node: { __typename?: 'MultipleChoiceOptionValue', entityId: number, label: string, isDefault: boolean } | { __typename?: 'ProductPickListOptionValue', entityId: number, label: string, isDefault: boolean } | { __typename?: 'SwatchOptionValue', hexColors: Array<string>, entityId: number, label: string, isDefault: boolean } } | null> | null } } | { __typename?: 'NumberFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'TextFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } } | null> | null }, inventory?: { __typename?: 'VariantInventory', isInStock: boolean, aggregated?: { __typename?: 'Aggregated', availableToSell: any, warningLevel: number } | null } | null } } | null> | null }, weight?: { __typename?: 'Measurement', value: number, unit: string } | null };

export type ProductOptionsFragment = { __typename?: 'ProductOptionConnection', edges?: Array<{ __typename?: 'ProductOptionEdge', node: { __typename?: 'CheckboxOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'DateFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'FileUploadFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'MultiLineTextFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'MultipleChoiceOption', displayStyle: string, entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean, values: { __typename?: 'ProductOptionValueConnection', edges?: Array<{ __typename?: 'ProductOptionValueEdge', node: { __typename?: 'MultipleChoiceOptionValue', entityId: number, label: string, isDefault: boolean } | { __typename?: 'ProductPickListOptionValue', entityId: number, label: string, isDefault: boolean } | { __typename?: 'SwatchOptionValue', hexColors: Array<string>, entityId: number, label: string, isDefault: boolean } } | null> | null } } | { __typename?: 'NumberFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'TextFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } } | null> | null };

export type RelatedProductsFragment = { __typename?: 'RelatedProductsConnection', edges?: Array<{ __typename?: 'RelatedProductsEdge', node: { __typename?: 'Product', id: string, entityId: number, name: string, sku: string, addToCartUrl: string, path: string, prices?: { __typename?: 'Prices', basePrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, bulkPricing: Array<{ __typename?: 'BulkPricingFixedPriceDiscount', price: any, minimumQuantity: number } | { __typename?: 'BulkPricingPercentageDiscount', percentOff: any, minimumQuantity: number } | { __typename?: 'BulkPricingRelativePriceDiscount', priceAdjustment: any, minimumQuantity: number }>, mapPrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, price: { __typename?: 'Money', currencyCode: string, value: any }, priceRange: { __typename?: 'MoneyRange', min: { __typename?: 'Money', currencyCode: string, value: any }, max: { __typename?: 'Money', currencyCode: string, value: any } }, retailPrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, retailPriceRange?: { __typename?: 'MoneyRange', min: { __typename?: 'Money', currencyCode: string, value: any }, max: { __typename?: 'Money', currencyCode: string, value: any } } | null, salePrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, saved?: { __typename?: 'Money', currencyCode: string, value: any } | null } | null, defaultImage?: { __typename?: 'Image', url: string, urlOriginal: string, altText: string, isDefault: boolean } | null, images: { __typename?: 'ImageConnection', edges?: Array<{ __typename?: 'ImageEdge', node: { __typename?: 'Image', url: string, urlOriginal: string, altText: string, isDefault: boolean } } | null> | null }, categories: { __typename?: 'CategoryConnection', edges?: Array<{ __typename?: 'CategoryEdge', node: { __typename?: 'Category', id: string, entityId: number, name: string, path: string, description: string, defaultProductSort?: CategoryProductSort | null, defaultImage?: { __typename?: 'Image', url: string, urlOriginal: string, altText: string, isDefault: boolean } | null, breadcrumbs: { __typename?: 'BreadcrumbConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null }, edges?: Array<{ __typename?: 'BreadcrumbEdge', cursor: string, node: { __typename?: 'Breadcrumb', name: string, path?: string | null, entityId: number } } | null> | null }, metafields: { __typename?: 'MetafieldConnection', edges?: Array<{ __typename?: 'MetafieldEdge', node: { __typename?: 'Metafields', key: string, value: string } } | null> | null }, products: { __typename?: 'ProductConnection', collectionInfo?: { __typename?: 'CollectionInfo', totalItems?: any | null } | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } }, seo: { __typename?: 'SeoDetails', pageTitle: string, metaDescription: string, metaKeywords: string } } } | null> | null }, metafields: { __typename?: 'MetafieldConnection', edges?: Array<{ __typename?: 'MetafieldEdge', node: { __typename?: 'Metafields', key: string, value: string } } | null> | null } } } | null> | null };

type SearchFilters_BrandSearchFilter_Fragment = { __typename: 'BrandSearchFilter', displayProductCount: boolean, name: string, isCollapsedByDefault: boolean, brands: { __typename?: 'BrandSearchFilterItemConnection', edges?: Array<{ __typename?: 'BrandSearchFilterItemEdge', node: { __typename?: 'BrandSearchFilterItem', entityId: number, name: string, isSelected: boolean, productCount: number } } | null> | null } };

type SearchFilters_CategorySearchFilter_Fragment = { __typename?: 'CategorySearchFilter', displayProductCount: boolean, name: string, isCollapsedByDefault: boolean, categories: { __typename?: 'CategorySearchFilterItemConnection', edges?: Array<{ __typename?: 'CategorySearchFilterItemEdge', node: { __typename?: 'CategorySearchFilterItem', entityId: number, name: string, isSelected: boolean, productCount: number } } | null> | null } };

type SearchFilters_OtherSearchFilter_Fragment = { __typename?: 'OtherSearchFilter', displayProductCount: boolean, name: string, isCollapsedByDefault: boolean, freeShipping?: { __typename?: 'OtherSearchFilterItem', isSelected: boolean, productCount: number } | null, isFeatured?: { __typename?: 'OtherSearchFilterItem', isSelected: boolean, productCount: number } | null, isInStock?: { __typename?: 'OtherSearchFilterItem', isSelected: boolean, productCount: number } | null };

type SearchFilters_PriceSearchFilter_Fragment = { __typename: 'PriceSearchFilter', name: string, isCollapsedByDefault: boolean, selected?: { __typename?: 'PriceSearchFilterItem', minPrice?: number | null, maxPrice?: number | null } | null };

type SearchFilters_ProductAttributeSearchFilter_Fragment = { __typename: 'ProductAttributeSearchFilter', displayProductCount: boolean, filterName: string, name: string, isCollapsedByDefault: boolean, attributes: { __typename?: 'ProductAttributeSearchFilterItemConnection', edges?: Array<{ __typename?: 'ProductAttributeSearchFilterItemEdge', node: { __typename: 'ProductAttributeSearchFilterItem', value: string, isSelected: boolean, productCount: number } } | null> | null } };

type SearchFilters_RatingSearchFilter_Fragment = { __typename: 'RatingSearchFilter', name: string, isCollapsedByDefault: boolean, ratings: { __typename?: 'RatingSearchFilterItemConnection', edges?: Array<{ __typename?: 'RatingSearchFilterItemEdge', node: { __typename?: 'RatingSearchFilterItem', value: string, isSelected: boolean, productCount: number } } | null> | null } };

export type SearchFiltersFragment = SearchFilters_BrandSearchFilter_Fragment | SearchFilters_CategorySearchFilter_Fragment | SearchFilters_OtherSearchFilter_Fragment | SearchFilters_PriceSearchFilter_Fragment | SearchFilters_ProductAttributeSearchFilter_Fragment | SearchFilters_RatingSearchFilter_Fragment;

export type SeoDetailsFragment = { __typename?: 'SeoDetails', pageTitle: string, metaDescription: string, metaKeywords: string };

export type VariantsFragment = { __typename?: 'Variant', id: string, entityId: number, sku: string, isPurchasable: boolean, defaultImage?: { __typename?: 'Image', url: string, urlOriginal: string, altText: string, isDefault: boolean } | null, prices?: { __typename?: 'Prices', basePrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, bulkPricing: Array<{ __typename?: 'BulkPricingFixedPriceDiscount', price: any, minimumQuantity: number } | { __typename?: 'BulkPricingPercentageDiscount', percentOff: any, minimumQuantity: number } | { __typename?: 'BulkPricingRelativePriceDiscount', priceAdjustment: any, minimumQuantity: number }>, mapPrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, price: { __typename?: 'Money', currencyCode: string, value: any }, priceRange: { __typename?: 'MoneyRange', min: { __typename?: 'Money', currencyCode: string, value: any }, max: { __typename?: 'Money', currencyCode: string, value: any } }, retailPrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, retailPriceRange?: { __typename?: 'MoneyRange', min: { __typename?: 'Money', currencyCode: string, value: any }, max: { __typename?: 'Money', currencyCode: string, value: any } } | null, salePrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, saved?: { __typename?: 'Money', currencyCode: string, value: any } | null } | null, metafields: { __typename?: 'MetafieldConnection', edges?: Array<{ __typename?: 'MetafieldEdge', node: { __typename?: 'Metafields', key: string, value: string } } | null> | null }, options: { __typename?: 'OptionConnection', edges?: Array<{ __typename?: 'OptionEdge', node: { __typename?: 'ProductOption', entityId: number, displayName: string, values: { __typename?: 'OptionValueConnection', edges?: Array<{ __typename?: 'OptionValueEdge', cursor: string, node: { __typename?: 'ProductOptionValue', entityId: number, label: string } } | null> | null } } } | null> | null }, productOptions: { __typename?: 'ProductOptionConnection', edges?: Array<{ __typename?: 'ProductOptionEdge', node: { __typename?: 'CheckboxOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'DateFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'FileUploadFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'MultiLineTextFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'MultipleChoiceOption', displayStyle: string, entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean, values: { __typename?: 'ProductOptionValueConnection', edges?: Array<{ __typename?: 'ProductOptionValueEdge', node: { __typename?: 'MultipleChoiceOptionValue', entityId: number, label: string, isDefault: boolean } | { __typename?: 'ProductPickListOptionValue', entityId: number, label: string, isDefault: boolean } | { __typename?: 'SwatchOptionValue', hexColors: Array<string>, entityId: number, label: string, isDefault: boolean } } | null> | null } } | { __typename?: 'NumberFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'TextFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } } | null> | null }, inventory?: { __typename?: 'VariantInventory', isInStock: boolean, aggregated?: { __typename?: 'Aggregated', availableToSell: any, warningLevel: number } | null } | null };

export type AddProductsToCartMutationVariables = Exact<{
  cartId: Scalars['String'];
  cartItems: AddCartLineItemsDataInput;
}>;


export type AddProductsToCartMutation = { __typename?: 'Mutation', cart: { __typename?: 'CartMutations', addCartLineItems?: { __typename?: 'AddCartLineItemsResult', cart?: { __typename?: 'Cart', entityId: string } | null } | null } };

export type AssignCartToCustomerMutationVariables = Exact<{
  input: AssignCartToCustomerInput;
}>;


export type AssignCartToCustomerMutation = { __typename?: 'Mutation', cart: { __typename?: 'CartMutations', assignCartToCustomer?: { __typename?: 'AssignCartToCustomerResult', cart?: { __typename?: 'Cart', entityId: string } | null } | null } };

export type AvailableProductSearchFiltersQueryVariables = Exact<{
  filters: SearchProductsFiltersInput;
}>;


export type AvailableProductSearchFiltersQuery = { __typename?: 'Query', site: { __typename?: 'Site', search: { __typename?: 'SearchQueries', searchProducts: { __typename?: 'SearchProducts', filters: { __typename?: 'SearchProductFilterConnection', edges?: Array<{ __typename?: 'SearchProductFilterEdge', node: { __typename: 'BrandSearchFilter', name: string } | { __typename: 'CategorySearchFilter', name: string } | { __typename: 'OtherSearchFilter', name: string } | { __typename: 'PriceSearchFilter', name: string } | { __typename: 'ProductAttributeSearchFilter', filterName: string, name: string } | { __typename: 'RatingSearchFilter', name: string } } | null> | null } } } } };

export type CartQueryVariables = Exact<{
  entityId?: InputMaybe<Scalars['String']>;
}>;


export type CartQuery = { __typename?: 'Query', site: { __typename?: 'Site', cart?: { __typename?: 'Cart', currencyCode: string, entityId: string, id: string, isTaxIncluded: boolean, locale: string, amount: { __typename?: 'Money', currencyCode: string, value: any }, baseAmount: { __typename?: 'Money', currencyCode: string, value: any }, createdAt: { __typename?: 'DateTimeExtended', utc: any }, discountedAmount: { __typename?: 'Money', currencyCode: string, value: any }, discounts: Array<{ __typename?: 'CartDiscount', entityId: string, discountedAmount: { __typename?: 'Money', currencyCode: string, value: any } }>, lineItems: { __typename?: 'CartLineItems', totalQuantity: number, customItems: Array<{ __typename?: 'CartCustomItem', entityId: string, name: string, quantity: number, sku?: string | null, extendedListPrice: { __typename?: 'Money', currencyCode: string, value: any }, listPrice: { __typename?: 'Money', currencyCode: string, value: any } }>, digitalItems: Array<{ __typename?: 'CartDigitalItem', brand?: string | null, entityId: string, imageUrl?: string | null, isTaxable: boolean, name: string, parentEntityId?: string | null, productEntityId: number, quantity: number, sku?: string | null, url: string, variantEntityId?: number | null, couponAmount: { __typename?: 'Money', currencyCode: string, value: any }, discountedAmount: { __typename?: 'Money', currencyCode: string, value: any }, discounts: Array<{ __typename?: 'CartDiscount', entityId: string, discountedAmount: { __typename?: 'Money', currencyCode: string, value: any } }>, extendedListPrice: { __typename?: 'Money', currencyCode: string, value: any }, extendedSalePrice: { __typename?: 'Money', currencyCode: string, value: any }, listPrice: { __typename?: 'Money', currencyCode: string, value: any }, originalPrice: { __typename?: 'Money', currencyCode: string, value: any }, salePrice: { __typename?: 'Money', currencyCode: string, value: any }, selectedOptions: Array<{ __typename: 'CartSelectedCheckboxOption', valueEntityId: number, value: string, name: string, entityId: number } | { __typename: 'CartSelectedDateFieldOption', name: string, entityId: number, date: { __typename?: 'DateTimeExtended', utc: any } } | { __typename: 'CartSelectedFileUploadOption', name: string, fileName: string, entityId: number } | { __typename: 'CartSelectedMultiLineTextFieldOption', text: string, name: string, entityId: number } | { __typename: 'CartSelectedMultipleChoiceOption', valueEntityId: number, value: string, name: string, entityId: number } | { __typename: 'CartSelectedNumberFieldOption', name: string, entityId: number, number: number } | { __typename: 'CartSelectedTextFieldOption', entityId: number, name: string, text: string }> }>, giftCertificates: Array<{ __typename?: 'CartGiftCertificate', entityId: string, isTaxable: boolean, message?: string | null, name: string, theme: CartGiftCertificateTheme, amount: { __typename?: 'Money', currencyCode: string, value: any }, recipient: { __typename?: 'CartGiftCertificateRecipient', name: string, email: string }, sender: { __typename?: 'CartGiftCertificateSender', email: string, name: string } }>, physicalItems: Array<{ __typename?: 'CartPhysicalItem', brand?: string | null, entityId: string, imageUrl?: string | null, isShippingRequired: boolean, isTaxable: boolean, name: string, parentEntityId?: string | null, productEntityId: number, quantity: number, url: string, sku?: string | null, variantEntityId?: number | null, couponAmount: { __typename?: 'Money', currencyCode: string, value: any }, discountedAmount: { __typename?: 'Money', currencyCode: string, value: any }, discounts: Array<{ __typename?: 'CartDiscount', entityId: string, discountedAmount: { __typename?: 'Money', currencyCode: string, value: any } }>, extendedListPrice: { __typename?: 'Money', currencyCode: string, value: any }, extendedSalePrice: { __typename?: 'Money', currencyCode: string, value: any }, giftWrapping?: { __typename?: 'CartGiftWrapping', message?: string | null, name: string, amount: { __typename?: 'Money', currencyCode: string, value: any } } | null, listPrice: { __typename?: 'Money', currencyCode: string, value: any }, originalPrice: { __typename?: 'Money', currencyCode: string, value: any }, salePrice: { __typename?: 'Money', currencyCode: string, value: any }, selectedOptions: Array<{ __typename: 'CartSelectedCheckboxOption', valueEntityId: number, value: string, name: string, entityId: number } | { __typename: 'CartSelectedDateFieldOption', name: string, entityId: number, date: { __typename?: 'DateTimeExtended', utc: any } } | { __typename: 'CartSelectedFileUploadOption', name: string, fileName: string, entityId: number } | { __typename: 'CartSelectedMultiLineTextFieldOption', text: string, name: string, entityId: number } | { __typename: 'CartSelectedMultipleChoiceOption', valueEntityId: number, value: string, name: string, entityId: number } | { __typename: 'CartSelectedNumberFieldOption', number: number, name: string, entityId: number } | { __typename: 'CartSelectedTextFieldOption', text: string, name: string, entityId: number }> }> }, updatedAt: { __typename?: 'DateTimeExtended', utc: any } } | null } };

export type GetCartEntityIdQueryVariables = Exact<{
  entityId?: InputMaybe<Scalars['String']>;
}>;


export type GetCartEntityIdQuery = { __typename?: 'Query', site: { __typename?: 'Site', cart?: { __typename?: 'Cart', entityId: string } | null } };

export type CategoryTreeQueryVariables = Exact<{
  rootEntityId?: InputMaybe<Scalars['Int']>;
}>;


export type CategoryTreeQuery = { __typename?: 'Query', site: { __typename?: 'Site', categoryTree: Array<{ __typename?: 'CategoryTreeItem', description: string, entityId: number, name: string, path: string, productCount: number, children: Array<{ __typename?: 'CategoryTreeItem', description: string, entityId: number, name: string, path: string, productCount: number, children: Array<{ __typename?: 'CategoryTreeItem', description: string, entityId: number, name: string, path: string, productCount: number, image?: { __typename?: 'Image', urlOriginal: string } | null }>, image?: { __typename?: 'Image', urlOriginal: string } | null }>, image?: { __typename?: 'Image', urlOriginal: string } | null }> } };

export type CategoryQueryVariables = Exact<{
  entityId: Scalars['Int'];
}>;


export type CategoryQuery = { __typename?: 'Query', site: { __typename?: 'Site', category?: { __typename?: 'Category', id: string, entityId: number, name: string, path: string, description: string, defaultProductSort?: CategoryProductSort | null, defaultImage?: { __typename?: 'Image', url: string, urlOriginal: string, altText: string, isDefault: boolean } | null, breadcrumbs: { __typename?: 'BreadcrumbConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null }, edges?: Array<{ __typename?: 'BreadcrumbEdge', cursor: string, node: { __typename?: 'Breadcrumb', name: string, path?: string | null, entityId: number } } | null> | null }, metafields: { __typename?: 'MetafieldConnection', edges?: Array<{ __typename?: 'MetafieldEdge', node: { __typename?: 'Metafields', key: string, value: string } } | null> | null }, products: { __typename?: 'ProductConnection', collectionInfo?: { __typename?: 'CollectionInfo', totalItems?: any | null } | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } }, seo: { __typename?: 'SeoDetails', pageTitle: string, metaDescription: string, metaKeywords: string } } | null } };

export type GetSocialLinksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSocialLinksQuery = { __typename?: 'Query', site: { __typename?: 'Site', settings?: { __typename?: 'Settings', socialMediaLinks: Array<{ __typename?: 'SocialMediaLink', name: string, url: string }> } | null } };

export type CheckoutQueryVariables = Exact<{
  entityId?: InputMaybe<Scalars['String']>;
}>;


export type CheckoutQuery = { __typename?: 'Query', site: { __typename?: 'Site', checkout?: { __typename?: 'Checkout', id: string, entityId: string, customerMessage?: string | null, billingAddress?: { __typename?: 'CheckoutBillingAddress', stateOrProvinceCode?: string | null, stateOrProvince?: string | null, postalCode?: string | null, phone?: string | null, lastName?: string | null, firstName?: string | null, entityId: string, email?: string | null, countryCode: string, company?: string | null, city?: string | null, address2?: string | null, address1?: string | null, customFields: Array<{ __typename: 'CheckoutAddressCheckboxesCustomField', valueEntityIds: Array<number>, entityId: number } | { __typename: 'CheckoutAddressDateCustomField', entityId: number, date: { __typename?: 'DateTimeExtended', utc: any } } | { __typename: 'CheckoutAddressMultipleChoiceCustomField', valueEntityId: number, entityId: number } | { __typename: 'CheckoutAddressNumberCustomField', number: number, entityId: number } | { __typename: 'CheckoutAddressPasswordCustomField', password: string, entityId: number } | { __typename: 'CheckoutAddressTextFieldCustomField', text: string, entityId: number }> } | null, updatedAt: { __typename?: 'DateTimeExtended', utc: any }, taxes?: Array<{ __typename?: 'CheckoutTax', name: string, amount: { __typename?: 'Money', currencyCode: string, value: any } }> | null, taxTotal?: { __typename?: 'Money', currencyCode: string, value: any } | null, subtotal?: { __typename?: 'Money', currencyCode: string, value: any } | null, shippingCostTotal?: { __typename?: 'Money', currencyCode: string, value: any } | null, shippingConsignments?: Array<{ __typename?: 'CheckoutShippingConsignment', lineItemIds: Array<string>, entityId: string, shippingCost?: { __typename?: 'Money', currencyCode: string, value: any } | null, selectedShippingOption?: { __typename?: 'CheckoutSelectedShippingOption', type: string, transitTime?: string | null, imageUrl?: string | null, entityId: string, description: string, cost: { __typename?: 'Money', currencyCode: string, value: any } } | null, handlingCost?: { __typename?: 'Money', currencyCode: string, value: any } | null, coupons?: Array<{ __typename?: 'CheckoutCoupon', entityId: number, couponType?: CouponType | null, code: string, discountedAmount: { __typename?: 'Money', currencyCode: string, value: any } }> | null, availableShippingOptions?: Array<{ __typename?: 'CheckoutAvailableShippingOption', type: string, transitTime?: string | null, imageUrl?: string | null, entityId: string, description: string, cost: { __typename?: 'Money', currencyCode: string, value: any } }> | null, address: { __typename?: 'CheckoutConsignmentAddress', stateOrProvinceCode?: string | null, stateOrProvince?: string | null, postalCode?: string | null, phone?: string | null, lastName?: string | null, firstName?: string | null, email?: string | null, countryCode: string, company?: string | null, city?: string | null, address2?: string | null, address1?: string | null, customFields: Array<{ __typename: 'CheckoutAddressCheckboxesCustomField', valueEntityIds: Array<number>, entityId: number } | { __typename: 'CheckoutAddressDateCustomField', entityId: number, date: { __typename?: 'DateTimeExtended', utc: any } } | { __typename: 'CheckoutAddressMultipleChoiceCustomField', valueEntityId: number, entityId: number } | { __typename: 'CheckoutAddressNumberCustomField', number: number, entityId: number } | { __typename: 'CheckoutAddressPasswordCustomField', password: string, entityId: number } | { __typename: 'CheckoutAddressTextFieldCustomField', text: string, entityId: number }> } }> | null, outstandingBalance?: { __typename?: 'Money', currencyCode: string, value: any } | null, order?: { __typename?: 'Order', entityId: number } | null, handlingCostTotal?: { __typename?: 'Money', currencyCode: string, value: any } | null, grandTotal?: { __typename?: 'Money', currencyCode: string, value: any } | null, giftWrappingCostTotal?: { __typename?: 'Money', currencyCode: string, value: any } | null, createdAt: { __typename?: 'DateTimeExtended', utc: any }, coupons: Array<{ __typename?: 'CheckoutCoupon', entityId: number, couponType?: CouponType | null, code: string, discountedAmount: { __typename?: 'Money', currencyCode: string, value: any } }>, cart?: { __typename?: 'Cart', currencyCode: string, entityId: string, id: string, isTaxIncluded: boolean, locale: string, amount: { __typename?: 'Money', currencyCode: string, value: any }, baseAmount: { __typename?: 'Money', currencyCode: string, value: any }, createdAt: { __typename?: 'DateTimeExtended', utc: any }, discountedAmount: { __typename?: 'Money', currencyCode: string, value: any }, discounts: Array<{ __typename?: 'CartDiscount', entityId: string, discountedAmount: { __typename?: 'Money', currencyCode: string, value: any } }>, lineItems: { __typename?: 'CartLineItems', totalQuantity: number, customItems: Array<{ __typename?: 'CartCustomItem', entityId: string, name: string, quantity: number, sku?: string | null, extendedListPrice: { __typename?: 'Money', currencyCode: string, value: any }, listPrice: { __typename?: 'Money', currencyCode: string, value: any } }>, digitalItems: Array<{ __typename?: 'CartDigitalItem', brand?: string | null, entityId: string, imageUrl?: string | null, isTaxable: boolean, name: string, parentEntityId?: string | null, productEntityId: number, quantity: number, sku?: string | null, url: string, variantEntityId?: number | null, couponAmount: { __typename?: 'Money', currencyCode: string, value: any }, discountedAmount: { __typename?: 'Money', currencyCode: string, value: any }, discounts: Array<{ __typename?: 'CartDiscount', entityId: string, discountedAmount: { __typename?: 'Money', currencyCode: string, value: any } }>, extendedListPrice: { __typename?: 'Money', currencyCode: string, value: any }, extendedSalePrice: { __typename?: 'Money', currencyCode: string, value: any }, listPrice: { __typename?: 'Money', currencyCode: string, value: any }, originalPrice: { __typename?: 'Money', currencyCode: string, value: any }, salePrice: { __typename?: 'Money', currencyCode: string, value: any }, selectedOptions: Array<{ __typename: 'CartSelectedCheckboxOption', valueEntityId: number, value: string, name: string, entityId: number } | { __typename: 'CartSelectedDateFieldOption', name: string, entityId: number, date: { __typename?: 'DateTimeExtended', utc: any } } | { __typename: 'CartSelectedFileUploadOption', name: string, fileName: string, entityId: number } | { __typename: 'CartSelectedMultiLineTextFieldOption', text: string, name: string, entityId: number } | { __typename: 'CartSelectedMultipleChoiceOption', valueEntityId: number, value: string, name: string, entityId: number } | { __typename: 'CartSelectedNumberFieldOption', name: string, entityId: number, number: number } | { __typename: 'CartSelectedTextFieldOption', entityId: number, name: string, text: string }> }>, giftCertificates: Array<{ __typename?: 'CartGiftCertificate', entityId: string, isTaxable: boolean, message?: string | null, name: string, theme: CartGiftCertificateTheme, amount: { __typename?: 'Money', currencyCode: string, value: any }, recipient: { __typename?: 'CartGiftCertificateRecipient', name: string, email: string }, sender: { __typename?: 'CartGiftCertificateSender', email: string, name: string } }>, physicalItems: Array<{ __typename?: 'CartPhysicalItem', brand?: string | null, entityId: string, imageUrl?: string | null, isShippingRequired: boolean, isTaxable: boolean, name: string, parentEntityId?: string | null, productEntityId: number, quantity: number, url: string, sku?: string | null, variantEntityId?: number | null, couponAmount: { __typename?: 'Money', currencyCode: string, value: any }, discountedAmount: { __typename?: 'Money', currencyCode: string, value: any }, discounts: Array<{ __typename?: 'CartDiscount', entityId: string, discountedAmount: { __typename?: 'Money', currencyCode: string, value: any } }>, extendedListPrice: { __typename?: 'Money', currencyCode: string, value: any }, extendedSalePrice: { __typename?: 'Money', currencyCode: string, value: any }, giftWrapping?: { __typename?: 'CartGiftWrapping', message?: string | null, name: string, amount: { __typename?: 'Money', currencyCode: string, value: any } } | null, listPrice: { __typename?: 'Money', currencyCode: string, value: any }, originalPrice: { __typename?: 'Money', currencyCode: string, value: any }, salePrice: { __typename?: 'Money', currencyCode: string, value: any }, selectedOptions: Array<{ __typename: 'CartSelectedCheckboxOption', valueEntityId: number, value: string, name: string, entityId: number } | { __typename: 'CartSelectedDateFieldOption', name: string, entityId: number, date: { __typename?: 'DateTimeExtended', utc: any } } | { __typename: 'CartSelectedFileUploadOption', name: string, fileName: string, entityId: number } | { __typename: 'CartSelectedMultiLineTextFieldOption', text: string, name: string, entityId: number } | { __typename: 'CartSelectedMultipleChoiceOption', valueEntityId: number, value: string, name: string, entityId: number } | { __typename: 'CartSelectedNumberFieldOption', number: number, name: string, entityId: number } | { __typename: 'CartSelectedTextFieldOption', text: string, name: string, entityId: number }> }> }, updatedAt: { __typename?: 'DateTimeExtended', utc: any } } | null } | null } };

export type CreateCartMutationVariables = Exact<{
  lineItems?: InputMaybe<Array<CartLineItemInput> | CartLineItemInput>;
}>;


export type CreateCartMutation = { __typename?: 'Mutation', cart: { __typename?: 'CartMutations', createCart?: { __typename?: 'CreateCartResult', cart?: { __typename?: 'Cart', entityId: string } | null } | null } };

export type CustomerAttributeQueryVariables = Exact<{
  attributeId: Scalars['Int'];
}>;


export type CustomerAttributeQuery = { __typename?: 'Query', customer?: { __typename?: 'Customer', attributes: { __typename?: 'CustomerAttributes', attribute: { __typename?: 'CustomerAttribute', entityId: number, name: string, value?: string | null } } } | null };

export type CustomerQueryVariables = Exact<{ [key: string]: never; }>;


export type CustomerQuery = { __typename?: 'Query', customer?: { __typename?: 'Customer', addressCount: number, attributeCount: number, company: string, customerGroupId: number, email: string, entityId: number, firstName: string, lastName: string, notes: string, phone: string, taxExemptCategory: string, storeCredit: Array<{ __typename?: 'Money', currencyCode: string, value: any }>, wishlists: { __typename?: 'WishlistConnection', edges?: Array<{ __typename?: 'WishlistEdge', cursor: string, node: { __typename?: 'Wishlist', entityId: number, isPublic: boolean, name: string, token: string, items: { __typename?: 'WishlistItemConnection', edges?: Array<{ __typename?: 'WishlistItemEdge', cursor: string, node: { __typename?: 'WishlistItem', entityId: number, productEntityId: number, variantEntityId?: number | null, product: { __typename?: 'Product', id: string, entityId: number, sku: string, name: string, addToCartUrl: string, description: string, path: string, defaultImage?: { __typename?: 'Image', url: string, urlOriginal: string, altText: string, isDefault: boolean } | null, seo: { __typename?: 'SeoDetails', pageTitle: string, metaDescription: string, metaKeywords: string }, images: { __typename?: 'ImageConnection', edges?: Array<{ __typename?: 'ImageEdge', cursor: string, node: { __typename?: 'Image', url: string, urlOriginal: string, altText: string, isDefault: boolean } } | null> | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } }, categories: { __typename?: 'CategoryConnection', edges?: Array<{ __typename?: 'CategoryEdge', cursor: string, node: { __typename?: 'Category', id: string, entityId: number, name: string, path: string, description: string, defaultProductSort?: CategoryProductSort | null, defaultImage?: { __typename?: 'Image', url: string, urlOriginal: string, altText: string, isDefault: boolean } | null, breadcrumbs: { __typename?: 'BreadcrumbConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null }, edges?: Array<{ __typename?: 'BreadcrumbEdge', cursor: string, node: { __typename?: 'Breadcrumb', name: string, path?: string | null, entityId: number } } | null> | null }, metafields: { __typename?: 'MetafieldConnection', edges?: Array<{ __typename?: 'MetafieldEdge', node: { __typename?: 'Metafields', key: string, value: string } } | null> | null }, products: { __typename?: 'ProductConnection', collectionInfo?: { __typename?: 'CollectionInfo', totalItems?: any | null } | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } }, seo: { __typename?: 'SeoDetails', pageTitle: string, metaDescription: string, metaKeywords: string } } } | null> | null }, reviews: { __typename?: 'ReviewConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } }, availabilityV2: { __typename?: 'ProductAvailable', status: ProductAvailabilityStatus, description: string } | { __typename?: 'ProductPreOrder', status: ProductAvailabilityStatus, description: string } | { __typename?: 'ProductUnavailable', status: ProductAvailabilityStatus, description: string }, prices?: { __typename?: 'Prices', basePrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, bulkPricing: Array<{ __typename?: 'BulkPricingFixedPriceDiscount', price: any, minimumQuantity: number } | { __typename?: 'BulkPricingPercentageDiscount', percentOff: any, minimumQuantity: number } | { __typename?: 'BulkPricingRelativePriceDiscount', priceAdjustment: any, minimumQuantity: number }>, mapPrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, price: { __typename?: 'Money', currencyCode: string, value: any }, priceRange: { __typename?: 'MoneyRange', min: { __typename?: 'Money', currencyCode: string, value: any }, max: { __typename?: 'Money', currencyCode: string, value: any } }, retailPrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, retailPriceRange?: { __typename?: 'MoneyRange', min: { __typename?: 'Money', currencyCode: string, value: any }, max: { __typename?: 'Money', currencyCode: string, value: any } } | null, salePrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, saved?: { __typename?: 'Money', currencyCode: string, value: any } | null } | null, customFields: { __typename?: 'CustomFieldConnection', edges?: Array<{ __typename?: 'CustomFieldEdge', node: { __typename?: 'CustomField', name: string, value: string } } | null> | null }, metafields: { __typename?: 'MetafieldConnection', edges?: Array<{ __typename?: 'MetafieldEdge', node: { __typename?: 'Metafields', key: string, value: string } } | null> | null }, productOptions: { __typename?: 'ProductOptionConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null }, edges?: Array<{ __typename?: 'ProductOptionEdge', node: { __typename?: 'CheckboxOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'DateFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'FileUploadFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'MultiLineTextFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'MultipleChoiceOption', displayStyle: string, entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean, values: { __typename?: 'ProductOptionValueConnection', edges?: Array<{ __typename?: 'ProductOptionValueEdge', node: { __typename?: 'MultipleChoiceOptionValue', entityId: number, label: string, isDefault: boolean } | { __typename?: 'ProductPickListOptionValue', entityId: number, label: string, isDefault: boolean } | { __typename?: 'SwatchOptionValue', hexColors: Array<string>, entityId: number, label: string, isDefault: boolean } } | null> | null } } | { __typename?: 'NumberFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'TextFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } } | null> | null } } } } | null> | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } } } | null> | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } } | null };

export type DeleteCartLineItemMutationVariables = Exact<{
  cartEntityId: Scalars['String'];
  lineItemEntityId: Scalars['String'];
}>;


export type DeleteCartLineItemMutation = { __typename?: 'Mutation', cart: { __typename?: 'CartMutations', deleteCartLineItem?: { __typename?: 'DeleteCartLineItemResult', cart?: { __typename?: 'Cart', entityId: string } | null } | null } };

export type CdnUrlQueryVariables = Exact<{ [key: string]: never; }>;


export type CdnUrlQuery = { __typename?: 'Query', site: { __typename?: 'Site', settings?: { __typename?: 'Settings', url: { __typename?: 'UrlField', cdnUrl: string } } | null } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResult', result: string, customer?: { __typename?: 'Customer', entityId: number } | null } };

export type GetPdpProductQueryVariables = Exact<{
  path: Scalars['String'];
  includeTax?: InputMaybe<Scalars['Boolean']>;
}>;


export type GetPdpProductQuery = { __typename?: 'Query', site: { __typename?: 'Site', route: { __typename?: 'Route', node?: { __typename?: 'Banner' } | { __typename?: 'Blog' } | { __typename?: 'BlogIndexPage' } | { __typename?: 'BlogPost' } | { __typename?: 'Brand' } | { __typename?: 'Cart' } | { __typename?: 'Category' } | { __typename?: 'Checkout' } | { __typename?: 'ContactPage' } | { __typename?: 'NormalPage' } | { __typename: 'Product', id: string, entityId: number, sku: string, name: string, addToCartUrl: string, description: string, path: string, relatedProducts: { __typename?: 'RelatedProductsConnection', edges?: Array<{ __typename?: 'RelatedProductsEdge', node: { __typename?: 'Product', id: string, entityId: number, name: string, sku: string, addToCartUrl: string, path: string, prices?: { __typename?: 'Prices', basePrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, bulkPricing: Array<{ __typename?: 'BulkPricingFixedPriceDiscount', price: any, minimumQuantity: number } | { __typename?: 'BulkPricingPercentageDiscount', percentOff: any, minimumQuantity: number } | { __typename?: 'BulkPricingRelativePriceDiscount', priceAdjustment: any, minimumQuantity: number }>, mapPrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, price: { __typename?: 'Money', currencyCode: string, value: any }, priceRange: { __typename?: 'MoneyRange', min: { __typename?: 'Money', currencyCode: string, value: any }, max: { __typename?: 'Money', currencyCode: string, value: any } }, retailPrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, retailPriceRange?: { __typename?: 'MoneyRange', min: { __typename?: 'Money', currencyCode: string, value: any }, max: { __typename?: 'Money', currencyCode: string, value: any } } | null, salePrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, saved?: { __typename?: 'Money', currencyCode: string, value: any } | null } | null, defaultImage?: { __typename?: 'Image', url: string, urlOriginal: string, altText: string, isDefault: boolean } | null, images: { __typename?: 'ImageConnection', edges?: Array<{ __typename?: 'ImageEdge', node: { __typename?: 'Image', url: string, urlOriginal: string, altText: string, isDefault: boolean } } | null> | null }, categories: { __typename?: 'CategoryConnection', edges?: Array<{ __typename?: 'CategoryEdge', node: { __typename?: 'Category', id: string, entityId: number, name: string, path: string, description: string, defaultProductSort?: CategoryProductSort | null, defaultImage?: { __typename?: 'Image', url: string, urlOriginal: string, altText: string, isDefault: boolean } | null, breadcrumbs: { __typename?: 'BreadcrumbConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null }, edges?: Array<{ __typename?: 'BreadcrumbEdge', cursor: string, node: { __typename?: 'Breadcrumb', name: string, path?: string | null, entityId: number } } | null> | null }, metafields: { __typename?: 'MetafieldConnection', edges?: Array<{ __typename?: 'MetafieldEdge', node: { __typename?: 'Metafields', key: string, value: string } } | null> | null }, products: { __typename?: 'ProductConnection', collectionInfo?: { __typename?: 'CollectionInfo', totalItems?: any | null } | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } }, seo: { __typename?: 'SeoDetails', pageTitle: string, metaDescription: string, metaKeywords: string } } } | null> | null }, metafields: { __typename?: 'MetafieldConnection', edges?: Array<{ __typename?: 'MetafieldEdge', node: { __typename?: 'Metafields', key: string, value: string } } | null> | null } } } | null> | null }, defaultImage?: { __typename?: 'Image', url: string, urlOriginal: string, altText: string, isDefault: boolean } | null, seo: { __typename?: 'SeoDetails', pageTitle: string, metaDescription: string, metaKeywords: string }, images: { __typename?: 'ImageConnection', edges?: Array<{ __typename?: 'ImageEdge', node: { __typename?: 'Image', url: string, urlOriginal: string, altText: string, isDefault: boolean } } | null> | null }, inventory: { __typename?: 'ProductInventory', hasVariantInventory: boolean, isInStock: boolean, aggregated?: { __typename?: 'AggregatedInventory', availableToSell: number, warningLevel: number } | null }, categories: { __typename?: 'CategoryConnection', edges?: Array<{ __typename?: 'CategoryEdge', node: { __typename?: 'Category', id: string, entityId: number, name: string, path: string, description: string, defaultProductSort?: CategoryProductSort | null, defaultImage?: { __typename?: 'Image', url: string, urlOriginal: string, altText: string, isDefault: boolean } | null, breadcrumbs: { __typename?: 'BreadcrumbConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null }, edges?: Array<{ __typename?: 'BreadcrumbEdge', cursor: string, node: { __typename?: 'Breadcrumb', name: string, path?: string | null, entityId: number } } | null> | null }, metafields: { __typename?: 'MetafieldConnection', edges?: Array<{ __typename?: 'MetafieldEdge', node: { __typename?: 'Metafields', key: string, value: string } } | null> | null }, products: { __typename?: 'ProductConnection', collectionInfo?: { __typename?: 'CollectionInfo', totalItems?: any | null } | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } }, seo: { __typename?: 'SeoDetails', pageTitle: string, metaDescription: string, metaKeywords: string } } } | null> | null }, availabilityV2: { __typename?: 'ProductAvailable', status: ProductAvailabilityStatus } | { __typename?: 'ProductPreOrder', message?: string | null, description: string, status: ProductAvailabilityStatus, willBeReleasedAt?: { __typename?: 'DateTimeExtended', utc: any } | null } | { __typename?: 'ProductUnavailable', status: ProductAvailabilityStatus }, reviewSummary: { __typename?: 'Reviews', numberOfReviews: number, summationOfRatings: number }, reviews: { __typename?: 'ReviewConnection', edges?: Array<{ __typename?: 'ReviewEdge', node: { __typename?: 'Review', entityId: any, title: string, text: string, rating: number, author: { __typename?: 'Author', name: string }, createdAt: { __typename?: 'DateTimeExtended', utc: any } } } | null> | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } }, customFields: { __typename?: 'CustomFieldConnection', edges?: Array<{ __typename?: 'CustomFieldEdge', node: { __typename?: 'CustomField', name: string, value: string } } | null> | null }, metafields: { __typename?: 'MetafieldConnection', edges?: Array<{ __typename?: 'MetafieldEdge', node: { __typename?: 'Metafields', key: string, value: string } } | null> | null }, prices?: { __typename?: 'Prices', basePrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, bulkPricing: Array<{ __typename?: 'BulkPricingFixedPriceDiscount', price: any, minimumQuantity: number } | { __typename?: 'BulkPricingPercentageDiscount', percentOff: any, minimumQuantity: number } | { __typename?: 'BulkPricingRelativePriceDiscount', priceAdjustment: any, minimumQuantity: number }>, mapPrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, price: { __typename?: 'Money', currencyCode: string, value: any }, priceRange: { __typename?: 'MoneyRange', min: { __typename?: 'Money', currencyCode: string, value: any }, max: { __typename?: 'Money', currencyCode: string, value: any } }, retailPrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, retailPriceRange?: { __typename?: 'MoneyRange', min: { __typename?: 'Money', currencyCode: string, value: any }, max: { __typename?: 'Money', currencyCode: string, value: any } } | null, salePrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, saved?: { __typename?: 'Money', currencyCode: string, value: any } | null } | null, productOptions: { __typename?: 'ProductOptionConnection', edges?: Array<{ __typename?: 'ProductOptionEdge', node: { __typename?: 'CheckboxOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'DateFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'FileUploadFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'MultiLineTextFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'MultipleChoiceOption', displayStyle: string, entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean, values: { __typename?: 'ProductOptionValueConnection', edges?: Array<{ __typename?: 'ProductOptionValueEdge', node: { __typename?: 'MultipleChoiceOptionValue', entityId: number, label: string, isDefault: boolean } | { __typename?: 'ProductPickListOptionValue', entityId: number, label: string, isDefault: boolean } | { __typename?: 'SwatchOptionValue', hexColors: Array<string>, entityId: number, label: string, isDefault: boolean } } | null> | null } } | { __typename?: 'NumberFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'TextFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } } | null> | null }, variants: { __typename?: 'VariantConnection', edges?: Array<{ __typename?: 'VariantEdge', node: { __typename?: 'Variant', id: string, entityId: number, sku: string, isPurchasable: boolean, defaultImage?: { __typename?: 'Image', url: string, urlOriginal: string, altText: string, isDefault: boolean } | null, prices?: { __typename?: 'Prices', basePrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, bulkPricing: Array<{ __typename?: 'BulkPricingFixedPriceDiscount', price: any, minimumQuantity: number } | { __typename?: 'BulkPricingPercentageDiscount', percentOff: any, minimumQuantity: number } | { __typename?: 'BulkPricingRelativePriceDiscount', priceAdjustment: any, minimumQuantity: number }>, mapPrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, price: { __typename?: 'Money', currencyCode: string, value: any }, priceRange: { __typename?: 'MoneyRange', min: { __typename?: 'Money', currencyCode: string, value: any }, max: { __typename?: 'Money', currencyCode: string, value: any } }, retailPrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, retailPriceRange?: { __typename?: 'MoneyRange', min: { __typename?: 'Money', currencyCode: string, value: any }, max: { __typename?: 'Money', currencyCode: string, value: any } } | null, salePrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, saved?: { __typename?: 'Money', currencyCode: string, value: any } | null } | null, metafields: { __typename?: 'MetafieldConnection', edges?: Array<{ __typename?: 'MetafieldEdge', node: { __typename?: 'Metafields', key: string, value: string } } | null> | null }, options: { __typename?: 'OptionConnection', edges?: Array<{ __typename?: 'OptionEdge', node: { __typename?: 'ProductOption', entityId: number, displayName: string, values: { __typename?: 'OptionValueConnection', edges?: Array<{ __typename?: 'OptionValueEdge', cursor: string, node: { __typename?: 'ProductOptionValue', entityId: number, label: string } } | null> | null } } } | null> | null }, productOptions: { __typename?: 'ProductOptionConnection', edges?: Array<{ __typename?: 'ProductOptionEdge', node: { __typename?: 'CheckboxOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'DateFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'FileUploadFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'MultiLineTextFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'MultipleChoiceOption', displayStyle: string, entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean, values: { __typename?: 'ProductOptionValueConnection', edges?: Array<{ __typename?: 'ProductOptionValueEdge', node: { __typename?: 'MultipleChoiceOptionValue', entityId: number, label: string, isDefault: boolean } | { __typename?: 'ProductPickListOptionValue', entityId: number, label: string, isDefault: boolean } | { __typename?: 'SwatchOptionValue', hexColors: Array<string>, entityId: number, label: string, isDefault: boolean } } | null> | null } } | { __typename?: 'NumberFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'TextFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } } | null> | null }, inventory?: { __typename?: 'VariantInventory', isInStock: boolean, aggregated?: { __typename?: 'Aggregated', availableToSell: any, warningLevel: number } | null } | null } } | null> | null }, weight?: { __typename?: 'Measurement', value: number, unit: string } | null } | { __typename?: 'RawHtmlPage' } | { __typename?: 'Redirect' } | { __typename?: 'Variant' } | null } } };

export type ProductSearchQueryVariables = Exact<{
  filters: SearchProductsFiltersInput;
  includeTax?: InputMaybe<Scalars['Boolean']>;
  pageSize?: InputMaybe<Scalars['Int']>;
}>;


export type ProductSearchQuery = { __typename?: 'Query', site: { __typename?: 'Site', search: { __typename?: 'SearchQueries', searchProducts: { __typename?: 'SearchProducts', products: { __typename?: 'ProductConnection', edges?: Array<{ __typename?: 'ProductEdge', node: { __typename: 'Product', id: string, entityId: number, sku: string, name: string, addToCartUrl: string, description: string, path: string, defaultImage?: { __typename?: 'Image', url: string, urlOriginal: string, altText: string, isDefault: boolean } | null, seo: { __typename?: 'SeoDetails', pageTitle: string, metaDescription: string, metaKeywords: string }, images: { __typename?: 'ImageConnection', edges?: Array<{ __typename?: 'ImageEdge', node: { __typename?: 'Image', url: string, urlOriginal: string, altText: string, isDefault: boolean } } | null> | null }, inventory: { __typename?: 'ProductInventory', hasVariantInventory: boolean, isInStock: boolean, aggregated?: { __typename?: 'AggregatedInventory', availableToSell: number, warningLevel: number } | null }, categories: { __typename?: 'CategoryConnection', edges?: Array<{ __typename?: 'CategoryEdge', node: { __typename?: 'Category', id: string, entityId: number, name: string, path: string, description: string, defaultProductSort?: CategoryProductSort | null, defaultImage?: { __typename?: 'Image', url: string, urlOriginal: string, altText: string, isDefault: boolean } | null, breadcrumbs: { __typename?: 'BreadcrumbConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null }, edges?: Array<{ __typename?: 'BreadcrumbEdge', cursor: string, node: { __typename?: 'Breadcrumb', name: string, path?: string | null, entityId: number } } | null> | null }, metafields: { __typename?: 'MetafieldConnection', edges?: Array<{ __typename?: 'MetafieldEdge', node: { __typename?: 'Metafields', key: string, value: string } } | null> | null }, products: { __typename?: 'ProductConnection', collectionInfo?: { __typename?: 'CollectionInfo', totalItems?: any | null } | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } }, seo: { __typename?: 'SeoDetails', pageTitle: string, metaDescription: string, metaKeywords: string } } } | null> | null }, availabilityV2: { __typename?: 'ProductAvailable', status: ProductAvailabilityStatus } | { __typename?: 'ProductPreOrder', message?: string | null, description: string, status: ProductAvailabilityStatus, willBeReleasedAt?: { __typename?: 'DateTimeExtended', utc: any } | null } | { __typename?: 'ProductUnavailable', status: ProductAvailabilityStatus }, reviewSummary: { __typename?: 'Reviews', numberOfReviews: number, summationOfRatings: number }, reviews: { __typename?: 'ReviewConnection', edges?: Array<{ __typename?: 'ReviewEdge', node: { __typename?: 'Review', entityId: any, title: string, text: string, rating: number, author: { __typename?: 'Author', name: string }, createdAt: { __typename?: 'DateTimeExtended', utc: any } } } | null> | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } }, customFields: { __typename?: 'CustomFieldConnection', edges?: Array<{ __typename?: 'CustomFieldEdge', node: { __typename?: 'CustomField', name: string, value: string } } | null> | null }, metafields: { __typename?: 'MetafieldConnection', edges?: Array<{ __typename?: 'MetafieldEdge', node: { __typename?: 'Metafields', key: string, value: string } } | null> | null }, prices?: { __typename?: 'Prices', basePrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, bulkPricing: Array<{ __typename?: 'BulkPricingFixedPriceDiscount', price: any, minimumQuantity: number } | { __typename?: 'BulkPricingPercentageDiscount', percentOff: any, minimumQuantity: number } | { __typename?: 'BulkPricingRelativePriceDiscount', priceAdjustment: any, minimumQuantity: number }>, mapPrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, price: { __typename?: 'Money', currencyCode: string, value: any }, priceRange: { __typename?: 'MoneyRange', min: { __typename?: 'Money', currencyCode: string, value: any }, max: { __typename?: 'Money', currencyCode: string, value: any } }, retailPrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, retailPriceRange?: { __typename?: 'MoneyRange', min: { __typename?: 'Money', currencyCode: string, value: any }, max: { __typename?: 'Money', currencyCode: string, value: any } } | null, salePrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, saved?: { __typename?: 'Money', currencyCode: string, value: any } | null } | null, productOptions: { __typename?: 'ProductOptionConnection', edges?: Array<{ __typename?: 'ProductOptionEdge', node: { __typename?: 'CheckboxOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'DateFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'FileUploadFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'MultiLineTextFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'MultipleChoiceOption', displayStyle: string, entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean, values: { __typename?: 'ProductOptionValueConnection', edges?: Array<{ __typename?: 'ProductOptionValueEdge', node: { __typename?: 'MultipleChoiceOptionValue', entityId: number, label: string, isDefault: boolean } | { __typename?: 'ProductPickListOptionValue', entityId: number, label: string, isDefault: boolean } | { __typename?: 'SwatchOptionValue', hexColors: Array<string>, entityId: number, label: string, isDefault: boolean } } | null> | null } } | { __typename?: 'NumberFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'TextFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } } | null> | null }, variants: { __typename?: 'VariantConnection', edges?: Array<{ __typename?: 'VariantEdge', node: { __typename?: 'Variant', id: string, entityId: number, sku: string, isPurchasable: boolean, defaultImage?: { __typename?: 'Image', url: string, urlOriginal: string, altText: string, isDefault: boolean } | null, prices?: { __typename?: 'Prices', basePrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, bulkPricing: Array<{ __typename?: 'BulkPricingFixedPriceDiscount', price: any, minimumQuantity: number } | { __typename?: 'BulkPricingPercentageDiscount', percentOff: any, minimumQuantity: number } | { __typename?: 'BulkPricingRelativePriceDiscount', priceAdjustment: any, minimumQuantity: number }>, mapPrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, price: { __typename?: 'Money', currencyCode: string, value: any }, priceRange: { __typename?: 'MoneyRange', min: { __typename?: 'Money', currencyCode: string, value: any }, max: { __typename?: 'Money', currencyCode: string, value: any } }, retailPrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, retailPriceRange?: { __typename?: 'MoneyRange', min: { __typename?: 'Money', currencyCode: string, value: any }, max: { __typename?: 'Money', currencyCode: string, value: any } } | null, salePrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, saved?: { __typename?: 'Money', currencyCode: string, value: any } | null } | null, metafields: { __typename?: 'MetafieldConnection', edges?: Array<{ __typename?: 'MetafieldEdge', node: { __typename?: 'Metafields', key: string, value: string } } | null> | null }, options: { __typename?: 'OptionConnection', edges?: Array<{ __typename?: 'OptionEdge', node: { __typename?: 'ProductOption', entityId: number, displayName: string, values: { __typename?: 'OptionValueConnection', edges?: Array<{ __typename?: 'OptionValueEdge', cursor: string, node: { __typename?: 'ProductOptionValue', entityId: number, label: string } } | null> | null } } } | null> | null }, productOptions: { __typename?: 'ProductOptionConnection', edges?: Array<{ __typename?: 'ProductOptionEdge', node: { __typename?: 'CheckboxOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'DateFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'FileUploadFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'MultiLineTextFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'MultipleChoiceOption', displayStyle: string, entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean, values: { __typename?: 'ProductOptionValueConnection', edges?: Array<{ __typename?: 'ProductOptionValueEdge', node: { __typename?: 'MultipleChoiceOptionValue', entityId: number, label: string, isDefault: boolean } | { __typename?: 'ProductPickListOptionValue', entityId: number, label: string, isDefault: boolean } | { __typename?: 'SwatchOptionValue', hexColors: Array<string>, entityId: number, label: string, isDefault: boolean } } | null> | null } } | { __typename?: 'NumberFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'TextFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } } | null> | null }, inventory?: { __typename?: 'VariantInventory', isInStock: boolean, aggregated?: { __typename?: 'Aggregated', availableToSell: any, warningLevel: number } | null } | null } } | null> | null }, weight?: { __typename?: 'Measurement', value: number, unit: string } | null } } | null> | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null }, collectionInfo?: { __typename?: 'CollectionInfo', totalItems?: any | null } | null }, filters: { __typename?: 'SearchProductFilterConnection', edges?: Array<{ __typename?: 'SearchProductFilterEdge', node: { __typename: 'BrandSearchFilter', displayProductCount: boolean, name: string, isCollapsedByDefault: boolean, brands: { __typename?: 'BrandSearchFilterItemConnection', edges?: Array<{ __typename?: 'BrandSearchFilterItemEdge', node: { __typename?: 'BrandSearchFilterItem', entityId: number, name: string, isSelected: boolean, productCount: number } } | null> | null } } | { __typename?: 'CategorySearchFilter', displayProductCount: boolean, name: string, isCollapsedByDefault: boolean, categories: { __typename?: 'CategorySearchFilterItemConnection', edges?: Array<{ __typename?: 'CategorySearchFilterItemEdge', node: { __typename?: 'CategorySearchFilterItem', entityId: number, name: string, isSelected: boolean, productCount: number } } | null> | null } } | { __typename?: 'OtherSearchFilter', displayProductCount: boolean, name: string, isCollapsedByDefault: boolean, freeShipping?: { __typename?: 'OtherSearchFilterItem', isSelected: boolean, productCount: number } | null, isFeatured?: { __typename?: 'OtherSearchFilterItem', isSelected: boolean, productCount: number } | null, isInStock?: { __typename?: 'OtherSearchFilterItem', isSelected: boolean, productCount: number } | null } | { __typename: 'PriceSearchFilter', name: string, isCollapsedByDefault: boolean, selected?: { __typename?: 'PriceSearchFilterItem', minPrice?: number | null, maxPrice?: number | null } | null } | { __typename: 'ProductAttributeSearchFilter', displayProductCount: boolean, filterName: string, name: string, isCollapsedByDefault: boolean, attributes: { __typename?: 'ProductAttributeSearchFilterItemConnection', edges?: Array<{ __typename?: 'ProductAttributeSearchFilterItemEdge', node: { __typename: 'ProductAttributeSearchFilterItem', value: string, isSelected: boolean, productCount: number } } | null> | null } } | { __typename: 'RatingSearchFilter', name: string, isCollapsedByDefault: boolean, ratings: { __typename?: 'RatingSearchFilterItemConnection', edges?: Array<{ __typename?: 'RatingSearchFilterItemEdge', node: { __typename?: 'RatingSearchFilterItem', value: string, isSelected: boolean, productCount: number } } | null> | null } } } | null> | null } } } } };

export type ProductsQueryVariables = Exact<{
  entityIds?: InputMaybe<Array<Scalars['Int']> | Scalars['Int']>;
  includeTax?: InputMaybe<Scalars['Boolean']>;
}>;


export type ProductsQuery = { __typename?: 'Query', site: { __typename?: 'Site', products: { __typename?: 'ProductConnection', edges?: Array<{ __typename?: 'ProductEdge', node: { __typename: 'Product', id: string, entityId: number, sku: string, name: string, addToCartUrl: string, description: string, path: string, defaultImage?: { __typename?: 'Image', url: string, urlOriginal: string, altText: string, isDefault: boolean } | null, seo: { __typename?: 'SeoDetails', pageTitle: string, metaDescription: string, metaKeywords: string }, images: { __typename?: 'ImageConnection', edges?: Array<{ __typename?: 'ImageEdge', node: { __typename?: 'Image', url: string, urlOriginal: string, altText: string, isDefault: boolean } } | null> | null }, inventory: { __typename?: 'ProductInventory', hasVariantInventory: boolean, isInStock: boolean, aggregated?: { __typename?: 'AggregatedInventory', availableToSell: number, warningLevel: number } | null }, categories: { __typename?: 'CategoryConnection', edges?: Array<{ __typename?: 'CategoryEdge', node: { __typename?: 'Category', id: string, entityId: number, name: string, path: string, description: string, defaultProductSort?: CategoryProductSort | null, defaultImage?: { __typename?: 'Image', url: string, urlOriginal: string, altText: string, isDefault: boolean } | null, breadcrumbs: { __typename?: 'BreadcrumbConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null }, edges?: Array<{ __typename?: 'BreadcrumbEdge', cursor: string, node: { __typename?: 'Breadcrumb', name: string, path?: string | null, entityId: number } } | null> | null }, metafields: { __typename?: 'MetafieldConnection', edges?: Array<{ __typename?: 'MetafieldEdge', node: { __typename?: 'Metafields', key: string, value: string } } | null> | null }, products: { __typename?: 'ProductConnection', collectionInfo?: { __typename?: 'CollectionInfo', totalItems?: any | null } | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } }, seo: { __typename?: 'SeoDetails', pageTitle: string, metaDescription: string, metaKeywords: string } } } | null> | null }, availabilityV2: { __typename?: 'ProductAvailable', status: ProductAvailabilityStatus } | { __typename?: 'ProductPreOrder', message?: string | null, description: string, status: ProductAvailabilityStatus, willBeReleasedAt?: { __typename?: 'DateTimeExtended', utc: any } | null } | { __typename?: 'ProductUnavailable', status: ProductAvailabilityStatus }, reviewSummary: { __typename?: 'Reviews', numberOfReviews: number, summationOfRatings: number }, reviews: { __typename?: 'ReviewConnection', edges?: Array<{ __typename?: 'ReviewEdge', node: { __typename?: 'Review', entityId: any, title: string, text: string, rating: number, author: { __typename?: 'Author', name: string }, createdAt: { __typename?: 'DateTimeExtended', utc: any } } } | null> | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } }, customFields: { __typename?: 'CustomFieldConnection', edges?: Array<{ __typename?: 'CustomFieldEdge', node: { __typename?: 'CustomField', name: string, value: string } } | null> | null }, metafields: { __typename?: 'MetafieldConnection', edges?: Array<{ __typename?: 'MetafieldEdge', node: { __typename?: 'Metafields', key: string, value: string } } | null> | null }, prices?: { __typename?: 'Prices', basePrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, bulkPricing: Array<{ __typename?: 'BulkPricingFixedPriceDiscount', price: any, minimumQuantity: number } | { __typename?: 'BulkPricingPercentageDiscount', percentOff: any, minimumQuantity: number } | { __typename?: 'BulkPricingRelativePriceDiscount', priceAdjustment: any, minimumQuantity: number }>, mapPrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, price: { __typename?: 'Money', currencyCode: string, value: any }, priceRange: { __typename?: 'MoneyRange', min: { __typename?: 'Money', currencyCode: string, value: any }, max: { __typename?: 'Money', currencyCode: string, value: any } }, retailPrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, retailPriceRange?: { __typename?: 'MoneyRange', min: { __typename?: 'Money', currencyCode: string, value: any }, max: { __typename?: 'Money', currencyCode: string, value: any } } | null, salePrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, saved?: { __typename?: 'Money', currencyCode: string, value: any } | null } | null, productOptions: { __typename?: 'ProductOptionConnection', edges?: Array<{ __typename?: 'ProductOptionEdge', node: { __typename?: 'CheckboxOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'DateFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'FileUploadFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'MultiLineTextFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'MultipleChoiceOption', displayStyle: string, entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean, values: { __typename?: 'ProductOptionValueConnection', edges?: Array<{ __typename?: 'ProductOptionValueEdge', node: { __typename?: 'MultipleChoiceOptionValue', entityId: number, label: string, isDefault: boolean } | { __typename?: 'ProductPickListOptionValue', entityId: number, label: string, isDefault: boolean } | { __typename?: 'SwatchOptionValue', hexColors: Array<string>, entityId: number, label: string, isDefault: boolean } } | null> | null } } | { __typename?: 'NumberFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'TextFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } } | null> | null }, variants: { __typename?: 'VariantConnection', edges?: Array<{ __typename?: 'VariantEdge', node: { __typename?: 'Variant', id: string, entityId: number, sku: string, isPurchasable: boolean, defaultImage?: { __typename?: 'Image', url: string, urlOriginal: string, altText: string, isDefault: boolean } | null, prices?: { __typename?: 'Prices', basePrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, bulkPricing: Array<{ __typename?: 'BulkPricingFixedPriceDiscount', price: any, minimumQuantity: number } | { __typename?: 'BulkPricingPercentageDiscount', percentOff: any, minimumQuantity: number } | { __typename?: 'BulkPricingRelativePriceDiscount', priceAdjustment: any, minimumQuantity: number }>, mapPrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, price: { __typename?: 'Money', currencyCode: string, value: any }, priceRange: { __typename?: 'MoneyRange', min: { __typename?: 'Money', currencyCode: string, value: any }, max: { __typename?: 'Money', currencyCode: string, value: any } }, retailPrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, retailPriceRange?: { __typename?: 'MoneyRange', min: { __typename?: 'Money', currencyCode: string, value: any }, max: { __typename?: 'Money', currencyCode: string, value: any } } | null, salePrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, saved?: { __typename?: 'Money', currencyCode: string, value: any } | null } | null, metafields: { __typename?: 'MetafieldConnection', edges?: Array<{ __typename?: 'MetafieldEdge', node: { __typename?: 'Metafields', key: string, value: string } } | null> | null }, options: { __typename?: 'OptionConnection', edges?: Array<{ __typename?: 'OptionEdge', node: { __typename?: 'ProductOption', entityId: number, displayName: string, values: { __typename?: 'OptionValueConnection', edges?: Array<{ __typename?: 'OptionValueEdge', cursor: string, node: { __typename?: 'ProductOptionValue', entityId: number, label: string } } | null> | null } } } | null> | null }, productOptions: { __typename?: 'ProductOptionConnection', edges?: Array<{ __typename?: 'ProductOptionEdge', node: { __typename?: 'CheckboxOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'DateFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'FileUploadFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'MultiLineTextFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'MultipleChoiceOption', displayStyle: string, entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean, values: { __typename?: 'ProductOptionValueConnection', edges?: Array<{ __typename?: 'ProductOptionValueEdge', node: { __typename?: 'MultipleChoiceOptionValue', entityId: number, label: string, isDefault: boolean } | { __typename?: 'ProductPickListOptionValue', entityId: number, label: string, isDefault: boolean } | { __typename?: 'SwatchOptionValue', hexColors: Array<string>, entityId: number, label: string, isDefault: boolean } } | null> | null } } | { __typename?: 'NumberFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'TextFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } } | null> | null }, inventory?: { __typename?: 'VariantInventory', isInStock: boolean, aggregated?: { __typename?: 'Aggregated', availableToSell: any, warningLevel: number } | null } | null } } | null> | null }, weight?: { __typename?: 'Measurement', value: number, unit: string } | null } } | null> | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null }, collectionInfo?: { __typename?: 'CollectionInfo', totalItems?: any | null } | null } } };

export type GetRouteQueryVariables = Exact<{
  path: Scalars['String'];
  includeTax?: InputMaybe<Scalars['Boolean']>;
}>;


export type GetRouteQuery = { __typename?: 'Query', site: { __typename?: 'Site', route: { __typename?: 'Route', node?: { __typename?: 'Banner' } | { __typename?: 'Blog' } | { __typename?: 'BlogIndexPage' } | { __typename?: 'BlogPost' } | { __typename: 'Brand', id: string, entityId: number, name: string, path: string, defaultImage?: { __typename: 'Image', urlOriginal: string, altText: string } | null, seo: { __typename?: 'SeoDetails', pageTitle: string, metaDescription: string, metaKeywords: string } } | { __typename?: 'Cart' } | { __typename: 'Category', description: string, id: string, entityId: number, name: string, path: string, defaultImage?: { __typename?: 'Image', altText: string, urlOriginal: string } | null, seo: { __typename?: 'SeoDetails', pageTitle: string, metaDescription: string, metaKeywords: string } } | { __typename?: 'Checkout' } | { __typename: 'ContactPage', id: string, path: string, htmlBody: string, plainTextSummary: string, contactFields: Array<string>, entityId: number, parentEntityId?: number | null, name: string, renderedRegions: { __typename?: 'RenderedRegionsByPageType', regions: Array<{ __typename?: 'Region', name: string, html: string }> } } | { __typename: 'NormalPage', id: string, path: string, htmlBody: string, plainTextSummary: string, entityId: number, parentEntityId?: number | null, name: string, isVisibleInNavigation: boolean, renderedRegions: { __typename?: 'RenderedRegionsByPageType', regions: Array<{ __typename?: 'Region', name: string, html: string }> }, seo: { __typename?: 'SeoDetails', pageTitle: string, metaDescription: string, metaKeywords: string } } | { __typename: 'Product', id: string, entityId: number, sku: string, name: string, addToCartUrl: string, description: string, path: string, defaultImage?: { __typename?: 'Image', url: string, urlOriginal: string, altText: string, isDefault: boolean } | null, seo: { __typename?: 'SeoDetails', pageTitle: string, metaDescription: string, metaKeywords: string }, images: { __typename?: 'ImageConnection', edges?: Array<{ __typename?: 'ImageEdge', node: { __typename?: 'Image', url: string, urlOriginal: string, altText: string, isDefault: boolean } } | null> | null }, inventory: { __typename?: 'ProductInventory', hasVariantInventory: boolean, isInStock: boolean, aggregated?: { __typename?: 'AggregatedInventory', availableToSell: number, warningLevel: number } | null }, categories: { __typename?: 'CategoryConnection', edges?: Array<{ __typename?: 'CategoryEdge', node: { __typename?: 'Category', id: string, entityId: number, name: string, path: string, description: string, defaultProductSort?: CategoryProductSort | null, defaultImage?: { __typename?: 'Image', url: string, urlOriginal: string, altText: string, isDefault: boolean } | null, breadcrumbs: { __typename?: 'BreadcrumbConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null }, edges?: Array<{ __typename?: 'BreadcrumbEdge', cursor: string, node: { __typename?: 'Breadcrumb', name: string, path?: string | null, entityId: number } } | null> | null }, metafields: { __typename?: 'MetafieldConnection', edges?: Array<{ __typename?: 'MetafieldEdge', node: { __typename?: 'Metafields', key: string, value: string } } | null> | null }, products: { __typename?: 'ProductConnection', collectionInfo?: { __typename?: 'CollectionInfo', totalItems?: any | null } | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } }, seo: { __typename?: 'SeoDetails', pageTitle: string, metaDescription: string, metaKeywords: string } } } | null> | null }, availabilityV2: { __typename?: 'ProductAvailable', status: ProductAvailabilityStatus } | { __typename?: 'ProductPreOrder', message?: string | null, description: string, status: ProductAvailabilityStatus, willBeReleasedAt?: { __typename?: 'DateTimeExtended', utc: any } | null } | { __typename?: 'ProductUnavailable', status: ProductAvailabilityStatus }, reviewSummary: { __typename?: 'Reviews', numberOfReviews: number, summationOfRatings: number }, reviews: { __typename?: 'ReviewConnection', edges?: Array<{ __typename?: 'ReviewEdge', node: { __typename?: 'Review', entityId: any, title: string, text: string, rating: number, author: { __typename?: 'Author', name: string }, createdAt: { __typename?: 'DateTimeExtended', utc: any } } } | null> | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } }, customFields: { __typename?: 'CustomFieldConnection', edges?: Array<{ __typename?: 'CustomFieldEdge', node: { __typename?: 'CustomField', name: string, value: string } } | null> | null }, metafields: { __typename?: 'MetafieldConnection', edges?: Array<{ __typename?: 'MetafieldEdge', node: { __typename?: 'Metafields', key: string, value: string } } | null> | null }, prices?: { __typename?: 'Prices', basePrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, bulkPricing: Array<{ __typename?: 'BulkPricingFixedPriceDiscount', price: any, minimumQuantity: number } | { __typename?: 'BulkPricingPercentageDiscount', percentOff: any, minimumQuantity: number } | { __typename?: 'BulkPricingRelativePriceDiscount', priceAdjustment: any, minimumQuantity: number }>, mapPrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, price: { __typename?: 'Money', currencyCode: string, value: any }, priceRange: { __typename?: 'MoneyRange', min: { __typename?: 'Money', currencyCode: string, value: any }, max: { __typename?: 'Money', currencyCode: string, value: any } }, retailPrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, retailPriceRange?: { __typename?: 'MoneyRange', min: { __typename?: 'Money', currencyCode: string, value: any }, max: { __typename?: 'Money', currencyCode: string, value: any } } | null, salePrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, saved?: { __typename?: 'Money', currencyCode: string, value: any } | null } | null, productOptions: { __typename?: 'ProductOptionConnection', edges?: Array<{ __typename?: 'ProductOptionEdge', node: { __typename?: 'CheckboxOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'DateFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'FileUploadFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'MultiLineTextFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'MultipleChoiceOption', displayStyle: string, entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean, values: { __typename?: 'ProductOptionValueConnection', edges?: Array<{ __typename?: 'ProductOptionValueEdge', node: { __typename?: 'MultipleChoiceOptionValue', entityId: number, label: string, isDefault: boolean } | { __typename?: 'ProductPickListOptionValue', entityId: number, label: string, isDefault: boolean } | { __typename?: 'SwatchOptionValue', hexColors: Array<string>, entityId: number, label: string, isDefault: boolean } } | null> | null } } | { __typename?: 'NumberFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'TextFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } } | null> | null }, variants: { __typename?: 'VariantConnection', edges?: Array<{ __typename?: 'VariantEdge', node: { __typename?: 'Variant', id: string, entityId: number, sku: string, isPurchasable: boolean, defaultImage?: { __typename?: 'Image', url: string, urlOriginal: string, altText: string, isDefault: boolean } | null, prices?: { __typename?: 'Prices', basePrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, bulkPricing: Array<{ __typename?: 'BulkPricingFixedPriceDiscount', price: any, minimumQuantity: number } | { __typename?: 'BulkPricingPercentageDiscount', percentOff: any, minimumQuantity: number } | { __typename?: 'BulkPricingRelativePriceDiscount', priceAdjustment: any, minimumQuantity: number }>, mapPrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, price: { __typename?: 'Money', currencyCode: string, value: any }, priceRange: { __typename?: 'MoneyRange', min: { __typename?: 'Money', currencyCode: string, value: any }, max: { __typename?: 'Money', currencyCode: string, value: any } }, retailPrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, retailPriceRange?: { __typename?: 'MoneyRange', min: { __typename?: 'Money', currencyCode: string, value: any }, max: { __typename?: 'Money', currencyCode: string, value: any } } | null, salePrice?: { __typename?: 'Money', currencyCode: string, value: any } | null, saved?: { __typename?: 'Money', currencyCode: string, value: any } | null } | null, metafields: { __typename?: 'MetafieldConnection', edges?: Array<{ __typename?: 'MetafieldEdge', node: { __typename?: 'Metafields', key: string, value: string } } | null> | null }, options: { __typename?: 'OptionConnection', edges?: Array<{ __typename?: 'OptionEdge', node: { __typename?: 'ProductOption', entityId: number, displayName: string, values: { __typename?: 'OptionValueConnection', edges?: Array<{ __typename?: 'OptionValueEdge', cursor: string, node: { __typename?: 'ProductOptionValue', entityId: number, label: string } } | null> | null } } } | null> | null }, productOptions: { __typename?: 'ProductOptionConnection', edges?: Array<{ __typename?: 'ProductOptionEdge', node: { __typename?: 'CheckboxOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'DateFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'FileUploadFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'MultiLineTextFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'MultipleChoiceOption', displayStyle: string, entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean, values: { __typename?: 'ProductOptionValueConnection', edges?: Array<{ __typename?: 'ProductOptionValueEdge', node: { __typename?: 'MultipleChoiceOptionValue', entityId: number, label: string, isDefault: boolean } | { __typename?: 'ProductPickListOptionValue', entityId: number, label: string, isDefault: boolean } | { __typename?: 'SwatchOptionValue', hexColors: Array<string>, entityId: number, label: string, isDefault: boolean } } | null> | null } } | { __typename?: 'NumberFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } | { __typename?: 'TextFieldOption', entityId: number, displayName: string, isRequired: boolean, isVariantOption: boolean } } | null> | null }, inventory?: { __typename?: 'VariantInventory', isInStock: boolean, aggregated?: { __typename?: 'Aggregated', availableToSell: any, warningLevel: number } | null } | null } } | null> | null }, weight?: { __typename?: 'Measurement', value: number, unit: string } | null } | { __typename?: 'RawHtmlPage' } | { __typename?: 'Redirect' } | { __typename?: 'Variant' } | null } } };

export type StorelocationsQueryVariables = Exact<{
  distanceFilter?: InputMaybe<DistanceFilter>;
}>;


export type StorelocationsQuery = { __typename?: 'Query', inventory: { __typename?: 'Inventory', locations: { __typename?: 'InventoryLocationConnection', edges?: Array<{ __typename?: 'InventoryLocationEdge', node: { __typename?: 'InventoryLocation', entityId: number, code: string, label: string, description?: string | null, typeId?: string | null, timeZone?: string | null, address?: { __typename?: 'InventoryAddress', address1: string, address2: string, city: string, code: string, countryCode: string, description?: string | null, email: string, entityId: number, label: string, latitude?: number | null, longitude?: number | null, phone: string, postalCode: string, stateOrProvince: string } | null, distance?: { __typename?: 'Distance', value: number, lengthUnit: LengthUnit } | null } } | null> | null } } };

export type TaxSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type TaxSettingsQuery = { __typename?: 'Query', site: { __typename?: 'Site', settings?: { __typename?: 'Settings', tax?: { __typename?: 'TaxDisplaySettings', pdp: TaxPriceDisplay, plp: TaxPriceDisplay } | null } | null } };

export type UpdateCartLineItemMutationVariables = Exact<{
  cartEntityId: Scalars['String'];
  lineItemEntityId: Scalars['String'];
  data: UpdateCartLineItemDataInput;
}>;


export type UpdateCartLineItemMutation = { __typename?: 'Mutation', cart: { __typename?: 'CartMutations', updateCartLineItem?: { __typename?: 'UpdateCartLineItemResult', cart?: { __typename?: 'Cart', entityId: string } | null } | null } };

export const InventoryAddressFragmentDoc = gql`
    fragment InventoryAddress on InventoryAddress {
  address1
  address2
  city
  code
  countryCode
  description
  email
  entityId
  label
  latitude
  longitude
  phone
  postalCode
  stateOrProvince
}
    `;
export const MoneyFragmentDoc = gql`
    fragment Money on Money {
  currencyCode
  value
}
    `;
export const CartDetailsFragmentDoc = gql`
    fragment CartDetails on Cart {
  amount {
    ...Money
  }
  baseAmount {
    ...Money
  }
  createdAt {
    utc
  }
  currencyCode
  discountedAmount {
    ...Money
  }
  discounts {
    entityId
    discountedAmount {
      ...Money
    }
  }
  entityId
  id
  isTaxIncluded
  lineItems {
    customItems {
      entityId
      extendedListPrice {
        ...Money
      }
      listPrice {
        ...Money
      }
      name
      quantity
      sku
    }
    digitalItems {
      brand
      couponAmount {
        ...Money
      }
      discountedAmount {
        ...Money
      }
      discounts {
        discountedAmount {
          ...Money
        }
        entityId
      }
      entityId
      extendedListPrice {
        ...Money
      }
      extendedSalePrice {
        ...Money
      }
      imageUrl
      isTaxable
      listPrice {
        ...Money
      }
      name
      originalPrice {
        ...Money
      }
      parentEntityId
      productEntityId
      quantity
      salePrice {
        ...Money
      }
      selectedOptions {
        entityId
        name
        ... on CartSelectedCheckboxOption {
          __typename
          valueEntityId
          value
          name
          entityId
        }
        ... on CartSelectedDateFieldOption {
          __typename
          name
          entityId
          date {
            utc
          }
        }
        ... on CartSelectedFileUploadOption {
          __typename
          name
          fileName
          entityId
        }
        ... on CartSelectedMultiLineTextFieldOption {
          __typename
          text
          name
          entityId
        }
        ... on CartSelectedMultipleChoiceOption {
          __typename
          valueEntityId
          value
          name
          entityId
        }
        ... on CartSelectedNumberFieldOption {
          __typename
          name
          entityId
          number
        }
        ... on CartSelectedTextFieldOption {
          __typename
          entityId
          name
          text
        }
      }
      sku
      url
      variantEntityId
    }
    giftCertificates {
      amount {
        ...Money
      }
      entityId
      isTaxable
      message
      name
      recipient {
        name
        email
      }
      sender {
        email
        name
      }
      theme
    }
    physicalItems {
      brand
      couponAmount {
        ...Money
      }
      discountedAmount {
        ...Money
      }
      discounts {
        discountedAmount {
          ...Money
        }
        entityId
      }
      entityId
      extendedListPrice {
        ...Money
      }
      extendedSalePrice {
        ...Money
      }
      giftWrapping {
        amount {
          ...Money
        }
        message
        name
      }
      imageUrl
      isShippingRequired
      isTaxable
      listPrice {
        ...Money
      }
      name
      originalPrice {
        ...Money
      }
      parentEntityId
      productEntityId
      quantity
      salePrice {
        ...Money
      }
      selectedOptions {
        name
        entityId
        ... on CartSelectedCheckboxOption {
          __typename
          valueEntityId
          value
          name
          entityId
        }
        ... on CartSelectedDateFieldOption {
          __typename
          name
          entityId
          date {
            utc
          }
        }
        ... on CartSelectedFileUploadOption {
          __typename
          name
          fileName
          entityId
        }
        ... on CartSelectedMultiLineTextFieldOption {
          __typename
          text
          name
          entityId
        }
        ... on CartSelectedMultipleChoiceOption {
          __typename
          valueEntityId
          value
          name
          entityId
        }
        ... on CartSelectedNumberFieldOption {
          __typename
          number
          name
          entityId
        }
        ... on CartSelectedTextFieldOption {
          __typename
          text
          name
          entityId
        }
      }
      url
      sku
      variantEntityId
    }
    totalQuantity
  }
  locale
  updatedAt {
    utc
  }
}
    ${MoneyFragmentDoc}`;
export const CategoryTreeItemFragmentDoc = gql`
    fragment CategoryTreeItem on CategoryTreeItem {
  description
  entityId
  name
  path
  productCount
  image {
    urlOriginal
  }
}
    `;
export const ImageFragmentDoc = gql`
    fragment Image on Image {
  url(width: 500, height: 245)
  urlOriginal
  altText
  isDefault
}
    `;
export const SeoDetailsFragmentDoc = gql`
    fragment SeoDetails on SeoDetails {
  pageTitle
  metaDescription
  metaKeywords
}
    `;
export const BreadcrumbsFragmentDoc = gql`
    fragment Breadcrumbs on BreadcrumbConnection {
  edges {
    node {
      name
      path
      entityId
    }
    cursor
  }
}
    `;
export const PageInfoFragmentDoc = gql`
    fragment PageInfo on PageInfo {
  hasNextPage
  hasPreviousPage
  startCursor
  endCursor
}
    `;
export const CategoryDetailsFragmentDoc = gql`
    fragment CategoryDetails on Category {
  id
  entityId
  name
  path
  defaultImage {
    ...Image
  }
  description
  breadcrumbs(depth: 5) {
    ...Breadcrumbs
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
  metafields(namespace: "custom_attributes", first: 20) {
    edges {
      node {
        key
        value
      }
    }
  }
  products {
    collectionInfo {
      totalItems
    }
    pageInfo {
      ...PageInfo
    }
  }
  seo {
    ...SeoDetails
  }
  defaultProductSort
}
    ${ImageFragmentDoc}
${BreadcrumbsFragmentDoc}
${PageInfoFragmentDoc}
${SeoDetailsFragmentDoc}`;
export const MoneyRangeFragmentDoc = gql`
    fragment MoneyRange on MoneyRange {
  min {
    ...Money
  }
  max {
    ...Money
  }
}
    ${MoneyFragmentDoc}`;
export const PricesFragmentDoc = gql`
    fragment Prices on Prices {
  basePrice {
    ...Money
  }
  bulkPricing {
    minimumQuantity
    ... on BulkPricingPercentageDiscount {
      percentOff
    }
    ... on BulkPricingRelativePriceDiscount {
      priceAdjustment
    }
    ... on BulkPricingFixedPriceDiscount {
      price
    }
  }
  mapPrice {
    ...Money
  }
  price {
    ...Money
  }
  priceRange {
    ...MoneyRange
  }
  retailPrice {
    ...Money
  }
  retailPriceRange {
    ...MoneyRange
  }
  salePrice {
    ...Money
  }
  saved {
    ...Money
  }
}
    ${MoneyFragmentDoc}
${MoneyRangeFragmentDoc}`;
export const ProductOptionsFragmentDoc = gql`
    fragment ProductOptions on ProductOptionConnection {
  edges {
    node {
      entityId
      displayName
      isRequired
      isVariantOption
      ... on MultipleChoiceOption {
        displayStyle
        values {
          edges {
            node {
              entityId
              label
              isDefault
              ... on SwatchOptionValue {
                hexColors
              }
            }
          }
        }
      }
    }
  }
}
    `;
export const VariantsFragmentDoc = gql`
    fragment Variants on Variant {
  id
  entityId
  sku
  defaultImage {
    ...Image
  }
  prices(includeTax: $includeTax) {
    ...Prices
  }
  metafields(namespace: "custom_attributes", first: 20) {
    edges {
      node {
        key
        value
      }
    }
  }
  options {
    edges {
      node {
        entityId
        displayName
        values {
          edges {
            cursor
            node {
              entityId
              label
            }
          }
        }
      }
    }
  }
  productOptions {
    ...ProductOptions
  }
  inventory {
    isInStock
    aggregated {
      availableToSell
      warningLevel
    }
  }
  isPurchasable
}
    ${ImageFragmentDoc}
${PricesFragmentDoc}
${ProductOptionsFragmentDoc}`;
export const ProductDetailsFragmentDoc = gql`
    fragment ProductDetails on Product {
  __typename
  id
  entityId
  sku
  name
  addToCartUrl
  description
  defaultImage {
    ...Image
  }
  seo {
    ...SeoDetails
  }
  images {
    edges {
      node {
        ...Image
      }
    }
  }
  inventory {
    hasVariantInventory
    isInStock
    aggregated {
      availableToSell
      warningLevel
    }
  }
  categories {
    edges {
      node {
        ...CategoryDetails
      }
    }
  }
  availabilityV2 {
    status
    ... on ProductPreOrder {
      message
      description
      status
      willBeReleasedAt {
        utc
      }
    }
  }
  reviewSummary {
    numberOfReviews
    summationOfRatings
  }
  reviews {
    edges {
      node {
        entityId
        author {
          name
        }
        title
        text
        rating
        createdAt {
          utc
        }
      }
    }
    pageInfo {
      ...PageInfo
    }
  }
  customFields {
    edges {
      node {
        name
        value
      }
    }
  }
  metafields(namespace: "custom_attributes", first: 20) {
    edges {
      node {
        key
        value
      }
    }
  }
  path
  prices(includeTax: $includeTax) {
    ...Prices
  }
  productOptions {
    ...ProductOptions
  }
  variants {
    edges {
      node {
        ...Variants
      }
    }
  }
  weight {
    value
    unit
  }
}
    ${ImageFragmentDoc}
${SeoDetailsFragmentDoc}
${CategoryDetailsFragmentDoc}
${PageInfoFragmentDoc}
${PricesFragmentDoc}
${ProductOptionsFragmentDoc}
${VariantsFragmentDoc}`;
export const RelatedProductsFragmentDoc = gql`
    fragment RelatedProducts on RelatedProductsConnection {
  edges {
    node {
      id
      entityId
      name
      sku
      addToCartUrl
      prices(includeTax: $includeTax) {
        ...Prices
      }
      defaultImage {
        ...Image
      }
      images {
        edges {
          node {
            ...Image
          }
        }
      }
      categories {
        edges {
          node {
            ...CategoryDetails
          }
        }
      }
      path
      metafields(namespace: "custom_attributes", first: 20) {
        edges {
          node {
            key
            value
          }
        }
      }
    }
  }
}
    ${PricesFragmentDoc}
${ImageFragmentDoc}
${CategoryDetailsFragmentDoc}`;
export const SearchFiltersFragmentDoc = gql`
    fragment SearchFilters on SearchProductFilter {
  name
  ... on BrandSearchFilter {
    displayProductCount
    brands {
      edges {
        node {
          entityId
          name
          isSelected
          productCount
        }
      }
    }
    __typename
  }
  ... on CategorySearchFilter {
    displayProductCount
    categories {
      edges {
        node {
          entityId
          name
          isSelected
          productCount
        }
      }
    }
  }
  ... on OtherSearchFilter {
    displayProductCount
    freeShipping {
      isSelected
      productCount
    }
    isFeatured {
      isSelected
      productCount
    }
    isInStock {
      isSelected
      productCount
    }
    name
    isCollapsedByDefault
  }
  ... on PriceSearchFilter {
    selected {
      minPrice
      maxPrice
    }
    name
    __typename
  }
  ... on ProductAttributeSearchFilter {
    displayProductCount
    filterName
    name
    attributes {
      edges {
        node {
          __typename
          value
          isSelected
          productCount
        }
      }
    }
    __typename
  }
  ... on RatingSearchFilter {
    ratings {
      edges {
        node {
          value
          isSelected
          productCount
        }
      }
    }
    __typename
  }
  ... on SearchProductFilter {
    name
    isCollapsedByDefault
  }
}
    `;
export const AddProductsToCartDocument = gql`
    mutation addProductsToCart($cartId: String!, $cartItems: AddCartLineItemsDataInput!) {
  cart {
    addCartLineItems(input: {cartEntityId: $cartId, data: $cartItems}) {
      cart {
        entityId
      }
    }
  }
}
    `;
export const AssignCartToCustomerDocument = gql`
    mutation assignCartToCustomer($input: AssignCartToCustomerInput!) {
  cart {
    assignCartToCustomer(input: $input) {
      cart {
        entityId
      }
    }
  }
}
    `;
export const AvailableProductSearchFiltersDocument = gql`
    query availableProductSearchFilters($filters: SearchProductsFiltersInput!) {
  site {
    search {
      searchProducts(filters: $filters) {
        filters {
          edges {
            node {
              name
              ... on BrandSearchFilter {
                __typename
              }
              ... on CategorySearchFilter {
                __typename
              }
              ... on OtherSearchFilter {
                __typename
              }
              ... on PriceSearchFilter {
                __typename
              }
              ... on ProductAttributeSearchFilter {
                filterName
                __typename
              }
              ... on RatingSearchFilter {
                __typename
              }
              ... on SearchProductFilter {
                __typename
              }
            }
          }
        }
      }
    }
  }
}
    `;
export const CartDocument = gql`
    query cart($entityId: String) {
  site {
    cart(entityId: $entityId) {
      ...CartDetails
    }
  }
}
    ${CartDetailsFragmentDoc}`;
export const GetCartEntityIdDocument = gql`
    query getCartEntityId($entityId: String) {
  site {
    cart(entityId: $entityId) {
      entityId
    }
  }
}
    `;
export const CategoryTreeDocument = gql`
    query categoryTree($rootEntityId: Int) {
  site {
    categoryTree(rootEntityId: $rootEntityId) {
      ...CategoryTreeItem
      children {
        ...CategoryTreeItem
        children {
          ...CategoryTreeItem
        }
      }
    }
  }
}
    ${CategoryTreeItemFragmentDoc}`;
export const CategoryDocument = gql`
    query category($entityId: Int!) {
  site {
    category(entityId: $entityId) {
      ...CategoryDetails
    }
  }
}
    ${CategoryDetailsFragmentDoc}`;
export const GetSocialLinksDocument = gql`
    query getSocialLinks {
  site {
    settings {
      socialMediaLinks {
        name
        url
      }
    }
  }
}
    `;
export const CheckoutDocument = gql`
    query checkout($entityId: String) {
  site {
    checkout(entityId: $entityId) {
      billingAddress {
        stateOrProvinceCode
        stateOrProvince
        postalCode
        phone
        lastName
        firstName
        entityId
        email
        customFields {
          entityId
          ... on CheckoutAddressCheckboxesCustomField {
            __typename
            valueEntityIds
            entityId
          }
          ... on CheckoutAddressDateCustomField {
            __typename
            entityId
            date {
              utc
            }
          }
          ... on CheckoutAddressTextFieldCustomField {
            __typename
            text
            entityId
          }
          ... on CheckoutAddressPasswordCustomField {
            __typename
            password
            entityId
          }
          ... on CheckoutAddressNumberCustomField {
            __typename
            number
            entityId
          }
          ... on CheckoutAddressMultipleChoiceCustomField {
            __typename
            valueEntityId
            entityId
          }
        }
        countryCode
        company
        city
        address2
        address1
      }
      updatedAt {
        utc
      }
      taxes {
        name
        amount {
          ...Money
        }
      }
      taxTotal {
        ...Money
      }
      subtotal {
        ...Money
      }
      shippingCostTotal {
        ...Money
      }
      shippingConsignments {
        shippingCost {
          ...Money
        }
        selectedShippingOption {
          type
          transitTime
          imageUrl
          entityId
          description
          cost {
            ...Money
          }
        }
        lineItemIds
        handlingCost {
          ...Money
        }
        entityId
        coupons {
          entityId
          discountedAmount {
            ...Money
          }
          couponType
          code
        }
        availableShippingOptions {
          type
          transitTime
          imageUrl
          entityId
          description
          cost {
            ...Money
          }
        }
        address {
          stateOrProvinceCode
          stateOrProvince
          postalCode
          phone
          lastName
          firstName
          email
          customFields {
            ... on CheckoutAddressTextFieldCustomField {
              __typename
              text
              entityId
            }
            ... on CheckoutAddressPasswordCustomField {
              __typename
              password
              entityId
            }
            ... on CheckoutAddressNumberCustomField {
              __typename
              number
              entityId
            }
            ... on CheckoutAddressMultipleChoiceCustomField {
              __typename
              valueEntityId
              entityId
            }
            ... on CheckoutAddressDateCustomField {
              __typename
              entityId
              date {
                utc
              }
            }
            ... on CheckoutAddressCheckboxesCustomField {
              __typename
              valueEntityIds
              entityId
            }
            entityId
          }
          countryCode
          company
          city
          address2
          address1
        }
      }
      outstandingBalance {
        ...Money
      }
      order {
        entityId
      }
      id
      handlingCostTotal {
        ...Money
      }
      grandTotal {
        ...Money
      }
      giftWrappingCostTotal {
        ...Money
      }
      entityId
      customerMessage
      createdAt {
        utc
      }
      coupons {
        entityId
        discountedAmount {
          ...Money
        }
        couponType
        code
      }
      cart {
        ...CartDetails
      }
    }
  }
}
    ${MoneyFragmentDoc}
${CartDetailsFragmentDoc}`;
export const CreateCartDocument = gql`
    mutation createCart($lineItems: [CartLineItemInput!]) {
  cart {
    createCart(input: {lineItems: $lineItems}) {
      cart {
        entityId
      }
    }
  }
}
    `;
export const CustomerAttributeDocument = gql`
    query customerAttribute($attributeId: Int!) {
  customer {
    attributes {
      attribute(entityId: $attributeId) {
        entityId
        name
        value
      }
    }
  }
}
    `;
export const CustomerDocument = gql`
    query customer {
  customer {
    addressCount
    attributeCount
    company
    customerGroupId
    email
    entityId
    firstName
    lastName
    notes
    phone
    taxExemptCategory
    storeCredit {
      currencyCode
      value
    }
    wishlists {
      edges {
        cursor
        node {
          entityId
          isPublic
          items {
            edges {
              cursor
              node {
                entityId
                productEntityId
                variantEntityId
                product {
                  id
                  entityId
                  sku
                  name
                  addToCartUrl
                  description
                  defaultImage {
                    ...Image
                  }
                  seo {
                    pageTitle
                    metaDescription
                    metaKeywords
                  }
                  images {
                    edges {
                      cursor
                      node {
                        ...Image
                      }
                    }
                    pageInfo {
                      ...PageInfo
                    }
                  }
                  categories {
                    edges {
                      node {
                        ...CategoryDetails
                      }
                      cursor
                    }
                  }
                  reviews {
                    pageInfo {
                      ...PageInfo
                    }
                  }
                  availabilityV2 {
                    status
                    description
                  }
                  prices {
                    ...Prices
                  }
                  customFields {
                    edges {
                      node {
                        name
                        value
                      }
                    }
                  }
                  metafields(namespace: "custom_attributes", first: 20) {
                    edges {
                      node {
                        key
                        value
                      }
                    }
                  }
                  productOptions {
                    ...ProductOptions
                    pageInfo {
                      ...PageInfo
                    }
                  }
                  path
                }
              }
            }
            pageInfo {
              ...PageInfo
            }
          }
          name
          token
        }
      }
      pageInfo {
        ...PageInfo
      }
    }
  }
}
    ${ImageFragmentDoc}
${PageInfoFragmentDoc}
${CategoryDetailsFragmentDoc}
${PricesFragmentDoc}
${ProductOptionsFragmentDoc}`;
export const DeleteCartLineItemDocument = gql`
    mutation deleteCartLineItem($cartEntityId: String!, $lineItemEntityId: String!) {
  cart {
    deleteCartLineItem(
      input: {cartEntityId: $cartEntityId, lineItemEntityId: $lineItemEntityId}
    ) {
      cart {
        entityId
      }
    }
  }
}
    `;
export const CdnUrlDocument = gql`
    query cdnUrl {
  site {
    settings {
      url {
        cdnUrl
      }
    }
  }
}
    `;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    customer {
      entityId
    }
    result
  }
}
    `;
export const GetPdpProductDocument = gql`
    query getPdpProduct($path: String!, $includeTax: Boolean) {
  site {
    route(path: $path) {
      node {
        ... on Product {
          ...ProductDetails
          relatedProducts {
            ...RelatedProducts
          }
        }
      }
    }
  }
}
    ${ProductDetailsFragmentDoc}
${RelatedProductsFragmentDoc}`;
export const ProductSearchDocument = gql`
    query productSearch($filters: SearchProductsFiltersInput!, $includeTax: Boolean, $pageSize: Int) {
  site {
    search {
      searchProducts(filters: $filters) {
        products(first: $pageSize) {
          edges {
            node {
              ...ProductDetails
            }
          }
          pageInfo {
            ...PageInfo
          }
          collectionInfo {
            totalItems
          }
        }
        filters {
          edges {
            node {
              ...SearchFilters
            }
          }
        }
      }
    }
  }
}
    ${ProductDetailsFragmentDoc}
${PageInfoFragmentDoc}
${SearchFiltersFragmentDoc}`;
export const ProductsDocument = gql`
    query products($entityIds: [Int!], $includeTax: Boolean) {
  site {
    products(entityIds: $entityIds) {
      edges {
        node {
          ...ProductDetails
        }
      }
      pageInfo {
        ...PageInfo
      }
      collectionInfo {
        totalItems
      }
    }
  }
}
    ${ProductDetailsFragmentDoc}
${PageInfoFragmentDoc}`;
export const GetRouteDocument = gql`
    query getRoute($path: String!, $includeTax: Boolean) {
  site {
    route(path: $path) {
      node {
        ... on ContactPage {
          id
          path
          htmlBody
          plainTextSummary
          contactFields
          renderedRegions {
            regions {
              name
              html
            }
          }
          entityId
          parentEntityId
          name
          __typename
        }
        ... on Product {
          ...ProductDetails
        }
        ... on Category {
          __typename
          description
          id
          entityId
          name
          defaultImage {
            altText
            urlOriginal
          }
          seo {
            ...SeoDetails
          }
          path
        }
        ... on Brand {
          id
          entityId
          name
          defaultImage {
            urlOriginal
            altText
            __typename
          }
          seo {
            ...SeoDetails
          }
          path
          __typename
        }
        ... on NormalPage {
          id
          path
          htmlBody
          plainTextSummary
          renderedRegions {
            regions {
              name
              html
            }
          }
          entityId
          parentEntityId
          name
          isVisibleInNavigation
          seo {
            ...SeoDetails
          }
          __typename
        }
      }
    }
  }
}
    ${ProductDetailsFragmentDoc}
${SeoDetailsFragmentDoc}`;
export const StorelocationsDocument = gql`
    query storelocations($distanceFilter: DistanceFilter) {
  inventory {
    locations(distanceFilter: $distanceFilter) {
      edges {
        node {
          entityId
          code
          label
          description
          typeId
          address {
            ...InventoryAddress
          }
          distance {
            value
            lengthUnit
          }
          timeZone
        }
      }
    }
  }
}
    ${InventoryAddressFragmentDoc}`;
export const TaxSettingsDocument = gql`
    query taxSettings {
  site {
    settings {
      tax {
        pdp
        plp
      }
    }
  }
}
    `;
export const UpdateCartLineItemDocument = gql`
    mutation updateCartLineItem($cartEntityId: String!, $lineItemEntityId: String!, $data: UpdateCartLineItemDataInput!) {
  cart {
    updateCartLineItem(
      input: {cartEntityId: $cartEntityId, lineItemEntityId: $lineItemEntityId, data: $data}
    ) {
      cart {
        entityId
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    addProductsToCart(variables: AddProductsToCartMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AddProductsToCartMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddProductsToCartMutation>(AddProductsToCartDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addProductsToCart', 'mutation');
    },
    assignCartToCustomer(variables: AssignCartToCustomerMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AssignCartToCustomerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AssignCartToCustomerMutation>(AssignCartToCustomerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'assignCartToCustomer', 'mutation');
    },
    availableProductSearchFilters(variables: AvailableProductSearchFiltersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AvailableProductSearchFiltersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AvailableProductSearchFiltersQuery>(AvailableProductSearchFiltersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'availableProductSearchFilters', 'query');
    },
    cart(variables?: CartQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CartQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CartQuery>(CartDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'cart', 'query');
    },
    getCartEntityId(variables?: GetCartEntityIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCartEntityIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCartEntityIdQuery>(GetCartEntityIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCartEntityId', 'query');
    },
    categoryTree(variables?: CategoryTreeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CategoryTreeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CategoryTreeQuery>(CategoryTreeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'categoryTree', 'query');
    },
    category(variables: CategoryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CategoryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CategoryQuery>(CategoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'category', 'query');
    },
    getSocialLinks(variables?: GetSocialLinksQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetSocialLinksQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSocialLinksQuery>(GetSocialLinksDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getSocialLinks', 'query');
    },
    checkout(variables?: CheckoutQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CheckoutQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CheckoutQuery>(CheckoutDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'checkout', 'query');
    },
    createCart(variables?: CreateCartMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateCartMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateCartMutation>(CreateCartDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createCart', 'mutation');
    },
    customerAttribute(variables: CustomerAttributeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CustomerAttributeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CustomerAttributeQuery>(CustomerAttributeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'customerAttribute', 'query');
    },
    customer(variables?: CustomerQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CustomerQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CustomerQuery>(CustomerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'customer', 'query');
    },
    deleteCartLineItem(variables: DeleteCartLineItemMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteCartLineItemMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteCartLineItemMutation>(DeleteCartLineItemDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteCartLineItem', 'mutation');
    },
    cdnUrl(variables?: CdnUrlQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CdnUrlQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CdnUrlQuery>(CdnUrlDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'cdnUrl', 'query');
    },
    login(variables: LoginMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<LoginMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<LoginMutation>(LoginDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'login', 'mutation');
    },
    getPdpProduct(variables: GetPdpProductQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetPdpProductQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPdpProductQuery>(GetPdpProductDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPdpProduct', 'query');
    },
    productSearch(variables: ProductSearchQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ProductSearchQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProductSearchQuery>(ProductSearchDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'productSearch', 'query');
    },
    products(variables?: ProductsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ProductsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProductsQuery>(ProductsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'products', 'query');
    },
    getRoute(variables: GetRouteQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetRouteQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetRouteQuery>(GetRouteDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getRoute', 'query');
    },
    storelocations(variables?: StorelocationsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<StorelocationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StorelocationsQuery>(StorelocationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'storelocations', 'query');
    },
    taxSettings(variables?: TaxSettingsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<TaxSettingsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TaxSettingsQuery>(TaxSettingsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'taxSettings', 'query');
    },
    updateCartLineItem(variables: UpdateCartLineItemMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateCartLineItemMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateCartLineItemMutation>(UpdateCartLineItemDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateCartLineItem', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export interface StoreLocationClientArgs {
    lat?: number;
    lng?: number;
    radius?: number;
    currentPage?: number;
    filters?: {
        city?: string;
        postcode?: string;
    };
    sort?: {
        cityName?: 'ASC' | 'DESC';
        distance?: 'ASC' | 'DESC';
    };
}

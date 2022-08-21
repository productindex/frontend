export interface StoreSummary {
    Business: {
        business_name: string,
        profile_pic_url: string;
        BusinessTags: string[];
    };
    id: number;
    unique_name: string;
    country: string;
    state: string;
    openingTime: string;
    closingTime: string;
    address_line_1: string;
    avg_star_rating: number;
    review_count: number;
}
export interface StoreReview {
    id: number;
    store_id: number;
    rating_number: number;
    comment: string;
    flagged_inappropriate: boolean;
    flagged_reason: string;
    insert_date: string;
    update_date: string;
    User: User
}


interface User {
    first_name: string;
    last_name: string;
    profile_pic_url: string;
}
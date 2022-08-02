export interface ProductInventoryType {
    product_id: number;
    quantity: number;
    price: number;
    available: boolean;
    show_price: boolean;
    Product: Product;
}


interface Product {
    id: number;
    product_name: string;
    product_type: string;
    product_key: string;
    image_url: string;
    description: string;
    tag: string;
}
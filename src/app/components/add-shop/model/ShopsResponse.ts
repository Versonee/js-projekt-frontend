class Product {
}

export interface ShopsResponse {
    id: number;
    created: Date;
    updated: Date | undefined;
    name: string;
    products: Product[];
}

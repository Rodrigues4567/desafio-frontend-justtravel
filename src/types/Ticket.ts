
export interface Ticket {
    id: string;
    name: string;
    location: string;
    image: string;
    price: {
        full: number;
        discount: number;
    };
    rating: {
        reviewsCount: number;
        value: number;
    };
}

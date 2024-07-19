import { dateTime, EMPTY_DATETIME } from "@type/time";

export interface ItemData {
    //! Required properties
    id: number;
    images: string[];
    price: number | string;
    available: boolean;
    available_quantity: number;
    brand: string;
    model: string;
    category_id: number;
    short_description: string;

    //! Optional properties
    rating?: productRating; // Optional rating
    discount?: string; // Optional discount
    long_description?: string; // Optional long description
    title?: string; // Optional title
    thumbnail_id?: number; // Optional thumbnail
    promos?: number[];  // Optional promotions
    special_codes?: number[]; // Optional special codes
    url?: string; // Declared on item view
};

export interface Short_ItemData {
    //! Required properties
    id: number;
    imgs: string[];
    price: number | string;
    avai: boolean;
    avai_q: number;
    brand: string;
    model: string;
    cat_id: number;
    s_desc: string;

    //! Optional properties
    rate?: productRating; // Optional rating
    disc?: string; // Optional discount
    l_desc?: string; // Optional long description
    title?: string; // Optional title
    thumb_id?: number; // Optional thumbnail
    promos?: number[]|undefined;  // Optional promotions
    spec_codes?: number[]; // Optional special codes
    url?: string; // Declared on item view
}

export interface productRating {
    value: number;
    count: number;
}

export interface productReviews {
    id?: number;
    title: string;
    rating: number;
    comment?: string;
    
    sender: reviewSender;
}

export interface reviewSender {

    user_id ?: number;
    guest ?: boolean;
    guest_nick ?: string;
}

// Array of ItemData
export type ItemsArray = ItemData[];

// ItemsData interface for functions
export type ItemsData = {
    items: ItemsArray;
}

export const EMPTY_DISCOUNT = undefined;
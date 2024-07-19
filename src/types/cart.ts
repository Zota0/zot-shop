

export interface CartData {

    items: CartItems;
}

export type CartItems = CartItem[];

export interface CartItem {
    id: string;
    quantity: number;
}
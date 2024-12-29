/* eslint-disable prettier/prettier */
import { Schema, Document } from 'mongoose';

// CartItem interface for items in the cart
export interface CartItem {
  productId: string;
  name?: string; // Cached product name
  price?: number; // Cached product price
  image?: string; // Cached product image
  quantity: number;
}

// Cart interface for the cart document
export interface Cart extends Document {
  userId: string; // ID of the user associated with this cart
  items: CartItem[];
}

// CartDocument extends the Mongoose Document type and the Cart interface
export type CartDocument = Cart & Document;

export const CartSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    items: [
      {
        productId: { type: String, required: true },
        name: { type: String }, // Optional cached product name
        price: { type: Number }, // Optional cached product price
        image: { type: String }, // Optional cached product image
        quantity: { type: Number, required: true, min: 1 },
      },
    ],
  },
  {
    collection: 'carts', // Explicit collection name
  }
);

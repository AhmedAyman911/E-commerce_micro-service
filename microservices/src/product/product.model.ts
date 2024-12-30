import { Schema, Document } from 'mongoose';

export interface Product extends Document {
  readonly name: string;
  readonly price: string;
  readonly stock: string;
  readonly material: string;
  readonly type: string;
  readonly dimensions: string;
  readonly image: string;
  readonly n_items: string;
}

export const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    stock: {
      type: String,
      required: true,
    },
    material: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    dimensions: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    n_items: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'products', 
  }
);

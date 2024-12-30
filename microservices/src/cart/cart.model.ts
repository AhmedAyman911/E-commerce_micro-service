import { Schema,Document,model,Types } from 'mongoose';

export interface Cart extends Document {
  readonly uid: string;
  readonly items: {
          productId: Types.ObjectId;
          name: string;
          quantity: number;
          price: number;
          photo:string;
      }[];
}

export const CartSchema = new Schema({
  uid: {
    type: String,
    required: true,
  },
  items: [
    {
        productId: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
            min: 1,
        },
        price: {
            type: Number,
            required: true,
        },
        photo: {
            type: String,
            required: true,
        }
    },
],
});

export const CartModel = model<Cart>('CartSchema', CartSchema);
import { Schema, Document, model, Types } from 'mongoose';

export interface Order extends Document {
    readonly uid: string;
    readonly name: string;
    readonly description: string;
    readonly email: string;
    readonly phone: string;
    readonly address: string;
    readonly items: {
        productId: Types.ObjectId;
        name: string;
        quantity: number;
        price: number;
        photo: String
    }[];
    readonly totalAmount: number;
    readonly paymentMethod: 'credit_card' | 'paypal' | '"cash"';
    readonly orderStatus: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'canceled';
}

export const OrderSchema = new Schema({
    uid: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
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
    totalAmount: {
        type: Number,
        required: true,
    },
    paymentMethod: {
        type: String,
        enum: ['credit_card', 'paypal', 'cash'],
        required: true,
    },
    orderStatus: {
        type: String,
        enum: ['pending', 'confirmed', 'shipped', 'delivered', 'canceled'],
        default: 'pending',
    },
},
    {
        collection: 'order',
    }
);

export const OrderModel = model<Order>('OrderSchema', OrderSchema);
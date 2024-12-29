/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CartItem, CartDocument } from './cart.model';  // We import CartItem and CartDocument, not Cart itself

@Injectable()
export class CartService {
  constructor(@InjectModel('Cart') private readonly cartModel: Model<CartDocument>) {}  // Use 'Cart' instead of Cart

  // Get cart for a specific user
  async getCart(userId: string): Promise<CartDocument | null> {
    return this.cartModel.findOne({ userId }).exec();  // Use cartModel to interact with Mongoose
  }

  // Add an item to the cart
  async addToCart(userId: string, item: CartItem): Promise<CartDocument> {
    const existingCart = await this.cartModel.findOne({ userId });
    if (existingCart) {
      existingCart.items.push(item);
      return existingCart.save();  // Saving the updated cart document
    } else {
      const newCart = new this.cartModel({ userId, items: [item] });
      return newCart.save();  // Creating a new cart if not found
    }
  }

  // Update quantity of a cart item
  async updateCartItem(userId: string, productId: string, quantity: number): Promise<CartDocument | null> {
    const existingCart = await this.cartModel.findOne({ userId });
    if (existingCart) {
      const item = existingCart.items.find((item) => item.productId === productId);
      if (item) {
        item.quantity = quantity;
        return existingCart.save();  // Saving the updated cart document
      }
    }
    return null;  // If no cart or item found
  }

  // Remove an item from the cart
  async removeFromCart(userId: string, productId: string): Promise<CartDocument | null> {
    const cart = await this.cartModel.findOne({ userId });
    if (cart) {
      cart.items = cart.items.filter(item => item.productId !== productId);
      return cart.save();
    }
    return null; // Return null if no cart was found for the user
  }
  
}

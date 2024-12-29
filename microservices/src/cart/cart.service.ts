import { Injectable, Inject, NotFoundException,BadRequestException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Cart } from './cart.model';

@Injectable()
export class CartService {

  constructor(
    @InjectModel('Cart') private readonly cartModel: Model<Cart>,
  ) { }
  /*
    async createCart(cartData: Partial<Cart>): Promise<Cart> {
      const cart = new this.cartModel(cartData);
      return await cart.save();
    }*/

  async getAllCarts(): Promise<Cart[]> {
    return await this.cartModel.find().exec();
  }

  async createCartt(uid: string): Promise<Cart> {
    const existingCart = await this.cartModel.findOne({ uid }).exec();

    if (existingCart) {
      throw new Error('Cart already exists for this user.');
    }

    const newCart = new this.cartModel({ uid, items: [] });
    return await newCart.save();
  }

  async getCartByUserId(uid: string): Promise<Cart> {
    const cart = await this.cartModel.findOne({ uid }).exec();
    if (!cart) {
      throw new NotFoundException('Cart not found for this user.');
    }
    return cart;
  }

  async deleteItemFromCart(uid: string, productId: string): Promise<Cart> {
    const cart = await this.cartModel.findOne({ uid }).exec();

    if (!cart) {
      throw new NotFoundException('Cart not found for this user.');
    }

    // Find the item to remove
    const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);

    if (itemIndex === -1) {
      throw new NotFoundException('Item not found in cart.');
    }

    // Remove the item from the cart
    cart.items.splice(itemIndex, 1);

    return cart.save();
  }


  async updateCart(uid: string, product: any): Promise<Cart> {
    const cart = await this.cartModel.findOne({ uid }).exec();

    if (!cart) {
      throw new NotFoundException('Cart not found for the user.');
    }

    const existingProduct = cart.items.find(
      (item) => item.productId.toString() === product.productId,
    );

    if (existingProduct) {
      existingProduct.quantity += product.quantity; // Update quantity
    } else {
      cart.items.push(product); // Add new product
    }

    return cart.save();
  }
  async increaseQuantity(uid: string, productId: string, amount: number): Promise<Cart> {
    const cart = await this.getCartByUserId(uid);

    const product = cart.items.find(
      (item) => item.productId.toString() === productId,
    );

    if (!product) {
      throw new NotFoundException('Item not found in the cart.');
    }

    product.quantity += amount;
    return cart.save();
  }

  async decreaseQuantity(uid: string, productId: string, amount: number): Promise<Cart> {
    const cart = await this.getCartByUserId(uid);

    const product = cart.items.find(
      (item) => item.productId.toString() === productId,
    );

    if (!product) {
      throw new NotFoundException('Item not found in the cart.');
    }

    if (product.quantity - amount < 0) {
      throw new BadRequestException('Quantity cannot be less than zero.');
    }

    product.quantity -= amount;
    return cart.save();
  }










}



/*
async getCartByUserId(uid: string): Promise<Cart> {
  const cart = await this.cartModel.findOne({ uid }).exec();
  if (!cart) {
    throw new NotFoundException('Cart not found');
  }
  return cart;
}

async addItemToCart(uid: string, item: any): Promise<Cart> {
  const cart = await this.cartModel.findOne({ uid }).exec();
  if (!cart) {
    throw new NotFoundException('Cart not found');
  }

  const existingItem = cart.items.find(
    (i) => i.productId.toString() === item.productId,
  );

  if (existingItem) {
    existingItem.quantity += item.quantity;
  } else {
    cart.items.push(item);
  }

  return cart.save();
}

async removeItemFromCart(uid: string, productId: string): Promise<Cart> {
  const cart = await this.cartModel.findOne({ uid }).exec();
  if (!cart) {
    throw new NotFoundException('Cart not found');
  }

  cart.items = cart.items.filter(
    (item) => item.productId.toString() !== productId,
  );

  return cart.save();
}

async clearCart(uid: string): Promise<Cart> {
  const cart = await this.cartModel.findOne({ uid }).exec();
  if (!cart) {
    throw new NotFoundException('Cart not found');
  }

  cart.items = [];
  return cart.save();
}*/

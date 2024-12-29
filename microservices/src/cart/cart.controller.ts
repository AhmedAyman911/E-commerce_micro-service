/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { CartItem } from './cart.model';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  // Get cart for a specific user
  @Get(':userId')
  async getCart(@Param('userId') userId: string) {
    try {
      const cart = await this.cartService.getCart(userId);
      return cart || { userId, items: [] }; // Return empty cart if not found
    } catch (error) {
      throw new HttpException('Error retrieving cart', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // Add an item to the cart
  @Post(':userId')
  async addToCart(@Param('userId') userId: string, @Body() item: CartItem) {
    try {
      return await this.cartService.addToCart(userId, item);
    } catch (error) {
      throw new HttpException('Error adding to cart', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // Update quantity of a cart item
  @Patch(':userId/item/:productId')
  async updateCartItem(
    @Param('userId') userId: string,
    @Param('productId') productId: string,
    @Body('quantity') quantity: number,
  ) {
    try {
      return await this.cartService.updateCartItem(userId, productId, quantity);
    } catch (error) {
      throw new HttpException('Error updating cart item', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // Remove an item from the cart
  @Delete(':userId/item/:productId')
  async removeFromCart(@Param('userId') userId: string, @Param('productId') productId: string) {
    try {
      return await this.cartService.removeFromCart(userId, productId);
    } catch (error) {
      throw new HttpException('Error removing from cart', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

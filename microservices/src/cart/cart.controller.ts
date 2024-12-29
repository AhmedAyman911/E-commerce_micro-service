import { Controller, Post, Put, Get, Delete, Body, Param, Patch, HttpException, NotFoundException, HttpStatus } from '@nestjs/common';
import { CartService } from './cart.service';


@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) { }
  @Post(':uid/create')
  async createCartt(@Param('uid') uid: string) {
    return this.cartService.createCartt(uid);
  }

  @Put(':uid/update')
  async updateCart(
    @Param('uid') uid: string,
    @Body() product: { productId: string; name: string; quantity: number; price: number; photo: string },
  ) {
    return this.cartService.updateCart(uid, product);
  }

  @Get(':uid')
  async getCart(@Param('uid') uid: string) {
    const cart = await this.cartService.getCartByUserId(uid);
    if (!cart) {
      throw new NotFoundException('Cart not found for this user.');
    }
    return cart;
  }

  @Delete(':uid/items/:productId')
  async deleteItem(
    @Param('uid') uid: string,
    @Param('productId') productId: string,
  ) {
    const updatedCart = await this.cartService.deleteItemFromCart(uid, productId);
    if (!updatedCart) {
      throw new NotFoundException('Item not found in cart.');
    }
    return updatedCart;
  }
  @Put(':uid/:itemId/increase')
  async increaseQuantity(
    @Param('uid') uid: string,
    @Param('itemId') itemId: string,
    @Body('amount') amount: number = 1,
  ) {
    return this.cartService.increaseQuantity(uid, itemId, amount);
  }

  @Put(':uid/:itemId/decrease')
  async decreaseQuantity(
    @Param('uid') uid: string,
    @Param('itemId') itemId: string,
    @Body('amount') amount: number = 1,
  ) {
    return this.cartService.decreaseQuantity(uid, itemId, amount);
  }

}

/*
  @Post()
  async createOrder(@Body() cartData: Partial<Cart>): Promise<Cart> {
    try {
      return await this.cartService.createCart(cartData);
    } catch (error) {
      throw new HttpException('Failed to create cart', HttpStatus.BAD_REQUEST);
    }
  }
  @Get()
  async getAllCarts(): Promise<Cart[]> {
    console.log('Fetching all Cartss...');
    return await this.cartService.getAllCarts();
  }*/


/*
@Get(':uid')
async getCart(@Param('uid') uid: string) {
  return this.cartService.getCartByUserId(uid);
}

@Patch(':uid/add')
async addItem(
  @Param('uid') uid: string,
  @Body('item') item: {
    productId: string;
    name: string;
    quantity: number;
    price: number;
    photo: string;
  },
) {
  return this.cartService.addItemToCart(uid, item);
}

@Patch(':uid/remove/:productId')
async removeItem(
  @Param('uid') uid: string,
  @Param('productId') productId: string,
) {
  return this.cartService.removeItemFromCart(uid, productId);
}

@Delete(':uid/clear')
async clearCart(@Param('uid') uid: string) {
  return this.cartService.clearCart(uid);
}*/


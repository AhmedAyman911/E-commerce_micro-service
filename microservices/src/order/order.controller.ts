import { Controller, Get, Post, Put, Delete, Body, Param, HttpException, HttpStatus } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.model';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async createOrder(@Body() orderData: Partial<Order>): Promise<Order> {
    try {
      return await this.orderService.createOrder(orderData);
    } catch (error) {
      throw new HttpException('Failed to create order', HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  async getAllOrders(): Promise<Order[]> {
    console.log('Fetching all orders...');
    return await this.orderService.getAllOrders();
  }

  @Get(':id')
  async getOrderById(@Param('id') orderId: string): Promise<Order> {
    const order = await this.orderService.getOrderById(orderId);
    if (!order) {
      throw new HttpException('Order not found', HttpStatus.NOT_FOUND);
    }
    return order;
  }

  @Put(':id/status')
  async updateOrderStatus(
    @Param('id') orderId: string,
    @Body('status') status: string,
  ): Promise<Order> {
    const updatedOrder = await this.orderService.updateOrderStatus(orderId, status);
    if (!updatedOrder) {
      throw new HttpException('Order not found or update failed', HttpStatus.NOT_FOUND);
    }
    return updatedOrder;
  }
  
  @Put(':id/address')
  async updateOrderAddress(
    @Param('id') orderId: string,
    @Body('address') address: string,
  ): Promise<Order> {
    const updatedOrder = await this.orderService.updateOrderAddress(orderId, address);
    if (!updatedOrder) {
      throw new HttpException('Order not found or update failed', HttpStatus.NOT_FOUND);
    }
    return updatedOrder;
  }
  @Delete(':id')
  async deleteOrder(@Param('id') orderId: string): Promise<Order> {
    const deletedOrder = await this.orderService.deleteOrder(orderId);
    if (!deletedOrder) {
      throw new HttpException('Order not found', HttpStatus.NOT_FOUND);
    }
    return deletedOrder;
  }
}

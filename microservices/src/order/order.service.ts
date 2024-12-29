import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Order } from './order.model';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId } from 'mongoose';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class OrderService {
    constructor(
        @InjectModel('Order') private readonly orderModel: Model<Order>,
    ) { }

    // Create a new order
    async createOrder(orderData: Partial<Order>): Promise<Order> {
        const order = new this.orderModel(orderData);
        return await order.save();
    }

    // Get all orders
    async getAllOrders(): Promise<Order[]> {
        return await this.orderModel.find().exec();
    }

    // Get an order by ID
    async getOrderById(orderId: string): Promise<Order> {
        return await this.orderModel.findById(orderId).exec();
    }

    // Update an order status
    async updateOrderStatus(orderId: string, status: string): Promise<Order> {
        // Validate if the orderId is a valid ObjectId
        if (!isValidObjectId(orderId)) {
            throw new HttpException('Invalid Order ID', HttpStatus.BAD_REQUEST);
        }

        try {
            // Update the order status
            const updatedOrder = await this.orderModel.findByIdAndUpdate(
                orderId,
                { orderStatus: status },
                { new: true }
            ).exec();

            if (!updatedOrder) {
                throw new HttpException('Order not found', HttpStatus.NOT_FOUND);
            }
            return updatedOrder;
        } catch (error) {
            console.error('Error updating order status:', error);
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Update an order address
    async updateOrderAddress(orderId: string, address: string): Promise<Order> {
        // Validate if the orderId is a valid ObjectId
        if (!isValidObjectId(orderId)) {
            throw new HttpException('Invalid Order ID', HttpStatus.BAD_REQUEST);
        }
        try {
            // Update the order address
            const updatedOrder = await this.orderModel.findByIdAndUpdate(
                orderId,
                { address: address },
                { new: true }
            ).exec();
            if (!updatedOrder) {
                throw new HttpException('address not found', HttpStatus.NOT_FOUND);
            }
            return updatedOrder;
        } catch (error) {
            console.error('Error updating order status:', error);
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Delete an order
    async deleteOrder(orderId: string): Promise<Order> {
        return await this.orderModel.findOneAndDelete({ orderId }).exec();
    }
}
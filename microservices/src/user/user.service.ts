/* eslint-disable */
import { Injectable, NotFoundException,BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model  } from 'mongoose';
import { User } from './user.model';
import * as bcrypt from 'bcrypt';
import { ObjectId } from 'mongodb';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly UserModel: Model<User>,
  ) { }

  async getUserById(userId: string): Promise<User> {
  
    if (!ObjectId.isValid(userId)) {
      throw new BadRequestException(`Invalid ID format: ${userId}`);
    }
  
    const objectId = new ObjectId(userId);
    const user = await this.UserModel.findOne({ _id: objectId });
  
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.UserModel.findOne({ email }).exec();
  }

  async createUser(email: string, password: string, name: string, phone: string, address: string): Promise<User> {
    console.log('Incoming Data:', { email, password, name, phone,address });
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new this.UserModel({ email, password: hashedPassword, name, phone,address });
    return newUser.save();
  }
  async findAll(): Promise<User[]> {
    return await this.UserModel.find().exec();
  }

  async updateUser(id: string, updateData: { email?: string; password?: string; name?: string; phone?: string; }): Promise<User | null> {
    return this.UserModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
  }
  async deleteUser(id: string): Promise<{ deleted: boolean }> {
    const result = await this.UserModel.findByIdAndDelete(id).exec();
    return { deleted: !!result };
  }
}
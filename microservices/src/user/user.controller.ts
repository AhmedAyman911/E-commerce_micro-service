/* eslint-disable */
import { Controller, Post, Get, Put, Delete, Body, Param, Request, UseGuards, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user.service'
import { AuthService } from '../auth/auth.service'
import { User } from './user.model';
import * as bcrypt from 'bcrypt';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService,private readonly authService: AuthService) { }
  @Get('allusers')
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> {
    return this.userService.getUserById(id);
  }
  
  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateData: { email?: string; password?: string; name?: string; phone?: string;address?: string; }
  ) {
    const updatedUser = await this.userService.updateUser(id, updateData);

    // Generate a new token for the updated user
    const { access_token } = await this.authService.login(updatedUser);

    return { user: updatedUser, token: access_token };
  }
  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
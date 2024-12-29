/* eslint-disable */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signup(email: string, password: string,name: string, phone: string, address: string) {
    const existingUser = await this.userService.findByEmail(email);
    if (existingUser) {
      throw new UnauthorizedException('Email already registered');
    }
    console.log(email,password,name,phone,address);
    return this.userService.createUser(email, password,name,phone,address);
  }
  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!user || !isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    if (user && isPasswordValid) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, uid: user.id, name: user.name, phone: user.phone,address: user.address};
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
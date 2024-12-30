/* eslint-disable */
import { Controller, Post, Get, Put, Delete, Body, Param, Request, UseGuards, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('signup')
  async signup(@Body() body: { email: string; password: string; name: string; phone: string; address: string; }) {
    return this.authService.signup(body.email, body.password, body.name, body.phone,body.address);
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.authService.validateUser(body.email, body.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    
    return this.authService.login(user);
  }
  @UseGuards(JwtAuthGuard)
  @Post('test')
  test(@Request() req) {
    return req.user;
  }

}
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import * as dotenv from 'dotenv'; // Import dotenv
dotenv.config(); // Load environment variables

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB), // Connect to MongoDB
    ProductModule, CartModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

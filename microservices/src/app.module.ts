import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
<<<<<<< HEAD
import { CartModule } from './cart/cart.module';
=======
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
>>>>>>> ca4ca55ac70e0c39cdb74beef931f839b219ba6e
import { OrderModule } from './order/order.module';
import * as dotenv from 'dotenv'; // Import dotenv
dotenv.config(); // Load environment variables

@Module({
  imports: [
<<<<<<< HEAD
    MongooseModule.forRoot(process.env.DB), // Connect to MongoDB
    ProductModule, CartModule,
=======
    MongooseModule.forRoot(process.env.DB),
    ProductModule,AuthModule,UserModule, OrderModule
>>>>>>> ca4ca55ac70e0c39cdb74beef931f839b219ba6e
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

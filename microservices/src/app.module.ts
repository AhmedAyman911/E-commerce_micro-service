import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import * as dotenv from 'dotenv'; // Import dotenv
dotenv.config(); // Load environment variables

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB),
    ProductModule,AuthModule,UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
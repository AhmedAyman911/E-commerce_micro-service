/* eslint-disable */
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ProductModule,AuthModule,UserModule,
    ConfigModule.forRoot({
      isGlobal: true, // Makes environment variables globally available
    }),
    MongooseModule.forRoot(process.env.DATABASE_URI, 
      { connectionName: 'database' }),
   ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

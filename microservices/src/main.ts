/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD
  app.setGlobalPrefix('api'); // Make sure this line exists
=======
  app.use(cors()); 
>>>>>>> ca4ca55ac70e0c39cdb74beef931f839b219ba6e
  await app.listen(3000);
}
bootstrap();

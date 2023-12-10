// -- ==============================================   
// --  filex: src\main.ts
// --  ============================================== 

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.setGlobalPrefix('api/v2');
  
  app.useGlobalPipes(
    new ValidationPipe({
      //-- solo trae los atributos parametrizados en src\cars\dto\create-car.dto.ts
      whitelist: true,
      //-- devuelve error si recibe otros parametros que no son
      forbidNonWhitelisted: true,
    }),
  )


  await app.listen(3000);
}
bootstrap();

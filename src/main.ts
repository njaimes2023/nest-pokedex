// -- ==============================================   
// --  proyecto: 03-pokedex  -- Paginacion
// --  filex: sc_0\V20 01 njn paginacion.sql
// --  filex: sc_0\V22 03 njn variables Entorno.sql
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
      
      // -- paginacion.convierete parametros de entrada en numeros
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      }   //paginacion


    }),
  )


  // await app.listen(3000);
  //  variables de ambiente
  await app.listen(process.env.PORT);
  console.log (`App running on port ${process.env.PORT }` );
}
bootstrap();

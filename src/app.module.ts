// -- ==============================================   
// --  proyecto: 03-pokedex  -- Paginacion
// -- seccion 9: Variables de entorno - Deployment y Dockerizar la aplicación
// --  filex: sc_0\V22 03 njn variables Entorno.sql
// --  filex: sc_0\V20 04 njn Railway _MongoDb.sql
// --  joi - ValidationSchema
// --  file : src\app.module.ts
// --  ==============================================  

import { join } from 'path';  //node van al inicio
import { Module } from '@nestjs/common';   
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonModule } from './pokemon/pokemon.module';


// -- ==============================================   
// --  filex: src\app.module.ts
// --  ============================================== 




// import { CommonModule } from './common/common.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi.validation';



@Module({
  imports: [
    //variables de entorno
    ConfigModule.forRoot({
      load: [ EnvConfiguration ],
      // joi - ValidationSchema
      validationSchema: JoiValidationSchema,
    }),
    
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'), 
    }),
    
//    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),   
   //variables de entorno
    // MongooseModule.forRoot(process.env.MONGODB),  //el mismo de tableplus

    // --Railway _MongoDb.sql
    MongooseModule.forRoot(process.env.MONGODB, { 
      dbName: 'pokemonsdb'
    }),  

    PokemonModule, CommonModule, SeedModule,

    // CommonModule,

  ],

})
export class AppModule {

   // variables de entorno
  // constructor () {    console.log (process.env);  }
  
}

// -- ==============================================   
// --  proyecto: 03-pokedex
// --  filex: sc_0\V20 01 njn Semilla.sql
// --  filex: sc_0\V22 03 njn variables Entorno.sql
// --  file : src\pokemon\pokemon.module.ts
// --  ==============================================  

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';

import { Pokemon, PokemonSchema } from './entities/pokemon.entity';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],

  // adiciona para implementar entity
  imports: [
    // variables de entorno
    ConfigModule,
    MongooseModule.forFeature([   //-- trae la configuracion de otro lugar
      {
        name: Pokemon.name,   // --este name es el que extiende de document
        schema: PokemonSchema,  // viene de entity
      },
    ])
  ],
  // para el SEED . SEMILLA
  exports: [
    MongooseModule
  ]
  
})
export class PokemonModule {}

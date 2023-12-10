// -- ==============================================   
// --  src\pokemon\pokemon.module.ts
// --  implementar el  entity
// --  ============================================== 

// -- ==============================================   
// --  filex: src\pokemon\pokemon.module.ts
// --  ============================================== 


import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { Pokemon, PokemonSchema } from './entities/pokemon.entity';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],

  // adiciona para implementar entity
  imports: [
    MongooseModule.forFeature([   //-- trae la configuracion de otro lugar
      {
        name: Pokemon.name,   // --este name es el que extiende de document
        schema: PokemonSchema,  // viene de entity
      },
    ])
  ]
  
})
export class PokemonModule {}

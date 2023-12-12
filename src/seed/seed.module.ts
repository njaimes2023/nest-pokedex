// -- ==============================================   
// --  proyecto: 03-pokedex
// --  filex: sc_0\V20 01 njn Semilla.sql
// --  filex: sc_0\V20 01 njn Provider-axios.sql
// --  filex: src\seed\seed.module.ts
// --  ==============================================  

import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PokemonModule } from 'src/pokemon/pokemon.module';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  // para el SEED . SEMILLA
  imports: [
    PokemonModule,
    // --provider axios
    CommonModule,
  ]
  
})
export class SeedModule {}




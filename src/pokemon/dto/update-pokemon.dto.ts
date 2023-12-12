
// -- ==============================================   
// --  src\pokemon\dto\create-pokemon.dto.ts
// --  filex: src\pokemon\dto\update-pokemon.dto.ts
// --  ============================================== 

import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemonDto } from './create-pokemon.dto';

export class UpdatePokemonDto extends PartialType(CreatePokemonDto) {}

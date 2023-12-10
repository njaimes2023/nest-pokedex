
// -- ==============================================   
// --  src\pokemon\dto\create-pokemon.dto.ts
// --  POST - Recibir y validar la data
// --  ============================================== 
import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreatePokemonDto {

    // isInt, isPositive, min 1
    @IsInt()
    @IsPositive()
    @Min(1)
    no: number;


    // isString, Minlenth 1
    @IsString()
    @MinLength(1)
    name: string;
}


// -- ==============================================   
// --  proyecto: 03-pokedex  -- Paginacion
// --  filex: sc_0\V20 01 njn paginacion.sql
// --  filex: src\common\dto\pagination.dto.ts
// --  ==============================================  

import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';


export class PaginationDto {

    @IsOptional()
    @IsPositive()
    @IsNumber()
    @Min(1)
    limit?: number;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    offset?: number;

}
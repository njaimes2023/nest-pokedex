// -- ==============================================   
// --  proyecto: 03-pokedex
// --  filex: sc_0\V20 01 njn paginacion.sql
// --  filex: src\pokemon\pokemon.controller.ts
// --  ==============================================  

import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id-p.pipe';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  @HttpCode(200)
  // @HttpCode(HttpStatus.OK)
  //  @HttpCode(HttpStatus.UNAUTHORIZED)
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonService.create(createPokemonDto);
  }


  @Get()
  //paginacion
  findAll( @Query() paginationDto: PaginationDto ) {
  //--  return this.pokemonService.findAll( );
    return this.pokemonService.findAll( paginationDto );
  }

  
  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.pokemonService.findOne(term);
  }

  @Patch(':term')
  update(@Param('term') term: string, @Body() updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonService.update( term, updatePokemonDto);
  }

  @Delete(':id')
  // remove(@Param('id') id: string) {
  //--  CustomPipes - ParseMongoIdPipe
  remove(@Param('id', ParseMongoIdPipe ) id: string) {

    return this.pokemonService.remove(id);
  }
}

// -- ==============================================   
// --  filex: src\pokemon\pokemon.service.ts
// --  ============================================== 


import {BadRequestException, Injectable, Post, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { Pokemon } from './entities/pokemon.entity';

import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';


@Injectable()
export class PokemonService {
 
  //-- insertar en base de datos
  constructor(
     @InjectModel( Pokemon.name )
    private readonly pokemonModel: Model<Pokemon>,
  ) {}

//-- responder un error especifico

  async create(createPokemonDto: CreatePokemonDto) {
    createPokemonDto.name = createPokemonDto.name.toLocaleLowerCase();
    try {
      const pokemon = await this.pokemonModel.create( createPokemonDto );
      return pokemon;
      
    } catch (error) {
           this.handleExceptions( error );
    }
  }

  findAll() {
    return `This action returns all pokemon`;
  }


  async findOne(term: string) {
  
    let pokemon: Pokemon;

    if ( !isNaN(+term) ) {
      pokemon = await this.pokemonModel.findOne({ no: term });
    }

    // verifica si es un id valida de MongoID
    if ( !pokemon && isValidObjectId( term ) ) {
      pokemon = await this.pokemonModel.findById( term );
    }

    //  Name. se intenta buscar por el nombre
    if ( !pokemon ) {
      pokemon = await this.pokemonModel.findOne({ name: term.toLowerCase().trim() })
    }

    // si el pokemon no existe
    if ( !pokemon ) 
      throw new NotFoundException(`Pokemon with id, name or no "${ term }" not found`);
   
    return pokemon;
  }


  async update( term: string, updatePokemonDto: UpdatePokemonDto) {

    const pokemon = await this.findOne( term );
    // verifica si llego el name , lo conveirte en minusculas
    if ( updatePokemonDto.name )
      updatePokemonDto.name = updatePokemonDto.name.toLowerCase();
    

    try {
       // graba en bd mongo
           
       await pokemon.updateOne( updatePokemonDto );
       // expandir pokeon json con el pokemo updte. sobreescribir
       return { ...pokemon.toJSON(), ...updatePokemonDto };
      // return pokemon;
      
    } catch (error) {
      this.handleExceptions( error );
    }
 
  }


  async remove( id: string) {
    //-- version inicia
    // const pokemon = await this.findOne( id );
    // await pokemon.deleteOne();
    // //mientras
    // return { id };
    //version final
    // const result = await this.pokemonModel.findByIdAndDelete( id );

     // version deinitiva
    const { deletedCount } = await this.pokemonModel.deleteOne({ _id: id });
    if ( deletedCount === 0 )
      throw new BadRequestException(`Pokemon with id "${ id }" not found`);
    return ;
  }

  private handleExceptions( error: any ) {
    if ( error.code === 11000 ) {
      throw new BadRequestException(`Pokemon exists in db ${ JSON.stringify( error.keyValue ) }`);
    }
    console.log(error);
    throw new InternalServerErrorException(`Can't create Pokemon - Check server logs`);
  }

}

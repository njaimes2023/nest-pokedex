
// -- ==============================================   
// --  proyecto: 03-pokedex
// --  filex: sc_0\V20 01 njn Semilla.sql
// --  filex: sc_0\V20 01 njn Provider-axios.sql
// --  filex: src\seed\seed.service.ts
// --  ==============================================  

import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';

import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokemonService } from '../pokemon/pokemon.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()


export class SeedService {
 
  // --se va este codigo para commun http-adapter.interface.ts
  //   private readonly axios: AxiosInstance = axios;


  //  -- Inyectar servicios en otros servicios 
  //-- insertar en base de datos. se trae el contructor de src\pokemon\pokemon.service.ts
  constructor(
    @InjectModel( Pokemon.name )
   private readonly pokemonModel: Model<Pokemon>,

   // provider axios
   private readonly http: AxiosAdapter,

      ) {}




  async executeSeed() {
  //  console.log (fetch);
     await this.pokemonModel.deleteMany({}); // delete * from pokemons;
    //  -- const  { data } = await   this.axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650');
     const   data  = await   this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650');
   
     

        // Pruebas iniciales
        //--desestrucutar 
        // --const  { data }  = await axios.get('https://pokeapi.co/api/v2/pokemon/4');
    // //-----------------------------------------------------------------------------        
    //    v1 obtener el id de cada pokemon. desestrucutrar
    //    data.results.forEach( async ({ name, url }) => {
    //     // -- console.log  ( { name, url } );
    //     // -- cortar por los /. separar los valores 
    //     const segments = url.split('/');
    //       //  -- console.log  ( segments );  ==> [ 'https:', '', 'pokeapi.co', 'api', 'v2', 'pokemon', '643', '' ]
    //       // -- toma la penultima posicion
    //       const no = +segments[ segments.length - 2 ];
    //       // -- este insert se trae de => src\pokemon\pokemon.service.ts
    //      const pokemon = await this.pokemonModel.create( { name, url , no } );
    //      // --console.log  ( { name, url , no } );
    //   });

    // //-----------------------------------------------------------------------------        
    //    // v2 Grabar Multiregistro 
    //    const insertPromisesArray = [];

    //    data.results.forEach(  ({ name, url }) => {
    //      const segments = url.split('/');
    //      const no = +segments[ segments.length - 2 ];

    //      insertPromisesArray.push(
    //       this.pokemonModel.create ({ name, no })
    //      );
    //   });
    //   await Promise.all (insertPromisesArray); 
      

        //-----------------------------------------------------------------------------        
       // v3 Opcion optima para Grabar Multiregistro . 
      
       const pokemonToInsert: { name: string, no: number }[] = [];
   
       data.results.forEach(({ name, url }) => {
          const segments = url.split('/');
          const no = +segments[ segments.length - 2 ];
   
         // const pokemon = await this.pokemonModel.create({ name, no });
         pokemonToInsert.push({ name, no }); // [{ name: bulbasaur, no: 1 }]
   
      });

      await this.pokemonModel.insertMany(pokemonToInsert);


        // return data.results;
       return 'Seed Executed';
      }

  
  
  }


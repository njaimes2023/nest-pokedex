import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()


export class SeedService {
 

  private readonly axios: AxiosInstance = axios;

  async executeSeed() {
  //  console.log (fetch);

     const  { data } = await   this.axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=10');
     
  // const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650');


        //--desestrucutar 
        // --const  { data }  = await axios.get('https://pokeapi.co/api/v2/pokemon/4');
      
    // obtener el id de cada pokemon. desestrucutrar
    data.results.forEach(({ name, url }) => {

      // console.log  ( { name, url } );
        // cortar por los /
        const segments = url.split('/');
          //  console.log  ( segments );  ==> [ 'https:', '', 'pokeapi.co', 'api', 'v2', 'pokemon', '643', '' ]
          // toma la penultima posicion
          const no = +segments[ segments.length - 2 ];
    
      //   // const pokemon = await this.pokemonModel.create({ name, no });
      //   pokemonToInsert.push({ name, no }); // [{ name: bulbasaur, no: 1 }]
    
       console.log  ( { name, url , no } );

      });

    
        return data.results;

      }





  // await this.pokemonModel.deleteMany({}); // delete * from pokemons;

  // const pokemonToInsert: { name: string, no: number }[] = [];


  // await this.pokemonModel.insertMany(pokemonToInsert);


    // return 'Seed Executed';


  
  
  }


// -- ==============================================   
// --  proyecto: 03-pokedex
// --  filex: sc_0\V20 01 njn Semilla.sql
// --  filex: src\seed\seed.controller.ts
// --  ==============================================  
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {
  
  constructor(private readonly seedService: SeedService) {}

  @Get()
  executeSeed() {
    return this.seedService.executeSeed();
  }
 
}

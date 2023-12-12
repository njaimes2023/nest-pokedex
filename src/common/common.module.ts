
// -- ==============================================   
// --  proyecto: 03-pokedex
// --  filex: sc_0\V20 01 njn Provider-axios.sql
// --  filex: src\common\common.module.ts
// --  ==============================================  

import { Module } from '@nestjs/common';
import { AxiosAdapter } from './adapters/axios.adapter';

@Module({
    // --provider  axios
    providers: [ AxiosAdapter ],
    exports:    [ AxiosAdapter ]
})

export class CommonModule {}

// -- ==============================================   
// --  proyecto: 03-pokedex
// --  filex: sc_0\V20 01 njn Provider-axios.sql
// --  filex: src\common\interfaces\http-adapter.interface.ts
// --  ==============================================  

export interface HttpAdapter {
    get<T>( url: string ): Promise<T>;
}
// Generated by https://quicktype.io
// -- ==============================================   
// --  src\seed\interfaces\poke-response.interface.ts
// --  ==============================================  
export interface PokeResponse {
    count:    number;
    next:     string;
    previous: null;
    results:  Result[];
}

export interface Result {
    name: string;
    url:  string;
}

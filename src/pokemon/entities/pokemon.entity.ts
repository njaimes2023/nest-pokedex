
// -- ==============================================   
// --  src\pokemon\entities\pokemon.entity.ts
// --  ============================================== 
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()   //-- decorador indicando que es esquema de bd
export class Pokemon extends Document {

//    id: string  --  Mongo me lo da
@Prop({    // --decorador depropiedades
        unique: true,
        index: true,
    })
    name: string;

    @Prop({
        unique: true,
        index: true,
    })
    no: number;

}


export const PokemonSchema = SchemaFactory.createForClass( Pokemon );
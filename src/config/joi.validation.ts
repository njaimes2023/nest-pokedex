// -- ==============================================   
// --  proyecto: 03-pokedex  -- Paginacion
// -- seccion 9: Variables de entorno - Deployment y Dockerizar la aplicación
// --  filex: sc_0\V22 03 njn variables Entorno.sql
// --  file :  src\config\joi.validation.ts
// --  ==============================================  
// regresa un objeto. se colocabn los valores por defecto

import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
    MONGODB: Joi.required(),
    PORT: Joi.number().default(3005),
    DEFAULT_LIMIT: Joi.number().default(6),
})

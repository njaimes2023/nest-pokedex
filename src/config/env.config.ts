
// -- ==============================================   
// --  proyecto: 03-pokedex  -- Paginacion
// -- seccion 9: Variables de entorno - Deployment y Dockerizar la aplicación
// --  filex: sc_0\V22 03 njn variables Entorno.sql
// --  filex:  src\config\env.config.ts
// --  ==============================================  
// regresa un objeto. se colocabn los valores por defecto
export const EnvConfiguration = () => ({
    environment: process.env.NODE_ENV || 'dev',
    mongodb    : process.env.MONGODB,
    port       : process.env.PORT || 3002,
    // se coloca el + para convertirlo a number
    defaultLimit: +process.env.DEFAULT_LIMIT || 7,
});


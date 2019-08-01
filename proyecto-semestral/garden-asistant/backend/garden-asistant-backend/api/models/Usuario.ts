/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombreUsuario: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 60
    },
    apellidoUsuario: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 60
    },
    cedulaUsuario: {
      type: 'string',
      required: true,
      unique: true,
      minLength: 10,
      maxLength: 25
    },
    correoUsuario:{
      type:'string',
      isEmail: true
    },
    password: {
      type: 'string',
      required: true,
      minLength: 8,
      maxLength: 18
    },
    arregloViviendas: {
      collection: 'vivienda',
      via: 'fkUsuario'
    }
  }
};


/**
 * Vivienda.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    propietarioVivienda: {
      type: 'string',
      required: true
    },
    ubicacionVivienda: {
      type: 'string',
      required: true
    },
    fkUsuario:{
      model: 'usuario',
      required: true
    }, 
    arregloNiveles: {
      collection: 'nivel',
      via: 'fkVivienda'
    }
  },

};


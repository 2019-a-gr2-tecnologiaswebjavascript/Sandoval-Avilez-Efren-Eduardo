/**
 * Area.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    tipoArea: {
      type: 'string',
      required: false
    },
    fkNivel:{
      model: 'nivel',
      required: true 
    }, 
    arregloMasetas: {
      collection: 'maseta',
      via: 'fkArea'
    }
  },

};


/**
 * Nivel.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    ordinalNivel: {
      type: 'number',
      required: true,
    },
    fkVivienda:{
      model: 'vivienda',
      required: true 
    }, 
    arregloAreas: {
      collection: 'area',
      via: 'fkNivel'
    }
  },

};


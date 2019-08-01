/**
 * Maseta.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    humedadSubstratoMaseta: {
      type: 'number',
      required: false
    },
    tipoPlantaMaseta: {
      type: 'string',
      required: false
    },
    fkArea: {
      model: 'area',
      required: true
    }
  },

};


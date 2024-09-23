'use strict';
const { Model } = require('sequelize');

const {models} =require('../models')


module.exports = (sequelize, DataTypes) => {
  class products_variants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  products_variants.init({
    id: {
      type : DataTypes.UUID,
      primaryKey: true,
      defaultValue:DataTypes.UUIDV4
      },
      product_id: {
          type : DataTypes.UUID,
          // defaultValue:DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING(255),
      },
      is_active: {
          type: DataTypes.BOOLEAN,
      },

      price: {
          type: DataTypes.DECIMAL(10,2),
          allowNull: false    
      }

  },
  {
      sequelize,
      modelName: 'products_variants',
    });
  return products_variants;
};
'use strict';
const { Model } = require('sequelize');

const {models} =require('../models')
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  products.init({

      id: {
        type : DataTypes.UUID,
        primaryKey: true,
        defaultValue:DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING(255),
      },
      category_id: {
        type: DataTypes.INTEGER,
      },
      img_url: {
        type: DataTypes.TEXT,
      }

  },
  {
    sequelize,
    modelName: 'products',
  });
  return products;
};
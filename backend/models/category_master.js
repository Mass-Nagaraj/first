'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category_Master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Category_Master.init({
    name: DataTypes.STRING(255),
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Category_Master',
  });
  return Category_Master;
};



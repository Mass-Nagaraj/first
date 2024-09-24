'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class demo_table3 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  demo_table3.init({
    demo3: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'demo_table3',
  });
  return demo_table3;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cart.init({
    id: {
      type : DataTypes.UUID,
      primaryKey: true,
      defaultValue:DataTypes.UUIDV4
    },
    product_id: {
        type : DataTypes.UUID,
        // defaultValue:DataTypes.UUIDV4
    },
    category_id: {
      type: DataTypes.INTEGER,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    total_price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false    
    }

    }, {
      sequelize,
      modelName: 'cart',
    });
  return cart;
};


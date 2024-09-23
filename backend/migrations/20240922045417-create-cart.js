'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('carts', {
      id: {
        type : Sequelize.UUID,
        primaryKey: true,
        defaultValue:Sequelize.UUIDV4,
        allowNull: false,
      },
      product_id: {
          type : Sequelize.UUID,
          allowNull: false,
          // defaultValue:Sequelize.UUIDV4,
      },
      category_id: {
        type: Sequelize.INTEGER,
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      total_price: {
          type: Sequelize.DECIMAL(10,2),
          allowNull: false    
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('carts');
  }
};
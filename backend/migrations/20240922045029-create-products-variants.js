'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products_variants', {
      id: {
        type : Sequelize.UUID,
        primaryKey: true,
        defaultValue:Sequelize.UUIDV4
      },
      product_id: {
          type : Sequelize.UUID,
          allowNull: false,
          // defaultValue:Sequelize.UUIDV4,
      },
      name: {
        type: Sequelize.STRING(255),
      },
      is_active: {
          type: Sequelize.BOOLEAN,
      },

      price: {
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
    await queryInterface.dropTable('products_variants');
  }
};
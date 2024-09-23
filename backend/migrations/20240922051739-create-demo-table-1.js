'use strict';
/** @type {import('sequelize-cli').Migration} */

// const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
   
    await queryInterface.createTable('demo_table1s', {
     
      demo1: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue:  Sequelize.fn('NOW')
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('demo_table1s');
  }
};



'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usr_bank_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bank_name: {
        type: Sequelize.STRING
      },
      branch_name: {
        type: Sequelize.STRING
      },
      account_no: {
        type: Sequelize.STRING
      },
      account_holderName: {
        type: Sequelize.STRING
      },
      ifsc_code: {
        type: Sequelize.STRING
      },
      account_type: {
        type: Sequelize.STRING
      },
      mobile_no: {
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usr_bank_details');
  }
};
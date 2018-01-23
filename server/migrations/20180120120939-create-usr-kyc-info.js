'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usr_kyc_infos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      aadharHolder_name: {
        type: Sequelize.STRING
      },
      panHolder_name: {
        type: Sequelize.STRING
      },
      aadhar_number: {
        type: Sequelize.STRING
      },
      pan_number: {
        type: Sequelize.STRING
      },
      pan_dob: {
        type: Sequelize.DATE
      },
      aadhar_filepath: {
        type: Sequelize.STRING
      },
      pan_filepath: {
        type: Sequelize.STRING
      },
      verification_flag: {
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('usr_kyc_infos');
  }
};
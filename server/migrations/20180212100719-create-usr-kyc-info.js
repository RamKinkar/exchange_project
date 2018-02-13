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
      aadhaarHolder_name: {
        type: Sequelize.STRING
      },
      panHolder_name: {
        type: Sequelize.STRING
      },
      aadhaar_number: {
        type: Sequelize.STRING
      },
      pan_number: {
        type: Sequelize.STRING
      },
      pan_dob: {
        type: Sequelize.DATE
      },
      aadhaar_front_filepath: {
        type: Sequelize.STRING
      },
      aadhaar_back_filepath: {
        type: Sequelize.STRING
      },
      pan_filepath: {
        type: Sequelize.STRING
      },
      gross_annual_income: {
        type: Sequelize.STRING
      },
      residential_status: {
        type: Sequelize.STRING
      },
      street_address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      pin_code: {
        type: Sequelize.STRING
      },
      verification_flag: {
        type: Sequelize.BOOLEAN
      },
      exchange_user_id: {
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
    return queryInterface.dropTable('usr_kyc_infos');
  }
};
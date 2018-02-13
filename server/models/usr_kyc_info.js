'use strict';
module.exports = (sequelize, DataTypes) => {
  var usr_kyc_info = sequelize.define('usr_kyc_info', {
    aadhaarHolder_name: DataTypes.STRING,
    panHolder_name: DataTypes.STRING,
    aadhaar_number: DataTypes.STRING,
    pan_number: DataTypes.STRING,
    pan_dob: DataTypes.DATE,
    aadhaar_front_filepath: DataTypes.STRING,
    aadhaar_back_filepath: DataTypes.STRING,
    pan_filepath: DataTypes.STRING,
    gross_annual_income: DataTypes.STRING,
    residential_status: DataTypes.STRING,
    street_address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    pin_code: DataTypes.STRING,
    verification_flag: DataTypes.BOOLEAN,
    exchange_user_id: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return usr_kyc_info;
};

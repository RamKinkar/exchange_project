'use strict';
module.exports = (sequelize, DataTypes) => {
  var usr_kyc_info = sequelize.define('usr_kyc_info', {
    aadharHolder_name: DataTypes.STRING,
    panHolder_name: DataTypes.STRING,
    aadhar_number: DataTypes.STRING,
    pan_number: DataTypes.STRING,
    pan_dob: DataTypes.DATE,
    aadhar_filepath: DataTypes.STRING,
    pan_filepath: DataTypes.STRING,
    verification_flag: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return usr_kyc_info;
};
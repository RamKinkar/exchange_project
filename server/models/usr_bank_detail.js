'use strict';
module.exports = (sequelize, DataTypes) => {
  var usr_bank_detail = sequelize.define('usr_bank_detail', {
    bank_name: DataTypes.STRING,
    branch_name: DataTypes.STRING,
    account_no: DataTypes.STRING,
    account_holderName: DataTypes.STRING,
    ifsc_code: DataTypes.STRING,
    account_type: DataTypes.STRING,
    mobile_no: DataTypes.STRING,
    bank_filepath: DataTypes.STRING,
    exchange_user_id: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return usr_bank_detail;
};
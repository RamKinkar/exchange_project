'use strict';
module.exports = (sequelize, DataTypes) => {
  var userInfo = sequelize.define('userInfo', {
    username: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return userInfo;
};
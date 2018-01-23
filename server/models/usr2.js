'use strict';
module.exports = (sequelize, DataTypes) => {
  var usr2 = sequelize.define('usr2', {
    aauser_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return usr2;
};
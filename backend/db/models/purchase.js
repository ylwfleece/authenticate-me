'use strict';
module.exports = (sequelize, DataTypes) => {
  const Purchase = sequelize.define('Purchase', {
    numberOfShares: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Purchase.associate = function(models) {
    // associations can be defined here
  };
  return Purchase;
};
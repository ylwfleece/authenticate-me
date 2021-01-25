'use strict';
module.exports = (sequelize, DataTypes) => {
  const Charity = sequelize.define('Charity', {
    name: DataTypes.STRING
  }, {});
  Charity.associate = function(models) {
    // Charity.hasMany(models.Project, )
  };
  return Charity;
};
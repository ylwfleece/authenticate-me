'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    costPerShare: DataTypes.FLOAT,
    karmaPerShare: DataTypes.INTEGER,
    numberOfShares: DataTypes.INTEGER,
    karmaReleased: DataTypes.BOOLEAN,
    charityId: DataTypes.INTEGER,
    adminId: DataTypes.INTEGER
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
  };
  return Project;
};
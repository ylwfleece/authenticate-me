'use strict';
module.exports = (sequelize, DataTypes) => {
  const Watchlist = sequelize.define('Watchlist', {
    userId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER
  }, {});
  Watchlist.associate = function(models) {
    // associations can be defined here
  };
  return Watchlist;
};
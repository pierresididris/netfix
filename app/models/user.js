'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    salt: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    freezeTableName: true
  });

  User.associate = function(models) {
    models.User.hasMany(models.UserMovie);
  };

  return User;
};
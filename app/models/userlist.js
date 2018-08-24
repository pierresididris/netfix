'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserList = sequelize.define('UserList', {
    movie_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    freezeTableName: true
  });
  UserList.associate = function(models) {
    // associations can be defined here
  };
  return UserList;
};
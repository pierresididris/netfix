'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserMovie = sequelize.define('UserMovie', {
    movie_id: DataTypes.INTEGER
  }, {
    freezeTableName: true
  });

  UserMovie.associate = function(models) {
    models.UserMovie.belongsTo(models.User, {
      as: 'user',
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });

    models.UserMovie.belongsTo(models.Movie, {
      as: 'movie',
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return UserMovie;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const MovieGenre = sequelize.define('MovieGenre', {
    movie_id: DataTypes.INTEGER,
    genre_id: DataType.INTEGER
  }, {
    freezeTableName: true,
  });

  MovieGenre.associate = function(models) {
    // associations can be defined here
  };

  return MovieGenre;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    title: DataTypes.STRING,
    overview: DataTypes.STRING,
    budget: DataTypes.INTEGER,
    revenue: DataTypes.STRING,
    runtime: DataTypes.TIME,
    tagline: DataTypes.STRING,
    status: DataTypes.INTEGER,
    release_date: DataTypes.DATE,
    website: DataTypes.STRING,
    picture: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    freezeTableName: true,
  });

  Movie.associate = function(models) {
    models.Movie.belongsToMany(models.Genre, {
      through: models.MovieGenre,
      as: 'moviegenre',
      foreignKey: 'movie_id'
    });

    models.Movie.belongsToMany(models.User, {
      through: models.UserList,
      as: 'userlist',
      foreignKey: 'movie_id'
    });

    models.Movie.hasMany(models.UserMovie);
  };

  return Movie;
};
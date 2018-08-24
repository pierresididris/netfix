'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    name: DataTypes.STRING
  }, {
    freezeTableName: true
  });

  Genre.associate = function(models) {
    models.Genre.belongsToMany(models.Movie, {
      through: models.MovieGenre,
      foreignKey: 'genre_id',
      as: 'moviegenre',
    });
  };

  return Genre;
};
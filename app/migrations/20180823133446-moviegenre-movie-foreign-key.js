'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('MovieGenre', 'movie_id', {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: 'Movie',
          key: 'id'
        }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('MovieGenre', 'movie_id');
  }
};
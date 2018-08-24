'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('MovieGenre', 'genre_id', {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: 'Genre',
          key: 'id'
        }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('MovieGenre', 'genre_id');
  }
};
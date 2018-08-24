'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('UserList', 'movie_id', {
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
    return queryInterface.removeColumn('UserList', 'movie_id');
  }
};
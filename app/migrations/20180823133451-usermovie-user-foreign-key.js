'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('UserMovie', 'user_id', {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: 'User',
          key: 'id'
        }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('UserMovie', 'user_id');
  }
};
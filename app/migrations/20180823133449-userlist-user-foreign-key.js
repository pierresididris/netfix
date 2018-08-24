'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('UserList', 'user_id', {
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
    return queryInterface.removeColumn('UserList', 'user_id');
  }
};
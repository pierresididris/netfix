'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Movie', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      overview: {
        type: Sequelize.STRING
      },
      budget: {
        type: Sequelize.INTEGER
      },
      revenue: {
        type: Sequelize.STRING
      },
      runtime: {
        type: Sequelize.TIME
      },
      tagline: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.INTEGER
      },
      release_date: {
        type: Sequelize.DATE
      },
      website: {
        type: Sequelize.STRING
      },
      picture: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Movie');
  }
};
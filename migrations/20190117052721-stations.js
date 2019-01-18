'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('stations', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
      name: { type: Sequelize.STRING },
      geo: {
        type: Sequelize.GEOMETRY,
        allowNull: true,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('stations');
  }
};




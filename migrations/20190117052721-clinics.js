'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('clinics', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
      name: { type: Sequelize.STRING },
      address: { type: Sequelize.STRING },
      latitude: {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: { min: -90, max: 90 }
      },
      longitude: {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: { min: -180, max: 180 }
      },
      geo: {
        type: Sequelize.GEOMETRY,
        allowNull: true,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('clinics');
  }
};




'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.sequelize.query('CREATE EXTENSION postgis;')
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('DROP EXTENSION postgis;')
  }
}

'use strict';
var stationsJSON = require('../citi-stations.json');

module.exports = {
  up: (queryInterface, Sequelize) => {

    const seedData = stationsJSON.map(data => {
      const { id, name, created_at, updated_at, geo } = data
      const coordinateString = `${geo.coordinates[1]} ${geo.coordinates[0]}`
      return {
        id,
        name,
        created_at,
        updated_at,
        geo: Sequelize.fn('ST_GeomFromText', `POINT(${coordinateString})`)
      }
    });
  
    return queryInterface.bulkInsert('stations', seedData, {});
  },


  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('stations', null, {});
  }
};

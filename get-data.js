const { promisify } = require('util')
const fs = require('fs');
const axios = require('axios');

const writeFile = promisify(fs.writeFile)

axios.get('https://layer.bicyclesharing.net/map/v1/nyc/map-inventory')
.then((res) => {
  console.log(res.data.features.length);

  const parsedCitiStations = res.data.features
    .filter(station => station.properties.station)
    .map((station) => {
      return {
        id: station.properties.station.id,
        name: station.properties.station.name,
        created_at: new Date(),
        updated_at: new Date(),
        geo: station.geometry
      };
    })
  return writeFile('citi-stations.json', JSON.stringify(parsedCitiStations));
})
.then(() => {
  console.log('write succcessful!')
})
.catch((e) => {
  console.log(e.message);
})

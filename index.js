const db = require('./models');


// waiting for database connection
db.sequelize.authenticate()
  .then(() => db.Station.findAll())
  .then((stations) => {
    console.log(stations);
  })



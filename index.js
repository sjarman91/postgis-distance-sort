const db = require('./models');


// waiting for database connection
db.sequelize.authenticate()
  .then(() => db.Clinic.findAll())
  .then((clinics) => {
    console.log(clinics);
  })

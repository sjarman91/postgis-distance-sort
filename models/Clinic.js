// standard model format for sequelize

module.exports = (sequelize, DataTypes) => {
  const Clinic = sequelize.define('Clinic', {
    name: { type: DataTypes.STRING },
    address: { type: DataTypes.STRING },
    latitude: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: { min: -90, max: 90 }
    },
    longitude: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: { min: -180, max: 180 }
    },
    geo: {
      type: DataTypes.GEOMETRY,
      allowNull: true,
    },
  }, {
    tableName: 'clinics',
  });

  return Clinic;
};

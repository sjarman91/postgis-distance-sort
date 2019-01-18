// standard model format for sequelize

module.exports = (sequelize, DataTypes) => {
  const Station = sequelize.define('Station', {
    name: { type: DataTypes.STRING },
    geo: {
      type: DataTypes.GEOMETRY,
      allowNull: true,
    },
  }, {
    tableName: 'stations',
  });

  return Station;
};

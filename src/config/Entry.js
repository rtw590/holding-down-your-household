module.exports = (sequelize, DataTypes) => {
  const Entry = sequelize.define("Entry", {
    date: DataTypes.DATE,
    description: DataTypes.STRING,
    category: DataTypes.STRING,
    amount: DataTypes.FLOAT
  });

  return Entry;
};

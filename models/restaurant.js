"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      restaurant.belongsTo(models.user, { foreignKey: "userId" });
    }
  }
  restaurant.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      address: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: true },
      rating: { type: DataTypes.INTEGER, allowNull: true },
    },
    {
      sequelize,
      modelName: "restaurant",
    }
  );
  return restaurant;
};

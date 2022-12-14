"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      profile.belongsTo(models.user, { foreignKey: "userId" });
      profile.hasMany(models.photo, { foreignKey: "profileId" });
      profile.hasMany(models.restaurant, { foreignKey: "profileId" });
      profile.hasMany(models.news, { foreignKey: "profileId" });
    }
  }
  profile.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "profile",
    }
  );
  return profile;
};

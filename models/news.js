"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class news extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      news.belongsTo(models.profile, { foreignKey: "profileId" });
      news.belongsTo(models.user, { foreignKey: "userId" });
    }
  }
  news.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      address: { type: DataTypes.STRING, allowNull: false },
      content: { type: DataTypes.STRING, allowNull: false },
      end_date: { type: DataTypes.DATEONLY, allowNull: false },
    },
    {
      sequelize,
      modelName: "news",
    }
  );
  return news;
};

"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("profiles", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("photos", "profileId", {
      type: Sequelize.INTEGER,
      references: {
        model: "profiles",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("restaurants", "profileId", {
      type: Sequelize.INTEGER,
      references: {
        model: "profiles",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("news", "profileId", {
      type: Sequelize.INTEGER,
      references: {
        model: "profiles",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("profiles", "userId");
    await queryInterface.removeColumn("photos", "profileId");
    await queryInterface.removeColumn("restaurants", "profileId");
    await queryInterface.removeColumn("news", "profileId");
  },
};

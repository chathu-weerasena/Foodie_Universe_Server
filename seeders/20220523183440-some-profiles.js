"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "profiles",
      [
        {
          title: "Chathu's foodprints",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          title: "Kevin's foodprints",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          title: "Kate's foodprints",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
        },
        {
          title: "Lewis's foodprints",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 4,
        },
        {
          title: "Sav's foodprints",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 5,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("profiles", null, {});
  },
};

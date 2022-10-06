"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "restaurants",
      [
        {
          name: "Humphrey's Restaurant Utrecht",
          address: "Stadhuisbrug 3, 3511 KP Utrecht",
          description:
            "Absolutely love the atmosphere, the service and the most importantly the food!",
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
        },
        {
          name: "Restaurant Zaza's",
          address: "Daniël Stalpertstraat 103, 1072 XD Amsterdam",
          description:
            "Elevated takes on scallops, shrimp & rib eye, served in a sophisticated, intimate dining room.",
          rating: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          name: "Restaurant Bougainville",
          address: "Dam 27, 1012 JS Amsterdam",
          description:
            "High-end venue in Hotel TwentySeven, preparing avant-garde meat & seafood plates, plus sake & wine.",
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 4,
        },
        {
          name: "Water Tower (WT) Urban Kitchen",
          address: "Heuveloord 25a, 3523 CK Utrecht",
          description:
            "Unique tri-level eatery in a former water tower offering a modern tasting menu & a robust wine list.",
          rating: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 5,
        },
        {
          name: "Restaurant Zuiver Utrecht",
          address: "Krommewetering 51, 3543 AM Utrecht",
          description:
            "Went here for lunch, without checking the menu. Noticed they have no vegan options.",
          rating: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("restaurants", null, {});
  },
};

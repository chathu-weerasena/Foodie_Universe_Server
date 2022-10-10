const { Router } = require("express");
const auth = require("../auth/middleware");
const router = new Router();

const Restaurants = require("../models").restaurant;
const Users = require("../models").user;

//01- Endpoint for the "list of available retaurants" sorted by "CreatedAt".
router.get("/", async (req, res, next) => {
  try {
    const restaurants = await Restaurants.findAll({
      include: { model: Users },
    });

    res.status(200).send(restaurants);
    //console.log("Restaurants", restaurants);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;

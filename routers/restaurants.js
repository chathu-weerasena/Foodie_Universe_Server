const { Router } = require("express");
const auth = require("../auth/middleware");
const router = new Router();

const Restaurants = require("../models").restaurant;

//01- Endpoint for the "list of available photos" sorted by "CreatedAt".
router.get("/", auth, async (req, res, next) => {
  try {
    const restaurants = await Restaurants.findAll();

    res.status(200).send(restaurants);
    //console.log("Restaurants", restaurants);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;

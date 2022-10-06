const { Router } = require("express");
const auth = require("../auth/middleware");
const router = new Router();

const Photos = require("../models").photo;

//01- Endpoint for the "list of available photos" sorted by "CreatedAt".
router.get("/", auth, async (req, res, next) => {
  try {
    const photos = await Photos.findAll();

    res.status(200).send(photos);
    //console.log("Photos", photos);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;

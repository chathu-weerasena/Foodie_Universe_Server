const { Router } = require("express");
const auth = require("../auth/middleware");
const router = new Router();

const Photos = require("../models").photo;

//01- Endpoint for the "list of available photos" sorted by "CreatedAt".
router.get("/", async (req, res, next) => {
  try {
    const photos = await Photos.findAll();

    res.status(200).send(photos);
    //console.log("Photos", photos);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//Endpoint for the "Add photo feature"
router.post("/:id", auth, async (req, res, next) => {
  const { imageUrl, description } = req.body;
  if (!imageUrl || !description) {
    res.status(400).send("We would like to post a picture and a description");
  } else {
    const newPhoto = await Photos.create({
      imageUrl,
      description,
      userId: req.user.id,
    });
    res.status(201).send({ photo: newPhoto });
    console.log("New Photo", newPhoto);
  }
});

module.exports = router;

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

//Endpoint for " Delete a photo"
router.delete("/:id", auth, async (req, res, next) => {
  try {
    const { id } = req.params;
    const photo = await Photos.findByPk(id);
    if (!photo) {
      return res.status(404).send("Photo is no longer available");
    }
    if (photo.userId !== req.user.id) {
      return res
        .status(401)
        .send("You do not have permission to perform this action");
    }
    await photo.destroy();
    res.send("Deleted", id);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//End point to edit an uploaded post in "photo feed"
router.patch("/:id", auth, async (req, res, next) => {
  const { id } = req.params;
  const { imageUrl, description } = req.body;

  const photo = await Photos.findByPk(id);
  if (!photo.userId === req.user.id) {
    return res
      .status(403)
      .send("You do not have permission to perform this action");
  }

  const updatedPhoto = photo;
  updatedPhoto.update({
    imageUrl: imageUrl,
    description: description,
  });
  return res.status(200).send({ photo: updatedPhoto });
});

module.exports = router;

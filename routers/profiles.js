const { Router } = require("express");
const auth = require("../auth/middleware");
const router = new Router();

const Users = require("../models").user;
const Photos = require("../models").photo;
const Restaurants = require("../models").restaurant;
const News = require("../models").news;

module.exports = router;

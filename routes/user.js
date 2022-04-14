const express = require("express");
const { getUserById } = require("../controllers/user.controller");
const isAuth = require("../middlewares/passport-setup");

const Router = express.Router();

Router.get("/:userid", getUserById);

module.exports = Router;
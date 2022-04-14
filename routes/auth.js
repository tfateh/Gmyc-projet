const express = require("express");
const { userRegister, userLogin } = require("../controllers/auth.controller");
const isAuth = require("../middlewares/passport-setup");
const {
  registerRules,
  validator,
  loginRules,
} = require("../middlewares/validator");

const Router = express.Router();


// POST  "http://localhost:7500/auth/register"
// @desc  : user register

Router.post("/register", registerRules(), validator, userRegister);


// POST  "http://localhost:7500/auth/login"
// @desc  : user login

Router.post("/login", loginRules(), validator, userLogin);


// GET "http://localhost:7500/auth/currentUser"
// @desc get authenticated user

Router.get("/currentUser", isAuth(), (req, res) => {
  res.send(req.user);
});

module.exports = Router;
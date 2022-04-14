const express = require("express");
const {
  addProduct,
  deleteProduct,
  getProductById,
  getAllProducts,
  updateProduct,
} = require("../controllers/product.controller");
const isAuth = require("../middlewares/passport-setup");

const Router = express.Router();

/**************** *  http://localhost:7500/product/addProduct*******/


Router.post("/addProduct", isAuth(), addProduct);

/************** * http://localhost:7500/product/updateProduct/:idProduct *****/

Router.put("/updateProduct/:idProduct", isAuth(), updateProduct);

/******  http://localhost:7500/product/deleteProduct/:idProduct***********/


Router.delete("/deleteProduct/:idProduct", isAuth(), deleteProduct);

/********* * http://localhost:7500/product/products **********/

Router.get("/products", isAuth(), getAllProducts);

/*************  http://localhost:7500/product/:id***************/


Router.get("/:id", getProductById);

module.exports = Router;
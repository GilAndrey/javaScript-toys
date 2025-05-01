const express = require("express");
const route = express.Router();
const homeController = require("./src/controller/homeController");
const contatoController = require("./src/controller/contratoController");

function meuMiddleware(req, res, next) {
  req.session = { nome: "Gil Andrey", sobrenome: "Moraes" };
  console.log();
  console.log("passei no meu middleware");
  console.log();
  next();
}

// Rotas da home -> Proximos paramentros são middlewares
route.get("/", homeController.paginaInicial);
route.post("/", homeController.trataPost);

// Rotas de contato
route.get("/contato", contatoController.paginaInicial);

module.exports = route;

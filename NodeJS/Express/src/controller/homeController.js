// Utilização do HomeController
// const HomeModel = require("../models/homeModel.js");

// .create -> Utilizado para criar objetos para o banco de dados
// HomeModel.create({
//   titulo: "Outro titulo de teste",
//   descricao: "Outra descrição",
// })
//   .then((dados) => console.log(dados))
//   .catch((e) => console.log(e));

exports.paginaInicial = (req, res) => {
  res.render("index");
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};

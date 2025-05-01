// Utilização do HomeController

exports.paginaInicial = (req, res) => {
  console.log("Passando pelo cliente");
  res.render("index");
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};

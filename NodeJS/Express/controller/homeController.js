// Utilização do HomeController

exports.paginaInicial = (req, res) => {
  res.send(`
        <form action="/" method="POST">
        Nome do cliente: <input type="text" name="name">
        Outro Campo: <input type="text" name="aquioutrocampo">
        <button>Enviar</button>
        </form>
    `);
};

exports.trataPost = (req, res) => {
  res.send("Sou sua nova rota de post");
};

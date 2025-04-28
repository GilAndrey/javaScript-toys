const fs = require("fs").promises;

module.exports = (caminho, dados) => {
  // Esse codigo cria um arquivo "Econtrado fora da pasta modules"
  fs.writeFile(caminho, dados, { flag: "w" });
};

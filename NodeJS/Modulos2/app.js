// const Cachorro = require("./B/C/T/mod2");

// const Cachorro2 = require("./z/modulo2");

// Para entrar em uma pasta utiliza ./
// Para sair de uma pasta utiliza ../

// Utilizando o resolve com __dirname para gerenciar o caminho das pastas,
// Abaixo está voltando as pastas
const path = require("path");
console.log(path.resolve(__dirname, "..", "..", "arquivos", "imagens"));

// Ele mostra o caminho inteiro até o app.js
console.log(__filename);
// Esse mostra as pastas do caminho
console.log(__dirname);

const cachorrin = require("./z/modulo2");
const c1 = new cachorrin("Negão");

c1.latir();

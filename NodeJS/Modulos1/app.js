// Éssa é a maneira utilizada para importaçao do outro modulo utilizando -> require()
// const mod1 = require("./mod1")
// console.log(mod1.showName())

// E para a importação de apenas uma chave especifica utiliza o dot no final "."\
// # const f1 = require("./mod1").showName;
// console.log(falaNome());

// Trabalha igual a importação do ES6, passando apenas o que eu desejo
// # const { name, lastname, showName } = require("./mod1");

const path = require("path");
const axios = require("axios");
const { Pessoa } = require("./mod1");

// axios("https://api.github.com/users/GilAndrey")
//   .then((response) => console.log(response.data))
//   .catch((e) => console.log(e));

const p1 = new Pessoa("Maisa");

console.log(p1);

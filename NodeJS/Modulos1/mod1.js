const name = "Gil Andrey";
const lastname = "Moraes";

const showName = () => name + " " + lastname;

// Módo para exportar coisas, de váriaveis até função
// module.exports.name = name;
// module.exports.lastname = lastname;
// module.exports.showName = showName;

// Outro módo para fazer Exports\

// exports.name = name;
// exports.lastname = lastname;
// exports.showName = showName;

// E tambem é possivel exportar utilizando this. ex abaixo:
// this.something = "What i want!";

// console.log(exports);

// Exportação da classe Pessoa
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

// Caso deseje exportar varias chaves ao mesmo tempo é utilizavel o module.exports
module.exports = { name, lastname, Pessoa };

// Não funciona utilizando apenas exports.

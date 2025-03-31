// Criando um User, utilizando da maneira como se fosse um objeto.

const pessoa1 = new Object();
pessoa1.nome = "Gil Andrey";
pessoa1.sobrenome = "Moraes";
pessoa1.idade = 21;
pessoa1.falarNome = function () {
  return `${this.nome} está falando seu nome`;
};

pessoa1.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

// console.log(pessoa1.getDataNascimento());

// for (let chave in pessoa1) {
//   console.log(pessoa1[chave]);
// }

// Factory function / Constructor function /  Classes

// Factory function ->
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}

const factoryP1 = criaPessoa("GIl", "Andrey");
// console.log(factoryP1.nomeCompleto());

// Constructor function
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  // Object.freeze -> serve para travar o valor do objeto
  // Aki faz não poder alterar mais nada, apenas pode manipular antes do Object.freeze()
  Object.freeze(this);

  // return this; // {nome, sobrenome}
}

// A palavra new faz  {} <- this
const constructorP1 = new Pessoa("Gil", "Moraes");

delete constructorP1.nome;

/**
 *  Object.defineProperty() - defineProperties()
 *  um método poderoso que permite definir ou modificar propriedades em um objeto com controle total sobre seu comportamento.
 *  Ele é essencial para:
 *  Criar propriedades não enumeráveis (que não aparecem em loops como for...in)
 *  Definir getters e setters personalizados
 *  Controlar se a propriedade pode ser alterada ou deletada
 *  */

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  // this.estoque = estoque;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // <- Mostra a Chave
    value: estoque, // <- É o valor da chave
    writable: false, // <- Pode alterar o valor ou não
    configurable: true, // <- Pode re-configurar o Object.defineProperty, e tambem apagar usando delete. (Se estiver true)
  });

  // Utilizando defineProperties

  Object.defineProperties(this, {
    nome: {
      enumerable: true, // mostra a chave
      value: nome, // valor
      writable: true, // Pode alterar
      configurable: true, // configuravel
    },
    preco: {
      enumerable: true,
      value: preco,
      writable: true,
      configurable: true,
    },
  });
}

const p1 = new Produto("Camisa", 20, 3);

// -> Mostra um array com as chaves inumeraveis
// console.log(Object.keys(p1));

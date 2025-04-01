// produto -> aumento, pode ter
// Camiseta pode ter Cor, caneca pode ter Material

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function (valor) {
  this.preco += valor;
};

Produto.prototype.desconto = function (valor) {
  this.preco -= valor;
};

// Produto.call serve para Linkar a Camiseta com o Produto, porém não ligou os prototypes.
function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}

Camiseta.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual * 100);
};

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: false,

    get: function () {
      return estoque;
    },
    set: function (valor) {
      if (typeof valor !== "number") return;
      estoque = valor;
    },
  });
}
// Aki cria um objeto vazio e seta o prototype Produto
Caneca.prototype = Object.create(Produto.prototype);
// Seta para a caneca apontar para a caneca e não para o produto
Caneca.prototype.constructor = Caneca;

// Aki cria um objeto vazio e seta o prototype Produto
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

const produto = new Produto("teste", 111);
const camiseta = new Camiseta("Regata", 10, "Preta");
const caneca = new Caneca("caneco", 15, "plastico", 200);

// camiseta.aumento(10);

console.log(caneca.estoque);
console.log(caneca);
console.log(camiseta);
console.log(produto);

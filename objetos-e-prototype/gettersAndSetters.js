function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;

  let estoquePrivado = estoque;
  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: true,
    get: function () {
      return estoque;
    },
    set: function (valor) {
      if (typeof valor !== "number") {
        throw new TypeError("Bad Number");
      }
      estoquePrivado = valor;
    },
  });
}

function criarProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      valor = valor.replace("coisa", " ");
      nome = valor;
    },
  };
}

// const p1 = new Produto("Camiseta", 20, 3);

const p2 = criarProduto("Camiseta");

p2.nome = "Qualquer coisa";
console.log(p2.nome);

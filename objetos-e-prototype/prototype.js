/*
JavaSript é baseado em pretótipos para passar propriedades e métodos
de um objeto para outro.

Definião de protótipo:
Protótipo é o termo usado para se referir ao que foi criado pela 
primeira vez, servindo de modelo ou molde para futuras produçoes.

-> Documentação.
Todos os objetos tem uma referência interna para um protótipo (__proto__)
que vem da propriedade prototype da função construtora que foi usada para
criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor
do JS vai tentar encotrar este membro no próprio objeto e depois a cadeia
de protótipos é usada até o topo (null) até encotrar (ou não) tal membro
 */

// Construtora -> Molde (seria como classes)
function Pessoas(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  //   this.nomeCompleto = () => "Original: " + this.nome + " " + this.sobrenome;
}

// Pessoa.prototype === pessoa.1.__proto__

// Criando o prototype
Pessoas.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
};

// Instância
const pessoa1 = new Pessoas("Gil Andrey", "M."); // <- Pessoa = Função construtora
const pessoa2 = new Pessoas("Maria", "A."); // <- Pessoa = Função construtora
const data = new Date(); // <- Date = Constructor function

// console.dir(pessoa1);
// console.dir(data);

// Manipulando Prototypes

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

const p1 = new Produto("Camisa", 50);

const p2 = {
  nome: "Caneca",
  preco: 15,
};
// Setando o p2 como prototype do Produto.prototype;
Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);

const p3 = Object.create(Produto.prototype, {
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 99,
  },
  tamanho2: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 42,
  },
});

p3.aumento(10);
console.log(p3);

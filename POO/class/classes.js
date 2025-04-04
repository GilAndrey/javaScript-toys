// Para criar classe utiliza-se class
// Utilização de Getters and Setters
class User {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }

  get completeName() {
    return this.name + " " + this.lastname;
  }

  set completeName(valor) {
    valor = valor.split(" ");
    this.nome = valor.shift();
    this.lastname = valor.join();
  }
}

// Função construtora com as mesmas funcionalidades que a classe
function User2(name, lastname) {
  this.name = name;
  this.lastname = lastname;
}

User2.prototype.speak = function () {
  console.log(`${this.name} now speaking`);
};

const p1 = new User("Gil Andrey", "Moraes");
const p2 = new User2("Maria", "Blue");

p1.completeName = "Gil Andrey Moraes";

console.log(p1.name);
console.log(p1.lastname);

// Getters and Setters
// Dado primitivo = Symbol -> Gera dados aleatorios tipo ID

const _velocidade = Symbol("velocidade");

class Carro {
  constructor(nome, velocidade) {
    this.nome = nome;
    this[_velocidade] = 0;
  }

  set velocidade(valor) {
    console.log("SETTER");
    if (typeof valor !== "number") return;
    if (valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor;
  }

  get velocidade() {
    console.log("GETTER");
    return this[_velocidade];
  }

  acelerar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }

  freiar() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}

// const carro1 = new Carro("Fusca");

// carro1.velocidade = 2;

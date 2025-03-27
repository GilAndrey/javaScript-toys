// Funcao construtora -> Objetos
// Função fabrica -> objetos
// Construtora ->  Pessoa (new)

function User(name, lastname) {
  // Privadas
  const ID = 147289;
  const methodIntern = function () {};

  // Atributos ou metodos públicos.
  this.name = name;
  this.lastname = lastname;

  this.method = function () {
    console.log(this.name + ": Sou um método");
  };
}

const p1 = new User("Gil Andrey", "Moraes");
const p2 = new User("Luiza", "Oliveira");

p2.method();

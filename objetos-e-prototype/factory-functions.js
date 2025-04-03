// Vantagens da Factory Function

const falar = {
  falar() {
    console.log(`${this.nome} está falando`);
  },
};

const comer = {
  comer() {
    console.log(`${this.nome} está comendo`);
  },
};

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo`);
  },
};

// Existe essa maneira de acomplar o prototype sem precisar criar um codigo gigante
// const pessoaPrototype = { ...falar, ...comer, ...beber };

// E tambem existe essa maneira.
const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

const p1 = criaPessoa("Gil Andrey", "Moraes");
const p2 = criaPessoa("Maria", "Green");
console.log(p2);

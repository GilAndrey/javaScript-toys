// Factory fuction (Função fábrica);

function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,

    //Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    //Setter
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
      console.log(valor);
    },

    fala(assunto) {
      return `${this.nome} está ${assunto}.`;
    },

    altura: altura,
    peso: peso,

    // Getter
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}
const p1 = criaPessoa("Gil Andrey", "Moraes", 1.76, 65);
const p2 = criaPessoa("João", "Otávio", 1.9, 80);
const p3 = criaPessoa("Luiz", "Otávio", 1.5, 110);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);

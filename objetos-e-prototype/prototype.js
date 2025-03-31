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

console.dir(pessoa1);
console.dir(data);

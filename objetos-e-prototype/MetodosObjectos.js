// Obeject.assing(des, any) ->  um método do JavaScript que copia as propriedades próprias enumeráveis de um ou mais objetos de origem para um objeto de destino. Ele retorna o objeto de destino modificado.
// Object.getOwnPropertyDescriptor(o, 'prop') ... (spread)

/*
 * Já vimos
 *  Object.keys (retorna chaves)
 *  Object.freeze  (congela o objeto)
 *  Object.defineProperties (define  varias propriedades)
 *  Object.defineProperty (define uma propriedade)
 */

// Essa é a maneira de duplicar as variaveis e alterar os valores sem que alterem os dois
const produto = { nome: "Caneca", preco: 1.8, material: "porcelana" };
// Freeza o produto e não pode ser alterado.
// Object.freeze(produto);

// Uma maneira de criar um outro objeto puxando do produto
const outraCoisa = {
  ...produto,
  material: "Porcelana",
};

// Outra maneira de criar um objeto.
const caneca = Object.assign({}, produto, { material: "madeira" });

// Maneira menos recomendavel, porem pode ser util
const canecaOutraManeira = { nome: produto.nome, preco: produto.preco };

outraCoisa.nome = "Camisa";
outraCoisa.preco = 1;

// Object.keys retorna as chaves do produto (nome e preço)
console.log(Object.keys(produto));

// Para editar a propriedade do produto -> Logo abaixo
Object.defineProperty(produto, "nome", {
  writable: false,
  configurable: false,
});
// Object.getOwnPropertyDescriptor, mostra as propriedades do produto, (Value: 'Caneca', Writable: False,  enumerable: true, configurable: false)
// console.log(Object.getOwnPropertyDescriptor(produto, "nome"));
produto.nome = "Outra coisa";

// Object.entries, retorna um Array de arrays, onde esses arrays contem as chaves (valor, preco. material) do objeto
// console.log(Object.entries(produto));

for (let [chave, valor] of Object.entries(produto)) {
  console.log(chave, valor);
}

// Valor por referencia
// nulle fica de exemplo
const nulle = ["arrayNull", "ArrayNull", "ArrayNull"];
const nomes = ["Gil", "Andrey", "Moraes", "Maria", "Joana"];

// pop() = remove o ultimo elemento do Array -> Mais utilizado
const removido = nulle.pop();

// push() = Adiciona um elemento no Array - ultima posição -> Mais utilizado
nulle.push("Teste");
nulle.push("Da silva");

// shift() = remove o primeiro elemento do Array
const removido2 = nulle.shift();

// unshift() - Adiciona um elemeneto no Array - primeira posição
nulle.unshift("GilAndrey");
nulle.unshift("TestTest");

// retorna os elementos dos indices desejados
// nulle = nomes.slice(0, 3);

// split(), transforma a String em Array, separando pelo espaço " "
const splitString = "GIl Andrey Moraes";
const splitToArray = splitString.split(" ");

// join(), transforma o Array em String -> o contrario do split();
const joinArray = ["Gil", "Andrey", "Moraes"];
const joinToString = joinArray.join(" ");

// splice() ->
//                      -5      -4       -3         -2        -1
//                       0       1        2          3         4
const nomesSplice = ["Maria", "João", "Eduardo", "Gabriel", "Gil"];

// Simulando o pop usando splice -> Elemento 3 e 1 item removido e está substituindo por a String colocada = "Luiz";
// splice.splice(indice, delete, elem1, elem2, elem3) -> exemplo de como funciona
const spliceRemovidos = nomesSplice.splice(3, 1, "Luiz");
const spliceAdicionados = nomesSplice.splice(5, 0, "Teste");

// Concatenando Arrays - Utilizando .concat(), e possui o método (...a1,)
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

// const a3 = a1.concat(a2, [7, 8, 9], "Gil");

const a3 = [...a1, "Gil", ...a2, ...[7, 8, 9]];
// console.log(a3);

// Filter, map, reduce.

/*
 *  Filter -> Requer que voce retorne Boolean,
 *  filter sempre ira retorna um array, com a mesma quantidade de elementos ou menos.
 *  filter(valor, indice, Array);
 */

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Este código está retornando os números acima de 10 -> utilizando Arrow function
const numerosFiltrados = numbers.filter((valor) => valor > 10);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const pessoas = [
  { nome: "Gil Andrey", idade: 21 },
  { nome: "Mari", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

// Função que filtra pessoas que tem 5 ou mais letras
const pessoasNomeGrande = pessoas.filter((obj) => obj.nome.length >= 5);

// Função que filtra as pessoas com ou mais de 50 anos
const idadeAlta = pessoas.filter((obj) => obj.idade >= 50);

// Função que filtra pessoas com a ultima letra do nome "A"
const nomeTerminaComA = pessoas.filter((obj) => {
  return obj.nome.toLowerCase().endsWith("a");
});

console.log(nomeTerminaComA);

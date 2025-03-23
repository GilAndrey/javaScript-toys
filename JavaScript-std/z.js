// ARQUIVO PARA GUARDAR OS CODIGOS POSTERIORES
// //  .filter .map .find .findIndex .reduce .some .every

// const elementos = [
//   { tag: "p", text: "Frase 1" },
//   { tag: "div", text: "Frase 2" },
//   { tag: "footer", text: "Frase 3" },
//   { tag: "section", text: "Frase 4" },
// ];

// const container = document.querySelector(".container");
// const div = document.createElement("div");

// for (let i = 1; i < elementos.length; i++) {
//   let { tag, text } = elementos[i];
//   let tagCreated = document.createElement(tag);
//   let textCreated = document.createTextNode(text);

//   tagCreated.appendChild(textCreated);
//   div.appendChild(tagCreated);
// }

// container.appendChild(div);

// Utilizazndo o 'For in' <----------------------

// const user = {
//   name: "Gil Andrey",
//   lastname: "Moraes",
//   age: 21,
//   address: {
//     city: "araripina",
//     code: 2139,
//     number: 123,
//   },
// };

// // i = Index

// for (let key in user) {
//   console.log(user[key]);
// }

// Utilizazndo o 'For of' <---------------------- (O of é mais recomendado para funções que possui Arrays sem valores "iterable")

// For classico - Retorna com interaveis (arrays ou strings)
// For in - Retorna o indice ou chave (string, array ou objeto)
// For of - Retorna o valor em si (iteráveis, arrays ou Strings)

// const nomes = ["Gil", "Andrey", "Moraes"];

// for (let i in nomes) {
//   console.log(nomes[i]);
// }

// console.log("##########");

// for (let i of nomes) {
//   console.log(i);
// }

// console.log("##########");

// nomes.forEach(function (valor, indice, array) {
//   console.log(valor, indice, array);
// });

// const paragrafos = document.querySelector(".paragrafos");
// const ps = document.querySelectorAll("p");

// const estilosBody = getComputedStyle(document.body);
// const backgroundColorBody = estilosBody.backgroundColor;

// for (let p of ps) {
//   p.style.backgroundColor = backgroundColorBody;
//   p.style.color = "#FFFFFF";
// }

// function randomNumber(min, max) {
//   const r = Math.random() * (max - min) + min;
//   return Math.floor(r);
// }

// const min = 1;
// const max = 50;

// let rand = 10;

// while (rand !== 10) {
//   rand = randomNumber(min, max);
//   console.log(rand);
// }

// do {
//   console.log(rand);
// } while (rand != 10);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i of numbers) {
//   if (i === 2) {
//     console.log("o 2 so que com letras em volta");
//     continue;
//   }
//   console.log(i);

//   if (i === 7) {
//     console.log("7 foi encontrando e então irei partir");
//     break;
//   }
// }

// Faça uma função que receba dois numeros e retorne o maior;
// const max2 = (a, b) => (a > b ? a : b);
// console.log(max2(10, 4));

// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number)
// Retorne True se a imagem estiver no modo paisagem.
// function ePaisagem(largura, altura) {
//   return largura > altura;
// }
// const ePaisagem2 = (largura, altura) => largura > altura;
// console.log(ePaisagem(860, 900));
// console.log(ePaisagem2(1920, 960));

// Escreva uma função que recebe um número e retorne o seguinte:
// Número é divisivel por 3 = Fizz
// Número é divisivel por 5 = Buzz
// Número é divisivel 3 e 5 = FizzBuzz
// Número não é divisivel por 3 e 5 = Retorna o proprio numero
// Checar se o numero é ralmente um numero
// Use a função com numeros de 0 a 100 ---> while

// function retornaHora(date) {
//   if (date && !(date instanceof Date)) {
//     throw new TypeError("Esperando uma Data");
//   }
//   if (!date) {
//     date = new Date();
//   }

//   return date.toLocaleTimeString("pt-BR", {
//     hour12: false,
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//   });
// }

// try {
//   const hora = retornaHora(11);
//   const dataQualquer = new Date("2025-");
//   console.log(hora);
// } catch (err) {
//   //tratar erro
//   console.log(err);
// } finally {
//   console.log("Bom dia");
// }

// function mostraHora() {
//   let data = new Date();
//   return data.toLocaleTimeString("pt-BR", { hour12: false });
// }

// function funcaoDoIntervalo() {
//   console.log(mostraHora());
// }

// const timer = setInterval(function () {
//   console.log(mostraHora());
// }, 1000);

// setTimeout(function () {
//   clearInterval(timer);
// }, 4000);

// setTimeout(function () {
//   console.log("5 segundos passados");
// }, 4000);

// const people = {
//   name: "Gil Andrey",
//   lastName: "Moraes",
//   age: 21,
//   address: {
//     street: "Avenida dos testes",
//     number: 123,
//   },
// };

// const { name, ...rest } = people;

// console.log(name,rest);

// const name = "Gil Andrey";
// const age = 21;

// const user = {
//   name,
//   age,
// };

// console.log(user);

//Optional chaining

// const user = {
//   name: "Gil Andrey",
//   lastName: "Moraes",
//   age: 21,
//   address: {
//     street: "Avenida dos testes",
//     number: 177,
//     zip: {
//       code: "849129",
//       city: "Recife",
//     },
//     showFullAddress() {
//       return "ok";
//     },
//   },
// };

// const key = "state";

// console.log(user.address[key]);

// Métodos de array Map();

const array = [1, 2, 3, 4, 5];

// for (const i of array) {
// }

// console.log("-------------------");

// array.forEach((item) => {
//   console.log(item);
// });

// console.log("-------------------");

// const novoArray = array.map((item) => {
//   if (item % 2 === 0) {
//     return item * 10;
//   }
//   return item;
// });

// console.log(novoArray);

// map, filter, every, some, find, findIndex, reduce <-- Todos os metodos importantes para a Lista / Array

// const newArray = array
//   .filter((item) => item % 2 !== 0)
//   .map((item) => item * 10);

// const everyItemsIsNumber = array.every((item) => {
//   return typeof item === "number";
// });

// console.log(everyItemsIsNumber);

// const peloMenosUmItemNaoENumber = array.some((item) => {
//   return typeof item !== "number";
// });

// console.log(peloMenosUmItemNaoENumber);

// const par = array.findIndex((x) => x % 2 === 0);
// console.log(par);

// const soma = array.reduce((acc, item) => {
//   return acc + item;
// }, 0);

// console.log(soma);

// Template Literals

// Promises ---- .then .catch

// fetch("https://api.github.com/users/dwa7daw7")
//   .then((response) => {
//     return response.json();
//   })
//   .then((body) => {
//     console.log(body);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Finalizado");
//   });

async function buscaDadosNoGitHub() {
  try {
    const response = await fetch("https://api.github.com/users/gilandrey");
    const body = await response.json();

    return body.name;
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Finalizado!");
  }
}
buscaDadosNoGitHub().then((name) => {
  console.log(name);
});

Valorant = Impar;
Fracry = par;

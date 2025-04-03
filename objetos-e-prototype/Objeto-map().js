const pessoas = [
  { id: 3, nome: "Gil Andrey" },
  { id: 1, nome: "Helena" },
  { id: 2, nome: "Maria" },
];

// const novasPessoas = {};
// Possui essa maneira de pegar unicamente o Id da pessoa
// for (const { id, nome } of pessoas) {
//   novasPessoas[id] = { id, nome };
// }

// E dessa maneira "Caso possua mais chaves"
// for (const pessoa of pessoas) {
//   const { id } = pessoa;
//   novasPessoas[id] = { ...pessoa };
// }

// Dessa maneira matém os Id da maneira que foi colocada
const novasPessoas = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa });
}

// novasPessoas.keys() -> pega as chaves
// novasPessoas.value() -> pega os valores
// for (const pessoas of novasPessoas.values()) {
//   console.log(pessoas);
// }

novasPessoas.delete(2);
console.log(novasPessoas);

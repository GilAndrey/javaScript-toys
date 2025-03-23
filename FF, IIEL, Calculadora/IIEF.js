/**
 * Função para aleatorizar um numero dentre 1000 e 3000
 * onde 1000 consta como 1 segundo e assim com 3000.
 * Logo em seguida, estou brincando com as funções de Callback
 * que significa "Puxar na ordem mesmo que esteja atrasado"
 */

// function rand(min = 1000, max = 3000) {
//   const number = Math.random() * (max - min) + min;
//   return Math.floor(number);
// }

// console.log(rand());

// function f1(callback) {
//   setTimeout(function () {
//     console.log("f1");
//     if (callback) callback();
//   }, rand());
// }
// function f2(callback) {
//   setTimeout(function () {
//     console.log("f2");
//     if (callback) callback();
//   }, rand());
// }
// function f3(callback) {
//   setTimeout(function () {
//     console.log("f3");
//     if (callback) callback();
//   }, rand());
// }

// f1(f1CallBack);

// function f1CallBack() {
//   f2(f2CallBack);
// }

// function f2CallBack() {
//   f3(f3CallBack);
// }
// function f3CallBack() {
//   console.log("Hello world!");
// }

// IIFE => Immediately invoked function expression
(function (idade, peso, altura) {
  const sobrenome = "Moraes";
  function criarNome(name) {
    return name + " " + sobrenome;
  }

  function falaNome() {
    console.log(criarNome("Gil Andrey"));
  }

  falaNome();

  console.log(idade, peso, altura);
})(21, 65, 1.76);

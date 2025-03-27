function recur() {
  // Contador comun, so pra ter.
  let contador = 0;
  while (contador <= 10) {
    console.log(contador);
    contador++;
  }
}

/*
 * Recursiva, apenas uma função que se chama de volta.
 * Exemplo abaixo
 */

// function recursiva(max) {
//   console.log(max);
//   if (max >= 10) return;
//   max++;

//   recursiva(max);
// }

// recursiva(0);

/*
 *  Função geradora, função que é feita para possuir pausas
 *  e o proprio dev chamar. Yield = return, yield está retornando os valores
 *  e para passar para o proximo valor é necessario o next();
 */

function* geradora1() {
  // Código para retorna o Valor 1
  yield "Valor 1";
  // Código para retorna o Valor 2
  yield "Valor 2 ";
  // Código para retorna o Valor 3
  yield "Valor 3 ";
}

const g1 = geradora1();

// Next é um function dentro do "*", para chamar o proximo Yield
// console.log(g1.next());

// Gerador infinito
function* geradora2() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
}

// const g2 = geradora2();
// console.log(g2.next().value);
// console.log(g2.next().value);

function* geradora3() {
  yield 0;
  yield 1;
  yield 2;
}

// Utilizando o yield*, ele continua a função do geradora3(); -> yield* geradora3();
function* geradora4() {
  yield* geradora3();
  yield 3;
  yield 4;
  yield 5;
}

const g4 = geradora4();
for (let valor of g4) {
  console.log(valor);
}

/*
 * Tambem é possivel fazer o yield com functions, podendo chamalas com next.
 *  Quando colocado return, ele cancela o Yield que vai abaixo.
 */
function* geradora5() {
  yield function () {
    console.log("Vim do y1");
  };
  // ...

  // Se possuir return o codigo abaixo não ira ser iniciado
  return function () {
    console.log("Vim do return");
  };

  yield function () {
    console.log("vim do y2");
  };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();

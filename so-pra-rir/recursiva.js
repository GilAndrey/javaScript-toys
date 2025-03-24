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

function recursiva(max) {
  console.log(max);
  if (max >= 10) return;
  max++;

  recursiva(max);
}

recursiva(0);

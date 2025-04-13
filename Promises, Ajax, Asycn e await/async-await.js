// Fuction para retorna numero aleatorio

// Requisições sincronas -> são coisas que da para fazer de imediado
// Requisições assicronas -> Quando não tem de imediato. / Precisar aguardar pela resposta

function rand(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * max - min + min);
}

function esperaAI(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("CAIU NO ERRO");
        return;
      }
      resolve(msg.toUpperCase() + " - Passei na promise");
      return;
    }, tempo);
  });
}

// Utilizando .then -> Melhora o codigo porém ainda mantem verboso

// esperaAI("Fase 1", rand())
//   .then((valor) => {
//     console.log(valor);
//     return esperaAI("Fase 2", rand()).then((valor) => {
//       console.log(valor);
//       return esperaAI("Fase 3", rand())
//         .then((valor) => {
//           console.log(valor);
//           return valor;
//         })
//         .then("Terminamos na fase", valor);
//     });
//   })
//   .catch((e) => console.log(e));

// Utilizando async e await
async function executa() {
  try {
    const fase1 = await esperaAI("Fase 1", rand());
    console.log(fase1);

    const fase2 = await esperaAI("Fase 2", rand());
    console.log(fase2);

    const fase3 = await esperaAI(3, rand());
    console.log(fase3);

    console.log("Terminamos na fase 3");
  } catch (e) {
    console.log(e);
  }
}
// executa();

const teste2 = esperaAI("qlq", 5000);
console.log(teste2);

/*
Estados -
pending. -> Que foi executada e ainda não retornou o valor.  
FullFilled ->  Resolviad
Rejected -> Uma promise Rejeitada
*/

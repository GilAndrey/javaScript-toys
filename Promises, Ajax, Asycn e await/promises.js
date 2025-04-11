// Fuction para retorna numero aleatorio
function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * max - min + min);
}

// cb -> call back
function esperaAiComCallBack(msg, tempo, cb) {
  setTimeout(() => {
    console.log(msg);
    if (cb) cb();
  }, tempo);
}

// Promise -> Evita a criação de Call Back
/*
    Esse é o famoso CallBack - bem bagunçado e arvore de natal
    esperaAI("Frase teste1", rand(1, 3), function () {
    esperaAI("Frase teste2", rand(1, 3), function () {
        esperaAI("Frase teste3", rand(1, 3));
    });
    });
*/

function esperaAI(msg, tempo) {
  // Resolve = quando o codigo executa com sucesso: "Resolve ele pra mim"
  // Reject = Quando o codigo da erro: "Rejeita ele pra mim"
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

// .then() só sera executado quando o Resolve() funcionar
// .then() possui algumas funcionalidades - Gemini, Gpt ou deepseek pode explicar melhor.

// esperaAI("Conexão com o BD", rand(1, 3))
//   .then((resposta) => {
//     console.log(resposta);
//     return esperaAI("Buscando dados da BASE", rand(1, 3));
//     f;
//   })
//   .then((resposta) => {
//     console.log(resposta);
//     return esperaAI("Frase 3", rand(1, 3));
//   })
//   .then((resposta) => {
//     console.log(resposta);
//   })
//   .then(() => {
//     console.log("Eu serei o ultimo a ser exibido");
//   })
//   // Esse é o reject, caso tenha erro ele volta o erro
//   // Vao rodando o then até encontrar o erro
//   .catch((error) => {
//     console.log("Error " + error);
//   });

// O codigo normal é executado antes das promises.
// Por isso se chama de codigo Assyncrono
// console.log("Isso aki será recebido antes de tudo");

// Bastante utilizado quando for mexer com BD. Banco de dados, base de dados

/*  Métodos Uteis para utilizar Promises

 *  Promise.all -> Passa um array com promises e ele resolve todas.
 *  Promise.race -> Como se fosse uma corrida, sempre ira entregar o primeiro valor (até quando não é promise)
 *  Promise.resolve -> Passa um valor já resolvido (meio inutil) porém as veze sé util, força valor comum a virar uma promise (quando tem resolve cai no .then())
 *  Promise.reject -> Sempre que tem um reject, ele já cai no catch
 */

function baixarPagina() {
  const emCache = true;

  if (emCache) {
    return Promise.reject("Página em cache");
  } else {
    return esperaAI("Baixando a pag", 2000);
  }
}

baixarPagina()
  .then((dadosPagina) => console.log(dadosPagina))
  .catch((e) => console.log("Erro", e));

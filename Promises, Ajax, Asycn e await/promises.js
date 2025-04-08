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
    if (typeof msg !== "string") reject(false);
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

// .then() só sera executado quando o Resolve() funcionar
// .then() possui algumas funcionalidades - Gemini, Gpt ou deepseek pode explicar melhor.
esperaAI("Conexão com o BD", rand(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return esperaAI("Buscando dados da BASE", rand(1, 3));
    f;
  })
  .then((resposta) => {
    console.log(resposta);
    return esperaAI("Frase 3", rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .then(() => {
    console.log("Eu serei o ultimo a ser exibido");
  })
  // Esse é o reject, caso tenha erro ele volta o erro
  // Vao rodando o then até encontrar o erro
  .catch((error) => {
    console.log("Error " + error);
  });

// O codigo normal é executado antes das promises.
// Por isso se chama de codigo Assyncrono
console.log("Isso aki será recebido antes de tudo");

// Bastante utilizado quando for mexer com BD. Banco de dados, base de dados

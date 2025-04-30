// Para aplicação do Nodemon, é necessario o comando "npm install nodemon --save-dev", para rodar = npx nodemon "arquivo.js"

const express = require("express");
const app = express();
const routes = require("./routes");

// Caso nao faça o app.use, ele não irar tratar = Aparecer como undefined
// app.use -> Diz ao Express para usar um middleware — um pedaço de código que roda antes dos seus controladores (routes, por exemplo).
app.use(
  // Esse middleware processa os dados do body da requisição quando estão no formato URL-encoded (padrão de formulários HTML).
  express.urlencoded({
    extended: true,
  })
);
app.use(routes);

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});

// Para aplicação do Nodemon, é necessario o comando "npm install nodemon --save-dev", para rodar = npx nodemon "arquivo.js"

const express = require("express");
const app = express();

// Caso nao faça o app.use, ele não irar tratar = Aparecer como undefined
// app.use -> Diz ao Express para usar um middleware — um pedaço de código que roda antes dos seus controladores (routes, por exemplo).
app.use(
  // Esse middleware processa os dados do body da requisição quando estão no formato URL-encoded (padrão de formulários HTML).
  express.urlencoded({
    extended: true,
  })
);

// CRUD -> CREATE, READ, UPDATE, DELETE
//         POST    GET    PUT    DELETE

// https://meusite.com/ <- GET -> Entregue a página
// https://meusite.com/sobre <- GET -> Entregue a página /sobre
// https://meusite.com/contato <- GET -> Entregue a página /contato

//                         PERFIL   PARAMETROS            QUERYSTRINGS
// http://facebook.com / profiles / 12345? campanha=googleads & nome_campanha=seila

app.get("/", (req, res) => {
  res.send(`
        <form action="/" method="POST">
        Nome do cliente: <input type="text" name="name">
        Outro Campo: <input type="text" name="aquioutrocampo">
        <button>Enviar</button>
        </form>
    `);
});

app.get("/testes/:idUsuarios?/:parametro?", (req, res) => {
  // req.params -> Puxa os parametros passados, (em formato JSON se nao especificado)
  console.log(req.params);
  // req.query -> Puxa o que foi mandado pela a URL ex:  http://facebook.com / profiles / 12345?
  console.log(req.query);
  res.send(req.query.facebookprofile);
});

app.post("/", (req, res) => {
  // req.body, é o que receberar informãçao e sera passado para o middleware
  // o body é o HTML.
  console.log(req.body);
  //res.send -> Envia a resposta passada como parametro (res)
  res.send(`O que voce me enviou foi: ${req.body.name}`);
});

app.listen(3000, () => {
  console.log("Acessar htt://localhost:3000");
  console.log("Servidor executando na porta 3000");
});

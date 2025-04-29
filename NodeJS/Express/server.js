const express = require("express");
const app = express();

// CRUD -> CREATE, READ, UPDATE, DELETE
//         POST    GET    PUT    DELETE

// https://meusite.com/ <- GET -> Entregue a página
// https://meusite.com/sobre <- GET -> Entregue a página /sobre
// https://meusite.com/contato <- GET -> Entregue a página /contato

app.get("/", (req, res) => {
  res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="name">
        <button>Enviar</button>
        </form>
    `);
});

app.post("/", (req, res) => {
  res.send("Recebi o formulario");
});

app.get("/contato", (req, res) => {
  res.send("Obrigado em entrar em contato");
});

app.listen(3000, () => {
  console.log("Acessar htt://localhost:3000");
  console.log("Servidor executando na porta 3000");
});

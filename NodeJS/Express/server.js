// Para aplicação do Nodemon, é necessario o comando "npm install nodemon --save-dev", para rodar = npx nodemon "arquivo.js"

const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");

app.use(express.urlencoded({ extended: true }));

// Pasta que contem o conteudo estatico "express.static"
app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(routes);

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});

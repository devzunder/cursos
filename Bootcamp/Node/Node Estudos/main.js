const express = require("express");
// importando express
const app = express();
//passando express para uma variável

const logMiddleware = (req, res, next) => {
  //o next faz com que ele não bloqueie uma rota
  console.log(
    `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
  );
  return next();
};

//criando um middleware e abaixo aplicando ele para todas as rotas
app.use(logMiddleware);

app.get("/", logMiddleware, (req, res) => {
  return res.send("Hello World");
});
//fluxo normal de rota
app.get("/:name", (req, res) => {
  return res.json({
    name: `${req.params.name}`
  });
});
//passando uma rota como parâmetro
app.get("/login/:name", (req, res) => {
  return res.send(`Logado como ${req.params.name}`);
});

app.get("/login", (req, res) => {
  return res.send(`Logado como ${req.query.name}`);
});
//passando uma rota com parâmetro de url com ?
app.listen(3000);

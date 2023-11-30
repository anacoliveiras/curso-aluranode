// import http from "http";
import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000;

const rotas = {
  "/": "Curso Node.js",
  "/livros": "Entrei na Rota Livros",
  "/autores": "Entrei na Rota Autores",
};

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plan" });
//   res.end(rotas[req.url]);
// });

app.listen(PORT, () => {
  console.log("servidor escutando!");
});

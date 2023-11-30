import express from "express";
import conecta from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conecta();

conexao.on("error", (erro) => {
  console.error("erro de conexao", erro);
});

conexao.once("open", () => {
  console.log("conexao com o banco feita com sucesso");
});

const app = express();
routes(app);

app.delete("/livros/:id", (req, res) => {
  const index = buscarLivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("Livro removido com sucesso");
});
export default app;

import express from "express";
import conecta from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conecta();

conexao.on("error", console.log.bind(console, "Erro de conexão"));

conexao.once("open", () => {
  console.log("conexão com o banco feita cpm sucesso");
});

const app = express();
app.use(express.json());
routes(app);

export default app;

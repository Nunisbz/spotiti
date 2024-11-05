import Express from "express";
import cors from "cors";
import { AuthRoutes } from "./router/authRoutes.js";
import { UserRoutes } from "./router/userRoutes.js";
import { criarTabelas } from "./db.js";

const app = Express();
app.use(Express.json());
app.use(cors());
app.use("/autenticacao", AuthRoutes);
app.use("/usuarios", UserRoutes);

criarTabelas();

app.listen(8000, () => {
    console.log("Servidor rodando na porta 8000");
});

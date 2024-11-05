import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import { User } from "../db.js";

const SignUp = async (req, res) => {
    const { nome, sobrenome, email, senha, dataNascimento } = req.body;
    if (!nome || !sobrenome || !email || !senha || !dataNascimento) {
        res.send("Todos os campos devem ser preenchidos.");
        return;
    }

    const userExiste = await User.findOne({ where: { email } });
    if (userExiste) {
        res.send("Usuário já existe.");
        return;
    }

    const senhaCriptografada = bcryptjs.hashSync(senha, 10);
    await User.create({ nome, sobrenome, email, senha: senhaCriptografada, dataNascimento });

    res.send("Usuário registrado com sucesso!");
};

const SignIn = async (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        res.send("Todos os campos devem ser preenchidos.");
        return;
    }

    const userExiste = await User.findOne({ where: { email } });
    if (!userExiste) {
        res.send("Este usuário não existe.");
        return;
    }

    const senhaValida = bcryptjs.compareSync(senha, userExiste.senha);
    if (!senhaValida) {
        res.send("Senha inválida.");
        return;
    }

    const token = jsonwebtoken.sign(
        {
            nome_completo: `${userExiste.nome} ${userExiste.sobrenome}`,
            email: userExiste.email,
            status: userExiste.status,
        },
        "chavecriptografiajwt",
        { expiresIn: "5m" }
    );

    if (userExiste.email === "adm@adm.com" && senha === "adm123") {
        res.send("Admin logado com sucesso!");
    } else {
        res.send("Usuário logado com sucesso!");
    }
};

export { SignUp, SignIn };

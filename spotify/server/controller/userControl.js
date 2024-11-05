import { User } from "../db.js";

const GetUsers = async (req, res) => {
    const allUsers = await User.findAll({
        attributes: ["id", "nome", "sobrenome", "email", "status", "dataNascimento"]
    });
    res.send(allUsers);
};

const GetUser = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        res.send("Insira o email do usuário que você gostaria de verificar.");
        return;
    }
    const OneUser = await User.findOne({ where: { email } });
    res.send(OneUser);
};

const DeleteUser = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        res.send("Insira o email do usuário que você gostaria de deletar.");
        return;
    }

    const ByeUser = await User.destroy({ where: { email } });
    if (ByeUser) {
        res.send("Usuário deletado.");
    } else {
        res.send("Usuário não encontrado.");
    }
};

export { GetUsers, GetUser, DeleteUser };

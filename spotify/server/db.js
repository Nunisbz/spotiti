import Sequelize from "sequelize";

const sequelize = new Sequelize(
    "spotfake",
    "postgres",
    "postgres",
    {
        host: "localhost",
        port: 5432,
        dialect: "postgres"
    }
);

const User = sequelize.define("user", {
    nome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    sobrenome: {  // Corrigido de 'sobreNome' para 'sobrenome'
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    dataNascimento: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: Sequelize.DataTypes.ENUM("ativo", "inativo"),
        allowNull: false,
        defaultValue: "inativo"
    },
    cpf: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
    }
});

const criarTabelas = () => {
    sequelize.authenticate().then(() => {
        console.log("Conectado ao banco de dados");
    }).catch((err) => {
        console.log(err);
    });

    sequelize.sync({ force: true }).then(() => {
        console.log("Tabelas criadas");
    });
};

export { User, criarTabelas };

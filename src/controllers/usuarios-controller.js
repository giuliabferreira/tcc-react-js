const { Details } = require("@mui/icons-material");
const { default: UsuariosCadastrar } = require("../pages/admin/usuarios/usuarios-cadastrar");

module.exports = {
    async create(req, res) {
        const {nome, cpf, rg, endereco, cidade, celular1, celular2, nomeanimal, especie, raca, sexo, idade, castracao} = req.body;
        let data = {};
        let user = await UsuariosCadastrar.findOne({});

        if(!user) {
            data = {nome, cpf, rg, endereco, cidade, celular1, celular2, nomeanimal, especie, raca, sexo, idade, castracao};
            
            user = await UsuariosCadastrar.create(data);
            return res.status(200).json(user);
        } else {
            return res.status(500).json(user);
        };
}};
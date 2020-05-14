const Admin = require('../database/model/Admin.js');
const bcrypt = require('bcrypt-nodejs');

module.exports = {
    async login(req, res) {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).send('Informações Inválidas');

        const admin = await Admin.findOne({email: email});

        const encryptedPassword = bcrypt.compareSync(password, admin.password);

        if(encryptedPassword) {
            res.json(admin);
        } else if (!encryptedPassword) {
            res.status(400).send('Senha/Email incorreto.');
        };
    },
};
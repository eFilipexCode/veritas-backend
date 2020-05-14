const Admin = require('../database/model/Admin.js');
const bcrypt = require('bcrypt-nodejs');

module.exports = {
    async create(req, res) {
        const { name, email, password } = req.body;
        if (!name || !email || !password) return res.status(400).send('Informações recebidas são invalidas.');
        if (!email.includes('@') || !email.includes('.')) return res.status(400).send('Email inválido');

        const salt = bcrypt.genSaltSync(10);
        const passwordCrypted = bcrypt.hashSync(password, salt);
        
        const data = {
            name,
            email,
            password: passwordCrypted
        };

        const response = Admin.create(data);
        res.json(response);
    },
    async getUniqueAdm(req, res) {
        const id = req.query.id;
        const adm = await Admin.findById(id);
        res.json(adm);
    }
}
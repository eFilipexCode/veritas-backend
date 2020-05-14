const Post = require('../database/model/Post.js');
const connection = require('../database/connection.js');

module.exports = {
    async index(req, res) {
        const response = await Post.find();
        res.json(response);
    },
    async create(req, res) {
        const { title, content, description, author, idAuthor, thumbPath, archived } = req.body;
        let { category } = req.body;

        if (!title || !content || !author || !idAuthor) {
            return res.status(400).send('Dados fornecidos estão inválidos. Verifique-os e tente novamente.');
        };
        if (content.length < 1500) {
            return res.status(400).send('O conteúdo do post é ínfimo. Preencha-o com mais informações');
        };
        if (!category) {
            category = 'Outros';
        };

        const data = {
            title,
            content,
            description,
            author,
            idAuthor,
            thumbPath,
            category,
            date: Date.now(),
            archived
        };

        const response = await Post.create(data);
        res.json(response);
    },
    async update(req, res) {
        const data = req.body;
        const post = await Post.findByIdAndUpdate(data.id, data);
        res.json(post);
    },
    async getArchivedPost(req, res) {
        const archivedPosts = await Post.find({archived: true});
        res.json(archivedPosts);
    },
};
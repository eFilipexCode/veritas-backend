const Post = require('../database/model/Post.js');

module.exports = {
    async search(req, res) {
        const value = req.query.value;

        if (!value) {
            res.status(400).send('Uma chave de pesquisa é necessária.');
        };

        const regex = new RegExp(`${value}`);
        const response = await Post.find({
            archived: false ,
            $or: [
            { title: regex },
            { description: regex }
        ],
        });
    res.json(response);
},
};
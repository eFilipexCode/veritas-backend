const Post = require('../database/model/Post.js');

module.exports = {
    async initial(req, res) {
        const response = await Post.find({ archived: false })
            .limit(3);
        res.json(response);
    },
    async session(req, res) {
        const response = await Post.find({ archived: false })
            .sort('-_id')
            .limit(12)
        res.json(response);
    },
};
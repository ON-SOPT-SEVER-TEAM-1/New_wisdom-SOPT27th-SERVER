const { Post } = require('../models');

module.exports = {
    createPost : async (userId, title, contents, postImageUrl) => {
        try {
            const post = Post.create({UserId : userId, title, contents, postImageUrl});
            return post;
        } catch (error) {
            throw error;
        }
    },
}
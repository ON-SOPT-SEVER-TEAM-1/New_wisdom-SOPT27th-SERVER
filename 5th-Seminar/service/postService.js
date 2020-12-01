const { Post, Like } = require('../models');

module.exports = {
    createPost : async (userId, title, contents, postImageUrl) => {
        try {
            const post = Post.create({UserId : userId, title, contents, postImageUrl});
            return post;
        } catch (error) {
            throw error;
        }
    },
    createLike : async (PostId, UserId) => {
        try {
            const like = await Like.create({PostId, UserId});
            return like;
        } catch (error) {
            throw error;
        }
    },
    deleteLike : async (PostId, UserId) => {
        try {
            const result = await Like.destroy({
                where : {
                    PostId : PostId,
                    UserId : UserId
                } 
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
}
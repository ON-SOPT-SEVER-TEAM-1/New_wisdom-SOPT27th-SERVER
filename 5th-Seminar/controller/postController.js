const util = require('../modules/util');
const responseMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const { User, Post, Like } = require('../models');
const { postService } = require('../service');

module.exports = {
    createPost : async (req, res) => {
        const {userId, title, contents} = req.body;
        const postImageUrl = req.file.location;
        try{
            const post = await postService.createPost(userId, title, contents, postImageUrl);
            return res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.CREATE_POST_SUCCESS,post));
        } catch(error){
            console.error(error);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR,responseMessage.CREATE_POST_FAIL));
        }
    },
    readAllPosts : async (req, res) =>{
        try {
            const posts = await Post.findAll({
                include : [{
                    model : User,
                    attributes : ['email','userName']
                }, {
                    model : User, // 좋아요 누른 사람
                    as : 'Liker',
                    attributes : { exclude : ['password','salt']}
                }]
            });
            return res.status(statusCode.OK).send(util.success(statusCode.OK,"전체 게시글 조회 성공",posts));
        } catch (error){
            console.error(error);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR,"전체 게시글 조회 실패"));
        }
    },
    createLike : async (req, res) => {
        const PostId = req.params.postId;
        const UserId = req.body.userId;
        try{
            const like = await Like.create({PostId, UserId});
            return res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.CREATE_LIKE_SUCCESS, like));
        } catch(error){
            console.error(error);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.success(statusCode.INTERNAL_SERVER_ERROR,responseMessage.CREATE_LIKE_FAIL));
        }
    }
}
var express = require('express');
var router = express.Router();
const upload = require('../../modules/multer');
const postController = require('../../controller/postController');


router.post('/', upload.single('image'), postController.createPost);
router.get('/', postController.readAllPosts);
router.post('/:postId/like',postController.createLike);

module.exports = router;
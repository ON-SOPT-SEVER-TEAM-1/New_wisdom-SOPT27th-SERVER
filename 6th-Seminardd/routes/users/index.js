const express = require('express');
const router = express.Router();
const userController = require('../../controller/userController');
const authUtils = require('../../middlewawres/authUtil');

router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.get('/', userController.readAll);
router.get('/profile',authUtils.checkToken, userController.getProfile); // :id 위에 꼭 있어야 한다.
router.get('/:id', authUtils.checkToken, userController.readOne);

module.exports = router;

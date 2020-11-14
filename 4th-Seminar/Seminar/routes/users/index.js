const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const util = require('../../modules/util');
const responseMessage = require('../../modules/responseMessage');
const statusCode = require('../../modules/statusCode');
const { User } = require('../../models');
const userController = require('../../controller/userController');

router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.get('/', userController.readAll);
router.get('/:id', userController.readOne);
// level 3 Homework -!
router.delete('/:id', async(req,res)=>{
    const {id} = req.params;
    try{
        const user = await User.findOne({
            where : {
                id : id,
            },
            attributes : ['id'],
        });
        if(!user){
            console.log('존재하지 않는 id 입니다.');
            return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST,responseMessage.NO_USER));
        }
        const result = await User.destroy({
            where : {
                id : id,
            }
        });   
        return res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.DELETE_USER_SUCCESS))
    } catch(error){
        console.error(error);
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR,responseMessage.DELETE_USER_FAIL))
    }
})

router.put('/:id', async(req,res)=>{
    const {id} = req.params;
    const {userName} = req.body; 
    try{
        const user = await User.findOne({
            where : {
                id : id,
            },
            attributes : ['id'],
        });
        if(!user){
            console.log('존재하지 않는 id 입니다.');
            return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST,responseMessage.NO_USER));
        }
        const result = await User.update({ userName : userName},{
            where : {
                id : id
            }
        });
        return res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.UPDATE_USER_SUCCESS));
    } catch(error){
        console.error(error);
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR,responseMessage.UPDATE_USER_FAIL));
    }
})
module.exports = router;
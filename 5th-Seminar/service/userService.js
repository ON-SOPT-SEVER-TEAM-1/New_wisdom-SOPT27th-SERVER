const crypto = require('crypto');
const { userInfo } = require('os');
const { User, Post } = require('../models');
module.exports = {
    signup : async(email,userName, password)=>{
        try{
            //4. salt 생성
            const salt = crypto.randomBytes(64).toString('base64');
            //5. 2차 세미나때 배웠던 pbkdf2 방식으로 (비밀번호 + salt) => 암호화된 password
            const hashedPassword = crypto.pbkdf2Sync(password,salt,10000,64,'sha512').toString('base64');
            //6. User email, 암호화된 password, salt, userName 생성!
            const user = await User.create({
                email : email,
                password : hashedPassword,
                userName : userName,
                salt : salt,
            });
            return user;
        }catch(error){
            throw error;
        }
    },
    isAlreadyEmail : async (email) => {
        try{
            //3. 존재하는 이메일인지 확인하기. 이미 존재하는 이메일면 ALREADY ID 반환
            const alreadyEmail = await User.findOne({
                where : {
                    email : email,
                }
            });
            return alreadyEmail;
        }catch(error){
            throw error;
        }
    },
    readOne : async (id) => {
        try{
            const user = await User.findOne({
                include : {
                    model : Post
                },
                where : {
                    id : id,
                },
                attributes : ['id','email','userName'],
            });
            return user;
        }catch(error){
            throw error;
        }
    },
    readAll : async () => {
        try{
            const users = await User.findAll({
                include : {
                    model : Post
                },
                attributes : ['id','email','userName'],
            });
            return users;
        }catch(error){
            throw error;
        }
    },
}
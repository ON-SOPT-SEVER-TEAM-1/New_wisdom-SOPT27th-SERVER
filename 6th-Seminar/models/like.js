const {User, Post} = require('../models');
module.exports = (sequelize, DataType) =>{
    return sequelize.define('Like',{
        UserId : {
            type : DataType.INTEGER,
            reference : {
                model : User,
                key : 'id',
            }
        },
        PostId : {
            type : DataType.INTEGER,
            reference : {
                model : Post,
                key : 'id',
            }
        }
    },{
        freezeTableName : true,
        timetables : true,
    })
}
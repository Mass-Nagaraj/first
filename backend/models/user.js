
const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');

const User= sequelize.define("User",{
    id:{
        type:DataTypes.INTEGER,
        unique:true,
        primaryKey:true
    },
    name:{
        type: DataTypes.STRING,

    },
    email:{
        type:DataTypes.STRING,
        // unique:true
    }
})


module.exports = User



const {Sequelize} =require("sequelize");

const sequelize =new Sequelize("first","root",'nagaraj',{
    host:"localhost",
    dialect:"mysql"
})


module.exports = sequelize;


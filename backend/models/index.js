'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
      db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


db.category_master=require('./category_master.js')( sequelize,Sequelize.DataTypes );
db.products = require('./products.js')(sequelize, Sequelize.DataTypes);
db.variants = require('./products_variants.js')(sequelize, Sequelize.DataTypes);
db.cart = require('./cart.js')(sequelize, Sequelize.DataTypes);


db.sequelize.sync({ force: false,logging: console.log })
.then(()=>{
    console.log("Re Sync is Done...!")
}).catch((err)=>{
    console.log("Re sync Error",err)
})



// To Add Foreign Key into Both Child-Classes ( products and cart ) form Parent-Class (product_category_master)

// 1 to Many Replationship 

db.category_master.hasMany(db.products,{
  foreignKey: 'category_id',
  as:'products'
})

db.category_master.hasMany(db.cart,{
  foreignKey: 'category_id',
  as:'cart'
})

db.products.belongsTo(db.category_master,{
  foreignKey: 'category_id',
  as:'product_category_master'
})

db.cart.belongsTo(db.category_master,{
  foreignKey: 'category_id',
  as:'product_category_master'
})

// To Add Foreign Key into product_variant form Parent Model (products)

// 1 to Many relationship 

db.products.hasMany(db.variants,{
  foreignKey: 'product_id',
  as:'products_variants'
})

db.variants.belongsTo(db.products,{
  foreignKey: 'product_id',
  as:'products'
})

// To Add Foreign Key into cart form Parent Model (product_variant)

// 1 to 1 relationship 

db.variants.hasMany(db.cart,{
  foreignKey: 'product_id',
  as:'cart'
})

db.cart.belongsTo(db.variants,{
  foreignKey: 'product_id',
  as:'products_variants'
})



module.exports = db;



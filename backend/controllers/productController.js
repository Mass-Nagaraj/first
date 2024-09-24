
const express=require('express');
const app=express();
const db=require('../models/index');
const category_master = db.category_master;
const Products = db.products;
const variance = db.variants;
const cart = db.cart;
const errorHandler=require('../middleware/errorHandler')
app.use(express.json());



// 1.create product (insert) 

const addProduct = async (req, res,next) => {

    try {

        if( Object.keys(req.body).length ===0 || !req.body.name || !req.body.category_id || !req.body.img_url  ) {
            throw new Error("Error occurs while sending request datas")
        }

        const coming_products=req.body;
      

      if(Array.isArray(coming_products)) {

            const processedProducts = coming_products.map(product => ({
                name: product.name,
                category_id: product.category_id,
                img_url: product.img_url,
               
            }));

            const BulkProducts=await Products.bulkCreate(processedProducts);
            res.status(200).send(BulkProducts);

      }else{

          const product = await Products.create({
            
            name: req.body.name,
            category_id: req.body.category_id,
            img_url: req.body.img_url,

          });
          
          res.status(200).send(product);
          console.log(product);
      }
  
    } catch (error) {
      
        // console.error('Error creating product:', error);
        // return res.status(500).send({
        //     message: "Error occurred while creating the product.",
        //     error: error.message
        // })
        return next(error)

    }
  };

  
  const addCategoryMaster = async (req,res)=>{
      
      
      try {
   
        if( Object.keys(req.body).length ===0 || !req.body.name || !req.body.is_active ) {
            throw new Error("Error occurs while sending request datas")
        }
   
        const coming_products=req.body;
  
        if(Array.isArray(coming_products)) {
  
              const processedProducts = coming_products.map(product => ({
                  
                  name: product.name,
                  is_active: product.is_active
                 
                 
              }));
  
              const BulkProducts=await category_master.bulkCreate(processedProducts);
              res.status(200).send(BulkProducts);
  
        }else{
  
            const product = await category_master.create({
              
              name: req.body.name,
              is_active: req.body.is_active
  
            });
            
            res.status(200).send(product);
            console.log(product);
        }
    
      } catch (error) {
        
          console.error('Error creating product:', error);
          res.status(500).send({
              message: "Error occurred while creating the product variance.",
              error: error.message
          });
      }
      
      
}


const addProductVariants = async (req, res) => {
    
    
    try {
        
    if( Object.keys(req.body).length ===0 || !req.body.product_id || !req.body.name || !req.body.is_active || req.body.price ) {
        throw new Error("Error occurs while sending request datas")
    }
      const coming_products=req.body;

      if(Array.isArray(coming_products)) {

            const processedProducts = coming_products.map(product => ({
                product_id: product.product_id,
                name: product.name,
                is_active: product.is_active,
                price: product.price,
               
            }));

            const BulkProducts=await variance.bulkCreate(processedProducts);
            res.status(200).send(BulkProducts);

      }else{

          const product = await variance.create({
            
            product_id: req.body.product_id,
            name: req.body.name,
            is_active: req.body.is_active,
            price: req.body.price,

            // name: req.body.name,
            // category_id: req.body.category_id,
            // img_url: req.body.img_url,

          });
          
          res.status(200).send(product);
          console.log(product);
      }
  
    } catch (error) {
      
        console.error('Error creating product:', error);
        res.status(500).send({
            message: "Error occurred while creating the product variance.",
            error: error.message
        });
    }
  };


const addCart = async (req, res) => {
    
    

    try {

        if( Object.keys(req.body).length ===0 || !req.body.product_id || !req.body.category_id || !req.body.quantity || req.body.total_price ) {
            throw new Error("Error occurs while sending request datas")
        }
        
        const coming_products=req.body;

        if(Array.isArray(coming_products)) {

            const processedProducts = coming_products.map(product => ({
                product_id: product.product_id,
                category_id: product.category_id,
                quantity: product.quantity,
                total_price: product.total_price,
               
            }));

            const BulkProducts=await cart.bulkCreate(processedProducts);
            res.status(200).send(BulkProducts);

        }else{

          const product = await cart.create({
            
            product_id: req.body.product_id,
            category_id: req.body.category_id,
            quantity: req.body.quantity,
            total_price: req.body.total_price,

          });
          
          res.status(200).send(product);
          console.log(product);
          }
  
         } catch (error) {
      
            console.error('Error creating product:', error);
            res.status(500).send({
                message: "Error occurred while creating the product variance.",
                error: error.message
        });
    }
  };


// 2.get All products

const getAllproducts_include_variance = async (req,res) =>{

    const products=await Products.findAll({
        
         include: [
            { model: db.variants, as: 'products_variants' }
           
            // { model: db.category_master, as: 'product_category_master' }
    ]

    })

    res.status(200).send(products);
}


const getAllproducts = async (req,res) =>{

    const products=await Products.findAll({})

    res.status(200).send(products);
    
}

const getCartProducts = async (req,res) =>{

    const products=await cart.findAll({})

    res.status(200).send(products);
    
}


const getCartProducts_products = async (req,res) =>{

    const products=await cart.findAll({
        include:[
            {
                model:db.variants,
                as:'products_variants',
                attributes:['product_id','name','price'],
                
                include:[{
                    model:db.products,
                    as:'products',
                    attributes:['name','img_url']
                }

                ]
            }
        ]
    })

    res.status(200).send(products);
    
}


const delCart = async (req,res)=>{

    const id=req.params.id;
    const DelCart = await cart.destroy( { where : { id: id }} );
    res.send("Cart Deleted Success..!")
}


// Get Specific Datas Using Foreign Key

const getCategoryMaster_products_variants = async (req,res)=>{

    const id=req.params.id;
    const product = await category_master.findOne( {where :{id:id},
         include: [
            { model: db.products, as: 'products' },
            { model: db.cart, as: 'cart' },
           
    ]});

    res.status(200).send(product);
}


const getAllVariants = async (req,res)=>{

    const product_id=req.params.id;
    const product = await variance.findAll({where : {product_id:product_id }});

    res.status(200).send(product);
}


const getCategoryId = async (req,res)=>{
    
    const category_id=req.params.category_id;
    // console.log(category_id," and its DataType is :",typeof category_id)

    const product = await Products.findAll( {where :{category_id :category_id},
        include: [
            { model: db.variants, as: 'products_variants' }

    ]});

    res.status(200).send(product);
}




//Extra API for Products Table

// 3.get Single product

const getSingleproducts = async (req,res)=>{

    const id=req.params.id;
    const product = await Products.findOne( { where :{id:id } } );
    res.status(200).send(product);

}

// 4.update Product

const updateProduct = async (req,res)=>{

    const category_id=req.params.id;
    const product = await Products.update( req.body, { where : { category_id : category_id } } );
    res.status(200).send(product)
}

//5.delete Product

const deleteProduct = async (req,res)=>{

    const id=req.params.id;
    const product = await Products.destroy( { where : { id:id }} );
    res.send("Product Deleted Success..!")
}

// Middle_Ware for Error Handling

app.use(errorHandler)

module.exports={
    addProduct,
    addProductVariants,
    addCart,
    getAllproducts_include_variance,
    getAllproducts,
    getCartProducts,
    getCartProducts_products,
    getSingleproducts,
    updateProduct,
    deleteProduct,
    delCart,
    getCategoryMaster_products_variants,
    addCategoryMaster,
    getCategoryId,
    getAllVariants
}



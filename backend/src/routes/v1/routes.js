
const productController=require('../../../controllers/productController');
const categoryController=require('../../../controllers/categoryController');
const varianceController=require('../../../controllers/varianceController');
const cartController=require('../../../controllers/cartController');
const router=require('express').Router();

// Product Routers

router.post('/addproduct',productController.addProduct)

router.post('/addCategoryMaster',productController.addCategoryMaster)

router.post('/addProductVariants',productController.addProductVariants)

router.post('/addCart',productController.addCart)

router.get('/getAllproducts_include_variance',productController.getAllproducts_include_variance)

router.get('/getAllproducts',productController.getAllproducts)

router.get('/getCartProducts',productController.getCartProducts)

router.get('/getCartProducts_products',productController.getCartProducts_products)

router.get('/:id',productController.getCategoryMaster_products_variants);

router.get('/getAllVariants/:id',productController.getAllVariants);

router.get('/getCategoryId/:category_id',productController.getCategoryId)

router.put('/:id',productController.updateProduct)

router.delete('/:id',productController.deleteProduct);

router.delete('/delCart/:id',productController.delCart);


//Category Controller Routers

// router.post('/get',reviewControllers.getReviews)

// router.post('/addReview',reviewControllers.addReview)


module.exports=router;



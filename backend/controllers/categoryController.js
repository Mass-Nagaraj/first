
const db=require('../models/index');
const Products = db.products;
const Reviews =db.reviews


// 1.create Review (insert) 

const addReview = async (req, res) => {
    try {
      
      const review = await Reviews.create({
        rating: req.body.rating,
        description: req.body.description,
      });
  
      res.status(200).send(review);
      console.log(review);
  
    } catch (error) {
      
        console.error('Error creating product:', error);
        res.status(500).send({
            message: "Error occurred while creating the product.",
            error: error.message
        });
    }

  };



// 2.get All Reviews


const getReviews = async (req,res) =>{

        const rev=await Reviews.findAll({})
    
        res.status(200).send(rev);
        console.log(rev)

}


// const getAllReviews = async (req, res) => {
//     console.log("getAllReviews function was hit!"); // For testing
//     try {
//       const reviews = await Reviews.findAll();
//       const plainReviews = reviews.map(review => review.get({ plain: true }));
//       res.status(200).json(plainReviews);
//       console.log(plainReviews);
//     } catch (error) {
//       console.error('Error fetching reviews:', error);
//       res.status(500).send({
//         message: "Error occurred while fetching reviews",
//         error: error.message,
//       });
//     }
//   };
  


module.exports={
    addReview,
    getReviews,
   
}


const {v4:uuidv4 } =require('uuid') 

const products=[
    
    {
        id:uuidv4(),
       "name":"Mango Juice With Salad",
       "category_id":4,
       "img_url":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-ai-image%2Fmango-juice-vibrant-tropical-fruit-salad-bright-sunny-table_173188707.htm&psig=AOvVaw0bdknUiLEV-7fEElb3_Fs-&ust=1727174061541000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPDx3_Tu2IgDFQAAAAAdAAAAABAE",
        createdAt:new Date(),
        updatedAt:new Date()
    }

   ]
   
   

module.exports=products



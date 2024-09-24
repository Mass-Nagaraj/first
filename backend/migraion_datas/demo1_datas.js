const {v4:uuidv4 } =require('uuid') 


const demo1_datas=[
    {
        id:uuidv4(),
        "demo1":"Chicken",
        createdAt:new Date(),
        updatedAt:new Date()
    },
    {
        id:uuidv4(),
        "demo1":"Pizza",
        createdAt:new Date(),
        updatedAt:new Date()
    
    },
    {
        id:uuidv4(),
        "demo1":"Burger",
        createdAt:new Date(),
        updatedAt:new Date()
    },
    {
        id:uuidv4(),
        "demo1":"Potota",
        createdAt:new Date(),
        updatedAt:new Date()
    },
    
    ]

module.exports=demo1_datas



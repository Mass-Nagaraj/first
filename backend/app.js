const express = require('express');
const sequelize=require('../backend/config/database')
const v1Routes=require('../backend/models/user')
const app = express();
const router=express.Router();

app.use(express());
app.use(express.json());

app.use('/api/v1',v1Routes)

sequelize.sync().then(()=>{
    console.log("Database Connected SuccessFully..!")
    
    app.listen(8000,()=>{
        console.log("Server is listening on port 8000")
    })
}).catch((err)=>{
    console.log("Unable to connect with DB ",err);
})


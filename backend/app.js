const express=require('express');
const app=express();
const cors=require('cors')

app.use(express());

//middlewares

app.use(cors({
    origin:"*"  
}))


app.use(express.json());
app.use(express.urlencoded({ extended:true }))


//testing api

app.get("/",(req,res)=>{
    res.send({msg: "Hello form api ..This is index page"})
})


//router

const router=require('./src/routes/v1/routes');
app.use("/api/products",router);


//server  

app.listen(8000,()=>{
    console.log("Server is listening on port 8080");
})




const express=require('express');
const dotenv=require('dotenv');

dotenv.config();
const app=express();

app.get('/info', (req,res)=>{
    return res.json({
        message:"ok"
    })
})

app.listen(process.env.PORT,()=>{
    console.log("started server at 3000");
})
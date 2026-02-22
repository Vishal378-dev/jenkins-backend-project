const express=require('express');
const app=express()

app.get("/",(req,res)=>{
    console.log("adding for checking new build")
    return res.status(200).json({
        success:true,
        message:"server is healthy"
    })
})
app.listen(3000,()=>{
    console.log(`server is listening on PORT-3000`)
})

const express=require('express');
const app=express();
app.get('/',req,res)=>{
res.send("hello world, iam from nodejs");
});
app.listen(3020,()=>{
console.log("server is running on port 3020")
});
const express=require('express')

const app=express();
const port=4050;


app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.post("/",(req,res)=>{
    res.send("Hello world Post Request")
})

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})
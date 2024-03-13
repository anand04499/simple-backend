const express=require('express')
const cors = require('cors'); // Import the cors middleware

const app=express();
const port=4050;

app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
}));


app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.post("/",(req,res)=>{
    res.send("Hello world Post Request")
})

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})
const express = require('express');
const app = express();
const router = require('./routes/route.js');
const port = 3000;

app.use(express.json());
app.use('/',router); 

app.get('/clientApp',(req,res) =>{
    res.send("This is the response")
})
app.listen(port,() =>{
    console.log("Server Running Succesfully")
})
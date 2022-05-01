const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controllers/myController.js');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.options('*', cors()) // include before other routes

app.get('/',(req,res) => {
    console.log("Here");
    res.send("Thanks for your Request");
});

app.post('/',(req,res) => {
    console.log(req.body);
    res.send("This was contained in you body" + req.body.Name);
})
app.post('/login',(req,res) => {
    controller.getUser(req).then(result => {
        console.log(result.recordset.length);
        var access = false;
        if(result.recordset.length > 0){
            access = true;
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("content-type","application/json");
        res.send({"Access":access,"UserInfo":result.recordset[0]});
    })
    
    
})
app.listen(
  port,
  () => {
      console.log("Server Running at port: "+ port);
  }  
)
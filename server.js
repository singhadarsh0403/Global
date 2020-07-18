const express = require("express");

var app = express();

const absolutePth = __dirname + '/public/login.html'
app.get('/',(req,res)=>{
  res.sendFile(absolutePth)
})


app.use(  express.static(__dirname+'/public'))

var port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log('App is listening on '+port)
})
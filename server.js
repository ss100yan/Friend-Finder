
var express = require ('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();



var PORT = process.env.PORT || 5000;




// import module for html routes
require('./app/routing/htmlRoutes')(app);


// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,"public/home.html"))
// })

// app.get('/survey',(req,res)=>{
//     res.sendFile(path.join(__dirname,"public/survey.html"))
// })
app.listen(PORT,() => console.log (`server started on port ${PORT}`));
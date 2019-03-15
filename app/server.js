
var express = require ('express');
var path = require('path');

var app = express();



var PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log (`server started on port ${PORT}`));



// require(path.join(__dirname, './app/routing/htmlRoutes'))(app);


// app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"public/home.html"))
})

app.get('/survey',(req,res)=>{
    res.sendFile(path.join(__dirname,"public/survey.html"))
})

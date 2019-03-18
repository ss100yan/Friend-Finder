
var express = require ('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// import module for html routes
require('./app/routing/htmlRoutes')(app);
// import module for api routes
require('./app/routing/apiRoutes')(app);

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,"public/home.html"))
// })

// app.get('/survey',(req,res)=>{
//     res.sendFile(path.join(__dirname,"public/survey.html"))
// })



app.listen(PORT,() => console.log (`server started on port ${PORT}`));
//dependencies:
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//connect to mongoDB:
mongoose.connection.openUri('mongodb://newdbuser:geneva123@ds129023.mlab.com:29023/geneva');

//express:
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT, POST, GET');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

//get:
app.get('/', function(req,res){
	res.send('Welcome')
});
//routes:
app.use('/api',require('./routes/api'));

//start server:
app.listen(1932);
console.log('Server is running on port 1932');
//dependencies:
var express = require('express');
var router = express.Router();


//routes for user database:
var Status = require('../modeljs/userInfo');
Status.methods(['get', 'post', 'put','delete']);
Status.register(router,'/status');

//just for test purpose
var NewProduct = require('../modeljs/product');
NewProduct.methods(['get']);
NewProduct.register(router,'/newproduct');

var Surveydata = require('../modeljs/surveyData');
Surveydata.methods(['get', 'post', 'put','delete']);
Surveydata.register(router, '/surveydata');

var Questionaire = require('../modeljs/questionare1');
Questionaire.methods(['get','post', 'put','delete']);
Questionaire.register(router, '/questionaire1');

var Questionaire = require('../modeljs/questionare2');
Questionaire.methods(['get','post', 'put','delete']);
Questionaire.register(router, '/questionaire2');


var surveyResponse = require('./surveyResponse');
router.post('/response',function(req,res){
		var body = req.body;
		surveyResponse.surveyResponse(body,function(found) {
			res.json(found);
	});
	});

var registerProduct = require('./registerProduct')
router.post('/product',function(req,res){
		var body = req.body;
		registerProduct.registerProduct(body,function(found) {
			res.json(found);
	});
	});

var editProduct = require('./editProduct')
router.put('/product',function(req,res){
		var body = req.body;
		editProduct.editProduct(body,function(found) {
			res.json(found);
	});
	});


var registerUser = require('./registerUser')
router.post('/user',function(req,res){
		var body = req.body;
	        registerUser.registerUser(body,function(found) {
			res.json(found);
	});
	});

var login = require('./login');
router.post('/login',function(req,res){
		var email = req.body.email.toLowerCase();
        var password = req.body.password;

		login.login(email,password,function(found) {
			res.json(found);
	});
	});

var getUserProduct = require('./userProduct')
router.get('/product/:userId',function(req,res){
		var userId = req.params.userId;
		getUserProduct.userProduct(userId,function(found) {
			res.json(found);
	});
	});

var questions1 = require('./questions1');
router.post('/questions1',function(req,res){
		var productType = req.body.productType;
		questions1.questions(productType,function(found) {
			res.json(found);
	});
	});

var questions2 = require('./questions2');
router.post('/questions2',function(req,res){
		var productType = req.body.productType;
		questions2.questions(productType,function(found) {
			res.json(found);
	});
	});

var checkProduct = require('./registerProduct')
router.post('/checkProduct',function(req,res){
		var body = req.body;
		checkProduct.checkProduct(body,function(found) {
			res.json(found);
	});
	});


//periodic api call function

var schedule = require('node-schedule');
var allProduct = require('../modeljs/product');
var timer = schedule.scheduleJob('10 * * * * *', function(){
  
  allProduct.find({},function(err,allProducts){

  if(allProducts.length != 0){

   for (var i = 0; i < allProducts.length ; i++) {

   	var active = allProducts[i].active;
   	var id = allProducts[i]._id;

       if(!active){

           if(allProducts[i].remainingPeriod == allProducts[i].intervalPeriod) {
           	 var temp = require('../modeljs/product');
               temp.updateOne({ _id : id }, {$set : {active: true, remainingPeriod : 0}}, function(err,products){});

            }
            
            else{
              var temp = require('../modeljs/product');
              temp.updateOne({ _id : id }, {$set : {remainingPeriod : allProducts[i].remainingPeriod + 1}}, function(err,products){});
            }
          

         }
      }

    }
 
   });

});

//return router:
module.exports = router;
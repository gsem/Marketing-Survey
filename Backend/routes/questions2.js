var questionaire = require('../modeljs/questionare2');
var schedule = require('node-schedule');

exports.questions = function(productType,callback) {

questionaire.find({productType: productType},function(err,questionaires){

if(questionaires.length != 0){
 
var question = questionaires[0].questions;
var id = questionaires[0]._id;
callback({'question': question, 'res':true, 'id': id});


}else {

callback({'response':"No question for that product type registered",'res':false});

}

});
}
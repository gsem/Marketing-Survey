var product = require('../modeljs/questionare1');

exports.questions = function(productType,callback) {

product.find({productType: productType},function(err,products){

if(products.length != 0){

var question = products[0].questions;
var id = products[0]._id;

callback({'question': question, 'res':true, 'id': id});

}else {

callback({'response':"No question for that product type registered",'res':false});

}
});
}
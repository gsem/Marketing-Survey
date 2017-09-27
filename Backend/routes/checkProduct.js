var product = require('../modeljs/product');

exports.checkProduct = function(body,callback) {

product.find({userId: body.userId , productType: body.productType},function(err,products){

if(products.length != 0){
	

callback({'response':"product already exist for the user",'res':false});
 
 }

 else {
callback({'response':"product not registered",'res':true});
 
 }

});

}
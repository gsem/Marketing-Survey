var product = require('../modeljs/product');

exports.registerProduct = function(body,callback) {

product.find({userId: body.userId , productType: body.productType},function(err,products){

if(products.length != 0){
	

callback({'response':"product already exist for the user",'res':false});
 
 }

 else {

 	new product({

    productType: body.productType,
	productBrand: body.productBrand,
	productModel: body.productModel,
	productMakeYear: body.productMakeYear,
	productPurchaseDate: body.productPurchaseDate,
	userId: body.userId,
	intervalPeriod: body.intervalPeriod

 	}).save(callback({'response':"inserted data",'res':true}));
 }

});

}
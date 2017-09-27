var product = require('../modeljs/product');

exports.editProduct = function(body,callback) {

product.updateOne({userId: body.userId , productType: body.productType}, {$set: {count : body.count, active: body.active}}, function(err,products){

	if (err) {

		callback({'res':false});
	}

	else {

		callback({'res':true});
	}


 });

}
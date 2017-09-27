var product = require('../modeljs/product');

exports.userProduct = function(userId,callback) {

product.find({userId: userId},function(err,products){

if(products.length != 0){

callback({'product': products, 'res':true});

}else {

callback({'response':"No product registered",'res':false});

}
});
}
//dependencies:
var restful = require('node-restful');
var mongoose= restful.mongoose;

var statusSchema = new mongoose.Schema({
	
	productType: {type: String, required: true, unique: false},
	productBrand: {type: String, required: true, unique: false},
	productModel: {type: String, required: true, unique: false},
	productMakeYear: {type: Number, required: false, unique: false},
	productPurchaseDate: {type: String, required: false, unique: false},
	userId: {type: String, required: true, unique: false},
	count: {type: Number, required: false, default: 0},
	active: {type: Boolean, required: false, default: true},
    intervalPeriod: {type: Number},
    remainingPeriod: { type: Number, required: false, default: 0}

});
//return models:
module.exports = restful.model('product', statusSchema);

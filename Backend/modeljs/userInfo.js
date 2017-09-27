//dependencies:
var restful = require('node-restful');
var bcrypt = require('bcryptjs');
var mongoose= restful.mongoose;

var statusSchema = new mongoose.Schema({
	name: {type: String, required: true, unique: false, trim: true},
	email: {type: String, required: true, unique: true, trim: true},
	password: {type: String, required: true, unique: false, trim: true},
	phone: {type: Number, required: true, unique: true, trim: true},
	address: {type: String, required: true, unique: false,  trim: true}

});

statusSchema.methods.generateHash = function(password){
return bcrypt.hashSync(password, bcrypt.genSaltSync(9));

}

statusSchema.methods.validPassword = function(password,hashPassword){
return bcrypt.compareSync(password, hashPassword);

}


//return models:
module.exports = restful.model('user', statusSchema);

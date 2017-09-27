//dependencies:
var restful = require('node-restful');
var mongoose= restful.mongoose;


var statusSchema = new mongoose.Schema({

	response: [{response: {type: Number, required: true, unique: false},
                questionId: {type: String, required: true, unique: false}
              }],
	productId: {type: String, required: true, unique: false},
	questionaireId: {type: String, required: true, unique: false},
	userId: {type: String, required: true, unique: false}
    
});
//return models:
module.exports = restful.model('surveydata', statusSchema);

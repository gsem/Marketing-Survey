var response = require('../modeljs/surveyData');

exports.surveyResponse = function(body,callback) {


	new response({

    response : body.response, 
    productId : body.productId, 
    questionaireId : body.questionaireId, 
    userId : body.userId

 	}).save(function(err){

	if (err) {

		callback({'res':false});
	}

	else {

		callback({'res':true});
	}

 });

}
//dependencies:
var restful = require('node-restful');
var mongoose= restful.mongoose;

var statusSchema = new mongoose.Schema({
    
          productType: {type: String, required: true, unique: true},
          questions:[ { question: {type: String, required: true, unique: false},
                        response : [{response: {type: String, required: true, unique: false},
                                     value: {type: Number, required: true, unique: false}
                                    }] 
                    }
            ],
          intervalPeriod: {type: Number, required: true}
    
});
//return models:
module.exports = restful.model('questionaire1', statusSchema);

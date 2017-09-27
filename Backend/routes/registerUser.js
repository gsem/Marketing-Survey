var user = require('../modeljs/userInfo');

exports.registerUser = function(body,callback) {

user.find({email: body.email},function(err,users){

if(users.length != 0){	

callback({'response':"Email already registered",'res':false});
 
 }

 else {

 	var newUser = new user();
 	newUser.name = body.name;
    newUser.email = body.email.toLowerCase();
    newUser.password = newUser.generateHash(body.password);
    newUser.phone = body.phone;
    newUser.address = body.address;

 	newUser.save(callback({'response':"inserted data",'res':true}));
 }

});

}
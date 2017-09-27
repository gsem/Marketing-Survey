var user = require('../modeljs/userInfo');

exports.login = function(email,password,callback) {

user.find({email: email},function(err,users){

if(users.length != 0){

var newUser = new user();
var name = users[0].name;
var id = users[0]._id;

if(newUser.validPassword(password,users[0].password)){

callback({'response':"Login Sucess",'res':true, 'userId': id});

}else {

callback({'response':"Invalid Password",'res':false});

}
}else {

callback({'response':"User not exist",'res':false});

}
});
}
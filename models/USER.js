var cfg =require('../config');
var mysql=require('mysql');
var crypto = require('crypto');

var connection = mysql.createConnection(cfg.mysql);
connection.connect(function  (err) {
    console.log(err)
    });

function storeUser(param ,cb) {

    var query = "Insert into user values (?,?,?,?)";
    var passw = param.body.password;

    crypto.pbkdf2(passw, 'Salt', 100, 30, function (err, key) {
        if (err) {
            //console.log(err); 
            next(err);
        }
        passw = key.toString('hex');

    var val =[param.body.firstname, param.body.lastname, param.body.ID, passw];
    connection.query(query, val ,function (err ,rows) {
        if (err){
            cb(err,null);
        }
        else{
            cb(rows[0]);
        }
    });
    });
}    

function fetchUser(usrname, passwrd, cb) {

        var query = "Select * from user where ID = ? and password = ?";

        connection.query(query, [usrname, passwrd], function (err, rows) {
            if (err) {//console.log("feew");
                cb(err, null);
            } else if (!rows[0]) {
                cb("User not found", null);
            }
            else {
                //console.log("frfrrifjr");
                cb(null, rows[0]);
            }
        });

}



function insToken(token, cb) {
    var query = "Update user set token = ?";

    connection.query(query, [token], function (err, rows) {
        if (err) {
            cb(err);
        } else {
            cb(rows[0]);

        }
    });
}

module.exports = {
    getUser: fetchUser ,
    putUser: storeUser
}

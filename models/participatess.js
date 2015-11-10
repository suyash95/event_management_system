var cfg = require('../config');
var mysql = require('mysql');

var connection = mysql.createConnection(cfg.mysql);

function storethings(param, cb) {

    var query = "Insert into participants values (?,?,?,?,?,?) ";
        var val = [param.body.reg_id,param.body.firstname, param.body.lastname, param.body.email_id, param.decoded.USNno, param.body.conatct_no];
   
    connection.query(query, val, function (err, rows) {
        if (err) {
            cb(err, null);
        }
        else {
            cb(rows[0], null);
        }
    });
}

module.exports = {
	storeTHING: storethings
}

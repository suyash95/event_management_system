var cfg = require('../config');
var mysql = require('mysql');

var connection = mysql.createConnection(cfg.mysql);

function storeEvents(param, cb) {

    var query = "Insert into NOTICE values (?,?,?,?,?) "
        var val = ['', param.body.date, param.body.type, param.body.title, param.decoded.conductedby, param.body.summary];
   
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
	storedetails: storeEvents
}

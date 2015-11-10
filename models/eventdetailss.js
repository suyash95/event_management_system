var cfg = require('../config');
var mysql = require('mysql');

var connection = mysql.createConnection(cfg.mysql);

function storeEvents(param, cb) {

    var query = "Insert into eventdetails values (?,?,?,?,?) "
        var val = ['',param.body.event_id, param.body.type, param.body.type2, param.decoded.title, param.body.summary];
   
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

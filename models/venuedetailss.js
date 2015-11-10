var cfg = require('../config');
var mysql = require('mysql');

var connection = mysql.createConnection(cfg.mysql);

function storevenue(param, cb) {

    var query = "Insert into venue values (?,?,?,?) "
        var val = ['',param.body.venueid, param.body.name,param.body.date,param.body.address];
   
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
	storedetailss: storevenue
}

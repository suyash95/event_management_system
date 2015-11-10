var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var venuedetailss = require('../models/venuedetailss');

router.get('/',function(req,res,next) {
	res.render('venuedetails');
});

router.post('/', function (req, res, next) {
    // console.log(req.body);
    if (req.query.token || req.headers['x-access-token']) {
    	venuedetailss.storedetailss(req, function (err, notice) {
                        if (err) {
                            console.log("errrrrrrrr");
                            res.json({msg: err});
                        }
                        else {
                            res.json({msg: "uploaded successfully"});
                        }
                    });
                }
    else {
        res.json({msg: "token not valid or expired"});
    }
});

module.exports = router;
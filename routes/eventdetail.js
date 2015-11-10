var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var eventdetailss = require('../models/eventdetailss');

router.get('/',function(req,res,next) {
	res.render('eventdetail');
});

router.post('/', function (req, res, next) {
    // console.log(req.body);
    if (req.query.token || req.headers['x-access-token']) {
    	eventdetailss.storedetails(req, function (err, eventdetailss) {
                        if (err) {
                            console.log("errrrrrrrr");
                            res.json({msg: err});
                        }
                        else{
                            console('redirecting succesfully');
                        }
                    });
                }
    else {
        res.json({msg: "token not valid or expired"});
    }
});

module.exports = router;

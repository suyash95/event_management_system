var express = require('express');
var router = express.Router();
var eventdetails= require('../models/eventdetails');

/*router.post('/',function(req ,res ,next){
	res.render('eventdetail');
});*/

router.post('/', function (req, res, next) {
   console.log(req.query);
    if (req.query.token || req.headers['x-access-token']) {
    	eventdetails.storedetails(req, function (err, eventdetails) {
                        if (err) {
                            res.json({msg: err});
                        }
                        else {
                            console.log("Event", eventdetails)
                            res.json({msg: "submit successfully"});
                        }

        });
    }
    
    else
    {
    	 res.json({msg: "token not valid or expired"});
    }

});
module.exports = router;  


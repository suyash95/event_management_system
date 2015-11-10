var express = require('express');
var router = express.Router();
var participatess = require('../models/participatess');


router.get('/',function(req,res){
	res.render('participate');

});

router.post('/',function(req, res ,next) {
	participatess.storeTHING(req ,function(err ,participatess) {
		if(err){
			console.log('error occured');
		}
		else{
			console.log('submitted successfully');
		}
	});

});


module.exports = router;


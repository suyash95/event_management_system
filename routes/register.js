var express = require('express');
var router = express.Router();
var USER =require('../models/USER');
var crypto = require('crypto');

router.get('/',function(req,res){
	res.render('register');
});

router.post('/',function(req, res ,next) {
	USER.putUser(req ,function(err ,USER) {
		if(err){
			console.log('error occured');
		}
		else{
			res.render('index');
		}
	});

});

module.exports = router;

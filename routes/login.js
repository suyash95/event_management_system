var express =require('express');
var router =express.Router();
var USER = require('../models/USER');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');


router.get('/',function(req,res,next){
	res.render('login');
});

router.post('/',function(req , res ,next){
    //console.log(req);
var usrname = req.body.ID;
var passwrd = req.body.password;

crypto.pbkdf2(passwrd, 'Salt', 100, 30, function (err, key) {
        if (err) {
            //console.log(err); 
            next(err);
        }
        passwrd = key.toString('hex');
        console.log(passwrd);

        USER.getUser(usrname, passwrd, function (err,USER) {
            if (err) {
                res.json({error: err});
            }
            else{
                var token = jwt.sign(USER, "SUYASH",{
                    expiresInMinutes: 60
                });

                // return the information including token as JSON
                res.json({
                    success: true,
                    token: token
                });
            }
        });
    
    }); 
});

module.exports = router;



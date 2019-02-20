const express = require('express');
const router = express.Router();
const User = require('../models/user');


// GET route for reading data
router.get('/',  (req, res, next) =>  {
  User.find({}).then(users=> {
  res.send({users: users})
    
  })
});


//POST route for updating data
router.post('/', function (req, res, next) {
  
  // confirm that user typed same password twice
  if (req.body.password !== req.body.passwordConf) {
    const err = new Error('Passwords do not match.');
    err.status = 400;
    res.send("passwords dont match");
    return next(err);
  }

  if (req.body.email &&
    req.body.username &&
    req.body.password &&
    req.body.passwordConf) {

    const userData = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    }

    
    

    User.create(userData, function (error, user) {
  
      
       
      if (error) {
        return next(error);
      } else {   
        req.session.userId = user._id;
        console.log("req.session.userId",req.session.userId);
          return res.json({userData: userData, userId: req.session.userId})
      }
    });

  } else if (req.body.logemail && req.body.logpassword) {
    User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
      if (error || !user) {
        const err = new Error('Wrong email or password.');
        err.status = 401;
        return next(err);
      } else {
        req.session.userId = user._id;
        console.log("req.session.userId", req.session.userId);
        
        // return res.redirect('/profile');
      }
    });
  } else {
    const err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
})
module.exports = router;
const User = require('../models/user');

exports.register = (req, res, next) => {
    const { email, username, password } = req.body

    if (email && username && password) {
        const userData = { email, username, password }
        console.log("userData", userData);
        User.create(userData, (err, user) => {
            if (err) {
                console.log('err', err);
                
                return next(err);
            } else {
                console.log("userData", userData);
                
                req.session.userId = user._id;
                console.log('req.session.userId', req.session.userId);
                return res.json({ userData, userId: req.session.userId })
            }
        })

    } else {
        const err = new Error('All fields required.');
        err.status = 400;
        return next(err);
    }
}


exports.login = (req, res, next) => {
    const { username, password } = req.body
    if (username && password) {
        User.authenticate(username, password, (err, user) => {
            if (err || !user) {
                const err = new Error('Wrong email or password.');
                err.status = 401;
                return next(err);
            } else {
                req.session.userId = user._id;
                console.log('req.session.userId', req.session.userId);
                return res.json({ userData: {username: username}, userId: req.session.userId })
            }
        })
    } else {
        const err = new Error('All fields required.');
        err.status = 400;
        return next(err);
    }
}
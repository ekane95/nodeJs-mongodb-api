const User = require('../database/models/User')

module.exports = (req, res, next) => {

    // fetch user from db
    if (req.session.userId) {

        return res.redirect('/')
    
    }
    
    next()

}
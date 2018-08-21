const User = require('../database/models/User')

module.exports = (req, res, next) => {

    // fetch user from db
    User.findById( req.session.userId, (error, user) => {

        // verify user
            // if user is valid, permit request
            if ( error || !user ) {
                return res.redirect('/')
            }

        // if yes
            next()

    })


}
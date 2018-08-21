const bcrypt = require('bcrypt')
const User = require('../database/models/User')

module.exports = (req, res) => {
    
    const { email, password} = req.body

    //try to find the user by email
    User.findOne({ email }, (error, user) => {

        //if we find a user
        if ( user ) {
            //compare passwords.
            
            //password from frontend, hashed password from db, function
            bcrypt.compare( password, user.password, (error, same) => {
                if ( same ) {
                    req.session.userId = user.id
                    //store user session
                    res.redirect('/')
                } else {
                    //don't store user
                    res.redirect('/auth/login')
                }
            })
        //if we don't find the user
        } else {
            //don't store user
            res.redirect('/auth/login')
        }
    })

}
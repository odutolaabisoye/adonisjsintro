'use strict'

//const User = use('App/Models/User')
//const { validate } = use('Validator')
//const randomString = require('random-string')
//const Mail = use('Mail')

class RegisterController {

    showRegisterForm ({ view }){
        return view.render('auth.register')
    }

}

module.exports = RegisterController

const Users = require('../models/users_model')
const { hash_password, compare_passwoord } = require('../util/password_helper')

const createUser = ( request, response ) => {

    const { fullname, email, password } = request.body

    response.status(200).send(
        {
            users: {
                fullname,
                email,
                password
            }
        }
    )

}

const loginUser = ( request, response ) => {

    const { email, password } = request.body
    
    response.status(200).send(
        {
            users: {
                email,
                password
            }
        }
    )

}

module.exports = {
    createUser,
    loginUser
}
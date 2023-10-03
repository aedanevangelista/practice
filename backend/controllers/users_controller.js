const Users = require('../models/users_model')
const { hash_password, compare_passwoord } = require('../util/password_helper')

const createUser = async ( request, response ) => {

    const { fullname, email, confirm_password } = request.body

    if( !fullname, !email, !request.body.password ) return response.status(400).send(
        {
            message: "Fields are required"
        }
    )

    if( !fullname ) return response.status(400).send(
        {
            message: "Fullname is required"
        }
    )

    if( !email ) return response.status(400).send(
        {
            message: "Email is required"
        }
    )

    if( !request.body.password ) return response.status(400).send(
        {
            message: "Password is required"
        }
    )

    if( !confirm_password ) return response.status(400).send(
        {
            message: "Password is required"
        }
    )

    if( request.body.password !== confirm_password ) return response.status(400).send(
        {
            message: "Password is not matched"
        }
    )

    const userDb = await Users.findOne( { email } )

    if( userDb ) return response.status(409).send(
        {
            message: "This email is already registered"
        }
    )

    const password = hash_password(request.body.password)
    
    const newUser = await Users.create( { fullname, email, password } )

    newUser.save()

    response.status(201).send(
        {
            status: 'OK',
            message: "Registered Successfully"
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
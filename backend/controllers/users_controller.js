const jwt = require('jsonwebtoken')
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

    try {

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

    } catch ( err ) {

        response.status(500).send(
            {
                message: "An Unexpected Error Occured" + err
            }
        )

    }

}

const loginUser = async ( request, response ) => {

    const { email, password } = request.body

    if( !email, !password) return response.status(400).send(
        {
            message: "Fields are required"
        }
    )

    if( !email ) return response.status(400).send(
        {
            message: "Email is required"
        }
    )

    if( !password ) return response.status(400).send(
        {
            message: "Password is required"
        }
    )

    try {

        const userDb = await Users.findOne( { email } )

        if( !userDb ) return response.status(404).send(
            {
                message: "This user is not exist"
            }
        )
    
        const isValid = compare_passwoord( password, userDb.password )

        if( !isValid ) return response.status(409).send(
            {
                message: " Wrong Credentials"
            }
        )

        const values = {
            id: userDb._id,
            fullname: userDb.fullname,
            email: userDb.email
        }

        const token = jwt.sign( { values }, process.env.SECRET, { expiresIn: '7d' } )
    
        response.status(201).send(
            {
                status: 'OK',
                message: "Logged In Successfully",
                token
            }
        )

    } catch ( err ) {

        response.status(500).send(
            {
                message: "An Unexpected Error Occured" + err
            }
        )

    }

}

module.exports = {
    createUser,
    loginUser
}
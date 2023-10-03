const hash = require('bcryptjs')

const hash_password = ( password ) => {
    
    const salt = hash.genSaltSync()
    return hash.hashSync ( password )

}

const compare_passwoord = ( password, hashed_password ) => {

    return hash.compareSync ( password, hashed_password )

}

module.exports = {
    hash_password,
    compare_passwoord
}
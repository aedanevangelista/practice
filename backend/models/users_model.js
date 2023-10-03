const mongoose = require('mongoose')

const users = new mongoose.Schema(
    {
        fullname: {
            type: mongoose.SchemaTypes.String,
            required: true
        },
        email: {
            type: mongoose.SchemaTypes.String,
            required: true
        },
        password: {
            type: mongoose.SchemaTypes.String,
            required: true
        },
        createdAt: {
            type: mongoose.SchemaTypes.String,
            default: Date()
        }
    }
)

module.exports = mongoose.model('users', users)
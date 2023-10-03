const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO)
.then(() => console.log('Database is running'))
.catch( err => console.log(err))
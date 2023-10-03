// Packages
require('dotenv').config()
const express = require('express');
const formData = require('express-form-data')
const cors = require('cors')

require('./database/database')

// Routers
const userRoutes = require('./routes/users_route')

// Server Instance
PORT = process.env.PORT || 4000;

const app = express();
app.listen(PORT, `Server is running at port ${PORT}`)


// Middlewares
app.use(express.json())
app.use(formData.union())

// Route's Api
app.use('/api', userRoutes)
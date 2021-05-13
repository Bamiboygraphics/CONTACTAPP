// SET UP EXPRESS APP
const express = require('express');
const app = express();

// IMPORTS
require("dotenv").config()
const contactRoutes = require ('./routes/contactRoutes')
const dbSetup = require ('./database/setup')
const { PORT } = process.env;

// DB COONNECTION & SERVER
dbSetup ()


// MIDDLEWARE
app.use(express.json());
app.use(contactRoutes)    //USE ROUTES


//SET PORT
const port = process.env.PORT || PORT;

//APP LISTENS FOR REQUESTS
app.listen(port, () => console.log(`app is listening on port ${port}`))

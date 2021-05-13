// SET UP EXPRESS APP
const express = require('express');
const app = express();

// IMPORTS
require("dotenv").config()
const contactRoutes = require ('./routes/contactRoutes')
const dbSetup = require ('./database/setup')


// DB COONNECTION & SERVER
dbSetup ()


// MIDDLEWARE
app.use(express.json());
app.use(contactRoutes)    //USE ROUTES

app.get('/', (req, res) => {
    res
    .status(200)
    .send ("T")
})


//SET PORT
const PORT  = process.env.PORT;
const port = PORT|| PORT;

//APP LISTENS FOR REQUESTS
app.listen(port, () => console.log(`app is listening on port ${port}`))

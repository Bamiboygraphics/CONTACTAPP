// SET UP EXPRESS APP
const express = require('express');
const app = express();
app.use(express.json());

// DB COONNECTION & SERVER
const dbSetup = require ('./database/setup')
dbSetup ()

//USE ROUTES
const contactRoutes = require ('./routes/contactRoutes')
app.use(contactRoutes)


// EXPORTS
module.exports = app;
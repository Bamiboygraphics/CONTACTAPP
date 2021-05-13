// SET UP MONGOOSE & CONNECTIONS
const mongoose = require('mongoose');


// SET ENV variables in dotenv
const dotenv = require('dotenv').config();

const dbURI = `${process.env.dbURI}`;

// DB CONNECTIONS
const dbSetup = () => {
  mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((result) => console.log('Database connected'))
  .catch((err) => console.log(err));
}


//EXPORTS
module.exports = dbSetup
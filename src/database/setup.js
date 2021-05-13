// SET UP MONGOOSE & CONNECTIONS
const mongoose = require('mongoose');
const app = require('../app');



// SET ENV variables in dotenv
const dotenv = require('dotenv');
dotenv.config();

const dbURI = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

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

//SET PORT
const port = process.env.PORT || 5501;
//APP LISTENS FOR REQUESTS
app.listen(port, () => console.log(`app is listening on port ${port}`))


//EXPORTS
module.exports = dbSetup
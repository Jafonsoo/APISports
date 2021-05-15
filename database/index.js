// to use .env file variables
require("dotenv").config();

// import mongoose library
const mongoose = require('mongoose');

// connect to MongoDB
mongoose.connect(
  `mongodb+srv://user_admin123:useradmin123@cluster0.xwn7p.mongodb.net?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }
)
  .then(() => console.log(' Connected to successfully!'))
  .catch(err => console.log(err))

module.exports = mongoose;

const config = require('config.json');
require('dotenv').config();
const mongoose = require('mongoose');
const connectionOptions = { useNewUrlParser: true, useUnifiedTopology: true};
const connectionURL= process.env.MONGODB_URI;
//console.log(connectionURL)
mongoose.connect(process.env.MONGODB_URI || config.connectionString, connectionOptions);
mongoose.Promise = global.Promise;
 
module.exports = { 
    User: require('../users/users.model')
};
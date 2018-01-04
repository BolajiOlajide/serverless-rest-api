const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;
let isConnected;

module.exports = connectToDatabase = () => {
  if (isConnected) {
    console.log('=> using existing database connection');
    return Promise.resolve();
  }

  console.log('=> using new database connection');
  return mongoose.connect(process.env.DATABASE_URL)
    .then(db => { 
      isConnected = db.connections[0].readyState;
    });
};

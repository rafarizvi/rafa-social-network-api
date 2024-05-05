const { connect, connection, set } = require('mongoose');

// configuration for Mongoose deprecation warning
set('strictQuery', false);

const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialnetworkDB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;

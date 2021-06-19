const mongoose = require('mongoose');

const dbURL = 'mongodb://localhost:27017/user';

module.exports = function () {
  mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

  mongoose.connection.on('connected', function () {
    console.log('mongoose connection is started');
  });

  mongoose.connection.on('error', function (err) {
    console.log(
      error('Mongoose default connection has occured ' + err + ' error')
    );
  });

  mongoose.connection.on('disconnected', function () {
    console.log(disconnected('Mongoose default connection is disconnected'));
  });

  process.on('SIGINT', function () {
    mongoose.connection.close(function () {
      console.log(
        termination(
          'Mongoose default connection is disconnected due to application termination'
        )
      );
      process.exit(0);
    });
  });
};

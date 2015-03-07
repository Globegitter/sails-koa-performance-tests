var Waterline = require('waterline');
var mongo = require('sails-mongo');

var someMongoDb = {
  adapter: mongo,
  host: 'localhost', // defaults to `localhost` if omitted
  port: 27017, // defaults to 27017 if omitted
  // user: 'username_here', // or omit if not relevant
  // password: 'password._here', // or omit if not relevant
  // database: 'db' // or omit if not relevant
};

// Define your collection (aka model)
var User = Waterline.Collection.extend({

  adapter: someMongoDb,

  attributes: {

    firstName: {
      type: 'string',
      required: true
    },

    lastName: {
      type: 'string',
      required: true,
    }
  }
});

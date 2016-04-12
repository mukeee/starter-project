/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Gaming Consoles',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Arcade Machines',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Dart Machines',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Gaming Computers',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Billiard Tables',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Table Football',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  },

  { provider: 'local',
    role: 'User',
    name: 'Damir',
    email: 'damir@aubih.edu',
    password: 'damir',
    },
    { provider: 'local',
      role: 'User',
      name: 'Emir',
      email: 'emir@aubih.edu',
      password: 'emir',
      },
      { provider: 'local',
        role: 'User',
        name: 'Amra',
        email: 'amra@aubih.edu',
        password: 'amra',
        },
        { provider: 'local',
          role: 'User',
          name: 'Adi',
          email: 'adi@aubih.edu',
          password: 'adi',
          },

  {  provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});

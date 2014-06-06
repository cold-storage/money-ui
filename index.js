#!/usr/bin/env node

var Hapi = require('hapi');
var money = require('money');
money.connect(process.env.MONEY_DB,
  process.env.MONEY_DB_USERNAME,
  process.env.MONEY_DB_PASSWORD, {
    dialect: "mysql",
    port: 3306,
    logging: false
  })
  .then(function() {
    console.log('connected to money . . .');
    server.start();
  });

var options = {
  views: {
    path: 'templates',
    partialsPath: 'partials',
    helpersPath: 'helpers',
    layout: 'layout',
    engines: {
      hbs: 'handlebars'
    }
  }
};

var server = Hapi.createServer('localhost', 8000, options);

var hello = {
  handler: function(request, reply) {
    money.Tran.findAll()
      .then(function(trans) {
        reply.view('index', {
          trans: trans
        });
      });
  }
};

server.route({
  method: 'GET',
  path: '/',
  handler: hello.handler
});

server.route({
  method: 'GET',
  path: '/{path*}',
  handler: {
    directory: {
      path: './pub',
      listing: false,
      index: false
    }
  }
});

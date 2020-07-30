'use strict';
// The fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.
var fs        = require('fs');
//The Path module provides a way of working with directories and file paths.
var path      = require('path');
//Sequelize is a promise-based ORM for Node.js. It works with PostgreSQL, MySQL, SQLite and MSSQL dialects and features solid transaction support, relations, read replication and more.
var Sequelize = require('sequelize');
// The path.basename() method returns the filename part of a file path.
var basename  = path.basename(module.filename);
//the Express web server framework popularized using an environment variable called NODE_ENV as a flag to indicate whether 
//the server should be running in “development” mode vs “production” mode. At runtime, the script looks up that value by checking process.env.NODE_ENV.
var env       = process.env.NODE_ENV || 'development';
// Config calls the dependencies from the configuration file
var config    = require(__dirname + '/../config/config.json')[env];
var db        = {};

if (config.use_env_variable) { // if config use environment variable 
  var sequelize = new Sequelize(process.env[config.use_env_variable]); // a new instance from Sequelize is created with the env variables
} else { // a new instance from sequelize is created with the config variables from config.json
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

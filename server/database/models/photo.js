var Sequelize = require('sequelize');
var db = require('../database_config.js');

var photo = db.define('photo', {
  info: Sequelize.STRING,
  url: Sequelize.STRNG
});


module.exports = photo;
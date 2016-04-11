'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UnitsSchema = new Schema({
  name: String,
  info: String,
  description: String,
  unitOwner: String,
  unitNumber: String,
  clientName: String,
  active: Boolean


});

module.exports = mongoose.model('Units', UnitsSchema);

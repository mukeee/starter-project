'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var machineSchema = new Schema({
  name: String,
  info: String,
  description: String,
  machineOwner: String,
  machineNumber: String,
  clientName: String,
  active: Boolean
});

module.exports = mongoose.model('machine', machineSchema);

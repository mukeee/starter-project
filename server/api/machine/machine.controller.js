'use strict';

var _ = require('lodash');
var machine = require('./machine.model');

// Get list of machines
exports.index = function(req, res) {
  machine.find(function (err, machines) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(machines);
  });
};

// Get a single machine
exports.show = function(req, res) {
  machine.findById(req.params.id, function (err, machine) {
    if(err) { return handleError(res, err); }
    if(!machine) { return res.status(404).send('Not Found'); }
    return res.json(machine);
  });
};

// Creates a new machine in the DB.
exports.create = function(req, res) {
  machine.create(req.body, function(err, machine) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(machine);
  });
};

// Updates an existing machine in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  machine.findById(req.params.id, function (err, machine) {
    if (err) { return handleError(res, err); }
    if(!machine) { return res.status(404).send('Not Found'); }
    var updated = _.merge(machine, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(machine);
    });
  });
};

// Deletes a machine from the DB.
exports.destroy = function(req, res) {
  machine.findById(req.params.id, function (err, machine) {
    if(err) { return handleError(res, err); }
    if(!machine) { return res.status(404).send('Not Found'); }
    machine.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}

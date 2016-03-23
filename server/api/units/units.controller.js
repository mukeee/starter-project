'use strict';

var _ = require('lodash');
var Units = require('./units.model');

// Get list of unitss
exports.index = function(req, res) {
  Units.find(function (err, unitss) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(unitss);
  });
};

// Get a single units
exports.show = function(req, res) {
  Units.findById(req.params.id, function (err, units) {
    if(err) { return handleError(res, err); }
    if(!units) { return res.status(404).send('Not Found'); }
    return res.json(units);
  });
};

// Creates a new units in the DB.
exports.create = function(req, res) {
  Units.create(req.body, function(err, units) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(units);
  });
};

// Updates an existing units in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Units.findById(req.params.id, function (err, units) {
    if (err) { return handleError(res, err); }
    if(!units) { return res.status(404).send('Not Found'); }
    var updated = _.merge(units, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(units);
    });
  });
};

// Deletes a units from the DB.
exports.destroy = function(req, res) {
  Units.findById(req.params.id, function (err, units) {
    if(err) { return handleError(res, err); }
    if(!units) { return res.status(404).send('Not Found'); }
    units.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
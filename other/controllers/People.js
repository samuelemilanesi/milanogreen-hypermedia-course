'use strict';

var utils = require('../utils/writer.js');
var People = require('../service/PeopleService');

module.exports.peopleGET = function peopleGET (req, res, next) {
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  People.peopleGET(limit,offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.peoplePeopleIdGET = function peoplePeopleIdGET (req, res, next) {
  var peopleId = req.swagger.params['peopleId'].value;
  People.peoplePeopleIdGET(peopleId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.peoplePeopleIdRelated_eventsGET = function peoplePeopleIdRelated_eventsGET (req, res, next) {
  var peopleId = req.swagger.params['peopleId'].value;
  People.peoplePeopleIdRelated_eventsGET(peopleId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.peoplePeopleIdRelated_servicesGET = function peoplePeopleIdRelated_servicesGET (req, res, next) {
  var peopleId = req.swagger.params['peopleId'].value;
  People.peoplePeopleIdRelated_servicesGET(peopleId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

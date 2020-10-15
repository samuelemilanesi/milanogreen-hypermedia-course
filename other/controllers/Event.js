'use strict';

var utils = require('../utils/writer.js');
var Event = require('../service/EventService');

module.exports.eventEventIdGET = function eventEventIdGET (req, res, next) {
  var eventId = req.swagger.params['eventId'].value;
  Event.eventEventIdGET(eventId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventEventIdRelated_servicesGET = function eventEventIdRelated_servicesGET (req, res, next) {
  var eventId = req.swagger.params['eventId'].value;
  Event.eventEventIdRelated_servicesGET(eventId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsGET = function eventsGET (req, res, next) {
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  Event.eventsGET(limit,offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

'use strict';

var utils = require('../utils/writer.js');
var Service = require('../service/ServiceService');

module.exports.serviceGET = function serviceGET (req, res, next) {
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  Service.serviceGET(limit,offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serviceServiceIdGET = function serviceServiceIdGET (req, res, next) {
  var serviceId = req.swagger.params['serviceId'].value;
  Service.serviceServiceIdGET(serviceId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serviceServiceIdRelated_eventsGET = function serviceServiceIdRelated_eventsGET (req, res, next) {
  var serviceId = req.swagger.params['serviceId'].value;
  Service.serviceServiceIdRelated_eventsGET(serviceId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serviceServiceIdRelated_peopleGET = function serviceServiceIdRelated_peopleGET (req, res, next) {
  var serviceId = req.swagger.params['serviceId'].value;
  Service.serviceServiceIdRelated_peopleGET(serviceId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

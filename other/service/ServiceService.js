'use strict';

let sqlDb;

exports.servicesDbSetup = function (connection) {
  sqlDb = connection;
  return sqlDb.schema.hasTable("services").then((exists) => {
    if (!exists) {
      console.log("does not exist");
      return sqlDb.schema.createTable("services", table => {
        table.increments();
        table.text("title");
        table.text("description");
        table.text("image");
     // ALTROOOO???
      });
    } else {
      console.log("Ho agganciato la tabella servizi");
    }
  });
};

/**
 * Service of MilanoGreen association
 * All the specific Services provided by the Association MilanoGreen, they are characterized by a title and a description. Moreover, they have related Events and People in charge of them.
 *
 * limit Integer Maximum number of displayable Services per page (optional)
 * offset Integer Pagination offset, default is 0 (optional)
 * returns List
 **/
exports.serviceGET = function(limit,offset) {
  return sqlDb("services")
    .limit(limit)
    .offset(offset)
    .then(data => {
      return data;
    });
}



/**
 * Find the Service by its ID (identifier)
 * Returns one of the specific 6 services, allows us to access a page of the specific service
 *
 * serviceId Long ID of service to be returned
 * returns Service
 **/
exports.serviceServiceIdGET = function(serviceId) {
  return sqlDb("services")
  .where({'serviceid': serviceId})
  .then(data => {
    return data;
  });
}



/**
 * Connect Service to its Events
 * Get the events related to a service
 *
 * serviceId Long ID of the service
 * returns Event
 **/
exports.serviceServiceIdRelated_eventsGET = function(serviceId) {
  return sqlDb
    .select('*')
    .from('services')
    .join('service_event', 'services.serviceid', '=', 'service_event.serviceid')
    .join('events', 'events.eventid', '=', 'service_event.eventid')
    .where({'services.serviceid': serviceId})
    .then(data => {
      return data;
    });
}
  

/**
 * Connect Service to its People
 * Get the people related to a service
 *
 * serviceId Long ID of the service
 * returns People
 **/
exports.serviceServiceIdRelated_peopleGET = function(serviceId) {
  return sqlDb
    .select('*')
    .from('services')
    .join('service_person', 'services.serviceid', '=', 'service_person.serviceid')
    .join('people', 'people.personid', '=', 'service_person.personid')
    .where({'services.serviceid': serviceId})
    .then(data => {
      return data;
    });
}

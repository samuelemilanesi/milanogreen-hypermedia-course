'use strict';

let sqlDb;

exports.eventsDbSetup = function (connection) {
  sqlDb = connection;
  return sqlDb.schema.hasTable("events").then((exists) => {
    if (!exists) {
      console.log("non esiste tabella eventi");
      return sqlDb.schema.createTable("events", table => {
        table.increments();
        table.text("name");
        table.text("date");
        table.text("month");
        table.text("address"); //aggiunta non so se manca nell api
        table.text("description");
        table.text("image");
        table.text("icon");
        table.text("contact_id");
        table.text("timestamp");
      });
    } else {
      console.log("Ho agganciato la tabella eventi");
    }
  });
};

/**
 * Find the event by its ID (identifier)
 * Returns an event, allows us to access a page of the specific event
 *
 * eventId Long ID of event to be returned
 * returns Event
 **/
exports.eventEventIdGET = function (eventId) {
  return sqlDb("events")
    .where({'eventid': eventId})
    .then(data => {
      return data;
    });
}
/**
 * Connect Event to its Services
 * Get the Services related to an Event
 *
 * eventId Long ID of the event
 * returns Service
 **/
exports.eventEventIdRelated_servicesGET = function(eventId) {
  return sqlDb
    .select('*')
    .from('events')
    .join('service_event', 'events.eventid', '=', 'service_event.eventid')
    .join('services', 'services.serviceid', '=', 'service_event.serviceid')
    .where({'events.eventid': eventId})
    .then(data => {
      return data;
    });
}

/**
 * Events organized by MilanoGreen
 * All the Events organized by the association, will specify the date of the event (including the month), the specific Service to which they are associated and the Person who is in charge of the organization of the Event.
 *
 * limit Integer Maximum number of displayable Events per page (optional)
 * offset Integer Pagination offset, default is 0 (optional)
 * returns List
 **/
exports.eventsGET = function (limit, offset) {
  return sqlDb("events")
    .limit(limit)
    .offset(offset)
    .then(data => {
      return data;
    });
}


'use strict';
let sqlDb;

exports.peopleDbSetup = function (connection) {

  sqlDb = connection;
  return sqlDb.schema.hasTable("people").then((exists) => {
    if (!exists) {
      console.log("does not exist");
      return sqlDb.schema.createTable("events", table => {
        table.increments();
        table.text("name");
        table.text("image");
        table.text("role");
        table.text("motto");
        table.text("email");
        table.text("phone");
      });
    } else {
      console.log("Ho agganciato la tabella people");
    }
  });
};


/**
 * Staff of MilanoGreen
 * All the people working in the Staff of MilanoGreen. This will specify their Name and Surname, role in the Association, their Motto and information contacts, consisting in both e-mail address and mobile phone number.
 *
 * limit Integer Maximum number of displayable People per page (optional)
 * offset Integer Pagination offset, default is 0 (optional)
 * returns List
 **/
exports.peopleGET = function (limit, offset) {
  return sqlDb("people")
    .limit(limit)
    .offset(offset)
    .then(data => {
      return data;
    });
}


/**
 * Find the Person by her ID (identifier)
 * Returns a person, allows us to access a page of the specific profile
 *
 * peopleId Long ID of person to be returned
 * returns People
 **/
exports.peoplePeopleIdGET = function(peopleId) {
    return sqlDb("people")
      .where({'personid': peopleId})
      .then(data => {
        return data;
      });
  }


/**
 * Connect Person to its Events
 * Get the events related to a person
 *
 * peopleId Long ID of the person
 * returns Event
 **/
exports.peoplePeopleIdRelated_eventsGET = function(peopleId) {
  return sqlDb
    .select('*')
    .from('events')
    .where({'events.contact_id': peopleId})
    .then(data => {
      return data;
    });
}
  

/**
 * Connect Person to its Services
 * Get the services related to a person
 *
 * peopleId Long ID of the person
 * returns Service
 **/
exports.peoplePeopleIdRelated_servicesGET = function(peopleId) {
  return sqlDb
    .select('*')
    .from('people')
    .join('service_person', 'people.personid', '=', 'service_person.personid')
    .join('services', 'services.serviceid', '=', 'service_person.serviceid')
    .where({'people.personid': peopleId})
    .then(data => {
      return data;
    });
}
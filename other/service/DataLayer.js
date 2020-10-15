const sqlDbFactory = require("knex");

let { eventsDbSetup } = require("./EventService");
let { servicesDbSetup } = require("./ServiceService");
let { peopleDbSetup } = require("./PeopleService");

let sqlDb = sqlDbFactory({
  debug: true,
  client: "pg",
  connection: process.env.DATABASE_URL,
  ssl: true
});

function setupDataLayer() {
  console.log("Setting up data layer");
  return eventsDbSetup(sqlDb).then(peopleDbSetup(sqlDb)).then(servicesDbSetup(sqlDb));
}

module.exports = { database: sqlDb, setupDataLayer };


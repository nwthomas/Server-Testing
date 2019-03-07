const knex = require("knex");
const config = require("../knexfile.js");

const dbEnv = process.env.EB_ENV || "development";

module.exports = kenx(config[dbEnv]);

exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();
    tbl.string("username", 128);
    tbl.string("password", 256);
    tbl.unique("username", "uq_user_username");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};

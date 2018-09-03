exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('users', (jobTable)=>{
    //primary key
    jobTable.increments()

    //Fields
    jobTable.string('email').notNullable()
    jobTable.string('password').notNullable()

    return jobTable
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};

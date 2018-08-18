
exports.up = function(knex, Promise) {

  return knex
    .schema
    .createTable('jobs', (jobsTable)=>{
       jobsTable.increments();

        jobsTable.string('title')
        jobsTable.text('description')
        jobsTable.string('location')
        jobsTable.integer('salary')
        jobsTable.boolean('full_time')

        return jobsTable
    })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('jobs')
};

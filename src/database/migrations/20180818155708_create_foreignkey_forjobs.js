
exports.up = function(knex, Promise) {
   return knex.schema.table('jobs', (jobsTable)=>{
     jobsTable.integer('company_id')
       .unsigned()
       .references('id')
       .inTable('companies')

       return jobsTable
   })
};

exports.down = function(knex, Promise) {
   return knex.schema.table('jobs', (jobsTable)=>{
     jobsTable.dropForeign('company_id')
     jobsTable.dropColumn('company_id')

     return jobsTable
   })
};

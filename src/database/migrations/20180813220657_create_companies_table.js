
exports.up = function(knex, Promise) {

  return knex
    .schema
    .createTable('companies', (companiesTable)=>{
      companiesTable.increments();

      companiesTable.string('name')
      companiesTable.text('description')
      companiesTable.string('location')
      companiesTable.string('image_link')

      return companiesTable

  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('companies')
};

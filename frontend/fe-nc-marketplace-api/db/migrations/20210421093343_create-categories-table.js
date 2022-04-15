exports.up = function (knex) {
  return knex.schema.createTable('categories', (categoriesTable) => {
    categoriesTable.string('category_name').primary();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('categories');
};

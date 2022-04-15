exports.up = function (knex) {
  return knex.schema.createTable('items', (itemsTable) => {
    itemsTable.increments('item_id').primary();
    itemsTable.string('item_name').notNullable();
    itemsTable.string('description', 500);
    itemsTable.text('img_url').notNullable();
    itemsTable.integer('price').notNullable();
    itemsTable.string('category_name').references('categories.category_name');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('items');
};

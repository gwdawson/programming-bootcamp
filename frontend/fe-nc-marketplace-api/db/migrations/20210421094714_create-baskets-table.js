exports.up = function (knex) {
  return knex.schema.createTable('baskets', (basketsTable) => {
    basketsTable.increments('basket_id').primary();
    basketsTable
      .string('username')
      .references('users.username')
      .notNullable()
      .onUpdate('CASCADE');
    basketsTable
      .integer('item_id')
      .references('items.item_id')
      .notNullable()
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('baskets');
};

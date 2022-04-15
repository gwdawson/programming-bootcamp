exports.up = function (knex) {
  return knex.schema.createTable('orders', (ordersTable) => {
    ordersTable.increments('order_id').primary();
    ordersTable
      .string('username')
      .references('users.username')
      .notNullable()
      .onUpdate('CASCADE');
    ordersTable
      .integer('item_id')
      .references('items.item_id')
      .notNullable()
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('orders');
};

exports.up = (knex) => {
    return knex.schema.createTable('users_events', table => {
      table.increments('id')
      table.integer('user_id')
      table.integer('event_id')
    })
  }
  
  exports.down = (knex) => {
    return knex.schema.dropTable('users_events')
  }
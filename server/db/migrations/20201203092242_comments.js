exports.up = (knex) => {
    return knex.schema.createTable('comments', table => {
      table.increments('id')
      table.string('username')
      table.string('comment')
      table.integer('event_id')
    })
  }
  
  exports.down = (knex) => {
    return knex.schema.dropTable('comments')
  }
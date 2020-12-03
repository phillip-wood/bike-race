exports.up = (knex) => {
    return knex.schema.createTable('events', table => {
      table.increments('id')
      table.string('eventName')
      table.string('description')
      table.string('startPoint')
      table.string('endPoint')
      table.integer('startTime')
      table.integer('maxGroupSize')
      table.string('distance')
      table.integer('creator_id')
    })
  }
  
  exports.down = (knex) => {
    return knex.schema.dropTable('events')
  }
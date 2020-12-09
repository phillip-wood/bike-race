exports.up = (knex) => {
    return knex.schema.createTable('users', table => {
      table.increments('id')
      table.string('username')
      table.string('email')
      table.text('imgURL')
      table.integer('eventsAttended')
      table.string('bikeType')
      table.string('hash')
      table.text('token')
    })
  }
  
  exports.down = (knex) => {
    return knex.schema.dropTable('users')
  }
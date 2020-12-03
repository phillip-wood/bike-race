exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {id: 1, 
        eventName: 'Pedle to the pub', 
        description: 'fun race to the pub', 
        startPoint: '[-41.2970, 174.7739]', 
        endPoint: '[-41.2938, 174.7840]',  
        startTime: '1607706000', 
        maxGroupSize: 5, 
        distance: '15', 
        creator_id: 1  }
        ])
    })
}

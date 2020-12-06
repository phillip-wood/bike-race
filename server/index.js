if(!process.env.NODE_ENV || process.env.NODE_ENV === 'development'){
  const result = require('dotenv').config()
  if(result.error)throw result.error
}

const server = require('./server')

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log('Server listening on port', PORT)
})

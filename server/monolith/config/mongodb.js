const { MongoClient } = require('mongodb')

let database = null

function connectToMongoDb(cb) {

  const uri = 'mongodb://localhost:27017'

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  client.connect()
    .then(_ => {
      cb(true)
      database = client.db('test')
    })
    .catch(err => {
      console.log(err)
      cb(false)
    })
}

function getDatabase() {
  return database
}


module.exports = {
  connectToMongoDb,
  getDatabase
}
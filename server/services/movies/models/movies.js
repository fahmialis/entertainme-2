const { ObjectId } = require('mongodb')
const { getDatabase } = require('../config/mongodb')

class Movies {
  static create (data) {
    return getDatabase().collection('movies').insertOne(data)
  }

  static findAll() {
    return getDatabase().collection('movies').find().toArray()
  }

  static findById(id) {
    return getDatabase().collection('movies').findOne({
      _id: ObjectId(id)
    })
  }

  static updateOne(id, data) {
    return getDatabase().collection('movies').update({_id: ObjectId(id)}, {$set: data})
  }

  static destroy (id) {
    return getDatabase().collection('movies').deleteOne({
      _id: ObjectId(id)
    })
  }

}

module.exports = Movies
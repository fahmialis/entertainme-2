const { ObjectId } = require('mongodb')
const { getDatabase } = require('../config/mongodb')

class User {
  static create (data) {
    return getDatabase().collection('users').insertOne(data)
  }

  static findAll() {
    return getDatabase().collection('users').find().toArray()
  }

  static findById(id) {
    return getDatabase().collection('users').findOne({
      _id: ObjectId(id)
    })
  }

  static updateOne(id, data) {
    return getDatabase().collection('users').update({_id: ObjectId(id)}, {data})
  }

  static destroy (id) {
    return getDatabase().collection('users').deleteOne({
      _id: ObjectId(id)
    })
  }

}

module.exports = User
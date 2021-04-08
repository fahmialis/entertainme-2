const { ObjectId } = require('mongodb')
const { getDatabase } = require('../config/mongodb')

class Series {
  static create (data) {
    return getDatabase().collection('series').insertOne(data)
  }

  static findAll() {
    return getDatabase().collection('series').find().toArray()
  }

  static findById(id) {
    return getDatabase().collection('series').findOne({
      _id: ObjectId(id)
    })
  }

  static updateOne(id, data) {
    return getDatabase().collection('series').update({_id: ObjectId(id)}, {data})
  }

  static destroy (id) {
    return getDatabase().collection('series').deleteOne({
      _id: ObjectId(id)
    })
  }

}

module.exports = Series
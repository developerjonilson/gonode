const moongose = require('mongoose')

const Purchase = new moongose.Schema({
  content: {
    type: String,
    required: true
  },
  user: {
    type: moongose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  ad: {
    type: moongose.Schema.Types.ObjectId,
    ref: 'Ad',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = moongose.model('Purchase', Purchase)

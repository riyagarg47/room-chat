const mongoose = require('mongoose')

const Schema = mongoose.Schema

let chatSchema = new Schema({

  chatId: { type: String, unique: true, required: true },
  senderName: { type: String, default: '' },
  message: { type: String, default: '' },
  chatRoom: { type: String, default: '' },
  createdOn: { type: Date, default: Date.now }
})

mongoose.model('Chat', chatSchema)

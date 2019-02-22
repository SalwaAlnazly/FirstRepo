const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    userId: {
        type: String
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: String
    }
},
 {
  timestamps: true
 });

const Message = mongoose.model('Message', MessageSchema);
module.exports = Message


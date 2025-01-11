const mongoose = require('mongoose');

const RecordModelSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    default: "NA"
  },
  label: {
    type: String,
    default: "inbox"
  },
  date: {
    type: Date,
    default: () => new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })
  }, 
  msg: {
    type: String,
    required: false
  }
});

const RecordModel = mongoose.model('Record', RecordModelSchema);

module.exports = RecordModel;

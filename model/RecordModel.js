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
    default: "new"
  },
  date: {
    type: Date,
    default: Date.now 
  }, 
  msg: {
    type: String,
    required: false
  }
});

const RecordModel = mongoose.model('Record', RecordModelSchema);

module.exports = RecordModel;

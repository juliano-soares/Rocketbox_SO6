const mongoose = require('mongoose');

const File = new mongoose.Schema({
  titles: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
},{
  timestamps: true,
});

module.exports = mongoose.model('File', File);
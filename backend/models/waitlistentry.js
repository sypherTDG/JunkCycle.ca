const mongoose = require('mongoose');

const WaitlistEntrySchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  role: String,
  province: String,
  city: String,
  email: String,
  phone: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('WaitlistEntry', WaitlistEntrySchema);
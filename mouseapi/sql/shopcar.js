const mongoose = require('./db');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  user: { type: String },
  carts: { type: Array }
});

module.exports = mongoose.model('shopcart', UserSchema);
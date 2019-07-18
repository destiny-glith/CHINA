const mongoose=require('./db');

const Schema=mongoose.Schema;

const UserSchema=new Schema({
  data: {tyepe: Array}
});

module.exports = mongoose.model('share',UserSchema);
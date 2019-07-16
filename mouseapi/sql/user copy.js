const mongoose=require('./db');

const Schema=mongoose.Schema;

const UserSchema=new Schema({
    username: { type: String },
  password: { type: String },
  age: { type: Number },
  tel: { type: String },
  sex: { type: String },
  lesson: { type: String },
  city: { type: String }
});

module.exports=mongoose.model('user',UserSchema);
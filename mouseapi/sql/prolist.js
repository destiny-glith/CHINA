const mongoose=require('./db');

const Schema=mongoose.Schema;

const UserSchema=new Schema({
  alias: { type: String },
  id: { type: Number },
  marketPrice: { type: String },
  matchPrice: { type: String },
  productId: { type: String },
  productName: { type: String },
  thumbUrl: { type: String }
});

module.exports=mongoose.model('prolist',UserSchema);
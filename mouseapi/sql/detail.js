const mongoose=require('./db');

const Schema=mongoose.Schema;

const UserSchema=new Schema({
    productId: {
      type: Number
    },
});

module.exports=mongoose.model('detail',UserSchema);
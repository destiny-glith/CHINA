const mongoose=require('mongoose'); //引入模块
const DB_URL ='mongodb://localhost:27017/mouse'; //链接地址

mongoose.connect(DB_URL,{ useNewUrlParser: true })

mongoose.connection.on('connected',()=> console.log('数据链接成功'));

mongoose.connection.on('disconnected',()=> console.log('数据断开链接'));

mongoose.connection.on('error',()=> console.log('数据连接错误'));

module.exports=mongoose;


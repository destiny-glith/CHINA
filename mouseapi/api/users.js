var express = require('express');
var router = express.Router();
var Prolist = require('./../sql/prolist') // 连接prolist集合
var Kind = require('./../sql/kind') // 连接kind集合
var Admin = require('./../sql/admin') // 连接kind集合
var Shouye = require('./../sql/shouye') // 连接kind集合
var Sql = require('./../sql/index') //分装的东西


/* GET users listing. */
router.get('/getlist', function (req, res, next) { // http://localhost:8000/getlist
  Sql.find(Prolist, {}, { _id: 0 }).then((data) => {
    res.send(data)
  })
});
router.get('/getindexss', function (req, res, next) { // http://localhost:8000/getlist
  Sql.find(Shouye, {}, { _id: 0 }).then((data) => {
    res.send(data)
  })
});
router.get('/getkind', function (req, res, next) { // http://localhost:8000/getkind
  Sql.find(Kind, {}, { _id: 0 }).then((data) => {
    res.send(data)
  })
});
// router.get('/detail', function (req, res, next) {
//   Sql.find(Prolist, req.query, { _id: 0 }).then((data) => {
//     res.send(data)
//   })
// });
router.get('/cplist', function (req, res, next) {  // http://localhost:8000/cplist?count=5&pageNum=1 proli列表
  let { pageNum, count } = req.query;
  pageNum = pageNum * 1 || 1 //如果有pageNum就pageNum，如果没有就是1
  count = count * 1 || 5
  Sql.paging(Prolist, {}, { _id: 0, }, count, pageNum).then((data) => {
    res.send(data)
  })
});

router.get('/login', function (req, res, next) { // 登录 http://localhost:8000/login?username=18895396967&password=123456
  let { username, password } = req.query;
  // console.log(username);

  var flag = false;
  let pwd = ''
  Sql.find(Admin, {}, { _id: 0 }).then((data) => {
    for (let a = 0; a < data.length; a++) {
      // console.log(data[a].username)
      if (data[a].username === username) {
        flag = true;
        pwd = data[a].password;
      }
    }
    if (flag) {
      if (pwd === password) {
        res.send("1") // 登录成功
      } else {
        res.send("2") //密码错误
      }
    } else {
      res.send("0") //不存在
    }
  })
});
router.get('/register', function (req, res, next) { // 注册 http://localhost:8000/register?username=18895396967&password=123456
  let { username, passwword } = req.query;
  Sql.find(Admin, { username }, { _id: 0 }).then(data => {
    if (data.length === 0) {
      Sql.insert(Admin, req.query).then(data => {
        res.send('1') // 注册成功
      })
    } else {
      res.send('0') // 已经被注册
    }
  })
});
router.get('/update', function (req, res, next) { // 修改密码 /login?username=18895396967&oldpwd=11&newpwd=222
  let { username, oldpwd, newpwd } = req.query;
  console.log(req.query);

  let sqlpwd = ''
  let flag = false
  Sql.find(Admin, { username }, { _id: 0 }).then(data => {
    for (let a = 0; a < data.length; a++) {
      if (data[a].username === username) {
        sqlpwd = data[a].password;
        flag = true
      }
    }
    if (flag) {
      if (sqlpwd === oldpwd) {
        if (sqlpwd === newpwd) {
          res.send('3') // 新密码与旧密码不能相同
        } else {
          Sql.update(Admin, { username: username }, { $set: { password: newpwd } }).then(data => {
            res.send('1') // 修改成功
          })
        }
      } else {
        res.send('2') // 旧密码不对
      }
    } else {
      res.send('0') // 用户名不存在
    }
  })
});
router.post('/findpwd', function (req, res, next) { // /findpwd post username=123 newpwd=1232121
  let { username, newpwd } = req.body;
  Sql.update(Admin, { username: username }, { $set: { password: newpwd } }).then(data => {
    res.send('1') // 修改成功
  })
})

router.post('/verify', function (req, res, next) { // /verify post username=123
  let { username } = req.body;
  Sql.find(Admin, { username: username }, { _id: 0 }).then(data => {
    if (data.length === 0) {
      res.send('0') //代表改用户不存在
    } else {
      res.send('1') // 该用户存在
    }
  })
})
module.exports = router;

var express = require('express');
var app = express();
var remove = require('./index');
var router = express.Router();
var router1 = express.Router();
var router2 = express.Router();
router1.get('/info', function (req, res) {
  res.send('user/info');
});
router.get('/info', function (req, res) {
  res.send('info');
});
router2.get('/info', function (req, res) {
  res.send('list/info');
});
router.use('/user', router1)
router.use('/list', router2)
app.use('/', router)
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
remove(app, '/user/info');